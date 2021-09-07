(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scoutandsnap_atlas_", frames: [[457,241,28,28],[487,241,23,32],[457,206,38,33],[0,0,351,179],[479,275,17,22],[353,121,102,45],[0,181,264,153],[399,279,78,104],[266,279,131,115],[353,0,151,119],[0,336,81,80],[83,336,75,72],[457,121,47,37],[266,181,189,96],[457,160,39,44],[160,336,58,58],[399,385,59,35]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["scoutandsnap_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Snap_Tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;
	this.instance.setTransform(-51,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-23,102,45);


(lib.Snap_RightLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-65,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-57,131,115);


(lib.Snap_RightClaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-132,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-77,264,153);


(lib.Snap_LeftLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-75,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-59,151,119);


(lib.Snap_LeftClaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-39,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-52,78,104);


(lib.Snap_EyelidNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-19,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-16,38,33);


(lib.Snap_EyelidFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(-12,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-16,23,32);


(lib.Snap_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-175,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-89,351,179);


(lib.Scout_UnderFin_Front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_UnderFin_Front, new cjs.Rectangle(-23.3,-18.3,47,37), null);


(lib.Scout_UnderFin_Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_UnderFin_Back, new cjs.Rectangle(-19.5,-21.9,39,44), null);


(lib.Scout_Tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-37.6,-36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_Tail, new cjs.Rectangle(-37.6,-36.1,75,72), null);


(lib.Scout_SideFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_SideFin, new cjs.Rectangle(-40.5,-39.8,81,80), null);


(lib.Scout_HeadFin_Front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-29,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_HeadFin_Front, new cjs.Rectangle(-29,-28.8,58,58), null);


(lib.Scout_HeadFin_Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_HeadFin_Back, new cjs.Rectangle(-29.5,-17.6,59,35), null);


(lib.Scout_EyelidNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-13.9,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_EyelidNear, new cjs.Rectangle(-13.9,-13.7,28,28), null);


(lib.Scout_EyelidFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-8.2,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_EyelidFar, new cjs.Rectangle(-8.2,-11,17,22), null);


(lib.Scout_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-94.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scout_Body, new cjs.Rectangle(-94.5,-47.8,189,96), null);


(lib.Snap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:58,Fall:101});

	// timeline functions:
	this.frame_100 = function() {
		this.gotoAndPlay("Idle");
	}
	this.frame_116 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(16).call(this.frame_116).wait(1));

	// Eyelid_Near
	this.instance = new lib.Scout_EyelidNear();
	this.instance.parent = this;
	this.instance.setTransform(3.1,-56.2,1,1,5.7,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(7).to({_off:true},1).wait(64).to({_off:false,x:1.3,y:-50.1},0).to({x:2,y:-53},10,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// Eyelid_Far
	this.instance_1 = new lib.Scout_EyelidFar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.9,-45.6,1,1,5.7,0,0,-0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(7).to({_off:true},1).wait(64).to({_off:false,regX:0,regY:0,x:38,y:-41.3},0).to({regX:-0.1,regY:-0.1,x:38.8,y:-43.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// SideFin
	this.instance_2 = new lib.Scout_SideFin();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68.2,-43.4,1,1,5.7,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({scaleX:0.79,rotation:0,skewX:5.7,skewY:10.5,x:-59.7,y:-41.2},7,cjs.Ease.get(-1)).to({regY:0.1,scaleX:0.55,skewY:16,x:-50.2,y:-38.5},11,cjs.Ease.get(1)).to({scaleX:0.76,skewY:11,x:-58.7,y:-40.8},10,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-68.2,y:-43.4},14,cjs.Ease.get(1)).wait(1).to({scaleX:0.79,rotation:0,skewX:5.7,skewY:10.5,x:-59.7,y:-41.2},7,cjs.Ease.get(-1)).to({regY:0.1,scaleX:0.55,skewY:16,x:-50.2,y:-38.5},11,cjs.Ease.get(1)).to({scaleX:0.76,skewY:11,x:-58.7,y:-40.8},10,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-68.2,y:-43.4},14,cjs.Ease.get(1)).to({regY:0,rotation:11.7,x:-67,y:-83.9},1,cjs.Ease.get(-1)).to({regX:-0.5,regY:-0.1,scaleX:0.56,scaleY:1,rotation:0,skewX:10.8,skewY:21.8,x:-48.5,y:-74.3},4,cjs.Ease.get(-1)).to({regX:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-68.2,y:-43.4},11,cjs.Ease.get(1)).wait(1));

	// Tail
	this.instance_3 = new lib.Scout_Tail();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-142.6,-69.7,1,1,5.7,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({regX:-0.1,regY:-0.1,scaleX:1,x:-143.3,y:-69.9},0).wait(1).to({scaleX:0.99,x:-143.2,y:-69.8},0).wait(1).to({scaleX:0.99,rotation:0,skewX:5.7,skewY:5.7,x:-142.9,y:-69.6},0).wait(1).to({scaleX:0.98,x:-142.6,y:-69.3},0).wait(1).to({scaleX:0.96,skewY:5.6,x:-142.1,y:-69},0).wait(1).to({scaleX:0.94,skewY:5.5,x:-141.6,y:-68.5},0).wait(1).to({scaleX:0.92,x:-140.9,y:-68},0).wait(1).to({scaleX:0.9,skewY:5.4,x:-140.1,y:-67.4},0).wait(1).to({scaleX:0.87,skewY:5.3,x:-139.2,y:-66.7},0).wait(1).to({scaleX:0.84,skewY:5.2,x:-138.3,y:-66},0).wait(1).to({scaleX:0.81,skewY:5.1,x:-137.2,y:-65.2},0).wait(1).to({regX:0.7,regY:0.1,scaleX:0.78,skewY:4.9,x:-135.4,y:-64},0).to({scaleX:0.53,skewY:3.7,x:-127.6,y:-58.1},11,cjs.Ease.get(1)).to({regX:0.8,scaleX:0.75,skewY:4.7,x:-134.7,y:-63.6},10,cjs.Ease.get(-1)).to({regX:0.7,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-142.6,y:-69.7},9,cjs.Ease.get(1)).wait(2).to({regX:-0.1,regY:-0.1,scaleX:1,x:-143.3,y:-69.9},0).wait(1).to({scaleX:0.99,x:-143.2,y:-69.8},0).wait(1).to({scaleX:0.99,rotation:0,skewX:5.7,skewY:5.7,x:-142.9,y:-69.6},0).wait(1).to({scaleX:0.98,x:-142.6,y:-69.3},0).wait(1).to({scaleX:0.96,skewY:5.6,x:-142.1,y:-69},0).wait(1).to({scaleX:0.94,skewY:5.5,x:-141.6,y:-68.5},0).wait(1).to({scaleX:0.92,x:-140.9,y:-68},0).wait(1).to({scaleX:0.9,skewY:5.4,x:-140.1,y:-67.4},0).wait(1).to({scaleX:0.87,skewY:5.3,x:-139.2,y:-66.7},0).wait(1).to({scaleX:0.84,skewY:5.2,x:-138.3,y:-66},0).wait(1).to({scaleX:0.81,skewY:5.1,x:-137.2,y:-65.2},0).wait(1).to({regX:0.7,regY:0.1,scaleX:0.78,skewY:4.9,x:-135.4,y:-64},0).to({scaleX:0.53,skewY:3.7,x:-127.6,y:-58.1},11,cjs.Ease.get(1)).to({regX:0.8,scaleX:0.75,skewY:4.7,x:-134.7,y:-63.6},10,cjs.Ease.get(-1)).to({regX:0.7,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-142.6,y:-69.7},9,cjs.Ease.get(1)).to({regX:0.6,rotation:11.7,x:-138.4,y:-117.9},1,cjs.Ease.get(-1)).to({regX:0.5,regY:-0.1,scaleX:0.48,scaleY:1,rotation:10.8,x:-128.5,y:-82.8},9,cjs.Ease.get(-1)).to({regX:0.7,regY:0.1,scaleX:1,scaleY:1,rotation:5.7,x:-142.6,y:-69.7},6,cjs.Ease.get(1)).wait(1));

	// UnderFin_Front
	this.instance_4 = new lib.Scout_UnderFin_Front();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-34.4,21.1,1,1,5.7,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({regX:0.1,regY:0.2,scaleY:1,x:-34.3,y:21.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:5.7,skewY:5.8},0).wait(1).to({scaleY:0.99,skewY:6},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:6.2},0).wait(1).to({scaleX:1,scaleY:0.98,skewY:6.4},0).wait(1).to({scaleX:1,scaleY:0.97,skewY:6.7},0).wait(1).to({scaleX:0.99,scaleY:0.96,skewY:7,y:21.3},0).wait(1).to({scaleX:0.99,scaleY:0.95,skewY:7.4},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewY:7.8},0).wait(1).to({scaleX:0.99,scaleY:0.92,skewY:8.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.9,skewY:8.8,x:-34.5,y:21},0).to({regX:0.1,scaleX:0.96,scaleY:0.79,skewY:12.4,y:20.7},11,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.98,scaleY:0.89,skewY:9.3,x:-34.4,y:20.9},10,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,y:21.1},10,cjs.Ease.get(1)).wait(2).to({regX:0.1,regY:0.2,scaleY:1,x:-34.3,y:21.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:5.7,skewY:5.8},0).wait(1).to({scaleY:0.99,skewY:6},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:6.2},0).wait(1).to({scaleX:1,scaleY:0.98,skewY:6.4},0).wait(1).to({scaleX:1,scaleY:0.97,skewY:6.7},0).wait(1).to({scaleX:0.99,scaleY:0.96,skewY:7,y:21.3},0).wait(1).to({scaleX:0.99,scaleY:0.95,skewY:7.4},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewY:7.8},0).wait(1).to({scaleX:0.99,scaleY:0.92,skewY:8.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.9,skewY:8.8,x:-34.5,y:21},0).to({regX:0.1,scaleX:0.96,scaleY:0.79,skewY:12.4,y:20.7},11,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.98,scaleY:0.89,skewY:9.3,x:-34.4,y:20.9},10,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,y:21.1},10,cjs.Ease.get(1)).to({rotation:11.7,x:-40.1,y:-16.3},1,cjs.Ease.get(-1)).to({regX:-0.3,regY:-0.4,scaleX:1.01,scaleY:0.99,rotation:0,skewX:10.3,skewY:9.8,x:-40.3,y:-3.4},6,cjs.Ease.get(-1)).to({regX:0,regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-34.4,y:21.1},9,cjs.Ease.get(1)).wait(1));

	// Body
	this.instance_5 = new lib.Scout_Body();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-38.8,-37.7,1,1,5.7,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({regX:0,regY:0.2,x:-38.7,y:-37.3},0).wait(1).to({scaleX:1,y:-37.2},0).wait(1).to({scaleX:1,rotation:0,skewX:5.7,skewY:5.7,y:-37},0).wait(1).to({scaleX:1,skewY:5.6,y:-36.8},0).wait(1).to({scaleX:1,skewY:5.5,y:-36.5},0).wait(1).to({scaleX:0.99,x:-38.8,y:-36.1},0).wait(1).to({scaleX:0.99,skewY:5.4,y:-35.7},0).wait(1).to({scaleX:0.99,skewY:5.2,y:-35.1},0).wait(1).to({scaleX:0.98,skewY:5.1,y:-34.5},0).wait(1).to({regY:0,scaleX:0.98,skewY:4.9,x:-39,y:-34.2},0).to({regX:-0.1,scaleX:0.96,skewY:3.7,x:-39.4,y:-30.5},11,cjs.Ease.get(1)).to({regX:0,scaleX:0.98,skewY:4.7,x:-39,y:-33.9},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-38.8,y:-37.7},11,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0.2,x:-38.7,y:-37.3},0).wait(1).to({scaleX:1,y:-37.2},0).wait(1).to({scaleX:1,rotation:0,skewX:5.7,skewY:5.7,y:-37},0).wait(1).to({scaleX:1,skewY:5.6,y:-36.8},0).wait(1).to({scaleX:1,skewY:5.5,y:-36.5},0).wait(1).to({scaleX:0.99,x:-38.8,y:-36.1},0).wait(1).to({scaleX:0.99,skewY:5.4,y:-35.7},0).wait(1).to({scaleX:0.99,skewY:5.2,y:-35.1},0).wait(1).to({scaleX:0.98,skewY:5.1,y:-34.5},0).wait(1).to({regY:0,scaleX:0.98,skewY:4.9,x:-39,y:-34.2},0).to({regX:-0.1,scaleX:0.96,skewY:3.7,x:-39.4,y:-30.5},11,cjs.Ease.get(1)).to({regX:0,scaleX:0.98,skewY:4.7,x:-39,y:-33.9},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-38.8,y:-37.7},11,cjs.Ease.get(1)).to({rotation:11.7,x:-38.4,y:-75.2},1,cjs.Ease.get(-1)).to({regY:-0.2,scaleX:1,scaleY:1,rotation:10.8,y:-57.1},7,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,x:-38.8,y:-37.7},8,cjs.Ease.get(1)).wait(1));

	// UnderFin_Back
	this.instance_6 = new lib.Scout_UnderFin_Back();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-21.4,28.6,1,1,5.7,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({regX:0,regY:0,scaleY:1,rotation:0,skewX:5.8,skewY:5.7},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:5.9},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:6.1,x:-21.5},0).wait(1).to({scaleX:1,scaleY:0.97,skewX:6.4,skewY:5.6,x:-21.6},0).wait(1).to({scaleX:0.99,scaleY:0.95,skewX:6.8,skewY:5.5,x:-21.7,y:28.5},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewX:7.3,skewY:5.4,x:-21.9},0).wait(1).to({scaleX:0.99,scaleY:0.91,skewX:7.9,skewY:5.3,x:-22.1,y:28.4},0).wait(1).to({scaleX:0.98,scaleY:0.88,skewX:8.5,skewY:5.1,x:-22.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.85,skewX:9.3,skewY:4.9,x:-22.6,y:28.2},0).to({regX:0.1,regY:0.1,scaleX:0.96,scaleY:0.69,skewX:13.2,skewY:3.7,x:-24,y:27.8},11,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.84,skewX:9.5,skewY:4.7,x:-22.8,y:28.3},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-21.4,y:28.6},12,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0,scaleY:1,rotation:0,skewX:5.8,skewY:5.7},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:5.9},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:6.1,x:-21.5},0).wait(1).to({scaleX:1,scaleY:0.97,skewX:6.4,skewY:5.6,x:-21.6},0).wait(1).to({scaleX:0.99,scaleY:0.95,skewX:6.8,skewY:5.5,x:-21.7,y:28.5},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewX:7.3,skewY:5.4,x:-21.9},0).wait(1).to({scaleX:0.99,scaleY:0.91,skewX:7.9,skewY:5.3,x:-22.1,y:28.4},0).wait(1).to({scaleX:0.98,scaleY:0.88,skewX:8.5,skewY:5.1,x:-22.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.85,skewX:9.3,skewY:4.9,x:-22.6,y:28.2},0).to({regX:0.1,regY:0.1,scaleX:0.96,scaleY:0.69,skewX:13.2,skewY:3.7,x:-24,y:27.8},11,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.84,skewX:9.5,skewY:4.7,x:-22.8,y:28.3},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-21.4,y:28.6},12,cjs.Ease.get(1)).to({rotation:11.7,x:-28,y:-7.5},1,cjs.Ease.get(-1)).to({regX:-0.4,regY:-0.2,scaleX:1,scaleY:1,rotation:0,skewX:17.3,skewY:10.7,x:-31.2,y:7},6,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-21.4,y:28.6},9,cjs.Ease.get(1)).wait(1));

	// HeadFin_Front
	this.instance_7 = new lib.Scout_HeadFin_Front();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-15.3,-84.8,1,1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({regY:0.1,rotation:0,skewX:5.7,skewY:5.7,y:-84.7},0).wait(1).to({scaleX:1,skewX:5.5,x:-15.4,y:-84.6},0).wait(1).to({scaleX:1,skewX:5.2,x:-15.6,y:-84.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.7,skewY:5.6,x:-15.9,y:-84.2},0).wait(1).to({scaleX:1,skewX:4.1,x:-16.2,y:-84},0).wait(1).to({scaleX:0.99,skewX:3.4,skewY:5.5,x:-16.6,y:-83.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:2.6,skewY:5.4,x:-17.1,y:-83.3},0).wait(1).to({scaleX:0.99,skewX:1.6,skewY:5.3,x:-17.7,y:-82.9},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:0.5,skewY:5.2,x:-18.3,y:-82.4},0).wait(1).to({scaleX:0.98,skewX:-0.7,skewY:5.1,x:-19,y:-81.9},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.98,scaleY:1,skewX:-2,skewY:4.9,x:-19.9,y:-81.4},0).to({regX:0,regY:0.2,scaleX:0.96,scaleY:0.99,skewX:-10.8,skewY:3.7,x:-24.9,y:-77.7},11,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.98,scaleY:1,skewX:-2.8,skewY:4.7,x:-20.2,y:-81.1},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-15.3,y:-84.8},10,cjs.Ease.get(1)).wait(2).to({regY:0.1,rotation:0,skewX:5.7,skewY:5.7,y:-84.7},0).wait(1).to({scaleX:1,skewX:5.5,x:-15.4,y:-84.6},0).wait(1).to({scaleX:1,skewX:5.2,x:-15.6,y:-84.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.7,skewY:5.6,x:-15.9,y:-84.2},0).wait(1).to({scaleX:1,skewX:4.1,x:-16.2,y:-84},0).wait(1).to({scaleX:0.99,skewX:3.4,skewY:5.5,x:-16.6,y:-83.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:2.6,skewY:5.4,x:-17.1,y:-83.3},0).wait(1).to({scaleX:0.99,skewX:1.6,skewY:5.3,x:-17.7,y:-82.9},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:0.5,skewY:5.2,x:-18.3,y:-82.4},0).wait(1).to({scaleX:0.98,skewX:-0.7,skewY:5.1,x:-19,y:-81.9},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.98,scaleY:1,skewX:-2,skewY:4.9,x:-19.9,y:-81.4},0).to({regX:0,regY:0.2,scaleX:0.96,scaleY:0.99,skewX:-10.8,skewY:3.7,x:-24.9,y:-77.7},11,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.98,scaleY:1,skewX:-2.8,skewY:4.7,x:-20.2,y:-81.1},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-15.3,y:-84.8},10,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,rotation:11.7,x:-10.2,y:-119.8},1,cjs.Ease.get(-1)).to({regX:-0.3,regY:-0.3,scaleX:0.99,scaleY:1.01,rotation:0,skewX:1,skewY:6.2,x:-16,y:-100.6},7,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:-15.3,y:-84.8},8,cjs.Ease.get(1)).wait(1));

	// HeadFin_Back
	this.instance_8 = new lib.Scout_HeadFin_Back();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-75.9,-68.9,1,1,5.7,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({regY:-0.2,x:-75.8},0).wait(1).to({scaleX:1,rotation:0,skewX:5.6,skewY:5.7,y:-68.6},0).wait(1).to({scaleX:1,skewX:5.4,skewY:5.6,y:-68.2},0).wait(1).to({scaleX:0.99,skewX:5.2,skewY:5.5,y:-67.6},0).wait(1).to({scaleX:0.99,skewX:4.8,skewY:5.3,y:-66.9},0).wait(1).to({scaleX:0.99,skewX:4.4,skewY:5.2,y:-65.9},0).wait(1).to({regY:-0.1,scaleX:0.98,skewX:4,skewY:4.9,y:-64.8},0).to({regX:0,regY:0,scaleX:0.96,skewX:1.8,skewY:3.7,x:-75.9,y:-60.3},12,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.98,skewX:3.7,skewY:4.7,x:-75.8,y:-64.3},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-75.9,y:-68.9},13,cjs.Ease.get(1)).wait(2).to({regY:-0.2,x:-75.8},0).wait(1).to({scaleX:1,rotation:0,skewX:5.6,skewY:5.7,y:-68.6},0).wait(1).to({scaleX:1,skewX:5.4,skewY:5.6,y:-68.2},0).wait(1).to({scaleX:0.99,skewX:5.2,skewY:5.5,y:-67.6},0).wait(1).to({scaleX:0.99,skewX:4.8,skewY:5.3,y:-66.9},0).wait(1).to({scaleX:0.99,skewX:4.4,skewY:5.2,y:-65.9},0).wait(1).to({regY:-0.1,scaleX:0.98,skewX:4,skewY:4.9,y:-64.8},0).to({regX:0,regY:0,scaleX:0.96,skewX:1.8,skewY:3.7,x:-75.9,y:-60.3},12,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.98,skewX:3.7,skewY:4.7,x:-75.8,y:-64.3},10,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,rotation:5.7,skewX:0,skewY:0,x:-75.9,y:-68.9},13,cjs.Ease.get(1)).to({rotation:11.7,x:-72,y:-110.1},1,cjs.Ease.get(-1)).to({regX:-0.2,scaleX:1,scaleY:1,rotation:10.8,x:-72.5,y:-91.4},7,cjs.Ease.get(-1)).to({regX:-0.1,scaleX:1,scaleY:1,rotation:5.7,x:-75.9,y:-68.9},8,cjs.Ease.get(1)).wait(1));

	// Eyelid_Far
	this.instance_9 = new lib.Snap_EyelidFar("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(74.1,52.5,0.3,0.3,0,0,0,-0.1,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).to({_off:true},7).wait(65).to({_off:false,regY:0,skewX:-2.4,skewY:-1.7,x:72.1,y:55.7},0).wait(1).to({regX:-0.5,x:72,y:55.6},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:-2.3,skewY:-1.6,x:72.1,y:55.5},0).wait(1).to({skewX:-2.2,skewY:-1.5,x:72.2,y:55.3},0).wait(1).to({skewX:-2,skewY:-1.4,x:72.3,y:55.2},0).wait(1).to({skewX:-1.9,skewY:-1.3,x:72.4,y:55},0).wait(1).to({skewX:-1.7,skewY:-1.2,x:72.5,y:54.8},0).wait(1).to({regX:-0.1,skewX:-1.5,skewY:-1,x:72.8,y:54.6},0).to({_off:true},1).wait(16).to({_off:false,regX:0.4,regY:-0.7,scaleX:0.32,scaleY:0.3,skewX:12.4,skewY:20.4,x:73.2,y:30.5},0).to({regY:-0.5,scaleX:0.32,scaleY:0.29,skewX:9,skewY:17.3,x:72.4,y:44},3).to({regX:0.8,regY:0.1,scaleX:0.32,scaleY:0.28,skewX:-1.1,skewY:7.6,x:70.8,y:60.8},3).to({regY:0.3,scaleX:0.31,scaleY:0.29,skewX:-1.1,skewY:3.8,x:72.3,y:57},3).to({_off:true},1).wait(3));

	// Eyelid_Near
	this.instance_10 = new lib.Snap_EyelidNear("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(90,53.1,0.3,0.3,0,0,0,-0.1,-0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({_off:true},7).wait(65).to({_off:false,regX:0,regY:0.1,skewX:-2.4,skewY:-1.7,x:88,y:55.7},0).wait(1).to({regY:0.5,y:55.8},0).wait(1).to({skewY:-1.8,y:55.7},0).wait(1).to({skewX:-2.3,skewY:-1.9,x:88.1,y:55.6},0).wait(1).to({skewX:-2.2,skewY:-2,x:88.2,y:55.5},0).wait(1).to({skewX:-2,skewY:-2.2,x:88.3,y:55.3},0).wait(1).to({skewX:-1.9,skewY:-2.4,x:88.4,y:55.1},0).wait(1).to({skewX:-1.7,skewY:-2.6,x:88.5,y:54.8},0).wait(1).to({regY:0.1,skewX:-1.5,skewY:-2.8,x:88.7,y:54.5},0).to({_off:true},1).wait(16).to({_off:false,regX:0.8,regY:0.2,scaleX:0.32,scaleY:0.29,skewX:12.1,skewY:20,x:88.6,y:37},0).to({regX:0.7,regY:0.3,scaleX:0.32,scaleY:0.28,skewX:10,skewY:17.3,x:88.2,y:49.4},3).to({regY:0.2,scaleX:0.32,scaleY:0.28,skewX:1.1,skewY:7.8,x:87.4,y:63},3).to({regX:1.2,regY:0.7,scaleX:0.31,scaleY:0.29,skewX:1.1,skewY:1.9,x:88.9,y:58.3},3).to({_off:true},1).wait(3));

	// Body
	this.instance_11 = new lib.Snap_Body("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(93.1,63,0.3,0.3,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0.5,regY:0.5,x:93.2,y:63.2},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:0,skewX:-0.1,skewY:-0.2},0).wait(1).to({skewX:-0.2,skewY:-0.3,x:93.1,y:63.3},0).wait(1).to({skewX:-0.3,skewY:-0.5,x:93,y:63.4},0).wait(1).to({skewX:-0.4,skewY:-0.7,y:63.5},0).wait(1).to({skewX:-0.6,skewY:-0.9,x:92.9,y:63.6},0).wait(1).to({skewX:-0.7,skewY:-1.2,x:92.8,y:63.7},0).wait(1).to({skewX:-0.9,skewY:-1.5,x:92.7,y:63.8},0).wait(1).to({skewX:-1.1,skewY:-1.7,x:92.6,y:64},0).wait(1).to({skewX:-1.2,skewY:-2,x:92.4,y:64.1},0).wait(1).to({skewX:-1.4,skewY:-2.3,x:92.3,y:64.2},0).wait(1).to({skewX:-1.6,skewY:-2.6,x:92.2,y:64.4},0).wait(1).to({skewX:-1.8,skewY:-2.9,x:92.1,y:64.5},0).wait(1).to({skewX:-1.9,skewY:-3.1,x:92,y:64.6},0).wait(1).to({skewX:-2.1,skewY:-3.4,x:91.9,y:64.7},0).wait(1).to({skewX:-2.2,skewY:-3.6,x:91.8,y:64.8},0).wait(1).to({skewX:-2.3,skewY:-3.7,y:64.9},0).wait(1).to({skewX:-2.4,skewY:-3.9,x:91.7},0).wait(1).to({skewY:-4,y:65},0).wait(1).to({regX:-0.1,regY:0,skewX:-2.5,x:91.5,y:64.8},0).wait(1).to({regX:0.5,regY:0.5,skewX:-2.4,x:91.7,y:64.9},0).wait(1).to({skewY:-3.9},0).wait(1).to({skewX:-2.3,skewY:-3.8},0).wait(1).to({skewX:-2.2,skewY:-3.7,x:91.8,y:64.8},0).wait(1).to({skewX:-2.1,skewY:-3.5,x:91.9,y:64.7},0).wait(1).to({skewX:-2,skewY:-3.3,y:64.6},0).wait(1).to({skewX:-1.9,skewY:-3.1,x:92,y:64.5},0).wait(1).to({skewX:-1.7,skewY:-2.8,x:92.1,y:64.4},0).wait(1).to({skewX:-1.6,skewY:-2.5,x:92.2,y:64.3},0).wait(1).to({skewX:-1.4,skewY:-2.3,x:92.3,y:64.1},0).wait(1).to({skewX:-1.2,skewY:-2,x:92.5,y:64},0).wait(1).to({skewX:-1,skewY:-1.7,x:92.6,y:63.9},0).wait(1).to({skewX:-0.9,skewY:-1.4,x:92.7,y:63.7},0).wait(1).to({skewX:-0.7,skewY:-1.1,x:92.8,y:63.6},0).wait(1).to({skewX:-0.5,skewY:-0.9,x:92.9,y:63.5},0).wait(1).to({skewX:-0.4,skewY:-0.6,x:93,y:63.4},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:93.1,y:63.3},0).wait(1).to({skewX:-0.2,skewY:-0.3,y:63.2},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,x:93.2},0).wait(1).to({rotation:0,y:63.1},0).wait(1).to({regX:-0.1,regY:-0.1,x:93.1,y:63},0).to({startPosition:0},1).wait(1).to({regX:0.5,regY:0.5,x:93.2,y:63.2},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:0,skewX:-0.1,skewY:-0.2},0).wait(1).to({skewX:-0.2,skewY:-0.3,x:93.1,y:63.3},0).wait(1).to({skewX:-0.3,skewY:-0.5,x:93,y:63.4},0).wait(1).to({skewX:-0.4,skewY:-0.7,y:63.5},0).wait(1).to({skewX:-0.6,skewY:-0.9,x:92.9,y:63.6},0).wait(1).to({skewX:-0.7,skewY:-1.2,x:92.8,y:63.7},0).wait(1).to({skewX:-0.9,skewY:-1.5,x:92.7,y:63.8},0).wait(1).to({skewX:-1.1,skewY:-1.7,x:92.6,y:64},0).wait(1).to({skewX:-1.2,skewY:-2,x:92.4,y:64.1},0).wait(1).to({skewX:-1.4,skewY:-2.3,x:92.3,y:64.2},0).wait(1).to({skewX:-1.6,skewY:-2.6,x:92.2,y:64.4},0).wait(1).to({skewX:-1.8,skewY:-2.9,x:92.1,y:64.5},0).wait(1).to({skewX:-1.9,skewY:-3.1,x:92,y:64.6},0).wait(1).to({skewX:-2.1,skewY:-3.4,x:91.9,y:64.7},0).wait(1).to({skewX:-2.2,skewY:-3.6,x:91.8,y:64.8},0).wait(1).to({skewX:-2.3,skewY:-3.7,y:64.9},0).wait(1).to({skewX:-2.4,skewY:-3.9,x:91.7},0).wait(1).to({skewY:-4,y:65},0).wait(1).to({regX:-0.1,regY:0,skewX:-2.5,x:91.5,y:64.8},0).wait(1).to({regX:0.5,regY:0.5,skewX:-2.4,x:91.7,y:64.9},0).wait(1).to({skewY:-3.9},0).wait(1).to({skewX:-2.3,skewY:-3.8},0).wait(1).to({skewX:-2.2,skewY:-3.7,x:91.8,y:64.8},0).wait(1).to({skewX:-2.1,skewY:-3.5,x:91.9,y:64.7},0).wait(1).to({skewX:-2,skewY:-3.3,y:64.6},0).wait(1).to({skewX:-1.9,skewY:-3.1,x:92,y:64.5},0).wait(1).to({skewX:-1.7,skewY:-2.8,x:92.1,y:64.4},0).wait(1).to({skewX:-1.6,skewY:-2.5,x:92.2,y:64.3},0).wait(1).to({skewX:-1.4,skewY:-2.3,x:92.3,y:64.1},0).wait(1).to({skewX:-1.2,skewY:-2,x:92.5,y:64},0).wait(1).to({skewX:-1,skewY:-1.7,x:92.6,y:63.9},0).wait(1).to({skewX:-0.9,skewY:-1.4,x:92.7,y:63.7},0).wait(1).to({skewX:-0.7,skewY:-1.1,x:92.8,y:63.6},0).wait(1).to({skewX:-0.5,skewY:-0.9,x:92.9,y:63.5},0).wait(1).to({skewX:-0.4,skewY:-0.6,x:93,y:63.4},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:93.1,y:63.3},0).wait(1).to({skewX:-0.2,skewY:-0.3,y:63.2},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,x:93.2},0).wait(1).to({rotation:0,y:63.1},0).wait(1).to({regX:-0.1,regY:-0.1,x:93.1,y:63},0).to({regX:0.1,regY:0.1,scaleX:0.31,scaleY:0.3,skewX:13.2,skewY:17,x:89.9,y:40.4},1).wait(1).to({regX:0.5,regY:0.5,scaleX:0.31,scaleY:0.29,skewY:17.5,x:89.8,y:41.7},0).wait(1).to({scaleX:0.31,scaleY:0.29,skewY:18.4,x:89.6,y:44},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.31,scaleY:0.29,skewY:19.9,x:89.2,y:47.2},0).wait(1).to({regX:0.5,regY:0.5,scaleY:0.29,skewX:10.9,skewY:18.2,x:89.5,y:51},0).wait(1).to({scaleY:0.29,skewX:8.3,skewY:16.5,x:90,y:54.9},0).wait(1).to({regX:0.1,regY:-0.1,scaleY:0.29,skewX:5.6,skewY:14.5,x:90.3,y:59},0).to({regX:0.3,scaleX:0.32,scaleY:0.27,skewX:-1.7,skewY:5.5,x:90.8,y:72.1},3).to({regX:0.1,regY:0.1,scaleX:0.31,scaleY:0.29,skewX:-1.7,skewY:1.9,x:91.9,y:67.7},3).to({regX:-0.1,regY:-0.1,scaleX:0.3,scaleY:0.3,skewX:0,skewY:0,x:93.1,y:63},3).wait(1));

	// Tail
	this.instance_12 = new lib.Snap_Tail("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(144.7,59.5,0.3,0.3,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0,regY:-0.5,scaleY:0.3,rotation:-0.1,x:144.6,y:59.3},0).wait(1).to({scaleY:0.3,rotation:0,skewX:-0.2,skewY:-0.1},0).wait(1).to({scaleY:0.3,skewX:-0.5,skewY:-0.2,y:59.1},0).wait(1).to({scaleY:0.29,skewX:-0.9,skewY:-0.4,x:144.5,y:59},0).wait(1).to({scaleY:0.29,skewX:-1.4,skewY:-0.6,y:58.8},0).wait(1).to({scaleY:0.28,skewX:-1.9,skewY:-0.8,x:144.4,y:58.6},0).wait(1).to({scaleY:0.28,skewX:-2.5,skewY:-1.1,x:144.3,y:58.4},0).wait(1).to({scaleY:0.27,skewX:-3.2,skewY:-1.4,y:58.1},0).wait(1).to({scaleY:0.26,skewX:-3.9,skewY:-1.7,x:144.2,y:57.8},0).wait(1).to({scaleY:0.25,skewX:-4.6,skewY:-2.1,x:144.1,y:57.5},0).wait(1).to({scaleY:0.25,skewX:-5.4,skewY:-2.4,x:144,y:57.3},0).wait(1).to({scaleY:0.24,skewX:-6.2,skewY:-2.7,x:143.9,y:57},0).wait(1).to({scaleY:0.23,skewX:-6.9,skewY:-3.1,x:143.8,y:56.7},0).wait(1).to({scaleX:0.3,scaleY:0.23,skewX:-7.6,skewY:-3.4,x:143.7,y:56.4},0).wait(1).to({scaleY:0.22,skewX:-8.3,skewY:-3.7,x:143.6,y:56.1},0).wait(1).to({scaleY:0.21,skewX:-8.9,skewY:-4,y:55.9},0).wait(1).to({scaleY:0.21,skewX:-9.5,skewY:-4.2,x:143.5,y:55.7},0).wait(1).to({scaleY:0.2,skewX:-9.9,skewY:-4.4,x:143.4,y:55.5},0).wait(1).to({scaleY:0.2,skewX:-10.3,skewY:-4.6,y:55.4},0).wait(1).to({scaleY:0.2,skewX:-10.5,skewY:-4.7,y:55.3},0).wait(1).to({regX:0.1,regY:0,scaleY:0.2,skewX:-10.6},0).wait(1).to({regX:0,regY:-0.5,scaleY:0.2,y:55.2},0).wait(1).to({scaleY:0.2,skewX:-10.4,skewY:-4.6,y:55.3},0).wait(1).to({scaleY:0.2,skewX:-10.1,skewY:-4.5,y:55.4},0).wait(1).to({scaleY:0.2,skewX:-9.7,skewY:-4.3,x:143.5,y:55.5},0).wait(1).to({scaleY:0.21,skewX:-9.3,skewY:-4.1,y:55.7},0).wait(1).to({scaleY:0.21,skewX:-8.7,skewY:-3.9,x:143.6,y:55.9},0).wait(1).to({scaleY:0.22,skewX:-8.1,skewY:-3.6,x:143.7,y:56.2},0).wait(1).to({scaleY:0.23,skewX:-7.4,skewY:-3.3,y:56.4},0).wait(1).to({scaleX:0.3,scaleY:0.23,skewX:-6.7,skewY:-3,x:143.8,y:56.7},0).wait(1).to({scaleY:0.24,skewX:-6,skewY:-2.7,x:143.9,y:57},0).wait(1).to({scaleY:0.25,skewX:-5.2,skewY:-2.3,x:144,y:57.3},0).wait(1).to({scaleY:0.26,skewX:-4.5,skewY:-2,x:144.1,y:57.6},0).wait(1).to({scaleY:0.26,skewX:-3.7,skewY:-1.6,x:144.2,y:57.9},0).wait(1).to({scaleY:0.27,skewX:-3,skewY:-1.3,x:144.3,y:58.1},0).wait(1).to({scaleY:0.28,skewX:-2.3,skewY:-1,x:144.4,y:58.4},0).wait(1).to({scaleY:0.28,skewX:-1.7,skewY:-0.8,y:58.6},0).wait(1).to({scaleY:0.29,skewX:-1.1,skewY:-0.5,x:144.5,y:58.9},0).wait(1).to({scaleY:0.29,skewX:-0.7,skewY:-0.3,x:144.6,y:59},0).wait(1).to({scaleY:0.3,skewX:-0.3,skewY:-0.2,y:59.2},0).wait(1).to({scaleY:0.3,skewX:-0.1,skewY:0,y:59.3},0).wait(1).to({regX:0.1,regY:-0.1,scaleY:0.3,skewX:0,x:144.7,y:59.5},0).to({startPosition:0},1).wait(1).to({regX:0,regY:-0.5,scaleY:0.3,rotation:-0.1,x:144.6,y:59.3},0).wait(1).to({scaleY:0.3,rotation:0,skewX:-0.2,skewY:-0.1},0).wait(1).to({scaleY:0.3,skewX:-0.5,skewY:-0.2,y:59.1},0).wait(1).to({scaleY:0.29,skewX:-0.9,skewY:-0.4,x:144.5,y:59},0).wait(1).to({scaleY:0.29,skewX:-1.4,skewY:-0.6,y:58.8},0).wait(1).to({scaleY:0.28,skewX:-1.9,skewY:-0.8,x:144.4,y:58.6},0).wait(1).to({scaleY:0.28,skewX:-2.5,skewY:-1.1,x:144.3,y:58.4},0).wait(1).to({scaleY:0.27,skewX:-3.2,skewY:-1.4,y:58.1},0).wait(1).to({scaleY:0.26,skewX:-3.9,skewY:-1.7,x:144.2,y:57.8},0).wait(1).to({scaleY:0.25,skewX:-4.6,skewY:-2.1,x:144.1,y:57.5},0).wait(1).to({scaleY:0.25,skewX:-5.4,skewY:-2.4,x:144,y:57.3},0).wait(1).to({scaleY:0.24,skewX:-6.2,skewY:-2.7,x:143.9,y:57},0).wait(1).to({scaleY:0.23,skewX:-6.9,skewY:-3.1,x:143.8,y:56.7},0).wait(1).to({scaleX:0.3,scaleY:0.23,skewX:-7.6,skewY:-3.4,x:143.7,y:56.4},0).wait(1).to({scaleY:0.22,skewX:-8.3,skewY:-3.7,x:143.6,y:56.1},0).wait(1).to({scaleY:0.21,skewX:-8.9,skewY:-4,y:55.9},0).wait(1).to({scaleY:0.21,skewX:-9.5,skewY:-4.2,x:143.5,y:55.7},0).wait(1).to({scaleY:0.2,skewX:-9.9,skewY:-4.4,x:143.4,y:55.5},0).wait(1).to({scaleY:0.2,skewX:-10.3,skewY:-4.6,y:55.4},0).wait(1).to({scaleY:0.2,skewX:-10.5,skewY:-4.7,y:55.3},0).wait(1).to({regX:0.1,regY:0,scaleY:0.2,skewX:-10.6},0).wait(1).to({regX:0,regY:-0.5,scaleY:0.2,y:55.2},0).wait(1).to({scaleY:0.2,skewX:-10.4,skewY:-4.6,y:55.3},0).wait(1).to({scaleY:0.2,skewX:-10.1,skewY:-4.5,y:55.4},0).wait(1).to({scaleY:0.2,skewX:-9.7,skewY:-4.3,x:143.5,y:55.5},0).wait(1).to({scaleY:0.21,skewX:-9.3,skewY:-4.1,y:55.7},0).wait(1).to({scaleY:0.21,skewX:-8.7,skewY:-3.9,x:143.6,y:55.9},0).wait(1).to({scaleY:0.22,skewX:-8.1,skewY:-3.6,x:143.7,y:56.2},0).wait(1).to({scaleY:0.23,skewX:-7.4,skewY:-3.3,y:56.4},0).wait(1).to({scaleX:0.3,scaleY:0.23,skewX:-6.7,skewY:-3,x:143.8,y:56.7},0).wait(1).to({scaleY:0.24,skewX:-6,skewY:-2.7,x:143.9,y:57},0).wait(1).to({scaleY:0.25,skewX:-5.2,skewY:-2.3,x:144,y:57.3},0).wait(1).to({scaleY:0.26,skewX:-4.5,skewY:-2,x:144.1,y:57.6},0).wait(1).to({scaleY:0.26,skewX:-3.7,skewY:-1.6,x:144.2,y:57.9},0).wait(1).to({scaleY:0.27,skewX:-3,skewY:-1.3,x:144.3,y:58.1},0).wait(1).to({scaleY:0.28,skewX:-2.3,skewY:-1,x:144.4,y:58.4},0).wait(1).to({scaleY:0.28,skewX:-1.7,skewY:-0.8,y:58.6},0).wait(1).to({scaleY:0.29,skewX:-1.1,skewY:-0.5,x:144.5,y:58.9},0).wait(1).to({scaleY:0.29,skewX:-0.7,skewY:-0.3,x:144.6,y:59},0).wait(1).to({scaleY:0.3,skewX:-0.3,skewY:-0.2,y:59.2},0).wait(1).to({scaleY:0.3,skewX:-0.1,skewY:0,y:59.3},0).wait(1).to({regX:0.1,regY:-0.1,scaleY:0.3,skewX:0,x:144.7,y:59.5},0).to({regX:0.4,scaleX:0.31,scaleY:0.23,skewX:-25,skewY:17,x:142.9,y:50.2},1).wait(1).to({regX:0,regY:-0.5,scaleX:0.31,scaleY:0.23,skewX:-24.9,skewY:17.5,x:142.6,y:51.8},0).wait(1).to({scaleX:0.31,scaleY:0.23,skewX:-24.6,skewY:18.4,x:142.3,y:55.2},0).wait(1).to({regX:0.4,regY:-0.2,scaleX:0.31,scaleY:0.23,skewX:-24.3,skewY:19.9,x:142.2,y:60.2},0).wait(1).to({regX:0,regY:-0.5,scaleY:0.2,skewX:-21.4,skewY:18.2,x:141.9,y:61.5},0).wait(1).to({scaleY:0.16,skewX:-18.2,skewY:16.5,y:63.2},0).wait(1).to({regX:0.6,regY:-0.4,scaleY:0.12,skewX:-14.8,skewY:14.5,x:142,y:65.1},0).to({regX:1.1,regY:0.9,scaleX:0.32,scaleY:0.19,skewX:10.6,skewY:5.4,x:143.1,y:72.2},3).to({regX:0.7,regY:0.8,scaleX:0.31,scaleY:0.26,skewX:0,skewY:1.8,x:143.5,y:65.9},3).to({regX:0.1,regY:-0.1,scaleX:0.3,scaleY:0.3,skewY:0,x:144.7,y:59.5},3).wait(1));

	// Right claw
	this.instance_13 = new lib.Snap_RightClaw("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(41.4,58.1,0.3,0.3,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0,regY:-0.5,x:41.5,y:57.9},0).wait(1).to({skewX:0.2,skewY:0.1},0).wait(1).to({skewX:0.4,skewY:0.2,x:41.6,y:57.8},0).wait(1).to({skewX:0.6,skewY:0.3,x:41.7},0).wait(1).to({skewX:1,skewY:0.4,x:41.9,y:57.7},0).wait(1).to({skewX:1.4,skewY:0.6,x:42,y:57.6},0).wait(1).to({skewX:1.8,skewY:0.7,x:42.2,y:57.5},0).wait(1).to({skewX:2.3,skewY:0.9,x:42.4,y:57.3},0).wait(1).to({skewX:2.8,skewY:1.2,x:42.6,y:57.2},0).wait(1).to({scaleY:0.3,skewX:3.3,skewY:1.4,x:42.9,y:57},0).wait(1).to({skewX:3.9,skewY:1.6,x:43.1,y:56.9},0).wait(1).to({skewX:4.4,skewY:1.8,x:43.3,y:56.7},0).wait(1).to({skewX:5,skewY:2.1,x:43.6,y:56.6},0).wait(1).to({skewX:5.5,skewY:2.3,x:43.8,y:56.4},0).wait(1).to({skewX:6,skewY:2.5,x:44,y:56.3},0).wait(1).to({skewX:6.4,skewY:2.7,x:44.2,y:56.2},0).wait(1).to({skewX:6.8,skewY:2.8,x:44.3,y:56.1},0).wait(1).to({skewX:7.1,skewY:3,x:44.5,y:56},0).wait(1).to({skewX:7.4,skewY:3.1,x:44.6,y:55.9},0).wait(1).to({skewX:7.5,x:44.7},0).wait(1).to({regX:0.1,regY:-0.2,skewX:7.6,skewY:3.2,y:56},0).wait(1).to({regX:0,regY:-0.5,skewY:3.1,x:44.6,y:55.9},0).wait(1).to({skewX:7.5,x:44.5},0).wait(1).to({skewX:7.3,skewY:3,x:44.4,y:56},0).wait(1).to({skewX:7,skewY:2.9,x:44.3,y:56.1},0).wait(1).to({skewX:6.6,skewY:2.8,x:44.2,y:56.2},0).wait(1).to({skewX:6.3,skewY:2.6,x:44,y:56.3},0).wait(1).to({skewX:5.8,skewY:2.4,x:43.8,y:56.4},0).wait(1).to({skewX:5.3,skewY:2.2,x:43.6,y:56.5},0).wait(1).to({skewX:4.8,skewY:2,x:43.4,y:56.7},0).wait(1).to({skewX:4.3,skewY:1.8,x:43.2,y:56.8},0).wait(1).to({skewX:3.7,skewY:1.6,x:43,y:57},0).wait(1).to({scaleY:0.3,skewX:3.2,skewY:1.3,x:42.7,y:57.1},0).wait(1).to({skewX:2.7,skewY:1.1,x:42.5,y:57.3},0).wait(1).to({skewX:2.1,skewY:0.9,x:42.3,y:57.4},0).wait(1).to({skewX:1.7,skewY:0.7,x:42.1,y:57.6},0).wait(1).to({skewX:1.2,skewY:0.5,x:41.9,y:57.7},0).wait(1).to({skewX:0.8,skewY:0.3,x:41.7,y:57.8},0).wait(1).to({skewX:0.5,skewY:0.2,x:41.6,y:57.9},0).wait(1).to({skewX:0.2,skewY:0.1,x:41.5},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:41.4,y:58},0).wait(1).to({regX:-0.1,regY:0,rotation:0,y:58.1},0).to({startPosition:0},1).wait(1).to({regX:0,regY:-0.5,x:41.5,y:57.9},0).wait(1).to({skewX:0.2,skewY:0.1},0).wait(1).to({skewX:0.4,skewY:0.2,x:41.6,y:57.8},0).wait(1).to({skewX:0.6,skewY:0.3,x:41.7},0).wait(1).to({skewX:1,skewY:0.4,x:41.9,y:57.7},0).wait(1).to({skewX:1.4,skewY:0.6,x:42,y:57.6},0).wait(1).to({skewX:1.8,skewY:0.7,x:42.2,y:57.5},0).wait(1).to({skewX:2.3,skewY:0.9,x:42.4,y:57.3},0).wait(1).to({skewX:2.8,skewY:1.2,x:42.6,y:57.2},0).wait(1).to({scaleY:0.3,skewX:3.3,skewY:1.4,x:42.9,y:57},0).wait(1).to({skewX:3.9,skewY:1.6,x:43.1,y:56.9},0).wait(1).to({skewX:4.4,skewY:1.8,x:43.3,y:56.7},0).wait(1).to({skewX:5,skewY:2.1,x:43.6,y:56.6},0).wait(1).to({skewX:5.5,skewY:2.3,x:43.8,y:56.4},0).wait(1).to({skewX:6,skewY:2.5,x:44,y:56.3},0).wait(1).to({skewX:6.4,skewY:2.7,x:44.2,y:56.2},0).wait(1).to({skewX:6.8,skewY:2.8,x:44.3,y:56.1},0).wait(1).to({skewX:7.1,skewY:3,x:44.5,y:56},0).wait(1).to({skewX:7.4,skewY:3.1,x:44.6,y:55.9},0).wait(1).to({skewX:7.5,x:44.7},0).wait(1).to({regX:0.1,regY:-0.2,skewX:7.6,skewY:3.2,y:56},0).wait(1).to({regX:0,regY:-0.5,skewY:3.1,x:44.6,y:55.9},0).wait(1).to({skewX:7.5,x:44.5},0).wait(1).to({skewX:7.3,skewY:3,x:44.4,y:56},0).wait(1).to({skewX:7,skewY:2.9,x:44.3,y:56.1},0).wait(1).to({skewX:6.6,skewY:2.8,x:44.2,y:56.2},0).wait(1).to({skewX:6.3,skewY:2.6,x:44,y:56.3},0).wait(1).to({skewX:5.8,skewY:2.4,x:43.8,y:56.4},0).wait(1).to({skewX:5.3,skewY:2.2,x:43.6,y:56.5},0).wait(1).to({skewX:4.8,skewY:2,x:43.4,y:56.7},0).wait(1).to({skewX:4.3,skewY:1.8,x:43.2,y:56.8},0).wait(1).to({skewX:3.7,skewY:1.6,x:43,y:57},0).wait(1).to({scaleY:0.3,skewX:3.2,skewY:1.3,x:42.7,y:57.1},0).wait(1).to({skewX:2.7,skewY:1.1,x:42.5,y:57.3},0).wait(1).to({skewX:2.1,skewY:0.9,x:42.3,y:57.4},0).wait(1).to({skewX:1.7,skewY:0.7,x:42.1,y:57.6},0).wait(1).to({skewX:1.2,skewY:0.5,x:41.9,y:57.7},0).wait(1).to({skewX:0.8,skewY:0.3,x:41.7,y:57.8},0).wait(1).to({skewX:0.5,skewY:0.2,x:41.6,y:57.9},0).wait(1).to({skewX:0.2,skewY:0.1,x:41.5},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:41.4,y:58},0).wait(1).to({regX:-0.1,regY:0,rotation:0,y:58.1},0).to({regX:0.2,regY:-0.6,scaleX:0.29,scaleY:0.32,skewX:47.9,skewY:31.7,x:62.5,y:10.2},1).wait(1).to({regX:0,regY:-0.5,scaleX:0.29,scaleY:0.33,skewX:48.9,skewY:33.2,x:63.5,y:11},0).wait(1).to({scaleX:0.28,scaleY:0.33,skewX:50.9,skewY:36,x:65.6,y:12.5},0).wait(1).to({regX:0.1,regY:-0.7,scaleX:0.28,scaleY:0.33,skewX:53.7,skewY:40.1,x:68.6,y:14.7},0).wait(1).to({regX:0,regY:-0.5,scaleX:0.28,scaleY:0.33,skewX:47,skewY:34.8,x:65.7,y:21.1},0).wait(1).to({scaleX:0.28,scaleY:0.32,skewX:39.7,skewY:29.1,x:62.8,y:28},0).wait(1).to({regX:0.6,regY:-0.8,scaleX:0.29,scaleY:0.31,skewX:31.8,skewY:23,x:59.7,y:35.5},0).to({regX:1.1,regY:-0.6,scaleX:0.32,scaleY:0.26,skewX:3.6,skewY:-10.7,x:42.3,y:69.2},5).wait(1).to({regX:0,regY:-0.5,scaleY:0.26,skewX:3,skewY:-8.5,x:41.4,y:67.1},0).wait(1).to({regX:1.2,scaleX:0.32,scaleY:0.28,skewX:2,skewY:-4.7,x:41,y:63.6},0).wait(1).to({regX:0,scaleX:0.31,scaleY:0.29,skewX:0.9,skewY:-2,x:40.8,y:60.4},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.3,scaleY:0.3,skewX:0,skewY:0,x:41.4,y:58.1},0).wait(1));

	// Left claw
	this.instance_14 = new lib.Snap_LeftClaw("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(88.3,88.6,0.3,0.3,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0},0).wait(1).to({skewX:0.1,skewY:0.2},0).wait(1).to({skewY:0.4,y:88.5},0).wait(1).to({skewX:0.3,skewY:0.6,x:88.2},0).wait(1).to({skewX:0.4,skewY:1,y:88.4},0).wait(1).to({skewX:0.6,skewY:1.4,y:88.3},0).wait(1).to({scaleX:0.3,skewX:0.7,skewY:1.8,x:88.1,y:88.2},0).wait(1).to({scaleY:0.3,skewX:0.9,skewY:2.3,y:88.1},0).wait(1).to({skewX:1.1,skewY:2.8,x:88,y:88},0).wait(1).to({skewX:1.4,skewY:3.3,x:87.9,y:87.9},0).wait(1).to({skewX:1.6,skewY:3.9,y:87.8},0).wait(1).to({scaleX:0.3,skewX:1.8,skewY:4.4,x:87.8,y:87.7},0).wait(1).to({skewX:2,skewY:5,y:87.6},0).wait(1).to({skewX:2.2,skewY:5.5,x:87.7,y:87.5},0).wait(1).to({skewX:2.4,skewY:6,y:87.3},0).wait(1).to({skewX:2.6,skewY:6.4,x:87.6},0).wait(1).to({scaleY:0.3,skewX:2.8,skewY:6.8,y:87.2},0).wait(1).to({skewX:2.9,skewY:7.1,x:87.5,y:87.1},0).wait(1).to({scaleX:0.3,skewX:3,skewY:7.4},0).wait(1).to({skewX:3.1,skewY:7.5,y:87},0).wait(1).to({regY:0.1,skewY:7.6},0).wait(1).to({regY:0},0).wait(1).to({skewX:3,skewY:7.4},0).wait(1).to({skewX:2.9,skewY:7.2},0).wait(1).to({scaleX:0.3,skewX:2.8,skewY:7,y:87.1},0).wait(1).to({skewX:2.7,skewY:6.6,x:87.6,y:87.2},0).wait(1).to({scaleY:0.3,skewX:2.5,skewY:6.2},0).wait(1).to({skewX:2.4,skewY:5.8,y:87.3},0).wait(1).to({skewX:2.2,skewY:5.3,x:87.7,y:87.4},0).wait(1).to({skewX:2,skewY:4.8,y:87.5},0).wait(1).to({scaleX:0.3,skewX:1.7,skewY:4.3,x:87.8,y:87.7},0).wait(1).to({skewX:1.5,skewY:3.7,x:87.9,y:87.8},0).wait(1).to({skewX:1.3,skewY:3.2,y:87.9},0).wait(1).to({skewX:1.1,skewY:2.7,x:88,y:88},0).wait(1).to({scaleY:0.3,skewX:0.9,skewY:2.1,y:88.1},0).wait(1).to({skewX:0.7,skewY:1.7,x:88.1,y:88.2},0).wait(1).to({scaleX:0.3,skewX:0.5,skewY:1.2,y:88.3},0).wait(1).to({skewX:0.3,skewY:0.8,x:88.2,y:88.4},0).wait(1).to({skewX:0.2,skewY:0.5,y:88.5},0).wait(1).to({skewX:0.1,skewY:0.2},0).wait(1).to({skewX:0,skewY:0},0).wait(1).to({regX:-0.1,x:88.3,y:88.6},0).to({startPosition:0},1).wait(1).to({regX:0},0).wait(1).to({skewX:0.1,skewY:0.2},0).wait(1).to({skewY:0.4,y:88.5},0).wait(1).to({skewX:0.3,skewY:0.6,x:88.2},0).wait(1).to({skewX:0.4,skewY:1,y:88.4},0).wait(1).to({skewX:0.6,skewY:1.4,y:88.3},0).wait(1).to({scaleX:0.3,skewX:0.7,skewY:1.8,x:88.1,y:88.2},0).wait(1).to({scaleY:0.3,skewX:0.9,skewY:2.3,y:88.1},0).wait(1).to({skewX:1.1,skewY:2.8,x:88,y:88},0).wait(1).to({skewX:1.4,skewY:3.3,x:87.9,y:87.9},0).wait(1).to({skewX:1.6,skewY:3.9,y:87.8},0).wait(1).to({scaleX:0.3,skewX:1.8,skewY:4.4,x:87.8,y:87.7},0).wait(1).to({skewX:2,skewY:5,y:87.6},0).wait(1).to({skewX:2.2,skewY:5.5,x:87.7,y:87.5},0).wait(1).to({skewX:2.4,skewY:6,y:87.3},0).wait(1).to({skewX:2.6,skewY:6.4,x:87.6},0).wait(1).to({scaleY:0.3,skewX:2.8,skewY:6.8,y:87.2},0).wait(1).to({skewX:2.9,skewY:7.1,x:87.5,y:87.1},0).wait(1).to({scaleX:0.3,skewX:3,skewY:7.4},0).wait(1).to({skewX:3.1,skewY:7.5,y:87},0).wait(1).to({regY:0.1,skewY:7.6},0).wait(1).to({regY:0},0).wait(1).to({skewX:3,skewY:7.4},0).wait(1).to({skewX:2.9,skewY:7.2},0).wait(1).to({scaleX:0.3,skewX:2.8,skewY:7,y:87.1},0).wait(1).to({skewX:2.7,skewY:6.6,x:87.6,y:87.2},0).wait(1).to({scaleY:0.3,skewX:2.5,skewY:6.2},0).wait(1).to({skewX:2.4,skewY:5.8,y:87.3},0).wait(1).to({skewX:2.2,skewY:5.3,x:87.7,y:87.4},0).wait(1).to({skewX:2,skewY:4.8,y:87.5},0).wait(1).to({scaleX:0.3,skewX:1.7,skewY:4.3,x:87.8,y:87.7},0).wait(1).to({skewX:1.5,skewY:3.7,x:87.9,y:87.8},0).wait(1).to({skewX:1.3,skewY:3.2,y:87.9},0).wait(1).to({skewX:1.1,skewY:2.7,x:88,y:88},0).wait(1).to({scaleY:0.3,skewX:0.9,skewY:2.1,y:88.1},0).wait(1).to({skewX:0.7,skewY:1.7,x:88.1,y:88.2},0).wait(1).to({scaleX:0.3,skewX:0.5,skewY:1.2,y:88.3},0).wait(1).to({skewX:0.3,skewY:0.8,x:88.2,y:88.4},0).wait(1).to({skewX:0.2,skewY:0.5,y:88.5},0).wait(1).to({skewX:0.1,skewY:0.2},0).wait(1).to({skewX:0,skewY:0},0).wait(1).to({regX:-0.1,x:88.3,y:88.6},0).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.31,skewX:56.2,skewY:68.6,x:76.1,y:54.1},1).wait(1).to({regX:0,regY:0,scaleY:0.31,skewX:59,skewY:69.3,x:75.9,y:54.4},0).wait(1).to({scaleY:0.3,skewX:64.3,skewY:70.8,x:75.4,y:55.2},0).wait(1).to({regX:0.3,regY:0.1,scaleY:0.3,skewX:71.9,skewY:72.9,x:74.8,y:56.4},0).wait(1).to({regX:0,regY:0,scaleX:0.3,scaleY:0.3,skewX:63.4,skewY:64.9,x:76.8,y:60.1},0).wait(1).to({scaleX:0.3,scaleY:0.29,skewX:54.2,skewY:56.3,x:78.9,y:64.3},0).wait(1).to({regX:0.5,scaleX:0.31,scaleY:0.29,skewX:44.2,skewY:46.9,x:81.4,y:68.9},0).to({regX:0.6,regY:-0.1,scaleX:0.31,scaleY:0.28,skewX:36.9,skewY:36,x:81.9,y:83.2},4).to({regX:-0.1,regY:0,scaleX:0.3,scaleY:0.3,skewX:0,skewY:0,x:88.3,y:88.6},5).wait(1));

	// Right legs
	this.instance_15 = new lib.Snap_RightLegs("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(79.6,79.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0.5,regY:0.5,x:79.7,y:80},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:80.1},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:80.2},0).wait(1).to({scaleY:0.3},0).wait(1).to({y:80.3},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.29,y:80.4},0).wait(1).to({scaleY:0.29,y:80.5},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.6},0).wait(1).to({y:80.7},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({regX:0,regY:0,x:79.6,y:80.7},0).wait(1).to({regX:0.5,regY:0.5,x:79.7,y:80.8},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.7},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.6},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.5},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.4},0).wait(1).to({scaleY:0.3,y:80.3},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.3,y:80.2},0).wait(1).to({y:80.1},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.3,y:80},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:79.6,y:79.8},0).to({startPosition:0},1).wait(1).to({regX:0.5,regY:0.5,x:79.7,y:80},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:80.1},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:80.2},0).wait(1).to({scaleY:0.3},0).wait(1).to({y:80.3},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.29,y:80.4},0).wait(1).to({scaleY:0.29,y:80.5},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.6},0).wait(1).to({y:80.7},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({regX:0,regY:0,x:79.6,y:80.7},0).wait(1).to({regX:0.5,regY:0.5,x:79.7,y:80.8},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.7},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.6},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,y:80.5},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,y:80.4},0).wait(1).to({scaleY:0.3,y:80.3},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.3,y:80.2},0).wait(1).to({y:80.1},0).wait(1).to({scaleY:0.3},0).wait(1).to({scaleY:0.3,y:80},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:79.6,y:79.8},0).to({regX:0.2,scaleY:0.31,skewX:26.7,skewY:40.4,x:73,y:45},1).wait(1).to({regX:0.5,regY:0.5,scaleX:0.3,scaleY:0.31,skewX:21,skewY:30.7,x:73.9,y:49.5},0).wait(1).to({scaleX:0.31,scaleY:0.3,skewX:10.2,skewY:12.1,x:75.7,y:57.8},0).wait(1).to({regX:0.6,regY:0.4,scaleX:0.32,scaleY:0.29,skewX:-5.4,skewY:-14.7,x:78.2,y:69.6},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.31,scaleY:0.29,skewX:-4.9,skewY:-11.1,x:78.4,y:72.5},0).wait(1).to({scaleX:0.31,scaleY:0.3,skewX:-4.3,skewY:-7.1,x:78.7,y:75.6},0).wait(1).to({regX:0.8,regY:0.6,scaleX:0.31,scaleY:0.31,skewX:-3.6,skewY:-2.8,x:79.1,y:78.9},0).to({regY:0.7,scaleX:0.31,scaleY:0.24,skewX:-17.1,skewY:-1.9,x:75.9,y:86.2},3).to({regX:0,regY:0,scaleX:0.3,scaleY:0.3,skewX:0,skewY:0,x:79.6,y:79.8},6).wait(1));

	// Left legs
	this.instance_16 = new lib.Snap_LeftLegs("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(121,85.2,0.3,0.3,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0.5,regY:0.5,y:85.4},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({skewX:-0.1,y:85.5},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:85.6},0).wait(1).to({scaleY:0.3,skewX:-0.2},0).wait(1).to({y:85.7},0).wait(1).to({scaleY:0.3,skewX:-0.3},0).wait(1).to({scaleY:0.29,y:85.8},0).wait(1).to({scaleY:0.29,skewX:-0.4},0).wait(1).to({scaleY:0.29,y:85.9},0).wait(1).to({skewX:-0.5,x:120.9},0).wait(1).to({scaleY:0.29,y:86},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,skewX:-0.6,y:86.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({regX:0.1,regY:0.1,x:120.8,y:86},0).wait(1).to({regX:0.5,regY:0.5,x:120.9},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,skewX:-0.5},0).wait(1).to({y:85.9},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,skewX:-0.4,y:85.8},0).wait(1).to({scaleY:0.29,x:121},0).wait(1).to({y:85.7},0).wait(1).to({scaleY:0.29,skewX:-0.3},0).wait(1).to({scaleY:0.3,y:85.6},0).wait(1).to({scaleY:0.3,skewX:-0.2},0).wait(1).to({scaleY:0.3,y:85.5},0).wait(1).to({skewX:-0.1},0).wait(1).to({scaleY:0.3,y:85.4},0).wait(1).to({scaleY:0.3},0).wait(1).to({skewX:0},0).wait(1).to({scaleY:0.3,y:85.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:-0.1,y:85.2},0).to({startPosition:0},1).wait(1).to({regX:0.5,regY:0.5,y:85.4},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3},0).wait(1).to({skewX:-0.1,y:85.5},0).wait(1).to({scaleY:0.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.3,y:85.6},0).wait(1).to({scaleY:0.3,skewX:-0.2},0).wait(1).to({y:85.7},0).wait(1).to({scaleY:0.3,skewX:-0.3},0).wait(1).to({scaleY:0.29,y:85.8},0).wait(1).to({scaleY:0.29,skewX:-0.4},0).wait(1).to({scaleY:0.29,y:85.9},0).wait(1).to({skewX:-0.5,x:120.9},0).wait(1).to({scaleY:0.29,y:86},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,skewX:-0.6,y:86.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({regX:0.1,regY:0.1,x:120.8,y:86},0).wait(1).to({regX:0.5,regY:0.5,x:120.9},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.29,skewX:-0.5},0).wait(1).to({y:85.9},0).wait(1).to({scaleY:0.29},0).wait(1).to({scaleY:0.29,skewX:-0.4,y:85.8},0).wait(1).to({scaleY:0.29,x:121},0).wait(1).to({y:85.7},0).wait(1).to({scaleY:0.29,skewX:-0.3},0).wait(1).to({scaleY:0.3,y:85.6},0).wait(1).to({scaleY:0.3,skewX:-0.2},0).wait(1).to({scaleY:0.3,y:85.5},0).wait(1).to({skewX:-0.1},0).wait(1).to({scaleY:0.3,y:85.4},0).wait(1).to({scaleY:0.3},0).wait(1).to({skewX:0},0).wait(1).to({scaleY:0.3,y:85.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:-0.1,y:85.2},0).to({regX:0.3,regY:0.2,scaleX:0.31,scaleY:0.3,skewX:-8.4,skewY:-19.1,x:127.4,y:56.4},1).wait(1).to({regX:0.5,regY:0.5,scaleX:0.31,scaleY:0.3,skewX:-6,skewY:-12.3,x:126.7,y:60.3},0).wait(1).to({scaleX:0.32,scaleY:0.29,skewX:-1.3,skewY:0.8,x:125.3,y:67.5},0).wait(1).to({regY:0.4,scaleX:0.33,scaleY:0.29,skewX:5.4,skewY:19.7,x:123.3,y:78},0).wait(1).to({regY:0.5,scaleX:0.32,skewX:5,skewY:17.4,x:122.9,y:80.5},0).wait(1).to({scaleX:0.32,scaleY:0.28,skewX:4.5,skewY:15,x:122.5,y:83.2},0).wait(1).to({regX:0.4,regY:0.8,scaleX:0.32,scaleY:0.28,skewX:4,skewY:12.4,x:122,y:86.1},0).to({regX:0.6,scaleX:0.31,scaleY:0.21,skewX:11.6,skewY:8.3,x:122.9,y:91.9},3).to({regX:0.1,regY:-0.1,scaleX:0.3,scaleY:0.3,skewX:0,skewY:0,x:121,y:85.2},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,-116.4,344.4,220.7);


// stage content:
(lib.ScoutAndSnap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Snap and Scout
	this.instance = new lib.Snap();
	this.instance.parent = this;
	this.instance.setTransform(184.4,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265.5,116.5,344.3,220.6);
// library properties:
lib.properties = {
	id: '1E3F184DA0274559B8D2FFE2D3E23CAB',
	width: 531,
	height: 233,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scoutandsnap_atlas_.png?1499358191104", id:"scoutandsnap_atlas_"}
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
an.compositions['1E3F184DA0274559B8D2FFE2D3E23CAB'] = {
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