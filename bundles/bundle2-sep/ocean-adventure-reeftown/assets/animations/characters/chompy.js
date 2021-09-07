(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chompy_atlas_", frames: [[270,121,96,68],[270,0,84,119],[356,0,38,80],[0,0,268,239],[270,191,43,45],[356,82,17,35]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["chompy_atlas_"];
	this.gotoAndStop(5);
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


(lib.FrontFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FrontFin, new cjs.Rectangle(0,0,96,68), null);


(lib.EyelidNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EyelidNear, new cjs.Rectangle(0,0,43,45), null);


(lib.EyelidFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EyelidFar, new cjs.Rectangle(0,0,17,35), null);


(lib.ChompyTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChompyTail, new cjs.Rectangle(0,0,84,119), null);


(lib.ChompyFinFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChompyFinFar, new cjs.Rectangle(0,0,38,80), null);


(lib.ChompyBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,239);


(lib.Chompy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:55});

	// timeline functions:
	this.frame_94 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Eyelid Near
	this.instance = new lib.EyelidNear();
	this.instance.parent = this;
	this.instance.setTransform(59.9,23.7,1,1,0,0,0,21.5,22.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},7).wait(55).to({_off:false,scaleX:1.03,scaleY:1,skewX:0.8,skewY:-1.5,x:61.1,y:25.2},0).wait(1).to({regY:22.5,scaleX:1.03,skewY:-1,x:61.2,y:26.2},0).wait(1).to({scaleX:1.03,skewX:0.9,skewY:-0.5,y:26.9},0).wait(1).to({scaleX:1.03,skewY:-0.2,x:61.3,y:27.4},0).wait(1).to({skewY:0,y:27.8},0).wait(1).to({scaleX:1.03,skewX:1,skewY:0.2,y:28},0).wait(1).to({regX:21.7,regY:22.4,x:61.4,y:27.9},0).wait(1).to({regX:21.5,regY:22.5,skewX:0.9,skewY:0.1,x:61.2,y:27.7},0).wait(1).to({scaleX:1.03,skewY:-0.3,x:61.1,y:27.3},0).wait(1).to({scaleX:1.03,skewY:-0.9,y:26.5},0).wait(1).to({regX:21.7,regY:22.4,scaleX:1.03,skewX:0.8,skewY:-1.8,x:61.3,y:25.3},0).to({_off:true},1).wait(15));

	// Eyelid Far
	this.instance_1 = new lib.EyelidFar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.3,10.5,1,1,0,0,0,8.6,17.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},7).wait(55).to({_off:false,regX:8.7,regY:17.8,scaleX:1.02,rotation:-1.5,x:125.9,y:10.2},0).wait(1).to({regX:8.5,regY:17.5,scaleX:1.02,rotation:0,skewX:-1.6,skewY:-1,y:11.4},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-1.7,skewY:-0.5,x:126,y:12.5},0).wait(1).to({skewX:-1.8,skewY:-0.2,x:126.1,y:13.4},0).wait(1).to({scaleX:1.02,skewY:0,y:14.1},0).wait(1).to({skewX:-1.9,skewY:0.2,y:14.4},0).wait(1).to({regX:8.6,regY:17.9,x:126.4,y:14.7},0).wait(1).to({regX:8.5,regY:17.5,skewY:0.1,x:126.2,y:13.9},0).wait(1).to({skewX:-1.8,skewY:-0.3,y:13.1},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:-1.7,skewY:-0.9,x:126.1,y:11.6},0).wait(1).to({regX:8.6,regY:18,scaleX:1.02,skewX:-1.6,skewY:-1.8,x:126.2,y:10.1},0).to({_off:true},1).wait(15));

	// Right fin
	this.instance_2 = new lib.FrontFin();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,47.9,1,1,0,0,0,92.5,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({regX:48,regY:34,rotation:-0.1,x:-40.5,y:49.8},0).wait(1).to({rotation:0,skewX:-0.4,skewY:-0.5,x:-40.4,y:50.1},0).wait(1).to({skewX:-0.7,skewY:-1,y:50.5},0).wait(1).to({scaleY:1,skewX:-1.3,skewY:-1.8,y:51.1},0).wait(1).to({skewX:-2,skewY:-2.8,x:-40.3,y:51.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2.9,skewY:-4,x:-40.2,y:52.9},0).wait(1).to({skewX:-3.9,skewY:-5.4,x:-40.1,y:54},0).wait(1).to({scaleY:1,skewX:-5,skewY:-7,x:-39.9,y:55.3},0).wait(1).to({skewX:-6.3,skewY:-8.7,x:-39.6,y:56.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-7.6,skewY:-10.5,x:-39.4,y:58.1},0).wait(1).to({scaleY:1,skewX:-8.9,skewY:-12.3,x:-39,y:59.5},0).wait(1).to({skewX:-10.1,skewY:-14,x:-38.7,y:60.8},0).wait(1).to({scaleY:1.01,skewX:-11.3,skewY:-15.6,x:-38.3,y:62},0).wait(1).to({scaleY:1.01,skewX:-12.2,skewY:-16.9,x:-38,y:63.1},0).wait(1).to({scaleX:1,skewX:-13.1,skewY:-18.1,x:-37.7,y:63.9},0).wait(1).to({skewX:-13.8,skewY:-19,x:-37.4,y:64.6},0).wait(1).to({scaleY:1.01,skewX:-14.3,skewY:-19.7,x:-37.2,y:65.1},0).wait(1).to({skewX:-14.6,skewY:-20.2,x:-37.1,y:65.5},0).wait(1).to({skewX:-14.8,skewY:-20.5,x:-37,y:65.7},0).wait(1).to({regX:92.5,regY:32.4,skewX:-14.9,skewY:-20.6,x:4.1,y:48.5},0).wait(1).to({regX:48,regY:34,skewX:-14.8,skewY:-20.4,x:-37.1,y:65.5},0).wait(1).to({skewX:-14.5,skewY:-20,x:-37.2,y:65.2},0).wait(1).to({skewX:-14.1,skewY:-19.4,x:-37.4,y:64.8},0).wait(1).to({scaleY:1.01,skewX:-13.5,skewY:-18.6,x:-37.7,y:64.1},0).wait(1).to({skewX:-12.7,skewY:-17.5,x:-37.9,y:63.3},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-11.7,skewY:-16.2,x:-38.2,y:62.3},0).wait(1).to({skewX:-10.6,skewY:-14.6,x:-38.6,y:61.1},0).wait(1).to({scaleY:1,skewX:-9.3,skewY:-12.9,x:-39,y:59.7},0).wait(1).to({scaleY:1,skewX:-8,skewY:-11,x:-39.3,y:58.3},0).wait(1).to({scaleX:1,skewX:-6.6,skewY:-9.1,x:-39.7,y:56.8},0).wait(1).to({scaleY:1,skewX:-5.3,skewY:-7.3,x:-39.9,y:55.3},0).wait(1).to({scaleY:1,skewX:-4,skewY:-5.6,x:-40.1,y:54},0).wait(1).to({skewX:-2.9,skewY:-4,x:-40.3,y:52.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2,skewY:-2.8,x:-40.4,y:51.7},0).wait(1).to({skewX:-1.2,skewY:-1.7,y:50.9},0).wait(1).to({scaleY:1,skewX:-0.7,skewY:-0.9,x:-40.5,y:50.2},0).wait(1).to({skewX:-0.3,skewY:-0.4,y:49.8},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:49.6},0).wait(1).to({regX:92.5,regY:32.2,rotation:0,x:4,y:47.9},0).wait(2).to({regX:48,regY:34,rotation:-0.1,x:-40.5,y:49.8},0).wait(1).to({rotation:0,skewX:-0.4,skewY:-0.5,x:-40.4,y:50.1},0).wait(1).to({skewX:-0.7,skewY:-1,y:50.5},0).wait(1).to({scaleY:1,skewX:-1.3,skewY:-1.8,y:51.1},0).wait(1).to({scaleX:1,skewX:-2,skewY:-2.7,x:-40.3,y:51.9},0).wait(1).to({scaleY:1,skewX:-2.9,skewY:-3.9,x:-40.2,y:52.8},0).wait(1).to({scaleY:1,skewX:-3.9,skewY:-5.3,x:-40.1,y:54},0).wait(1).to({scaleX:1,skewX:-5,skewY:-6.9,x:-39.9,y:55.2},0).wait(1).to({scaleY:1,skewX:-6.3,skewY:-8.6,x:-39.6,y:56.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-7.6,skewY:-10.3,x:-39.4,y:57.9},0).wait(1).to({scaleY:1.01,skewX:-8.9,skewY:-12.1,x:-39,y:59.3},0).wait(1).to({scaleY:1.01,skewX:-10.1,skewY:-13.8,x:-38.7,y:60.6},0).wait(1).to({scaleX:1,skewX:-11.2,skewY:-15.3,x:-38.3,y:61.8},0).wait(1).to({scaleY:1.01,skewX:-12.2,skewY:-16.7,x:-38,y:62.9},0).wait(1).to({skewX:-13.1,skewY:-17.8,x:-37.7,y:63.7},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-13.7,skewY:-18.7,x:-37.4,y:64.4},0).wait(1).to({skewX:-14.2,skewY:-19.4,x:-37.2,y:64.9},0).wait(1).to({skewX:-14.6,skewY:-19.9,x:-37.1,y:65.2},0).wait(1).to({scaleY:1.01,skewX:-14.8,skewY:-20.2,x:-37,y:65.5},0).wait(1).to({regX:92.5,regY:32.4,skewX:-14.9,skewY:-20.3,x:4.1,y:48.5},0).wait(1).to({regX:48,regY:34,skewX:-14.7,skewY:-20.1,x:-37.1,y:65.3},0).wait(1).to({scaleY:1.01,skewX:-14.5,skewY:-19.7,x:-37.2,y:65},0).wait(1).to({skewX:-14,skewY:-19.1,x:-37.4,y:64.6},0).wait(1).to({skewX:-13.4,skewY:-18.3,x:-37.6,y:64},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-12.6,skewY:-17.2,x:-37.9,y:63.2},0).wait(1).to({skewX:-11.7,skewY:-15.9,x:-38.2,y:62.1},0).wait(1).to({scaleY:1.01,skewX:-10.6,skewY:-14.4,x:-38.6,y:61},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-9.3,skewY:-12.7,x:-38.9,y:59.6},0).wait(1).to({scaleY:1,skewX:-8,skewY:-10.9,x:-39.3,y:58.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-6.6,skewY:-9,x:-39.7,y:56.7},0).wait(1).to({scaleY:1,skewX:-5.3,skewY:-7.2,x:-39.9,y:55.2},0).wait(1).to({scaleX:1,skewX:-4,skewY:-5.5,x:-40.1,y:53.9},0).wait(1).to({scaleY:1,skewX:-2.9,skewY:-4,x:-40.2,y:52.7},0).wait(1).to({scaleY:1,skewX:-2,skewY:-2.7,x:-40.4,y:51.7},0).wait(1).to({scaleX:1,skewX:-1.2,skewY:-1.7,y:50.9},0).wait(1).to({scaleY:1,skewX:-0.7,skewY:-0.9,y:50.3},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:-40.5,y:49.9},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:49.6},0).wait(1).to({regX:92.5,regY:32.2,rotation:0,x:4,y:47.9},0).wait(1));

	// Tail
	this.instance_3 = new lib.ChompyTail();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-66.6,-39.1,1,1,0,0,0,65,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({regX:42,regY:59.5,scaleX:1,scaleY:1,rotation:-0.1,x:-89.7,y:-84.9},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:-0.5,x:-90,y:-84.6},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-1,skewY:-0.9,x:-90.3,y:-84.2},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-1.7,skewY:-1.5,x:-90.9,y:-83.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-2.6,skewY:-2.3,x:-91.6,y:-82.5},0).wait(1).to({scaleX:1.02,scaleY:0.95,skewX:-3.7,skewY:-3.3,x:-92.4,y:-81.3},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-5,skewY:-4.5,x:-93.3,y:-79.9},0).wait(1).to({scaleX:1.03,scaleY:0.9,skewX:-6.5,skewY:-5.8,x:-94.2,y:-78.3},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-8.1,skewY:-7.2,x:-95.1,y:-76.5},0).wait(1).to({scaleX:1.04,scaleY:0.86,skewX:-9.8,skewY:-8.7,x:-96,y:-74.7},0).wait(1).to({scaleX:1.05,scaleY:0.83,skewX:-11.4,skewY:-10.2,x:-96.8,y:-72.8},0).wait(1).to({scaleX:1.06,scaleY:0.81,skewX:-13,skewY:-11.6,x:-97.5,y:-71},0).wait(1).to({scaleX:1.06,scaleY:0.79,skewX:-14.5,skewY:-13,x:-98,y:-69.2},0).wait(1).to({scaleX:1.07,scaleY:0.77,skewX:-15.7,skewY:-14.1,x:-98.4,y:-67.7},0).wait(1).to({scaleX:1.07,scaleY:0.75,skewX:-16.8,skewY:-15.1,x:-98.8,y:-66.5},0).wait(1).to({scaleX:1.08,scaleY:0.74,skewX:-17.7,skewY:-15.8,x:-99,y:-65.5},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18.3,skewY:-16.4,x:-99.1,y:-64.7},0).wait(1).to({scaleX:1.08,scaleY:0.72,skewX:-18.8,skewY:-16.8,x:-99.2,y:-64.1},0).wait(1).to({scaleX:1.08,scaleY:0.72,skewX:-19,skewY:-17,x:-99.3,y:-63.8},0).wait(1).to({regX:64.4,regY:105.7,scaleY:0.72,skewX:-19.1,skewY:-17.1,x:-64.7,y:-39.8},0).wait(1).to({regX:42,regY:59.5,scaleY:0.72,skewX:-19,skewY:-17,x:-98.7,y:-64.2},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18.6,skewY:-16.7,x:-98.6,y:-64.6},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18.1,skewY:-16.2,x:-98.5,y:-65.2},0).wait(1).to({scaleX:1.07,scaleY:0.74,skewX:-17.3,skewY:-15.5,x:-98.3,y:-66.2},0).wait(1).to({scaleX:1.07,scaleY:0.76,skewX:-16.3,skewY:-14.6,x:-98,y:-67.4},0).wait(1).to({scaleX:1.06,scaleY:0.78,skewX:-15,skewY:-13.5,x:-97.6,y:-68.8},0).wait(1).to({scaleX:1.06,scaleY:0.8,skewX:-13.6,skewY:-12.2,x:-97.1,y:-70.4},0).wait(1).to({scaleX:1.05,scaleY:0.82,skewX:-12,skewY:-10.7,x:-96.5,y:-72.3},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-10.3,skewY:-9.2,x:-95.6,y:-74.3},0).wait(1).to({scaleX:1.04,scaleY:0.88,skewX:-8.5,skewY:-7.6,x:-94.7,y:-76.3},0).wait(1).to({scaleX:1.03,scaleY:0.9,skewX:-6.8,skewY:-6.1,x:-93.8,y:-78.2},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-5.2,skewY:-4.6,x:-92.7,y:-79.9},0).wait(1).to({scaleX:1.02,scaleY:0.94,skewX:-3.8,skewY:-3.4,x:-91.8,y:-81.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-2.6,skewY:-2.3,x:-91,y:-82.6},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-1.6,skewY:-1.4,x:-90.3,y:-83.6},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.9,skewY:-0.8,x:-89.7,y:-84.4},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:-0.4,skewX:0,skewY:0,x:-89.3,y:-84.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:-89.1,y:-85.1},0).wait(1).to({regX:65,regY:105.5,scaleY:1,rotation:0,x:-66.6,y:-39.1},0).wait(2).to({regX:42,regY:59.5,scaleX:1,scaleY:1,rotation:-0.1,x:-89.7,y:-85},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-0.5,skewY:-0.4,x:-90,y:-84.7},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-1,skewY:-0.8,x:-90.3,y:-84.2},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-1.7,skewY:-1.5,x:-90.8,y:-83.5},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-2.6,skewY:-2.3,x:-91.6,y:-82.5},0).wait(1).to({scaleX:1.01,scaleY:0.95,skewX:-3.7,skewY:-3.2,x:-92.3,y:-81.4},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-5,skewY:-4.4,x:-93.2,y:-80.1},0).wait(1).to({scaleX:1.03,scaleY:0.91,skewX:-6.5,skewY:-5.7,x:-94.2,y:-78.5},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-8.1,skewY:-7.1,x:-95.1,y:-76.8},0).wait(1).to({scaleX:1.04,scaleY:0.86,skewX:-9.7,skewY:-8.6,x:-96,y:-75},0).wait(1).to({scaleX:1.05,scaleY:0.83,skewX:-11.4,skewY:-10,x:-96.8,y:-73.1},0).wait(1).to({scaleX:1.05,scaleY:0.81,skewX:-13,skewY:-11.4,x:-97.5,y:-71.4},0).wait(1).to({scaleX:1.06,scaleY:0.79,skewX:-14.4,skewY:-12.7,x:-98,y:-69.8},0).wait(1).to({scaleX:1.07,scaleY:0.77,skewX:-15.7,skewY:-13.8,x:-98.4,y:-68.3},0).wait(1).to({scaleX:1.07,scaleY:0.75,skewX:-16.8,skewY:-14.8,x:-98.7,y:-67.1},0).wait(1).to({scaleX:1.07,scaleY:0.74,skewX:-17.6,skewY:-15.5,x:-99,y:-66.1},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18.3,skewY:-16.1,x:-99.1,y:-65.4},0).wait(1).to({scaleX:1.08,scaleY:0.72,skewX:-18.7,skewY:-16.5,x:-99.3,y:-64.8},0).wait(1).to({scaleX:1.08,scaleY:0.72,skewX:-19,skewY:-16.7,y:-64.5},0).wait(1).to({regX:64.4,regY:105.6,scaleX:1.08,scaleY:0.72,skewX:-19.1,skewY:-16.8,x:-64.8,y:-40.3},0).wait(1).to({regX:42,regY:59.5,scaleX:1.08,scaleY:0.72,skewX:-18.9,skewY:-16.7,x:-98.7,y:-64.8},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18.6,skewY:-16.3,x:-98.6,y:-65.2},0).wait(1).to({scaleX:1.08,scaleY:0.73,skewX:-18,skewY:-15.9,x:-98.5,y:-65.8},0).wait(1).to({scaleX:1.07,scaleY:0.75,skewX:-17.3,skewY:-15.2,x:-98.3,y:-66.8},0).wait(1).to({scaleX:1.07,scaleY:0.76,skewX:-16.2,skewY:-14.3,x:-98,y:-67.8},0).wait(1).to({scaleX:1.06,scaleY:0.78,skewX:-15,skewY:-13.2,x:-97.6,y:-69.3},0).wait(1).to({scaleX:1.06,scaleY:0.8,skewX:-13.6,skewY:-11.9,x:-97.1,y:-70.9},0).wait(1).to({scaleX:1.05,scaleY:0.82,skewX:-12,skewY:-10.5,x:-96.4,y:-72.7},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-10.2,skewY:-9,x:-95.6,y:-74.6},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-8.5,skewY:-7.4,x:-94.7,y:-76.5},0).wait(1).to({scaleX:1.03,scaleY:0.9,skewX:-6.8,skewY:-5.9,x:-93.7,y:-78.3},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-5.2,skewY:-4.5,x:-92.8,y:-80},0).wait(1).to({scaleX:1.02,scaleY:0.95,skewX:-3.8,skewY:-3.3,x:-91.8,y:-81.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-2.6,skewY:-2.3,x:-91,y:-82.6},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-1.6,skewY:-1.4,x:-90.3,y:-83.6},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.9,skewY:-0.8,x:-89.7,y:-84.3},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:-0.4,skewX:0,skewY:0,x:-89.3,y:-84.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:-89.1,y:-85.1},0).wait(1).to({regX:65,regY:105.5,scaleY:1,rotation:0,x:-66.6,y:-39.1},0).wait(1));

	// Body
	this.instance_4 = new lib.ChompyBody("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.9,-0.5,1,1,0,0,0,136.8,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:134,regY:119.5,x:10.1,y:12.7},0).wait(1).to({x:10.2},0).wait(1).to({scaleX:1,skewX:0.1,y:12.9},0).wait(1).to({skewX:0.2,skewY:-0.1,x:10.3,y:13.1},0).wait(1).to({scaleX:1,skewX:0.3,y:13.2},0).wait(1).to({skewX:0.4,x:10.4,y:13.6},0).wait(1).to({scaleX:1,skewX:0.5,skewY:-0.2,x:10.5,y:13.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.6,x:10.6,y:14.2},0).wait(1).to({scaleX:1,skewX:0.8,x:10.7,y:14.6},0).wait(1).to({scaleX:1.01,skewX:1,skewY:-0.3,x:10.8,y:15},0).wait(1).to({scaleX:1.01,skewX:1.1,x:10.9,y:15.5},0).wait(1).to({scaleX:1.01,skewX:1.3,skewY:-0.4,x:11.1,y:15.8},0).wait(1).to({skewX:1.4,x:11.2,y:16.1},0).wait(1).to({scaleX:1.01,skewX:1.5,skewY:-0.5,y:16.4},0).wait(1).to({scaleX:1.01,skewX:1.7,x:11.3,y:16.7},0).wait(1).to({scaleX:1.01,x:11.4,y:16.9},0).wait(1).to({skewX:1.8,skewY:-0.6,y:17.1},0).wait(1).to({x:11.5,y:17.2},0).wait(1).to({skewX:1.9,y:17.3},0).wait(1).to({regX:137,regY:106.6,scaleX:1.01,x:14.8,y:4.1},0).wait(1).to({regX:134,regY:119.5,scaleX:1.01,x:11.3,y:17},0).wait(1).to({skewX:1.8,y:16.9},0).wait(1).to({y:16.8},0).wait(1).to({scaleX:1.01,skewX:1.7,skewY:-0.5,x:11.2,y:16.6},0).wait(1).to({skewX:1.6,x:11.1,y:16.4},0).wait(1).to({scaleX:1.01,skewX:1.5,x:11,y:16},0).wait(1).to({scaleX:1.01,skewX:1.3,skewY:-0.4,y:15.7},0).wait(1).to({scaleX:1.01,skewX:1.2,x:10.9,y:15.3},0).wait(1).to({scaleX:1.01,skewX:1,skewY:-0.3,x:10.7,y:14.8},0).wait(1).to({scaleX:1.01,skewX:0.8,x:10.6,y:14.4},0).wait(1).to({scaleX:1,skewX:0.7,skewY:-0.2,x:10.5,y:14},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.5,x:10.4,y:13.7},0).wait(1).to({scaleX:1,skewX:0.4,skewY:-0.1,x:10.3,y:13.3},0).wait(1).to({skewX:0.3,x:10.1,y:13},0).wait(1).to({scaleX:1,skewX:0.2,skewY:0,y:12.8},0).wait(1).to({skewX:0.1,y:12.6},0).wait(1).to({scaleX:1,skewX:0,x:10,y:12.5},0).wait(1).to({y:12.4},0).wait(1).to({regX:136.8,regY:106.4,x:12.9,y:-0.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:134,regY:119.5,x:10.1,y:12.7},0).wait(1).to({x:10.2,y:12.8},0).wait(1).to({scaleX:1,skewX:0.1,y:12.9},0).wait(1).to({skewX:0.2,x:10.3,y:13},0).wait(1).to({scaleX:1,skewX:0.3,y:13.3},0).wait(1).to({skewX:0.4,x:10.4,y:13.6},0).wait(1).to({scaleX:1,skewX:0.5,skewY:-0.1,x:10.5,y:13.9},0).wait(1).to({scaleX:1,skewX:0.6,x:10.6,y:14.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.8,x:10.7,y:14.7},0).wait(1).to({scaleX:1.01,skewX:1,x:10.8,y:15.1},0).wait(1).to({scaleX:1.01,skewX:1.1,x:10.9,y:15.5},0).wait(1).to({scaleX:1.01,skewX:1.3,x:11.1,y:15.8},0).wait(1).to({scaleX:1.01,skewX:1.4,skewY:-0.2,x:11.2,y:16.2},0).wait(1).to({scaleX:1.01,skewX:1.6,y:16.6},0).wait(1).to({scaleX:1.01,skewX:1.7,x:11.3,y:16.8},0).wait(1).to({scaleX:1.01,x:11.4,y:17.1},0).wait(1).to({skewX:1.8,y:17.2},0).wait(1).to({x:11.5,y:17.3},0).wait(1).to({skewX:1.9,y:17.4},0).wait(1).to({regX:137,regY:106.6,x:14.8,y:4.2},0).wait(1).to({regX:134,regY:119.5,x:11.3,y:17.1},0).wait(1).to({skewX:1.8,y:17},0).wait(1).to({y:16.9},0).wait(1).to({scaleX:1.01,skewX:1.7,x:11.2,y:16.7},0).wait(1).to({skewX:1.6,x:11.1,y:16.4},0).wait(1).to({scaleX:1.01,skewX:1.5,x:11,y:16.1},0).wait(1).to({scaleX:1.01,skewX:1.3,y:15.7},0).wait(1).to({scaleX:1.01,skewX:1.2,skewY:-0.1,x:10.9,y:15.4},0).wait(1).to({scaleX:1.01,skewX:1,x:10.7,y:14.9},0).wait(1).to({scaleX:1.01,skewX:0.8,x:10.6,y:14.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.7,x:10.5,y:14.1},0).wait(1).to({scaleX:1,skewX:0.5,x:10.4,y:13.7},0).wait(1).to({scaleX:1,skewX:0.4,skewY:0,x:10.3,y:13.4},0).wait(1).to({skewX:0.3,x:10.1,y:13},0).wait(1).to({scaleX:1,skewX:0.2,y:12.8},0).wait(1).to({skewX:0.1,y:12.6},0).wait(1).to({scaleX:1,skewX:0,x:10,y:12.5},0).wait(1).to({y:12.4},0).wait(1).to({regX:136.8,regY:106.4,x:12.9,y:-0.5},0).wait(1));

	// Left fin
	this.instance_5 = new lib.ChompyFinFar();
	this.instance_5.parent = this;
	this.instance_5.setTransform(115.7,26.5,1,1,0,0,0,4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({regX:19,regY:40,scaleX:1,skewX:0.1,skewY:0.3,x:130.6,y:-4.8},0).wait(1).to({scaleX:1,skewX:0.4,skewY:1.1,x:130.7,y:-4.4},0).wait(1).to({scaleX:1.01,skewX:0.9,skewY:2.4,x:130.9,y:-3.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.5,skewY:4.1,x:131,y:-2.7},0).wait(1).to({scaleX:1.02,skewX:2.3,skewY:6.4,x:131.2,y:-1.6},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:3.3,skewY:9.1,x:131.4,y:0},0).wait(1).to({scaleX:1.04,skewX:4.5,skewY:12.4,x:131.6,y:1.8},0).wait(1).to({scaleX:1.06,scaleY:1,skewX:5.8,skewY:16.1,x:131.7,y:3.9},0).wait(1).to({scaleX:1.07,scaleY:1,skewX:7.2,skewY:20.1,x:131.8,y:6.2},0).wait(1).to({scaleX:1.09,scaleY:1,skewX:8.7,skewY:24.2,x:131.7,y:8.5},0).wait(1).to({scaleX:1.1,skewX:10.2,skewY:28.3,x:131.6,y:10.9},0).wait(1).to({scaleX:1.12,scaleY:0.99,skewX:11.6,skewY:32.3,x:131.4,y:13.2},0).wait(1).to({scaleX:1.13,scaleY:0.99,skewX:12.9,skewY:35.9,x:131.1,y:15.3},0).wait(1).to({scaleX:1.14,skewX:14,skewY:39.1,x:130.8,y:17.1},0).wait(1).to({scaleX:1.15,scaleY:0.99,skewX:15,skewY:41.7,x:130.5,y:18.7},0).wait(1).to({scaleX:1.16,skewX:15.8,skewY:43.9,x:130.2,y:19.9},0).wait(1).to({scaleX:1.16,scaleY:0.99,skewX:16.4,skewY:45.5,x:130.1,y:20.8},0).wait(1).to({scaleX:1.17,skewX:16.8,skewY:46.6,x:129.9,y:21.4},0).wait(1).to({scaleX:1.17,skewX:17,skewY:47.2,x:129.8,y:21.8},0).wait(1).to({regX:4.2,regY:71.5,scaleX:1.17,skewX:17.1,skewY:47.4,x:108.7,y:38.8},0).wait(1).to({regX:19,regY:40,scaleX:1.17,skewX:16.9,skewY:47.1,x:129.6,y:21.5},0).wait(1).to({scaleX:1.17,skewX:16.6,skewY:46.2,x:129.7,y:21},0).wait(1).to({scaleX:1.16,scaleY:0.99,skewX:16.1,skewY:44.8,x:130,y:20.2},0).wait(1).to({scaleX:1.15,skewX:15.4,skewY:42.9,x:130.2,y:19.1},0).wait(1).to({scaleX:1.14,skewX:14.5,skewY:40.4,x:130.5,y:17.7},0).wait(1).to({scaleX:1.13,scaleY:0.99,skewX:13.4,skewY:37.3,x:130.8,y:15.9},0).wait(1).to({scaleX:1.12,scaleY:0.99,skewX:12.1,skewY:33.7,x:131.1,y:13.9},0).wait(1).to({scaleX:1.11,skewX:10.7,skewY:29.7,x:131.3,y:11.5},0).wait(1).to({scaleX:1.09,scaleY:1,skewX:9.1,skewY:25.4,x:131.5,y:9.1},0).wait(1).to({scaleX:1.08,scaleY:1,skewX:7.6,skewY:21.1,y:6.6},0).wait(1).to({scaleX:1.06,scaleY:1,skewX:6,skewY:16.8,y:4.1},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:4.6,skewY:12.8,x:131.4,y:1.9},0).wait(1).to({scaleX:1.03,skewX:3.4,skewY:9.3,x:131.2,y:0},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:2.3,skewY:6.4,x:131,y:-1.6},0).wait(1).to({scaleX:1.01,skewX:1.4,skewY:4,x:130.8,y:-2.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:0.8,skewY:2.2,x:130.7,y:-3.8},0).wait(1).to({scaleX:1,skewX:0.3,skewY:0.9,x:130.5,y:-4.5},0).wait(1).to({scaleX:1,skewX:0.1,skewY:0.2,y:-4.9},0).wait(1).to({regX:4,regY:71.5,scaleX:1,skewX:0,skewY:0,x:115.7,y:26.5},0).wait(2).to({regX:19,regY:40,scaleX:1,skewX:0.1,skewY:0.3,x:130.6,y:-4.8},0).wait(1).to({scaleX:1,skewX:0.4,skewY:1.1,x:130.7,y:-4.3},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:0.9,skewY:2.4,x:130.9,y:-3.7},0).wait(1).to({scaleX:1.01,skewX:1.5,skewY:4.1,x:131,y:-2.7},0).wait(1).to({scaleX:1.02,skewX:2.3,skewY:6.4,x:131.2,y:-1.5},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:3.3,skewY:9.2,x:131.4,y:0.2},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:4.5,skewY:12.4,x:131.6,y:2},0).wait(1).to({scaleX:1.06,scaleY:1,skewX:5.8,skewY:16.1,x:131.7,y:4.1},0).wait(1).to({scaleX:1.07,scaleY:1,skewX:7.2,skewY:20.1,x:131.8,y:6.4},0).wait(1).to({scaleX:1.09,skewX:8.7,skewY:24.3,x:131.7,y:8.9},0).wait(1).to({scaleX:1.1,scaleY:0.99,skewX:10.2,skewY:28.4,x:131.6,y:11.4},0).wait(1).to({scaleX:1.12,scaleY:0.99,skewX:11.6,skewY:32.4,x:131.4,y:13.7},0).wait(1).to({scaleX:1.13,scaleY:0.99,skewX:12.9,skewY:36,x:131.1,y:15.9},0).wait(1).to({scaleX:1.14,scaleY:0.99,skewX:14.1,skewY:39.2,x:130.7,y:17.7},0).wait(1).to({scaleX:1.15,skewX:15,skewY:41.9,x:130.5,y:19.3},0).wait(1).to({scaleX:1.16,scaleY:0.99,skewX:15.8,skewY:44,x:130.2,y:20.6},0).wait(1).to({scaleX:1.17,skewX:16.4,skewY:45.6,x:130,y:21.6},0).wait(1).to({scaleX:1.17,skewX:16.8,skewY:46.8,x:129.8,y:22.2},0).wait(1).to({scaleX:1.17,scaleY:0.99,skewX:17,skewY:47.4,x:129.7,y:22.6},0).wait(1).to({regX:4.2,regY:71.5,skewX:17.1,skewY:47.6,x:108.7,y:39.5},0).wait(1).to({regX:19,regY:40,scaleX:1.17,skewX:17,skewY:47.2,x:129.6,y:22.3},0).wait(1).to({scaleX:1.17,scaleY:0.99,skewX:16.6,skewY:46.4,x:129.7,y:21.8},0).wait(1).to({scaleX:1.16,skewX:16.2,skewY:45,x:130,y:21},0).wait(1).to({scaleX:1.16,skewX:15.5,skewY:43.1,x:130.2,y:19.9},0).wait(1).to({scaleX:1.15,scaleY:0.99,skewX:14.6,skewY:40.5,x:130.5,y:18.4},0).wait(1).to({scaleX:1.14,scaleY:0.99,skewX:13.4,skewY:37.5,x:130.9,y:16.6},0).wait(1).to({scaleX:1.12,skewX:12.2,skewY:33.9,x:131.1,y:14.5},0).wait(1).to({scaleX:1.11,scaleY:0.99,skewX:10.7,skewY:29.8,x:131.3,y:12.1},0).wait(1).to({scaleX:1.09,scaleY:0.99,skewX:9.2,skewY:25.5,x:131.5,y:9.5},0).wait(1).to({scaleX:1.08,scaleY:1,skewX:7.6,skewY:21.1,x:131.6,y:6.9},0).wait(1).to({scaleX:1.06,scaleY:1,skewX:6.1,skewY:16.9,y:4.5},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:4.6,skewY:12.9,x:131.5,y:2.2},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:3.4,skewY:9.4,x:131.3,y:0.2},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:2.3,skewY:6.4,x:131.1,y:-1.5},0).wait(1).to({scaleX:1.01,skewX:1.4,skewY:4,x:130.9,y:-2.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:0.8,skewY:2.2,x:130.7,y:-3.8},0).wait(1).to({scaleX:1,skewX:0.3,skewY:0.9,x:130.6,y:-4.5},0).wait(1).to({scaleX:1,skewX:0.1,skewY:0.2,x:130.5,y:-4.9},0).wait(1).to({regX:4,regY:71.5,scaleX:1,skewX:0,skewY:0,x:115.7,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.6,-144.6,281.3,276.8);


// stage content:
(lib.Chompy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Chompy_1();
	this.instance.parent = this;
	this.instance.setTransform(147.5,146.5,1,1,0,0,0,9,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.4,154.7,281.3,276.8);
// library properties:
lib.properties = {
	id: '996020C0CC944903805426F86A0FF801',
	width: 295,
	height: 293,
	fps: 24,
	color: "#424242",
	opacity: 1.00,
	manifest: [
		{src:"images/chompy_atlas_.png?1499358143926", id:"chompy_atlas_"}
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
an.compositions['996020C0CC944903805426F86A0FF801'] = {
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