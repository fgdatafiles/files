(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"charlie_atlas_", frames: [[0,132,26,45],[16,179,9,13],[0,179,14,14],[0,0,86,130],[88,126,92,86],[88,0,77,124]]}
];


// symbols:



(lib.ChalrieFinBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CharlieBlinkFarBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CharlieBlinkNearBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CharlieBodyBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CharlieHeadBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CharlieTailBMP = function() {
	this.spriteSheet = ss["charlie_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CharlieHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.CharlieHeadBMP();
	this.instance.parent = this;
	this.instance.setTransform(-32,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-69,92.1,86.2);


(lib.CharlieTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.CharlieTailBMP();
	this.instance.parent = this;
	this.instance.setTransform(-61,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,-25,77.4,124.4);


(lib.CharlieFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ChalrieFinBMP();
	this.instance.parent = this;
	this.instance.setTransform(-25,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-32,26.3,45);


(lib.CharlieEyleidFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.CharlieBlinkFarBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.CharlieEyelidNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.CharlieBlinkNearBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,14.4);


(lib.CharlieBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.CharlieBodyBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,130.1);


(lib.Charlie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:55});

	// timeline functions:
	this.frame_94 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Layer 7
	this.instance = new lib.CharlieEyelidNear("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.3,-91.5,1,1,0,0,0,7.2,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},6).wait(60).to({_off:false,regX:7.3,regY:7,scaleX:1.05,skewY:-3.3,x:9.4,y:-80.5},0).wait(1).to({regX:7,scaleX:1.05,scaleY:1,skewX:-0.1,x:9.1},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:-0.3,x:9.2,y:-80.8},0).wait(1).to({scaleX:1.05,scaleY:1.01,skewX:-0.6,x:9.4,y:-81.1},0).wait(1).to({scaleX:1.06,scaleY:1.01,skewX:-1.1,x:9.7,y:-81.6},0).wait(1).to({scaleX:1.06,scaleY:1.02,skewX:-1.6,x:9.9,y:-82.1},0).wait(1).to({scaleX:1.07,scaleY:1.03,skewX:-2.1,x:10.1,y:-82.7},0).wait(1).to({regX:7.3,regY:6.9,scaleX:1.07,scaleY:1.03,skewX:-2.6,x:10.7,y:-83.1},0).to({_off:true},1).wait(13));

	// Layer 6
	this.instance_1 = new lib.CharlieEyleidFar("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.9,-92,1,1,0,0,0,4.4,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},6).wait(60).to({_off:false,scaleY:1,skewX:-2.9,x:31.3,y:-82.7},0).wait(1).to({regX:4.5,x:31.4,y:-82.8},0).wait(1).to({x:31.5,y:-83},0).wait(1).to({x:31.6,y:-83.3},0).wait(1).to({x:31.8,y:-83.7},0).wait(1).to({x:32,y:-84.2},0).wait(1).to({x:32.1,y:-84.7},0).wait(1).to({regX:4.4,x:32.2,y:-85.2},0).to({_off:true},1).wait(13));

	// CharlieHead
	this.instance_2 = new lib.CharlieHead("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.2,-70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({regX:14,regY:-26,x:15.2,y:-96.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:15.1,y:-96.4},0).wait(1).to({scaleX:1,rotation:-0.3,x:15,y:-96.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-0.5,skewY:-0.6,x:14.8,y:-95.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8,skewY:-0.9,x:14.6,y:-95.2},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.1,skewY:-1.2,x:14.4,y:-94.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.5,skewY:-1.7,x:14.1,y:-93.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.9,skewY:-2.1,x:13.8,y:-92.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.4,skewY:-2.7,x:13.5,y:-91.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.9,skewY:-3.2,x:13.1,y:-91},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:-3.4,skewY:-3.7,x:12.8,y:-90},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-3.9,skewY:-4.2,x:12.4,y:-89.1},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.3,skewY:-4.7,x:12.1,y:-88.2},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.7,skewY:-5.1,x:11.8,y:-87.5},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5,skewY:-5.5,x:11.6,y:-86.8},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.2,skewY:-5.8,x:11.4,y:-86.3},0).wait(1).to({scaleX:0.96,scaleY:1.03,skewX:-5.4,skewY:-6,x:11.3,y:-86},0).wait(1).to({scaleX:0.96,skewX:-5.5,skewY:-6.1,x:11.2,y:-85.7},0).wait(1).to({regX:0,regY:-0.1,x:0.4,y:-57.7},0).wait(1).to({regX:14,regY:-26,x:11.2,y:-85.6},0).wait(1).to({scaleX:0.96,skewX:-5.4,skewY:-6,x:11.3,y:-85.8},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.3,skewY:-5.8,x:11.4,y:-86.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.1,skewY:-5.6,x:11.5,y:-86.4},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.8,skewY:-5.3,x:11.7,y:-87},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.5,skewY:-5,x:11.9,y:-87.6},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.2,skewY:-4.6,x:12.2,y:-88.3},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-3.8,skewY:-4.2,x:12.5,y:-89.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:-3.3,skewY:-3.7,x:12.8,y:-90},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.9,skewY:-3.2,x:13.1,y:-90.8},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.4,skewY:-2.7,x:13.5,y:-91.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-2,skewY:-2.2,x:13.8,y:-92.7},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.5,skewY:-1.7,x:14.1,y:-93.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.1,skewY:-1.3,x:14.4,y:-94.3},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8,skewY:-0.9,x:14.6,y:-95},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.6,x:14.8,y:-95.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,skewX:0,skewY:0,x:15,y:-96},0).wait(1).to({scaleX:1,rotation:-0.1,x:15.1,y:-96.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:15.2,y:-96.5},0).wait(1).to({regX:0,regY:0,x:1.2,y:-70.7},0).wait(1).to({startPosition:0},0).wait(1).to({regX:14,regY:-26,x:15.2,y:-96.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:15.1,y:-96.4},0).wait(1).to({scaleX:1,rotation:-0.3,x:15,y:-96.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-0.5,skewY:-0.6,x:14.8,y:-95.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8,skewY:-0.9,x:14.6,y:-95.2},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.1,skewY:-1.2,x:14.4,y:-94.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.5,skewY:-1.7,x:14.1,y:-93.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.9,skewY:-2.1,x:13.8,y:-92.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.4,skewY:-2.7,x:13.5,y:-91.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.9,skewY:-3.2,x:13.1,y:-91},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:-3.4,skewY:-3.7,x:12.8,y:-90},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-3.9,skewY:-4.2,x:12.4,y:-89.1},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.3,skewY:-4.7,x:12.1,y:-88.2},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.7,skewY:-5.1,x:11.8,y:-87.5},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5,skewY:-5.5,x:11.6,y:-86.8},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.2,skewY:-5.8,x:11.4,y:-86.3},0).wait(1).to({scaleX:0.96,scaleY:1.03,skewX:-5.4,skewY:-6,x:11.3,y:-86},0).wait(1).to({scaleX:0.96,skewX:-5.5,skewY:-6.1,x:11.2,y:-85.7},0).wait(1).to({regX:0,regY:-0.1,x:0.4,y:-57.7},0).wait(1).to({regX:14,regY:-26,x:11.2,y:-85.6},0).wait(1).to({scaleX:0.96,skewX:-5.4,skewY:-6,x:11.3,y:-85.8},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.3,skewY:-5.8,x:11.4,y:-86.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-5.1,skewY:-5.6,x:11.5,y:-86.4},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.8,skewY:-5.3,x:11.7,y:-87},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.5,skewY:-5,x:11.9,y:-87.6},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-4.2,skewY:-4.6,x:12.2,y:-88.3},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-3.8,skewY:-4.2,x:12.5,y:-89.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:-3.3,skewY:-3.7,x:12.8,y:-90},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.9,skewY:-3.2,x:13.1,y:-90.8},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.4,skewY:-2.7,x:13.5,y:-91.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-2,skewY:-2.2,x:13.8,y:-92.7},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-1.5,skewY:-1.7,x:14.1,y:-93.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.1,skewY:-1.3,x:14.4,y:-94.3},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8,skewY:-0.9,x:14.6,y:-95},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.6,x:14.8,y:-95.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,skewX:0,skewY:0,x:15,y:-96},0).wait(1).to({scaleX:1,rotation:-0.1,x:15.1,y:-96.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:15.2,y:-96.5},0).wait(1).to({regX:0,regY:0,x:1.2,y:-70.7},0).wait(1));

	// Charlie Body
	this.instance_3 = new lib.CharlieBody("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12,-3.3,1,1,0,0,0,42.8,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({regX:43,x:12.2,y:-3.2},0).wait(1).to({scaleX:1,scaleY:1,y:-2.9},0).wait(1).to({scaleX:1,x:12.3,y:-2.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:-0.1,x:12.4,y:-2},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:-0.2,y:-1.2},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.2,skewY:-0.3,x:12.5,y:-0.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewY:-0.4,x:12.6,y:0.6},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-0.3,skewY:-0.5,x:12.7,y:1.7},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewY:-0.6,x:12.8,y:2.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:12.9,y:4.2},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.5,skewY:-0.9,x:13,y:5.5},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1,x:13.1,y:6.7},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:13.3,y:7.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.7,skewY:-1.2,y:8.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1.3,x:13.4,y:9.6},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:13.5,y:10.3},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-0.8,skewY:-1.4,x:13.6,y:10.7},0).wait(1).to({scaleX:0.96,y:11},0).wait(1).to({regX:42.8,regY:64.8,x:13.4,y:11.1},0).wait(1).to({regX:43,regY:65,x:13.6,y:11.2},0).wait(1).to({scaleX:0.96,y:10.9},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-0.7,skewY:-1.3,x:13.5,y:10.6},0).wait(1).to({scaleX:0.96,scaleY:1.02,y:10.1},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1.2,x:13.4,y:9.4},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:13.3,y:8.6},0).wait(1).to({scaleX:0.97,scaleY:1.02,y:7.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.5,skewY:-1,x:13.2,y:6.7},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewY:-0.8,x:13.1,y:5.6},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:12.9,y:4.4},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.3,skewY:-0.6,x:12.8,y:3.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewY:-0.5,x:12.7,y:2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-0.2,skewY:-0.4,x:12.6,y:0.9},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:-0.3,x:12.5,y:-0.1},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.1,skewY:-0.2,x:12.4,y:-1},0).wait(1).to({scaleX:1,scaleY:1,skewY:-0.1,y:-1.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:12.3,y:-2.3},0).wait(1).to({scaleX:1,x:12.2,y:-2.7},0).wait(1).to({scaleX:1,scaleY:1,y:-3},0).wait(1).to({regX:42.8,x:12,y:-3.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:43,x:12.2,y:-3.2},0).wait(1).to({scaleX:1,scaleY:1,y:-2.9},0).wait(1).to({scaleX:1,x:12.3,y:-2.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:-0.1,x:12.4,y:-2},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:-0.2,y:-1.2},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.2,skewY:-0.3,x:12.5,y:-0.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewY:-0.4,x:12.6,y:0.6},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-0.3,skewY:-0.5,x:12.7,y:1.7},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewY:-0.6,x:12.8,y:2.9},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:12.9,y:4.2},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.5,skewY:-0.9,x:13,y:5.5},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1,x:13.1,y:6.7},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:13.3,y:7.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.7,skewY:-1.2,y:8.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1.3,x:13.4,y:9.6},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:13.5,y:10.3},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-0.8,skewY:-1.4,x:13.6,y:10.7},0).wait(1).to({scaleX:0.96,y:11},0).wait(1).to({regX:42.8,regY:64.8,x:13.4,y:11.1},0).wait(1).to({regX:43,regY:65,x:13.6,y:11.2},0).wait(1).to({scaleX:0.96,y:10.9},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:-0.7,skewY:-1.3,x:13.5,y:10.6},0).wait(1).to({scaleX:0.96,scaleY:1.02,y:10.1},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewY:-1.2,x:13.4,y:9.4},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:13.3,y:8.6},0).wait(1).to({scaleX:0.97,scaleY:1.02,y:7.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,skewX:-0.5,skewY:-1,x:13.2,y:6.7},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewY:-0.8,x:13.1,y:5.6},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:12.9,y:4.4},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-0.3,skewY:-0.6,x:12.8,y:3.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewY:-0.5,x:12.7,y:2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:-0.2,skewY:-0.4,x:12.6,y:0.9},0).wait(1).to({scaleX:0.99,scaleY:1,skewY:-0.3,x:12.5,y:-0.1},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.1,skewY:-0.2,x:12.4,y:-1},0).wait(1).to({scaleX:1,scaleY:1,skewY:-0.1,y:-1.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:12.3,y:-2.3},0).wait(1).to({scaleX:1,x:12.2,y:-2.7},0).wait(1).to({scaleX:1,scaleY:1,y:-3},0).wait(1).to({regX:42.8,x:12,y:-3.3},0).wait(1));

	// Charlie Tail
	this.instance_4 = new lib.CharlieTail("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.3,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({regX:-22.5,regY:37,scaleY:1,x:-27.7,y:79.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,x:-27.6,y:79.4},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.2,skewY:-0.1,x:-27.3,y:80},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.4,x:-27,y:80.8},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.6,skewY:-0.2,x:-26.7,y:81.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.8,skewY:-0.3,x:-26.2,y:83},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.1,skewY:-0.4,x:-25.7,y:84.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1.4,skewY:-0.5,x:-25.1,y:86.2},0).wait(1).to({scaleX:0.98,scaleY:1.05,skewX:-1.7,skewY:-0.6,x:-24.4,y:87.9},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-2,skewY:-0.7,x:-23.7,y:89.7},0).wait(1).to({scaleX:0.98,scaleY:1.08,skewX:-2.4,skewY:-0.9,x:-23,y:91.5},0).wait(1).to({scaleX:0.97,scaleY:1.09,skewX:-2.7,skewY:-1,x:-22.3,y:93.2},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3,skewY:-1.1,x:-21.7,y:94.8},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3.3,skewY:-1.2,x:-21.1,y:96.2},0).wait(1).to({scaleX:0.97,scaleY:1.11,skewX:-3.5,skewY:-1.3,x:-20.7,y:97.3},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.7,x:-20.3,y:98.3},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.8,skewY:-1.4,x:-20.1,y:98.9},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.9,x:-19.9,y:99.3},0).wait(1).to({regX:-0.2,regY:0.4,scaleY:1.12,x:-1.1,y:57.5},0).wait(1).to({regX:-22.5,regY:37,scaleY:1.12,x:-19.7,y:98.8},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.8,x:-19.9,y:98.5},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.7,skewY:-1.3,x:-20.1,y:98},0).wait(1).to({scaleX:0.96,scaleY:1.11,skewX:-3.6,x:-20.4,y:97.4},0).wait(1).to({scaleX:0.97,scaleY:1.11,skewX:-3.4,skewY:-1.2,x:-20.7,y:96.4},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3.2,skewY:-1.1,x:-21.2,y:95.3},0).wait(1).to({scaleX:0.97,scaleY:1.09,skewX:-2.9,x:-21.7,y:94},0).wait(1).to({scaleX:0.97,scaleY:1.08,skewX:-2.7,skewY:-1,x:-22.3,y:92.5},0).wait(1).to({scaleX:0.98,scaleY:1.07,skewX:-2.4,skewY:-0.8,x:-22.8,y:90.9},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-2,skewY:-0.7,x:-23.5,y:89.3},0).wait(1).to({scaleX:0.98,scaleY:1.05,skewX:-1.7,skewY:-0.6,x:-24.2,y:87.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1.4,skewY:-0.5,x:-24.8,y:85.9},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.1,skewY:-0.4,x:-25.5,y:84.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.8,skewY:-0.3,x:-25.9,y:82.8},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.6,skewY:-0.2,x:-26.5,y:81.5},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.4,skewY:-0.1,x:-26.8,y:80.4},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.2,x:-27.1,y:79.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:0,x:-27.4,y:79},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,x:-27.5,y:78.6},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-5.3,y:41.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-22.5,regY:37,scaleY:1,x:-27.7,y:79.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,x:-27.6,y:79.4},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.2,skewY:-0.1,x:-27.3,y:80},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.4,x:-27,y:80.8},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.6,skewY:-0.2,x:-26.7,y:81.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.8,skewY:-0.3,x:-26.2,y:83},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.1,skewY:-0.4,x:-25.7,y:84.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1.4,skewY:-0.5,x:-25.1,y:86.2},0).wait(1).to({scaleX:0.98,scaleY:1.05,skewX:-1.7,skewY:-0.6,x:-24.4,y:87.9},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-2,skewY:-0.7,x:-23.7,y:89.7},0).wait(1).to({scaleX:0.98,scaleY:1.08,skewX:-2.4,skewY:-0.9,x:-23,y:91.5},0).wait(1).to({scaleX:0.97,scaleY:1.09,skewX:-2.7,skewY:-1,x:-22.3,y:93.2},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3,skewY:-1.1,x:-21.7,y:94.8},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3.3,skewY:-1.2,x:-21.1,y:96.2},0).wait(1).to({scaleX:0.97,scaleY:1.11,skewX:-3.5,skewY:-1.3,x:-20.7,y:97.3},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.7,x:-20.3,y:98.3},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.8,skewY:-1.4,x:-20.1,y:98.9},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.9,x:-19.9,y:99.3},0).wait(1).to({regX:-0.2,regY:0.4,scaleY:1.12,x:-1.1,y:57.5},0).wait(1).to({regX:-22.5,regY:37,scaleY:1.12,x:-19.7,y:98.8},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.8,x:-19.9,y:98.5},0).wait(1).to({scaleX:0.96,scaleY:1.12,skewX:-3.7,skewY:-1.3,x:-20.1,y:98},0).wait(1).to({scaleX:0.96,scaleY:1.11,skewX:-3.6,x:-20.4,y:97.4},0).wait(1).to({scaleX:0.97,scaleY:1.11,skewX:-3.4,skewY:-1.2,x:-20.7,y:96.4},0).wait(1).to({scaleX:0.97,scaleY:1.1,skewX:-3.2,skewY:-1.1,x:-21.2,y:95.3},0).wait(1).to({scaleX:0.97,scaleY:1.09,skewX:-2.9,x:-21.7,y:94},0).wait(1).to({scaleX:0.97,scaleY:1.08,skewX:-2.7,skewY:-1,x:-22.3,y:92.5},0).wait(1).to({scaleX:0.98,scaleY:1.07,skewX:-2.4,skewY:-0.8,x:-22.8,y:90.9},0).wait(1).to({scaleX:0.98,scaleY:1.06,skewX:-2,skewY:-0.7,x:-23.5,y:89.3},0).wait(1).to({scaleX:0.98,scaleY:1.05,skewX:-1.7,skewY:-0.6,x:-24.2,y:87.5},0).wait(1).to({scaleX:0.99,scaleY:1.04,skewX:-1.4,skewY:-0.5,x:-24.8,y:85.9},0).wait(1).to({scaleX:0.99,scaleY:1.03,skewX:-1.1,skewY:-0.4,x:-25.5,y:84.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.8,skewY:-0.3,x:-25.9,y:82.8},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:-0.6,skewY:-0.2,x:-26.5,y:81.5},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.4,skewY:-0.1,x:-26.8,y:80.4},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-0.2,x:-27.1,y:79.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:0,x:-27.4,y:79},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,x:-27.5,y:78.6},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-5.3,y:41.9},0).wait(1));

	// Charlie Fin
	this.instance_5 = new lib.CharlieFin("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({regX:-12,regY:-9.5,scaleX:1,x:-18,y:-2.9},0).wait(1).to({scaleX:0.99,scaleY:1,x:-17.9,y:-2.6},0).wait(1).to({scaleX:0.98,x:-17.7,y:-2.2},0).wait(1).to({scaleX:0.96,scaleY:1,skewX:-0.1,skewY:-0.1,x:-17.4,y:-1.6},0).wait(1).to({scaleX:0.94,scaleY:1,skewY:-0.2,x:-17,y:-0.9},0).wait(1).to({scaleX:0.91,scaleY:1,skewX:-0.2,skewY:-0.3,x:-16.5,y:0.1},0).wait(1).to({scaleX:0.88,scaleY:1.01,skewY:-0.4,x:-16,y:1.1},0).wait(1).to({scaleX:0.85,scaleY:1.01,skewX:-0.3,skewY:-0.5,x:-15.4,y:2.3},0).wait(1).to({scaleX:0.81,scaleY:1.01,skewY:-0.6,x:-14.7,y:3.6},0).wait(1).to({scaleX:0.77,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:-14,y:4.9},0).wait(1).to({scaleX:0.73,scaleY:1.01,skewX:-0.5,skewY:-0.8,x:-13.4,y:6.2},0).wait(1).to({scaleX:0.69,scaleY:1.02,skewY:-1,x:-12.7,y:7.5},0).wait(1).to({scaleX:0.66,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:-12.1,y:8.6},0).wait(1).to({scaleX:0.63,scaleY:1.02,skewX:-0.7,skewY:-1.2,x:-11.6,y:9.7},0).wait(1).to({scaleX:0.6,scaleY:1.02,skewY:-1.3,x:-11.1,y:10.5},0).wait(1).to({scaleX:0.58,scaleY:1.02,x:-10.8,y:11.2},0).wait(1).to({scaleX:0.57,scaleY:1.02,skewX:-0.8,skewY:-1.4,x:-10.5,y:11.6},0).wait(1).to({scaleX:0.56,x:-10.4,y:11.9},0).wait(1).to({regX:-0.1,regY:0.2,scaleX:0.56,x:-3.5,y:21.6},0).wait(1).to({regX:-12,regY:-9.5,scaleX:0.56,x:-10.3,y:11.7},0).wait(1).to({scaleX:0.57,x:-10.5,y:11.4},0).wait(1).to({scaleX:0.58,scaleY:1.02,skewX:-0.7,skewY:-1.3,x:-10.7,y:11.1},0).wait(1).to({scaleX:0.59,scaleY:1.02,x:-10.9,y:10.6},0).wait(1).to({scaleX:0.61,scaleY:1.02,skewY:-1.2,x:-11.2,y:9.9},0).wait(1).to({scaleX:0.64,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:-11.7,y:9.1},0).wait(1).to({scaleX:0.67,scaleY:1.02,skewY:-1,x:-12.2,y:8.1},0).wait(1).to({scaleX:0.7,scaleY:1.02,skewX:-0.5,skewY:-0.9,x:-12.8,y:7.1},0).wait(1).to({scaleX:0.73,scaleY:1.01,skewY:-0.8,x:-13.4,y:5.9},0).wait(1).to({scaleX:0.77,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:-14,y:4.7},0).wait(1).to({scaleX:0.81,scaleY:1.01,skewX:-0.3,skewY:-0.6,x:-14.6,y:3.4},0).wait(1).to({scaleX:0.84,scaleY:1.01,skewY:-0.5,x:-15.2,y:2.2},0).wait(1).to({scaleX:0.88,scaleY:1.01,skewX:-0.2,skewY:-0.4,x:-15.9,y:1},0).wait(1).to({scaleX:0.91,scaleY:1,skewY:-0.3,x:-16.4,y:-0.1},0).wait(1).to({scaleX:0.94,scaleY:1,skewX:-0.1,skewY:-0.2,x:-16.9,y:-1},0).wait(1).to({scaleX:0.96,scaleY:1,skewY:-0.1,x:-17.3,y:-1.8},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:0,skewY:0,x:-17.6,y:-2.4},0).wait(1).to({scaleX:0.99,x:-17.8,y:-2.9},0).wait(1).to({scaleX:1,scaleY:1,x:-17.9,y:-3.1},0).wait(1).to({regX:0,regY:0,scaleX:1,x:-6.1,y:6.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-12,regY:-9.5,scaleX:1,x:-18,y:-2.9},0).wait(1).to({scaleX:0.99,scaleY:1,x:-17.9,y:-2.6},0).wait(1).to({scaleX:0.98,x:-17.7,y:-2.2},0).wait(1).to({scaleX:0.96,scaleY:1,skewX:-0.1,skewY:-0.1,x:-17.4,y:-1.6},0).wait(1).to({scaleX:0.94,scaleY:1,skewY:-0.2,x:-17,y:-0.9},0).wait(1).to({scaleX:0.91,scaleY:1,skewX:-0.2,skewY:-0.3,x:-16.5,y:0.1},0).wait(1).to({scaleX:0.88,scaleY:1.01,skewY:-0.4,x:-16,y:1.1},0).wait(1).to({scaleX:0.85,scaleY:1.01,skewX:-0.3,skewY:-0.5,x:-15.4,y:2.3},0).wait(1).to({scaleX:0.81,scaleY:1.01,skewY:-0.6,x:-14.7,y:3.6},0).wait(1).to({scaleX:0.77,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:-14,y:4.9},0).wait(1).to({scaleX:0.73,scaleY:1.01,skewX:-0.5,skewY:-0.8,x:-13.4,y:6.2},0).wait(1).to({scaleX:0.69,scaleY:1.02,skewY:-1,x:-12.7,y:7.5},0).wait(1).to({scaleX:0.66,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:-12.1,y:8.6},0).wait(1).to({scaleX:0.63,scaleY:1.02,skewX:-0.7,skewY:-1.2,x:-11.6,y:9.7},0).wait(1).to({scaleX:0.6,scaleY:1.02,skewY:-1.3,x:-11.1,y:10.5},0).wait(1).to({scaleX:0.58,scaleY:1.02,x:-10.8,y:11.2},0).wait(1).to({scaleX:0.57,scaleY:1.02,skewX:-0.8,skewY:-1.4,x:-10.5,y:11.6},0).wait(1).to({scaleX:0.56,x:-10.4,y:11.9},0).wait(1).to({regX:-0.1,regY:0.2,scaleX:0.56,x:-3.5,y:21.6},0).wait(1).to({regX:-12,regY:-9.5,scaleX:0.56,x:-10.3,y:11.7},0).wait(1).to({scaleX:0.57,x:-10.5,y:11.4},0).wait(1).to({scaleX:0.58,scaleY:1.02,skewX:-0.7,skewY:-1.3,x:-10.7,y:11.1},0).wait(1).to({scaleX:0.59,scaleY:1.02,x:-10.9,y:10.6},0).wait(1).to({scaleX:0.61,scaleY:1.02,skewY:-1.2,x:-11.2,y:9.9},0).wait(1).to({scaleX:0.64,scaleY:1.02,skewX:-0.6,skewY:-1.1,x:-11.7,y:9.1},0).wait(1).to({scaleX:0.67,scaleY:1.02,skewY:-1,x:-12.2,y:8.1},0).wait(1).to({scaleX:0.7,scaleY:1.02,skewX:-0.5,skewY:-0.9,x:-12.8,y:7.1},0).wait(1).to({scaleX:0.73,scaleY:1.01,skewY:-0.8,x:-13.4,y:5.9},0).wait(1).to({scaleX:0.77,scaleY:1.01,skewX:-0.4,skewY:-0.7,x:-14,y:4.7},0).wait(1).to({scaleX:0.81,scaleY:1.01,skewX:-0.3,skewY:-0.6,x:-14.6,y:3.4},0).wait(1).to({scaleX:0.84,scaleY:1.01,skewY:-0.5,x:-15.2,y:2.2},0).wait(1).to({scaleX:0.88,scaleY:1.01,skewX:-0.2,skewY:-0.4,x:-15.9,y:1},0).wait(1).to({scaleX:0.91,scaleY:1,skewY:-0.3,x:-16.4,y:-0.1},0).wait(1).to({scaleX:0.94,scaleY:1,skewX:-0.1,skewY:-0.2,x:-16.9,y:-1},0).wait(1).to({scaleX:0.96,scaleY:1,skewY:-0.1,x:-17.3,y:-1.8},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:0,skewY:0,x:-17.6,y:-2.4},0).wait(1).to({scaleX:0.99,x:-17.8,y:-2.9},0).wait(1).to({scaleX:1,scaleY:1,x:-17.9,y:-3.1},0).wait(1).to({regX:0,regY:0,scaleX:1,x:-6.1,y:6.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-139.7,127.5,280.7);


// stage content:
(lib.Charlie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Charlie_1();
	this.instance.parent = this;
	this.instance.setTransform(120,261.6,1,1,0,0,0,-2.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175.8,382.2,127.5,280.7);
// library properties:
lib.properties = {
	id: 'E1C85832AFA247A1BAE3D78A8C6EE9D3',
	width: 239,
	height: 522,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/charlie_atlas_.png?1499358067654", id:"charlie_atlas_"}
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
an.compositions['E1C85832AFA247A1BAE3D78A8C6EE9D3'] = {
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