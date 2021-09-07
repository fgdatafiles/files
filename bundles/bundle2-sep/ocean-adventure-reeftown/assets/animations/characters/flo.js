(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"flo_atlas_", frames: [[0,308,16,14],[0,285,24,21],[0,151,174,132],[269,0,121,125],[0,0,267,149],[176,151,192,111],[176,264,99,44]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["flo_atlas_"];
	this.gotoAndStop(6);
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


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,99,44), null);


(lib.Flo_Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-60,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-63,121,125);


(lib.Flo_Frontrightflipper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-96,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-56,192,111);


(lib.Flo_Frontleftfin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-87,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-66,174,132);


(lib.Flo_Eyelid_Near = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-12,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-10,24,21);


(lib.Flo_Eyelid_Far = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.Flo_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-133,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-75,267,149);


(lib.Flo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:75});

	// timeline functions:
	this.frame_135 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Eyelid_Far
	this.instance = new lib.Flo_Eyelid_Far("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-141.9,-106);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},7).wait(91).to({_off:false,regX:0.4,regY:0.1,scaleX:1,scaleY:1,skewX:5.7,skewY:1.9,x:-133.2,y:-97.5},0).wait(1).to({regX:0,regY:0,x:-133.7,y:-97.7},0).wait(1).to({skewY:1.8,x:-133.8,y:-97.8},0).wait(1).to({skewX:5.6,x:-133.9,y:-97.9},0).wait(1).to({x:-134,y:-98},0).wait(1).to({skewX:5.5,x:-134.1,y:-98.2},0).wait(1).to({scaleX:1,skewX:5.4,x:-134.3,y:-98.4},0).wait(1).to({skewX:5.3,skewY:1.7,x:-134.6,y:-98.6},0).wait(1).to({skewX:5.1,x:-134.8,y:-98.9},0).wait(1).to({scaleY:1,skewX:5,skewY:1.6,x:-135.1,y:-99.2},0).wait(1).to({scaleX:1,skewX:4.8,x:-135.5,y:-99.6},0).wait(1).to({skewX:4.6,skewY:1.5,x:-135.9,y:-100},0).wait(1).to({scaleX:1,skewX:4.4,x:-136.3,y:-100.4},0).wait(1).to({scaleY:1,skewX:4.2,skewY:1.4,x:-136.7,y:-100.9},0).wait(1).to({skewX:4,x:-137.2,y:-101.3},0).wait(1).to({scaleX:1,skewX:3.8,skewY:1.3,x:-137.6,y:-101.7},0).wait(1).to({skewX:3.6,skewY:1.2,x:-137.9,y:-102.1},0).wait(1).to({scaleX:1,skewX:3.5,x:-138.3,y:-102.5},0).wait(1).to({regX:0.8,regY:0.4,scaleY:1,skewX:3.3,x:-138.2,y:-102.6},0).to({_off:true},1).wait(12));

	// Eyelid_Near
	this.instance_1 = new lib.Flo_Eyelid_Near("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100.7,-92);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},7).wait(91).to({_off:false,regX:0.4,regY:0.4,scaleX:1.01,scaleY:1.02,skewX:3.9,skewY:2.2,x:-93.2,y:-81.7},0).wait(1).to({regX:0,regY:0.5,scaleX:1.01,x:-93.6},0).wait(1).to({scaleX:1.01,x:-93.7,y:-81.8},0).wait(1).to({scaleX:1.01,skewX:3.8,x:-93.8,y:-81.9},0).wait(1).to({scaleX:1.01,x:-93.9,y:-82.1},0).wait(1).to({skewX:3.7,skewY:2.1,x:-94,y:-82.3},0).wait(1).to({x:-94.1,y:-82.6},0).wait(1).to({skewX:3.6,x:-94.3,y:-83},0).wait(1).to({skewX:3.5,skewY:2,x:-94.6,y:-83.4},0).wait(1).to({skewX:3.3,x:-94.8,y:-83.9},0).wait(1).to({skewX:3.2,skewY:1.9,x:-95.1,y:-84.4},0).wait(1).to({skewX:3,skewY:1.8,x:-95.4,y:-85},0).wait(1).to({skewX:2.9,x:-95.8,y:-85.6},0).wait(1).to({skewX:2.7,skewY:1.7,x:-96.1,y:-86.2},0).wait(1).to({skewX:2.5,skewY:1.6,x:-96.4,y:-86.9},0).wait(1).to({skewX:2.4,x:-96.7,y:-87.5},0).wait(1).to({skewX:2.2,skewY:1.5,x:-97,y:-88.1},0).wait(1).to({skewX:2.1,skewY:1.4,x:-97.3,y:-88.6},0).wait(1).to({regX:0.4,regY:0.4,skewX:2,x:-97.2,y:-89.2},0).to({_off:true},1).wait(12));

	// Front left fin
	this.instance_2 = new lib.Flo_Frontleftfin("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.8,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({rotation:-0.1,x:40.9},0).wait(1).to({rotation:-0.3,x:41.1,y:89.4},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.4,x:41.3,y:89.3},0).wait(1).to({skewX:-0.7,skewY:-0.6,x:41.5,y:89.2},0).wait(1).to({skewX:-1,skewY:-0.8,x:41.8,y:89.1},0).wait(1).to({skewX:-1.4,skewY:-1.1,x:42.2,y:89},0).wait(1).to({scaleY:1,skewX:-1.8,skewY:-1.5,x:42.6,y:88.8},0).wait(1).to({scaleX:1,skewX:-2.2,skewY:-1.8,x:43,y:88.6},0).wait(1).to({skewX:-2.7,skewY:-2.2,x:43.5,y:88.4},0).wait(1).to({skewX:-3.2,skewY:-2.7,x:44.1,y:88.2},0).wait(1).to({skewX:-3.8,skewY:-3.1,x:44.6,y:88},0).wait(1).to({skewX:-4.4,skewY:-3.6,x:45.2,y:87.8},0).wait(1).to({skewX:-5,skewY:-4.1,x:45.9,y:87.5},0).wait(1).to({scaleY:1,skewX:-5.6,skewY:-4.6,x:46.5,y:87.3},0).wait(1).to({skewX:-6.2,skewY:-5.2,x:47.2,y:87},0).wait(1).to({scaleX:1,skewX:-6.9,skewY:-5.7,x:47.8,y:86.8},0).wait(1).to({skewX:-7.5,skewY:-6.2,x:48.5,y:86.5},0).wait(1).to({skewX:-8.2,skewY:-6.8,x:49.1,y:86.3},0).wait(1).to({scaleY:1,skewX:-8.8,skewY:-7.3,x:49.8,y:86},0).wait(1).to({skewX:-9.4,skewY:-7.8,x:50.4,y:85.8},0).wait(1).to({skewX:-9.9,skewY:-8.2,x:50.9,y:85.6},0).wait(1).to({skewX:-10.4,skewY:-8.6,x:51.4,y:85.4},0).wait(1).to({scaleX:1,skewX:-10.9,skewY:-9,x:51.9,y:85.2},0).wait(1).to({skewX:-11.3,skewY:-9.4,x:52.4,y:85},0).wait(1).to({skewX:-11.7,skewY:-9.7,x:52.7,y:84.9},0).wait(1).to({skewX:-12,skewY:-10,x:53.1,y:84.7},0).wait(1).to({scaleY:1,skewX:-12.3,skewY:-10.2,x:53.3,y:84.6},0).wait(1).to({skewX:-12.5,skewY:-10.3,x:53.5,y:84.5},0).wait(1).to({skewX:-12.6,skewY:-10.5,x:53.7},0).wait(1).to({regX:0.2,regY:0.2,skewX:-12.7,x:53.8,y:84.4},0).wait(1).to({regX:0,regY:0,skewX:-12.6,skewY:-10.4,x:53.4,y:84.3},0).wait(1).to({skewX:-12.4,skewY:-10.3,x:53.2,y:84.4},0).wait(1).to({skewX:-12.2,skewY:-10.1,x:53},0).wait(1).to({scaleY:1,skewX:-12,skewY:-9.9,x:52.8,y:84.5},0).wait(1).to({skewX:-11.7,skewY:-9.7,x:52.5,y:84.6},0).wait(1).to({skewX:-11.3,skewY:-9.4,x:52.1,y:84.8},0).wait(1).to({skewX:-10.9,skewY:-9.1,x:51.7,y:84.9},0).wait(1).to({scaleX:1,skewX:-10.5,skewY:-8.7,x:51.3,y:85.1},0).wait(1).to({skewX:-10,skewY:-8.3,x:50.8,y:85.3},0).wait(1).to({skewX:-9.5,skewY:-7.9,x:50.2,y:85.5},0).wait(1).to({skewX:-8.9,skewY:-7.4,x:49.7,y:85.7},0).wait(1).to({scaleY:1,skewX:-8.3,skewY:-6.9,x:49.1,y:86},0).wait(1).to({skewX:-7.7,skewY:-6.4,x:48.4,y:86.2},0).wait(1).to({skewX:-7.1,skewY:-5.9,x:47.8,y:86.5},0).wait(1).to({scaleX:1,skewX:-6.4,skewY:-5.3,x:47.2,y:86.7},0).wait(1).to({skewX:-5.8,skewY:-4.8,x:46.5,y:87},0).wait(1).to({scaleY:1,skewX:-5.2,skewY:-4.3,x:45.8,y:87.2},0).wait(1).to({skewX:-4.5,skewY:-3.8,x:45.2,y:87.5},0).wait(1).to({skewX:-3.9,skewY:-3.2,x:44.6,y:87.7},0).wait(1).to({skewX:-3.3,skewY:-2.8,x:44,y:87.9},0).wait(1).to({skewX:-2.8,skewY:-2.3,x:43.4,y:88.2},0).wait(1).to({skewX:-2.3,skewY:-1.9,x:42.9,y:88.4},0).wait(1).to({scaleX:1,skewX:-1.8,skewY:-1.5,x:42.4,y:88.5},0).wait(1).to({scaleY:1,skewX:-1.4,skewY:-1.1,x:42,y:88.7},0).wait(1).to({skewX:-1,skewY:-0.8,x:41.6,y:88.9},0).wait(1).to({skewX:-0.7,skewY:-0.6,x:41.3,y:89},0).wait(1).to({skewX:-0.4,skewY:-0.3,x:41,y:89.1},0).wait(1).to({rotation:-0.2,skewX:0,skewY:0,x:40.8,y:89.2},0).wait(1).to({rotation:-0.1,x:40.7},0).wait(1).to({rotation:0,x:40.8,y:89.5},0).wait(1).to({rotation:-0.1,x:40.9},0).wait(1).to({rotation:-0.3,x:41.1,y:89.4},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.4,x:41.3,y:89.3},0).wait(1).to({skewX:-0.7,skewY:-0.6,x:41.5,y:89.2},0).wait(1).to({skewX:-1,skewY:-0.8,x:41.8,y:89.1},0).wait(1).to({skewX:-1.4,skewY:-1.1,x:42.2,y:89},0).wait(1).to({scaleY:1,skewX:-1.8,skewY:-1.5,x:42.6,y:88.8},0).wait(1).to({scaleX:1,skewX:-2.2,skewY:-1.8,x:43,y:88.6},0).wait(1).to({skewX:-2.7,skewY:-2.2,x:43.5,y:88.4},0).wait(1).to({skewX:-3.2,skewY:-2.7,x:44.1,y:88.2},0).wait(1).to({skewX:-3.8,skewY:-3.1,x:44.6,y:88},0).wait(1).to({skewX:-4.4,skewY:-3.6,x:45.2,y:87.8},0).wait(1).to({skewX:-5,skewY:-4.1,x:45.9,y:87.5},0).wait(1).to({scaleY:1,skewX:-5.6,skewY:-4.6,x:46.5,y:87.3},0).wait(1).to({skewX:-6.2,skewY:-5.2,x:47.2,y:87},0).wait(1).to({scaleX:1,skewX:-6.9,skewY:-5.7,x:47.8,y:86.8},0).wait(1).to({skewX:-7.5,skewY:-6.2,x:48.5,y:86.5},0).wait(1).to({skewX:-8.2,skewY:-6.8,x:49.1,y:86.3},0).wait(1).to({scaleY:1,skewX:-8.8,skewY:-7.3,x:49.8,y:86},0).wait(1).to({skewX:-9.4,skewY:-7.8,x:50.4,y:85.8},0).wait(1).to({skewX:-9.9,skewY:-8.2,x:50.9,y:85.6},0).wait(1).to({skewX:-10.4,skewY:-8.6,x:51.4,y:85.4},0).wait(1).to({scaleX:1,skewX:-10.9,skewY:-9,x:51.9,y:85.2},0).wait(1).to({skewX:-11.3,skewY:-9.4,x:52.4,y:85},0).wait(1).to({skewX:-11.7,skewY:-9.7,x:52.7,y:84.9},0).wait(1).to({skewX:-12,skewY:-10,x:53.1,y:84.7},0).wait(1).to({scaleY:1,skewX:-12.3,skewY:-10.2,x:53.3,y:84.6},0).wait(1).to({skewX:-12.5,skewY:-10.3,x:53.5,y:84.5},0).wait(1).to({skewX:-12.6,skewY:-10.5,x:53.7},0).wait(1).to({regX:0.2,regY:0.2,skewX:-12.7,x:53.8,y:84.4},0).wait(1).to({regX:0,regY:0,skewX:-12.6,skewY:-10.4,x:53.4,y:84.3},0).wait(1).to({skewX:-12.4,skewY:-10.3,x:53.2,y:84.4},0).wait(1).to({skewX:-12.2,skewY:-10.1,x:53},0).wait(1).to({scaleY:1,skewX:-12,skewY:-9.9,x:52.8,y:84.5},0).wait(1).to({skewX:-11.7,skewY:-9.7,x:52.5,y:84.6},0).wait(1).to({skewX:-11.3,skewY:-9.4,x:52.1,y:84.8},0).wait(1).to({skewX:-10.9,skewY:-9.1,x:51.7,y:84.9},0).wait(1).to({scaleX:1,skewX:-10.5,skewY:-8.7,x:51.3,y:85.1},0).wait(1).to({skewX:-10,skewY:-8.3,x:50.8,y:85.3},0).wait(1).to({skewX:-9.5,skewY:-7.9,x:50.2,y:85.5},0).wait(1).to({skewX:-8.9,skewY:-7.4,x:49.7,y:85.7},0).wait(1).to({scaleY:1,skewX:-8.3,skewY:-6.9,x:49.1,y:86},0).wait(1).to({skewX:-7.7,skewY:-6.4,x:48.4,y:86.2},0).wait(1).to({skewX:-7.1,skewY:-5.9,x:47.8,y:86.5},0).wait(1).to({scaleX:1,skewX:-6.4,skewY:-5.3,x:47.2,y:86.7},0).wait(1).to({skewX:-5.8,skewY:-4.8,x:46.5,y:87},0).wait(1).to({scaleY:1,skewX:-5.2,skewY:-4.3,x:45.8,y:87.2},0).wait(1).to({skewX:-4.5,skewY:-3.8,x:45.2,y:87.5},0).wait(1).to({skewX:-3.9,skewY:-3.2,x:44.6,y:87.7},0).wait(1).to({skewX:-3.3,skewY:-2.8,x:44,y:87.9},0).wait(1).to({skewX:-2.8,skewY:-2.3,x:43.4,y:88.2},0).wait(1).to({skewX:-2.3,skewY:-1.9,x:42.9,y:88.4},0).wait(1).to({scaleX:1,skewX:-1.8,skewY:-1.5,x:42.4,y:88.5},0).wait(1).to({scaleY:1,skewX:-1.4,skewY:-1.1,x:42,y:88.7},0).wait(1).to({skewX:-1,skewY:-0.8,x:41.6,y:88.9},0).wait(1).to({skewX:-0.7,skewY:-0.6,x:41.3,y:89},0).wait(1).to({skewX:-0.4,skewY:-0.3,x:41,y:89.1},0).wait(1).to({rotation:-0.2,skewX:0,skewY:0,x:40.8,y:89.2},0).wait(1).to({rotation:-0.1,x:40.7},0).wait(1).to({rotation:0,x:40.8,y:89.5},0).wait(1));

	// Head
	this.instance_3 = new lib.Flo_Head("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106.6,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.5,x:-106,y:-54.2},0).wait(1).to({rotation:0.1,y:-54.1},0).wait(1).to({rotation:0,skewX:0.2,skewY:0.1,x:-105.9,y:-53.9},0).wait(1).to({skewX:0.3,x:-105.8,y:-53.7},0).wait(1).to({skewX:0.4,skewY:0.2,x:-105.7,y:-53.5},0).wait(1).to({skewX:0.5,skewY:0.3,x:-105.6,y:-53.2},0).wait(1).to({skewX:0.6,x:-105.5,y:-52.9},0).wait(1).to({skewX:0.8,skewY:0.4,x:-105.3,y:-52.6},0).wait(1).to({skewX:1,skewY:0.5,x:-105.2,y:-52.2},0).wait(1).to({skewX:1.2,skewY:0.6,x:-105,y:-51.8},0).wait(1).to({skewX:1.4,skewY:0.7,x:-104.8,y:-51.4},0).wait(1).to({skewX:1.6,skewY:0.8,x:-104.6,y:-50.9},0).wait(1).to({skewX:1.8,skewY:0.9,x:-104.4,y:-50.4},0).wait(1).to({skewX:2,skewY:1,x:-104.2,y:-49.9},0).wait(1).to({skewX:2.3,skewY:1.2,x:-104,y:-49.5},0).wait(1).to({scaleX:1,skewX:2.5,skewY:1.3,x:-103.8,y:-49},0).wait(1).to({skewX:2.7,skewY:1.4,x:-103.6,y:-48.5},0).wait(1).to({skewX:3,skewY:1.5,x:-103.4,y:-48},0).wait(1).to({skewX:3.2,skewY:1.6,x:-103.2,y:-47.5},0).wait(1).to({skewX:3.4,skewY:1.8,x:-103,y:-47.1},0).wait(1).to({skewX:3.6,skewY:1.9,x:-102.8,y:-46.6},0).wait(1).to({skewX:3.8,skewY:2,x:-102.6,y:-46.2},0).wait(1).to({skewX:4,x:-102.5,y:-45.9},0).wait(1).to({skewX:4.1,skewY:2.1,x:-102.3,y:-45.5},0).wait(1).to({skewX:4.2,skewY:2.2,x:-102.2,y:-45.3},0).wait(1).to({skewX:4.4,x:-102.1,y:-45},0).wait(1).to({skewY:2.3,x:-102,y:-44.8},0).wait(1).to({skewX:4.5,y:-44.7},0).wait(1).to({skewX:4.6,skewY:2.4,x:-101.9,y:-44.6},0).wait(1).to({regX:0.1,regY:0.1,x:-102.5,y:-44},0).wait(1).to({regX:0.5,regY:-0.5,x:-102,y:-44.7},0).wait(1).to({skewX:4.5,skewY:2.3,x:-102.1,y:-44.8},0).wait(1).to({skewX:4.4,y:-45},0).wait(1).to({skewX:4.3,skewY:2.2,x:-102.2,y:-45.1},0).wait(1).to({skewX:4.2,x:-102.3,y:-45.4},0).wait(1).to({skewX:4.1,skewY:2.1,x:-102.4,y:-45.6},0).wait(1).to({skewX:4,skewY:2,x:-102.6,y:-46},0).wait(1).to({skewX:3.8,x:-102.7,y:-46.3},0).wait(1).to({skewX:3.6,skewY:1.9,x:-102.9,y:-46.7},0).wait(1).to({skewX:3.4,skewY:1.8,x:-103,y:-47.1},0).wait(1).to({skewX:3.2,skewY:1.7,x:-103.2,y:-47.5},0).wait(1).to({skewX:3,skewY:1.6,x:-103.4,y:-47.9},0).wait(1).to({skewX:2.8,skewY:1.4,x:-103.7,y:-48.4},0).wait(1).to({skewX:2.6,skewY:1.3,x:-103.9,y:-48.9},0).wait(1).to({scaleX:1,skewX:2.3,skewY:1.2,x:-104.1,y:-49.4},0).wait(1).to({skewX:2.1,skewY:1.1,x:-104.3,y:-49.9},0).wait(1).to({skewX:1.9,skewY:1,x:-104.5,y:-50.4},0).wait(1).to({skewX:1.6,skewY:0.8,x:-104.7,y:-50.9},0).wait(1).to({skewX:1.4,skewY:0.7,x:-104.9,y:-51.3},0).wait(1).to({skewX:1.2,skewY:0.6,x:-105.1,y:-51.8},0).wait(1).to({skewX:1,skewY:0.5,x:-105.3,y:-52.2},0).wait(1).to({skewX:0.8,skewY:0.4,x:-105.4,y:-52.6},0).wait(1).to({skewX:0.6,skewY:0.3,x:-105.6,y:-53},0).wait(1).to({skewX:0.5,x:-105.7,y:-53.3},0).wait(1).to({skewX:0.4,skewY:0.2,x:-105.8,y:-53.6},0).wait(1).to({skewX:0.2,skewY:0.1,x:-105.9,y:-53.8},0).wait(1).to({x:-106,y:-54},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:-106.1,y:-54.2},0).wait(1).to({rotation:0,y:-54.3},0).wait(1).to({regX:0,regY:0,x:-106.6,y:-53.8},0).wait(1).to({regX:0.5,regY:-0.5,x:-106,y:-54.2},0).wait(1).to({rotation:0.1,y:-54.1},0).wait(1).to({rotation:0,skewX:0.2,skewY:0.1,x:-105.9,y:-53.9},0).wait(1).to({skewX:0.3,x:-105.8,y:-53.7},0).wait(1).to({skewX:0.4,skewY:0.2,x:-105.7,y:-53.5},0).wait(1).to({skewX:0.5,skewY:0.3,x:-105.6,y:-53.2},0).wait(1).to({skewX:0.6,x:-105.5,y:-52.9},0).wait(1).to({skewX:0.8,skewY:0.4,x:-105.3,y:-52.6},0).wait(1).to({skewX:1,skewY:0.5,x:-105.2,y:-52.2},0).wait(1).to({skewX:1.2,skewY:0.6,x:-105,y:-51.8},0).wait(1).to({skewX:1.4,skewY:0.7,x:-104.8,y:-51.4},0).wait(1).to({skewX:1.6,skewY:0.8,x:-104.6,y:-50.9},0).wait(1).to({skewX:1.8,skewY:0.9,x:-104.4,y:-50.4},0).wait(1).to({skewX:2,skewY:1,x:-104.2,y:-49.9},0).wait(1).to({skewX:2.3,skewY:1.2,x:-104,y:-49.5},0).wait(1).to({scaleX:1,skewX:2.5,skewY:1.3,x:-103.8,y:-49},0).wait(1).to({skewX:2.7,skewY:1.4,x:-103.6,y:-48.5},0).wait(1).to({skewX:3,skewY:1.5,x:-103.4,y:-48},0).wait(1).to({skewX:3.2,skewY:1.6,x:-103.2,y:-47.5},0).wait(1).to({skewX:3.4,skewY:1.8,x:-103,y:-47.1},0).wait(1).to({skewX:3.6,skewY:1.9,x:-102.8,y:-46.6},0).wait(1).to({skewX:3.8,skewY:2,x:-102.6,y:-46.2},0).wait(1).to({skewX:4,x:-102.5,y:-45.9},0).wait(1).to({skewX:4.1,skewY:2.1,x:-102.3,y:-45.5},0).wait(1).to({skewX:4.2,skewY:2.2,x:-102.2,y:-45.3},0).wait(1).to({skewX:4.4,x:-102.1,y:-45},0).wait(1).to({skewY:2.3,x:-102,y:-44.8},0).wait(1).to({skewX:4.5,y:-44.7},0).wait(1).to({skewX:4.6,skewY:2.4,x:-101.9,y:-44.6},0).wait(1).to({regX:0.1,regY:0.1,x:-102.5,y:-44},0).wait(1).to({regX:0.5,regY:-0.5,x:-102,y:-44.7},0).wait(1).to({skewX:4.5,skewY:2.3,x:-102.1,y:-44.8},0).wait(1).to({skewX:4.4,y:-45},0).wait(1).to({skewX:4.3,skewY:2.2,x:-102.2,y:-45.1},0).wait(1).to({skewX:4.2,x:-102.3,y:-45.4},0).wait(1).to({skewX:4.1,skewY:2.1,x:-102.4,y:-45.6},0).wait(1).to({skewX:4,skewY:2,x:-102.6,y:-46},0).wait(1).to({skewX:3.8,x:-102.7,y:-46.3},0).wait(1).to({skewX:3.6,skewY:1.9,x:-102.9,y:-46.7},0).wait(1).to({skewX:3.4,skewY:1.8,x:-103,y:-47.1},0).wait(1).to({skewX:3.2,skewY:1.7,x:-103.2,y:-47.5},0).wait(1).to({skewX:3,skewY:1.6,x:-103.4,y:-47.9},0).wait(1).to({skewX:2.8,skewY:1.4,x:-103.7,y:-48.4},0).wait(1).to({skewX:2.6,skewY:1.3,x:-103.9,y:-48.9},0).wait(1).to({scaleX:1,skewX:2.3,skewY:1.2,x:-104.1,y:-49.4},0).wait(1).to({skewX:2.1,skewY:1.1,x:-104.3,y:-49.9},0).wait(1).to({skewX:1.9,skewY:1,x:-104.5,y:-50.4},0).wait(1).to({skewX:1.6,skewY:0.8,x:-104.7,y:-50.9},0).wait(1).to({skewX:1.4,skewY:0.7,x:-104.9,y:-51.3},0).wait(1).to({skewX:1.2,skewY:0.6,x:-105.1,y:-51.8},0).wait(1).to({skewX:1,skewY:0.5,x:-105.3,y:-52.2},0).wait(1).to({skewX:0.8,skewY:0.4,x:-105.4,y:-52.6},0).wait(1).to({skewX:0.6,skewY:0.3,x:-105.6,y:-53},0).wait(1).to({skewX:0.5,x:-105.7,y:-53.3},0).wait(1).to({skewX:0.4,skewY:0.2,x:-105.8,y:-53.6},0).wait(1).to({skewX:0.2,skewY:0.1,x:-105.9,y:-53.8},0).wait(1).to({x:-106,y:-54},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:-106.1,y:-54.2},0).wait(1).to({rotation:0,y:-54.3},0).wait(1).to({regX:0,regY:0,x:-106.6,y:-53.8},0).wait(1));

	// Body
	this.instance_4 = new lib.Flo_Body("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.5,x:20,y:5},0).wait(1).to({y:5.2},0).wait(1).to({scaleY:1,y:5.3},0).wait(1).to({y:5.6},0).wait(1).to({y:5.8},0).wait(1).to({scaleY:1,y:6.1},0).wait(1).to({y:6.5},0).wait(1).to({scaleY:1,y:6.8},0).wait(1).to({scaleY:1,y:7.2},0).wait(1).to({y:7.7},0).wait(1).to({scaleY:1,y:8.2},0).wait(1).to({scaleY:1.01,y:8.7},0).wait(1).to({scaleY:1.01,y:9.2},0).wait(1).to({y:9.7},0).wait(1).to({scaleY:1.01,y:10.3},0).wait(1).to({scaleY:1.01,y:10.8},0).wait(1).to({scaleY:1.01,y:11.4},0).wait(1).to({scaleY:1.01,y:11.9},0).wait(1).to({scaleY:1.01,y:12.5},0).wait(1).to({y:13},0).wait(1).to({scaleY:1.01,y:13.4},0).wait(1).to({scaleY:1.01,y:13.9},0).wait(1).to({y:14.3},0).wait(1).to({scaleY:1.01,y:14.6},0).wait(1).to({y:15},0).wait(1).to({scaleY:1.02,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({scaleY:1.02,y:15.7},0).wait(1).to({regX:0,regY:0.1,x:19.5,y:16.3},0).wait(1).to({regX:0.5,regY:-0.5,x:20,y:15.6},0).wait(1).to({scaleY:1.02,y:15.5},0).wait(1).to({y:15.3},0).wait(1).to({y:15.1},0).wait(1).to({scaleY:1.01,y:14.8},0).wait(1).to({y:14.5},0).wait(1).to({scaleY:1.01,y:14.2},0).wait(1).to({y:13.8},0).wait(1).to({scaleY:1.01,y:13.4},0).wait(1).to({y:13},0).wait(1).to({scaleY:1.01,y:12.5},0).wait(1).to({scaleY:1.01,y:12},0).wait(1).to({scaleY:1.01,y:11.5},0).wait(1).to({scaleY:1.01,y:10.9},0).wait(1).to({y:10.4},0).wait(1).to({scaleY:1.01,y:9.8},0).wait(1).to({scaleY:1.01,y:9.3},0).wait(1).to({scaleY:1.01,y:8.7},0).wait(1).to({scaleY:1,y:8.2},0).wait(1).to({scaleY:1,y:7.7},0).wait(1).to({y:7.2},0).wait(1).to({scaleY:1,y:6.8},0).wait(1).to({scaleY:1,y:6.4},0).wait(1).to({y:6},0).wait(1).to({scaleY:1,y:5.7},0).wait(1).to({y:5.4},0).wait(1).to({y:5.2},0).wait(1).to({scaleY:1,y:5},0).wait(1).to({y:4.9},0).wait(1).to({regX:0,regY:0,x:19.5,y:5.5},0).wait(1).to({regX:0.5,regY:-0.5,x:20,y:5},0).wait(1).to({y:5.2},0).wait(1).to({scaleY:1,y:5.3},0).wait(1).to({y:5.6},0).wait(1).to({y:5.8},0).wait(1).to({scaleY:1,y:6.1},0).wait(1).to({y:6.5},0).wait(1).to({scaleY:1,y:6.8},0).wait(1).to({scaleY:1,y:7.2},0).wait(1).to({y:7.7},0).wait(1).to({scaleY:1,y:8.2},0).wait(1).to({scaleY:1.01,y:8.7},0).wait(1).to({scaleY:1.01,y:9.2},0).wait(1).to({y:9.7},0).wait(1).to({scaleY:1.01,y:10.3},0).wait(1).to({scaleY:1.01,y:10.8},0).wait(1).to({scaleY:1.01,y:11.4},0).wait(1).to({scaleY:1.01,y:11.9},0).wait(1).to({scaleY:1.01,y:12.5},0).wait(1).to({y:13},0).wait(1).to({scaleY:1.01,y:13.4},0).wait(1).to({scaleY:1.01,y:13.9},0).wait(1).to({y:14.3},0).wait(1).to({scaleY:1.01,y:14.6},0).wait(1).to({y:15},0).wait(1).to({scaleY:1.02,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({scaleY:1.02,y:15.7},0).wait(1).to({regX:0,regY:0.1,x:19.5,y:16.3},0).wait(1).to({regX:0.5,regY:-0.5,x:20,y:15.6},0).wait(1).to({scaleY:1.02,y:15.5},0).wait(1).to({y:15.3},0).wait(1).to({y:15.1},0).wait(1).to({scaleY:1.01,y:14.8},0).wait(1).to({y:14.5},0).wait(1).to({scaleY:1.01,y:14.2},0).wait(1).to({y:13.8},0).wait(1).to({scaleY:1.01,y:13.4},0).wait(1).to({y:13},0).wait(1).to({scaleY:1.01,y:12.5},0).wait(1).to({scaleY:1.01,y:12},0).wait(1).to({scaleY:1.01,y:11.5},0).wait(1).to({scaleY:1.01,y:10.9},0).wait(1).to({y:10.4},0).wait(1).to({scaleY:1.01,y:9.8},0).wait(1).to({scaleY:1.01,y:9.3},0).wait(1).to({scaleY:1.01,y:8.7},0).wait(1).to({scaleY:1,y:8.2},0).wait(1).to({scaleY:1,y:7.7},0).wait(1).to({y:7.2},0).wait(1).to({scaleY:1,y:6.8},0).wait(1).to({scaleY:1,y:6.4},0).wait(1).to({y:6},0).wait(1).to({scaleY:1,y:5.7},0).wait(1).to({y:5.4},0).wait(1).to({y:5.2},0).wait(1).to({scaleY:1,y:5},0).wait(1).to({y:4.9},0).wait(1).to({regX:0,regY:0,x:19.5,y:5.5},0).wait(1));

	// Front right flipper
	this.instance_5 = new lib.Flo_Frontrightflipper("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-182.4,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regY:-0.5,skewX:0.1,skewY:0.1,x:-182.3,y:-46},0).wait(1).to({skewX:0.3,skewY:0.2,x:-182.1},0).wait(1).to({skewX:0.6,skewY:0.3,x:-181.8},0).wait(1).to({scaleY:1,skewX:0.9,skewY:0.4,x:-181.5},0).wait(1).to({skewX:1.3,skewY:0.6,x:-181.1,y:-45.9},0).wait(1).to({skewX:1.7,skewY:0.8,x:-180.7},0).wait(1).to({skewX:2.2,skewY:1.1,x:-180.2},0).wait(1).to({scaleY:1,skewX:2.7,skewY:1.3,x:-179.6},0).wait(1).to({skewX:3.3,skewY:1.6,x:-178.9,y:-45.8},0).wait(1).to({skewX:4,skewY:2,x:-178.3},0).wait(1).to({scaleY:1,skewX:4.7,skewY:2.3,x:-177.6},0).wait(1).to({skewX:5.4,skewY:2.7,x:-176.8,y:-45.7},0).wait(1).to({scaleY:1,skewX:6.2,skewY:3,x:-176},0).wait(1).to({skewX:7,skewY:3.4,x:-175.2,y:-45.6},0).wait(1).to({scaleY:1,skewX:7.8,skewY:3.8,x:-174.4},0).wait(1).to({skewX:8.6,skewY:4.2,x:-173.6,y:-45.5},0).wait(1).to({scaleY:1.01,skewX:9.4,skewY:4.6,x:-172.7},0).wait(1).to({skewX:10.2,skewY:5,x:-171.9},0).wait(1).to({scaleY:1.01,skewX:10.9,skewY:5.4,x:-171.1,y:-45.4},0).wait(1).to({skewX:11.7,skewY:5.7,x:-170.4},0).wait(1).to({skewX:12.3,skewY:6,x:-169.7},0).wait(1).to({scaleY:1.01,skewX:13,skewY:6.4,x:-169,y:-45.3},0).wait(1).to({skewX:13.6,skewY:6.7,x:-168.4},0).wait(1).to({skewX:14.1,skewY:6.9,x:-167.9},0).wait(1).to({scaleY:1.01,skewX:14.6,skewY:7.1,x:-167.4,y:-45.2},0).wait(1).to({skewX:14.9,skewY:7.3,x:-167},0).wait(1).to({skewX:15.3,skewY:7.5,x:-166.6},0).wait(1).to({skewX:15.5,skewY:7.6,x:-166.4},0).wait(1).to({scaleX:1,skewX:15.7,skewY:7.7,x:-166.2},0).wait(1).to({regX:0.2,regY:0.1,scaleX:1,skewX:15.8,x:-166.3,y:-44.7},0).wait(1).to({regX:0,regY:-0.5,scaleX:1,skewX:15.7,x:-166.4,y:-45.4},0).wait(1).to({scaleX:1,skewX:15.5,skewY:7.6,x:-166.6},0).wait(1).to({skewX:15.2,skewY:7.5,x:-166.9},0).wait(1).to({skewX:14.9,skewY:7.3,x:-167.2},0).wait(1).to({skewX:14.5,skewY:7.1,x:-167.6},0).wait(1).to({scaleY:1.01,skewX:14.1,skewY:6.9,x:-168.1},0).wait(1).to({skewX:13.6,skewY:6.7,x:-168.6,y:-45.5},0).wait(1).to({skewX:13.1,skewY:6.4,x:-169.2},0).wait(1).to({scaleY:1.01,skewX:12.4,skewY:6.1,x:-169.8},0).wait(1).to({skewX:11.8,skewY:5.8,x:-170.4,y:-45.6},0).wait(1).to({skewX:11.1,skewY:5.4,x:-171.2},0).wait(1).to({scaleY:1.01,skewX:10.4,skewY:5.1,x:-171.9},0).wait(1).to({skewX:9.6,skewY:4.7,x:-172.7,y:-45.7},0).wait(1).to({scaleY:1,skewX:8.8,skewY:4.3,x:-173.5},0).wait(1).to({skewX:8,skewY:3.9,x:-174.4},0).wait(1).to({scaleY:1,skewX:7.2,skewY:3.5,x:-175.2,y:-45.8},0).wait(1).to({skewX:6.4,skewY:3.1,x:-176},0).wait(1).to({scaleY:1,skewX:5.6,skewY:2.8,x:-176.8,y:-45.9},0).wait(1).to({skewX:4.9,skewY:2.4,x:-177.6},0).wait(1).to({scaleY:1,skewX:4.1,skewY:2,x:-178.4},0).wait(1).to({skewX:3.4,skewY:1.7,x:-179.1,y:-46},0).wait(1).to({skewX:2.8,skewY:1.4,x:-179.8},0).wait(1).to({scaleY:1,skewX:2.2,skewY:1.1,x:-180.4},0).wait(1).to({skewX:1.7,skewY:0.8,x:-180.9,y:-46.1},0).wait(1).to({skewX:1.2,skewY:0.6,x:-181.4},0).wait(1).to({skewX:0.8,skewY:0.4,x:-181.8},0).wait(1).to({scaleY:1,skewX:0.5,skewY:0.3,x:-182.1},0).wait(1).to({skewX:0.3,skewY:0.1,x:-182.4},0).wait(1).to({skewX:0.1,skewY:0,x:-182.5},0).wait(1).to({regY:0,skewX:0,x:-182.4,y:-45.5},0).wait(1).to({regY:-0.5,skewX:0.1,skewY:0.1,x:-182.3,y:-46},0).wait(1).to({skewX:0.3,skewY:0.2,x:-182.1},0).wait(1).to({skewX:0.6,skewY:0.3,x:-181.8},0).wait(1).to({scaleY:1,skewX:0.9,skewY:0.4,x:-181.5},0).wait(1).to({skewX:1.3,skewY:0.6,x:-181.1,y:-45.9},0).wait(1).to({skewX:1.7,skewY:0.8,x:-180.7},0).wait(1).to({skewX:2.2,skewY:1.1,x:-180.2},0).wait(1).to({scaleY:1,skewX:2.7,skewY:1.3,x:-179.6},0).wait(1).to({skewX:3.3,skewY:1.6,x:-178.9,y:-45.8},0).wait(1).to({skewX:4,skewY:2,x:-178.3},0).wait(1).to({scaleY:1,skewX:4.7,skewY:2.3,x:-177.6},0).wait(1).to({skewX:5.4,skewY:2.7,x:-176.8,y:-45.7},0).wait(1).to({scaleY:1,skewX:6.2,skewY:3,x:-176},0).wait(1).to({skewX:7,skewY:3.4,x:-175.2,y:-45.6},0).wait(1).to({scaleY:1,skewX:7.8,skewY:3.8,x:-174.4},0).wait(1).to({skewX:8.6,skewY:4.2,x:-173.6,y:-45.5},0).wait(1).to({scaleY:1.01,skewX:9.4,skewY:4.6,x:-172.7},0).wait(1).to({skewX:10.2,skewY:5,x:-171.9},0).wait(1).to({scaleY:1.01,skewX:10.9,skewY:5.4,x:-171.1,y:-45.4},0).wait(1).to({skewX:11.7,skewY:5.7,x:-170.4},0).wait(1).to({skewX:12.3,skewY:6,x:-169.7},0).wait(1).to({scaleY:1.01,skewX:13,skewY:6.4,x:-169,y:-45.3},0).wait(1).to({skewX:13.6,skewY:6.7,x:-168.4},0).wait(1).to({skewX:14.1,skewY:6.9,x:-167.9},0).wait(1).to({scaleY:1.01,skewX:14.6,skewY:7.1,x:-167.4,y:-45.2},0).wait(1).to({skewX:14.9,skewY:7.3,x:-167},0).wait(1).to({skewX:15.3,skewY:7.5,x:-166.6},0).wait(1).to({skewX:15.5,skewY:7.6,x:-166.4},0).wait(1).to({scaleX:1,skewX:15.7,skewY:7.7,x:-166.2},0).wait(1).to({regX:0.2,regY:0.1,scaleX:1,skewX:15.8,x:-166.3,y:-44.7},0).wait(1).to({regX:0,regY:-0.5,scaleX:1,skewX:15.7,x:-166.4,y:-45.4},0).wait(1).to({scaleX:1,skewX:15.5,skewY:7.6,x:-166.6},0).wait(1).to({skewX:15.2,skewY:7.5,x:-166.9},0).wait(1).to({skewX:14.9,skewY:7.3,x:-167.2},0).wait(1).to({skewX:14.5,skewY:7.1,x:-167.6},0).wait(1).to({scaleY:1.01,skewX:14.1,skewY:6.9,x:-168.1},0).wait(1).to({skewX:13.6,skewY:6.7,x:-168.6,y:-45.5},0).wait(1).to({skewX:13.1,skewY:6.4,x:-169.2},0).wait(1).to({scaleY:1.01,skewX:12.4,skewY:6.1,x:-169.8},0).wait(1).to({skewX:11.8,skewY:5.8,x:-170.4,y:-45.6},0).wait(1).to({skewX:11.1,skewY:5.4,x:-171.2},0).wait(1).to({scaleY:1.01,skewX:10.4,skewY:5.1,x:-171.9},0).wait(1).to({skewX:9.6,skewY:4.7,x:-172.7,y:-45.7},0).wait(1).to({scaleY:1,skewX:8.8,skewY:4.3,x:-173.5},0).wait(1).to({skewX:8,skewY:3.9,x:-174.4},0).wait(1).to({scaleY:1,skewX:7.2,skewY:3.5,x:-175.2,y:-45.8},0).wait(1).to({skewX:6.4,skewY:3.1,x:-176},0).wait(1).to({scaleY:1,skewX:5.6,skewY:2.8,x:-176.8,y:-45.9},0).wait(1).to({skewX:4.9,skewY:2.4,x:-177.6},0).wait(1).to({scaleY:1,skewX:4.1,skewY:2,x:-178.4},0).wait(1).to({skewX:3.4,skewY:1.7,x:-179.1,y:-46},0).wait(1).to({skewX:2.8,skewY:1.4,x:-179.8},0).wait(1).to({scaleY:1,skewX:2.2,skewY:1.1,x:-180.4},0).wait(1).to({skewX:1.7,skewY:0.8,x:-180.9,y:-46.1},0).wait(1).to({skewX:1.2,skewY:0.6,x:-181.4},0).wait(1).to({skewX:0.8,skewY:0.4,x:-181.8},0).wait(1).to({scaleY:1,skewX:0.5,skewY:0.3,x:-182.1},0).wait(1).to({skewX:0.3,skewY:0.1,x:-182.4},0).wait(1).to({skewX:0.1,skewY:0,x:-182.5},0).wait(1).to({regY:0,skewX:0,x:-182.4,y:-45.5},0).wait(1));

	// Back left flipper
	this.instance_6 = new lib.ClipGroup("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(142.5,82.8,1,1,0,0,0,49.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:49.5,regY:22,rotation:-0.1,x:142.4,y:82.9},0).wait(1).to({rotation:-0.3,y:82.8},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:0,skewX:-0.8,skewY:-0.7},0).wait(1).to({skewX:-1.1,skewY:-1},0).wait(1).to({skewX:-1.4,skewY:-1.3,y:82.7},0).wait(1).to({skewX:-1.8,skewY:-1.7},0).wait(1).to({skewX:-2.2,skewY:-2.1,y:82.6},0).wait(1).to({skewX:-2.7,skewY:-2.5,y:82.5},0).wait(1).to({skewX:-3.3,skewY:-3,x:142.5,y:82.4},0).wait(1).to({skewX:-3.8,skewY:-3.6,x:142.4,y:82.3},0).wait(1).to({skewX:-4.4,skewY:-4.1,x:142.5,y:82.2},0).wait(1).to({scaleX:1,skewX:-5.1,skewY:-4.7,y:82.1},0).wait(1).to({scaleY:1,skewX:-5.8,skewY:-5.4,y:82},0).wait(1).to({skewX:-6.5,skewY:-6,y:81.9},0).wait(1).to({skewX:-7.2,skewY:-6.7,y:81.8},0).wait(1).to({skewX:-8,skewY:-7.4,x:142.6,y:81.7},0).wait(1).to({skewX:-8.7,skewY:-8.1,y:81.6},0).wait(1).to({skewX:-9.5,skewY:-8.9,y:81.5},0).wait(1).to({skewX:-10.3,skewY:-9.6,y:81.3},0).wait(1).to({skewX:-11.1,skewY:-10.4,y:81.2},0).wait(1).to({skewX:-11.9,skewY:-11.1,y:81.1},0).wait(1).to({skewX:-12.7,skewY:-11.8,y:81},0).wait(1).to({skewX:-13.5,skewY:-12.6,x:142.7,y:80.9},0).wait(1).to({scaleX:1,skewX:-14.3,skewY:-13.3,x:142.6,y:80.8},0).wait(1).to({skewX:-15,skewY:-14,y:80.7},0).wait(1).to({scaleY:1,skewX:-15.7,skewY:-14.6,y:80.5},0).wait(1).to({skewX:-16.4,skewY:-15.3,x:142.7,y:80.4},0).wait(1).to({skewX:-17,skewY:-15.9},0).wait(1).to({regX:49.9,regY:22.2,skewX:-17.6,skewY:-16.4,x:142.8,y:80.2},0).wait(1).to({regX:49.5,regY:22,skewX:-17.5,skewY:-16.3,x:142.4,y:80.1},0).wait(1).to({skewX:-17.3,skewY:-16.1,x:142.3},0).wait(1).to({skewX:-17,skewY:-15.8,y:80.2},0).wait(1).to({skewX:-16.7,skewY:-15.5,x:142.4,y:80.3},0).wait(1).to({skewX:-16.2,skewY:-15.1,x:142.3},0).wait(1).to({skewX:-15.7,skewY:-14.7,y:80.4},0).wait(1).to({scaleY:1,skewX:-15.2,skewY:-14.2},0).wait(1).to({skewX:-14.6,skewY:-13.6,x:142.4,y:80.5},0).wait(1).to({skewX:-13.9,skewY:-13,x:142.3,y:80.7},0).wait(1).to({scaleX:1,skewX:-13.2,skewY:-12.3},0).wait(1).to({skewX:-12.4,skewY:-11.6,y:80.8},0).wait(1).to({skewX:-11.6,skewY:-10.8,y:81},0).wait(1).to({skewX:-10.7,skewY:-10,y:81.1},0).wait(1).to({skewX:-9.9,skewY:-9.2,x:142.2,y:81.2},0).wait(1).to({skewX:-9,skewY:-8.3,y:81.3},0).wait(1).to({skewX:-8.1,skewY:-7.5,y:81.4},0).wait(1).to({skewX:-7.2,skewY:-6.7,y:81.6},0).wait(1).to({skewX:-6.3,skewY:-5.9,y:81.7},0).wait(1).to({skewX:-5.4,skewY:-5.1,y:81.9},0).wait(1).to({scaleY:1,skewX:-4.6,skewY:-4.3,y:82},0).wait(1).to({scaleX:1,skewX:-3.9,skewY:-3.6,y:82.1},0).wait(1).to({skewX:-3.1,skewY:-2.9,y:82.2},0).wait(1).to({skewX:-2.5,skewY:-2.3,y:82.3},0).wait(1).to({skewX:-1.9,skewY:-1.8,y:82.4},0).wait(1).to({skewX:-1.4,skewY:-1.3,y:82.5},0).wait(1).to({skewX:-0.9,skewY:-0.9},0).wait(1).to({rotation:-0.6,skewX:0,skewY:0,x:142.1,y:82.6},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.1,x:142.2},0).wait(1).to({regX:49.6,regY:21.9,rotation:0,x:142.5,y:82.8},0).wait(1).to({regX:49.5,regY:22,rotation:-0.1,x:142.4,y:82.9},0).wait(1).to({rotation:-0.4,y:82.8},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:0,skewX:-1,skewY:-0.9},0).wait(1).to({skewX:-1.4,skewY:-1.3,y:82.7},0).wait(1).to({skewX:-1.9,skewY:-1.8,x:142.5},0).wait(1).to({skewX:-2.4,skewY:-2.3,x:142.4,y:82.5},0).wait(1).to({skewX:-3.1,skewY:-2.9,y:82.4},0).wait(1).to({skewX:-3.7,skewY:-3.5,x:142.5},0).wait(1).to({skewX:-4.5,skewY:-4.2,y:82.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.2,skewY:-4.9,y:82.1},0).wait(1).to({skewX:-6.1,skewY:-5.6,y:82},0).wait(1).to({skewX:-6.9,skewY:-6.4,y:81.9},0).wait(1).to({skewX:-7.8,skewY:-7.3,x:142.6,y:81.8},0).wait(1).to({skewX:-8.7,skewY:-8.1,x:142.5,y:81.6},0).wait(1).to({skewX:-9.6,skewY:-8.9,y:81.4},0).wait(1).to({skewX:-10.5,skewY:-9.8,x:142.6,y:81.3},0).wait(1).to({skewX:-11.3,skewY:-10.6,x:142.5,y:81.2},0).wait(1).to({skewX:-12.2,skewY:-11.4,x:142.6,y:81.1},0).wait(1).to({skewX:-13,skewY:-12.1,y:81},0).wait(1).to({scaleX:1,skewX:-13.8,skewY:-12.8,x:142.7,y:80.9},0).wait(1).to({skewX:-14.5,skewY:-13.5,x:142.6,y:80.7},0).wait(1).to({skewX:-15.2,skewY:-14.1,x:142.7,y:80.6},0).wait(1).to({scaleY:1,skewX:-15.7,skewY:-14.7,x:142.6},0).wait(1).to({skewX:-16.3,skewY:-15.2,x:142.7,y:80.5},0).wait(1).to({skewX:-16.7,skewY:-15.6,x:142.6,y:80.4},0).wait(1).to({skewX:-17.1,skewY:-15.9,x:142.7,y:80.3},0).wait(1).to({skewX:-17.3,skewY:-16.2},0).wait(1).to({skewX:-17.5,skewY:-16.3},0).wait(1).to({regX:49.9,regY:22.2,skewX:-17.6,skewY:-16.4,x:142.8,y:80.2},0).wait(1).to({regX:49.5,regY:22,skewX:-17.5,skewY:-16.3,x:142.4,y:80.1},0).wait(1).to({skewX:-17.3,skewY:-16.1,x:142.3},0).wait(1).to({skewX:-17,skewY:-15.8,y:80.2},0).wait(1).to({skewX:-16.7,skewY:-15.5,x:142.4,y:80.3},0).wait(1).to({skewX:-16.2,skewY:-15.1,x:142.3},0).wait(1).to({skewX:-15.7,skewY:-14.7,y:80.4},0).wait(1).to({scaleY:1,skewX:-15.2,skewY:-14.2},0).wait(1).to({skewX:-14.6,skewY:-13.6,x:142.4,y:80.5},0).wait(1).to({skewX:-13.9,skewY:-13,x:142.3,y:80.7},0).wait(1).to({scaleX:1,skewX:-13.2,skewY:-12.3},0).wait(1).to({skewX:-12.4,skewY:-11.6,y:80.8},0).wait(1).to({skewX:-11.6,skewY:-10.8,y:81},0).wait(1).to({skewX:-10.7,skewY:-10,y:81.1},0).wait(1).to({skewX:-9.9,skewY:-9.2,x:142.2,y:81.2},0).wait(1).to({skewX:-9,skewY:-8.3,y:81.3},0).wait(1).to({skewX:-8.1,skewY:-7.5,y:81.4},0).wait(1).to({skewX:-7.2,skewY:-6.7,y:81.6},0).wait(1).to({skewX:-6.3,skewY:-5.9,y:81.7},0).wait(1).to({skewX:-5.4,skewY:-5.1,y:81.9},0).wait(1).to({scaleY:1,skewX:-4.6,skewY:-4.3,y:82},0).wait(1).to({scaleX:1,skewX:-3.9,skewY:-3.6,y:82.1},0).wait(1).to({skewX:-3.1,skewY:-2.9,y:82.2},0).wait(1).to({skewX:-2.5,skewY:-2.3,y:82.3},0).wait(1).to({skewX:-1.9,skewY:-1.8,y:82.4},0).wait(1).to({skewX:-1.4,skewY:-1.3,y:82.5},0).wait(1).to({skewX:-0.9,skewY:-0.9},0).wait(1).to({rotation:-0.6,skewX:0,skewY:0,x:142.1,y:82.6},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.1,x:142.2},0).wait(1).to({regX:49.6,regY:21.9,rotation:0,x:142.5,y:82.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.4,-116.8,470.4,272.3);


// stage content:
(lib.Flo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flo
	this.instance = new lib.Flo_1();
	this.instance.parent = this;
	this.instance.setTransform(237,137.6,1,1,0,0,0,-43.3,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(238.9,138.9,470.4,272.3);
// library properties:
lib.properties = {
	id: '62671DEE88E546B3AFAC0AB7676E2F92',
	width: 474,
	height: 275,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/flo_atlas_.png?1499358155916", id:"flo_atlas_"}
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
an.compositions['62671DEE88E546B3AFAC0AB7676E2F92'] = {
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