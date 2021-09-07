(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anim_atlas_", frames: [[0,0,641,611],[0,1130,571,462],[0,613,748,515]]}
];


// symbols:



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["anim_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["anim_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["anim_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Spikes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-374,-257.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374,-257.5,748,515);


(lib.Radial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-320.5,-305.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.5,-305.5,641,611);


(lib.Bolts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-285.5,-231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.5,-231,571,462);


(lib.TitleAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Spikes
	this.instance = new lib.Spikes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(712.2,384.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2,alpha:0},3).wait(15).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.2,scaleY:1.2,alpha:0},3).wait(13).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.2,scaleY:1.2,alpha:0},3).wait(7).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.2,scaleY:1.2,alpha:0},4).wait(12));

	// Bolts copy
	this.instance_1 = new lib.Bolts("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(712.2,384.1,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,alpha:0.07},5).wait(8).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.18,scaleY:1.18,alpha:0.07},5).wait(21).to({scaleX:0.89,scaleY:0.89,alpha:0.469},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:1.18,scaleY:1.18,alpha:0.07},3).wait(13));

	// Bolts
	this.instance_2 = new lib.Bolts("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(712.2,384.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:0.07},5).wait(14).to({scaleX:0.89,scaleY:0.89,alpha:0.469},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:1.3,scaleY:1.3,alpha:0.07},4).wait(17).to({scaleX:0.89,scaleY:0.89,alpha:0.469},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:1.3,scaleY:1.3,alpha:0.07},3).wait(4));

	// Radial
	this.instance_3 = new lib.Radial("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(712.2,384.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:180},29).to({rotation:270},15).to({rotation:360},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(338.2,78.6,748,611);


// stage content:
(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TitleAnim("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(712.1,384.1,1,1,0,0,0,712.1,384.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1051.2,462.6,748,611);
// library properties:
lib.properties = {
	id: 'A7E932EB7CF241A6976475E1DDABA7B2',
	width: 1426,
	height: 768,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"./anim_atlas_.png?1508170518620", id:"anim_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7E932EB7CF241A6976475E1DDABA7B2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;