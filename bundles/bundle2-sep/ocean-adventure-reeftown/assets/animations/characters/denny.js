(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"denny_atlas_", frames: [[0,39,23,15],[106,31,18,23],[0,0,43,37],[0,77,19,9],[25,39,11,13],[95,0,30,29],[48,56,28,27],[45,0,48,31],[0,56,46,19],[110,56,15,23],[78,56,30,21],[45,33,59,21]]}
];


// symbols:



(lib.ClawFarBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ClawNearBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DennyBodyBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DennyEyelidsBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.DennyNoseBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.DennyTailBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.LegsFarBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LegsNearBMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Whisker1BMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Whisker3BMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Whisker4BMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Whisker2BMP = function() {
	this.spriteSheet = ss["denny_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.DennyWhisker4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Whisker4BMP();
	this.instance.parent = this;
	this.instance.setTransform(-1,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-20,30,21);


(lib.DennyWhisker3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Whisker3BMP();
	this.instance.parent = this;
	this.instance.setTransform(0,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-23,15,23);


(lib.DennyWhisker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Whisker2BMP();
	this.instance.parent = this;
	this.instance.setTransform(-58,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-14,59,21);


(lib.DennyWhisker1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Whisker1BMP();
	this.instance.parent = this;
	this.instance.setTransform(-46,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-17,46,19);


(lib.DennyTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.DennyTailBMP();
	this.instance.parent = this;
	this.instance.setTransform(-21,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-27,30,29);


(lib.DennyNose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.DennyNoseBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,13);


(lib.DennyLegsnear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.LegsNearBMP();
	this.instance.parent = this;
	this.instance.setTransform(-42,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-4,48,31);


(lib.DennyLegsFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.LegsFarBMP();
	this.instance.parent = this;
	this.instance.setTransform(-7,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-5,28,27);


(lib.DennyEyelids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.DennyEyelidsBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,9);


(lib.DennyClawNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ClawNearBMP();
	this.instance.parent = this;
	this.instance.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,18,23);


(lib.DennyClawFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.ClawFarBMP();
	this.instance.parent = this;
	this.instance.setTransform(-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1,23,15);


(lib.DennyBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.DennyBodyBMP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,37);


(lib.Denny_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Default:0,Blink:7,Idle:15,IdleBlink:55});

	// timeline functions:
	this.frame_94 = function() {
		this.gotoAndPlay("Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// Denny Nose
	this.instance = new lib.DennyNose("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19,2.4,1,1,0,0,0,5.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regY:6.5,y:2.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.1},0).wait(1).to({y:2.6},0).wait(1).to({rotation:0.2,y:2.5},0).wait(1).to({rotation:0.3,x:18.9,y:2.4},0).wait(1).to({rotation:0.4,y:2.3},0).wait(1).to({rotation:0.5,x:19,y:2.2},0).wait(1).to({rotation:0.6,y:2},0).wait(1).to({rotation:0.7,x:18.9,y:1.9},0).wait(1).to({rotation:0.8,y:1.8},0).wait(1).to({rotation:0.9,x:19,y:1.6},0).wait(1).to({rotation:1,y:1.5},0).wait(1).to({rotation:1.1,y:1.4},0).wait(1).to({x:18.9,y:1.3},0).wait(1).to({rotation:1.2},0).wait(1).to({y:1.2},0).wait(1).to({startPosition:0},0).wait(1).to({regY:6.2,y:0.9},0).wait(1).to({regY:6.5,y:1.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:1.3},0).wait(1).to({rotation:1.1},0).wait(1).to({y:1.4},0).wait(1).to({rotation:1,y:1.5},0).wait(1).to({rotation:0.9,y:1.6},0).wait(1).to({rotation:0.8,y:1.8},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.6,y:2},0).wait(1).to({rotation:0.5,y:2.1},0).wait(1).to({rotation:0.4,y:2.3},0).wait(1).to({rotation:0.3,y:2.4},0).wait(1).to({rotation:0.2,y:2.5},0).wait(1).to({rotation:0.1,y:2.6},0).wait(1).to({startPosition:0},0).wait(1).to({y:2.7},0).wait(1).to({rotation:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:6.2,x:19,y:2.4},0).wait(1).to({startPosition:0},0).wait(1).to({regY:6.5,y:2.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.1},0).wait(1).to({y:2.6},0).wait(1).to({rotation:0.2,y:2.5},0).wait(1).to({rotation:0.3,x:18.9,y:2.4},0).wait(1).to({rotation:0.4,y:2.3},0).wait(1).to({rotation:0.5,x:19,y:2.2},0).wait(1).to({rotation:0.6,y:2},0).wait(1).to({rotation:0.7,x:18.9,y:1.9},0).wait(1).to({rotation:0.8,y:1.8},0).wait(1).to({rotation:0.9,x:19,y:1.6},0).wait(1).to({rotation:1,y:1.5},0).wait(1).to({rotation:1.1,y:1.4},0).wait(1).to({x:18.9,y:1.3},0).wait(1).to({rotation:1.2},0).wait(1).to({y:1.2},0).wait(1).to({startPosition:0},0).wait(1).to({regY:6.2,y:0.9},0).wait(1).to({regY:6.5,y:1.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:1.3},0).wait(1).to({rotation:1.1},0).wait(1).to({y:1.4},0).wait(1).to({rotation:1,y:1.5},0).wait(1).to({rotation:0.9,y:1.6},0).wait(1).to({rotation:0.8,y:1.8},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.6,y:2},0).wait(1).to({rotation:0.5,y:2.1},0).wait(1).to({rotation:0.4,y:2.3},0).wait(1).to({rotation:0.3,y:2.4},0).wait(1).to({rotation:0.2,y:2.5},0).wait(1).to({rotation:0.1,y:2.6},0).wait(1).to({startPosition:0},0).wait(1).to({y:2.7},0).wait(1).to({rotation:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:6.2,x:19,y:2.4},0).wait(1));

	// Denny Eyelids
	this.instance_1 = new lib.DennyEyelids("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.3,-2.5,1,1,0,0,0,9.6,3.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},7).wait(54).to({_off:false,regX:9.7,rotation:2.8,x:9.7,y:-3.8},0).wait(1).to({regX:9.5,regY:4.5,rotation:3,x:9.4,y:-3.2},0).wait(1).to({rotation:3.2,y:-3.3},0).wait(1).to({rotation:3.3},0).wait(1).to({rotation:3.4,y:-3.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:9.7,regY:3.9,rotation:3.5,x:9.7,y:-4.1},0).wait(1).to({regX:9.5,regY:4.5,rotation:3.4,x:9.4,y:-3.5},0).wait(1).to({rotation:3.3,y:-3.4},0).wait(1).to({rotation:3.2},0).wait(1).to({regX:9.7,regY:3.9,rotation:3,x:9.6,y:-4},0).to({_off:true},1).wait(16));

	// Denny Whisker 4
	this.instance_2 = new lib.DennyWhisker4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.5,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:14,regY:-9.5,rotation:0.1,x:31.5,y:-6.6},0).wait(1).to({rotation:0,skewX:0.3,skewY:0.4},0).wait(1).to({skewX:0.6,skewY:0.8,x:31.6,y:-6.5},0).wait(1).to({skewX:1.1,skewY:1.4,x:31.7},0).wait(1).to({skewX:1.7,skewY:2.1,x:31.8,y:-6.4},0).wait(1).to({skewX:2.4,skewY:3,x:31.9,y:-6.2},0).wait(1).to({skewX:3.3,skewY:4.1,x:32,y:-6.1},0).wait(1).to({skewX:4.3,skewY:5.3,x:32.1,y:-5.9},0).wait(1).to({scaleX:1,skewX:5.3,skewY:6.6,x:32.3,y:-5.7},0).wait(1).to({skewX:6.4,skewY:7.9,x:32.4,y:-5.6},0).wait(1).to({skewX:7.4,skewY:9.1,x:32.6,y:-5.4},0).wait(1).to({skewX:8.4,skewY:10.3,x:32.7,y:-5.2},0).wait(1).to({skewX:9.2,skewY:11.3,y:-5.1},0).wait(1).to({skewX:9.9,skewY:12.2,x:32.8,y:-4.9},0).wait(1).to({skewX:10.5,skewY:12.9,x:32.9,y:-4.8},0).wait(1).to({skewX:10.9,skewY:13.5},0).wait(1).to({skewX:11.2,skewY:13.8,y:-4.6},0).wait(1).to({skewX:11.4,skewY:14.1,x:33},0).wait(1).to({regX:0.1,regY:0,skewX:11.5,x:17.5,y:1.3},0).wait(1).to({regX:14,regY:-9.5,skewX:11.4,skewY:14,x:32.9,y:-4.6},0).wait(1).to({skewX:11.2,skewY:13.8,x:32.8,y:-4.7},0).wait(1).to({skewX:10.9,skewY:13.4,y:-4.8},0).wait(1).to({skewX:10.5,skewY:12.9},0).wait(1).to({skewX:9.9,skewY:12.2,x:32.7,y:-4.9},0).wait(1).to({skewX:9.3,skewY:11.4,y:-5.1},0).wait(1).to({skewX:8.5,skewY:10.4,x:32.6,y:-5.2},0).wait(1).to({skewX:7.6,skewY:9.3,x:32.4,y:-5.4},0).wait(1).to({skewX:6.6,skewY:8.2,x:32.3,y:-5.5},0).wait(1).to({skewX:5.6,skewY:6.9,x:32.2,y:-5.7},0).wait(1).to({scaleX:1,skewX:4.6,skewY:5.7,x:32.1,y:-5.8},0).wait(1).to({skewX:3.7,skewY:4.5,x:31.9,y:-6.1},0).wait(1).to({skewX:2.8,skewY:3.4,x:31.8,y:-6.2},0).wait(1).to({skewX:2,skewY:2.5,x:31.7,y:-6.3},0).wait(1).to({skewX:1.4,skewY:1.7,x:31.6,y:-6.4},0).wait(1).to({skewX:0.9,skewY:1.1,x:31.5,y:-6.5},0).wait(1).to({skewX:0.5,skewY:0.6,y:-6.6},0).wait(1).to({rotation:0.2,skewX:0,skewY:0,x:31.4},0).wait(1).to({rotation:0,y:-6.7},0).wait(1).to({regX:0,regY:0,x:17.5,y:2.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:14,regY:-9.5,rotation:0.1,x:31.5,y:-6.6},0).wait(1).to({rotation:0,skewX:0.3,skewY:0.4},0).wait(1).to({skewX:0.6,skewY:0.8,x:31.6,y:-6.5},0).wait(1).to({skewX:1.1,skewY:1.4,x:31.7},0).wait(1).to({skewX:1.7,skewY:2.1,x:31.8,y:-6.4},0).wait(1).to({skewX:2.4,skewY:3,x:31.9,y:-6.2},0).wait(1).to({skewX:3.3,skewY:4.1,x:32,y:-6.1},0).wait(1).to({skewX:4.3,skewY:5.3,x:32.1,y:-5.9},0).wait(1).to({scaleX:1,skewX:5.3,skewY:6.6,x:32.3,y:-5.7},0).wait(1).to({skewX:6.4,skewY:7.9,x:32.4,y:-5.6},0).wait(1).to({skewX:7.4,skewY:9.1,x:32.6,y:-5.4},0).wait(1).to({skewX:8.4,skewY:10.3,x:32.7,y:-5.2},0).wait(1).to({skewX:9.2,skewY:11.3,y:-5.1},0).wait(1).to({skewX:9.9,skewY:12.2,x:32.8,y:-4.9},0).wait(1).to({skewX:10.5,skewY:12.9,x:32.9,y:-4.8},0).wait(1).to({skewX:10.9,skewY:13.5},0).wait(1).to({skewX:11.2,skewY:13.8,y:-4.6},0).wait(1).to({skewX:11.4,skewY:14.1,x:33},0).wait(1).to({regX:0.1,regY:0,skewX:11.5,x:17.5,y:1.3},0).wait(1).to({regX:14,regY:-9.5,skewX:11.4,skewY:14,x:32.9,y:-4.6},0).wait(1).to({skewX:11.2,skewY:13.8,x:32.8,y:-4.7},0).wait(1).to({skewX:10.9,skewY:13.4,y:-4.8},0).wait(1).to({skewX:10.5,skewY:12.9},0).wait(1).to({skewX:9.9,skewY:12.2,x:32.7,y:-4.9},0).wait(1).to({skewX:9.3,skewY:11.4,y:-5.1},0).wait(1).to({skewX:8.5,skewY:10.4,x:32.6,y:-5.2},0).wait(1).to({skewX:7.6,skewY:9.3,x:32.4,y:-5.4},0).wait(1).to({skewX:6.6,skewY:8.2,x:32.3,y:-5.5},0).wait(1).to({skewX:5.6,skewY:6.9,x:32.2,y:-5.7},0).wait(1).to({scaleX:1,skewX:4.6,skewY:5.7,x:32.1,y:-5.8},0).wait(1).to({skewX:3.7,skewY:4.5,x:31.9,y:-6.1},0).wait(1).to({skewX:2.8,skewY:3.4,x:31.8,y:-6.2},0).wait(1).to({skewX:2,skewY:2.5,x:31.7,y:-6.3},0).wait(1).to({skewX:1.4,skewY:1.7,x:31.6,y:-6.4},0).wait(1).to({skewX:0.9,skewY:1.1,x:31.5,y:-6.5},0).wait(1).to({skewX:0.5,skewY:0.6,y:-6.6},0).wait(1).to({rotation:0.2,skewX:0,skewY:0,x:31.4},0).wait(1).to({rotation:0,y:-6.7},0).wait(1).to({regX:0,regY:0,x:17.5,y:2.9},0).wait(1));

	// Denny Whisker 2
	this.instance_3 = new lib.DennyWhisker2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-28.5,regY:-3.5,x:-18.6,y:1},0).wait(1).to({rotation:-0.1,y:1.1},0).wait(1).to({rotation:0,skewX:-0.3,skewY:-0.3},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:1.2},0).wait(1).to({skewX:-0.7,skewY:-0.9},0).wait(1).to({skewX:-1,skewY:-1.3,y:1.3},0).wait(1).to({skewX:-1.4,skewY:-1.8,x:-18.7,y:1.5},0).wait(1).to({skewX:-1.8,skewY:-2.4,y:1.6},0).wait(1).to({skewX:-2.2,skewY:-2.9,y:1.7},0).wait(1).to({skewX:-2.6,skewY:-3.5,y:1.9},0).wait(1).to({skewX:-3.1,skewY:-4.1,y:2},0).wait(1).to({skewX:-3.5,skewY:-4.6,y:2.1},0).wait(1).to({skewX:-3.8,skewY:-5.1,y:2.2},0).wait(1).to({skewX:-4.1,skewY:-5.5,y:2.3},0).wait(1).to({skewX:-4.3,skewY:-5.8},0).wait(1).to({skewX:-4.5,skewY:-6,y:2.4},0).wait(1).to({skewX:-4.6,skewY:-6.2},0).wait(1).to({skewX:-4.7,skewY:-6.3,y:2.5},0).wait(1).to({regX:0,regY:0,x:9.9,y:2.8},0).wait(1).to({regX:-28.5,regY:-3.5,x:-18.8,y:2.4},0).wait(1).to({skewX:-4.6,skewY:-6.2},0).wait(1).to({skewX:-4.5,skewY:-6},0).wait(1).to({skewX:-4.3,skewY:-5.8,y:2.3},0).wait(1).to({skewX:-4.1,skewY:-5.5,y:2.2},0).wait(1).to({skewX:-3.8,skewY:-5.1},0).wait(1).to({skewX:-3.5,skewY:-4.7,y:2},0).wait(1).to({skewX:-3.1,skewY:-4.2,y:1.9},0).wait(1).to({skewX:-2.7,skewY:-3.6,y:1.8},0).wait(1).to({skewX:-2.3,skewY:-3.1,y:1.7},0).wait(1).to({skewX:-1.9,skewY:-2.5,y:1.6},0).wait(1).to({skewX:-1.5,skewY:-2,y:1.5},0).wait(1).to({skewX:-1.2,skewY:-1.5,x:-18.7,y:1.3},0).wait(1).to({skewX:-0.8,skewY:-1.1,y:1.2},0).wait(1).to({skewX:-0.6,skewY:-0.8},0).wait(1).to({skewX:-0.4,skewY:-0.5,y:1.1},0).wait(1).to({skewX:-0.2,skewY:-0.3},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:1},0).wait(1).to({rotation:0},0).wait(1).to({regX:0,regY:0,x:9.9,y:4.6},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-28.5,regY:-3.5,x:-18.6,y:1},0).wait(1).to({rotation:-0.1,y:1.1},0).wait(1).to({rotation:0,skewX:-0.3,skewY:-0.3},0).wait(1).to({skewX:-0.5,skewY:-0.6,y:1.2},0).wait(1).to({skewX:-0.7,skewY:-0.9},0).wait(1).to({skewX:-1,skewY:-1.3,y:1.3},0).wait(1).to({skewX:-1.4,skewY:-1.8,x:-18.7,y:1.5},0).wait(1).to({skewX:-1.8,skewY:-2.4,y:1.6},0).wait(1).to({skewX:-2.2,skewY:-2.9,y:1.7},0).wait(1).to({skewX:-2.6,skewY:-3.5,y:1.9},0).wait(1).to({skewX:-3.1,skewY:-4.1,y:2},0).wait(1).to({skewX:-3.5,skewY:-4.6,y:2.1},0).wait(1).to({skewX:-3.8,skewY:-5.1,y:2.2},0).wait(1).to({skewX:-4.1,skewY:-5.5,y:2.3},0).wait(1).to({skewX:-4.3,skewY:-5.8},0).wait(1).to({skewX:-4.5,skewY:-6,y:2.4},0).wait(1).to({skewX:-4.6,skewY:-6.2},0).wait(1).to({skewX:-4.7,skewY:-6.3,y:2.5},0).wait(1).to({regX:0,regY:0,x:9.9,y:2.8},0).wait(1).to({regX:-28.5,regY:-3.5,x:-18.8,y:2.4},0).wait(1).to({skewX:-4.6,skewY:-6.2},0).wait(1).to({skewX:-4.5,skewY:-6},0).wait(1).to({skewX:-4.3,skewY:-5.8,y:2.3},0).wait(1).to({skewX:-4.1,skewY:-5.5,y:2.2},0).wait(1).to({skewX:-3.8,skewY:-5.1},0).wait(1).to({skewX:-3.5,skewY:-4.7,y:2},0).wait(1).to({skewX:-3.1,skewY:-4.2,y:1.9},0).wait(1).to({skewX:-2.7,skewY:-3.6,y:1.8},0).wait(1).to({skewX:-2.3,skewY:-3.1,y:1.7},0).wait(1).to({skewX:-1.9,skewY:-2.5,y:1.6},0).wait(1).to({skewX:-1.5,skewY:-2,y:1.5},0).wait(1).to({skewX:-1.2,skewY:-1.5,x:-18.7,y:1.3},0).wait(1).to({skewX:-0.8,skewY:-1.1,y:1.2},0).wait(1).to({skewX:-0.6,skewY:-0.8},0).wait(1).to({skewX:-0.4,skewY:-0.5,y:1.1},0).wait(1).to({skewX:-0.2,skewY:-0.3},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,y:1},0).wait(1).to({rotation:0},0).wait(1).to({regX:0,regY:0,x:9.9,y:4.6},0).wait(1));

	// Denny Whisker 3
	this.instance_4 = new lib.DennyWhisker3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:7.5,regY:-11.5,rotation:0.1,x:24.9,y:-9},0).wait(1).to({rotation:0,skewX:0.3,skewY:0.2},0).wait(1).to({skewX:0.7,skewY:0.4,x:25},0).wait(1).to({scaleY:1,skewX:1.3,skewY:0.7,x:25.1},0).wait(1).to({skewX:2,skewY:1,x:25.3,y:-9.1},0).wait(1).to({skewX:2.8,skewY:1.5,x:25.4},0).wait(1).to({scaleY:1,skewX:3.8,skewY:2,x:25.6,y:-9.2},0).wait(1).to({skewX:4.9,skewY:2.6,x:25.9},0).wait(1).to({scaleY:1,skewX:6.1,skewY:3.2,x:26.1,y:-9.3},0).wait(1).to({skewX:7.3,skewY:3.9,x:26.3},0).wait(1).to({scaleY:1,skewX:8.5,skewY:4.5,x:26.6},0).wait(1).to({skewX:9.6,skewY:5.1,x:26.8,y:-9.4},0).wait(1).to({scaleY:1,skewX:10.6,skewY:5.6,x:27,y:-9.3},0).wait(1).to({skewX:11.4,skewY:6,x:27.2,y:-9.4},0).wait(1).to({skewX:12.1,skewY:6.4,x:27.3},0).wait(1).to({scaleY:1.01,skewX:12.6,skewY:6.6,x:27.4},0).wait(1).to({skewX:12.9,skewY:6.8,x:27.5},0).wait(1).to({skewX:13.1,skewY:6.9},0).wait(1).to({regX:0,regY:0,skewX:13.2,x:17.4,y:0.9},0).wait(1).to({regX:7.5,regY:-11.5,skewX:13.1,x:27.4,y:-9.4},0).wait(1).to({skewX:12.8,skewY:6.8,y:-9.5},0).wait(1).to({skewX:12.5,skewY:6.6,x:27.3},0).wait(1).to({scaleY:1,skewX:12,skewY:6.3,x:27.2,y:-9.4},0).wait(1).to({skewX:11.4,skewY:6,x:27.1},0).wait(1).to({skewX:10.6,skewY:5.6,x:27},0).wait(1).to({scaleY:1,skewX:9.7,skewY:5.1,x:26.8},0).wait(1).to({skewX:8.7,skewY:4.6,x:26.6},0).wait(1).to({scaleY:1,skewX:7.6,skewY:4,x:26.4},0).wait(1).to({skewX:6.4,skewY:3.4,x:26.1,y:-9.3},0).wait(1).to({scaleY:1,skewX:5.3,skewY:2.8,x:25.9},0).wait(1).to({skewX:4.2,skewY:2.2,x:25.7,y:-9.2},0).wait(1).to({scaleY:1,skewX:3.2,skewY:1.7,x:25.5},0).wait(1).to({skewX:2.3,skewY:1.2,x:25.3},0).wait(1).to({skewX:1.6,skewY:0.8,x:25.1,y:-9.1},0).wait(1).to({scaleY:1,skewX:1,skewY:0.5,x:25},0).wait(1).to({skewX:0.5,skewY:0.3,x:24.9},0).wait(1).to({skewX:0.2,skewY:0.1},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:24.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:17.4,y:2.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:7.5,regY:-11.5,rotation:0.1,x:24.9,y:-9},0).wait(1).to({rotation:0,skewX:0.3,skewY:0.2},0).wait(1).to({skewX:0.7,skewY:0.4,x:25},0).wait(1).to({scaleY:1,skewX:1.3,skewY:0.7,x:25.1},0).wait(1).to({skewX:2,skewY:1,x:25.3,y:-9.1},0).wait(1).to({skewX:2.8,skewY:1.5,x:25.4},0).wait(1).to({scaleY:1,skewX:3.8,skewY:2,x:25.6,y:-9.2},0).wait(1).to({skewX:4.9,skewY:2.6,x:25.9},0).wait(1).to({scaleY:1,skewX:6.1,skewY:3.2,x:26.1,y:-9.3},0).wait(1).to({skewX:7.3,skewY:3.9,x:26.3},0).wait(1).to({scaleY:1,skewX:8.5,skewY:4.5,x:26.6},0).wait(1).to({skewX:9.6,skewY:5.1,x:26.8,y:-9.4},0).wait(1).to({scaleY:1,skewX:10.6,skewY:5.6,x:27,y:-9.3},0).wait(1).to({skewX:11.4,skewY:6,x:27.2,y:-9.4},0).wait(1).to({skewX:12.1,skewY:6.4,x:27.3},0).wait(1).to({scaleY:1.01,skewX:12.6,skewY:6.6,x:27.4},0).wait(1).to({skewX:12.9,skewY:6.8,x:27.5},0).wait(1).to({skewX:13.1,skewY:6.9},0).wait(1).to({regX:0,regY:0,skewX:13.2,x:17.4,y:0.9},0).wait(1).to({regX:7.5,regY:-11.5,skewX:13.1,x:27.4,y:-9.4},0).wait(1).to({skewX:12.8,skewY:6.8,y:-9.5},0).wait(1).to({skewX:12.5,skewY:6.6,x:27.3},0).wait(1).to({scaleY:1,skewX:12,skewY:6.3,x:27.2,y:-9.4},0).wait(1).to({skewX:11.4,skewY:6,x:27.1},0).wait(1).to({skewX:10.6,skewY:5.6,x:27},0).wait(1).to({scaleY:1,skewX:9.7,skewY:5.1,x:26.8},0).wait(1).to({skewX:8.7,skewY:4.6,x:26.6},0).wait(1).to({scaleY:1,skewX:7.6,skewY:4,x:26.4},0).wait(1).to({skewX:6.4,skewY:3.4,x:26.1,y:-9.3},0).wait(1).to({scaleY:1,skewX:5.3,skewY:2.8,x:25.9},0).wait(1).to({skewX:4.2,skewY:2.2,x:25.7,y:-9.2},0).wait(1).to({scaleY:1,skewX:3.2,skewY:1.7,x:25.5},0).wait(1).to({skewX:2.3,skewY:1.2,x:25.3},0).wait(1).to({skewX:1.6,skewY:0.8,x:25.1,y:-9.1},0).wait(1).to({scaleY:1,skewX:1,skewY:0.5,x:25},0).wait(1).to({skewX:0.5,skewY:0.3,x:24.9},0).wait(1).to({skewX:0.2,skewY:0.1},0).wait(1).to({rotation:0.1,skewX:0,skewY:0,x:24.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:17.4,y:2.5},0).wait(1));

	// Denny Whiker1
	this.instance_5 = new lib.DennyWhisker1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-23,regY:-7.5,x:-13.1,y:-2.7},0).wait(1).to({rotation:-0.1,y:-2.6},0).wait(1).to({rotation:-0.2,x:-13.2},0).wait(1).to({rotation:-0.4,y:-2.7},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.2,x:-13.3},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-2,x:-13.4},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-3.1,x:-13.5},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.7,x:-13.6},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0,rotation:-4.3,x:9.9,y:3.1},0).wait(1).to({regX:-23,regY:-7.5,rotation:-4.2,x:-13.7,y:-2.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.4,x:-13.6},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-2.8,x:-13.5},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.7,x:-13.4},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8,x:-13.3},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.3,y:-2.6},0).wait(1).to({rotation:-0.2,x:-13.2,y:-2.7},0).wait(1).to({rotation:-0.1,y:-2.6},0).wait(1).to({rotation:0,y:-2.7},0).wait(1).to({regX:0,regY:0,x:9.9,y:4.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-23,regY:-7.5,x:-13.1,y:-2.7},0).wait(1).to({rotation:-0.1,y:-2.6},0).wait(1).to({rotation:-0.2,x:-13.2},0).wait(1).to({rotation:-0.4,y:-2.7},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.2,x:-13.3},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-2,x:-13.4},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-3.1,x:-13.5},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.7,x:-13.6},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0,rotation:-4.3,x:9.9,y:3.1},0).wait(1).to({regX:-23,regY:-7.5,rotation:-4.2,x:-13.7,y:-2.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.4,x:-13.6},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-2.8,x:-13.5},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.7,x:-13.4},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8,x:-13.3},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.3,y:-2.6},0).wait(1).to({rotation:-0.2,x:-13.2,y:-2.7},0).wait(1).to({rotation:-0.1,y:-2.6},0).wait(1).to({rotation:0,y:-2.7},0).wait(1).to({regX:0,regY:0,x:9.9,y:4.9},0).wait(1));

	// Denny Body
	this.instance_6 = new lib.DennyBody("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.7,5.8,1,1,0,0,0,36.4,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:21.5,regY:18.5,x:-2.1,y:-2.3},0).wait(1).to({y:-2.4},0).wait(1).to({rotation:0.1},0).wait(1).to({y:-2.5},0).wait(1).to({rotation:0.2,y:-2.6},0).wait(1).to({rotation:0.3,y:-2.7},0).wait(1).to({rotation:0.4,y:-2.9},0).wait(1).to({rotation:0.5,y:-3.1},0).wait(1).to({rotation:0.6,y:-3.2},0).wait(1).to({rotation:0.7,x:-2,y:-3.4},0).wait(1).to({rotation:0.8,y:-3.6},0).wait(1).to({rotation:0.9,x:-2.1,y:-3.7},0).wait(1).to({rotation:1,x:-2,y:-3.9},0).wait(1).to({rotation:1.1,y:-4},0).wait(1).to({y:-4.1},0).wait(1).to({rotation:1.2,y:-4.2},0).wait(1).to({y:-4.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:36.5,regY:26.6,x:12.8,y:4.1},0).wait(1).to({regX:21.5,regY:18.5,x:-2.1,y:-4.3},0).wait(1).to({y:-4.2},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:1.1,x:-2,y:-4.1},0).wait(1).to({x:-2.1,y:-4},0).wait(1).to({rotation:1,y:-3.9},0).wait(1).to({rotation:0.9,y:-3.8},0).wait(1).to({rotation:0.8,y:-3.6},0).wait(1).to({rotation:0.7,y:-3.5},0).wait(1).to({rotation:0.6,y:-3.3},0).wait(1).to({rotation:0.5,y:-3.1},0).wait(1).to({rotation:0.4,x:-2.2,y:-2.9},0).wait(1).to({rotation:0.3,y:-2.8},0).wait(1).to({rotation:0.2,y:-2.6},0).wait(1).to({rotation:0.1,y:-2.5},0).wait(1).to({y:-2.4},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0,y:-2.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:36.4,regY:26.6,x:12.7,y:5.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:21.5,regY:18.5,x:-2.1,y:-2.3},0).wait(1).to({y:-2.4},0).wait(1).to({rotation:0.1},0).wait(1).to({y:-2.5},0).wait(1).to({rotation:0.2,y:-2.6},0).wait(1).to({rotation:0.3,y:-2.7},0).wait(1).to({rotation:0.4,y:-2.9},0).wait(1).to({rotation:0.5,y:-3.1},0).wait(1).to({rotation:0.6,y:-3.2},0).wait(1).to({rotation:0.7,x:-2,y:-3.4},0).wait(1).to({rotation:0.8,y:-3.6},0).wait(1).to({rotation:0.9,x:-2.1,y:-3.7},0).wait(1).to({rotation:1,x:-2,y:-3.9},0).wait(1).to({rotation:1.1,y:-4},0).wait(1).to({y:-4.1},0).wait(1).to({rotation:1.2,y:-4.2},0).wait(1).to({y:-4.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:36.5,regY:26.6,x:12.8,y:4.1},0).wait(1).to({regX:21.5,regY:18.5,x:-2.1,y:-4.3},0).wait(1).to({y:-4.2},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:1.1,x:-2,y:-4.1},0).wait(1).to({x:-2.1,y:-4},0).wait(1).to({rotation:1,y:-3.9},0).wait(1).to({rotation:0.9,y:-3.8},0).wait(1).to({rotation:0.8,y:-3.6},0).wait(1).to({rotation:0.7,y:-3.5},0).wait(1).to({rotation:0.6,y:-3.3},0).wait(1).to({rotation:0.5,y:-3.1},0).wait(1).to({rotation:0.4,x:-2.2,y:-2.9},0).wait(1).to({rotation:0.3,y:-2.8},0).wait(1).to({rotation:0.2,y:-2.6},0).wait(1).to({rotation:0.1,y:-2.5},0).wait(1).to({y:-2.4},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0,y:-2.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:36.4,regY:26.6,x:12.7,y:5.8},0).wait(1));

	// Denny Claw Far
	this.instance_7 = new lib.DennyClawFar("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(8.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:9.5,regY:6.5,skewX:-0.2,skewY:-0.1,x:17.6,y:20.8},0).wait(1).to({skewX:-0.6,skewY:-0.4,y:20.7},0).wait(1).to({skewX:-1.2,skewY:-0.8,x:17.7,y:20.5},0).wait(1).to({scaleY:1,skewX:-2.1,skewY:-1.4,x:17.8,y:20.4},0).wait(1).to({skewX:-3.2,skewY:-2.1,x:17.9,y:20.2},0).wait(1).to({scaleY:1,skewX:-4.6,skewY:-3.1,x:18.1,y:19.9},0).wait(1).to({skewX:-6.2,skewY:-4.2,x:18.2,y:19.5},0).wait(1).to({scaleY:1,skewX:-8.1,skewY:-5.4,x:18.4,y:19.1},0).wait(1).to({scaleY:1,skewX:-10,skewY:-6.7,x:18.7,y:18.7},0).wait(1).to({skewX:-12,skewY:-8,x:18.8,y:18.3},0).wait(1).to({scaleY:1,skewX:-13.9,skewY:-9.3,x:19,y:17.8},0).wait(1).to({scaleY:1.01,skewX:-15.7,skewY:-10.5,x:19.2,y:17.4},0).wait(1).to({skewX:-17.3,skewY:-11.6,x:19.4,y:17.1},0).wait(1).to({scaleY:1.01,skewX:-18.7,skewY:-12.5,x:19.5,y:16.7},0).wait(1).to({skewX:-19.8,skewY:-13.2,x:19.6,y:16.5},0).wait(1).to({skewX:-20.6,skewY:-13.8,x:19.7,y:16.3},0).wait(1).to({scaleY:1.01,skewX:-21.1,skewY:-14.2,y:16.2},0).wait(1).to({skewX:-21.5,skewY:-14.4,y:16.1},0).wait(1).to({regX:0,regY:0,skewX:-21.6,x:8.1,y:12.3},0).wait(1).to({regX:9.5,regY:6.5,skewX:-21.4,skewY:-14.3,x:19.6,y:16.1},0).wait(1).to({skewX:-21.1,skewY:-14.1},0).wait(1).to({scaleY:1.01,skewX:-20.5,skewY:-13.7,y:16.3},0).wait(1).to({skewX:-19.7,skewY:-13.2,x:19.5,y:16.5},0).wait(1).to({skewX:-18.7,skewY:-12.5,x:19.4,y:16.7},0).wait(1).to({scaleY:1.01,skewX:-17.4,skewY:-11.7,x:19.3,y:17},0).wait(1).to({skewX:-15.9,skewY:-10.7,x:19.2,y:17.4},0).wait(1).to({scaleY:1,skewX:-14.3,skewY:-9.5,x:19,y:17.7},0).wait(1).to({skewX:-12.4,skewY:-8.3,x:18.8,y:18.1},0).wait(1).to({scaleY:1,skewX:-10.6,skewY:-7.1,x:18.7,y:18.5},0).wait(1).to({scaleY:1,skewX:-8.7,skewY:-5.8,x:18.5,y:19},0).wait(1).to({skewX:-6.9,skewY:-4.6,x:18.3,y:19.3},0).wait(1).to({scaleY:1,skewX:-5.3,skewY:-3.5,x:18.1,y:19.7},0).wait(1).to({scaleY:1,skewX:-3.8,skewY:-2.6,x:18,y:20},0).wait(1).to({skewX:-2.6,skewY:-1.7,x:17.8,y:20.2},0).wait(1).to({skewX:-1.6,skewY:-1.1,x:17.7,y:20.4},0).wait(1).to({scaleY:1,skewX:-0.9,skewY:-0.6,x:17.6,y:20.6},0).wait(1).to({skewX:-0.4,skewY:-0.3,y:20.7},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,x:17.5},0).wait(1).to({regX:0,regY:0,rotation:0,x:8.1,y:14.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:9.5,regY:6.5,skewX:-0.2,skewY:-0.1,x:17.6,y:20.8},0).wait(1).to({skewX:-0.6,skewY:-0.4,y:20.7},0).wait(1).to({skewX:-1.2,skewY:-0.8,x:17.7,y:20.5},0).wait(1).to({scaleY:1,skewX:-2.1,skewY:-1.4,x:17.8,y:20.4},0).wait(1).to({skewX:-3.2,skewY:-2.1,x:17.9,y:20.2},0).wait(1).to({scaleY:1,skewX:-4.6,skewY:-3.1,x:18.1,y:19.9},0).wait(1).to({skewX:-6.2,skewY:-4.2,x:18.2,y:19.5},0).wait(1).to({scaleY:1,skewX:-8.1,skewY:-5.4,x:18.4,y:19.1},0).wait(1).to({scaleY:1,skewX:-10,skewY:-6.7,x:18.7,y:18.7},0).wait(1).to({skewX:-12,skewY:-8,x:18.8,y:18.3},0).wait(1).to({scaleY:1,skewX:-13.9,skewY:-9.3,x:19,y:17.8},0).wait(1).to({scaleY:1.01,skewX:-15.7,skewY:-10.5,x:19.2,y:17.4},0).wait(1).to({skewX:-17.3,skewY:-11.6,x:19.4,y:17.1},0).wait(1).to({scaleY:1.01,skewX:-18.7,skewY:-12.5,x:19.5,y:16.7},0).wait(1).to({skewX:-19.8,skewY:-13.2,x:19.6,y:16.5},0).wait(1).to({skewX:-20.6,skewY:-13.8,x:19.7,y:16.3},0).wait(1).to({scaleY:1.01,skewX:-21.1,skewY:-14.2,y:16.2},0).wait(1).to({skewX:-21.5,skewY:-14.4,y:16.1},0).wait(1).to({regX:0,regY:0,skewX:-21.6,x:8.1,y:12.3},0).wait(1).to({regX:9.5,regY:6.5,skewX:-21.4,skewY:-14.3,x:19.6,y:16.1},0).wait(1).to({skewX:-21.1,skewY:-14.1},0).wait(1).to({scaleY:1.01,skewX:-20.5,skewY:-13.7,y:16.3},0).wait(1).to({skewX:-19.7,skewY:-13.2,x:19.5,y:16.5},0).wait(1).to({skewX:-18.7,skewY:-12.5,x:19.4,y:16.7},0).wait(1).to({scaleY:1.01,skewX:-17.4,skewY:-11.7,x:19.3,y:17},0).wait(1).to({skewX:-15.9,skewY:-10.7,x:19.2,y:17.4},0).wait(1).to({scaleY:1,skewX:-14.3,skewY:-9.5,x:19,y:17.7},0).wait(1).to({skewX:-12.4,skewY:-8.3,x:18.8,y:18.1},0).wait(1).to({scaleY:1,skewX:-10.6,skewY:-7.1,x:18.7,y:18.5},0).wait(1).to({scaleY:1,skewX:-8.7,skewY:-5.8,x:18.5,y:19},0).wait(1).to({skewX:-6.9,skewY:-4.6,x:18.3,y:19.3},0).wait(1).to({scaleY:1,skewX:-5.3,skewY:-3.5,x:18.1,y:19.7},0).wait(1).to({scaleY:1,skewX:-3.8,skewY:-2.6,x:18,y:20},0).wait(1).to({skewX:-2.6,skewY:-1.7,x:17.8,y:20.2},0).wait(1).to({skewX:-1.6,skewY:-1.1,x:17.7,y:20.4},0).wait(1).to({scaleY:1,skewX:-0.9,skewY:-0.6,x:17.6,y:20.6},0).wait(1).to({skewX:-0.4,skewY:-0.3,y:20.7},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0,x:17.5},0).wait(1).to({regX:0,regY:0,rotation:0,x:8.1,y:14.3},0).wait(1));

	// Denny Claw Near
	this.instance_8 = new lib.DennyClawNear("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:4,regY:11.5,rotation:-0.1,x:7,y:25.3},0).wait(1).to({rotation:0,skewX:-0.2,skewY:-0.1},0).wait(1).to({skewX:-0.4,skewY:-0.2,x:7.1,y:25.2},0).wait(1).to({skewX:-0.7,skewY:-0.3,y:25.1},0).wait(1).to({skewX:-1.1,skewY:-0.4,x:7.2,y:25},0).wait(1).to({scaleX:1,skewX:-1.5,skewY:-0.6,x:7.3,y:24.9},0).wait(1).to({skewX:-2.1,skewY:-0.9,y:24.7},0).wait(1).to({skewX:-2.7,skewY:-1.1,x:7.5,y:24.5},0).wait(1).to({skewX:-3.3,skewY:-1.4,x:7.6,y:24.3},0).wait(1).to({scaleX:1,skewX:-4,skewY:-1.7,x:7.7,y:24.1},0).wait(1).to({skewX:-4.7,skewY:-1.9,x:7.8,y:23.9},0).wait(1).to({skewX:-5.3,skewY:-2.2,x:7.9,y:23.7},0).wait(1).to({skewX:-5.8,skewY:-2.4,x:8,y:23.6},0).wait(1).to({skewX:-6.2,skewY:-2.6,x:8.1,y:23.4},0).wait(1).to({skewX:-6.6,skewY:-2.7,y:23.3},0).wait(1).to({scaleX:1,skewX:-6.9,skewY:-2.9,x:8.2,y:23.2},0).wait(1).to({skewX:-7.1},0).wait(1).to({skewX:-7.2,skewY:-3,x:8.3},0).wait(1).to({regX:0,regY:0,x:2.8,y:11.9},0).wait(1).to({regX:4,regY:11.5,x:8.2,y:23.1},0).wait(1).to({skewX:-7,skewY:-2.9},0).wait(1).to({skewX:-6.9,skewY:-2.8,x:8.1,y:23.2},0).wait(1).to({scaleX:1,skewX:-6.6,skewY:-2.7,y:23.3},0).wait(1).to({skewX:-6.2,skewY:-2.6,x:8,y:23.4},0).wait(1).to({skewX:-5.8,skewY:-2.4,x:7.9,y:23.6},0).wait(1).to({skewX:-5.3,skewY:-2.2,y:23.7},0).wait(1).to({skewX:-4.8,skewY:-2,x:7.8,y:23.8},0).wait(1).to({skewX:-4.2,skewY:-1.7,x:7.7,y:24},0).wait(1).to({scaleX:1,skewX:-3.5,skewY:-1.5,x:7.6,y:24.2},0).wait(1).to({skewX:-2.9,skewY:-1.2,x:7.5,y:24.4},0).wait(1).to({skewX:-2.3,skewY:-1,x:7.3,y:24.6},0).wait(1).to({skewX:-1.8,skewY:-0.7,y:24.7},0).wait(1).to({scaleX:1,skewX:-1.3,skewY:-0.5,x:7.2,y:24.9},0).wait(1).to({skewX:-0.9,skewY:-0.4,x:7.1,y:25},0).wait(1).to({skewX:-0.5,skewY:-0.2,x:7,y:25.1},0).wait(1).to({skewX:-0.3,skewY:-0.1,y:25.2},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:0,skewY:0,x:6.9},0).wait(1).to({regX:0,regY:0,x:3,y:13.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:4,regY:11.5,rotation:-0.1,x:7,y:25.3},0).wait(1).to({rotation:0,skewX:-0.2,skewY:-0.1},0).wait(1).to({skewX:-0.4,skewY:-0.2,x:7.1,y:25.2},0).wait(1).to({skewX:-0.7,skewY:-0.3,y:25.1},0).wait(1).to({skewX:-1.1,skewY:-0.4,x:7.2,y:25},0).wait(1).to({scaleX:1,skewX:-1.5,skewY:-0.6,x:7.3,y:24.9},0).wait(1).to({skewX:-2.1,skewY:-0.9,y:24.7},0).wait(1).to({skewX:-2.7,skewY:-1.1,x:7.5,y:24.5},0).wait(1).to({skewX:-3.3,skewY:-1.4,x:7.6,y:24.3},0).wait(1).to({scaleX:1,skewX:-4,skewY:-1.7,x:7.7,y:24.1},0).wait(1).to({skewX:-4.7,skewY:-1.9,x:7.8,y:23.9},0).wait(1).to({skewX:-5.3,skewY:-2.2,x:7.9,y:23.7},0).wait(1).to({skewX:-5.8,skewY:-2.4,x:8,y:23.6},0).wait(1).to({skewX:-6.2,skewY:-2.6,x:8.1,y:23.4},0).wait(1).to({skewX:-6.6,skewY:-2.7,y:23.3},0).wait(1).to({scaleX:1,skewX:-6.9,skewY:-2.9,x:8.2,y:23.2},0).wait(1).to({skewX:-7.1},0).wait(1).to({skewX:-7.2,skewY:-3,x:8.3},0).wait(1).to({regX:0,regY:0,x:2.8,y:11.9},0).wait(1).to({regX:4,regY:11.5,x:8.2,y:23.1},0).wait(1).to({skewX:-7,skewY:-2.9},0).wait(1).to({skewX:-6.9,skewY:-2.8,x:8.1,y:23.2},0).wait(1).to({scaleX:1,skewX:-6.6,skewY:-2.7,y:23.3},0).wait(1).to({skewX:-6.2,skewY:-2.6,x:8,y:23.4},0).wait(1).to({skewX:-5.8,skewY:-2.4,x:7.9,y:23.6},0).wait(1).to({skewX:-5.3,skewY:-2.2,y:23.7},0).wait(1).to({skewX:-4.8,skewY:-2,x:7.8,y:23.8},0).wait(1).to({skewX:-4.2,skewY:-1.7,x:7.7,y:24},0).wait(1).to({scaleX:1,skewX:-3.5,skewY:-1.5,x:7.6,y:24.2},0).wait(1).to({skewX:-2.9,skewY:-1.2,x:7.5,y:24.4},0).wait(1).to({skewX:-2.3,skewY:-1,x:7.3,y:24.6},0).wait(1).to({skewX:-1.8,skewY:-0.7,y:24.7},0).wait(1).to({scaleX:1,skewX:-1.3,skewY:-0.5,x:7.2,y:24.9},0).wait(1).to({skewX:-0.9,skewY:-0.4,x:7.1,y:25},0).wait(1).to({skewX:-0.5,skewY:-0.2,x:7,y:25.1},0).wait(1).to({skewX:-0.3,skewY:-0.1,y:25.2},0).wait(1).to({skewX:-0.1},0).wait(1).to({skewX:0,skewY:0,x:6.9},0).wait(1).to({regX:0,regY:0,x:3,y:13.8},0).wait(1));

	// Denny Tail
	this.instance_9 = new lib.DennyTail("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-17.7,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-6,regY:-12.5,rotation:-0.1,x:-23.7,y:-20.9},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.6,x:-23.8},0).wait(1).to({skewX:-1,skewY:-1.3,x:-23.9,y:-20.8},0).wait(1).to({skewX:-1.8,skewY:-2.3,x:-24.1,y:-20.7},0).wait(1).to({scaleX:1,skewX:-2.8,skewY:-3.5,x:-24.3},0).wait(1).to({skewX:-4,skewY:-5.1,x:-24.5,y:-20.5},0).wait(1).to({skewX:-5.4,skewY:-6.9,x:-24.8,y:-20.4},0).wait(1).to({scaleX:1,skewX:-7,skewY:-8.9,x:-25.1,y:-20.2},0).wait(1).to({skewX:-8.7,skewY:-11.1,x:-25.5,y:-20},0).wait(1).to({skewX:-10.4,skewY:-13.3,x:-25.8,y:-19.8},0).wait(1).to({scaleX:1,skewX:-12.1,skewY:-15.4,x:-26.1,y:-19.6},0).wait(1).to({skewX:-13.6,skewY:-17.4,x:-26.4,y:-19.4},0).wait(1).to({skewX:-15,skewY:-19.2,x:-26.6,y:-19.2},0).wait(1).to({skewX:-16.2,skewY:-20.7,x:-26.8,y:-19.1},0).wait(1).to({scaleX:1,skewX:-17.1,skewY:-21.8,x:-27,y:-19},0).wait(1).to({skewX:-17.8,skewY:-22.8,x:-27.1,y:-18.8},0).wait(1).to({skewX:-18.3,skewY:-23.4,x:-27.2},0).wait(1).to({skewX:-18.6,skewY:-23.7},0).wait(1).to({regX:0.1,regY:0.2,skewX:-18.7,skewY:-23.9,x:-17.7,y:-9.4},0).wait(1).to({regX:-6,regY:-12.5,skewX:-18.6,skewY:-23.7,x:-27.3,y:-18.9},0).wait(1).to({skewX:-18.3,skewY:-23.3,x:-27.2},0).wait(1).to({skewX:-17.8,skewY:-22.7,x:-27.1,y:-19.1},0).wait(1).to({skewX:-17.1,skewY:-21.8,x:-27},0).wait(1).to({scaleX:1,skewX:-16.2,skewY:-20.7,x:-26.9,y:-19.3},0).wait(1).to({skewX:-15.1,skewY:-19.3,x:-26.7,y:-19.4},0).wait(1).to({skewX:-13.8,skewY:-17.6,x:-26.5,y:-19.6},0).wait(1).to({skewX:-12.4,skewY:-15.8,x:-26.3,y:-19.7},0).wait(1).to({scaleX:1,skewX:-10.8,skewY:-13.8,x:-26,y:-20},0).wait(1).to({skewX:-9.2,skewY:-11.7,x:-25.7,y:-20.2},0).wait(1).to({skewX:-7.5,skewY:-9.6,x:-25.4,y:-20.4},0).wait(1).to({scaleX:1,skewX:-6,skewY:-7.6,x:-25,y:-20.5},0).wait(1).to({skewX:-4.6,skewY:-5.8,x:-24.8,y:-20.7},0).wait(1).to({skewX:-3.3,skewY:-4.2,x:-24.5,y:-20.8},0).wait(1).to({scaleX:1,skewX:-2.3,skewY:-2.9,x:-24.3,y:-20.9},0).wait(1).to({skewX:-1.4,skewY:-1.8,x:-24.1,y:-21},0).wait(1).to({skewX:-0.8,skewY:-1,x:-23.9},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:-23.8,y:-21.1},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0},0).wait(1).to({regX:0,regY:0,rotation:0,x:-17.7,y:-8.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-6,regY:-12.5,rotation:-0.1,x:-23.7,y:-20.9},0).wait(1).to({rotation:0,skewX:-0.5,skewY:-0.6,x:-23.8},0).wait(1).to({skewX:-1,skewY:-1.3,x:-23.9,y:-20.8},0).wait(1).to({skewX:-1.8,skewY:-2.3,x:-24.1,y:-20.7},0).wait(1).to({scaleX:1,skewX:-2.8,skewY:-3.5,x:-24.3},0).wait(1).to({skewX:-4,skewY:-5.1,x:-24.5,y:-20.5},0).wait(1).to({skewX:-5.4,skewY:-6.9,x:-24.8,y:-20.4},0).wait(1).to({scaleX:1,skewX:-7,skewY:-8.9,x:-25.1,y:-20.2},0).wait(1).to({skewX:-8.7,skewY:-11.1,x:-25.5,y:-20},0).wait(1).to({skewX:-10.4,skewY:-13.3,x:-25.8,y:-19.8},0).wait(1).to({scaleX:1,skewX:-12.1,skewY:-15.4,x:-26.1,y:-19.6},0).wait(1).to({skewX:-13.6,skewY:-17.4,x:-26.4,y:-19.4},0).wait(1).to({skewX:-15,skewY:-19.2,x:-26.6,y:-19.2},0).wait(1).to({skewX:-16.2,skewY:-20.7,x:-26.8,y:-19.1},0).wait(1).to({scaleX:1,skewX:-17.1,skewY:-21.8,x:-27,y:-19},0).wait(1).to({skewX:-17.8,skewY:-22.8,x:-27.1,y:-18.8},0).wait(1).to({skewX:-18.3,skewY:-23.4,x:-27.2},0).wait(1).to({skewX:-18.6,skewY:-23.7},0).wait(1).to({regX:0.1,regY:0.2,skewX:-18.7,skewY:-23.9,x:-17.7,y:-9.4},0).wait(1).to({regX:-6,regY:-12.5,skewX:-18.6,skewY:-23.7,x:-27.3,y:-18.9},0).wait(1).to({skewX:-18.3,skewY:-23.3,x:-27.2},0).wait(1).to({skewX:-17.8,skewY:-22.7,x:-27.1,y:-19.1},0).wait(1).to({skewX:-17.1,skewY:-21.8,x:-27},0).wait(1).to({scaleX:1,skewX:-16.2,skewY:-20.7,x:-26.9,y:-19.3},0).wait(1).to({skewX:-15.1,skewY:-19.3,x:-26.7,y:-19.4},0).wait(1).to({skewX:-13.8,skewY:-17.6,x:-26.5,y:-19.6},0).wait(1).to({skewX:-12.4,skewY:-15.8,x:-26.3,y:-19.7},0).wait(1).to({scaleX:1,skewX:-10.8,skewY:-13.8,x:-26,y:-20},0).wait(1).to({skewX:-9.2,skewY:-11.7,x:-25.7,y:-20.2},0).wait(1).to({skewX:-7.5,skewY:-9.6,x:-25.4,y:-20.4},0).wait(1).to({scaleX:1,skewX:-6,skewY:-7.6,x:-25,y:-20.5},0).wait(1).to({skewX:-4.6,skewY:-5.8,x:-24.8,y:-20.7},0).wait(1).to({skewX:-3.3,skewY:-4.2,x:-24.5,y:-20.8},0).wait(1).to({scaleX:1,skewX:-2.3,skewY:-2.9,x:-24.3,y:-20.9},0).wait(1).to({skewX:-1.4,skewY:-1.8,x:-24.1,y:-21},0).wait(1).to({skewX:-0.8,skewY:-1,x:-23.9},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:-23.8,y:-21.1},0).wait(1).to({rotation:-0.1,skewX:0,skewY:0},0).wait(1).to({regX:0,regY:0,rotation:0,x:-17.7,y:-8.4},0).wait(1));

	// Denny Legs near
	this.instance_10 = new lib.DennyLegsnear("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.9,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:-18,regY:11.5,x:-24.9,y:20.3},0).wait(1).to({scaleY:1,skewX:-0.1},0).wait(1).to({scaleY:1,skewX:-0.2,skewY:-0.1,x:-24.8},0).wait(1).to({scaleY:1,skewX:-0.4},0).wait(1).to({scaleY:1.01,skewX:-0.6,x:-24.7,y:20.2},0).wait(1).to({scaleY:1.01,skewX:-0.9,skewY:-0.2},0).wait(1).to({scaleY:1.01,skewX:-1.3,skewY:-0.3,y:20.1},0).wait(1).to({scaleY:1.01,skewX:-1.6,skewY:-0.4,x:-24.6,y:20},0).wait(1).to({scaleY:1.02,skewX:-2,skewY:-0.5},0).wait(1).to({scaleY:1.02,skewX:-2.4,skewY:-0.6,x:-24.5,y:19.9},0).wait(1).to({scaleY:1.02,skewX:-2.8,x:-24.4,y:19.8},0).wait(1).to({scaleY:1.03,skewX:-3.2,skewY:-0.7,y:19.7},0).wait(1).to({scaleY:1.03,skewX:-3.5,skewY:-0.8,x:-24.3},0).wait(1).to({scaleY:1.03,skewX:-3.8,skewY:-0.9,y:19.6},0).wait(1).to({scaleY:1.03,skewX:-4,y:19.5},0).wait(1).to({scaleY:1.04,skewX:-4.2,skewY:-1},0).wait(1).to({scaleY:1.04,skewX:-4.3,x:-24.2},0).wait(1).to({scaleY:1.04,skewX:-4.4},0).wait(1).to({regX:0.1,regY:0.1,x:-7.2,y:7.3},0).wait(1).to({regX:-18,regY:11.5,skewX:-4.3,x:-24.4,y:19.4},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.04,skewX:-4.2,y:19.5},0).wait(1).to({scaleY:1.03,skewX:-4,skewY:-0.9},0).wait(1).to({scaleY:1.03,skewX:-3.8,x:-24.5},0).wait(1).to({scaleY:1.03,skewX:-3.5,skewY:-0.8,y:19.6},0).wait(1).to({scaleY:1.03,skewX:-3.2,skewY:-0.7,x:-24.6,y:19.7},0).wait(1).to({scaleY:1.02,skewX:-2.9},0).wait(1).to({scaleY:1.02,skewX:-2.5,skewY:-0.6,x:-24.7,y:19.8},0).wait(1).to({scaleY:1.02,skewX:-2.1,skewY:-0.5,y:19.9},0).wait(1).to({scaleY:1.01,skewX:-1.8,skewY:-0.4,x:-24.8,y:20},0).wait(1).to({scaleY:1.01,skewX:-1.4,skewY:-0.3},0).wait(1).to({scaleY:1.01,skewX:-1.1,skewY:-0.2,x:-24.9,y:20.1},0).wait(1).to({scaleY:1.01,skewX:-0.8,y:20.2},0).wait(1).to({scaleY:1,skewX:-0.5,skewY:-0.1},0).wait(1).to({scaleY:1,skewX:-0.3,x:-25},0).wait(1).to({scaleY:1,skewX:-0.2,skewY:0},0).wait(1).to({scaleY:1,skewX:-0.1,y:20.3},0).wait(1).to({scaleY:1,skewX:0},0).wait(1).to({regX:0,regY:0,x:-6.9,y:8.9},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-18,regY:11.5,x:-24.9,y:20.3},0).wait(1).to({scaleY:1,skewX:-0.1},0).wait(1).to({scaleY:1,skewX:-0.2,skewY:-0.1,x:-24.8},0).wait(1).to({scaleY:1,skewX:-0.4},0).wait(1).to({scaleY:1.01,skewX:-0.6,x:-24.7,y:20.2},0).wait(1).to({scaleY:1.01,skewX:-0.9,skewY:-0.2},0).wait(1).to({scaleY:1.01,skewX:-1.3,skewY:-0.3,y:20.1},0).wait(1).to({scaleY:1.01,skewX:-1.6,skewY:-0.4,x:-24.6,y:20},0).wait(1).to({scaleY:1.02,skewX:-2,skewY:-0.5},0).wait(1).to({scaleY:1.02,skewX:-2.4,skewY:-0.6,x:-24.5,y:19.9},0).wait(1).to({scaleY:1.02,skewX:-2.8,x:-24.4,y:19.8},0).wait(1).to({scaleY:1.03,skewX:-3.2,skewY:-0.7,y:19.7},0).wait(1).to({scaleY:1.03,skewX:-3.5,skewY:-0.8,x:-24.3},0).wait(1).to({scaleY:1.03,skewX:-3.8,skewY:-0.9,y:19.6},0).wait(1).to({scaleY:1.03,skewX:-4,y:19.5},0).wait(1).to({scaleY:1.04,skewX:-4.2,skewY:-1},0).wait(1).to({scaleY:1.04,skewX:-4.3,x:-24.2},0).wait(1).to({scaleY:1.04,skewX:-4.4},0).wait(1).to({regX:0.1,regY:0.1,x:-7.2,y:7.3},0).wait(1).to({regX:-18,regY:11.5,skewX:-4.3,x:-24.4,y:19.4},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.04,skewX:-4.2,y:19.5},0).wait(1).to({scaleY:1.03,skewX:-4,skewY:-0.9},0).wait(1).to({scaleY:1.03,skewX:-3.8,x:-24.5},0).wait(1).to({scaleY:1.03,skewX:-3.5,skewY:-0.8,y:19.6},0).wait(1).to({scaleY:1.03,skewX:-3.2,skewY:-0.7,x:-24.6,y:19.7},0).wait(1).to({scaleY:1.02,skewX:-2.9},0).wait(1).to({scaleY:1.02,skewX:-2.5,skewY:-0.6,x:-24.7,y:19.8},0).wait(1).to({scaleY:1.02,skewX:-2.1,skewY:-0.5,y:19.9},0).wait(1).to({scaleY:1.01,skewX:-1.8,skewY:-0.4,x:-24.8,y:20},0).wait(1).to({scaleY:1.01,skewX:-1.4,skewY:-0.3},0).wait(1).to({scaleY:1.01,skewX:-1.1,skewY:-0.2,x:-24.9,y:20.1},0).wait(1).to({scaleY:1.01,skewX:-0.8,y:20.2},0).wait(1).to({scaleY:1,skewX:-0.5,skewY:-0.1},0).wait(1).to({scaleY:1,skewX:-0.3,x:-25},0).wait(1).to({scaleY:1,skewX:-0.2,skewY:0},0).wait(1).to({scaleY:1,skewX:-0.1,y:20.3},0).wait(1).to({scaleY:1,skewX:0},0).wait(1).to({regX:0,regY:0,x:-6.9,y:8.9},0).wait(1));

	// Denny Legs Far
	this.instance_11 = new lib.DennyLegsFar("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(6.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({regX:7,regY:8.5,x:13.7,y:17.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1},0).wait(1).to({rotation:0,skewX:0.2,skewY:0.1,x:13.6,y:17.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.4,skewY:0.2,x:13.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.5,skewY:0.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.8,skewY:0.5,y:17.6},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.1,skewY:0.7},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.4,skewY:0.8,y:17.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.7,skewY:1},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2,skewY:1.3,y:17.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.4,skewY:1.5,y:17.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.7,skewY:1.6,x:13.8,y:17.2},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3,skewY:1.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.2,skewY:2,x:13.7,y:17.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.4,skewY:2.1,x:13.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.5,skewY:2.2,y:17},0).wait(1).to({scaleX:0.98,skewX:3.6},0).wait(1).to({scaleY:1.02,skewX:3.7},0).wait(1).to({regX:0.2,regY:0.1,skewY:2.3,x:7.5,y:8.1},0).wait(1).to({regX:7,regY:8.5,scaleY:1.02,skewY:2.2,x:13.6,y:16.9},0).wait(1).to({skewX:3.6},0).wait(1).to({scaleX:0.98,skewX:3.5,skewY:2.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.4,y:17},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.2,skewY:2,x:13.5},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3,skewY:1.8,x:13.6},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:2.7,skewY:1.7,y:17.1},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.4,skewY:1.5,y:17.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.1,skewY:1.3,x:13.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.8,skewY:1.1,x:13.6,y:17.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.5,skewY:0.9,x:13.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.2,skewY:0.7,y:17.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.9,skewY:0.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.7,skewY:0.4,y:17.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.4,skewY:0.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.3,skewY:0.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.2,skewY:0.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,skewX:0,skewY:0,y:17.7},0).wait(1).to({rotation:0},0).wait(1).to({regX:0,regY:0,x:6.7,y:9.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:7,regY:8.5,x:13.7,y:17.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1},0).wait(1).to({rotation:0,skewX:0.2,skewY:0.1,x:13.6,y:17.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.4,skewY:0.2,x:13.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.5,skewY:0.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.8,skewY:0.5,y:17.6},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.1,skewY:0.7},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.4,skewY:0.8,y:17.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.7,skewY:1},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2,skewY:1.3,y:17.4},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.4,skewY:1.5,y:17.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.7,skewY:1.6,x:13.8,y:17.2},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3,skewY:1.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.2,skewY:2,x:13.7,y:17.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.4,skewY:2.1,x:13.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.5,skewY:2.2,y:17},0).wait(1).to({scaleX:0.98,skewX:3.6},0).wait(1).to({scaleY:1.02,skewX:3.7},0).wait(1).to({regX:0.2,regY:0.1,skewY:2.3,x:7.5,y:8.1},0).wait(1).to({regX:7,regY:8.5,scaleY:1.02,skewY:2.2,x:13.6,y:16.9},0).wait(1).to({skewX:3.6},0).wait(1).to({scaleX:0.98,skewX:3.5,skewY:2.1},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.4,y:17},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3.2,skewY:2,x:13.5},0).wait(1).to({scaleX:0.98,scaleY:1.02,skewX:3,skewY:1.8,x:13.6},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:2.7,skewY:1.7,y:17.1},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.4,skewY:1.5,y:17.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:2.1,skewY:1.3,x:13.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.8,skewY:1.1,x:13.6,y:17.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.5,skewY:0.9,x:13.5},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:1.2,skewY:0.7,y:17.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.9,skewY:0.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.7,skewY:0.4,y:17.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.4,skewY:0.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.3,skewY:0.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.2,skewY:0.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,skewX:0,skewY:0,y:17.7},0).wait(1).to({rotation:0},0).wait(1).to({regX:0,regY:0,x:6.7,y:9.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-35.4,95.4,72.3);


// stage content:
(lib.Denny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Denny
	this.instance = new lib.Denny_1();
	this.instance.parent = this;
	this.instance.setTransform(189.1,136.6,1,1,0,0,0,-1.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330.4,236.9,95.4,72.3);
// library properties:
lib.properties = {
	id: '446F0EBCAF634F818CB4B29D830D93D8',
	width: 378,
	height: 273,
	fps: 24,
	color: "#444444",
	opacity: 1.00,
	manifest: [
		{src:"images/denny_atlas_.png?1499358150079", id:"denny_atlas_"}
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
an.compositions['446F0EBCAF634F818CB4B29D830D93D8'] = {
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