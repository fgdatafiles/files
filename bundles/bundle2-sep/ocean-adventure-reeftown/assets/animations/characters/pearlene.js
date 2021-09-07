(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pearlene_atlas_", frames: [[0,181,110,41],[147,181,31,17],[112,181,33,33],[0,134,158,45],[0,224,171,22],[0,0,163,132]]}
];


// symbols:



(lib.PearlineBodyBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PearlineFaceBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PearlinePearlBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PearlineShellBackBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PearlineShellFrontBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PearlineShellTopBMP = function() {
	this.spriteSheet = ss["pearlene_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PearlineShellTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlineShellTopBMP();
	this.instance.parent = this;
	this.instance.setTransform(-85,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-126,163,132);


(lib.PearlineShellFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlineShellFrontBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,22);


(lib.PearlineShellBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlineShellBackBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,45);


(lib.PearlinePearl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlinePearlBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.PearlineFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlineFaceBMP();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,31,17);


(lib.PearlineBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.PearlineBodyBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,41);


(lib.Pearline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:95});

	// timeline functions:
	this.frame_174 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(1));

	// Pearline Shell Front
	this.instance = new lib.PearlineShellFront("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.6,57.9,1,1,0,0,0,85.6,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:85.5,regY:11,x:-4.7,y:58.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:85.6,regY:10.8,x:-4.6,y:57.9},0).wait(1).to({regX:85.5,regY:11,x:-4.7,y:58.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:85.6,regY:10.8,x:-4.6,y:57.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:85.5,regY:11,x:-4.7,y:58.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:85.6,regY:10.8,x:-4.6,y:57.9},0).wait(1).to({regX:85.5,regY:11,x:-4.7,y:58.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:85.6,regY:10.8,x:-4.6,y:57.9},0).wait(1));

	// Pearline Face
	this.instance_1 = new lib.PearlineFace("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.2,35,1,1,0,0,0,15.7,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:15.5,regY:7.5,x:-10.4,y:34.8},0).wait(1).to({skewX:0.1},0).wait(1).to({y:34.7},0).wait(1).to({skewX:0.2,y:34.6},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.4,y:34.5},0).wait(1).to({scaleY:1,skewX:0.5,y:34.3},0).wait(1).to({skewX:0.7,y:34.2},0).wait(1).to({skewX:0.9,y:34.1},0).wait(1).to({skewX:1.1,y:33.9},0).wait(1).to({skewX:1.3,y:33.7},0).wait(1).to({scaleY:1,skewX:1.5,y:33.5},0).wait(1).to({skewX:1.8,y:33.3},0).wait(1).to({skewX:2,x:-10.3,y:33},0).wait(1).to({scaleY:1,skewX:2.3,x:-10.4,y:32.8},0).wait(1).to({skewX:2.6,y:32.5},0).wait(1).to({skewX:3,y:32.3},0).wait(1).to({scaleY:1,skewX:3.3,y:32},0).wait(1).to({skewX:3.6,y:31.7},0).wait(1).to({scaleY:1,skewX:4,x:-10.3,y:31.4},0).wait(1).to({skewX:4.3,y:31.1},0).wait(1).to({skewX:4.6,y:30.8},0).wait(1).to({scaleY:1.01,skewX:4.9,y:30.6},0).wait(1).to({skewX:5.2,y:30.3},0).wait(1).to({skewX:5.5,y:30.1},0).wait(1).to({scaleY:1.01,skewX:5.8,y:29.8},0).wait(1).to({skewX:6.1,y:29.6},0).wait(1).to({skewX:6.3,y:29.4},0).wait(1).to({skewX:6.5,y:29.2},0).wait(1).to({scaleY:1.01,skewX:6.7,y:29.1},0).wait(1).to({skewX:6.9,y:29},0).wait(1).to({skewX:7,y:28.8},0).wait(1).to({skewX:7.1,y:28.7},0).wait(1).to({skewX:7.2,y:28.6},0).wait(1).to({skewX:7.3},0).wait(1).to({skewX:7.4,y:28.5},0).wait(1).to({scaleY:1.01},0).wait(1).to({startPosition:0},0).wait(1).to({regX:15.7,regY:7.7,x:-10.2,y:28.7},0).wait(1).to({regX:15.5,regY:7.5,x:-10.4,y:28.5},0).wait(1).to({scaleY:1.01,x:-10.3},0).wait(1).to({skewX:7.3},0).wait(1).to({y:28.6},0).wait(1).to({skewX:7.2,y:28.7},0).wait(1).to({skewX:7.1,x:-10.4,y:28.8},0).wait(1).to({skewX:6.9,x:-10.3,y:28.9},0).wait(1).to({skewX:6.8,y:29},0).wait(1).to({skewX:6.6,y:29.1},0).wait(1).to({scaleY:1.01,skewX:6.4,y:29.3},0).wait(1).to({skewX:6.2,y:29.5},0).wait(1).to({skewX:6,x:-10.4,y:29.7},0).wait(1).to({skewX:5.8,x:-10.3,y:29.9},0).wait(1).to({scaleY:1.01,skewX:5.5,y:30.1},0).wait(1).to({skewX:5.2,x:-10.4,y:30.3},0).wait(1).to({skewX:4.9,y:30.6},0).wait(1).to({scaleY:1,skewX:4.6,y:30.8},0).wait(1).to({skewX:4.3,y:31.1},0).wait(1).to({skewX:4,y:31.4},0).wait(1).to({scaleY:1,skewX:3.6,y:31.7},0).wait(1).to({skewX:3.3,y:32},0).wait(1).to({scaleY:1,skewX:3,y:32.2},0).wait(1).to({skewX:2.7,y:32.5},0).wait(1).to({skewX:2.4,y:32.8},0).wait(1).to({scaleY:1,skewX:2.1,y:33},0).wait(1).to({skewX:1.8,y:33.2},0).wait(1).to({skewX:1.6,y:33.5},0).wait(1).to({skewX:1.3,y:33.7},0).wait(1).to({scaleY:1,skewX:1.1,y:33.9},0).wait(1).to({skewX:0.9,y:34},0).wait(1).to({skewX:0.7,y:34.2},0).wait(1).to({skewX:0.6,y:34.3},0).wait(1).to({skewX:0.4,y:34.4},0).wait(1).to({scaleY:1,skewX:0.3,x:-10.5,y:34.5},0).wait(1).to({skewX:0.2,y:34.6},0).wait(1).to({skewX:0.1,x:-10.4,y:34.7},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:0,y:34.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:15.7,regY:7.7,x:-10.2,y:35},0).wait(1).to({startPosition:0},0).wait(1).to({regX:15.5,regY:7.5,x:-10.4,y:34.8},0).wait(1).to({skewX:0.1},0).wait(1).to({y:34.7},0).wait(1).to({skewX:0.2,y:34.6},0).wait(1).to({skewX:0.3},0).wait(1).to({skewX:0.4,y:34.5},0).wait(1).to({scaleY:1,skewX:0.5,y:34.3},0).wait(1).to({skewX:0.7,y:34.2},0).wait(1).to({skewX:0.9,y:34.1},0).wait(1).to({skewX:1.1,y:33.9},0).wait(1).to({skewX:1.3,y:33.7},0).wait(1).to({scaleY:1,skewX:1.5,y:33.5},0).wait(1).to({skewX:1.8,y:33.3},0).wait(1).to({skewX:2,x:-10.3,y:33},0).wait(1).to({scaleY:1,skewX:2.3,x:-10.4,y:32.8},0).wait(1).to({skewX:2.6,y:32.5},0).wait(1).to({skewX:3,y:32.3},0).wait(1).to({scaleY:1,skewX:3.3,y:32},0).wait(1).to({skewX:3.6,y:31.7},0).wait(1).to({scaleY:1,skewX:4,x:-10.3,y:31.4},0).wait(1).to({skewX:4.3,y:31.1},0).wait(1).to({skewX:4.6,y:30.8},0).wait(1).to({scaleY:1.01,skewX:4.9,y:30.6},0).wait(1).to({skewX:5.2,y:30.3},0).wait(1).to({skewX:5.5,y:30.1},0).wait(1).to({scaleY:1.01,skewX:5.8,y:29.8},0).wait(1).to({skewX:6.1,y:29.6},0).wait(1).to({skewX:6.3,y:29.4},0).wait(1).to({skewX:6.5,y:29.2},0).wait(1).to({scaleY:1.01,skewX:6.7,y:29.1},0).wait(1).to({skewX:6.9,y:29},0).wait(1).to({skewX:7,y:28.8},0).wait(1).to({skewX:7.1,y:28.7},0).wait(1).to({skewX:7.2,y:28.6},0).wait(1).to({skewX:7.3},0).wait(1).to({skewX:7.4,y:28.5},0).wait(1).to({scaleY:1.01},0).wait(1).to({startPosition:0},0).wait(1).to({regX:15.7,regY:7.7,x:-10.2,y:28.7},0).wait(1).to({regX:15.5,regY:7.5,x:-10.4,y:28.5},0).wait(1).to({scaleY:1.01,x:-10.3},0).wait(1).to({skewX:7.3},0).wait(1).to({y:28.6},0).wait(1).to({skewX:7.2,y:28.7},0).wait(1).to({skewX:7.1,x:-10.4,y:28.8},0).wait(1).to({skewX:6.9,x:-10.3,y:28.9},0).wait(1).to({skewX:6.8,y:29},0).wait(1).to({skewX:6.6,y:29.1},0).wait(1).to({scaleY:1.01,skewX:6.4,y:29.3},0).wait(1).to({skewX:6.2,y:29.5},0).wait(1).to({skewX:6,x:-10.4,y:29.7},0).wait(1).to({skewX:5.8,x:-10.3,y:29.9},0).wait(1).to({scaleY:1.01,skewX:5.5,y:30.1},0).wait(1).to({skewX:5.2,x:-10.4,y:30.3},0).wait(1).to({skewX:4.9,y:30.6},0).wait(1).to({scaleY:1,skewX:4.6,y:30.8},0).wait(1).to({skewX:4.3,y:31.1},0).wait(1).to({skewX:4,y:31.4},0).wait(1).to({scaleY:1,skewX:3.6,y:31.7},0).wait(1).to({skewX:3.3,y:32},0).wait(1).to({scaleY:1,skewX:3,y:32.2},0).wait(1).to({skewX:2.7,y:32.5},0).wait(1).to({skewX:2.4,y:32.8},0).wait(1).to({scaleY:1,skewX:2.1,y:33},0).wait(1).to({skewX:1.8,y:33.2},0).wait(1).to({skewX:1.6,y:33.5},0).wait(1).to({skewX:1.3,y:33.7},0).wait(1).to({scaleY:1,skewX:1.1,y:33.9},0).wait(1).to({skewX:0.9,y:34},0).wait(1).to({skewX:0.7,y:34.2},0).wait(1).to({skewX:0.6,y:34.3},0).wait(1).to({skewX:0.4,y:34.4},0).wait(1).to({scaleY:1,skewX:0.3,x:-10.5,y:34.5},0).wait(1).to({skewX:0.2,y:34.6},0).wait(1).to({skewX:0.1,x:-10.4,y:34.7},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:0,y:34.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:15.7,regY:7.7,x:-10.2,y:35},0).wait(1));

	// Pearline Body
	this.instance_2 = new lib.PearlineBody("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.8,38.6,1,1,0,0,0,55,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regY:20.5,scaleY:1,y:38.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleY:1,y:38.6},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01,y:38.5},0).wait(1).to({scaleX:1,scaleY:1.02},0).wait(1).to({scaleX:0.99,scaleY:1.02,y:38.4},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.3},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38.1},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:38},0).wait(1).to({scaleX:0.98,scaleY:1.06,y:37.9},0).wait(1).to({scaleX:0.98,scaleY:1.07,y:37.8},0).wait(1).to({scaleX:0.98,scaleY:1.08,y:37.6},0).wait(1).to({scaleX:0.98,scaleY:1.09,y:37.5},0).wait(1).to({scaleX:0.97,scaleY:1.1,y:37.4},0).wait(1).to({scaleX:0.97,scaleY:1.11,y:37.2},0).wait(1).to({scaleX:0.97,scaleY:1.12,y:37.1},0).wait(1).to({scaleX:0.96,scaleY:1.13,y:36.9},0).wait(1).to({scaleX:0.96,scaleY:1.14,y:36.8},0).wait(1).to({scaleX:0.96,scaleY:1.15,y:36.6},0).wait(1).to({scaleX:0.96,scaleY:1.16,y:36.5},0).wait(1).to({scaleX:0.95,scaleY:1.17,y:36.3},0).wait(1).to({scaleX:0.95,scaleY:1.18,y:36.2},0).wait(1).to({scaleX:0.95,scaleY:1.19,y:36.1},0).wait(1).to({scaleX:0.95,scaleY:1.2,y:36},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.9},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.8},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.7},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.6},0).wait(1).to({scaleX:0.94,scaleY:1.23},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.5},0).wait(1).to({scaleX:0.94,scaleY:1.24},0).wait(1).to({scaleX:0.93,scaleY:1.24,y:35.4},0).wait(1).to({scaleX:0.93,scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({regY:20.6},0).wait(1).to({regY:20.5,scaleY:1.24,y:35.3},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleX:0.93,scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleX:0.94,scaleY:1.24},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.4},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.5},0).wait(1).to({scaleX:0.94,scaleY:1.22},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.6},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.7},0).wait(1).to({scaleX:0.94,scaleY:1.2,y:35.8},0).wait(1).to({scaleX:0.95,scaleY:1.2,y:35.9},0).wait(1).to({scaleX:0.95,scaleY:1.19,y:36},0).wait(1).to({scaleX:0.95,scaleY:1.18,y:36.1},0).wait(1).to({scaleX:0.95,scaleY:1.17,y:36.2},0).wait(1).to({scaleX:0.96,scaleY:1.16,y:36.4},0).wait(1).to({scaleX:0.96,scaleY:1.15,y:36.5},0).wait(1).to({scaleX:0.96,scaleY:1.14,y:36.7},0).wait(1).to({scaleX:0.96,scaleY:1.13,y:36.8},0).wait(1).to({scaleX:0.97,scaleY:1.12,y:37},0).wait(1).to({scaleX:0.97,scaleY:1.11,y:37.1},0).wait(1).to({scaleX:0.97,scaleY:1.1,y:37.2},0).wait(1).to({scaleX:0.98,scaleY:1.09,y:37.4},0).wait(1).to({scaleX:0.98,scaleY:1.08,y:37.5},0).wait(1).to({scaleX:0.98,scaleY:1.07,y:37.7},0).wait(1).to({scaleX:0.98,scaleY:1.06,y:37.8},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:37.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38.1},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,y:38.3},0).wait(1).to({scaleX:1,scaleY:1.02,y:38.4},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01,y:38.5},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,y:38.6},0).wait(1).to({scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleY:1},0).wait(1).to({regY:20.4},0).wait(1).to({startPosition:0},0).wait(1).to({regY:20.5,scaleY:1,y:38.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleY:1,y:38.6},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01,y:38.5},0).wait(1).to({scaleX:1,scaleY:1.02},0).wait(1).to({scaleX:0.99,scaleY:1.02,y:38.4},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.3},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.2},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38.1},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:38},0).wait(1).to({scaleX:0.98,scaleY:1.06,y:37.9},0).wait(1).to({scaleX:0.98,scaleY:1.07,y:37.8},0).wait(1).to({scaleX:0.98,scaleY:1.08,y:37.6},0).wait(1).to({scaleX:0.98,scaleY:1.09,y:37.5},0).wait(1).to({scaleX:0.97,scaleY:1.1,y:37.4},0).wait(1).to({scaleX:0.97,scaleY:1.11,y:37.2},0).wait(1).to({scaleX:0.97,scaleY:1.12,y:37.1},0).wait(1).to({scaleX:0.96,scaleY:1.13,y:36.9},0).wait(1).to({scaleX:0.96,scaleY:1.14,y:36.8},0).wait(1).to({scaleX:0.96,scaleY:1.15,y:36.6},0).wait(1).to({scaleX:0.96,scaleY:1.16,y:36.5},0).wait(1).to({scaleX:0.95,scaleY:1.17,y:36.3},0).wait(1).to({scaleX:0.95,scaleY:1.18,y:36.2},0).wait(1).to({scaleX:0.95,scaleY:1.19,y:36.1},0).wait(1).to({scaleX:0.95,scaleY:1.2,y:36},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.9},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.8},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.7},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.6},0).wait(1).to({scaleX:0.94,scaleY:1.23},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.5},0).wait(1).to({scaleX:0.94,scaleY:1.24},0).wait(1).to({scaleX:0.93,scaleY:1.24,y:35.4},0).wait(1).to({scaleX:0.93,scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({regY:20.6},0).wait(1).to({regY:20.5,scaleY:1.24,y:35.3},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleX:0.93,scaleY:1.24},0).wait(1).to({scaleY:1.24},0).wait(1).to({scaleX:0.94,scaleY:1.24},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.4},0).wait(1).to({scaleX:0.94,scaleY:1.23,y:35.5},0).wait(1).to({scaleX:0.94,scaleY:1.22},0).wait(1).to({scaleX:0.94,scaleY:1.22,y:35.6},0).wait(1).to({scaleX:0.94,scaleY:1.21,y:35.7},0).wait(1).to({scaleX:0.94,scaleY:1.2,y:35.8},0).wait(1).to({scaleX:0.95,scaleY:1.2,y:35.9},0).wait(1).to({scaleX:0.95,scaleY:1.19,y:36},0).wait(1).to({scaleX:0.95,scaleY:1.18,y:36.1},0).wait(1).to({scaleX:0.95,scaleY:1.17,y:36.2},0).wait(1).to({scaleX:0.96,scaleY:1.16,y:36.4},0).wait(1).to({scaleX:0.96,scaleY:1.15,y:36.5},0).wait(1).to({scaleX:0.96,scaleY:1.14,y:36.7},0).wait(1).to({scaleX:0.96,scaleY:1.13,y:36.8},0).wait(1).to({scaleX:0.97,scaleY:1.12,y:37},0).wait(1).to({scaleX:0.97,scaleY:1.11,y:37.1},0).wait(1).to({scaleX:0.97,scaleY:1.1,y:37.2},0).wait(1).to({scaleX:0.98,scaleY:1.09,y:37.4},0).wait(1).to({scaleX:0.98,scaleY:1.08,y:37.5},0).wait(1).to({scaleX:0.98,scaleY:1.07,y:37.7},0).wait(1).to({scaleX:0.98,scaleY:1.06,y:37.8},0).wait(1).to({scaleX:0.99,scaleY:1.05,y:37.9},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38},0).wait(1).to({scaleX:0.99,scaleY:1.04,y:38.1},0).wait(1).to({scaleX:0.99,scaleY:1.03,y:38.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,y:38.3},0).wait(1).to({scaleX:1,scaleY:1.02,y:38.4},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1.01,y:38.5},0).wait(1).to({scaleX:1,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,y:38.6},0).wait(1).to({scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleY:1},0).wait(1).to({regY:20.4},0).wait(1));

	// Pearline Pearl
	this.instance_3 = new lib.PearlinePearl("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,33.4,1,1,0,0,0,17.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:16.5,regY:16.5,x:27.6,y:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:29.8},0).wait(1).to({y:29.7},0).wait(1).to({y:29.6},0).wait(1).to({y:29.5},0).wait(1).to({x:27.5,y:29.4},0).wait(1).to({y:29.3},0).wait(1).to({y:29.1},0).wait(1).to({y:28.9},0).wait(1).to({y:28.7},0).wait(1).to({y:28.5},0).wait(1).to({x:27.4,y:28.3},0).wait(1).to({y:28.1},0).wait(1).to({y:27.8},0).wait(1).to({y:27.6},0).wait(1).to({x:27.3,y:27.3},0).wait(1).to({y:27},0).wait(1).to({y:26.8},0).wait(1).to({y:26.5},0).wait(1).to({x:27.2,y:26.2},0).wait(1).to({y:26},0).wait(1).to({y:25.7},0).wait(1).to({y:25.5},0).wait(1).to({x:27.1,y:25.3},0).wait(1).to({y:25.1},0).wait(1).to({y:24.9},0).wait(1).to({y:24.7},0).wait(1).to({y:24.6},0).wait(1).to({x:27,y:24.4},0).wait(1).to({y:24.3},0).wait(1).to({y:24.2},0).wait(1).to({y:24.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:24},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:17.9,regY:19.9,x:28.4,y:27.4},0).wait(1).to({regX:16.5,regY:16.5,x:27,y:24},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:24.1},0).wait(1).to({y:24.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:24.4},0).wait(1).to({x:27.1,y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:27.2,y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({y:26.2},0).wait(1).to({x:27.3,y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:27},0).wait(1).to({y:27.3},0).wait(1).to({x:27.4,y:27.5},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.3},0).wait(1).to({x:27.5,y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:27.6,y:29.5},0).wait(1).to({y:29.6},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({startPosition:0},0).wait(1).to({y:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:17.9,regY:19.9,x:29,y:33.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:16.5,regY:16.5,x:27.6,y:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:29.8},0).wait(1).to({y:29.7},0).wait(1).to({y:29.6},0).wait(1).to({y:29.5},0).wait(1).to({x:27.5,y:29.4},0).wait(1).to({y:29.3},0).wait(1).to({y:29.1},0).wait(1).to({y:28.9},0).wait(1).to({y:28.7},0).wait(1).to({y:28.5},0).wait(1).to({x:27.4,y:28.3},0).wait(1).to({y:28.1},0).wait(1).to({y:27.8},0).wait(1).to({y:27.6},0).wait(1).to({x:27.3,y:27.3},0).wait(1).to({y:27},0).wait(1).to({y:26.8},0).wait(1).to({y:26.5},0).wait(1).to({x:27.2,y:26.2},0).wait(1).to({y:26},0).wait(1).to({y:25.7},0).wait(1).to({y:25.5},0).wait(1).to({x:27.1,y:25.3},0).wait(1).to({y:25.1},0).wait(1).to({y:24.9},0).wait(1).to({y:24.7},0).wait(1).to({y:24.6},0).wait(1).to({x:27,y:24.4},0).wait(1).to({y:24.3},0).wait(1).to({y:24.2},0).wait(1).to({y:24.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:24},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:17.9,regY:19.9,x:28.4,y:27.4},0).wait(1).to({regX:16.5,regY:16.5,x:27,y:24},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:24.1},0).wait(1).to({y:24.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:24.4},0).wait(1).to({x:27.1,y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:27.2,y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({y:26.2},0).wait(1).to({x:27.3,y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:27},0).wait(1).to({y:27.3},0).wait(1).to({x:27.4,y:27.5},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.3},0).wait(1).to({x:27.5,y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:27.6,y:29.5},0).wait(1).to({y:29.6},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({startPosition:0},0).wait(1).to({y:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:17.9,regY:19.9,x:29,y:33.4},0).wait(1));

	// Pearline Shell Top
	this.instance_4 = new lib.PearlineShellTop("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(7.9,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-3.5,regY:-60,scaleY:1,x:4.4,y:-21.8},0).wait(1).to({scaleY:1,rotation:-0.1,x:4.3,y:-21.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-0.1,y:-21.6},0).wait(1).to({scaleY:1,skewX:-0.2,x:4.2,y:-21.5},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.3,skewY:-0.1,x:4.1,y:-21.3},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.4,x:4,y:-21.1},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.5,x:3.9,y:-20.9},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.6,x:3.7,y:-20.5},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-0.8,skewY:-0.2,x:3.6,y:-20.2},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-1,x:3.3,y:-19.8},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.2,skewY:-0.3,x:3.1,y:-19.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.4,x:2.9,y:-18.9},0).wait(1).to({scaleX:1.01,scaleY:0.95,skewX:-1.6,skewY:-0.4,x:2.7,y:-18.4},0).wait(1).to({scaleX:1.01,scaleY:0.94,skewX:-1.9,x:2.5,y:-17.8},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-2.2,skewY:-0.5,x:2.2,y:-17.3},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-2.4,x:2,y:-16.7},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-2.7,skewY:-0.6,x:1.7,y:-16.1},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-3,skewY:-0.7,x:1.4,y:-15.4},0).wait(1).to({scaleX:1.02,scaleY:0.9,skewX:-3.4,x:1.1,y:-14.7},0).wait(1).to({scaleX:1.03,scaleY:0.89,skewX:-3.7,skewY:-0.8,x:0.9,y:-14.1},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-4,skewY:-0.9,x:0.6,y:-13.4},0).wait(1).to({scaleX:1.03,scaleY:0.87,skewX:-4.3,x:0.4,y:-12.8},0).wait(1).to({scaleX:1.03,scaleY:0.86,skewX:-4.6,skewY:-1,x:0.2,y:-12.1},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-4.8,x:-0.1,y:-11.5},0).wait(1).to({scaleX:1.04,scaleY:0.84,skewX:-5.1,skewY:-1.1,x:-0.3,y:-11},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.4,skewY:-1.2,x:-0.4,y:-10.4},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.6,x:-0.5,y:-9.9},0).wait(1).to({scaleX:1.04,scaleY:0.82,skewX:-5.8,skewY:-1.3,x:-0.7,y:-9.4},0).wait(1).to({scaleX:1.04,scaleY:0.81,skewX:-6,x:-0.8,y:-9},0).wait(1).to({scaleX:1.05,scaleY:0.81,skewX:-6.2,x:-0.9,y:-8.6},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.3,skewY:-1.4,x:-1,y:-8.3},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.5,x:-1.1,y:-8},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewX:-6.6,x:-1.2,y:-7.7},0).wait(1).to({scaleY:0.79,skewX:-6.7,y:-7.5},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewY:-1.5,x:-1.3,y:-7.4},0).wait(1).to({scaleY:0.79,skewX:-6.8,x:-1.4,y:-7.2},0).wait(1).to({scaleX:1.05,scaleY:0.79},0).wait(1).to({skewX:-6.9,y:-7.1},0).wait(1).to({regX:0,regY:0.1,scaleY:0.78,x:7.9,y:39.5},0).wait(1).to({regX:-3.5,regY:-60,scaleY:0.79,x:-1.4,y:-7.3},0).wait(1).to({scaleY:0.79,skewX:-6.8},0).wait(1).to({scaleX:1.05,scaleY:0.79,y:-7.4},0).wait(1).to({scaleY:0.79,skewX:-6.7,skewY:-1.4,x:-1.3,y:-7.6},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewX:-6.6,y:-7.7},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.5,x:-1.2,y:-8},0).wait(1).to({scaleY:0.8,skewX:-6.4,x:-1.1,y:-8.2},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.3,x:-1,y:-8.5},0).wait(1).to({scaleX:1.05,scaleY:0.81,skewX:-6.1,skewY:-1.3,x:-0.9,y:-8.9},0).wait(1).to({scaleX:1.04,scaleY:0.81,skewX:-6,x:-0.8,y:-9.2},0).wait(1).to({scaleX:1.04,scaleY:0.82,skewX:-5.8,skewY:-1.2,x:-0.7,y:-9.6},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.6,x:-0.6,y:-10.1},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.3,skewY:-1.1,x:-0.4,y:-10.6},0).wait(1).to({scaleX:1.04,scaleY:0.84,skewX:-5.1,x:-0.2,y:-11.2},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-4.8,skewY:-1,x:0,y:-11.7},0).wait(1).to({scaleX:1.03,scaleY:0.86,skewX:-4.5,x:0.2,y:-12.3},0).wait(1).to({scaleX:1.03,scaleY:0.87,skewX:-4.3,skewY:-0.9,x:0.4,y:-12.9},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-4,x:0.6,y:-13.5},0).wait(1).to({scaleX:1.03,scaleY:0.89,skewX:-3.7,skewY:-0.8,x:0.9,y:-14.2},0).wait(1).to({scaleX:1.02,scaleY:0.89,skewX:-3.4,skewY:-0.7,x:1.1,y:-14.8},0).wait(1).to({scaleX:1.02,scaleY:0.9,skewX:-3.1,x:1.4,y:-15.5},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-2.8,skewY:-0.6,x:1.7,y:-16.1},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-2.5,skewY:-0.5,x:1.9,y:-16.7},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-2.2,x:2.2,y:-17.3},0).wait(1).to({scaleX:1.01,scaleY:0.94,skewX:-1.9,skewY:-0.4,x:2.4,y:-17.9},0).wait(1).to({scaleX:1.01,scaleY:0.95,skewX:-1.7,x:2.7,y:-18.5},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.4,skewY:-0.3,x:2.9,y:-19},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.2,x:3.1,y:-19.5},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-1,skewY:-0.2,x:3.3,y:-19.9},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-0.8,x:3.5,y:-20.3},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.7,skewY:-0.1,x:3.7,y:-20.6},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.5,x:3.8,y:-20.9},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.4,x:4,y:-21.2},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.3,x:4.1,y:-21.4},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.2,skewY:0,x:4.2,y:-21.6},0).wait(1).to({scaleY:1,skewX:-0.1,y:-21.7},0).wait(1).to({scaleY:1,x:4.3,y:-21.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,y:-21.9},0).wait(1).to({scaleY:1,x:4.4,y:-22},0).wait(1).to({regX:0,regY:0,x:7.9,y:38.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-3.5,regY:-60,scaleY:1,x:4.4,y:-21.8},0).wait(1).to({scaleY:1,rotation:-0.1,x:4.3,y:-21.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-0.1,y:-21.6},0).wait(1).to({scaleY:1,skewX:-0.2,x:4.2,y:-21.5},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.3,skewY:-0.1,x:4.1,y:-21.3},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.4,x:4,y:-21.1},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.5,x:3.9,y:-20.9},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.6,x:3.7,y:-20.5},0).wait(1).to({scaleX:1.01,scaleY:0.98,skewX:-0.8,skewY:-0.2,x:3.6,y:-20.2},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-1,x:3.3,y:-19.8},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.2,skewY:-0.3,x:3.1,y:-19.4},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.4,x:2.9,y:-18.9},0).wait(1).to({scaleX:1.01,scaleY:0.95,skewX:-1.6,skewY:-0.4,x:2.7,y:-18.4},0).wait(1).to({scaleX:1.01,scaleY:0.94,skewX:-1.9,x:2.5,y:-17.8},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-2.2,skewY:-0.5,x:2.2,y:-17.3},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-2.4,x:2,y:-16.7},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-2.7,skewY:-0.6,x:1.7,y:-16.1},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-3,skewY:-0.7,x:1.4,y:-15.4},0).wait(1).to({scaleX:1.02,scaleY:0.9,skewX:-3.4,x:1.1,y:-14.7},0).wait(1).to({scaleX:1.03,scaleY:0.89,skewX:-3.7,skewY:-0.8,x:0.9,y:-14.1},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-4,skewY:-0.9,x:0.6,y:-13.4},0).wait(1).to({scaleX:1.03,scaleY:0.87,skewX:-4.3,x:0.4,y:-12.8},0).wait(1).to({scaleX:1.03,scaleY:0.86,skewX:-4.6,skewY:-1,x:0.2,y:-12.1},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-4.8,x:-0.1,y:-11.5},0).wait(1).to({scaleX:1.04,scaleY:0.84,skewX:-5.1,skewY:-1.1,x:-0.3,y:-11},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.4,skewY:-1.2,x:-0.4,y:-10.4},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.6,x:-0.5,y:-9.9},0).wait(1).to({scaleX:1.04,scaleY:0.82,skewX:-5.8,skewY:-1.3,x:-0.7,y:-9.4},0).wait(1).to({scaleX:1.04,scaleY:0.81,skewX:-6,x:-0.8,y:-9},0).wait(1).to({scaleX:1.05,scaleY:0.81,skewX:-6.2,x:-0.9,y:-8.6},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.3,skewY:-1.4,x:-1,y:-8.3},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.5,x:-1.1,y:-8},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewX:-6.6,x:-1.2,y:-7.7},0).wait(1).to({scaleY:0.79,skewX:-6.7,y:-7.5},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewY:-1.5,x:-1.3,y:-7.4},0).wait(1).to({scaleY:0.79,skewX:-6.8,x:-1.4,y:-7.2},0).wait(1).to({scaleX:1.05,scaleY:0.79},0).wait(1).to({skewX:-6.9,y:-7.1},0).wait(1).to({regX:0,regY:0.1,scaleY:0.78,x:7.9,y:39.5},0).wait(1).to({regX:-3.5,regY:-60,scaleY:0.79,x:-1.4,y:-7.3},0).wait(1).to({scaleY:0.79,skewX:-6.8},0).wait(1).to({scaleX:1.05,scaleY:0.79,y:-7.4},0).wait(1).to({scaleY:0.79,skewX:-6.7,skewY:-1.4,x:-1.3,y:-7.6},0).wait(1).to({scaleX:1.05,scaleY:0.79,skewX:-6.6,y:-7.7},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.5,x:-1.2,y:-8},0).wait(1).to({scaleY:0.8,skewX:-6.4,x:-1.1,y:-8.2},0).wait(1).to({scaleX:1.05,scaleY:0.8,skewX:-6.3,x:-1,y:-8.5},0).wait(1).to({scaleX:1.05,scaleY:0.81,skewX:-6.1,skewY:-1.3,x:-0.9,y:-8.9},0).wait(1).to({scaleX:1.04,scaleY:0.81,skewX:-6,x:-0.8,y:-9.2},0).wait(1).to({scaleX:1.04,scaleY:0.82,skewX:-5.8,skewY:-1.2,x:-0.7,y:-9.6},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.6,x:-0.6,y:-10.1},0).wait(1).to({scaleX:1.04,scaleY:0.83,skewX:-5.3,skewY:-1.1,x:-0.4,y:-10.6},0).wait(1).to({scaleX:1.04,scaleY:0.84,skewX:-5.1,x:-0.2,y:-11.2},0).wait(1).to({scaleX:1.04,scaleY:0.85,skewX:-4.8,skewY:-1,x:0,y:-11.7},0).wait(1).to({scaleX:1.03,scaleY:0.86,skewX:-4.5,x:0.2,y:-12.3},0).wait(1).to({scaleX:1.03,scaleY:0.87,skewX:-4.3,skewY:-0.9,x:0.4,y:-12.9},0).wait(1).to({scaleX:1.03,scaleY:0.88,skewX:-4,x:0.6,y:-13.5},0).wait(1).to({scaleX:1.03,scaleY:0.89,skewX:-3.7,skewY:-0.8,x:0.9,y:-14.2},0).wait(1).to({scaleX:1.02,scaleY:0.89,skewX:-3.4,skewY:-0.7,x:1.1,y:-14.8},0).wait(1).to({scaleX:1.02,scaleY:0.9,skewX:-3.1,x:1.4,y:-15.5},0).wait(1).to({scaleX:1.02,scaleY:0.91,skewX:-2.8,skewY:-0.6,x:1.7,y:-16.1},0).wait(1).to({scaleX:1.02,scaleY:0.92,skewX:-2.5,skewY:-0.5,x:1.9,y:-16.7},0).wait(1).to({scaleX:1.02,scaleY:0.93,skewX:-2.2,x:2.2,y:-17.3},0).wait(1).to({scaleX:1.01,scaleY:0.94,skewX:-1.9,skewY:-0.4,x:2.4,y:-17.9},0).wait(1).to({scaleX:1.01,scaleY:0.95,skewX:-1.7,x:2.7,y:-18.5},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.4,skewY:-0.3,x:2.9,y:-19},0).wait(1).to({scaleX:1.01,scaleY:0.96,skewX:-1.2,x:3.1,y:-19.5},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-1,skewY:-0.2,x:3.3,y:-19.9},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-0.8,x:3.5,y:-20.3},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.7,skewY:-0.1,x:3.7,y:-20.6},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-0.5,x:3.8,y:-20.9},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.4,x:4,y:-21.2},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.3,x:4.1,y:-21.4},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-0.2,skewY:0,x:4.2,y:-21.6},0).wait(1).to({scaleY:1,skewX:-0.1,y:-21.7},0).wait(1).to({scaleY:1,x:4.3,y:-21.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,y:-21.9},0).wait(1).to({scaleY:1,x:4.4,y:-22},0).wait(1).to({regX:0,regY:0,x:7.9,y:38.2},0).wait(1));

	// Pearline Shell Back
	this.instance_5 = new lib.PearlineShellBack("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.2,62.9,1,1,0,0,0,79.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:79,regY:22.5,x:-2.3,y:63},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:79.1,regY:22.4,x:-2.2,y:62.9},0).wait(1).to({regX:79,regY:22.5,x:-2.3,y:63},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:79.1,regY:22.4,x:-2.2,y:62.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:79,regY:22.5,x:-2.3,y:63},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:79.1,regY:22.4,x:-2.2,y:62.9},0).wait(1).to({regX:79,regY:22.5,x:-2.3,y:63},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:79.1,regY:22.4,x:-2.2,y:62.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-87.8,176.1,173.4);


// stage content:
(lib.Pearlene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pearline
	this.instance = new lib.Pearline();
	this.instance.parent = this;
	this.instance.setTransform(172,171.5,1,1,0,0,0,-2.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256,256.4,176.1,173.4);
// library properties:
lib.properties = {
	id: '0C1DDF99B50B4D03A746B910A11CD7CB',
	width: 344,
	height: 343,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pearlene_atlas_.png?1499358186295", id:"pearlene_atlas_"}
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
an.compositions['0C1DDF99B50B4D03A746B910A11CD7CB'] = {
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