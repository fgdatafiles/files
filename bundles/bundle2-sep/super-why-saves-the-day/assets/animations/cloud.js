(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cloud_atlas_", frames: [[0,127,177,113],[0,0,354,125]]}
];


// symbols:



(lib.Cloud = function() {
	this.spriteSheet = ss["cloud_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Misc_cloud2_Layer_1_1 = function() {
	this.spriteSheet = ss["cloud_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Misc_cloud2_Layer_1_1();
	this.instance.parent = this;
	this.instance.setTransform(-190,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-63,354,125);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Cloud();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-56.5,177,113);


(lib.CloudAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Idle:0,Hit:23,Persist:37,Disapate:60});

	// timeline functions:
	this.frame_70 = function() {
		this.stop();
		if(this.callback){
			this.callback();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(1));

	// Layer_6 copy
	this.instance = new lib.cloud2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(49.8,-37.7,0.595,0.804,0,0,0,0.5,-0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({regX:1,regY:-0.7,scaleX:0.11,scaleY:0.14,x:145.8,y:-114.8,alpha:0},5).to({_off:true},1).wait(35));

	// Layer_5 copy
	this.instance_1 = new lib.cloud1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.5,71.8,0.611,0.611,0,0,0,0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({regX:0,scaleX:0.15,scaleY:0.15,x:65.5,y:81.9,alpha:0},5).to({_off:true},1).wait(35));

	// Layer_6
	this.instance_2 = new lib.cloud2("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.4,39.4,0.607,0.607,0,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({regX:0,regY:0,scaleX:0.17,scaleY:0.17,x:-125.4,y:82.4,alpha:0},5).to({_off:true},1).wait(35));

	// Layer_5
	this.instance_3 = new lib.cloud1("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-88.6,-39.2,0.769,0.769);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({scaleX:0.16,scaleY:0.16,x:-142.6,y:-80.3,alpha:0},5).to({_off:true},1).wait(35));

	// cloud1
	this.instance_4 = new lib.cloud1("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,scaleX:0.96,scaleY:1.03,x:-38.1,y:27},11,cjs.Ease.quadInOut).wait(1).to({regX:0,scaleX:0.96,x:-38,y:26.9},0).wait(1).to({scaleX:0.96,scaleY:1.03,y:26.8},0).wait(1).to({scaleX:0.96,scaleY:1.03,y:26.5},0).wait(1).to({scaleX:0.97,scaleY:1.03,y:26.1},0).wait(1).to({scaleX:0.97,scaleY:1.02,y:25.6},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:-37.9,y:25},0).wait(1).to({scaleX:0.98,scaleY:1.01,y:24.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:23.9},0).wait(1).to({scaleX:0.99,scaleY:1,y:23.5},0).wait(1).to({scaleX:1,scaleY:1,y:23.2},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,x:-38,y:23.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:23},1).to({regX:-0.1,regY:0.1,scaleX:1.05,scaleY:1.18,x:-39.7,y:27.1},5,cjs.Ease.quadInOut).to({scaleX:0.59,scaleY:0.56,x:-120,y:46.5},4,cjs.Ease.quadInOut).to({regY:0,scaleX:0.57,scaleY:0.57,x:-114.1,y:47},4).wait(1).to({startPosition:0},0).to({scaleX:0.63,scaleY:0.52,x:-121.5},11,cjs.Ease.quadInOut).to({scaleX:0.57,scaleY:0.57,x:-114.1},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.3,scaleX:0.18,scaleY:0.18,x:-296.2,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// cloud2
	this.instance_5 = new lib.cloud2("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.97,scaleY:1.05,y:-20},11,cjs.Ease.quadInOut).wait(1).to({regX:-13,regY:-0.5,scaleY:1.05,x:0.5,y:-20.4},0).wait(1).to({scaleX:0.97,scaleY:1.05,x:0.4,y:-20.3},0).wait(1).to({scaleX:0.97,scaleY:1.04,y:-20.1},0).wait(1).to({scaleX:0.98,scaleY:1.04,y:-19.7},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:0.3,y:-19.3},0).wait(1).to({scaleX:0.99,scaleY:1.02,y:-18.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:0.2,y:-18.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:-18},0).wait(1).to({scaleX:1,scaleY:1.01,x:0.1,y:-17.7},0).wait(1).to({scaleX:1,scaleY:1,y:-17.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:13.1,y:-16.9},0).to({scaleX:1,scaleY:1},1).to({regX:0.1,regY:-0.1,scaleX:1.05,scaleY:1.18,x:13.7,y:-19.9},5,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.62,scaleY:0.59,x:-79.7,y:-20.4},4,cjs.Ease.quadInOut).to({regY:-0.1,scaleX:0.6,scaleY:0.6,x:-74.9,y:-21},4).wait(1).to({startPosition:0},0).to({regX:0,regY:-0.2,scaleX:0.64,scaleY:0.55,x:-82.9},11,cjs.Ease.quadInOut).to({regX:0.1,regY:-0.1,scaleX:0.6,scaleY:0.6,x:-74.9},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:0,regY:0,scaleX:0.12,scaleY:0.17,x:-257,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.9,-79.9,354,159.5);


// stage content:
(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CloudAnim();
	this.instance.parent = this;
	this.instance.setTransform(177,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.1,78.5,354,159.5);
// library properties:
lib.properties = {
	id: '741E76687A694A0B81330FBB38E667AA',
	width: 354,
	height: 158,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cloud_atlas_.png", id:"cloud_atlas_"}
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
an.compositions['741E76687A694A0B81330FBB38E667AA'] = {
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