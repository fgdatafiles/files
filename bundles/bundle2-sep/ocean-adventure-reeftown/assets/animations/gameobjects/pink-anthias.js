(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pink_anthias_atlas_", frames: [[79,0,44,48],[58,50,64,22],[58,74,33,19],[0,0,77,46],[0,48,56,46],[93,74,23,21]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["pink_anthias_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PinkTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-24,44,48);


(lib.PinkMid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,77,46);


(lib.PinkHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-23,56,46);


(lib.PinkFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-18,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-4,23,21);


(lib.PinkDorsal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,22);


(lib.PinkBottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-20,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-2,33,19);


(lib.PinkFish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{SwimLoopR:0,TurnL:40,SwimLoopL:49,TurnR:89});

	// timeline functions:
	this.frame_39 = function() {
		if(!this.shouldTurn)
			this.gotoAndPlay("SwimLoopR");
	}
	this.frame_88 = function() {
		if(!this.shouldTurn)
			this.gotoAndPlay("SwimLoopL");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(49).call(this.frame_88).wait(10));

	// Pink Head
	this.instance = new lib.PinkHead("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.4,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23,x:48.4,y:-0.8},0).wait(1).to({scaleX:1,skewY:0.1,x:48.3},0).wait(1).to({scaleX:1,skewY:0.2,y:-0.7},0).wait(1).to({scaleX:0.99,skewY:0.4,x:48.2},0).wait(1).to({scaleX:0.99,skewY:0.6,x:48.1,y:-0.6},0).wait(1).to({scaleX:0.98,skewY:1,x:47.9,y:-0.5},0).wait(1).to({scaleX:0.98,skewY:1.3,x:47.7,y:-0.3},0).wait(1).to({scaleX:0.97,skewY:1.7,x:47.5,y:-0.1},0).wait(1).to({scaleX:0.96,skewY:2.2,x:47.3,y:0.1},0).wait(1).to({scaleX:0.95,skewY:2.6,x:47,y:0.3},0).wait(1).to({scaleX:0.95,skewY:3.1,x:46.8,y:0.4},0).wait(1).to({scaleX:0.94,skewY:3.5,x:46.5,y:0.6},0).wait(1).to({scaleX:0.93,skewY:3.9,x:46.4,y:0.8},0).wait(1).to({scaleX:0.92,skewY:4.2,x:46.2,y:0.9},0).wait(1).to({scaleX:0.92,skewY:4.5,x:46,y:1},0).wait(1).to({scaleX:0.92,skewY:4.7,x:45.9,y:1.1},0).wait(1).to({scaleX:0.91,skewY:4.9,x:45.8},0).wait(1).to({scaleX:0.91,skewY:5},0).wait(1).to({regX:0,scaleX:0.91,x:24.9,y:-0.7},0).wait(1).to({regX:23,scaleX:0.91,x:45.8,y:1.1},0).wait(1).to({scaleX:0.91,skewY:4.9},0).wait(1).to({scaleX:0.91,skewY:4.8,x:45.9},0).wait(1).to({scaleX:0.92,skewY:4.6,y:1},0).wait(1).to({scaleX:0.92,skewY:4.4,x:46.1},0).wait(1).to({scaleX:0.93,skewY:4.1,x:46.2,y:0.9},0).wait(1).to({scaleX:0.93,skewY:3.8,x:46.4,y:0.7},0).wait(1).to({scaleX:0.94,skewY:3.4,x:46.6,y:0.6},0).wait(1).to({scaleX:0.95,skewY:3,x:46.8,y:0.4},0).wait(1).to({scaleX:0.95,skewY:2.6,x:47,y:0.3},0).wait(1).to({scaleX:0.96,skewY:2.2,x:47.3,y:0.1},0).wait(1).to({scaleX:0.97,skewY:1.7,x:47.5,y:-0.1},0).wait(1).to({scaleX:0.98,skewY:1.3,x:47.7,y:-0.3},0).wait(1).to({scaleX:0.98,skewY:1,x:47.9,y:-0.4},0).wait(1).to({scaleX:0.99,skewY:0.7,x:48,y:-0.6},0).wait(1).to({scaleX:0.99,skewY:0.4,x:48.2,y:-0.7},0).wait(1).to({scaleX:1,skewY:0.2,x:48.3},0).wait(1).to({scaleX:1,skewY:0.1,y:-0.8},0).wait(1).to({scaleX:1,skewY:0,x:48.4},0).wait(1).to({regX:0,x:25.4,y:-0.9},0).wait(1).to({startPosition:0},0).to({scaleX:0.68,y:-0.7},2).wait(1).to({scaleX:0.87,skewY:-174.1,x:39.9,y:-1.3},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.13,skewY:-175.1,x:36.6,y:0.1},0).wait(1).to({scaleX:1.24,skewY:-179.2,x:17.6,y:-0.7},0).wait(1).to({regX:23,regY:0,scaleX:1.11,skewY:-179.6,x:-30.8,y:-1},0).wait(1).to({scaleX:1.03,skewY:-179.9,x:-42.6,y:-0.9},0).wait(1).to({regX:0,scaleX:1,skewY:-180,x:-23.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:23,x:-46.4,y:-0.8},0).wait(1).to({scaleX:1,skewY:-180.1},0).wait(1).to({scaleX:1,skewY:-180.2,x:-46.3,y:-0.7},0).wait(1).to({scaleX:0.99,skewY:-180.4},0).wait(1).to({scaleX:0.99,skewY:-180.6,x:-46.1,y:-0.6},0).wait(1).to({scaleX:0.98,skewY:-181,x:-46,y:-0.5},0).wait(1).to({scaleX:0.98,skewY:-181.3,x:-45.8,y:-0.3},0).wait(1).to({scaleX:0.97,skewY:-181.7,x:-45.6,y:-0.1},0).wait(1).to({scaleX:0.96,skewY:-182.2,x:-45.3,y:0.1},0).wait(1).to({scaleX:0.95,skewY:-182.6,x:-45.1,y:0.3},0).wait(1).to({scaleX:0.95,skewY:-183.1,x:-44.8,y:0.4},0).wait(1).to({scaleX:0.94,skewY:-183.5,x:-44.6,y:0.6},0).wait(1).to({scaleX:0.93,skewY:-183.9,x:-44.4,y:0.8},0).wait(1).to({scaleX:0.92,skewY:-184.2,x:-44.2,y:0.9},0).wait(1).to({scaleX:0.92,skewY:-184.5,x:-44,y:1},0).wait(1).to({scaleX:0.92,skewY:-184.7,x:-43.9,y:1.1},0).wait(1).to({scaleX:0.91,skewY:-184.9},0).wait(1).to({scaleX:0.91,skewY:-185,x:-43.8},0).wait(1).to({regX:0,scaleX:0.91,x:-23,y:-0.7},0).wait(1).to({regX:23,scaleX:0.91,x:-43.8,y:1.1},0).wait(1).to({scaleX:0.91,skewY:-184.9,x:-43.9},0).wait(1).to({scaleX:0.91,skewY:-184.8},0).wait(1).to({scaleX:0.92,skewY:-184.6,x:-44,y:1},0).wait(1).to({scaleX:0.92,skewY:-184.4,x:-44.1},0).wait(1).to({scaleX:0.93,skewY:-184.1,x:-44.3,y:0.9},0).wait(1).to({scaleX:0.93,skewY:-183.8,x:-44.5,y:0.7},0).wait(1).to({scaleX:0.94,skewY:-183.4,x:-44.7,y:0.6},0).wait(1).to({scaleX:0.95,skewY:-183,x:-44.8,y:0.4},0).wait(1).to({scaleX:0.95,skewY:-182.6,x:-45.1,y:0.3},0).wait(1).to({scaleX:0.96,skewY:-182.2,x:-45.3,y:0.1},0).wait(1).to({scaleX:0.97,skewY:-181.7,x:-45.6,y:-0.1},0).wait(1).to({scaleX:0.98,skewY:-181.3,x:-45.8,y:-0.3},0).wait(1).to({scaleX:0.98,skewY:-181,x:-46,y:-0.4},0).wait(1).to({scaleX:0.99,skewY:-180.7,x:-46.1,y:-0.6},0).wait(1).to({scaleX:0.99,skewY:-180.4,x:-46.3,y:-0.7},0).wait(1).to({scaleX:1,skewY:-180.2},0).wait(1).to({scaleX:1,skewY:-180.1,x:-46.4,y:-0.8},0).wait(1).to({scaleX:1,skewY:-180},0).wait(1).to({regX:0,x:-23.5,y:-0.9},0).wait(1).to({startPosition:0},0).to({scaleX:0.68,y:-0.7},2).wait(1).to({scaleX:0.87,skewY:-5.9,x:-37.9,y:-1.3},0).wait(1).to({scaleX:1.17,skewY:-4.9,x:-36.8,y:0.2},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.24,skewY:-0.8,x:-15.6,y:-0.7},0).to({regX:0,regY:0,scaleX:1,skewY:0,x:25.4,y:-0.9},3,cjs.Ease.get(1)).wait(1));

	// Pink Mid
	this.instance_1 = new lib.PinkMid("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-1.1,1,1,0,0,0,38.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:37.5,regY:23,x:-0.9,y:-1},0).wait(1).to({skewX:0.1},0).wait(1).to({scaleX:1,skewX:0.2},0).wait(1).to({skewX:0.4},0).wait(1).to({scaleY:1,skewX:0.6},0).wait(1).to({scaleX:1,skewX:0.9},0).wait(1).to({scaleX:1,skewX:1.3,x:-0.8},0).wait(1).to({scaleX:1,skewX:1.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:2.2,x:-0.7},0).wait(1).to({scaleX:0.99,skewX:2.6},0).wait(1).to({scaleX:0.99,skewX:3.1,x:-0.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:3.5,x:-0.5},0).wait(1).to({scaleX:0.99,skewX:3.9},0).wait(1).to({scaleX:0.99,skewX:4.2,x:-0.4},0).wait(1).to({skewX:4.5},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:4.7},0).wait(1).to({skewX:4.9},0).wait(1).to({skewX:5},0).wait(1).to({regX:38.1,regY:22.9,x:0.1,y:-1.1},0).wait(1).to({regX:37.5,regY:23,x:-0.5,y:-1},0).wait(1).to({skewX:4.9},0).wait(1).to({skewX:4.8},0).wait(1).to({skewX:4.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:4.4,x:-0.6},0).wait(1).to({scaleX:0.99,skewX:4.1},0).wait(1).to({skewX:3.8,x:-0.7},0).wait(1).to({scaleX:0.99,skewX:3.4},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:3},0).wait(1).to({scaleX:0.99,skewX:2.6},0).wait(1).to({scaleX:1,skewX:2.2,x:-0.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:1.7,x:-0.9},0).wait(1).to({scaleX:1,skewX:1.3},0).wait(1).to({scaleX:1,skewX:1,x:-1},0).wait(1).to({skewX:0.7,x:-0.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.4,x:-1},0).wait(1).to({skewX:0.2},0).wait(1).to({scaleX:1,skewX:0.1},0).wait(1).to({skewX:0},0).wait(1).to({regX:38.1,regY:22.9,x:-0.4,y:-1.1},0).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({scaleX:0.86,x:4.9},0).wait(1).to({scaleX:0.81,x:17.2,y:-0.7},0).wait(1).to({regX:37.9,scaleX:0.49,skewY:180,x:31.2,y:-0.9},0).wait(1).to({regX:37.5,regY:23,scaleX:0.77,x:15.5},0).wait(1).to({scaleX:0.94,x:5.9,y:-1},0).wait(1).to({regX:38.1,regY:22.9,scaleX:1,x:2.3,y:-1.1},0).wait(1).to({startPosition:0},0).wait(1).to({regX:37.5,regY:23,x:2.9,y:-1},0).wait(1).to({skewX:-0.1},0).wait(1).to({scaleX:1,skewX:-0.2},0).wait(1).to({skewX:-0.4},0).wait(1).to({scaleY:1,skewX:-0.6,x:2.8},0).wait(1).to({scaleX:1,skewX:-0.9},0).wait(1).to({scaleX:1,skewX:-1.3},0).wait(1).to({scaleX:1,skewX:-1.7,x:2.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2.2},0).wait(1).to({scaleX:0.99,skewX:-2.6,x:2.6},0).wait(1).to({scaleX:0.99,skewX:-3.1,x:2.5},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-3.5},0).wait(1).to({scaleX:0.99,skewX:-3.9},0).wait(1).to({scaleX:0.99,skewX:-4.2,x:2.4},0).wait(1).to({skewX:-4.5},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-4.7},0).wait(1).to({skewX:-4.9,x:2.3},0).wait(1).to({skewX:-5,x:2.4},0).wait(1).to({regX:38.1,regY:22.9,x:1.9,y:-1.1},0).wait(1).to({regX:37.5,regY:23,x:2.5,y:-1},0).wait(1).to({skewX:-4.9,x:2.4},0).wait(1).to({skewX:-4.8},0).wait(1).to({skewX:-4.6,x:2.5},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-4.4},0).wait(1).to({scaleX:0.99,skewX:-4.1},0).wait(1).to({skewX:-3.8,x:2.6},0).wait(1).to({scaleX:0.99,skewX:-3.4},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-3},0).wait(1).to({scaleX:0.99,skewX:-2.6,x:2.7},0).wait(1).to({scaleX:1,skewX:-2.2,x:2.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.7},0).wait(1).to({scaleX:1,skewX:-1.3,x:2.9},0).wait(1).to({scaleX:1,skewX:-1},0).wait(1).to({skewX:-0.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.4},0).wait(1).to({skewX:-0.2,x:3},0).wait(1).to({scaleX:1,skewX:-0.1},0).wait(1).to({skewX:0},0).wait(1).to({regX:38.1,regY:22.9,x:2.3,y:-1.1},0).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({scaleX:0.86,x:-2.9},0).wait(1).to({scaleX:0.81,x:-15.2,y:-0.7},0).wait(1).to({regX:37.9,scaleX:0.49,skewY:0,x:-29.3,y:-0.9},0).to({regX:38.1,scaleX:1,x:-0.4,y:-1.1},3,cjs.Ease.get(1)).wait(1));

	// Pink Fin
	this.instance_2 = new lib.PinkFin("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-6.5,regY:6.5,rotation:-0.1,x:23,y:25},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-1.1,x:23.1,y:25.1},0).wait(1).to({rotation:-1.8,x:23.2,y:25.2},0).wait(1).to({rotation:-2.7,x:23.3,y:25.3},0).wait(1).to({rotation:-3.7,x:23.4,y:25.4},0).wait(1).to({rotation:-4.8,x:23.5,y:25.5},0).wait(1).to({rotation:-6.1,x:23.7,y:25.6},0).wait(1).to({rotation:-7.4,x:23.9,y:25.8},0).wait(1).to({rotation:-8.6,x:24,y:25.9},0).wait(1).to({rotation:-9.9,x:24.2,y:26},0).wait(1).to({rotation:-11,x:24.3,y:26.1},0).wait(1).to({rotation:-11.9,x:24.5,y:26.2},0).wait(1).to({rotation:-12.7,x:24.6,y:26.3},0).wait(1).to({rotation:-13.3},0).wait(1).to({rotation:-13.7,x:24.7},0).wait(1).to({rotation:-13.9},0).wait(1).to({regX:0,regY:0,rotation:-14,x:29.5,y:18.5},0).wait(1).to({regX:-6.5,regY:6.5,rotation:-13.9,x:24.7,y:26.3},0).wait(1).to({rotation:-13.7},0).wait(1).to({rotation:-13.4},0).wait(1).to({rotation:-13,x:24.6},0).wait(1).to({rotation:-12.3,x:24.5,y:26.2},0).wait(1).to({rotation:-11.6,x:24.4,y:26.1},0).wait(1).to({rotation:-10.7,x:24.3},0).wait(1).to({rotation:-9.6,x:24.2,y:26},0).wait(1).to({rotation:-8.5,x:24,y:25.9},0).wait(1).to({rotation:-7.3,x:23.8,y:25.7},0).wait(1).to({rotation:-6,x:23.7,y:25.6},0).wait(1).to({rotation:-4.8,x:23.5,y:25.5},0).wait(1).to({rotation:-3.7,x:23.4,y:25.4},0).wait(1).to({rotation:-2.7,x:23.3,y:25.3},0).wait(1).to({rotation:-1.9,x:23.2,y:25.2},0).wait(1).to({rotation:-1.2,x:23.1,y:25.1},0).wait(1).to({rotation:-0.6,x:23,y:25},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:29.5,y:18.5},0).wait(1).to({startPosition:0},0).to({scaleX:0.79},2).wait(1).to({regX:0.1,scaleX:0.59,x:32.7,y:17.7},0).wait(1).to({regX:0,scaleX:0.72,skewY:180,x:24.4,y:18.7},0).wait(1).to({scaleX:1.12,x:3.7},0).wait(1).to({regX:-6.5,regY:6.5,scaleX:1.05,x:-6.8,y:25.1},0).wait(1).to({scaleX:1.01,x:-17.4,y:25},0).wait(1).to({regX:0,regY:0,scaleX:1,x:-27.5,y:18.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-6.5,regY:6.5,skewX:0.1,skewY:180.1,x:-21,y:25},0).wait(1).to({skewX:0.3,skewY:180.3,x:-21.1},0).wait(1).to({skewX:0.6,skewY:180.6},0).wait(1).to({skewX:1.1,skewY:181.1,x:-21.2,y:25.1},0).wait(1).to({skewX:1.8,skewY:181.8,y:25.2},0).wait(1).to({skewX:2.7,skewY:182.7,x:-21.3,y:25.3},0).wait(1).to({skewX:3.7,skewY:183.7,x:-21.4,y:25.4},0).wait(1).to({skewX:4.8,skewY:184.8,x:-21.6,y:25.5},0).wait(1).to({skewX:6.1,skewY:186.1,x:-21.8,y:25.6},0).wait(1).to({skewX:7.4,skewY:187.4,x:-21.9,y:25.8},0).wait(1).to({skewX:8.6,skewY:188.6,x:-22.1,y:25.9},0).wait(1).to({skewX:9.9,skewY:189.9,x:-22.2,y:26},0).wait(1).to({skewX:11,skewY:191,x:-22.4,y:26.1},0).wait(1).to({skewX:11.9,skewY:191.9,x:-22.5,y:26.2},0).wait(1).to({skewX:12.7,skewY:192.7,x:-22.6,y:26.3},0).wait(1).to({skewX:13.3,skewY:193.3,x:-22.7},0).wait(1).to({skewX:13.7,skewY:193.7,x:-22.8},0).wait(1).to({skewX:13.9,skewY:193.9},0).wait(1).to({regX:0,regY:0,skewX:14,skewY:194,x:-27.5,y:18.5},0).wait(1).to({regX:-6.5,regY:6.5,skewX:13.9,skewY:193.9,x:-22.8,y:26.3},0).wait(1).to({skewX:13.7,skewY:193.7},0).wait(1).to({skewX:13.4,skewY:193.4,x:-22.7},0).wait(1).to({skewX:13,skewY:193,x:-22.6},0).wait(1).to({skewX:12.3,skewY:192.3,y:26.2},0).wait(1).to({skewX:11.6,skewY:191.6,x:-22.5,y:26.1},0).wait(1).to({skewX:10.7,skewY:190.7,x:-22.3},0).wait(1).to({skewX:9.6,skewY:189.6,x:-22.2,y:26},0).wait(1).to({skewX:8.5,skewY:188.5,x:-22,y:25.9},0).wait(1).to({skewX:7.3,skewY:187.3,x:-21.9,y:25.7},0).wait(1).to({skewX:6,skewY:186,x:-21.8,y:25.6},0).wait(1).to({skewX:4.8,skewY:184.8,x:-21.6,y:25.5},0).wait(1).to({skewX:3.7,skewY:183.7,x:-21.4,y:25.4},0).wait(1).to({skewX:2.7,skewY:182.7,x:-21.3,y:25.3},0).wait(1).to({skewX:1.9,skewY:181.9,x:-21.2,y:25.2},0).wait(1).to({skewX:1.2,skewY:181.2,y:25.1},0).wait(1).to({skewX:0.6,skewY:180.6,x:-21.1,y:25},0).wait(1).to({skewX:0.3,skewY:180.3},0).wait(1).to({skewX:0.1,skewY:180.1,x:-21},0).wait(1).to({regX:0,regY:0,skewX:0,skewY:180,x:-27.5,y:18.5},0).wait(1).to({startPosition:0},0).to({scaleX:0.79},2).wait(1).to({regX:0.1,scaleX:0.59,x:-30.8,y:17.7},0).wait(1).to({regX:0,scaleX:0.72,skewY:0,x:-22.4,y:18.7},0).wait(1).to({scaleX:1.12,x:-1.7},0).to({scaleX:1,x:29.5,y:18.5},3,cjs.Ease.get(1)).wait(1));

	// Pink Bottom
	this.instance_3 = new lib.PinkBottom("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.9,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-3.5,regY:7.5,x:-10.4,y:21.2},0).wait(1).to({skewX:0.1,skewY:0.2},0).wait(1).to({skewX:0.3,skewY:0.6,y:21.1},0).wait(1).to({skewX:0.6,skewY:1,x:-10.5},0).wait(1).to({scaleX:1,skewX:1,skewY:1.6,y:21},0).wait(1).to({skewX:1.4,skewY:2.4,x:-10.6,y:20.9},0).wait(1).to({skewX:2,skewY:3.3,y:20.8},0).wait(1).to({skewX:2.6,skewY:4.4,x:-10.7,y:20.6},0).wait(1).to({scaleX:1,skewX:3.2,skewY:5.5,x:-10.8,y:20.4},0).wait(1).to({skewX:3.9,skewY:6.7,x:-10.9,y:20.3},0).wait(1).to({scaleX:1,skewX:4.6,skewY:7.8,x:-11,y:20},0).wait(1).to({skewX:5.3,skewY:8.9,y:19.8},0).wait(1).to({skewX:5.8,skewY:9.9,x:-11.1,y:19.7},0).wait(1).to({scaleX:1,skewX:6.3,skewY:10.8,x:-11.2,y:19.6},0).wait(1).to({skewX:6.8,skewY:11.5,y:19.5},0).wait(1).to({skewX:7.1,skewY:12,y:19.4},0).wait(1).to({skewX:7.3,skewY:12.4,x:-11.3,y:19.3},0).wait(1).to({skewX:7.4,skewY:12.6},0).wait(1).to({regX:0,regY:0,skewX:7.5,skewY:12.7,x:-6.9,y:12.6},0).wait(1).to({regX:-3.5,regY:7.5,skewX:7.4,skewY:12.6,x:-11.3,y:19.3},0).wait(1).to({skewX:7.3,skewY:12.5},0).wait(1).to({skewX:7.2,skewY:12.2},0).wait(1).to({skewX:6.9,skewY:11.8,y:19.4},0).wait(1).to({skewX:6.6,skewY:11.2,x:-11.2,y:19.5},0).wait(1).to({scaleX:1,skewX:6.2,skewY:10.5,y:19.6},0).wait(1).to({skewX:5.7,skewY:9.7,x:-11.1,y:19.7},0).wait(1).to({skewX:5.1,skewY:8.7,x:-11,y:19.9},0).wait(1).to({skewX:4.5,skewY:7.7,y:20.1},0).wait(1).to({scaleX:1,skewX:3.9,skewY:6.6,x:-10.9,y:20.3},0).wait(1).to({skewX:3.2,skewY:5.5,x:-10.8,y:20.4},0).wait(1).to({scaleX:1,skewX:2.6,skewY:4.4,y:20.6},0).wait(1).to({skewX:2,skewY:3.4,x:-10.7,y:20.7},0).wait(1).to({skewX:1.5,skewY:2.5,x:-10.6,y:20.9},0).wait(1).to({skewX:1,skewY:1.7,y:21},0).wait(1).to({scaleX:1,skewX:0.6,skewY:1.1,x:-10.5,y:21.1},0).wait(1).to({skewX:0.3,skewY:0.6},0).wait(1).to({skewX:0.1,skewY:0.3,x:-10.4,y:21.2},0).wait(1).to({skewX:0,skewY:0},0).wait(1).to({regX:0,regY:0,x:-6.9,y:13.8},0).wait(1).to({startPosition:0},0).to({scaleY:1.12,skewX:-27.1,x:-5.8},2).wait(1).to({scaleX:0.86,scaleY:1.09,skewX:-23.8,x:0.2},0).wait(1).to({scaleX:0.59,x:31.9,y:16.8},0).wait(1).to({regX:-0.2,regY:0.1,scaleX:0.43,scaleY:1.01,skewX:-6.3,skewY:180,x:31.4,y:15.7},0).wait(1).to({regX:-3.5,regY:7.5,scaleX:0.74,scaleY:1,skewX:-2.8,x:21.6,y:22},0).wait(1).to({scaleX:0.94,scaleY:1,skewX:-0.7,x:14.6,y:21.4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,x:8.9,y:13.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-3.5,regY:7.5,skewY:179.9,x:12.3,y:21.2},0).wait(1).to({skewX:-0.1,skewY:179.8},0).wait(1).to({skewX:-0.3,skewY:179.4,x:12.4,y:21.1},0).wait(1).to({skewX:-0.6,skewY:179},0).wait(1).to({scaleX:1,skewX:-1,skewY:178.4,x:12.5,y:21},0).wait(1).to({skewX:-1.4,skewY:177.6,y:20.9},0).wait(1).to({skewX:-2,skewY:176.7,x:12.6,y:20.8},0).wait(1).to({skewX:-2.6,skewY:175.6,x:12.7,y:20.6},0).wait(1).to({scaleX:1,skewX:-3.2,skewY:174.5,y:20.4},0).wait(1).to({skewX:-3.9,skewY:173.3,x:12.8,y:20.3},0).wait(1).to({scaleX:1,skewX:-4.6,skewY:172.2,x:12.9,y:20},0).wait(1).to({skewX:-5.3,skewY:171.1,x:13,y:19.8},0).wait(1).to({skewX:-5.8,skewY:170.1,y:19.7},0).wait(1).to({scaleX:1,skewX:-6.3,skewY:169.2,x:13.1,y:19.6},0).wait(1).to({skewX:-6.8,skewY:168.5,x:13.2,y:19.5},0).wait(1).to({skewX:-7.1,skewY:168,y:19.4},0).wait(1).to({skewX:-7.3,skewY:167.6,y:19.3},0).wait(1).to({skewX:-7.4,skewY:167.4},0).wait(1).to({regX:0,regY:0,skewX:-7.5,skewY:167.3,x:8.9,y:12.6},0).wait(1).to({regX:-3.5,regY:7.5,skewX:-7.4,skewY:167.4,x:13.3,y:19.3},0).wait(1).to({skewX:-7.3,skewY:167.5},0).wait(1).to({skewX:-7.2,skewY:167.8},0).wait(1).to({skewX:-6.9,skewY:168.2,x:13.2,y:19.4},0).wait(1).to({skewX:-6.6,skewY:168.8,y:19.5},0).wait(1).to({scaleX:1,skewX:-6.2,skewY:169.5,x:13.1,y:19.6},0).wait(1).to({skewX:-5.7,skewY:170.3,y:19.7},0).wait(1).to({skewX:-5.1,skewY:171.3,x:13,y:19.9},0).wait(1).to({skewX:-4.5,skewY:172.3,y:20.1},0).wait(1).to({scaleX:1,skewX:-3.9,skewY:173.4,x:12.9,y:20.3},0).wait(1).to({skewX:-3.2,skewY:174.5,x:12.8,y:20.4},0).wait(1).to({scaleX:1,skewX:-2.6,skewY:175.6,x:12.7,y:20.6},0).wait(1).to({skewX:-2,skewY:176.6,x:12.6,y:20.7},0).wait(1).to({skewX:-1.5,skewY:177.5,y:20.9},0).wait(1).to({skewX:-1,skewY:178.3,x:12.5,y:21},0).wait(1).to({scaleX:1,skewX:-0.6,skewY:178.9,y:21.1},0).wait(1).to({skewX:-0.3,skewY:179.4,x:12.4},0).wait(1).to({skewX:-0.1,skewY:179.7,y:21.2},0).wait(1).to({skewX:0,skewY:179.9},0).wait(1).to({regX:0,regY:0,skewY:180,x:8.9,y:13.8},0).wait(1).to({startPosition:0},0).to({scaleY:1.12,skewX:27.1,x:7.8},2).wait(1).to({scaleX:0.86,scaleY:1.09,skewX:23.8,x:1.8},0).wait(1).to({scaleX:0.59,x:-30,y:16.8},0).wait(1).to({regX:-0.2,regY:0.1,scaleX:0.43,scaleY:1.01,skewX:6.3,skewY:0,x:-29.4,y:15.7},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,x:-6.9,y:13.8},3,cjs.Ease.get(1)).wait(1));

	// Pink Dorsal
	this.instance_4 = new lib.PinkDorsal("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.2,-17.2,1,1,0,0,0,31.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:32,regY:11,scaleY:1,x:-5.1,y:-16.9},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:0.99,skewY:-0.1},0).wait(1).to({scaleY:0.99,skewY:-0.2,y:-16.8},0).wait(1).to({scaleY:0.98,skewY:-0.3},0).wait(1).to({scaleY:0.98,skewY:-0.4,y:-16.7},0).wait(1).to({scaleY:0.97,skewY:-0.6,y:-16.6},0).wait(1).to({scaleY:0.96,skewY:-0.8,y:-16.5},0).wait(1).to({scaleY:0.94,skewY:-1,y:-16.3},0).wait(1).to({scaleY:0.93,skewY:-1.2},0).wait(1).to({scaleX:1,scaleY:0.92,skewY:-1.5,y:-16.2},0).wait(1).to({scaleY:0.91,skewY:-1.7,y:-16},0).wait(1).to({scaleY:0.9,skewY:-1.8,y:-15.9},0).wait(1).to({scaleY:0.89,skewY:-2,y:-15.8},0).wait(1).to({scaleY:0.88,skewY:-2.1},0).wait(1).to({scaleY:0.88,skewY:-2.2,y:-15.7},0).wait(1).to({scaleY:0.87,skewY:-2.3},0).wait(1).to({scaleY:0.87,y:-15.6},0).wait(1).to({regX:31.9,regY:10.9,scaleY:0.87,x:-5.2,y:-15.8},0).wait(1).to({regX:32,regY:11,scaleY:0.87,x:-5.1,y:-15.7},0).wait(1).to({scaleY:0.87},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.88,skewY:-2.2},0).wait(1).to({scaleY:0.89,skewY:-2.1,y:-15.8},0).wait(1).to({scaleY:0.89,skewY:-1.9,y:-15.9},0).wait(1).to({scaleY:0.9,skewY:-1.8,y:-16},0).wait(1).to({scaleY:0.91,skewY:-1.6,y:-16.1},0).wait(1).to({scaleY:0.92,skewY:-1.4,y:-16.2},0).wait(1).to({scaleX:1,scaleY:0.93,skewY:-1.2,y:-16.3},0).wait(1).to({scaleY:0.94,skewY:-1,y:-16.4},0).wait(1).to({scaleY:0.96,skewY:-0.8,y:-16.5},0).wait(1).to({scaleY:0.97,skewY:-0.6,y:-16.7},0).wait(1).to({scaleY:0.98,skewY:-0.5,y:-16.8},0).wait(1).to({scaleY:0.98,skewY:-0.3},0).wait(1).to({scaleY:0.99,skewY:-0.2,y:-16.9},0).wait(1).to({scaleY:0.99,skewY:-0.1},0).wait(1).to({scaleY:1,skewY:0,y:-17},0).wait(1).to({scaleY:1},0).wait(1).to({regX:31.9,regY:10.8,scaleY:1,x:-5.2,y:-17.2},0).wait(1).to({startPosition:0},0).to({regX:32,scaleX:0.87,scaleY:1.16,rotation:12.4,x:-0.9,y:-18.8},2).wait(1).to({scaleX:0.75,scaleY:1.15,rotation:0,skewX:10.8,skewY:14.4,x:4.4},0).wait(1).to({regX:32.2,regY:10.7,scaleX:0.41,scaleY:1.11,skewX:42.4,skewY:49.7,x:28.6,y:-23.2},0).wait(1).to({regX:31.9,scaleX:0.48,scaleY:1.1,skewX:6.7,skewY:161.1,x:14.9,y:-23.3},0).wait(1).to({regX:32,regY:11,scaleX:0.77,scaleY:1.05,skewX:3,skewY:171.6,x:10.5,y:-19.4},0).wait(1).to({scaleX:0.94,scaleY:1.01,skewX:0.7,skewY:177.9,x:8,y:-17.5},0).wait(1).to({regX:31.9,regY:10.8,scaleX:1,scaleY:1,skewX:0,skewY:180,x:7.1,y:-17.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:32,regY:11,scaleY:1,x:7,y:-16.9},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:0.99,skewY:180.1},0).wait(1).to({scaleY:0.99,skewY:180.2,y:-16.8},0).wait(1).to({scaleY:0.98,skewY:180.3},0).wait(1).to({scaleY:0.98,skewY:180.4,y:-16.7},0).wait(1).to({scaleY:0.97,skewY:180.6,y:-16.6},0).wait(1).to({scaleY:0.96,skewY:180.8,y:-16.5},0).wait(1).to({scaleY:0.94,skewY:181,y:-16.3},0).wait(1).to({scaleY:0.93,skewY:181.2},0).wait(1).to({scaleX:1,scaleY:0.92,skewY:181.5,y:-16.2},0).wait(1).to({scaleY:0.91,skewY:181.7,y:-16},0).wait(1).to({scaleY:0.9,skewY:181.8,y:-15.9},0).wait(1).to({scaleY:0.89,skewY:182,y:-15.8},0).wait(1).to({scaleY:0.88,skewY:182.1},0).wait(1).to({scaleY:0.88,skewY:182.2,y:-15.7},0).wait(1).to({scaleY:0.87,skewY:182.3},0).wait(1).to({scaleY:0.87,y:-15.6},0).wait(1).to({regX:31.9,regY:10.9,scaleY:0.87,x:7.1,y:-15.8},0).wait(1).to({regX:32,regY:11,scaleY:0.87,x:7,y:-15.7},0).wait(1).to({scaleY:0.87},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.88,skewY:182.2},0).wait(1).to({scaleY:0.89,skewY:182.1,y:-15.8},0).wait(1).to({scaleY:0.89,skewY:181.9,y:-15.9},0).wait(1).to({scaleY:0.9,skewY:181.8,y:-16},0).wait(1).to({scaleY:0.91,skewY:181.6,y:-16.1},0).wait(1).to({scaleY:0.92,skewY:181.4,y:-16.2},0).wait(1).to({scaleX:1,scaleY:0.93,skewY:181.2,y:-16.3},0).wait(1).to({scaleY:0.94,skewY:181,y:-16.4},0).wait(1).to({scaleY:0.96,skewY:180.8,y:-16.5},0).wait(1).to({scaleY:0.97,skewY:180.6,y:-16.7},0).wait(1).to({scaleY:0.98,skewY:180.5,y:-16.8},0).wait(1).to({scaleY:0.98,skewY:180.3},0).wait(1).to({scaleY:0.99,skewY:180.2,y:-16.9},0).wait(1).to({scaleY:0.99,skewY:180.1},0).wait(1).to({scaleY:1,skewY:180,y:-17},0).wait(1).to({scaleY:1},0).wait(1).to({regX:31.9,regY:10.8,scaleY:1,x:7.1,y:-17.2},0).wait(1).to({startPosition:0},0).to({regX:32,scaleX:0.87,scaleY:1.16,skewX:-12.4,skewY:167.6,x:2.8,y:-18.8},2).wait(1).to({scaleX:0.75,scaleY:1.15,skewX:-10.8,skewY:165.6,x:-2.5},0).wait(1).to({regX:32.2,regY:10.7,scaleX:0.41,scaleY:1.11,skewX:-42.4,skewY:130.3,x:-26.6,y:-23.2},0).wait(1).to({regX:31.9,scaleX:0.48,scaleY:1.1,skewX:-6.7,skewY:18.9,x:-13,y:-23.3},0).to({regY:10.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-5.2,y:-17.2},3,cjs.Ease.get(1)).wait(1));

	// Pink Tail
	this.instance_5 = new lib.PinkTail("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-32.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-20,scaleX:1,x:-52.3},0).wait(1).to({scaleX:1,x:-52.2},0).wait(1).to({scaleX:0.99,x:-52},0).wait(1).to({scaleX:0.98,x:-51.9},0).wait(1).to({scaleX:0.97,x:-51.6},0).wait(1).to({scaleX:0.95,x:-51.3},0).wait(1).to({scaleX:0.93,x:-50.9},0).wait(1).to({scaleX:0.91,x:-50.5},0).wait(1).to({scaleX:0.89,x:-50.1},0).wait(1).to({scaleX:0.87,x:-49.6},0).wait(1).to({scaleX:0.84,x:-49.1},0).wait(1).to({scaleX:0.82,x:-48.7},0).wait(1).to({scaleX:0.8,x:-48.3},0).wait(1).to({scaleX:0.78,x:-47.9},0).wait(1).to({scaleX:0.77,x:-47.7},0).wait(1).to({scaleX:0.76,x:-47.5},0).wait(1).to({scaleX:0.75,x:-47.3},0).wait(1).to({scaleX:0.75,x:-47.2},0).wait(1).to({regX:0,scaleX:0.75,x:-32.3},0).wait(1).to({regX:-20,scaleX:0.75,x:-47.2},0).wait(1).to({scaleX:0.75,x:-47.3},0).wait(1).to({scaleX:0.76,x:-47.4},0).wait(1).to({scaleX:0.76,x:-47.6},0).wait(1).to({scaleX:0.78,x:-47.8},0).wait(1).to({scaleX:0.79,x:-48.1},0).wait(1).to({scaleX:0.81,x:-48.4},0).wait(1).to({scaleX:0.83,x:-48.8},0).wait(1).to({scaleX:0.85,x:-49.2},0).wait(1).to({scaleX:0.87,x:-49.6},0).wait(1).to({scaleX:0.89,x:-50.1},0).wait(1).to({scaleX:0.91,x:-50.5},0).wait(1).to({scaleX:0.93,x:-50.9},0).wait(1).to({scaleX:0.95,x:-51.3},0).wait(1).to({scaleX:0.97,x:-51.6},0).wait(1).to({scaleX:0.98,x:-51.8},0).wait(1).to({scaleX:0.99,x:-52},0).wait(1).to({scaleX:1,x:-52.2},0).wait(1).to({scaleX:1},0).wait(1).to({regX:0,scaleX:1,x:-32.3},0).wait(1).to({startPosition:0},0).to({regX:0.1,scaleX:0.81,skewY:-13.1,x:-32.2},2).wait(1).to({regY:0.1,scaleX:0.7,skewY:-15.1,x:-22.6,y:2.4},0).wait(1).to({regX:0.2,scaleX:0.77,skewY:-2.7,x:-8.1,y:2.8},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.35,skewX:9.7,skewY:7,x:50.5,y:1.7},0).wait(1).to({regX:0.1,regY:0.4,scaleX:0.61,skewX:3.2,skewY:185.9,x:41.4,y:3.7},0).wait(1).to({regX:-20,regY:0,scaleX:0.9,skewX:0.8,skewY:181.5,x:54.2,y:2.7},0).wait(1).to({regX:0,scaleX:1,skewX:0,skewY:180,x:34.2,y:2.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-20,scaleX:1,x:54.2},0).wait(1).to({scaleX:1,x:54.1},0).wait(1).to({scaleX:0.99,x:54},0).wait(1).to({scaleX:0.98,x:53.8},0).wait(1).to({scaleX:0.97,x:53.6},0).wait(1).to({scaleX:0.95,x:53.3},0).wait(1).to({scaleX:0.93,x:52.9},0).wait(1).to({scaleX:0.91,x:52.5},0).wait(1).to({scaleX:0.89,x:52},0).wait(1).to({scaleX:0.87,x:51.6},0).wait(1).to({scaleX:0.84,x:51.1},0).wait(1).to({scaleX:0.82,x:50.6},0).wait(1).to({scaleX:0.8,x:50.2},0).wait(1).to({scaleX:0.78,x:49.9},0).wait(1).to({scaleX:0.77,x:49.6},0).wait(1).to({scaleX:0.76,x:49.4},0).wait(1).to({scaleX:0.75,x:49.3},0).wait(1).to({scaleX:0.75,x:49.2},0).wait(1).to({regX:0,scaleX:0.75,x:34.2},0).wait(1).to({regX:-20,scaleX:0.75,x:49.2},0).wait(1).to({scaleX:0.75},0).wait(1).to({scaleX:0.76,x:49.3},0).wait(1).to({scaleX:0.76,x:49.5},0).wait(1).to({scaleX:0.78,x:49.7},0).wait(1).to({scaleX:0.79,x:50},0).wait(1).to({scaleX:0.81,x:50.3},0).wait(1).to({scaleX:0.83,x:50.7},0).wait(1).to({scaleX:0.85,x:51.1},0).wait(1).to({scaleX:0.87,x:51.6},0).wait(1).to({scaleX:0.89,x:52},0).wait(1).to({scaleX:0.91,x:52.5},0).wait(1).to({scaleX:0.93,x:52.9},0).wait(1).to({scaleX:0.95,x:53.2},0).wait(1).to({scaleX:0.97,x:53.5},0).wait(1).to({scaleX:0.98,x:53.8},0).wait(1).to({scaleX:0.99,x:54},0).wait(1).to({scaleX:1,x:54.1},0).wait(1).to({scaleX:1,x:54.2},0).wait(1).to({regX:0,scaleX:1,x:34.2},0).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleX:0.81,skewY:193.1,x:34.1,y:2.2},2).wait(1).to({regY:0.1,scaleX:0.7,skewY:195.1,x:24.5,y:2.4},0).wait(1).to({regX:0.2,scaleX:0.77,skewY:182.7,x:10,y:2.8},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.35,skewX:-9.7,skewY:173,x:-48.5,y:1.7},0).wait(1).to({regX:0.1,regY:0.4,scaleX:0.61,skewX:-3.2,skewY:-5.9,x:-39.5,y:3.7},0).to({regX:0,regY:0,scaleX:1,skewX:0,skewY:0,x:-32.3,y:2.3},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-28,150.7,63.5);


// stage content:
(lib.PinkAnthias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pink Head
	this.instance = new lib.PinkFish();
	this.instance.parent = this;
	this.instance.setTransform(74.3,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75,31.5,150.7,63.5);
// library properties:
lib.properties = {
	id: '2091D2CD793441DF956FDBCE2CCF85C4',
	width: 150,
	height: 63,
	fps: 24,
	color: "#1D6FA7",
	opacity: 1.00,
	manifest: [
		{src:"images/pink_anthias_atlas_.png?1499359389314", id:"pink_anthias_atlas_"}
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
an.compositions['2091D2CD793441DF956FDBCE2CCF85C4'] = {
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