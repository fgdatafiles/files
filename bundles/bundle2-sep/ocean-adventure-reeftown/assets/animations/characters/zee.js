(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zee_atlas_", frames: [[0,0,214,145],[69,212,18,25],[40,212,27,29],[101,147,79,64],[0,147,99,63],[0,212,38,24],[182,147,38,86]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ZeeBlinkFarBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ZeeBlinkNearBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ZeeFinFarBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ZeeFinNearBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ZeeFinSmBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ZeeTailBMP = function() {
	this.spriteSheet = ss["zee_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ZeeTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeTailBMP();
	this.instance.parent = this;
	this.instance.setTransform(-6,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-75,38.7,86.4);


(lib.ZeeFinSM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeFinSmBMP();
	this.instance.parent = this;
	this.instance.setTransform(-8,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-9,38,24);


(lib.ZeeFinNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeFinNearBMP();
	this.instance.parent = this;
	this.instance.setTransform(-14,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-6,99,63);


(lib.ZeeFinFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeFinFarBMP();
	this.instance.parent = this;
	this.instance.setTransform(-68,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-15,79,64);


(lib.ZeeBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,145);


(lib.ZeeBlinkNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeBlinkNearBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.ZeeBlinkFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ZeeBlinkFarBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,25);


(lib.Zee_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:55});

	// timeline functions:
	this.frame_94 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Zee Blink Near
	this.instance = new lib.ZeeBlinkNear("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.3,28.7,1,1,0,0,0,13.4,14.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},7).wait(55).to({_off:false,regX:13.5,scaleY:1.02,skewX:1.3,skewY:2.5,x:-37.4,y:33.9},0).wait(1).to({regY:14.5,scaleY:1.02,skewX:1.5,skewY:2.7,x:-37.5,y:34.2},0).wait(1).to({scaleY:1.03,skewX:1.6,skewY:2.9,y:34.3},0).wait(1).to({scaleY:1.03,skewY:3,y:34.4},0).wait(1).to({skewX:1.7,skewY:3.1},0).wait(1).to({regY:14.4,scaleY:1.03,x:-37.6,y:34.3},0).wait(1).to({regY:14.5,scaleY:1.03,y:34.4},0).wait(1).to({skewX:1.6,skewY:3,x:-37.5,y:34.5},0).wait(1).to({scaleY:1.03,skewY:2.9,y:34.6},0).wait(1).to({scaleY:1.02,skewX:1.4,skewY:2.7,y:34.8},0).wait(1).to({regX:13.6,regY:14.4,scaleY:1.02,skewX:1.3,skewY:2.5,x:-37.4,y:35},0).to({_off:true},1).wait(15));

	// Zee Blink Far
	this.instance_1 = new lib.ZeeBlinkFar("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85.3,24.5,1,1,0,0,0,9,12.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},7).wait(55).to({_off:false,regX:9.1,regY:12.4,scaleX:1.04,skewX:2.8,skewY:4,x:-85.1,y:30.1},0).wait(1).to({regX:9,regY:12.5,scaleX:1.04,scaleY:1,skewX:3.1,skewY:4.3,x:-85,y:30.4},0).wait(1).to({scaleX:1.04,skewX:3.2,skewY:4.6,x:-84.8,y:30.5},0).wait(1).to({scaleX:1.04,skewX:3.4,skewY:4.7,y:30.6},0).wait(1).to({scaleX:1.04,skewY:4.8,x:-84.7,y:30.7},0).wait(1).to({regX:9.2,regY:12.6,skewX:3.5,y:30.6},0).wait(1).to({regX:9,regY:12.5,scaleX:1.04,skewX:3.4,x:-84.9,y:30.5},0).wait(1).to({skewY:4.7},0).wait(1).to({scaleX:1.04,skewX:3.2,skewY:4.5},0).wait(1).to({scaleX:1.04,skewX:3,skewY:4.3},0).wait(1).to({regX:9.2,regY:12.6,scaleX:1.04,scaleY:1,skewX:2.8,skewY:4,x:-84.7,y:30.6},0).to({_off:true},1).wait(15));

	// Zee Fin Near
	this.instance_2 = new lib.ZeeFinNear("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.9,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:35.5,regY:25.5,scaleX:1,rotation:0.1,x:45.3,y:69.8},0).wait(1).to({scaleX:1,rotation:0,skewX:0.3,skewY:0.4,x:45.2,y:70.1},0).wait(1).to({scaleX:0.99,skewX:0.6,skewY:0.9,x:44.9,y:70.6},0).wait(1).to({scaleX:0.99,skewX:1,skewY:1.6,x:44.5,y:71.3},0).wait(1).to({scaleX:0.98,skewX:1.5,skewY:2.4,x:44.1,y:72.3},0).wait(1).to({scaleX:0.98,skewX:2.2,skewY:3.5,x:43.5,y:73.5},0).wait(1).to({scaleX:0.97,skewX:2.9,skewY:4.8,x:42.8,y:74.8},0).wait(1).to({scaleX:0.96,skewX:3.8,skewY:6.2,x:42,y:76.3},0).wait(1).to({scaleX:0.95,skewX:4.7,skewY:7.6,x:41.2,y:77.9},0).wait(1).to({scaleX:0.94,skewX:5.7,skewY:9.2,x:40.3,y:79.4},0).wait(1).to({scaleX:0.93,skewX:6.6,skewY:10.7,x:39.4,y:80.9},0).wait(1).to({scaleX:0.92,skewX:7.4,skewY:12,x:38.5,y:82.3},0).wait(1).to({scaleX:0.91,skewX:8.2,skewY:13.2,x:37.7,y:83.4},0).wait(1).to({scaleX:0.9,skewX:8.8,skewY:14.3,x:37.1,y:84.4},0).wait(1).to({scaleX:0.9,skewX:9.3,skewY:15.1,x:36.6,y:85.2},0).wait(1).to({scaleX:0.89,skewX:9.7,skewY:15.7,x:36.2,y:85.8},0).wait(1).to({scaleX:0.89,skewX:10,skewY:16.2,x:35.9,y:86.1},0).wait(1).to({scaleX:0.89,skewX:10.1,skewY:16.4,x:35.8,y:86.4},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.89,skewX:10.2,skewY:16.5,x:10,y:52.4},0).wait(1).to({regX:35.5,regY:25.5,scaleX:0.89,skewX:10.1,skewY:16.4,x:35.6,y:86.2},0).wait(1).to({scaleX:0.89,skewX:9.9,skewY:16.1,x:35.8,y:85.9},0).wait(1).to({scaleX:0.89,skewX:9.7,skewY:15.7,x:36,y:85.5},0).wait(1).to({scaleX:0.9,skewX:9.3,skewY:15.1,x:36.5,y:84.9},0).wait(1).to({scaleX:0.9,skewX:8.8,skewY:14.3,x:37,y:84.2},0).wait(1).to({scaleX:0.91,skewX:8.2,skewY:13.3,x:37.6,y:83.4},0).wait(1).to({scaleX:0.92,skewX:7.5,skewY:12.2,x:38.2,y:82.2},0).wait(1).to({scaleX:0.93,skewX:6.7,skewY:10.9,x:39,y:81},0).wait(1).to({scaleX:0.94,skewX:5.9,skewY:9.5,x:39.9,y:79.6},0).wait(1).to({scaleX:0.95,skewX:5,skewY:8.1,x:40.7,y:78.1},0).wait(1).to({scaleX:0.96,skewX:4.1,skewY:6.6,x:41.6,y:76.7},0).wait(1).to({scaleX:0.96,skewX:3.3,skewY:5.3,x:42.3,y:75.2},0).wait(1).to({scaleX:0.97,skewX:2.5,skewY:4,x:43,y:73.9},0).wait(1).to({scaleX:0.98,skewX:1.8,skewY:2.9,x:43.6,y:72.7},0).wait(1).to({scaleX:0.99,skewX:1.2,skewY:2,x:44.1,y:71.7},0).wait(1).to({scaleX:0.99,skewX:0.8,skewY:1.2,x:44.5,y:70.9},0).wait(1).to({scaleX:1,skewX:0.4,skewY:0.7,x:44.8,y:70.2},0).wait(1).to({scaleX:1,skewX:0.2,skewY:0.3,x:45,y:69.8},0).wait(1).to({scaleX:1,skewX:0,skewY:0,x:45.2,y:69.6},0).wait(1).to({regX:0,regY:0,x:9.9,y:44.1},0).wait(1).to({startPosition:0},0).wait(1).to({regX:35.5,regY:25.5,scaleX:1,rotation:0.1,x:45.3,y:69.8},0).wait(1).to({scaleX:1,rotation:0,skewX:0.3,skewY:0.4,x:45.2,y:70.1},0).wait(1).to({scaleX:0.99,skewX:0.6,skewY:0.9,x:44.9,y:70.6},0).wait(1).to({scaleX:0.99,skewX:1,skewY:1.6,x:44.5,y:71.3},0).wait(1).to({scaleX:0.98,skewX:1.5,skewY:2.4,x:44.1,y:72.3},0).wait(1).to({scaleX:0.98,skewX:2.2,skewY:3.5,x:43.5,y:73.5},0).wait(1).to({scaleX:0.97,skewX:2.9,skewY:4.8,x:42.8,y:74.8},0).wait(1).to({scaleX:0.96,skewX:3.8,skewY:6.2,x:42,y:76.3},0).wait(1).to({scaleX:0.95,skewX:4.7,skewY:7.6,x:41.2,y:77.9},0).wait(1).to({scaleX:0.94,skewX:5.7,skewY:9.2,x:40.3,y:79.4},0).wait(1).to({scaleX:0.93,skewX:6.6,skewY:10.7,x:39.4,y:80.9},0).wait(1).to({scaleX:0.92,skewX:7.4,skewY:12,x:38.5,y:82.3},0).wait(1).to({scaleX:0.91,skewX:8.2,skewY:13.2,x:37.7,y:83.4},0).wait(1).to({scaleX:0.9,skewX:8.8,skewY:14.3,x:37.1,y:84.4},0).wait(1).to({scaleX:0.9,skewX:9.3,skewY:15.1,x:36.6,y:85.2},0).wait(1).to({scaleX:0.89,skewX:9.7,skewY:15.7,x:36.2,y:85.8},0).wait(1).to({scaleX:0.89,skewX:10,skewY:16.2,x:35.9,y:86.1},0).wait(1).to({scaleX:0.89,skewX:10.1,skewY:16.4,x:35.8,y:86.4},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.89,skewX:10.2,skewY:16.5,x:10,y:52.4},0).wait(1).to({regX:35.5,regY:25.5,scaleX:0.89,skewX:10.1,skewY:16.4,x:35.6,y:86.2},0).wait(1).to({scaleX:0.89,skewX:9.9,skewY:16.1,x:35.8,y:85.9},0).wait(1).to({scaleX:0.89,skewX:9.7,skewY:15.7,x:36,y:85.5},0).wait(1).to({scaleX:0.9,skewX:9.3,skewY:15.1,x:36.5,y:84.9},0).wait(1).to({scaleX:0.9,skewX:8.8,skewY:14.3,x:37,y:84.2},0).wait(1).to({scaleX:0.91,skewX:8.2,skewY:13.3,x:37.6,y:83.4},0).wait(1).to({scaleX:0.92,skewX:7.5,skewY:12.2,x:38.2,y:82.2},0).wait(1).to({scaleX:0.93,skewX:6.7,skewY:10.9,x:39,y:81},0).wait(1).to({scaleX:0.94,skewX:5.9,skewY:9.5,x:39.9,y:79.6},0).wait(1).to({scaleX:0.95,skewX:5,skewY:8.1,x:40.7,y:78.1},0).wait(1).to({scaleX:0.96,skewX:4.1,skewY:6.6,x:41.6,y:76.7},0).wait(1).to({scaleX:0.96,skewX:3.3,skewY:5.3,x:42.3,y:75.2},0).wait(1).to({scaleX:0.97,skewX:2.5,skewY:4,x:43,y:73.9},0).wait(1).to({scaleX:0.98,skewX:1.8,skewY:2.9,x:43.6,y:72.7},0).wait(1).to({scaleX:0.99,skewX:1.2,skewY:2,x:44.1,y:71.7},0).wait(1).to({scaleX:0.99,skewX:0.8,skewY:1.2,x:44.5,y:70.9},0).wait(1).to({scaleX:1,skewX:0.4,skewY:0.7,x:44.8,y:70.2},0).wait(1).to({scaleX:1,skewX:0.2,skewY:0.3,x:45,y:69.8},0).wait(1).to({scaleX:1,skewX:0,skewY:0,x:45.2,y:69.6},0).wait(1).to({regX:0,regY:0,x:9.9,y:44.1},0).wait(1));

	// Zee Body
	this.instance_3 = new lib.ZeeBody("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.8,19.2,1,1,0,0,0,107.2,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:107,x:1.6},0).wait(1).to({y:19.4},0).wait(1).to({skewY:0.1,y:19.6},0).wait(1).to({y:20},0).wait(1).to({skewY:0.2,y:20.4},0).wait(1).to({skewY:0.3,y:20.8},0).wait(1).to({skewY:0.4,y:21.5},0).wait(1).to({skewY:0.6,y:22.1},0).wait(1).to({scaleX:1,skewY:0.7,y:22.8},0).wait(1).to({skewY:0.9,y:23.5},0).wait(1).to({skewY:1,y:24.2},0).wait(1).to({skewY:1.1,y:24.9},0).wait(1).to({skewY:1.2,y:25.5},0).wait(1).to({skewY:1.3,y:25.9},0).wait(1).to({skewY:1.4,y:26.3},0).wait(1).to({skewY:1.5,y:26.6},0).wait(1).to({y:26.9},0).wait(1).to({y:27},0).wait(1).to({regX:107.2,skewY:1.6,x:1.8},0).wait(1).to({regX:107,skewY:1.5,x:1.6},0).wait(1).to({y:26.9},0).wait(1).to({y:26.7},0).wait(1).to({skewY:1.4,y:26.4},0).wait(1).to({skewY:1.3,y:26},0).wait(1).to({y:25.6},0).wait(1).to({skewY:1.1,y:25},0).wait(1).to({skewY:1,y:24.4},0).wait(1).to({skewY:0.9,y:23.7},0).wait(1).to({skewY:0.8,y:23.1},0).wait(1).to({scaleX:1,skewY:0.6,y:22.4},0).wait(1).to({skewY:0.5,y:21.8},0).wait(1).to({skewY:0.4,y:21.1},0).wait(1).to({skewY:0.3,y:20.6},0).wait(1).to({skewY:0.2,y:20.2},0).wait(1).to({skewY:0.1,y:19.8},0).wait(1).to({y:19.6},0).wait(1).to({skewY:0,y:19.4},0).wait(1).to({y:19.3},0).wait(1).to({regX:107.2,x:1.8,y:19.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:107,x:1.6},0).wait(1).to({y:19.4},0).wait(1).to({skewY:0.1,y:19.6},0).wait(1).to({y:20},0).wait(1).to({skewY:0.2,y:20.4},0).wait(1).to({skewY:0.3,y:20.8},0).wait(1).to({skewY:0.4,y:21.5},0).wait(1).to({skewY:0.6,y:22.1},0).wait(1).to({scaleX:1,skewY:0.7,y:22.8},0).wait(1).to({skewY:0.9,y:23.5},0).wait(1).to({skewY:1,y:24.2},0).wait(1).to({skewY:1.1,y:24.9},0).wait(1).to({skewY:1.2,y:25.5},0).wait(1).to({skewY:1.3,y:25.9},0).wait(1).to({skewY:1.4,y:26.3},0).wait(1).to({skewY:1.5,y:26.6},0).wait(1).to({y:26.9},0).wait(1).to({y:27},0).wait(1).to({regX:107.2,skewY:1.6,x:1.8},0).wait(1).to({regX:107,skewY:1.5,x:1.6},0).wait(1).to({y:26.9},0).wait(1).to({y:26.7},0).wait(1).to({skewY:1.4,y:26.4},0).wait(1).to({skewY:1.3,y:26},0).wait(1).to({y:25.6},0).wait(1).to({skewY:1.1,y:25},0).wait(1).to({skewY:1,y:24.4},0).wait(1).to({skewY:0.9,y:23.7},0).wait(1).to({skewY:0.8,y:23.1},0).wait(1).to({scaleX:1,skewY:0.6,y:22.4},0).wait(1).to({skewY:0.5,y:21.8},0).wait(1).to({skewY:0.4,y:21.1},0).wait(1).to({skewY:0.3,y:20.6},0).wait(1).to({skewY:0.2,y:20.2},0).wait(1).to({skewY:0.1,y:19.8},0).wait(1).to({y:19.6},0).wait(1).to({skewY:0,y:19.4},0).wait(1).to({y:19.3},0).wait(1).to({regX:107.2,x:1.8,y:19.2},0).wait(1));

	// Zee Fin SM
	this.instance_4 = new lib.ZeeFinSM("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:11,regY:3,rotation:-0.1,x:73.1,y:22.4},0).wait(1).to({rotation:0,skewX:-0.4,skewY:-0.3,y:22.6},0).wait(1).to({skewX:-0.8,skewY:-0.7,y:22.8},0).wait(1).to({skewX:-1.4,skewY:-1.2,x:73.2,y:23.1},0).wait(1).to({skewX:-2.2,skewY:-1.8,y:23.6},0).wait(1).to({skewX:-3.2,skewY:-2.6,y:24.1},0).wait(1).to({skewX:-4.3,skewY:-3.5,x:73.3,y:24.7},0).wait(1).to({skewX:-5.6,skewY:-4.6,y:25.4},0).wait(1).to({scaleX:1,skewX:-7,skewY:-5.7,x:73.4,y:26.2},0).wait(1).to({skewX:-8.3,skewY:-6.8,x:73.5,y:27},0).wait(1).to({skewX:-9.7,skewY:-7.9,y:27.7},0).wait(1).to({skewX:-10.9,skewY:-9,y:28.4},0).wait(1).to({skewX:-12,skewY:-9.9,x:73.6,y:29},0).wait(1).to({skewX:-13,skewY:-10.6,x:73.5,y:29.5},0).wait(1).to({skewX:-13.7,skewY:-11.2,x:73.6,y:29.9},0).wait(1).to({skewX:-14.3,skewY:-11.7,y:30.2},0).wait(1).to({skewX:-14.7,skewY:-12,y:30.4},0).wait(1).to({skewX:-14.9,skewY:-12.2,y:30.5},0).wait(1).to({regX:0,regY:0,skewX:-15,skewY:-12.3,x:62.1,y:30},0).wait(1).to({regX:11,regY:3,skewX:-14.9,skewY:-12.2,x:73.5,y:30.5},0).wait(1).to({skewX:-14.6,skewY:-12,y:30.3},0).wait(1).to({skewX:-14.2,skewY:-11.7,x:73.6,y:30.1},0).wait(1).to({skewX:-13.7,skewY:-11.2,x:73.5,y:29.8},0).wait(1).to({skewX:-13,skewY:-10.6,y:29.4},0).wait(1).to({skewX:-12.1,skewY:-9.9,y:29},0).wait(1).to({skewX:-11.1,skewY:-9.1,y:28.4},0).wait(1).to({skewX:-9.9,skewY:-8.1,x:73.4,y:27.8},0).wait(1).to({skewX:-8.7,skewY:-7.1,y:27.1},0).wait(1).to({skewX:-7.3,skewY:-6,y:26.4},0).wait(1).to({scaleX:1,skewX:-6,skewY:-4.9,x:73.3,y:25.7},0).wait(1).to({skewX:-4.8,skewY:-3.9,y:25},0).wait(1).to({skewX:-3.7,skewY:-3,x:73.2,y:24.4},0).wait(1).to({skewX:-2.7,skewY:-2.2,y:23.8},0).wait(1).to({skewX:-1.8,skewY:-1.5,x:73.1,y:23.3},0).wait(1).to({skewX:-1.1,skewY:-0.9,y:22.9},0).wait(1).to({skewX:-0.6,skewY:-0.5,y:22.6},0).wait(1).to({rotation:-0.3,skewX:0,skewY:0,x:73,y:22.4},0).wait(1).to({rotation:-0.1,y:22.3},0).wait(1).to({regX:0,regY:0,rotation:0,x:62.1,y:19.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:11,regY:3,rotation:-0.1,x:73.1,y:22.4},0).wait(1).to({rotation:0,skewX:-0.4,skewY:-0.3,y:22.6},0).wait(1).to({skewX:-0.8,skewY:-0.7,y:22.8},0).wait(1).to({skewX:-1.4,skewY:-1.2,x:73.2,y:23.1},0).wait(1).to({skewX:-2.2,skewY:-1.8,y:23.6},0).wait(1).to({skewX:-3.2,skewY:-2.6,y:24.1},0).wait(1).to({skewX:-4.3,skewY:-3.5,x:73.3,y:24.7},0).wait(1).to({skewX:-5.6,skewY:-4.6,y:25.4},0).wait(1).to({scaleX:1,skewX:-7,skewY:-5.7,x:73.4,y:26.2},0).wait(1).to({skewX:-8.3,skewY:-6.8,x:73.5,y:27},0).wait(1).to({skewX:-9.7,skewY:-7.9,y:27.7},0).wait(1).to({skewX:-10.9,skewY:-9,y:28.4},0).wait(1).to({skewX:-12,skewY:-9.9,x:73.6,y:29},0).wait(1).to({skewX:-13,skewY:-10.6,x:73.5,y:29.5},0).wait(1).to({skewX:-13.7,skewY:-11.2,x:73.6,y:29.9},0).wait(1).to({skewX:-14.3,skewY:-11.7,y:30.2},0).wait(1).to({skewX:-14.7,skewY:-12,y:30.4},0).wait(1).to({skewX:-14.9,skewY:-12.2,y:30.5},0).wait(1).to({regX:0,regY:0,skewX:-15,skewY:-12.3,x:62.1,y:30},0).wait(1).to({regX:11,regY:3,skewX:-14.9,skewY:-12.2,x:73.5,y:30.5},0).wait(1).to({skewX:-14.6,skewY:-12,y:30.3},0).wait(1).to({skewX:-14.2,skewY:-11.7,x:73.6,y:30.1},0).wait(1).to({skewX:-13.7,skewY:-11.2,x:73.5,y:29.8},0).wait(1).to({skewX:-13,skewY:-10.6,y:29.4},0).wait(1).to({skewX:-12.1,skewY:-9.9,y:29},0).wait(1).to({skewX:-11.1,skewY:-9.1,y:28.4},0).wait(1).to({skewX:-9.9,skewY:-8.1,x:73.4,y:27.8},0).wait(1).to({skewX:-8.7,skewY:-7.1,y:27.1},0).wait(1).to({skewX:-7.3,skewY:-6,y:26.4},0).wait(1).to({scaleX:1,skewX:-6,skewY:-4.9,x:73.3,y:25.7},0).wait(1).to({skewX:-4.8,skewY:-3.9,y:25},0).wait(1).to({skewX:-3.7,skewY:-3,x:73.2,y:24.4},0).wait(1).to({skewX:-2.7,skewY:-2.2,y:23.8},0).wait(1).to({skewX:-1.8,skewY:-1.5,x:73.1,y:23.3},0).wait(1).to({skewX:-1.1,skewY:-0.9,y:22.9},0).wait(1).to({skewX:-0.6,skewY:-0.5,y:22.6},0).wait(1).to({rotation:-0.3,skewX:0,skewY:0,x:73,y:22.4},0).wait(1).to({rotation:-0.1,y:22.3},0).wait(1).to({regX:0,regY:0,rotation:0,x:62.1,y:19.4},0).wait(1));

	// Zee Tail
	this.instance_5 = new lib.ZeeTail("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(99.8,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:13,regY:-32,scaleX:1,skewX:-0.1,skewY:-0.2,x:112.7,y:-68.9},0).wait(1).to({scaleX:0.99,skewX:-0.2,skewY:-0.5,x:112.6,y:-68.7},0).wait(1).to({scaleX:0.99,skewX:-0.4,skewY:-1.1,x:112.3,y:-68.5},0).wait(1).to({scaleX:0.98,skewX:-0.7,skewY:-1.9,x:112,y:-68.1},0).wait(1).to({scaleX:0.97,skewX:-1.1,skewY:-3,x:111.5,y:-67.8},0).wait(1).to({scaleX:0.95,skewX:-1.5,skewY:-4.3,x:111,y:-67.2},0).wait(1).to({scaleX:0.94,skewX:-2.1,skewY:-5.8,x:110.4,y:-66.6},0).wait(1).to({scaleX:0.92,skewX:-2.7,skewY:-7.4,x:109.6,y:-65.9},0).wait(1).to({scaleX:0.9,skewX:-3.3,skewY:-9.3,x:108.8,y:-65.1},0).wait(1).to({scaleX:0.88,skewX:-4,skewY:-11.1,x:108,y:-64.3},0).wait(1).to({scaleX:0.86,skewX:-4.7,skewY:-12.9,x:107.2,y:-63.5},0).wait(1).to({scaleX:0.84,skewX:-5.3,skewY:-14.5,x:106.4,y:-62.7},0).wait(1).to({scaleX:0.83,skewX:-5.8,skewY:-16,x:105.8,y:-62},0).wait(1).to({scaleX:0.82,skewX:-6.2,skewY:-17.3,x:105.2,y:-61.4},0).wait(1).to({scaleX:0.8,skewX:-6.6,skewY:-18.3,x:104.8,y:-60.9},0).wait(1).to({scaleX:0.8,skewX:-6.9,skewY:-19,x:104.4,y:-60.5},0).wait(1).to({scaleX:0.79,skewX:-7.1,skewY:-19.5,x:104.2,y:-60.3},0).wait(1).to({scaleX:0.79,skewX:-7.2,skewY:-19.8,x:104.1,y:-60.1},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.79,skewY:-19.9,x:98.4,y:-24.9},0).wait(1).to({regX:13,regY:-32,scaleX:0.79,skewX:-7.1,skewY:-19.8,x:104,y:-60.2},0).wait(1).to({scaleX:0.79,skewX:-7,skewY:-19.5,x:104.2,y:-60.4},0).wait(1).to({scaleX:0.8,skewX:-6.8,skewY:-18.9,x:104.4,y:-60.6},0).wait(1).to({scaleX:0.81,skewX:-6.6,skewY:-18.2,x:104.8,y:-61},0).wait(1).to({scaleX:0.82,skewX:-6.2,skewY:-17.3,x:105.2,y:-61.5},0).wait(1).to({scaleX:0.83,skewX:-5.8,skewY:-16.1,x:105.7,y:-62.1},0).wait(1).to({scaleX:0.84,skewX:-5.3,skewY:-14.7,x:106.4,y:-62.7},0).wait(1).to({scaleX:0.86,skewX:-4.8,skewY:-13.2,x:107,y:-63.4},0).wait(1).to({scaleX:0.88,skewX:-4.2,skewY:-11.5,x:107.8,y:-64.2},0).wait(1).to({scaleX:0.9,skewX:-3.5,skewY:-9.8,x:108.5,y:-65},0).wait(1).to({scaleX:0.91,skewX:-2.9,skewY:-8,x:109.3,y:-65.7},0).wait(1).to({scaleX:0.93,skewX:-2.3,skewY:-6.4,x:110,y:-66.4},0).wait(1).to({scaleX:0.95,skewX:-1.8,skewY:-4.9,x:110.7,y:-67.1},0).wait(1).to({scaleX:0.96,skewX:-1.3,skewY:-3.5,x:111.3,y:-67.6},0).wait(1).to({scaleX:0.97,skewX:-0.9,skewY:-2.4,x:111.7,y:-68.1},0).wait(1).to({scaleX:0.98,skewX:-0.5,skewY:-1.5,x:112.1,y:-68.4},0).wait(1).to({scaleX:0.99,skewX:-0.3,skewY:-0.8,x:112.4,y:-68.7},0).wait(1).to({scaleX:1,skewX:-0.1,skewY:-0.4,x:112.6,y:-68.9},0).wait(1).to({scaleX:1,skewX:0,skewY:-0.1,x:112.7},0).wait(1).to({regX:0,regY:0,scaleX:1,skewY:0,x:99.8,y:-36.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:13,regY:-32,scaleX:1,skewX:-0.1,skewY:-0.2,x:112.7,y:-68.9},0).wait(1).to({scaleX:0.99,skewX:-0.2,skewY:-0.5,x:112.6,y:-68.7},0).wait(1).to({scaleX:0.99,skewX:-0.4,skewY:-1.1,x:112.3,y:-68.5},0).wait(1).to({scaleX:0.98,skewX:-0.7,skewY:-1.9,x:112,y:-68.1},0).wait(1).to({scaleX:0.97,skewX:-1.1,skewY:-3,x:111.5,y:-67.8},0).wait(1).to({scaleX:0.95,skewX:-1.5,skewY:-4.3,x:111,y:-67.2},0).wait(1).to({scaleX:0.94,skewX:-2.1,skewY:-5.8,x:110.4,y:-66.6},0).wait(1).to({scaleX:0.92,skewX:-2.7,skewY:-7.4,x:109.6,y:-65.9},0).wait(1).to({scaleX:0.9,skewX:-3.3,skewY:-9.3,x:108.8,y:-65.1},0).wait(1).to({scaleX:0.88,skewX:-4,skewY:-11.1,x:108,y:-64.3},0).wait(1).to({scaleX:0.86,skewX:-4.7,skewY:-12.9,x:107.2,y:-63.5},0).wait(1).to({scaleX:0.84,skewX:-5.3,skewY:-14.5,x:106.4,y:-62.7},0).wait(1).to({scaleX:0.83,skewX:-5.8,skewY:-16,x:105.8,y:-62},0).wait(1).to({scaleX:0.82,skewX:-6.2,skewY:-17.3,x:105.2,y:-61.4},0).wait(1).to({scaleX:0.8,skewX:-6.6,skewY:-18.3,x:104.8,y:-60.9},0).wait(1).to({scaleX:0.8,skewX:-6.9,skewY:-19,x:104.4,y:-60.5},0).wait(1).to({scaleX:0.79,skewX:-7.1,skewY:-19.5,x:104.2,y:-60.3},0).wait(1).to({scaleX:0.79,skewX:-7.2,skewY:-19.8,x:104.1,y:-60.1},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.79,skewY:-19.9,x:98.4,y:-24.9},0).wait(1).to({regX:13,regY:-32,scaleX:0.79,skewX:-7.1,skewY:-19.8,x:104,y:-60.2},0).wait(1).to({scaleX:0.79,skewX:-7,skewY:-19.5,x:104.2,y:-60.4},0).wait(1).to({scaleX:0.8,skewX:-6.8,skewY:-18.9,x:104.4,y:-60.6},0).wait(1).to({scaleX:0.81,skewX:-6.6,skewY:-18.2,x:104.8,y:-61},0).wait(1).to({scaleX:0.82,skewX:-6.2,skewY:-17.3,x:105.2,y:-61.5},0).wait(1).to({scaleX:0.83,skewX:-5.8,skewY:-16.1,x:105.7,y:-62.1},0).wait(1).to({scaleX:0.84,skewX:-5.3,skewY:-14.7,x:106.4,y:-62.7},0).wait(1).to({scaleX:0.86,skewX:-4.8,skewY:-13.2,x:107,y:-63.4},0).wait(1).to({scaleX:0.88,skewX:-4.2,skewY:-11.5,x:107.8,y:-64.2},0).wait(1).to({scaleX:0.9,skewX:-3.5,skewY:-9.8,x:108.5,y:-65},0).wait(1).to({scaleX:0.91,skewX:-2.9,skewY:-8,x:109.3,y:-65.7},0).wait(1).to({scaleX:0.93,skewX:-2.3,skewY:-6.4,x:110,y:-66.4},0).wait(1).to({scaleX:0.95,skewX:-1.8,skewY:-4.9,x:110.7,y:-67.1},0).wait(1).to({scaleX:0.96,skewX:-1.3,skewY:-3.5,x:111.3,y:-67.6},0).wait(1).to({scaleX:0.97,skewX:-0.9,skewY:-2.4,x:111.7,y:-68.1},0).wait(1).to({scaleX:0.98,skewX:-0.5,skewY:-1.5,x:112.1,y:-68.4},0).wait(1).to({scaleX:0.99,skewX:-0.3,skewY:-0.8,x:112.4,y:-68.7},0).wait(1).to({scaleX:1,skewX:-0.1,skewY:-0.4,x:112.6,y:-68.9},0).wait(1).to({scaleX:1,skewX:0,skewY:-0.1,x:112.7},0).wait(1).to({regX:0,regY:0,scaleX:1,skewY:0,x:99.8,y:-36.9},0).wait(1));

	// Zee Fin Far
	this.instance_6 = new lib.ZeeFinFar("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-61.9,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-28.5,regY:17,rotation:-0.2,x:-90.3,y:63.3},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.4,x:-90.2,y:63.5},0).wait(1).to({skewX:-1.1,skewY:-0.9,x:-90.1,y:63.9},0).wait(1).to({skewX:-1.9,skewY:-1.6,x:-89.8,y:64.5},0).wait(1).to({skewX:-2.9,skewY:-2.5,x:-89.5,y:65.2},0).wait(1).to({skewX:-4.1,skewY:-3.6,x:-89.1,y:65.9},0).wait(1).to({skewX:-5.6,skewY:-4.8,x:-88.6,y:66.9},0).wait(1).to({skewX:-7.3,skewY:-6.2,x:-88.1,y:68},0).wait(1).to({scaleX:1,skewX:-9,skewY:-7.8,x:-87.5,y:69.1},0).wait(1).to({skewX:-10.8,skewY:-9.3,x:-86.8,y:70.2},0).wait(1).to({skewX:-12.6,skewY:-10.8,x:-86.2,y:71.3},0).wait(1).to({skewX:-14.2,skewY:-12.2,x:-85.6,y:72.3},0).wait(1).to({skewX:-15.6,skewY:-13.4,x:-85,y:73.1},0).wait(1).to({skewX:-16.8,skewY:-14.5,x:-84.5,y:73.8},0).wait(1).to({skewX:-17.8,skewY:-15.3,x:-84.2,y:74.4},0).wait(1).to({skewX:-18.6,skewY:-16,x:-83.9,y:74.8},0).wait(1).to({skewX:-19.1,skewY:-16.4,x:-83.7,y:75},0).wait(1).to({skewX:-19.4,skewY:-16.7,x:-83.6,y:75.3},0).wait(1).to({regX:0,regY:0.1,skewX:-19.5,x:-61.9,y:51.1},0).wait(1).to({regX:-28.5,regY:17,skewX:-19.3,skewY:-16.6,x:-83.6,y:75.1},0).wait(1).to({skewX:-19,skewY:-16.3,x:-83.7,y:74.9},0).wait(1).to({skewX:-18.5,skewY:-15.9,x:-83.9,y:74.6},0).wait(1).to({skewX:-17.8,skewY:-15.3,x:-84.2,y:74.2},0).wait(1).to({skewX:-16.8,skewY:-14.5,x:-84.5,y:73.7},0).wait(1).to({skewX:-15.7,skewY:-13.5,x:-85,y:73},0).wait(1).to({skewX:-14.4,skewY:-12.4,x:-85.5,y:72.2},0).wait(1).to({skewX:-12.9,skewY:-11.1,x:-86.1,y:71.3},0).wait(1).to({skewX:-11.2,skewY:-9.7,x:-86.7,y:70.3},0).wait(1).to({skewX:-9.5,skewY:-8.2,x:-87.3,y:69.3},0).wait(1).to({scaleX:1,skewX:-7.8,skewY:-6.7,x:-87.9,y:68.3},0).wait(1).to({skewX:-6.2,skewY:-5.3,x:-88.4,y:67.2},0).wait(1).to({skewX:-4.7,skewY:-4.1,x:-88.9,y:66.3},0).wait(1).to({skewX:-3.4,skewY:-3,x:-89.3,y:65.4},0).wait(1).to({skewX:-2.3,skewY:-2,x:-89.7,y:64.7},0).wait(1).to({skewX:-1.5,skewY:-1.3,x:-89.9,y:64.1},0).wait(1).to({skewX:-0.8,skewY:-0.7,x:-90.1,y:63.7},0).wait(1).to({rotation:-0.3,skewX:0,skewY:0,x:-90.3,y:63.3},0).wait(1).to({rotation:-0.1,x:-90.4,y:63.2},0).wait(1).to({regX:0,regY:0,rotation:0,x:-61.9,y:46.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-28.5,regY:17,rotation:-0.2,x:-90.3,y:63.3},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.4,x:-90.2,y:63.5},0).wait(1).to({skewX:-1.1,skewY:-0.9,x:-90.1,y:63.9},0).wait(1).to({skewX:-1.9,skewY:-1.6,x:-89.8,y:64.5},0).wait(1).to({skewX:-2.9,skewY:-2.5,x:-89.5,y:65.2},0).wait(1).to({skewX:-4.1,skewY:-3.6,x:-89.1,y:65.9},0).wait(1).to({skewX:-5.6,skewY:-4.8,x:-88.6,y:66.9},0).wait(1).to({skewX:-7.3,skewY:-6.2,x:-88.1,y:68},0).wait(1).to({scaleX:1,skewX:-9,skewY:-7.8,x:-87.5,y:69.1},0).wait(1).to({skewX:-10.8,skewY:-9.3,x:-86.8,y:70.2},0).wait(1).to({skewX:-12.6,skewY:-10.8,x:-86.2,y:71.3},0).wait(1).to({skewX:-14.2,skewY:-12.2,x:-85.6,y:72.3},0).wait(1).to({skewX:-15.6,skewY:-13.4,x:-85,y:73.1},0).wait(1).to({skewX:-16.8,skewY:-14.5,x:-84.5,y:73.8},0).wait(1).to({skewX:-17.8,skewY:-15.3,x:-84.2,y:74.4},0).wait(1).to({skewX:-18.6,skewY:-16,x:-83.9,y:74.8},0).wait(1).to({skewX:-19.1,skewY:-16.4,x:-83.7,y:75},0).wait(1).to({skewX:-19.4,skewY:-16.7,x:-83.6,y:75.3},0).wait(1).to({regX:0,regY:0.1,skewX:-19.5,x:-61.9,y:51.1},0).wait(1).to({regX:-28.5,regY:17,skewX:-19.3,skewY:-16.6,x:-83.6,y:75.1},0).wait(1).to({skewX:-19,skewY:-16.3,x:-83.7,y:74.9},0).wait(1).to({skewX:-18.5,skewY:-15.9,x:-83.9,y:74.6},0).wait(1).to({skewX:-17.8,skewY:-15.3,x:-84.2,y:74.2},0).wait(1).to({skewX:-16.8,skewY:-14.5,x:-84.5,y:73.7},0).wait(1).to({skewX:-15.7,skewY:-13.5,x:-85,y:73},0).wait(1).to({skewX:-14.4,skewY:-12.4,x:-85.5,y:72.2},0).wait(1).to({skewX:-12.9,skewY:-11.1,x:-86.1,y:71.3},0).wait(1).to({skewX:-11.2,skewY:-9.7,x:-86.7,y:70.3},0).wait(1).to({skewX:-9.5,skewY:-8.2,x:-87.3,y:69.3},0).wait(1).to({scaleX:1,skewX:-7.8,skewY:-6.7,x:-87.9,y:68.3},0).wait(1).to({skewX:-6.2,skewY:-5.3,x:-88.4,y:67.2},0).wait(1).to({skewX:-4.7,skewY:-4.1,x:-88.9,y:66.3},0).wait(1).to({skewX:-3.4,skewY:-3,x:-89.3,y:65.4},0).wait(1).to({skewX:-2.3,skewY:-2,x:-89.7,y:64.7},0).wait(1).to({skewX:-1.5,skewY:-1.3,x:-89.9,y:64.1},0).wait(1).to({skewX:-0.8,skewY:-0.7,x:-90.1,y:63.7},0).wait(1).to({rotation:-0.3,skewX:0,skewY:0,x:-90.3,y:63.3},0).wait(1).to({rotation:-0.1,x:-90.4,y:63.2},0).wait(1).to({regX:0,regY:0,rotation:0,x:-61.9,y:46.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.9,-111.9,261.7,213.1);


// stage content:
(lib.Zee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Zee
	this.instance = new lib.Zee_1();
	this.instance.parent = this;
	this.instance.setTransform(209.5,170.5,1,1,0,0,0,0.9,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.2,234.5,261.7,213.1);
// library properties:
lib.properties = {
	id: '4860569F12254B5A9DD1B99F1ED2CD62',
	width: 419,
	height: 341,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zee_atlas_.png?1499358209227", id:"zee_atlas_"}
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
an.compositions['4860569F12254B5A9DD1B99F1ED2CD62'] = {
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