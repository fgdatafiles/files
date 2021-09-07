(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"maury_atlas_", frames: [[451,0,21,30],[409,0,40,37],[154,163,162,142],[154,0,253,161],[0,0,152,317]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["maury_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["maury_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MauryHeadBMP = function() {
	this.spriteSheet = ss["maury_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MauryMIdBMP = function() {
	this.spriteSheet = ss["maury_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.MauryTailBMP = function() {
	this.spriteSheet = ss["maury_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MauryTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.MauryTailBMP();
	this.instance.parent = this;
	this.instance.setTransform(-45,-258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-258.1,152.4,317.1);


(lib.MauryMiddle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.MauryMIdBMP();
	this.instance.parent = this;
	this.instance.setTransform(-23,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,0,253,161);


(lib.MauryHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.MauryHeadBMP();
	this.instance.parent = this;
	this.instance.setTransform(-160,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-68,162,142);


(lib.EyelidNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,37);


(lib.EyelidFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,30);


(lib.Maury_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:93});

	// timeline functions:
	this.frame_170 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(170).call(this.frame_170).wait(1));

	// Eyelid Far
	this.instance = new lib.EyelidFar("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-183.4,5.6,1,1,0,0,0,10.7,15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},7).wait(119).to({_off:false,regX:10.8,rotation:-15,x:-186.9,y:43.6},0).wait(1).to({regX:10.5,regY:15,x:-187.2,y:43.4},0).wait(1).to({rotation:-14.9,y:43.2},0).wait(1).to({rotation:-14.8,x:-187.1,y:43},0).wait(1).to({rotation:-14.6,y:42.6},0).wait(1).to({rotation:-14.5,y:42.2},0).wait(1).to({rotation:-14.3,x:-187,y:41.6},0).wait(1).to({rotation:-14,x:-186.9,y:41},0).wait(1).to({rotation:-13.7,y:40.2},0).wait(1).to({rotation:-13.4,x:-186.8,y:39.4},0).wait(1).to({rotation:-13,x:-186.7,y:38.4},0).wait(1).to({rotation:-12.6,x:-186.6,y:37.4},0).wait(1).to({rotation:-12.1,x:-186.5,y:36.2},0).wait(1).to({rotation:-11.6,x:-186.4,y:35},0).wait(1).to({rotation:-11.1,x:-186.2,y:33.6},0).wait(1).to({rotation:-10.5,x:-186.1,y:32.2},0).wait(1).to({rotation:-9.9,x:-185.9,y:30.7},0).wait(1).to({rotation:-9.3,y:29.1},0).wait(1).to({rotation:-8.7,x:-185.7,y:27.4},0).wait(1).to({regX:10.8,regY:15.1,rotation:-8,x:-185.3,y:25.9},0).to({_off:true},1).wait(18));

	// Eyelid Near
	this.instance_1 = new lib.EyelidNear("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-137.6,20.1,1,1,0,0,0,19.9,18.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},7).wait(119).to({_off:false,regY:18.8,rotation:-15,x:-140.3,y:48.8},0).wait(1).to({regX:20,regY:18.5,x:-140.2,y:48.4},0).wait(1).to({rotation:-14.9,y:48.3},0).wait(1).to({rotation:-14.8,y:48.1},0).wait(1).to({rotation:-14.6,x:-140.1,y:47.8},0).wait(1).to({rotation:-14.5,y:47.5},0).wait(1).to({rotation:-14.3,x:-140,y:47.1},0).wait(1).to({rotation:-14,y:46.6},0).wait(1).to({rotation:-13.7,x:-139.9,y:46},0).wait(1).to({rotation:-13.4,y:45.4},0).wait(1).to({rotation:-13,x:-139.8,y:44.6},0).wait(1).to({rotation:-12.6,x:-139.7,y:43.9},0).wait(1).to({rotation:-12.1,y:43},0).wait(1).to({rotation:-11.6,x:-139.5,y:42},0).wait(1).to({rotation:-11.1,y:41.1},0).wait(1).to({rotation:-10.5,x:-139.4,y:40},0).wait(1).to({rotation:-9.9,x:-139.3,y:38.8},0).wait(1).to({rotation:-9.3,x:-139.1,y:37.7},0).wait(1).to({rotation:-8.7,x:-139,y:36.5},0).wait(1).to({regX:19.9,regY:18.8,rotation:-8,y:35.5},0).to({_off:true},1).wait(18));

	// Maury Head
	this.instance_2 = new lib.MauryHead("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72.1,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-79,regY:3,x:-151,y:45.9},0).wait(1).to({rotation:-0.1,y:46},0).wait(1).to({y:46.3},0).wait(1).to({rotation:0,skewX:-0.2,skewY:-0.3,y:46.6},0).wait(1).to({skewX:-0.3,skewY:-0.4,y:46.9},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:47.4},0).wait(1).to({skewX:-0.6,skewY:-0.8,y:47.9},0).wait(1).to({skewX:-0.8,skewY:-1.1,y:48.5},0).wait(1).to({skewX:-1.1,skewY:-1.3,y:49.1},0).wait(1).to({skewX:-1.3,skewY:-1.6,y:49.9},0).wait(1).to({skewX:-1.6,skewY:-2,x:-150.9,y:50.7},0).wait(1).to({skewX:-1.9,skewY:-2.3,y:51.6},0).wait(1).to({skewX:-2.2,skewY:-2.7,y:52.6},0).wait(1).to({skewX:-2.5,skewY:-3.2,x:-150.8,y:53.7},0).wait(1).to({skewX:-2.9,skewY:-3.6,x:-150.7,y:54.9},0).wait(1).to({skewX:-3.3,skewY:-4.1,y:56.1},0).wait(1).to({skewX:-3.7,skewY:-4.6,x:-150.6,y:57.3},0).wait(1).to({skewX:-4.1,skewY:-5.1,x:-150.5,y:58.6},0).wait(1).to({skewX:-4.5,skewY:-5.7,x:-150.4,y:59.9},0).wait(1).to({skewX:-4.9,skewY:-6.2,y:61.2},0).wait(1).to({scaleX:1,skewX:-5.4,skewY:-6.7,x:-150.2,y:62.5},0).wait(1).to({skewX:-5.8,skewY:-7.2,x:-150.1,y:63.8},0).wait(1).to({skewX:-6.2,skewY:-7.8,x:-150,y:65.1},0).wait(1).to({skewX:-6.6,skewY:-8.3,x:-149.9,y:66.3},0).wait(1).to({skewX:-7,skewY:-8.7,x:-149.8,y:67.5},0).wait(1).to({skewX:-7.3,skewY:-9.2,x:-149.6,y:68.6},0).wait(1).to({skewX:-7.7,skewY:-9.6,x:-149.5,y:69.6},0).wait(1).to({skewX:-8,skewY:-10,x:-149.4,y:70.6},0).wait(1).to({skewX:-8.3,skewY:-10.3,x:-149.3,y:71.5},0).wait(1).to({skewX:-8.5,skewY:-10.7,x:-149.2,y:72.3},0).wait(1).to({skewX:-8.8,skewY:-11,x:-149.1,y:73},0).wait(1).to({skewX:-9,skewY:-11.2,y:73.6},0).wait(1).to({skewX:-9.1,skewY:-11.4,x:-149,y:74.2},0).wait(1).to({skewX:-9.3,skewY:-11.6,x:-148.9,y:74.6},0).wait(1).to({skewX:-9.4,skewY:-11.8,y:75},0).wait(1).to({skewX:-9.5,skewY:-11.9,x:-148.8,y:75.3},0).wait(1).to({skewX:-9.6,skewY:-12,y:75.6},0).wait(1).to({skewX:-9.7,skewY:-12.1,y:75.7},0).wait(1).to({y:75.8},0).wait(1).to({regX:0,regY:0.1,x:-72,y:56.3},0).wait(1).to({regX:-79,regY:3,x:-148.8,y:75.6},0).wait(1).to({skewX:-9.6,skewY:-12,x:-148.9,y:75.4},0).wait(1).to({skewX:-9.5,skewY:-11.9,y:75.2},0).wait(1).to({skewX:-9.4,skewY:-11.8,y:74.9},0).wait(1).to({skewX:-9.3,skewY:-11.6,x:-149,y:74.5},0).wait(1).to({skewX:-9.1,skewY:-11.4,y:74},0).wait(1).to({skewX:-8.9,skewY:-11.2,x:-149.1,y:73.4},0).wait(1).to({skewX:-8.7,skewY:-10.9,x:-149.2,y:72.7},0).wait(1).to({skewX:-8.5,skewY:-10.6,x:-149.3,y:71.9},0).wait(1).to({skewX:-8.2,skewY:-10.2,x:-149.4,y:71},0).wait(1).to({skewX:-7.9,skewY:-9.8,x:-149.5,y:70.1},0).wait(1).to({skewX:-7.5,skewY:-9.4,x:-149.6,y:69},0).wait(1).to({skewX:-7.1,skewY:-8.9,x:-149.8,y:67.9},0).wait(1).to({skewX:-6.7,skewY:-8.4,x:-149.9,y:66.7},0).wait(1).to({skewX:-6.3,skewY:-7.9,x:-150,y:65.4},0).wait(1).to({skewX:-5.9,skewY:-7.4,x:-150.1,y:64},0).wait(1).to({skewX:-5.4,skewY:-6.8,x:-150.2,y:62.6},0).wait(1).to({scaleX:1,skewX:-5,skewY:-6.2,x:-150.3,y:61.2},0).wait(1).to({skewX:-4.5,skewY:-5.7,x:-150.4,y:59.8},0).wait(1).to({skewX:-4.1,skewY:-5.1,x:-150.5,y:58.3},0).wait(1).to({skewX:-3.6,skewY:-4.5,x:-150.6,y:57},0).wait(1).to({skewX:-3.2,skewY:-4,x:-150.7,y:55.6},0).wait(1).to({skewX:-2.8,skewY:-3.5,x:-150.8,y:54.3},0).wait(1).to({skewX:-2.4,skewY:-3,y:53.1},0).wait(1).to({skewX:-2,skewY:-2.5,x:-150.9,y:52},0).wait(1).to({skewX:-1.7,skewY:-2.1,y:50.9},0).wait(1).to({skewX:-1.4,skewY:-1.7,y:50},0).wait(1).to({skewX:-1.1,skewY:-1.4,x:-151,y:49.1},0).wait(1).to({skewX:-0.9,skewY:-1.1,y:48.4},0).wait(1).to({skewX:-0.7,skewY:-0.8,y:47.7},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:47.2},0).wait(1).to({skewX:-0.3,skewY:-0.4,y:46.7},0).wait(1).to({skewX:-0.2,skewY:-0.3,y:46.3},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:46.1},0).wait(1).to({rotation:0,y:45.9},0).wait(1).to({y:45.7},0).wait(1).to({regX:0,regY:0,x:-72.1,y:42.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-79,regY:3,x:-151,y:45.9},0).wait(1).to({rotation:-0.1,y:46},0).wait(1).to({y:46.3},0).wait(1).to({rotation:0,skewX:-0.2,skewY:-0.3,y:46.6},0).wait(1).to({skewX:-0.3,skewY:-0.4,y:46.9},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:47.4},0).wait(1).to({skewX:-0.6,skewY:-0.8,y:47.9},0).wait(1).to({skewX:-0.8,skewY:-1.1,y:48.5},0).wait(1).to({skewX:-1.1,skewY:-1.3,y:49.1},0).wait(1).to({skewX:-1.3,skewY:-1.6,y:49.9},0).wait(1).to({skewX:-1.6,skewY:-2,x:-150.9,y:50.7},0).wait(1).to({skewX:-1.9,skewY:-2.3,y:51.6},0).wait(1).to({skewX:-2.2,skewY:-2.7,y:52.6},0).wait(1).to({skewX:-2.5,skewY:-3.2,x:-150.8,y:53.7},0).wait(1).to({skewX:-2.9,skewY:-3.6,x:-150.7,y:54.9},0).wait(1).to({skewX:-3.3,skewY:-4.1,y:56.1},0).wait(1).to({skewX:-3.7,skewY:-4.6,x:-150.6,y:57.3},0).wait(1).to({skewX:-4.1,skewY:-5.1,x:-150.5,y:58.6},0).wait(1).to({skewX:-4.5,skewY:-5.7,x:-150.4,y:59.9},0).wait(1).to({skewX:-4.9,skewY:-6.2,y:61.2},0).wait(1).to({scaleX:1,skewX:-5.4,skewY:-6.7,x:-150.2,y:62.5},0).wait(1).to({skewX:-5.8,skewY:-7.2,x:-150.1,y:63.8},0).wait(1).to({skewX:-6.2,skewY:-7.8,x:-150,y:65.1},0).wait(1).to({skewX:-6.6,skewY:-8.3,x:-149.9,y:66.3},0).wait(1).to({skewX:-7,skewY:-8.7,x:-149.8,y:67.5},0).wait(1).to({skewX:-7.3,skewY:-9.2,x:-149.6,y:68.6},0).wait(1).to({skewX:-7.7,skewY:-9.6,x:-149.5,y:69.6},0).wait(1).to({skewX:-8,skewY:-10,x:-149.4,y:70.6},0).wait(1).to({skewX:-8.3,skewY:-10.3,x:-149.3,y:71.5},0).wait(1).to({skewX:-8.5,skewY:-10.7,x:-149.2,y:72.3},0).wait(1).to({skewX:-8.8,skewY:-11,x:-149.1,y:73},0).wait(1).to({skewX:-9,skewY:-11.2,y:73.6},0).wait(1).to({skewX:-9.1,skewY:-11.4,x:-149,y:74.2},0).wait(1).to({skewX:-9.3,skewY:-11.6,x:-148.9,y:74.6},0).wait(1).to({skewX:-9.4,skewY:-11.8,y:75},0).wait(1).to({skewX:-9.5,skewY:-11.9,x:-148.8,y:75.3},0).wait(1).to({skewX:-9.6,skewY:-12,y:75.6},0).wait(1).to({skewX:-9.7,skewY:-12.1,y:75.7},0).wait(1).to({y:75.8},0).wait(1).to({regX:0,regY:0.1,x:-72,y:56.3},0).wait(1).to({regX:-79,regY:3,x:-148.8,y:75.6},0).wait(1).to({skewX:-9.6,skewY:-12,x:-148.9,y:75.4},0).wait(1).to({skewX:-9.5,skewY:-11.9,y:75.2},0).wait(1).to({skewX:-9.4,skewY:-11.8,y:74.9},0).wait(1).to({skewX:-9.3,skewY:-11.6,x:-149,y:74.5},0).wait(1).to({skewX:-9.1,skewY:-11.4,y:74},0).wait(1).to({skewX:-8.9,skewY:-11.2,x:-149.1,y:73.4},0).wait(1).to({skewX:-8.7,skewY:-10.9,x:-149.2,y:72.7},0).wait(1).to({skewX:-8.5,skewY:-10.6,x:-149.3,y:71.9},0).wait(1).to({skewX:-8.2,skewY:-10.2,x:-149.4,y:71},0).wait(1).to({skewX:-7.9,skewY:-9.8,x:-149.5,y:70.1},0).wait(1).to({skewX:-7.5,skewY:-9.4,x:-149.6,y:69},0).wait(1).to({skewX:-7.1,skewY:-8.9,x:-149.8,y:67.9},0).wait(1).to({skewX:-6.7,skewY:-8.4,x:-149.9,y:66.7},0).wait(1).to({skewX:-6.3,skewY:-7.9,x:-150,y:65.4},0).wait(1).to({skewX:-5.9,skewY:-7.4,x:-150.1,y:64},0).wait(1).to({skewX:-5.4,skewY:-6.8,x:-150.2,y:62.6},0).wait(1).to({scaleX:1,skewX:-5,skewY:-6.2,x:-150.3,y:61.2},0).wait(1).to({skewX:-4.5,skewY:-5.7,x:-150.4,y:59.8},0).wait(1).to({skewX:-4.1,skewY:-5.1,x:-150.5,y:58.3},0).wait(1).to({skewX:-3.6,skewY:-4.5,x:-150.6,y:57},0).wait(1).to({skewX:-3.2,skewY:-4,x:-150.7,y:55.6},0).wait(1).to({skewX:-2.8,skewY:-3.5,x:-150.8,y:54.3},0).wait(1).to({skewX:-2.4,skewY:-3,y:53.1},0).wait(1).to({skewX:-2,skewY:-2.5,x:-150.9,y:52},0).wait(1).to({skewX:-1.7,skewY:-2.1,y:50.9},0).wait(1).to({skewX:-1.4,skewY:-1.7,y:50},0).wait(1).to({skewX:-1.1,skewY:-1.4,x:-151,y:49.1},0).wait(1).to({skewX:-0.9,skewY:-1.1,y:48.4},0).wait(1).to({skewX:-0.7,skewY:-0.8,y:47.7},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:47.2},0).wait(1).to({skewX:-0.3,skewY:-0.4,y:46.7},0).wait(1).to({skewX:-0.2,skewY:-0.3,y:46.3},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:46.1},0).wait(1).to({rotation:0,y:45.9},0).wait(1).to({y:45.7},0).wait(1).to({regX:0,regY:0,x:-72.1,y:42.9},0).wait(1));

	// Maury Middle
	this.instance_3 = new lib.MauryMiddle("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72.1,42.9,1,1,0,0,0,21,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:103.5,regY:80.5,x:10.4,y:78.4},0).wait(1).to({y:78.5},0).wait(1).to({skewY:-0.1,y:78.6},0).wait(1).to({startPosition:0},0).wait(1).to({skewY:-0.2,y:78.7},0).wait(1).to({y:78.8},0).wait(1).to({skewY:-0.3,y:79},0).wait(1).to({skewY:-0.4,x:10.5,y:79.2},0).wait(1).to({skewY:-0.5,y:79.4},0).wait(1).to({skewY:-0.7,y:79.6},0).wait(1).to({scaleX:1,skewY:-0.8,y:79.8},0).wait(1).to({skewY:-0.9,y:80.1},0).wait(1).to({skewY:-1.1,y:80.4},0).wait(1).to({skewY:-1.3,y:80.7},0).wait(1).to({skewY:-1.4,y:81.1},0).wait(1).to({skewY:-1.6,y:81.4},0).wait(1).to({skewY:-1.8,y:81.7},0).wait(1).to({scaleX:1,skewY:-2,y:82.2},0).wait(1).to({skewY:-2.3,y:82.5},0).wait(1).to({skewY:-2.5,y:83},0).wait(1).to({skewY:-2.7,y:83.3},0).wait(1).to({skewY:-2.9,y:83.7},0).wait(1).to({skewY:-3.1,y:84.1},0).wait(1).to({skewY:-3.3,y:84.5},0).wait(1).to({scaleX:1,skewY:-3.5,y:84.8},0).wait(1).to({skewY:-3.7,y:85.1},0).wait(1).to({skewY:-3.8,y:85.4},0).wait(1).to({skewY:-4,y:85.8},0).wait(1).to({skewY:-4.1,y:86},0).wait(1).to({skewY:-4.3,y:86.3},0).wait(1).to({skewY:-4.4,y:86.5},0).wait(1).to({skewY:-4.5,y:86.7},0).wait(1).to({skewY:-4.6,x:10.4,y:86.8},0).wait(1).to({y:87},0).wait(1).to({scaleX:1,skewY:-4.7,y:87.1},0).wait(1).to({skewY:-4.8,y:87.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:87.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:21,regY:45.1,x:-72.1,y:58.9},0).wait(1).to({regX:103.5,regY:80.5,x:10.4,y:87.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:87.1},0).wait(1).to({skewY:-4.7,y:87},0).wait(1).to({scaleX:1,skewY:-4.6,y:86.9},0).wait(1).to({y:86.8},0).wait(1).to({skewY:-4.5,x:10.5,y:86.6},0).wait(1).to({skewY:-4.4,y:86.4},0).wait(1).to({skewY:-4.2,y:86.1},0).wait(1).to({skewY:-4.1,y:85.9},0).wait(1).to({skewY:-3.9,y:85.6},0).wait(1).to({skewY:-3.8,y:85.3},0).wait(1).to({skewY:-3.6,y:84.9},0).wait(1).to({skewY:-3.4,y:84.5},0).wait(1).to({scaleX:1,skewY:-3.2,y:84.2},0).wait(1).to({skewY:-2.9,y:83.7},0).wait(1).to({skewY:-2.7,y:83.4},0).wait(1).to({skewY:-2.5,y:82.9},0).wait(1).to({skewY:-2.3,y:82.5},0).wait(1).to({skewY:-2,y:82.1},0).wait(1).to({scaleX:1,skewY:-1.8,y:81.7},0).wait(1).to({skewY:-1.6,y:81.2},0).wait(1).to({skewY:-1.4,y:80.9},0).wait(1).to({skewY:-1.2,y:80.5},0).wait(1).to({skewY:-1,y:80.2},0).wait(1).to({skewY:-0.8,y:79.9},0).wait(1).to({skewY:-0.7,y:79.6},0).wait(1).to({scaleX:1,skewY:-0.6,y:79.4},0).wait(1).to({skewY:-0.4,y:79.1},0).wait(1).to({skewY:-0.3,x:10.4,y:78.9},0).wait(1).to({skewY:-0.2,y:78.8},0).wait(1).to({y:78.6},0).wait(1).to({skewY:-0.1,y:78.5},0).wait(1).to({startPosition:0},0).wait(1).to({skewY:0,y:78.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:21,regY:45,x:-72.1,y:42.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:103.5,regY:80.5,x:10.4,y:78.4},0).wait(1).to({y:78.5},0).wait(1).to({skewY:-0.1,y:78.6},0).wait(1).to({startPosition:0},0).wait(1).to({skewY:-0.2,y:78.7},0).wait(1).to({y:78.8},0).wait(1).to({skewY:-0.3,y:79},0).wait(1).to({skewY:-0.4,x:10.5,y:79.2},0).wait(1).to({skewY:-0.5,y:79.4},0).wait(1).to({skewY:-0.7,y:79.6},0).wait(1).to({scaleX:1,skewY:-0.8,y:79.8},0).wait(1).to({skewY:-0.9,y:80.1},0).wait(1).to({skewY:-1.1,y:80.4},0).wait(1).to({skewY:-1.3,y:80.7},0).wait(1).to({skewY:-1.4,y:81.1},0).wait(1).to({skewY:-1.6,y:81.4},0).wait(1).to({skewY:-1.8,y:81.7},0).wait(1).to({scaleX:1,skewY:-2,y:82.2},0).wait(1).to({skewY:-2.3,y:82.5},0).wait(1).to({skewY:-2.5,y:83},0).wait(1).to({skewY:-2.7,y:83.3},0).wait(1).to({skewY:-2.9,y:83.7},0).wait(1).to({skewY:-3.1,y:84.1},0).wait(1).to({skewY:-3.3,y:84.5},0).wait(1).to({scaleX:1,skewY:-3.5,y:84.8},0).wait(1).to({skewY:-3.7,y:85.1},0).wait(1).to({skewY:-3.8,y:85.4},0).wait(1).to({skewY:-4,y:85.8},0).wait(1).to({skewY:-4.1,y:86},0).wait(1).to({skewY:-4.3,y:86.3},0).wait(1).to({skewY:-4.4,y:86.5},0).wait(1).to({skewY:-4.5,y:86.7},0).wait(1).to({skewY:-4.6,x:10.4,y:86.8},0).wait(1).to({y:87},0).wait(1).to({scaleX:1,skewY:-4.7,y:87.1},0).wait(1).to({skewY:-4.8,y:87.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:87.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:21,regY:45.1,x:-72.1,y:58.9},0).wait(1).to({regX:103.5,regY:80.5,x:10.4,y:87.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:87.1},0).wait(1).to({skewY:-4.7,y:87},0).wait(1).to({scaleX:1,skewY:-4.6,y:86.9},0).wait(1).to({y:86.8},0).wait(1).to({skewY:-4.5,x:10.5,y:86.6},0).wait(1).to({skewY:-4.4,y:86.4},0).wait(1).to({skewY:-4.2,y:86.1},0).wait(1).to({skewY:-4.1,y:85.9},0).wait(1).to({skewY:-3.9,y:85.6},0).wait(1).to({skewY:-3.8,y:85.3},0).wait(1).to({skewY:-3.6,y:84.9},0).wait(1).to({skewY:-3.4,y:84.5},0).wait(1).to({scaleX:1,skewY:-3.2,y:84.2},0).wait(1).to({skewY:-2.9,y:83.7},0).wait(1).to({skewY:-2.7,y:83.4},0).wait(1).to({skewY:-2.5,y:82.9},0).wait(1).to({skewY:-2.3,y:82.5},0).wait(1).to({skewY:-2,y:82.1},0).wait(1).to({scaleX:1,skewY:-1.8,y:81.7},0).wait(1).to({skewY:-1.6,y:81.2},0).wait(1).to({skewY:-1.4,y:80.9},0).wait(1).to({skewY:-1.2,y:80.5},0).wait(1).to({skewY:-1,y:80.2},0).wait(1).to({skewY:-0.8,y:79.9},0).wait(1).to({skewY:-0.7,y:79.6},0).wait(1).to({scaleX:1,skewY:-0.6,y:79.4},0).wait(1).to({skewY:-0.4,y:79.1},0).wait(1).to({skewY:-0.3,x:10.4,y:78.9},0).wait(1).to({skewY:-0.2,y:78.8},0).wait(1).to({y:78.6},0).wait(1).to({skewY:-0.1,y:78.5},0).wait(1).to({startPosition:0},0).wait(1).to({skewY:0,y:78.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:21,regY:45,x:-72.1,y:42.9},0).wait(1));

	// Maury Tail
	this.instance_4 = new lib.MauryTail("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.5,77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:31,regY:-99.5,x:142.4,y:-21.8},0).wait(1).to({x:142.5},0).wait(1).to({skewX:0.1,skewY:0.1,y:-21.7},0).wait(1).to({scaleY:1,skewY:0.2,x:142.6,y:-21.6},0).wait(1).to({skewX:0.2,skewY:0.3,x:142.7,y:-21.5},0).wait(1).to({skewY:0.4,x:142.8,y:-21.3},0).wait(1).to({scaleY:1,skewX:0.3,skewY:0.6,x:142.9,y:-21.1},0).wait(1).to({scaleY:1,skewX:0.4,skewY:0.7,x:143.1,y:-20.9},0).wait(1).to({skewX:0.5,skewY:0.9,x:143.3,y:-20.7},0).wait(1).to({scaleY:1,skewX:0.7,skewY:1.1,x:143.4,y:-20.4},0).wait(1).to({scaleY:1,skewX:0.8,skewY:1.4,x:143.6,y:-20.1},0).wait(1).to({scaleY:0.99,skewX:1,skewY:1.6,x:143.8,y:-19.8},0).wait(1).to({scaleY:0.99,skewX:1.1,skewY:1.9,x:144.1,y:-19.4},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:1.3,skewY:2.2,x:144.3,y:-19.1},0).wait(1).to({scaleY:0.99,skewX:1.5,skewY:2.5,x:144.6,y:-18.6},0).wait(1).to({scaleY:0.99,skewX:1.7,skewY:2.9,x:144.9,y:-18.2},0).wait(1).to({scaleY:0.99,skewX:1.9,skewY:3.2,x:145.1,y:-17.7},0).wait(1).to({scaleY:0.99,skewX:2.1,skewY:3.6,x:145.4,y:-17.3},0).wait(1).to({scaleY:0.99,skewX:2.3,skewY:4,x:145.7,y:-16.8},0).wait(1).to({scaleY:0.99,skewX:2.5,skewY:4.3,x:146,y:-16.3},0).wait(1).to({scaleY:0.98,skewX:2.7,skewY:4.7,x:146.3,y:-15.9},0).wait(1).to({scaleY:0.98,skewX:3,skewY:5.1,x:146.6,y:-15.4},0).wait(1).to({scaleY:0.98,skewX:3.2,skewY:5.4,x:146.9,y:-14.9},0).wait(1).to({scaleY:0.98,skewX:3.4,skewY:5.8,x:147.2,y:-14.5},0).wait(1).to({scaleY:0.98,skewX:3.6,skewY:6.1,x:147.4,y:-14},0).wait(1).to({scaleY:0.98,skewX:3.7,skewY:6.4,x:147.7,y:-13.6},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:3.9,skewY:6.7,x:147.9,y:-13.2},0).wait(1).to({scaleY:0.98,skewX:4.1,skewY:7,x:148.1,y:-12.9},0).wait(1).to({scaleY:0.97,skewX:4.2,skewY:7.2,x:148.3,y:-12.5},0).wait(1).to({skewX:4.3,skewY:7.5,x:148.5,y:-12.2},0).wait(1).to({scaleY:0.97,skewX:4.5,skewY:7.7,x:148.6,y:-11.9},0).wait(1).to({scaleY:0.97,skewX:4.6,skewY:7.8,x:148.7,y:-11.7},0).wait(1).to({skewX:4.7,skewY:8,x:148.8,y:-11.5},0).wait(1).to({scaleY:0.97,skewY:8.1,x:148.9,y:-11.3},0).wait(1).to({skewX:4.8,skewY:8.2,x:149,y:-11.2},0).wait(1).to({scaleY:0.97,skewX:4.9,skewY:8.3,x:149.1,y:-11},0).wait(1).to({skewY:8.4,x:149.2},0).wait(1).to({y:-10.9},0).wait(1).to({skewY:8.5,x:149.1,y:-10.8},0).wait(1).to({regX:0,regY:0,x:110.1,y:80.7},0).wait(1).to({regX:31,regY:-99.5,x:149.1,y:-11},0).wait(1).to({skewY:8.4},0).wait(1).to({skewY:8.3,y:-11.1},0).wait(1).to({scaleY:0.97,skewX:4.8,skewY:8.2,x:149,y:-11.2},0).wait(1).to({skewX:4.7,skewY:8.1,x:148.9,y:-11.4},0).wait(1).to({scaleY:0.97,skewY:8,x:148.8,y:-11.6},0).wait(1).to({skewX:4.6,skewY:7.8,x:148.7,y:-11.8},0).wait(1).to({scaleY:0.97,skewX:4.4,skewY:7.6,x:148.5,y:-12.1},0).wait(1).to({scaleY:0.97,skewX:4.3,skewY:7.4,x:148.4,y:-12.3},0).wait(1).to({scaleY:0.98,skewX:4.2,skewY:7.2,x:148.2,y:-12.7},0).wait(1).to({scaleY:0.98,skewX:4,skewY:6.9,x:147.9,y:-13.1},0).wait(1).to({scaleY:0.98,skewX:3.8,skewY:6.6,x:147.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:3.6,skewY:6.2,x:147.5,y:-13.9},0).wait(1).to({scaleY:0.98,skewX:3.4,skewY:5.9,x:147.2,y:-14.3},0).wait(1).to({scaleY:0.98,skewX:3.2,skewY:5.5,x:147,y:-14.8},0).wait(1).to({scaleY:0.98,skewX:3,skewY:5.2,x:146.6,y:-15.3},0).wait(1).to({scaleY:0.98,skewX:2.8,skewY:4.8,x:146.4,y:-15.8},0).wait(1).to({scaleY:0.99,skewX:2.5,skewY:4.4,x:146,y:-16.3},0).wait(1).to({scaleY:0.99,skewX:2.3,skewY:4,x:145.7,y:-16.8},0).wait(1).to({scaleY:0.99,skewX:2.1,skewY:3.6,x:145.4,y:-17.4},0).wait(1).to({scaleY:0.99,skewX:1.8,skewY:3.2,x:145,y:-17.9},0).wait(1).to({scaleY:0.99,skewX:1.6,skewY:2.8,x:144.8,y:-18.4},0).wait(1).to({scaleY:0.99,skewX:1.4,skewY:2.4,x:144.5,y:-18.8},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:1.2,skewY:2.1,x:144.2,y:-19.3},0).wait(1).to({scaleY:0.99,skewX:1,skewY:1.8,x:143.9,y:-19.7},0).wait(1).to({scaleY:1,skewX:0.9,skewY:1.5,x:143.7,y:-20},0).wait(1).to({scaleY:1,skewX:0.7,skewY:1.2,x:143.4,y:-20.4},0).wait(1).to({scaleY:1,skewX:0.6,skewY:1,x:143.2,y:-20.7},0).wait(1).to({skewX:0.4,skewY:0.8,x:143,y:-21},0).wait(1).to({scaleY:1,skewX:0.3,skewY:0.6,x:142.9,y:-21.2},0).wait(1).to({scaleY:1,skewX:0.2,skewY:0.4,x:142.7,y:-21.4},0).wait(1).to({skewY:0.3,y:-21.5},0).wait(1).to({skewX:0.1,skewY:0.2,x:142.6,y:-21.7},0).wait(1).to({scaleY:1,rotation:0.1,skewX:0,skewY:0,x:142.5,y:-21.8},0).wait(1).to({rotation:0,x:142.4,y:-21.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:111.5,y:77.7},0).wait(1).to({startPosition:0},0).wait(1).to({regX:31,regY:-99.5,x:142.4,y:-21.8},0).wait(1).to({x:142.5},0).wait(1).to({skewX:0.1,skewY:0.1,y:-21.7},0).wait(1).to({scaleY:1,skewY:0.2,x:142.6,y:-21.6},0).wait(1).to({skewX:0.2,skewY:0.3,x:142.7,y:-21.5},0).wait(1).to({skewY:0.4,x:142.8,y:-21.3},0).wait(1).to({scaleY:1,skewX:0.3,skewY:0.6,x:142.9,y:-21.1},0).wait(1).to({scaleY:1,skewX:0.4,skewY:0.7,x:143.1,y:-20.9},0).wait(1).to({skewX:0.5,skewY:0.9,x:143.3,y:-20.7},0).wait(1).to({scaleY:1,skewX:0.7,skewY:1.1,x:143.4,y:-20.4},0).wait(1).to({scaleY:1,skewX:0.8,skewY:1.4,x:143.6,y:-20.1},0).wait(1).to({scaleY:0.99,skewX:1,skewY:1.6,x:143.8,y:-19.8},0).wait(1).to({scaleY:0.99,skewX:1.1,skewY:1.9,x:144.1,y:-19.4},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:1.3,skewY:2.2,x:144.3,y:-19.1},0).wait(1).to({scaleY:0.99,skewX:1.5,skewY:2.5,x:144.6,y:-18.6},0).wait(1).to({scaleY:0.99,skewX:1.7,skewY:2.9,x:144.9,y:-18.2},0).wait(1).to({scaleY:0.99,skewX:1.9,skewY:3.2,x:145.1,y:-17.7},0).wait(1).to({scaleY:0.99,skewX:2.1,skewY:3.6,x:145.4,y:-17.3},0).wait(1).to({scaleY:0.99,skewX:2.3,skewY:4,x:145.7,y:-16.8},0).wait(1).to({scaleY:0.99,skewX:2.5,skewY:4.3,x:146,y:-16.3},0).wait(1).to({scaleY:0.98,skewX:2.7,skewY:4.7,x:146.3,y:-15.9},0).wait(1).to({scaleY:0.98,skewX:3,skewY:5.1,x:146.6,y:-15.4},0).wait(1).to({scaleY:0.98,skewX:3.2,skewY:5.4,x:146.9,y:-14.9},0).wait(1).to({scaleY:0.98,skewX:3.4,skewY:5.8,x:147.2,y:-14.5},0).wait(1).to({scaleY:0.98,skewX:3.6,skewY:6.1,x:147.4,y:-14},0).wait(1).to({scaleY:0.98,skewX:3.7,skewY:6.4,x:147.7,y:-13.6},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:3.9,skewY:6.7,x:147.9,y:-13.2},0).wait(1).to({scaleY:0.98,skewX:4.1,skewY:7,x:148.1,y:-12.9},0).wait(1).to({scaleY:0.97,skewX:4.2,skewY:7.2,x:148.3,y:-12.5},0).wait(1).to({skewX:4.3,skewY:7.5,x:148.5,y:-12.2},0).wait(1).to({scaleY:0.97,skewX:4.5,skewY:7.7,x:148.6,y:-11.9},0).wait(1).to({scaleY:0.97,skewX:4.6,skewY:7.8,x:148.7,y:-11.7},0).wait(1).to({skewX:4.7,skewY:8,x:148.8,y:-11.5},0).wait(1).to({scaleY:0.97,skewY:8.1,x:148.9,y:-11.3},0).wait(1).to({skewX:4.8,skewY:8.2,x:149,y:-11.2},0).wait(1).to({scaleY:0.97,skewX:4.9,skewY:8.3,x:149.1,y:-11},0).wait(1).to({skewY:8.4,x:149.2},0).wait(1).to({y:-10.9},0).wait(1).to({skewY:8.5,x:149.1,y:-10.8},0).wait(1).to({regX:0,regY:0,x:110.1,y:80.7},0).wait(1).to({regX:31,regY:-99.5,x:149.1,y:-11},0).wait(1).to({skewY:8.4},0).wait(1).to({skewY:8.3,y:-11.1},0).wait(1).to({scaleY:0.97,skewX:4.8,skewY:8.2,x:149,y:-11.2},0).wait(1).to({skewX:4.7,skewY:8.1,x:148.9,y:-11.4},0).wait(1).to({scaleY:0.97,skewY:8,x:148.8,y:-11.6},0).wait(1).to({skewX:4.6,skewY:7.8,x:148.7,y:-11.8},0).wait(1).to({scaleY:0.97,skewX:4.4,skewY:7.6,x:148.5,y:-12.1},0).wait(1).to({scaleY:0.97,skewX:4.3,skewY:7.4,x:148.4,y:-12.3},0).wait(1).to({scaleY:0.98,skewX:4.2,skewY:7.2,x:148.2,y:-12.7},0).wait(1).to({scaleY:0.98,skewX:4,skewY:6.9,x:147.9,y:-13.1},0).wait(1).to({scaleY:0.98,skewX:3.8,skewY:6.6,x:147.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:3.6,skewY:6.2,x:147.5,y:-13.9},0).wait(1).to({scaleY:0.98,skewX:3.4,skewY:5.9,x:147.2,y:-14.3},0).wait(1).to({scaleY:0.98,skewX:3.2,skewY:5.5,x:147,y:-14.8},0).wait(1).to({scaleY:0.98,skewX:3,skewY:5.2,x:146.6,y:-15.3},0).wait(1).to({scaleY:0.98,skewX:2.8,skewY:4.8,x:146.4,y:-15.8},0).wait(1).to({scaleY:0.99,skewX:2.5,skewY:4.4,x:146,y:-16.3},0).wait(1).to({scaleY:0.99,skewX:2.3,skewY:4,x:145.7,y:-16.8},0).wait(1).to({scaleY:0.99,skewX:2.1,skewY:3.6,x:145.4,y:-17.4},0).wait(1).to({scaleY:0.99,skewX:1.8,skewY:3.2,x:145,y:-17.9},0).wait(1).to({scaleY:0.99,skewX:1.6,skewY:2.8,x:144.8,y:-18.4},0).wait(1).to({scaleY:0.99,skewX:1.4,skewY:2.4,x:144.5,y:-18.8},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:1.2,skewY:2.1,x:144.2,y:-19.3},0).wait(1).to({scaleY:0.99,skewX:1,skewY:1.8,x:143.9,y:-19.7},0).wait(1).to({scaleY:1,skewX:0.9,skewY:1.5,x:143.7,y:-20},0).wait(1).to({scaleY:1,skewX:0.7,skewY:1.2,x:143.4,y:-20.4},0).wait(1).to({scaleY:1,skewX:0.6,skewY:1,x:143.2,y:-20.7},0).wait(1).to({skewX:0.4,skewY:0.8,x:143,y:-21},0).wait(1).to({scaleY:1,skewX:0.3,skewY:0.6,x:142.9,y:-21.2},0).wait(1).to({scaleY:1,skewX:0.2,skewY:0.4,x:142.7,y:-21.4},0).wait(1).to({skewY:0.3,y:-21.5},0).wait(1).to({skewX:0.1,skewY:0.2,x:142.6,y:-21.7},0).wait(1).to({scaleY:1,rotation:0.1,skewX:0,skewY:0,x:142.5,y:-21.8},0).wait(1).to({rotation:0,x:142.4,y:-21.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:111.5,y:77.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.1,-180.3,450.6,339.2);


// stage content:
(lib.Maury = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Maury_1();
	this.instance.parent = this;
	this.instance.setTransform(227,171.5,1,1,0,0,0,-6.9,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.8,172.9,450.6,339.2);
// library properties:
lib.properties = {
	id: '222EB632A5DC40A9A30CAD15E791B016',
	width: 454,
	height: 342,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/maury_atlas_.png?1499358124043", id:"maury_atlas_"}
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
an.compositions['222EB632A5DC40A9A30CAD15E791B016'] = {
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