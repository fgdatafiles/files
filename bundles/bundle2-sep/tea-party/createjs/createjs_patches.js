/**
 * ...
 * @author Mike V
 */

(function() {
	// Monkey Patch for LoadQueue._cleanLoadItem to handle crashes when loading the same audio file twice
	// see https://github.com/CreateJS/PreloadJS/pull/222
	
	/**
	 * Remove unneeded references from a loader.
	 *
	 * @param loader
	 * @private
	 */
	var _cleanLoadItem = function(loader) {
		var item = loader.getItem();
		loader.removeAllEventListeners();
		if (item) {
			delete item._loader;
		}
	};
	
	createjs.LoadQueue.prototype._cleanLoadItem = _cleanLoadItem;
	
	// This patch alters the Sound plugin to return false to the PreloadJS code instead of
	// the loader object if the sound is already registered with SoundJS.
	// Apparently sending the custom loader back to PreloadJS simply causes it to be loaded again,
	// which generates unneeded AudioBuffer allocation.
	var register = function (loadItem) {
		//console.log(`register called on ${loadItem.src}`);
		var loader = this._loaders[loadItem.src];
		if(loader && !loader.canceled) {
			//console.log(`register says already loaded ${loadItem.src} so returning false`);
			return false;
			/*return this._loaders[loadItem.src];*/}	// already loading/loaded this, so don't load twice
		// OJR potential issue that we won't be firing loaded event, might need to trigger if this is already loaded?
		this._audioSources[loadItem.src] = true;
		this._soundInstances[loadItem.src] = [];
		//console.log(`loader being created for ${loadItem.src}`);
		loader = new this._loaderClass(loadItem);
		loader.on("complete", this._handlePreloadComplete, this);
		this._loaders[loadItem.src] = loader;
		return loader;
	};
	
    createjs.AbstractPlugin.prototype.register = register;

    var _webAudioCleanUpPatch = function () {
        if (this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
        }
        if (this.gainNode != null) {
            if (this.gainNode.numberOfOutputs != 0) { this.gainNode.disconnect(0); }
            // OJR there appears to be a bug that this doesn't always work in webkit (Chrome and Safari). According to the documentation, this should work.
        }

        clearTimeout(this._soundCompleteTimeout);

        this._playbackStartTime = 0;	// This is used by _getPosition
    }

    createjs.WebAudioSoundInstance.prototype._handleCleanUp = _webAudioCleanUpPatch;

    var _webAudioDestroyPatch = function () {
        this.AbstractSoundInstance_destroy();
        if (this.panNode != null) {
            this.panNode.disconnect(0);
            this.panNode = null;
        }        
        if (this.gainNode != null) {
            this.gainNode.disconnect(0);
            this.gainNode = null;
        }
    }

    createjs.WebAudioSoundInstance.prototype.destroy = _webAudioDestroyPatch;

})();