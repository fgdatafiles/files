(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.BubbleBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-100.1,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.1,-100.1,200,200);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Idle:0,Hit:23,Persist:37,Burst:60});

	// timeline functions:
	this.frame_78 = function() {
		this.stop();
		if(this.callback){
			this.callback();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

	// Layer_1
	this.instance = new lib.BubbleBase("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:0.96,x:0.2,y:2.2},11,cjs.Ease.quadInOut).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:0.96,x:0,y:2},0).wait(1).to({scaleX:1.05,scaleY:0.96,y:1.9},0).wait(1).to({scaleX:1.04,scaleY:0.97,y:1.7},0).wait(1).to({scaleX:1.04,scaleY:0.97,y:1.5},0).wait(1).to({scaleX:1.03,scaleY:0.98,y:1.3},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:-0.1,y:1},0).wait(1).to({scaleX:1.02,scaleY:0.99,y:0.7},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:0.4},0).wait(1).to({scaleX:1.01,scaleY:1,y:0.3},0).wait(1).to({scaleX:1,scaleY:1,y:0.1},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:0.1,y:0.2},0).wait(1).to({regX:0,regY:0,scaleX:0.87,scaleY:0.87,y:0.1},0).to({scaleX:1.5,scaleY:1.5},4,cjs.Ease.get(1)).to({scaleX:1.28,scaleY:1.28,x:0.2,y:0.2},4,cjs.Ease.quadInOut).to({scaleX:1.35,scaleY:1.35,x:0.1,y:0.1},5,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:1.31,scaleY:1.25,x:0.2,y:0.2},11,cjs.Ease.quadInOut).to({scaleX:1.35,scaleY:1.35,x:0.1,y:0.1},11,cjs.Ease.quadInOut).wait(1).to({scaleX:1.33,scaleY:1.33,x:0.2,y:0.2},0).to({regX:0.1,regY:0.1,scaleX:1.18,scaleY:1.18,x:0.3,y:0.3},3,cjs.Ease.get(1)).to({scaleX:1.72,scaleY:1.72},3,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// Bubble Base
	this.instance_1 = new lib.BubbleBase("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.1,45.9,0.471,0.471,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({regY:0,scaleX:0.1,scaleY:0.1,x:-91.5,y:149.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Bubble Base
	this.instance_2 = new lib.BubbleBase("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.4,-30.1,0.711,0.711,0,0,0,0.2,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({regX:0.7,regY:0,scaleX:0.08,scaleY:0.08,x:144.5,y:-171.5},6,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Bubble Base
	this.instance_3 = new lib.BubbleBase("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.9,39.1,0.592,0.592,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:128.5,y:140.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Bubble Base
	this.instance_4 = new lib.BubbleBase("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.4,-47.8,0.522,0.522,0,0,0,-0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).to({regX:0,regY:0,scaleX:0.11,scaleY:0.11,x:-117.5,y:-162.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Bubble Base
	this.instance_5 = new lib.BubbleBase("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(54.7,10.6,0.592,0.592,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({regX:0,regY:0,scaleX:0.06,scaleY:0.06,x:199.6,y:-11.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Bubble Base
	this.instance_6 = new lib.BubbleBase("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-44.5,-5.7,0.592,0.592,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).to({regX:0,regY:0,scaleX:0.09,scaleY:0.09,x:-177.5,y:-9.6},9,cjs.Ease.get(1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.4,-262,765,543);


// stage content:
(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bubble();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);
// library properties:
lib.properties = {
	id: '996E366222D04B70A0AE0D4463AE36B7',
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
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
an.compositions['996E366222D04B70A0AE0D4463AE36B7'] = {
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