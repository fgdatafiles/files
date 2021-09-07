(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"feather_duster_atlas_", frames: [[0,0,49,247],[51,0,102,93],[155,0,92,95],[51,95,70,95],[123,97,68,94],[193,97,36,97]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["feather_duster_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.FeatherDuster_TopFronds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,-48.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-48.7,36.2,97.5);


(lib.FeatherDuster_MiddleRight_Fronds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-9.6,-69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-69.9,68,94);


(lib.FeatherDuster_MiddleLeftFronds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-65.2,70,95);


(lib.FeatherDuster_BottomRightFronds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-8.8,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-69,102,93);


(lib.FeatherDuster_BottomLeftFronds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-82,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-61,92,95);


(lib.FeatherDuster_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-24.7,-123.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-123.2,49,247);


(lib.FeatherDuster_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Base
	this.instance = new lib.FeatherDuster_Base("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.7,54.1,1,1,0,0,0,1.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({startPosition:0},0).wait(1));

	// BottomRightFronds
	this.instance_1 = new lib.FeatherDuster_BottomRightFronds("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.3,-61.1,0.994,0.999,0,-0.6,-2.5,0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.99,skewX:-8.3,skewY:-23.8,x:-1.7,y:-63.4},33,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.98,skewX:-17.3,skewY:-49,x:1.2,y:-66.1},34,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.99,skewX:-9,skewY:-26.3,x:-1.5,y:-63.7},24,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:1,skewX:-0.6,skewY:-2.5,x:-4.3,y:-61.1},22,cjs.Ease.get(1)).wait(1));

	// BottomLeftFronds
	this.instance_2 = new lib.FeatherDuster_BottomLeftFronds("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.7,-70.5,0.989,1.003,0,0.5,1.8,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.9,scaleY:1.02,skewX:7.3,skewY:18.6,x:-2.1,y:-70.1},33,cjs.Ease.get(-1)).to({regX:0.7,scaleX:0.79,scaleY:1.05,skewX:15.2,skewY:38.6,x:-2.6,y:-69.8},34,cjs.Ease.get(1)).to({regX:0.8,scaleX:0.89,scaleY:1.03,skewX:8,skewY:20.6,x:-2.1,y:-70.1},24,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:1,skewX:0.5,skewY:1.8,x:-1.7,y:-70.5},22,cjs.Ease.get(1)).wait(1));

	// MiddleLeftFronds
	this.instance_3 = new lib.FeatherDuster_MiddleLeftFronds("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.4,-96.7,0.997,1.001,0.3,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,regY:0,scaleX:0.94,scaleY:1.01,rotation:0,skewX:5.1,skewY:6.5,x:2.2,y:-97.5},28).to({regX:0.2,regY:0.1,scaleX:0.87,scaleY:1.02,skewX:11.3,skewY:14.2,x:1.8,y:-98.5},38,cjs.Ease.get(1)).to({regX:0.3,scaleX:0.93,scaleY:1.01,skewX:6,skewY:7.5,x:2.2,y:-97.5},24,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:2.4,y:-96.7},23,cjs.Ease.get(1)).wait(1));

	// MiddleRightFronds
	this.instance_4 = new lib.FeatherDuster_MiddleRight_Fronds("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.5,-91.4,0.995,1,-0.3,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0,regY:0,scaleX:0.92,scaleY:1.01,rotation:0,skewX:-5.6,skewY:-6.6,x:-3.5,y:-92.4},28).to({regX:0.1,regY:0.2,scaleX:0.82,scaleY:1.01,skewX:-12.4,skewY:-14.6,x:-6.1,y:-93.7},38,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:1.01,skewX:-6.5,skewY:-7.8,x:-3.9,y:-92.6},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-0.3,skewX:0,skewY:0,x:-1.5,y:-91.4},23,cjs.Ease.get(1)).wait(1));

	// TopFronds
	this.instance_5 = new lib.FeatherDuster_TopFronds("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.2,-126.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.89,skewX:0.1,x:-0.8,y:-126.3},27,cjs.Ease.get(-1)).to({regX:0.1,scaleX:0.77,skewX:0.4,x:-2,y:-126.4},38,cjs.Ease.get(1)).to({regX:0.2,scaleX:0.87,skewX:0.1,x:-0.9,y:-126.3},24,cjs.Ease.get(-1)).to({regX:0,scaleX:1,skewX:0,x:0.2,y:-126.4},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-175.1,171.9,349.5);


// stage content:
(lib.FeatherDuster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FeatherDuster
	this.instance = new lib.FeatherDuster_1();
	this.instance.parent = this;
	this.instance.setTransform(267,206.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(458.1,231.3,171.9,349.6);
// library properties:
lib.properties = {
	id: '7E227E0006E14BC5B629FB9B2024A504',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/feather_duster_atlas_.png?1499359414520", id:"feather_duster_atlas_"}
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
an.compositions['7E227E0006E14BC5B629FB9B2024A504'] = {
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