(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rocket_atlas_", frames: [[395,174,102,89],[0,0,393,394],[395,0,102,172],[395,265,77,80]]}
];


// symbols:



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["rocket_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rays = function() {
	this.spriteSheet = ss["rocket_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Rocket = function() {
	this.spriteSheet = ss["rocket_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.star_fw = function() {
	this.spriteSheet = ss["rocket_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.R_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star_fw();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-40,77,80);


(lib.R_fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-51,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-44.7,102,89);


(lib.R_burst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rays();
	this.instance.parent = this;
	this.instance.setTransform(-196.5,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.5,-197,393,394);


(lib.R_rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rocket();
	this.instance.parent = this;
	this.instance.setTransform(-51,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.R_fire("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,125.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-86,102,172);


(lib.RocketAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Idle:0,Hit:23});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay('Idle');
	}
	this.frame_68 = function() {
		this.stop();
		if(this.callback){
			this.callback();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(46).call(this.frame_68).wait(1));

	// R_star copy 4
	this.instance = new lib.R_star("single",0);
	this.instance.parent = this;
	this.instance.setTransform(530.7,4.1,0.558,0.558,0,0,0,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:600.7,y:-143.9},10,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.17,scaleY:0.17,x:597.7,y:-21.9,alpha:0},9).to({_off:true},1).wait(3));

	// R_star copy 5
	this.instance_1 = new lib.R_star("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(536.7,22.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({x:690.7,y:-37.9},12,cjs.Ease.get(1)).to({scaleX:0.19,scaleY:0.19,x:689.7,y:124.1,alpha:0},9).to({_off:true},1).wait(1));

	// R_star copy 6
	this.instance_2 = new lib.R_star("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(552.7,43.2,0.479,0.479);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({x:689.7,y:106.2},11,cjs.Ease.get(1)).to({scaleX:0.14,scaleY:0.14,y:234.2,alpha:0},9).to({_off:true},1).wait(2));

	// R_star copy 7
	this.instance_3 = new lib.R_star("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(531.7,54.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({x:581.7,y:191.2},10,cjs.Ease.get(1)).to({scaleX:0.22,scaleY:0.22,x:580.7,y:366.2,alpha:0},9).to({_off:true},1).wait(3));

	// R_star copy 2
	this.instance_4 = new lib.R_star("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(506.6,73.2,0.558,0.558,0,0,0,0,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({x:443.6,y:186.2},12,cjs.Ease.get(1)).to({regY:0.2,scaleX:0.2,scaleY:0.2,x:444.6,y:326.3,alpha:0},9).to({_off:true},1).wait(1));

	// R_star copy 3
	this.instance_5 = new lib.R_star("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(493.6,47.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({x:345.6,y:82.2},11,cjs.Ease.get(1)).to({scaleX:0.2,scaleY:0.2,y:210.2,alpha:0},9).to({_off:true},1).wait(2));

	// R_star copy
	this.instance_6 = new lib.R_star("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(478.7,19.2,0.61,0.61,0,0,0,0.1,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).to({x:341.7,y:-60.9},10,cjs.Ease.get(1)).to({regX:0,scaleX:0.14,scaleY:0.14,x:337.7,y:110.1,alpha:0},9).to({_off:true},1).wait(3));

	// R_star
	this.instance_7 = new lib.R_star("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(502.6,6.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({x:453.6,y:-152.9},11,cjs.Ease.get(1)).to({scaleX:0.22,scaleY:0.22,y:-24.9,alpha:0},9).to({_off:true},1).wait(2));

	// R_burst
	this.instance_8 = new lib.R_burst("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(516.6,28,0.425,0.425,-11);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:0.64,rotation:-3.7,x:516.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:516.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:0},0).to({scaleX:0.12,scaleY:0.12,alpha:0},4,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// R_rocket
	this.instance_9 = new lib.R_rocket("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.1,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.1,regY:-0.1,scaleX:1.02,scaleY:0.95,x:-1,y:-8},11,cjs.Ease.quadInOut).wait(1).to({regX:0.5,regY:42,scaleX:1.02,scaleY:0.95,x:-0.6,y:32.2},0).wait(1).to({scaleX:1.02,scaleY:0.96,y:32.3},0).wait(1).to({scaleX:1.02,scaleY:0.96,y:32.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,y:32.6},0).wait(1).to({scaleX:1.01,scaleY:0.97,y:32.9},0).wait(1).to({scaleX:1.01,scaleY:0.98,y:33.2},0).wait(1).to({scaleX:1.01,scaleY:0.98,y:33.5},0).wait(1).to({scaleX:1,scaleY:0.99,y:33.8},0).wait(1).to({scaleX:1,scaleY:0.99,y:33.9},0).wait(1).to({scaleX:1,scaleY:1,y:34.1},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,x:-1,y:-7.9},0).wait(1).to({regX:0,scaleX:0.98,scaleY:1.11,x:-1.1,y:-8},0).wait(1).to({regX:-0.1,scaleX:1.1,scaleY:0.92,x:-0.8},0).wait(1).to({scaleX:1.19,scaleY:0.78,x:-2.3},0).wait(1).to({scaleX:1.24,scaleY:0.7,x:-1.2,y:-7.9},0).wait(1).to({regX:0,regY:0,scaleX:1.25,scaleY:0.67,x:3.9,y:-4.9},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.24,scaleY:0.7,x:-1.2,y:-6,startPosition:1},0).wait(1).to({regY:-0.2,scaleX:1.19,scaleY:0.76,x:0.8,y:-7},0).wait(1).to({scaleX:1.11,scaleY:0.86,x:-2,y:-17},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-1.1,y:-30.9},0).to({rotation:56.7,x:95,y:-216},5).to({rotation:159.8,x:276.1,y:-30.9},4).to({regX:-0.1,regY:0.1,rotation:105.8,x:381.1,y:60.1},3).to({regX:0.1,regY:-0.1,scaleX:0.87,scaleY:0.87,rotation:42.2,x:525.3,y:19},2).to({regX:0,regY:0,scaleX:1.34,scaleY:1.34,x:525.2},1).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-93.9,102,172);


// stage content:
(lib.rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RocketAnim();
	this.instance.parent = this;
	this.instance.setTransform(52.1,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,86,102,172);
// library properties:
lib.properties = {
	id: '4C5DEB8F2A4244CAA6064DDC00DFCB7E',
	width: 102,
	height: 172,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/rocket_atlas_.png", id:"rocket_atlas_"}
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
an.compositions['4C5DEB8F2A4244CAA6064DDC00DFCB7E'] = {
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