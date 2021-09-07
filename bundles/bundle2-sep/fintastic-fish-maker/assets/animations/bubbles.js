(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"bubbles_atlas_", frames: [[198,287,53,30],[202,244,39,41],[150,320,76,62],[224,0,23,28],[103,260,93,58],[0,266,84,60],[202,201,42,41],[207,102,44,45],[0,328,75,56],[0,0,110,100],[112,0,110,100],[0,102,110,100],[0,441,48,28],[150,384,75,56],[207,149,35,50],[86,320,62,81],[112,186,88,72],[0,386,62,53],[64,403,62,53],[0,204,101,60],[112,102,93,82]]}
];


// symbols:



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["bubbles_atlas_"];
	this.gotoAndStop(20);
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
	this.instance = new lib.Bitmap45();
	this.instance.parent = this;
	this.instance.setTransform(67,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(67,55,101,60), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.instance_1 = new lib.Bitmap42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64.8,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(-64.8,-45.2,88,72), null);


(lib.BU_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-46.6,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.6,-40.8,93,82);


(lib.BU_sidefin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-19.3,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-20.7,39,41);


(lib.BU_pelvic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-26.6,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-15.2,53.3,30.5);


(lib.BU_headclipEyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Blink:0});

	// BU_eyeball overlap copy
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-55.1,-28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-28.9,23,28);


(lib.BU_headclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Blink":0});

	// Layer 3 copy
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-78.6,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.6,-31,76,62);


(lib.BU_finFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap44();
	this.instance.parent = this;
	this.instance.setTransform(-31,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-29.6,62,53);


(lib.BU_fin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap43();
	this.instance.parent = this;
	this.instance.setTransform(-31,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-29.6,62,53);


(lib.BU_dorsalsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20.4,42,41);


(lib.BU_dorsallarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-42.1,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-29.8,84,60);


(lib.BU_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-14.1,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-26.7,93,58);


(lib.BU_UnderFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap38();
	this.instance.parent = this;
	this.instance.setTransform(-35.4,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-4.7,48,28);


(lib.BU_Side_Fin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-38,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-21.4,44,45);


(lib.BU_HeadClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BU_Cheeks copy
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-54.8,-50);

	this.instance_1 = new lib.Bitmap32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.8,-50);

	this.instance_2 = new lib.Bitmap33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.8,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:true},2).wait(6).to({_off:false},0).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-50,110,100);


(lib.BU_Fin_Right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-62,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-6.8,75,56);


(lib.BU_Fin_Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap39();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-8.6,75,56);


(lib.BU_Dorsal_Small = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap40();
	this.instance.parent = this;
	this.instance.setTransform(-20.9,-36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-36.7,35,50);


(lib.BU_Dorsal_Large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(-42.6,-75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-75.2,62,81);


(lib.BU_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-20.6,-18.1,1.203,1.203,0,0,0,100.6,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-36.1,121.5,72.2);


(lib.BubblesClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BU_Fin_Right
	this.instance = new lib.BU_Side_Fin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.6,2.9,0.812,0.812,0,0,0,-0.1,0.1);

	this.instance_1 = new lib.BU_finFront("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.8,20.6,1,1,0,0,180,-22.1,-22.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-16,regY:1.1,scaleX:0.81,x:-15.4,y:3.7},0).wait(1).to({scaleX:0.8,x:-15.2},0).wait(1).to({scaleX:0.78,x:-14.8},0).wait(1).to({scaleX:0.75,x:-14.4},0).wait(1).to({scaleX:0.71,x:-13.9},0).wait(1).to({scaleX:0.67,x:-13.2},0).wait(1).to({scaleX:0.63,x:-12.5},0).wait(1).to({scaleX:0.58,x:-11.7},0).wait(1).to({scaleX:0.53,x:-10.9},0).wait(1).to({scaleX:0.48,x:-10.1},0).wait(1).to({scaleX:0.43,x:-9.2},0).wait(1).to({scaleX:0.38,x:-8.5},0).wait(1).to({scaleX:0.34,x:-7.8},0).wait(1).to({scaleX:0.3,x:-7.2},0).wait(1).to({scaleX:0.27,x:-6.6},0).wait(1).to({scaleX:0.24,x:-6.2},0).wait(1).to({scaleX:0.22,x:-5.9},0).wait(1).to({scaleX:0.21,x:-5.7},0).wait(1).to({regX:-0.2,regY:0.1,scaleX:0.21,x:-2.3,y:2.9},0).wait(1).to({regX:-16,regY:1.1,scaleX:0.21,x:-5.7,y:3.7},0).wait(1).to({scaleX:0.22,x:-5.9},0).wait(1).to({scaleX:0.24,x:-6.1},0).wait(1).to({scaleX:0.27,x:-6.5},0).wait(1).to({scaleX:0.3,x:-7},0).wait(1).to({scaleX:0.33,x:-7.6},0).wait(1).to({scaleX:0.38,x:-8.3},0).wait(1).to({scaleX:0.42,x:-9},0).wait(1).to({scaleX:0.47,x:-9.8},0).wait(1).to({scaleX:0.52,x:-10.5},0).wait(1).to({scaleX:0.56,x:-11.3},0).wait(1).to({scaleX:0.61,x:-12},0).wait(1).to({scaleX:0.65,x:-12.7},0).wait(1).to({scaleX:0.69,x:-13.4},0).wait(1).to({scaleX:0.73,x:-13.9},0).wait(1).to({scaleX:0.76,x:-14.4},0).wait(1).to({scaleX:0.78,x:-14.8},0).wait(1).to({scaleX:0.8,x:-15.1},0).wait(1).to({scaleX:0.81,x:-15.2},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.81,x:-2.6,y:2.9},0).wait(1).to({regX:-16,regY:1.1,scaleX:0.81,x:-15.4,y:3.7},0).wait(1).to({scaleX:0.8,x:-15.2},0).wait(1).to({scaleX:0.78,x:-14.9},0).wait(1).to({scaleX:0.76,x:-14.6},0).wait(1).to({scaleX:0.73,x:-14.1},0).wait(1).to({scaleX:0.7,x:-13.6},0).wait(1).to({scaleX:0.66,x:-13},0).wait(1).to({scaleX:0.62,x:-12.2},0).wait(1).to({scaleX:0.57,x:-11.5},0).wait(1).to({scaleX:0.53,x:-10.8},0).wait(1).to({scaleX:0.48,x:-10},0).wait(1).to({scaleX:0.43,x:-9.2},0).wait(1).to({scaleX:0.39,x:-8.5},0).wait(1).to({scaleX:0.34,x:-7.8},0).wait(1).to({scaleX:0.31,x:-7.2},0).wait(1).to({scaleX:0.27,x:-6.7},0).wait(1).to({scaleX:0.25,x:-6.3},0).wait(1).to({scaleX:0.23,x:-5.9},0).wait(1).to({scaleX:0.21,x:-5.7},0).wait(1).to({regX:-0.2,regY:0.1,scaleX:0.21,x:-2.3,y:2.9},0).wait(1).to({regX:-16,regY:1.1,scaleX:0.21,x:-5.7,y:3.7},0).wait(1).to({scaleX:0.22,x:-5.9},0).wait(1).to({scaleX:0.24,x:-6.1},0).wait(1).to({scaleX:0.27,x:-6.5},0).wait(1).to({scaleX:0.3,x:-7},0).wait(1).to({scaleX:0.33,x:-7.6},0).wait(1).to({scaleX:0.38,x:-8.3},0).wait(1).to({scaleX:0.42,x:-9},0).wait(1).to({scaleX:0.47,x:-9.8},0).wait(1).to({scaleX:0.52,x:-10.5},0).wait(1).to({scaleX:0.56,x:-11.3},0).wait(1).to({scaleX:0.61,x:-12},0).wait(1).to({scaleX:0.65,x:-12.7},0).wait(1).to({scaleX:0.69,x:-13.4},0).wait(1).to({scaleX:0.73,x:-13.9},0).wait(1).to({scaleX:0.76,x:-14.4},0).wait(1).to({scaleX:0.78,x:-14.8},0).wait(1).to({scaleX:0.8,x:-15.1},0).wait(1).to({scaleX:0.81,x:-15.2},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.81,x:-2.6,y:2.9},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).wait(1).to({regX:-0.1,regY:-3.1,scaleY:1,skewX:0.2,x:32.7,y:39.4},0).wait(1).to({scaleY:0.99,skewX:0.4,x:32.6,y:39.3},0).wait(1).to({scaleY:0.98,skewX:0.8,x:32.5,y:39},0).wait(1).to({scaleY:0.96,skewX:1.2,x:32.4,y:38.8},0).wait(1).to({scaleY:0.95,skewX:1.8,x:32.2,y:38.4},0).wait(1).to({scaleY:0.93,skewX:2.4,x:32,y:38},0).wait(1).to({scaleY:0.9,skewX:3.2,x:31.8,y:37.5},0).wait(1).to({scaleY:0.88,skewX:4.1,x:31.6,y:37},0).wait(1).to({scaleY:0.85,skewX:5,x:31.4,y:36.4},0).wait(1).to({scaleY:0.82,skewX:5.9,x:31.1,y:35.8},0).wait(1).to({scaleY:0.79,skewX:6.9,x:30.9,y:35.2},0).wait(1).to({scaleY:0.77,skewX:7.8,x:30.7,y:34.6},0).wait(1).to({scaleY:0.74,skewX:8.6,x:30.6,y:34.1},0).wait(1).to({scaleY:0.72,skewX:9.3,x:30.5,y:33.6},0).wait(1).to({scaleY:0.7,skewX:9.9,x:30.4,y:33.2},0).wait(1).to({scaleY:0.69,skewX:10.4,x:30.3,y:32.9},0).wait(1).to({scaleY:0.67,skewX:10.8,y:32.7},0).wait(1).to({scaleY:0.67,skewX:11.1,x:30.2,y:32.5},0).wait(1).to({regX:-22.1,regY:-22.2,scaleY:0.66,skewX:11.3,x:54.7,y:20.1},0).wait(1).to({regX:-0.1,regY:-3.1,scaleY:0.66,skewX:11.1,x:30.2,y:32.5},0).wait(1).to({scaleY:0.67,skewX:10.9,x:30.3,y:32.6},0).wait(1).to({scaleY:0.68,skewX:10.6,y:32.8},0).wait(1).to({scaleY:0.69,skewX:10.2,x:30.4,y:33.1},0).wait(1).to({scaleY:0.71,skewX:9.7,y:33.4},0).wait(1).to({scaleY:0.72,skewX:9.2,x:30.5,y:33.7},0).wait(1).to({scaleY:0.74,skewX:8.6,x:30.6,y:34.2},0).wait(1).to({scaleY:0.76,skewX:7.8,x:30.7,y:34.6},0).wait(1).to({scaleY:0.79,skewX:7.1,x:30.9,y:35.1},0).wait(1).to({scaleY:0.81,skewX:6.2,x:31,y:35.7},0).wait(1).to({scaleY:0.84,skewX:5.4,x:31.2,y:36.2},0).wait(1).to({scaleY:0.86,skewX:4.5,x:31.4,y:36.8},0).wait(1).to({scaleY:0.89,skewX:3.7,x:31.7,y:37.3},0).wait(1).to({scaleY:0.91,skewX:2.9,x:31.9,y:37.8},0).wait(1).to({scaleY:0.93,skewX:2.3,x:32.1,y:38.2},0).wait(1).to({scaleY:0.95,skewX:1.7,x:32.3,y:38.5},0).wait(1).to({scaleY:0.96,skewX:1.2,x:32.4,y:38.9},0).wait(1).to({scaleY:0.98,skewX:0.8,x:32.6,y:39.1},0).wait(1).to({scaleY:0.99,skewX:0.4,y:39.3},0).wait(1).to({scaleY:1,skewX:0.2,x:32.7,y:39.5},0).wait(1).to({regX:-22.1,regY:-22.1,scaleY:1,skewX:0,x:54.8,y:20.6},0).to({_off:true},1).wait(244));

	// BU_HeadClip
	this.instance_2 = new lib.BU_Fin_Right("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.9,30.7,0.812,0.812,0,0,0,0.1,0.1);

	this.instance_3 = new lib.BU_sidefin("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.7,-5.2,1,1,0,0,180,-17.4,-2.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-24.5,regY:21.1,scaleY:0.81,skewX:0.3,x:-14.3,y:47.7},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:1,x:-14.4,y:47.4},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:2.3,x:-14.8,y:47.1},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:4.1,x:-15.2,y:46.5},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:6.3,x:-15.7,y:45.9},0).wait(1).to({scaleX:0.79,scaleY:0.74,skewX:8.9,x:-16.2,y:45.1},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:11.8,x:-16.8,y:44.1},0).wait(1).to({scaleX:0.78,scaleY:0.69,skewX:14.9,x:-17.3,y:43},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:18.1,x:-17.9,y:41.9},0).wait(1).to({scaleX:0.77,scaleY:0.63,skewX:21.4,x:-18.3,y:40.8},0).wait(1).to({scaleX:0.76,scaleY:0.61,skewX:24.6,x:-18.6,y:39.7},0).wait(1).to({scaleX:0.76,scaleY:0.58,skewX:27.6,x:-18.9,y:38.5},0).wait(1).to({scaleX:0.75,scaleY:0.56,skewX:30.4,x:-19.1,y:37.6},0).wait(1).to({scaleX:0.75,scaleY:0.54,skewX:32.9,x:-19.2,y:36.6},0).wait(1).to({scaleX:0.74,scaleY:0.52,skewX:35,y:35.9},0).wait(1).to({scaleX:0.74,scaleY:0.51,skewX:36.7,x:-19.3,y:35.3},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:37.9,y:34.9},0).wait(1).to({scaleX:0.73,scaleY:0.49,skewX:38.6,y:34.6},0).wait(1).to({regX:0.1,regY:0.4,scaleY:0.49,skewX:38.9,x:5.2,y:26.6},0).wait(1).to({regX:-24.5,regY:21.1,scaleY:0.49,skewX:38.6,x:-19.2,y:34.5},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:37.9,y:34.7},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:36.7,y:35.2},0).wait(1).to({scaleX:0.74,scaleY:0.52,skewX:35.1,y:35.7},0).wait(1).to({scaleX:0.75,scaleY:0.54,skewX:33.1,x:-19.1,y:36.4},0).wait(1).to({scaleX:0.75,scaleY:0.55,skewX:30.8,y:37.3},0).wait(1).to({scaleX:0.76,scaleY:0.58,skewX:28.1,x:-18.9,y:38.2},0).wait(1).to({scaleX:0.76,scaleY:0.6,skewX:25.3,x:-18.6,y:39.2},0).wait(1).to({scaleX:0.77,scaleY:0.63,skewX:22.2,x:-18.4,y:40.3},0).wait(1).to({scaleX:0.77,scaleY:0.65,skewX:19.1,x:-18,y:41.4},0).wait(1).to({scaleX:0.78,scaleY:0.68,skewX:16,x:-17.5,y:42.5},0).wait(1).to({scaleX:0.79,scaleY:0.7,skewX:13,x:-17,y:43.5},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:10.2,x:-16.5,y:44.4},0).wait(1).to({scaleX:0.8,scaleY:0.75,skewX:7.7,x:-16,y:45.2},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:5.4,x:-15.5,y:45.9},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:3.5,x:-15.1,y:46.5},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:2,x:-14.7,y:47},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.9,x:-14.4,y:47.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.2,x:-14.2,y:47.4},0).wait(1).to({regX:0.1,regY:0.1,scaleY:0.81,skewX:0,x:5.9,y:30.7},0).wait(1).to({regX:-24.5,regY:21.1,scaleY:0.81,skewX:0.2,x:-14.2,y:47.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.9,x:-14.4,y:47.5},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:1.9,x:-14.6,y:47.2},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:3.4,x:-15.1,y:46.7},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:5.2,x:-15.5,y:46.2},0).wait(1).to({scaleX:0.8,scaleY:0.75,skewX:7.4,x:-16,y:45.5},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:9.9,x:-16.4,y:44.7},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:12.6,x:-17,y:43.8},0).wait(1).to({scaleX:0.78,scaleY:0.68,skewX:15.5,x:-17.5,y:42.8},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:18.5,x:-17.9,y:41.8},0).wait(1).to({scaleX:0.77,scaleY:0.63,skewX:21.6,x:-18.3,y:40.7},0).wait(1).to({scaleX:0.76,scaleY:0.61,skewX:24.6,x:-18.6,y:39.7},0).wait(1).to({scaleX:0.76,scaleY:0.58,skewX:27.5,x:-18.9,y:38.6},0).wait(1).to({scaleX:0.75,scaleY:0.56,skewX:30.2,x:-19.1,y:37.6},0).wait(1).to({scaleX:0.75,scaleY:0.54,skewX:32.7,x:-19.2,y:36.7},0).wait(1).to({scaleX:0.74,scaleY:0.52,skewX:34.8,y:36},0).wait(1).to({scaleX:0.74,scaleY:0.51,skewX:36.5,x:-19.3,y:35.4},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:37.8,y:34.9},0).wait(1).to({scaleX:0.73,scaleY:0.49,skewX:38.6,y:34.6},0).wait(1).to({regX:0.1,regY:0.4,scaleY:0.49,skewX:38.9,x:5.2,y:26.6},0).wait(1).to({regX:-24.5,regY:21.1,scaleY:0.49,skewX:38.6,x:-19.2,y:34.5},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:37.9,y:34.7},0).wait(1).to({scaleX:0.74,scaleY:0.5,skewX:36.7,y:35.2},0).wait(1).to({scaleX:0.74,scaleY:0.52,skewX:35.1,y:35.7},0).wait(1).to({scaleX:0.75,scaleY:0.54,skewX:33.1,x:-19.1,y:36.4},0).wait(1).to({scaleX:0.75,scaleY:0.55,skewX:30.8,y:37.3},0).wait(1).to({scaleX:0.76,scaleY:0.58,skewX:28.1,x:-18.9,y:38.2},0).wait(1).to({scaleX:0.76,scaleY:0.6,skewX:25.3,x:-18.6,y:39.2},0).wait(1).to({scaleX:0.77,scaleY:0.63,skewX:22.2,x:-18.4,y:40.3},0).wait(1).to({scaleX:0.77,scaleY:0.65,skewX:19.1,x:-18,y:41.4},0).wait(1).to({scaleX:0.78,scaleY:0.68,skewX:16,x:-17.5,y:42.5},0).wait(1).to({scaleX:0.79,scaleY:0.7,skewX:13,x:-17,y:43.5},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:10.2,x:-16.5,y:44.4},0).wait(1).to({scaleX:0.8,scaleY:0.75,skewX:7.7,x:-16,y:45.2},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:5.4,x:-15.5,y:45.9},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:3.5,x:-15.1,y:46.5},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:2,x:-14.7,y:47},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.9,x:-14.4,y:47.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.2,x:-14.2,y:47.4},0).wait(1).to({regX:0.1,regY:0.1,scaleY:0.81,skewX:0,x:5.9,y:30.7},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.99,skewY:180.1,x:20.1,y:-3},0).wait(1).to({scaleX:0.98,skewY:180.3,x:20.2},0).wait(1).to({scaleX:0.97,skewY:180.5,x:20.3,y:-3.1},0).wait(1).to({scaleX:0.96,skewY:180.7,x:20.4,y:-3.2},0).wait(1).to({scaleX:0.94,skewY:181.1,x:20.5,y:-3.3},0).wait(1).to({scaleX:0.91,skewY:181.4,x:20.7,y:-3.4},0).wait(1).to({scaleX:0.88,skewY:181.9,x:20.9,y:-3.5},0).wait(1).to({scaleX:0.85,skewY:182.4,x:21.2,y:-3.6},0).wait(1).to({scaleX:0.82,skewY:182.9,x:21.4,y:-3.7},0).wait(1).to({scaleX:0.78,skewY:183.5,x:21.7,y:-3.8},0).wait(1).to({scaleX:0.75,skewY:184.1,x:21.9,y:-3.9},0).wait(1).to({scaleX:0.72,skewY:184.6,x:22.2,y:-4},0).wait(1).to({scaleX:0.69,skewY:185.1,x:22.4},0).wait(1).to({scaleX:0.66,skewY:185.5,x:22.6,y:-4.1},0).wait(1).to({scaleX:0.64,skewY:185.8,x:22.7},0).wait(1).to({scaleX:0.62,skewY:186.1,x:22.9},0).wait(1).to({scaleX:0.61,skewY:186.4,x:23},0).wait(1).to({scaleX:0.6,skewY:186.5,x:23.1},0).wait(1).to({regX:-17.4,regY:-2.4,scaleX:0.59,skewY:186.6,x:33.5,y:-5.2},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.6,x:23.1,y:-4.1},0).wait(1).to({scaleX:0.6,skewY:186.4,x:23},0).wait(1).to({scaleX:0.61,skewY:186.3},0).wait(1).to({scaleX:0.63,skewY:186,x:22.9},0).wait(1).to({scaleX:0.64,skewY:185.8,x:22.7},0).wait(1).to({scaleX:0.66,skewY:185.4,x:22.5},0).wait(1).to({scaleX:0.69,skewY:185.1,x:22.4,y:-4},0).wait(1).to({scaleX:0.71,skewY:184.6,x:22.2},0).wait(1).to({scaleX:0.74,skewY:184.2,x:22,y:-3.9},0).wait(1).to({scaleX:0.77,skewY:183.7,x:21.7,y:-3.8},0).wait(1).to({scaleX:0.8,skewY:183.2,x:21.5,y:-3.7},0).wait(1).to({scaleX:0.84,skewY:182.7,x:21.3,y:-3.6},0).wait(1).to({scaleX:0.87,skewY:182.2,x:21.1,y:-3.5},0).wait(1).to({scaleX:0.89,skewY:181.7,x:20.8,y:-3.4},0).wait(1).to({scaleX:0.92,skewY:181.3,x:20.6,y:-3.3},0).wait(1).to({scaleX:0.94,skewY:181,x:20.5,y:-3.2},0).wait(1).to({scaleX:0.96,skewY:180.7,x:20.4},0).wait(1).to({scaleX:0.97,skewY:180.5,x:20.2,y:-3.1},0).wait(1).to({scaleX:0.98,skewY:180.3,y:-3},0).wait(1).to({scaleX:0.99,skewY:180.1,x:20.1},0).wait(1).to({regX:-17.4,regY:-2.4,scaleX:1,skewY:180,x:37.7,y:-5.2},0).to({_off:true},1).wait(244));

	// BU_HeadClip
	this.instance_4 = new lib.BU_headclipEyes("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(36.7,0.6,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).wait(1).to({regX:-43.6,regY:-14.9,x:80.2,y:-14.3},0).wait(1).to({x:80.1},0).wait(1).to({x:80},0).wait(1).to({x:79.8},0).wait(1).to({x:79.6},0).wait(1).to({x:79.3},0).wait(1).to({x:79},0).wait(1).to({x:78.7},0).wait(1).to({x:78.3},0).wait(1).to({x:77.9},0).wait(1).to({x:77.6},0).wait(1).to({x:77.2},0).wait(1).to({x:76.9},0).wait(1).to({x:76.6},0).wait(1).to({x:76.4},0).wait(1).to({x:76.2},0).wait(1).to({x:76},0).wait(1).to({x:75.9},0).wait(1).to({regX:0,regY:0,x:32.2,y:0.6},0).wait(1).to({regX:-43.6,regY:-14.9,x:75.9,y:-14.3},0).wait(1).to({startPosition:0},0).wait(1).to({x:76.1},0).wait(1).to({x:76.2},0).wait(1).to({x:76.4},0).wait(1).to({x:76.6},0).wait(1).to({x:76.9},0).wait(1).to({x:77.2},0).wait(1).to({x:77.5},0).wait(1).to({x:77.8},0).wait(1).to({x:78.2},0).wait(1).to({x:78.5},0).wait(1).to({x:78.8},0).wait(1).to({x:79.1},0).wait(1).to({x:79.4},0).wait(1).to({x:79.6},0).wait(1).to({x:79.8},0).wait(1).to({x:80},0).wait(1).to({x:80.1},0).wait(1).to({x:80.2},0).wait(1).to({regX:0,regY:0,x:36.7,y:0.6,mode:"synched",loop:false},0).to({_off:true},1).wait(244));

	// BU_Tail
	this.instance_5 = new lib.BU_HeadClip("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.3,-0.8,0.812,0.812,0,0,0,-60.5,-5.2);

	this.instance_6 = new lib.BU_headclip("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(36.7,0.6,1,1,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.1,regY:-0.1,x:43.9,y:3.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({x:43.8,startPosition:3},0).wait(1).to({x:43.7,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({x:43.6,startPosition:6},0).wait(1).to({x:43.4,startPosition:7},0).wait(1).to({x:43.3,startPosition:8},0).wait(1).to({x:43.1,startPosition:9},0).wait(1).to({x:43,startPosition:10},0).wait(1).to({x:42.8,startPosition:11},0).wait(1).to({x:42.6,startPosition:12},0).wait(1).to({x:42.3,startPosition:13},0).wait(1).to({x:42.1,startPosition:14},0).wait(1).to({x:41.8,startPosition:15},0).wait(1).to({x:41.6,startPosition:16},0).wait(1).to({x:41.3,startPosition:17},0).wait(1).to({x:41,startPosition:18},0).wait(1).to({regX:-60.4,regY:-5.2,x:-8.4,y:-0.8,startPosition:19},0).wait(1).to({regX:0.1,regY:-0.1,x:40.7,y:3.3,startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({x:40.8,startPosition:22},0).wait(1).to({x:41,startPosition:23},0).wait(1).to({x:41.1,startPosition:24},0).wait(1).to({x:41.3,startPosition:25},0).wait(1).to({x:41.5,startPosition:26},0).wait(1).to({x:41.8,startPosition:27},0).wait(1).to({x:42,startPosition:28},0).wait(1).to({x:42.3,startPosition:29},0).wait(1).to({x:42.5,startPosition:30},0).wait(1).to({x:42.8,startPosition:31},0).wait(1).to({x:43,startPosition:32},0).wait(1).to({x:43.2,startPosition:33},0).wait(1).to({x:43.4,startPosition:34},0).wait(1).to({x:43.5,startPosition:35},0).wait(1).to({x:43.7,startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({x:43.8,startPosition:38},0).wait(1).to({regX:-60.5,regY:-5.2,x:-5.3,y:-0.8,startPosition:39},0).wait(1).to({regX:0.1,regY:-0.1,x:43.9,y:3.3,startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({x:43.8,startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({x:43.7,startPosition:44},0).wait(1).to({x:43.6,startPosition:45},0).wait(1).to({x:43.5,startPosition:46},0).wait(1).to({x:43.4,startPosition:47},0).wait(1).to({x:43.3,startPosition:48},0).wait(1).to({x:43.1,startPosition:49},0).wait(1).to({x:42.9,startPosition:50},0).wait(1).to({x:42.8,startPosition:51},0).wait(1).to({x:42.6,startPosition:52},0).wait(1).to({x:42.3,startPosition:53},0).wait(1).to({x:42.1,startPosition:54},0).wait(1).to({x:41.9,startPosition:55},0).wait(1).to({x:41.6,startPosition:56},0).wait(1).to({x:41.3,startPosition:57},0).wait(1).to({x:41,startPosition:58},0).wait(1).to({regX:-60.4,regY:-5.2,x:-8.4,y:-0.8,startPosition:59},0).wait(1).to({regX:0.1,regY:-0.1,x:40.7,y:3.3,startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({x:40.8,startPosition:62},0).wait(1).to({x:41,startPosition:63},0).wait(1).to({x:41.1,startPosition:64},0).wait(1).to({x:41.3,startPosition:65},0).wait(1).to({x:41.5,startPosition:66},0).wait(1).to({x:41.8,startPosition:67},0).wait(1).to({x:42,startPosition:68},0).wait(1).to({x:42.3,startPosition:69},0).wait(1).to({x:42.5,startPosition:70},0).wait(1).to({x:42.8,startPosition:71},0).wait(1).to({x:43,startPosition:72},0).wait(1).to({x:43.2,startPosition:73},0).wait(1).to({x:43.4,startPosition:74},0).wait(1).to({x:43.5,startPosition:75},0).wait(1).to({x:43.7,startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({x:43.8,startPosition:78},0).wait(1).to({regX:-60.5,regY:-5.2,x:-5.3,y:-0.8,startPosition:79},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({_off:false},0).wait(1).to({regX:-40.7,regY:-0.1,x:77.3,y:0.5},0).wait(1).to({x:77.2},0).wait(1).to({x:77.1},0).wait(1).to({x:76.9},0).wait(1).to({x:76.7},0).wait(1).to({x:76.4},0).wait(1).to({x:76.1},0).wait(1).to({x:75.8},0).wait(1).to({x:75.4},0).wait(1).to({x:75},0).wait(1).to({x:74.7},0).wait(1).to({x:74.3},0).wait(1).to({x:74},0).wait(1).to({x:73.7},0).wait(1).to({x:73.5},0).wait(1).to({x:73.3},0).wait(1).to({x:73.1},0).wait(1).to({x:73},0).wait(1).to({regX:0,regY:0,x:32.2,y:0.6},0).wait(1).to({regX:-40.7,regY:-0.1,x:73,y:0.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:73.2},0).wait(1).to({x:73.3},0).wait(1).to({x:73.5},0).wait(1).to({x:73.7},0).wait(1).to({x:74},0).wait(1).to({x:74.3},0).wait(1).to({x:74.6},0).wait(1).to({x:74.9},0).wait(1).to({x:75.3},0).wait(1).to({x:75.6},0).wait(1).to({x:75.9},0).wait(1).to({x:76.2},0).wait(1).to({x:76.5},0).wait(1).to({x:76.7},0).wait(1).to({x:76.9},0).wait(1).to({x:77.1},0).wait(1).to({x:77.2},0).wait(1).to({x:77.3},0).wait(1).to({regX:0,regY:0,x:36.7,y:0.6},0).to({_off:true},1).wait(244));

	// BU_Body
	this.instance_7 = new lib.ClipGroup_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-46,-3.2,0.977,0.977,0,0,0,-0.1,-0.1);

	this.instance_8 = new lib.BU_body("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.2,3.2,1,1,0,0,180,36.9,2.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-20.8,regY:-9.2,scaleX:0.98,x:-66.2,y:-12},0).wait(1).to({scaleX:0.97,x:-65.9},0).wait(1).to({scaleX:0.96,x:-65.5},0).wait(1).to({scaleX:0.95,x:-65},0).wait(1).to({scaleX:0.94,x:-64.3},0).wait(1).to({scaleX:0.92,x:-63.5},0).wait(1).to({scaleX:0.9,x:-62.6,y:-11.9},0).wait(1).to({scaleX:0.88,x:-61.5},0).wait(1).to({scaleX:0.85,x:-60.4},0).wait(1).to({scaleX:0.83,x:-59.3,y:-11.8},0).wait(1).to({scaleX:0.8,x:-58.1},0).wait(1).to({scaleX:0.78,x:-56.8},0).wait(1).to({scaleX:0.75,x:-55.6,y:-11.7},0).wait(1).to({scaleX:0.73,x:-54.4},0).wait(1).to({scaleX:0.7,x:-53.2},0).wait(1).to({scaleX:0.68,x:-52.2,y:-11.6},0).wait(1).to({scaleX:0.66,x:-51.2},0).wait(1).to({scaleX:0.64,x:-50.3},0).wait(1).to({regX:-0.1,regY:-0.4,scaleX:0.62,x:-36.6,y:-2.7},0).wait(1).to({regX:-20.8,regY:-9.2,scaleX:0.62,x:-49.6,y:-11.3},0).wait(1).to({scaleX:0.63,x:-49.9},0).wait(1).to({scaleX:0.64,x:-50.4},0).wait(1).to({scaleX:0.66,x:-51},0).wait(1).to({scaleX:0.67,x:-51.9,y:-11.4},0).wait(1).to({scaleX:0.7,x:-52.9},0).wait(1).to({scaleX:0.72,x:-54.1},0).wait(1).to({scaleX:0.75,x:-55.3,y:-11.5},0).wait(1).to({scaleX:0.77,x:-56.6},0).wait(1).to({scaleX:0.8,x:-57.9,y:-11.6},0).wait(1).to({scaleX:0.83,x:-59.3},0).wait(1).to({scaleX:0.86,x:-60.6},0).wait(1).to({scaleX:0.88,x:-61.8,y:-11.7},0).wait(1).to({scaleX:0.91,x:-62.9},0).wait(1).to({scaleX:0.93,x:-63.9},0).wait(1).to({scaleX:0.95,x:-64.7,y:-11.8},0).wait(1).to({scaleX:0.96,x:-65.3},0).wait(1).to({scaleX:0.97,x:-65.8},0).wait(1).to({scaleX:0.98,x:-66.1},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,x:-46,y:-3.2},0).wait(1).to({regX:-20.8,regY:-9.2,scaleX:0.98,x:-66.1,y:-12},0).wait(1).to({scaleX:0.97,x:-65.8},0).wait(1).to({scaleX:0.96,x:-65.4},0).wait(1).to({scaleX:0.95,x:-64.7},0).wait(1).to({scaleX:0.93,x:-63.9},0).wait(1).to({scaleX:0.91,x:-63},0).wait(1).to({scaleX:0.89,x:-62,y:-11.9},0).wait(1).to({scaleX:0.86,x:-60.8},0).wait(1).to({scaleX:0.84,x:-59.5,y:-11.8},0).wait(1).to({scaleX:0.81,x:-58.3},0).wait(1).to({scaleX:0.78,x:-56.9},0).wait(1).to({scaleX:0.75,x:-55.7,y:-11.7},0).wait(1).to({scaleX:0.73,x:-54.4},0).wait(1).to({scaleX:0.7,x:-53.2},0).wait(1).to({scaleX:0.68,x:-52.2,y:-11.6},0).wait(1).to({scaleX:0.66,x:-51.3},0).wait(1).to({scaleX:0.64,x:-50.5},0).wait(1).to({scaleX:0.63,x:-49.9},0).wait(1).to({scaleX:0.62,x:-49.6,y:-11.5},0).wait(1).to({regX:-0.1,regY:-0.4,scaleX:0.62,x:-36.6,y:-2.7},0).wait(1).to({regX:-20.8,regY:-9.2,scaleX:0.62,x:-49.6,y:-11.3},0).wait(1).to({scaleX:0.63,x:-49.9},0).wait(1).to({scaleX:0.64,x:-50.4},0).wait(1).to({scaleX:0.66,x:-51},0).wait(1).to({scaleX:0.67,x:-51.9,y:-11.4},0).wait(1).to({scaleX:0.7,x:-52.9},0).wait(1).to({scaleX:0.72,x:-54.1},0).wait(1).to({scaleX:0.75,x:-55.3,y:-11.5},0).wait(1).to({scaleX:0.77,x:-56.6},0).wait(1).to({scaleX:0.8,x:-57.9,y:-11.6},0).wait(1).to({scaleX:0.83,x:-59.3},0).wait(1).to({scaleX:0.86,x:-60.6},0).wait(1).to({scaleX:0.88,x:-61.8,y:-11.7},0).wait(1).to({scaleX:0.91,x:-62.9},0).wait(1).to({scaleX:0.93,x:-63.9},0).wait(1).to({scaleX:0.95,x:-64.7,y:-11.8},0).wait(1).to({scaleX:0.96,x:-65.3},0).wait(1).to({scaleX:0.97,x:-65.8},0).wait(1).to({scaleX:0.98,x:-66.1},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.98,x:-46,y:-3.2},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).wait(1).to({regX:32.3,regY:2.3,scaleX:1,skewX:-0.1,x:4.4,y:2.8},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,skewX:-0.3},0).wait(1).to({scaleX:0.99,skewX:-0.4},0).wait(1).to({scaleX:0.99,skewX:-0.6,x:4.3},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8,x:4.4},0).wait(1).to({scaleX:0.98,skewX:-1.1,x:4.3},0).wait(1).to({scaleX:0.98,skewX:-1.4},0).wait(1).to({scaleX:0.97,skewX:-1.7},0).wait(1).to({scaleX:0.96,skewX:-2.1},0).wait(1).to({scaleX:0.96,skewX:-2.4},0).wait(1).to({scaleX:0.95,scaleY:1,skewX:-2.7,x:4.2},0).wait(1).to({scaleX:0.95,skewX:-3},0).wait(1).to({scaleX:0.94,skewX:-3.2},0).wait(1).to({scaleX:0.94,skewX:-3.4},0).wait(1).to({scaleX:0.94,skewX:-3.6},0).wait(1).to({scaleX:0.93,skewX:-3.7},0).wait(1).to({scaleX:0.93,skewX:-3.8},0).wait(1).to({regX:36.7,regY:2.6,scaleX:0.93,skewX:-3.9,x:0,y:3.2},0).wait(1).to({regX:32.3,regY:2.3,scaleX:0.93,x:4,y:2.8},0).wait(1).to({scaleX:0.93,skewX:-3.8},0).wait(1).to({scaleX:0.93,skewX:-3.7,x:4.1},0).wait(1).to({scaleX:0.94,skewX:-3.5,x:4},0).wait(1).to({scaleX:0.94,skewX:-3.4,x:4.1},0).wait(1).to({scaleX:0.94,skewX:-3.2},0).wait(1).to({scaleX:0.95,skewX:-3},0).wait(1).to({scaleX:0.95,skewX:-2.7},0).wait(1).to({scaleX:0.96,scaleY:1,skewX:-2.4},0).wait(1).to({scaleX:0.96,skewX:-2.2},0).wait(1).to({scaleX:0.97,skewX:-1.9},0).wait(1).to({scaleX:0.97,skewX:-1.6},0).wait(1).to({scaleX:0.98,skewX:-1.3,x:4.2},0).wait(1).to({scaleX:0.98,skewX:-1},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-0.8},0).wait(1).to({scaleX:0.99,skewX:-0.6},0).wait(1).to({scaleX:0.99,skewX:-0.4},0).wait(1).to({scaleX:1,skewX:-0.3},0).wait(1).to({scaleX:1,skewX:-0.2},0).wait(1).to({scaleX:1,skewX:-0.1,x:4.3},0).wait(1).to({regX:36.9,regY:2.6,scaleX:1,skewX:0,x:-0.2,y:3.2},0).to({_off:true},1).wait(244));

	// BU_Dorsal_Large
	this.instance_9 = new lib.BU_Body("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-10.9,0.2,0.812,0.812,0,0,0,-20.4,-18.1);

	this.instance_10 = new lib.BU_fin("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(63.6,26,1,0.551,0,-9.8,180,-22,-22.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-0.2,regY:0,x:5.4,y:14.9},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.8,x:5.3},0).wait(1).to({scaleX:0.79,x:5.2},0).wait(1).to({scaleX:0.79},0).wait(1).to({scaleX:0.78,x:5.1},0).wait(1).to({scaleX:0.77,x:5},0).wait(1).to({scaleX:0.77,x:4.9},0).wait(1).to({scaleX:0.76},0).wait(1).to({scaleX:0.75,x:4.8},0).wait(1).to({scaleX:0.75,x:4.7},0).wait(1).to({scaleX:0.74},0).wait(1).to({scaleX:0.74,x:4.6},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73,x:4.5},0).wait(1).to({regX:-20.4,regY:-18.1,scaleX:0.73,x:-10.2,y:0.2},0).wait(1).to({regX:-0.2,regY:0,scaleX:0.73,x:4.5,y:14.9},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.74,x:4.6},0).wait(1).to({scaleX:0.74},0).wait(1).to({scaleX:0.75,x:4.7},0).wait(1).to({scaleX:0.75,x:4.8},0).wait(1).to({scaleX:0.76},0).wait(1).to({scaleX:0.76,x:4.9},0).wait(1).to({scaleX:0.77,x:5},0).wait(1).to({scaleX:0.78},0).wait(1).to({scaleX:0.78,x:5.1},0).wait(1).to({scaleX:0.79,x:5.2},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.8,x:5.3},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81,x:5.4},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81},0).wait(1).to({regX:-20.4,regY:-18.1,x:-10.9,y:0.2},0).wait(1).to({regX:-0.2,regY:0,x:5.4,y:14.9},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.8,x:5.3},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.79,x:5.2},0).wait(1).to({scaleX:0.79},0).wait(1).to({scaleX:0.78,x:5.1},0).wait(1).to({scaleX:0.77,x:5},0).wait(1).to({scaleX:0.77,x:4.9},0).wait(1).to({scaleX:0.76},0).wait(1).to({scaleX:0.75,x:4.8},0).wait(1).to({scaleX:0.75,x:4.7},0).wait(1).to({scaleX:0.74},0).wait(1).to({scaleX:0.74,x:4.6},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73,x:4.5},0).wait(1).to({regX:-20.4,regY:-18.1,scaleX:0.73,x:-10.2,y:0.2},0).wait(1).to({regX:-0.2,regY:0,scaleX:0.73,x:4.5,y:14.9},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.74,x:4.6},0).wait(1).to({scaleX:0.74},0).wait(1).to({scaleX:0.75,x:4.7},0).wait(1).to({scaleX:0.75,x:4.8},0).wait(1).to({scaleX:0.76},0).wait(1).to({scaleX:0.76,x:4.9},0).wait(1).to({scaleX:0.77,x:5},0).wait(1).to({scaleX:0.78},0).wait(1).to({scaleX:0.78,x:5.1},0).wait(1).to({scaleX:0.79,x:5.2},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.8,x:5.3},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81,x:5.4},0).wait(1).to({scaleX:0.81},0).wait(1).to({scaleX:0.81},0).wait(1).to({regX:-20.4,regY:-18.1,x:-10.9,y:0.2},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80).to({_off:false},0).wait(1).to({regX:-0.1,regY:-3.1,scaleY:0.55,skewX:-10.3,x:43.6,y:36.3},0).wait(1).to({scaleY:0.55,skewX:-11.2,x:43.7,y:36.2},0).wait(1).to({scaleY:0.54,skewX:-12.3,x:43.9,y:36.1},0).wait(1).to({scaleY:0.54,skewX:-13.8,x:44.1,y:35.9},0).wait(1).to({scaleY:0.53,skewX:-15.7,x:44.4,y:35.7},0).wait(1).to({scaleY:0.52,skewX:-17.8,x:44.7,y:35.4},0).wait(1).to({scaleY:0.51,skewX:-20.4,x:45.1,y:35.1},0).wait(1).to({scaleY:0.5,skewX:-23.2,x:45.4,y:34.7},0).wait(1).to({scaleY:0.49,skewX:-26.2,x:45.8,y:34.3},0).wait(1).to({scaleY:0.48,skewX:-29.4,x:46.1,y:33.9},0).wait(1).to({scaleY:0.47,skewX:-32.4,x:46.4,y:33.4},0).wait(1).to({scaleY:0.46,skewX:-35.4,x:46.7,y:33},0).wait(1).to({scaleY:0.45,skewX:-38,x:46.9,y:32.5},0).wait(1).to({scaleY:0.44,skewX:-40.4,x:47,y:32.2},0).wait(1).to({scaleY:0.44,skewX:-42.4,x:47.2,y:31.9},0).wait(1).to({scaleY:0.43,skewX:-44,x:47.3,y:31.6},0).wait(1).to({scaleY:0.43,skewX:-45.3,y:31.4},0).wait(1).to({scaleY:0.42,skewX:-46.2,x:47.4,y:31.3},0).wait(1).to({regX:-21.9,regY:-22.2,scaleY:0.42,skewX:-46.9,x:63.4,y:25.7},0).wait(1).to({regX:-0.1,regY:-3.1,scaleY:0.42,skewX:-46.4,x:47.4,y:31.2},0).wait(1).to({scaleY:0.42,skewX:-45.7,y:31.4},0).wait(1).to({scaleY:0.43,skewX:-44.7,x:47.3,y:31.5},0).wait(1).to({scaleY:0.43,skewX:-43.5,y:31.7},0).wait(1).to({scaleY:0.44,skewX:-41.9,x:47.2,y:31.9},0).wait(1).to({scaleY:0.44,skewX:-40.1,x:47.1,y:32.2},0).wait(1).to({scaleY:0.45,skewX:-38,x:46.9,y:32.5},0).wait(1).to({scaleY:0.46,skewX:-35.7,x:46.7,y:32.9},0).wait(1).to({scaleY:0.47,skewX:-33.1,x:46.5,y:33.3},0).wait(1).to({scaleY:0.48,skewX:-30.3,x:46.3,y:33.7},0).wait(1).to({scaleY:0.49,skewX:-27.5,x:46,y:34.1},0).wait(1).to({scaleY:0.5,skewX:-24.7,x:45.6,y:34.5},0).wait(1).to({scaleY:0.51,skewX:-22,x:45.3,y:34.9},0).wait(1).to({scaleY:0.52,skewX:-19.5,x:45,y:35.2},0).wait(1).to({scaleY:0.52,skewX:-17.3,x:44.7,y:35.5},0).wait(1).to({scaleY:0.53,skewX:-15.3,x:44.4,y:35.7},0).wait(1).to({scaleY:0.54,skewX:-13.7,x:44.1,y:36},0).wait(1).to({scaleY:0.54,skewX:-12.3,x:43.9,y:36.1},0).wait(1).to({scaleY:0.55,skewX:-11.2,x:43.7,y:36.2},0).wait(1).to({scaleY:0.55,skewX:-10.4,x:43.6,y:36.3},0).wait(1).to({regX:-22,regY:-22.2,scaleY:0.55,skewX:-9.8,x:63.6,y:26},0).to({_off:true},1).wait(244));

	// BU_Dorsal_Small
	this.instance_11 = new lib.BU_Dorsal_Large("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-6.9,-9.6,0.812,0.812,0,0,0,-0.2,-0.1);

	this.instance_12 = new lib.BU_dorsalsmall("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(47,-23.3,1,1,0,0,180,-5.8,16.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-11.6,regY:-34.8,scaleY:0.81,skewX:-0.2,skewY:-0.1,x:-16.2,y:-37.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.7,skewY:-0.3,x:-16.5,y:-37.5},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-1.5,skewY:-0.7,x:-16.7,y:-37.1},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:-2.7,skewY:-1.2,x:-17.2,y:-36.6},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:-4.1,skewY:-1.8,x:-17.7,y:-35.9},0).wait(1).to({scaleX:0.79,scaleY:0.76,skewX:-5.8,skewY:-2.5,x:-18.2,y:-35.2},0).wait(1).to({scaleX:0.79,scaleY:0.74,skewX:-7.7,skewY:-3.3,x:-18.8,y:-34.2},0).wait(1).to({scaleX:0.78,scaleY:0.72,skewX:-9.7,skewY:-4.2,x:-19.4,y:-33.3},0).wait(1).to({scaleX:0.78,scaleY:0.7,skewX:-11.8,skewY:-5.1,x:-19.9,y:-32.3},0).wait(1).to({scaleX:0.77,scaleY:0.68,skewX:-14,skewY:-6,x:-20.4,y:-31.2},0).wait(1).to({scaleX:0.76,scaleY:0.66,skewX:-16.1,skewY:-6.9,x:-20.8,y:-30.1},0).wait(1).to({scaleX:0.76,scaleY:0.64,skewX:-18.1,skewY:-7.8,x:-21.1,y:-29.1},0).wait(1).to({scaleX:0.75,scaleY:0.62,skewX:-19.9,skewY:-8.6,x:-21.4,y:-28.2},0).wait(1).to({scaleX:0.75,scaleY:0.61,skewX:-21.5,skewY:-9.3,x:-21.6,y:-27.3},0).wait(1).to({scaleX:0.74,scaleY:0.59,skewX:-22.9,skewY:-9.9,x:-21.7,y:-26.6},0).wait(1).to({scaleX:0.74,scaleY:0.58,skewX:-24,skewY:-10.3,x:-21.8,y:-26},0).wait(1).to({scaleX:0.74,scaleY:0.57,skewX:-24.8,skewY:-10.7,x:-21.9,y:-25.6},0).wait(1).to({scaleX:0.73,scaleY:0.57,skewX:-25.3,skewY:-10.9,y:-25.4},0).wait(1).to({regX:-0.2,regY:-0.7,scaleY:0.57,skewX:-25.4,x:-5.2,y:-9},0).wait(1).to({regX:-11.6,regY:-34.8,scaleY:0.57,skewX:-25.3,x:-21.7,y:-25.1},0).wait(1).to({scaleX:0.74,scaleY:0.57,skewX:-24.8,skewY:-10.7,y:-25.3},0).wait(1).to({scaleX:0.74,scaleY:0.58,skewX:-24,skewY:-10.4,x:-21.6,y:-25.7},0).wait(1).to({scaleX:0.74,scaleY:0.59,skewX:-23,skewY:-9.9,x:-21.5,y:-26.2},0).wait(1).to({scaleX:0.75,scaleY:0.61,skewX:-21.7,skewY:-9.3,x:-21.4,y:-26.9},0).wait(1).to({scaleX:0.75,scaleY:0.62,skewX:-20.1,skewY:-8.7,x:-21.3,y:-27.7},0).wait(1).to({scaleX:0.76,scaleY:0.64,skewX:-18.4,skewY:-7.9,x:-21,y:-28.6},0).wait(1).to({scaleX:0.76,scaleY:0.65,skewX:-16.5,skewY:-7.1,x:-20.7,y:-29.6},0).wait(1).to({scaleX:0.77,scaleY:0.67,skewX:-14.5,skewY:-6.3,x:-20.4,y:-30.6},0).wait(1).to({scaleX:0.77,scaleY:0.69,skewX:-12.5,skewY:-5.4,x:-19.9,y:-31.6},0).wait(1).to({scaleX:0.78,scaleY:0.71,skewX:-10.5,skewY:-4.5,x:-19.4,y:-32.5},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:-8.5,skewY:-3.7,x:-18.9,y:-33.5},0).wait(1).to({scaleX:0.79,scaleY:0.75,skewX:-6.7,skewY:-2.9,x:-18.4,y:-34.3},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-5,skewY:-2.2,x:-17.9,y:-35.1},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:-3.5,skewY:-1.5,x:-17.4,y:-35.8},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-2.3,skewY:-1,x:-17,y:-36.3},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-1.3,skewY:-0.6,x:-16.6,y:-36.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.6,skewY:-0.2,x:-16.4,y:-37},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.1,skewY:-0.1,x:-16.1,y:-37.2},0).wait(1).to({regX:-0.2,regY:-0.1,scaleY:0.81,skewX:0,skewY:0,x:-6.9,y:-9.6},0).wait(1).to({regX:-11.6,regY:-34.8,scaleY:0.81,skewX:-0.1,skewY:-0.1,x:-16.2,y:-37.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.6,skewY:-0.2,x:-16.4,y:-37.5},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-1.3,skewY:-0.5,x:-16.7,y:-37.2},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-2.2,skewY:-1,x:-17,y:-36.8},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:-3.4,skewY:-1.5,x:-17.4,y:-36.2},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:-4.9,skewY:-2.1,x:-17.9,y:-35.6},0).wait(1).to({scaleX:0.79,scaleY:0.75,skewX:-6.5,skewY:-2.8,x:-18.5,y:-34.9},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:-8.2,skewY:-3.6,x:-18.9,y:-34},0).wait(1).to({scaleX:0.78,scaleY:0.72,skewX:-10.1,skewY:-4.4,x:-19.5,y:-33.1},0).wait(1).to({scaleX:0.77,scaleY:0.7,skewX:-12.1,skewY:-5.2,x:-20,y:-32.2},0).wait(1).to({scaleX:0.77,scaleY:0.68,skewX:-14.1,skewY:-6.1,x:-20.4,y:-31.1},0).wait(1).to({scaleX:0.76,scaleY:0.66,skewX:-16.1,skewY:-6.9,x:-20.8,y:-30.1},0).wait(1).to({scaleX:0.76,scaleY:0.64,skewX:-18,skewY:-7.7,x:-21.1,y:-29.1},0).wait(1).to({scaleX:0.75,scaleY:0.62,skewX:-19.8,skewY:-8.5,x:-21.4,y:-28.2},0).wait(1).to({scaleX:0.75,scaleY:0.61,skewX:-21.4,skewY:-9.2,x:-21.6,y:-27.4},0).wait(1).to({scaleX:0.74,scaleY:0.6,skewX:-22.8,skewY:-9.8,x:-21.7,y:-26.7},0).wait(1).to({scaleX:0.74,scaleY:0.58,skewX:-23.9,skewY:-10.3,x:-21.8,y:-26.1},0).wait(1).to({scaleX:0.74,scaleY:0.58,skewX:-24.7,skewY:-10.6,x:-21.9,y:-25.6},0).wait(1).to({scaleX:0.73,scaleY:0.57,skewX:-25.2,skewY:-10.9,x:-21.8,y:-25.4},0).wait(1).to({regX:-0.2,regY:-0.7,scaleX:0.73,scaleY:0.57,skewX:-25.4,x:-5.2,y:-9},0).wait(1).to({regX:-11.6,regY:-34.8,scaleY:0.57,skewX:-25.3,x:-21.7,y:-25.1},0).wait(1).to({scaleX:0.74,scaleY:0.57,skewX:-24.8,skewY:-10.7,y:-25.3},0).wait(1).to({scaleX:0.74,scaleY:0.58,skewX:-24,skewY:-10.4,x:-21.6,y:-25.7},0).wait(1).to({scaleX:0.74,scaleY:0.59,skewX:-23,skewY:-9.9,x:-21.5,y:-26.2},0).wait(1).to({scaleX:0.75,scaleY:0.61,skewX:-21.7,skewY:-9.3,x:-21.4,y:-26.9},0).wait(1).to({scaleX:0.75,scaleY:0.62,skewX:-20.1,skewY:-8.7,x:-21.3,y:-27.7},0).wait(1).to({scaleX:0.76,scaleY:0.64,skewX:-18.4,skewY:-7.9,x:-21,y:-28.6},0).wait(1).to({scaleX:0.76,scaleY:0.65,skewX:-16.5,skewY:-7.1,x:-20.7,y:-29.6},0).wait(1).to({scaleX:0.77,scaleY:0.67,skewX:-14.5,skewY:-6.3,x:-20.4,y:-30.6},0).wait(1).to({scaleX:0.77,scaleY:0.69,skewX:-12.5,skewY:-5.4,x:-19.9,y:-31.6},0).wait(1).to({scaleX:0.78,scaleY:0.71,skewX:-10.5,skewY:-4.5,x:-19.4,y:-32.5},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:-8.5,skewY:-3.7,x:-18.9,y:-33.5},0).wait(1).to({scaleX:0.79,scaleY:0.75,skewX:-6.7,skewY:-2.9,x:-18.4,y:-34.3},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-5,skewY:-2.2,x:-17.9,y:-35.1},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:-3.5,skewY:-1.5,x:-17.4,y:-35.8},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-2.3,skewY:-1,x:-17,y:-36.3},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-1.3,skewY:-0.6,x:-16.6,y:-36.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.6,skewY:-0.2,x:-16.4,y:-37},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.1,skewY:-0.1,x:-16.1,y:-37.2},0).wait(1).to({regX:-0.2,regY:-0.1,scaleY:0.81,skewX:0,skewY:0,x:-6.9,y:-9.6},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80).to({_off:false},0).wait(1).to({regX:0.2,regY:0.1,scaleX:1,skewX:-0.1,x:40.9,y:-40},0).wait(1).to({skewX:-0.2,x:40.7},0).wait(1).to({scaleX:1,skewX:-0.4,x:40.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.6,x:40.4},0).wait(1).to({scaleX:0.99,skewX:-0.9,x:40.1},0).wait(1).to({scaleX:0.99,skewX:-1.2,x:39.8},0).wait(1).to({scaleX:0.99,skewX:-1.5,x:39.4},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.9,x:39},0).wait(1).to({scaleX:0.98,skewX:-2.4,x:38.6},0).wait(1).to({scaleX:0.98,skewX:-2.8,x:38.2},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:-3.3,x:37.7},0).wait(1).to({scaleX:0.97,skewX:-3.7,x:37.3},0).wait(1).to({scaleX:0.97,skewX:-4.1,x:36.9},0).wait(1).to({scaleX:0.97,scaleY:1,skewX:-4.4,x:36.6},0).wait(1).to({scaleX:0.97,skewX:-4.7,x:36.3},0).wait(1).to({scaleX:0.97,skewX:-5,x:36.1},0).wait(1).to({scaleX:0.96,skewX:-5.2,x:35.9},0).wait(1).to({scaleX:0.96,skewX:-5.3,x:35.7},0).wait(1).to({regX:-5.9,regY:16.8,scaleX:0.96,skewX:-5.4,x:43.1,y:-23.3},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.96,skewX:-5.3,x:35.6,y:-40},0).wait(1).to({scaleX:0.96,skewX:-5.2,x:35.7},0).wait(1).to({scaleX:0.97,skewX:-5.1,x:35.9},0).wait(1).to({scaleX:0.97,skewX:-4.9,x:36},0).wait(1).to({scaleX:0.97,skewX:-4.7,x:36.3},0).wait(1).to({scaleX:0.97,skewX:-4.4,x:36.5},0).wait(1).to({scaleX:0.97,scaleY:1,skewX:-4.1,x:36.8},0).wait(1).to({scaleX:0.97,skewX:-3.8,x:37.2},0).wait(1).to({scaleX:0.98,skewX:-3.4,x:37.5},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:-3,x:37.9},0).wait(1).to({scaleX:0.98,skewX:-2.6,x:38.3},0).wait(1).to({scaleX:0.99,skewX:-2.2,x:38.7},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-1.8,x:39.1},0).wait(1).to({scaleX:0.99,skewX:-1.4,x:39.5},0).wait(1).to({scaleX:0.99,skewX:-1.1,x:39.8},0).wait(1).to({scaleX:0.99,skewX:-0.8,x:40.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.6,x:40.3},0).wait(1).to({scaleX:1,skewX:-0.4,x:40.5},0).wait(1).to({scaleX:1,skewX:-0.2,x:40.6},0).wait(1).to({skewX:-0.1,x:40.8},0).wait(1).to({regX:-5.8,regY:16.8,scaleX:1,skewX:0,x:47,y:-23.3},0).to({_off:true},1).wait(244));

	// BU_Fin_Left
	this.instance_13 = new lib.BU_Dorsal_Small("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(25.1,-23.6,0.812,0.812,0,0,0,0.1,-0.1);

	this.instance_14 = new lib.BU_dorsallarge("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(12.9,-14.5,1,1,0,0,180,-27.4,21.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:-3.4,regY:-11.8,scaleY:0.81,skewX:-0.2,x:22.1,y:-33},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.8,x:22},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-1.9,x:21.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-3.3,x:21.4,y:-32.9},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:-5,x:21.1,y:-32.8},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-7.1,x:20.6,y:-32.7},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-9.4,x:20.1,y:-32.6},0).wait(1).to({scaleX:0.78,scaleY:0.77,skewX:-11.9,x:19.6,y:-32.4},0).wait(1).to({scaleX:0.78,scaleY:0.76,skewX:-14.5,x:19,y:-32.2},0).wait(1).to({scaleX:0.77,scaleY:0.75,skewX:-17.1,x:18.5,y:-31.9},0).wait(1).to({scaleX:0.76,scaleY:0.74,skewX:-19.7,x:18,y:-31.7},0).wait(1).to({scaleX:0.76,scaleY:0.73,skewX:-22.1,x:17.6,y:-31.5},0).wait(1).to({scaleX:0.75,scaleY:0.72,skewX:-24.4,x:17.1,y:-31.3},0).wait(1).to({scaleX:0.75,scaleY:0.71,skewX:-26.3,x:16.8,y:-31.1},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-28,x:16.5,y:-30.9},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-29.4,x:16.2,y:-30.8},0).wait(1).to({scaleX:0.74,scaleY:0.69,skewX:-30.3,x:16.1,y:-30.7},0).wait(1).to({scaleX:0.73,scaleY:0.69,skewX:-30.9,x:16,y:-30.6},0).wait(1).to({regX:0.4,regY:-0.4,scaleY:0.69,skewX:-31.1,x:22.7,y:-23.7},0).wait(1).to({regX:-3.4,regY:-11.8,scaleY:0.69,skewX:-30.9,x:15.8,y:-30.4},0).wait(1).to({scaleX:0.74,scaleY:0.69,skewX:-30.4,x:15.9,y:-30.5},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-29.4,x:16.1,y:-30.6},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-28.1,x:16.3,y:-30.7},0).wait(1).to({scaleX:0.75,scaleY:0.71,skewX:-26.5,x:16.5,y:-30.9},0).wait(1).to({scaleX:0.75,scaleY:0.72,skewX:-24.7,x:16.9,y:-31},0).wait(1).to({scaleX:0.76,scaleY:0.72,skewX:-22.5,x:17.3,y:-31.3},0).wait(1).to({scaleX:0.76,scaleY:0.73,skewX:-20.2,x:17.7,y:-31.5},0).wait(1).to({scaleX:0.77,scaleY:0.74,skewX:-17.8,x:18.1,y:-31.7},0).wait(1).to({scaleX:0.77,scaleY:0.75,skewX:-15.3,x:18.6,y:-31.9},0).wait(1).to({scaleX:0.78,scaleY:0.76,skewX:-12.8,x:19.1,y:-32},0).wait(1).to({scaleX:0.79,scaleY:0.77,skewX:-10.4,x:19.6,y:-32.2},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-8.2,x:20.1,y:-32.4},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:-6.1,x:20.5,y:-32.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-4.3,x:21,y:-32.6},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-2.8,x:21.3,y:-32.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-1.6,x:21.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.7,x:21.8,y:-32.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.2,x:21.9},0).wait(1).to({regX:0.1,regY:-0.1,skewX:0,x:25.1,y:-23.6},0).wait(1).to({regX:-3.4,regY:-11.8,skewX:-0.2,x:22.1,y:-33.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.7,x:22,y:-33},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-1.6,x:21.8},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-2.7,x:21.5,y:-32.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-4.2,x:21.2,y:-32.8},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:-5.9,x:20.9,y:-32.7},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-7.9,x:20.4,y:-32.6},0).wait(1).to({scaleX:0.79,scaleY:0.77,skewX:-10.1,x:19.9,y:-32.5},0).wait(1).to({scaleX:0.78,scaleY:0.76,skewX:-12.4,x:19.4,y:-32.3},0).wait(1).to({scaleX:0.78,scaleY:0.75,skewX:-14.8,x:18.9,y:-32.1},0).wait(1).to({scaleX:0.77,scaleY:0.75,skewX:-17.3,x:18.5,y:-31.9},0).wait(1).to({scaleX:0.76,scaleY:0.74,skewX:-19.7,x:18,y:-31.7},0).wait(1).to({scaleX:0.76,scaleY:0.73,skewX:-22,x:17.6,y:-31.5},0).wait(1).to({scaleX:0.75,scaleY:0.72,skewX:-24.2,x:17.2,y:-31.3},0).wait(1).to({scaleX:0.75,scaleY:0.71,skewX:-26.2,x:16.8,y:-31.1},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-27.9,x:16.5,y:-31},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-29.2,x:16.3,y:-30.8},0).wait(1).to({scaleX:0.74,scaleY:0.69,skewX:-30.3,x:16.1,y:-30.7},0).wait(1).to({scaleX:0.73,scaleY:0.69,skewX:-30.9,x:16,y:-30.6},0).wait(1).to({regX:0.4,regY:-0.4,scaleY:0.69,skewX:-31.1,x:22.7,y:-23.7},0).wait(1).to({regX:-3.4,regY:-11.8,scaleY:0.69,skewX:-30.9,x:15.8,y:-30.4},0).wait(1).to({scaleX:0.74,scaleY:0.69,skewX:-30.4,x:15.9,y:-30.5},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-29.4,x:16.1,y:-30.6},0).wait(1).to({scaleX:0.74,scaleY:0.7,skewX:-28.1,x:16.3,y:-30.7},0).wait(1).to({scaleX:0.75,scaleY:0.71,skewX:-26.5,x:16.5,y:-30.9},0).wait(1).to({scaleX:0.75,scaleY:0.72,skewX:-24.7,x:16.9,y:-31},0).wait(1).to({scaleX:0.76,scaleY:0.72,skewX:-22.5,x:17.3,y:-31.3},0).wait(1).to({scaleX:0.76,scaleY:0.73,skewX:-20.2,x:17.7,y:-31.5},0).wait(1).to({scaleX:0.77,scaleY:0.74,skewX:-17.8,x:18.1,y:-31.7},0).wait(1).to({scaleX:0.77,scaleY:0.75,skewX:-15.3,x:18.6,y:-31.9},0).wait(1).to({scaleX:0.78,scaleY:0.76,skewX:-12.8,x:19.1,y:-32},0).wait(1).to({scaleX:0.79,scaleY:0.77,skewX:-10.4,x:19.6,y:-32.2},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-8.2,x:20.1,y:-32.4},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:-6.1,x:20.5,y:-32.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-4.3,x:21,y:-32.6},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-2.8,x:21.3,y:-32.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-1.6,x:21.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.7,x:21.8,y:-32.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.2,x:21.9},0).wait(1).to({regX:0.1,regY:-0.1,skewX:0,x:25.1,y:-23.6},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80).to({_off:false},0).wait(1).to({regX:-0.1,regY:0.2,scaleX:1,x:-14.4,y:-35.9},0).wait(1).to({scaleX:1,skewX:-0.1,x:-14.5},0).wait(1).to({scaleX:1,skewX:-0.2},0).wait(1).to({scaleX:0.99,x:-14.6},0).wait(1).to({scaleX:0.99,skewX:-0.4},0).wait(1).to({scaleX:0.99,skewX:-0.5,x:-14.7},0).wait(1).to({scaleX:0.98,skewX:-0.6,x:-14.8},0).wait(1).to({scaleX:0.97,skewX:-0.8,x:-14.9},0).wait(1).to({scaleX:0.97,skewX:-1,x:-15},0).wait(1).to({scaleX:0.96,skewX:-1.2,x:-15.1},0).wait(1).to({scaleX:0.96,skewX:-1.4,x:-15.3},0).wait(1).to({scaleX:0.95,scaleY:1,skewX:-1.5,x:-15.4},0).wait(1).to({scaleX:0.95,skewX:-1.7,x:-15.5},0).wait(1).to({scaleX:0.94,skewX:-1.8,x:-15.6},0).wait(1).to({scaleX:0.94,skewX:-2},0).wait(1).to({scaleX:0.93,skewX:-2.1,x:-15.7},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,skewX:-2.2,x:-15.8},0).wait(1).to({regX:-27.3,regY:21.6,scaleX:0.93,x:10.3,y:-14.5},0).wait(1).to({regX:-0.1,regY:0.2,scaleX:0.93,x:-15.7,y:-35.9},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,skewX:-2.1},0).wait(1).to({scaleX:0.94,skewX:-2,x:-15.6},0).wait(1).to({scaleX:0.94,skewX:-1.9},0).wait(1).to({scaleX:0.94,skewX:-1.8,x:-15.5},0).wait(1).to({scaleX:0.95,skewX:-1.7,x:-15.4},0).wait(1).to({scaleX:0.95,skewX:-1.6,x:-15.3},0).wait(1).to({scaleX:0.96,skewX:-1.4,x:-15.2},0).wait(1).to({scaleX:0.96,scaleY:1,skewX:-1.2,x:-15.1},0).wait(1).to({scaleX:0.97,skewX:-1.1,x:-15},0).wait(1).to({scaleX:0.97,skewX:-0.9,x:-14.9},0).wait(1).to({scaleX:0.98,skewX:-0.7,x:-14.8},0).wait(1).to({scaleX:0.98,skewX:-0.6,x:-14.7},0).wait(1).to({scaleX:0.99,skewX:-0.4,x:-14.6},0).wait(1).to({scaleX:0.99,skewX:-0.3},0).wait(1).to({scaleX:0.99,skewX:-0.2,x:-14.5},0).wait(1).to({scaleX:1,x:-14.4},0).wait(1).to({scaleX:1,skewX:-0.1},0).wait(1).to({scaleX:1,skewX:0},0).wait(1).to({regX:-27.4,regY:21.6,scaleX:1,x:12.9,y:-14.5},0).to({_off:true},1).wait(244));

	// BU_UnderFin
	this.instance_15 = new lib.BU_Fin_Left("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(59.5,29.9,0.812,0.812,0,0,0,0,0.2);

	this.instance_16 = new lib.BU_tail("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-28.1,2.9,1,1,0,0,180,-40.5,1.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:24.1,regY:19.4,scaleY:0.81,skewX:-0.2,x:79.1,y:45.4},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-0.8,x:79,y:45.2},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-1.7,x:79.1,y:44.8},0).wait(1).to({scaleX:0.8,scaleY:0.77,skewX:-3,x:79,y:44.3},0).wait(1).to({scaleX:0.8,scaleY:0.75,skewX:-4.6,y:43.6},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:-6.5,x:78.9,y:42.9},0).wait(1).to({scaleX:0.79,scaleY:0.7,skewX:-8.6,x:78.7,y:41.9},0).wait(1).to({scaleX:0.78,scaleY:0.67,skewX:-10.9,x:78.6,y:41},0).wait(1).to({scaleX:0.78,scaleY:0.63,skewX:-13.2,x:78.3,y:40},0).wait(1).to({scaleX:0.77,scaleY:0.6,skewX:-15.6,x:78,y:38.9},0).wait(1).to({scaleX:0.76,scaleY:0.57,skewX:-17.9,x:77.7,y:37.9},0).wait(1).to({scaleX:0.76,scaleY:0.54,skewX:-20.2,x:77.3,y:36.9},0).wait(1).to({scaleX:0.75,scaleY:0.51,skewX:-22.2,x:76.8,y:36.1},0).wait(1).to({scaleX:0.75,scaleY:0.49,skewX:-24,x:76.5,y:35.2},0).wait(1).to({scaleX:0.74,scaleY:0.47,skewX:-25.5,x:76.1,y:34.6},0).wait(1).to({scaleX:0.74,scaleY:0.45,skewX:-26.8,x:75.8,y:34.1},0).wait(1).to({scaleX:0.74,scaleY:0.44,skewX:-27.7,x:75.6,y:33.7},0).wait(1).to({scaleX:0.73,scaleY:0.43,skewX:-28.2,x:75.4,y:33.4},0).wait(1).to({regX:0.1,regY:0.2,scaleY:0.43,skewX:-28.4,x:53.8,y:26.1},0).wait(1).to({regX:24.1,regY:19.4,scaleY:0.43,skewX:-28.2,x:75.4,y:33.4},0).wait(1).to({scaleX:0.74,scaleY:0.44,skewX:-27.7,x:75.5,y:33.6},0).wait(1).to({scaleX:0.74,scaleY:0.45,skewX:-26.8,x:75.8,y:34},0).wait(1).to({scaleX:0.74,scaleY:0.47,skewX:-25.7,x:76,y:34.5},0).wait(1).to({scaleX:0.75,scaleY:0.49,skewX:-24.2,x:76.3,y:35.1},0).wait(1).to({scaleX:0.75,scaleY:0.51,skewX:-22.5,x:76.8,y:35.9},0).wait(1).to({scaleX:0.76,scaleY:0.54,skewX:-20.5,x:77.1,y:36.8},0).wait(1).to({scaleX:0.76,scaleY:0.56,skewX:-18.4,x:77.5,y:37.7},0).wait(1).to({scaleX:0.77,scaleY:0.59,skewX:-16.2,x:77.9,y:38.6},0).wait(1).to({scaleX:0.77,scaleY:0.62,skewX:-14,x:78.2,y:39.6},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:-11.7,x:78.5,y:40.6},0).wait(1).to({scaleX:0.79,scaleY:0.68,skewX:-9.5,x:78.7,y:41.5},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:-7.5,x:78.8,y:42.4},0).wait(1).to({scaleX:0.8,scaleY:0.74,skewX:-5.6,x:78.9,y:43.2},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-3.9,x:79,y:43.8},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:-2.6,y:44.4},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-1.4,x:79.1,y:44.8},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-0.6,y:45.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.2,x:79,y:45.3},0).wait(1).to({regX:0,regY:0.2,scaleY:0.81,skewX:0,x:59.5,y:29.9},0).wait(1).to({regX:24.1,regY:19.4,scaleY:0.81,skewX:-0.2,x:79.1,y:45.4},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-0.6,y:45.2},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-1.4,y:44.9},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:-2.5,x:79,y:44.5},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-3.8,y:43.9},0).wait(1).to({scaleX:0.8,scaleY:0.74,skewX:-5.4,x:78.9,y:43.3},0).wait(1).to({scaleX:0.79,scaleY:0.72,skewX:-7.2,y:42.5},0).wait(1).to({scaleX:0.79,scaleY:0.69,skewX:-9.2,x:78.7,y:41.7},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:-11.3,x:78.5,y:40.8},0).wait(1).to({scaleX:0.78,scaleY:0.63,skewX:-13.5,x:78.2,y:39.8},0).wait(1).to({scaleX:0.77,scaleY:0.6,skewX:-15.7,x:78,y:38.9},0).wait(1).to({scaleX:0.76,scaleY:0.57,skewX:-17.9,x:77.7,y:37.9},0).wait(1).to({scaleX:0.76,scaleY:0.54,skewX:-20.1,x:77.3,y:37},0).wait(1).to({scaleX:0.75,scaleY:0.52,skewX:-22.1,x:76.9,y:36.1},0).wait(1).to({scaleX:0.75,scaleY:0.49,skewX:-23.8,x:76.5,y:35.3},0).wait(1).to({scaleX:0.74,scaleY:0.47,skewX:-25.4,x:76.1,y:34.7},0).wait(1).to({scaleX:0.74,scaleY:0.45,skewX:-26.7,x:75.8,y:34.1},0).wait(1).to({scaleX:0.74,scaleY:0.44,skewX:-27.6,x:75.6,y:33.7},0).wait(1).to({scaleX:0.73,scaleY:0.43,skewX:-28.2,x:75.4,y:33.4},0).wait(1).to({regX:0.1,regY:0.2,scaleY:0.43,skewX:-28.4,x:53.8,y:26.1},0).wait(1).to({regX:24.1,regY:19.4,scaleY:0.43,skewX:-28.2,x:75.4,y:33.4},0).wait(1).to({scaleX:0.74,scaleY:0.44,skewX:-27.7,x:75.5,y:33.6},0).wait(1).to({scaleX:0.74,scaleY:0.45,skewX:-26.8,x:75.8,y:34},0).wait(1).to({scaleX:0.74,scaleY:0.47,skewX:-25.7,x:76,y:34.5},0).wait(1).to({scaleX:0.75,scaleY:0.49,skewX:-24.2,x:76.3,y:35.1},0).wait(1).to({scaleX:0.75,scaleY:0.51,skewX:-22.5,x:76.8,y:35.9},0).wait(1).to({scaleX:0.76,scaleY:0.54,skewX:-20.5,x:77.1,y:36.8},0).wait(1).to({scaleX:0.76,scaleY:0.56,skewX:-18.4,x:77.5,y:37.7},0).wait(1).to({scaleX:0.77,scaleY:0.59,skewX:-16.2,x:77.9,y:38.6},0).wait(1).to({scaleX:0.77,scaleY:0.62,skewX:-14,x:78.2,y:39.6},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:-11.7,x:78.5,y:40.6},0).wait(1).to({scaleX:0.79,scaleY:0.68,skewX:-9.5,x:78.7,y:41.5},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:-7.5,x:78.8,y:42.4},0).wait(1).to({scaleX:0.8,scaleY:0.74,skewX:-5.6,x:78.9,y:43.2},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-3.9,x:79,y:43.8},0).wait(1).to({scaleX:0.81,scaleY:0.78,skewX:-2.6,y:44.4},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-1.4,x:79.1,y:44.8},0).wait(1).to({scaleX:0.81,scaleY:0.8,skewX:-0.6,y:45.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:-0.2,x:79,y:45.3},0).wait(1).to({regX:0,regY:0.2,scaleY:0.81,skewX:0,x:59.5,y:29.9},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80).to({_off:false},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1,x:-68.3,y:1.4},0).wait(1).to({scaleX:0.99,x:-68.1},0).wait(1).to({scaleX:0.98,x:-67.7},0).wait(1).to({scaleX:0.97,x:-67.3},0).wait(1).to({scaleX:0.96,x:-66.8},0).wait(1).to({scaleX:0.94,x:-66.1},0).wait(1).to({scaleX:0.92,x:-65.4},0).wait(1).to({scaleX:0.9,x:-64.6},0).wait(1).to({scaleX:0.88,x:-63.7},0).wait(1).to({scaleX:0.86,x:-62.8},0).wait(1).to({scaleX:0.84,x:-61.8},0).wait(1).to({scaleX:0.81,x:-61},0).wait(1).to({scaleX:0.8,x:-60.2},0).wait(1).to({scaleX:0.78,x:-59.5},0).wait(1).to({scaleX:0.76,x:-58.9},0).wait(1).to({scaleX:0.75,x:-58.5},0).wait(1).to({scaleX:0.74,x:-58.1},0).wait(1).to({scaleX:0.74,x:-57.8},0).wait(1).to({regX:-40.5,regY:1.6,scaleX:0.73,x:-28.1,y:2.9},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.73,x:-57.8,y:1.4},0).wait(1).to({scaleX:0.74,x:-58},0).wait(1).to({scaleX:0.75,x:-58.3},0).wait(1).to({scaleX:0.76,x:-58.6},0).wait(1).to({scaleX:0.77,x:-59.1},0).wait(1).to({scaleX:0.78,x:-59.6},0).wait(1).to({scaleX:0.8,x:-60.2},0).wait(1).to({scaleX:0.81,x:-60.9},0).wait(1).to({scaleX:0.83,x:-61.7},0).wait(1).to({scaleX:0.85,x:-62.5},0).wait(1).to({scaleX:0.87,x:-63.3},0).wait(1).to({scaleX:0.89,x:-64.1},0).wait(1).to({scaleX:0.91,x:-64.9},0).wait(1).to({scaleX:0.93,x:-65.6},0).wait(1).to({scaleX:0.95,x:-66.3},0).wait(1).to({scaleX:0.96,x:-66.9},0).wait(1).to({scaleX:0.97,x:-67.4},0).wait(1).to({scaleX:0.98,x:-67.8},0).wait(1).to({scaleX:0.99,x:-68.1},0).wait(1).to({scaleX:1,x:-68.3},0).wait(1).to({regX:-40.5,regY:1.6,scaleX:1,x:-28.1,y:2.9},0).to({_off:true},1).wait(244));

	// BU_UnderFin
	this.instance_17 = new lib.BU_UnderFin("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-27.3,19.1,0.812,0.812,0,0,0,-0.1,0.2);

	this.instance_18 = new lib.BU_pelvic("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3.8,21.3,1,1,0,0,180,-17.4,-14.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:-11.5,regY:9.2,skewX:0.2,skewY:0.1,x:-36.5,y:26.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.6,skewY:0.2,y:26.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:1.4,skewY:0.5,y:26.2},0).wait(1).to({scaleX:0.8,scaleY:0.81,skewX:2.4,skewY:0.9,x:-36.4,y:26.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:3.7,skewY:1.3,y:25.9},0).wait(1).to({scaleX:0.79,scaleY:0.8,skewX:5.3,skewY:1.9,x:-36.3,y:25.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:7,skewY:2.5,x:-36.2,y:25.4},0).wait(1).to({scaleX:0.78,scaleY:0.79,skewX:8.8,skewY:3.2,x:-36.1,y:25.1},0).wait(1).to({scaleX:0.78,scaleY:0.79,skewX:10.7,skewY:3.8,y:24.8},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:12.7,skewY:4.5,x:-35.9,y:24.5},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:14.5,skewY:5.2,y:24.2},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:16.4,skewY:5.9,x:-35.7,y:23.9},0).wait(1).to({scaleX:0.75,scaleY:0.77,skewX:18,skewY:6.5,y:23.6},0).wait(1).to({scaleX:0.75,scaleY:0.76,skewX:19.5,skewY:7,x:-35.6,y:23.3},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:20.7,skewY:7.4,x:-35.5,y:23.2},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:21.7,skewY:7.8,x:-35.4,y:23},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:22.4,skewY:8,y:22.8},0).wait(1).to({scaleX:0.73,scaleY:0.75,skewX:22.9,skewY:8.2,x:-35.3},0).wait(1).to({regX:-0.2,regY:0.1,skewX:23,x:-24.4,y:17.8},0).wait(1).to({regX:-11.5,regY:9.2,skewX:22.9,x:-35.3,y:22.9},0).wait(1).to({scaleX:0.74,scaleY:0.75,skewX:22.4,skewY:8},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:21.8,skewY:7.8,x:-35.4,y:23.1},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:20.8,skewY:7.5,y:23.2},0).wait(1).to({scaleX:0.75,scaleY:0.76,skewX:19.6,skewY:7,x:-35.5,y:23.5},0).wait(1).to({scaleX:0.75,scaleY:0.77,skewX:18.2,skewY:6.5,y:23.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:16.7,skewY:6,x:-35.7,y:24},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:15,skewY:5.4,y:24.3},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:13.2,skewY:4.7,x:-35.9,y:24.5},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:11.3,skewY:4.1,y:24.8},0).wait(1).to({scaleX:0.78,scaleY:0.79,skewX:9.5,skewY:3.4,x:-36,y:25.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:7.7,skewY:2.8,x:-36.1,y:25.4},0).wait(1).to({scaleX:0.79,scaleY:0.8,skewX:6.1,skewY:2.2,y:25.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:4.5,skewY:1.6,x:-36.2,y:25.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:3.2,skewY:1.1,y:26.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:2.1,skewY:0.7,x:-36.3,y:26.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:1.2,skewY:0.4,y:26.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.5,skewY:0.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.1,skewY:0,x:-36.4,y:26.5},0).wait(1).to({regX:-0.1,regY:0.2,skewX:0,x:-27.3,y:19.1},0).wait(1).to({regX:-11.5,regY:9.2,skewX:0.1,x:-36.5,y:26.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.5,skewY:0.2,x:-36.4,y:26.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:1.1,skewY:0.4,x:-36.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:2,skewY:0.7,x:-36.4,y:26.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:3.1,skewY:1.1,y:26},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:4.4,skewY:1.6,x:-36.3,y:25.8},0).wait(1).to({scaleX:0.79,scaleY:0.8,skewX:5.9,skewY:2.1,y:25.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:7.5,skewY:2.7,x:-36.2,y:25.4},0).wait(1).to({scaleX:0.78,scaleY:0.79,skewX:9.2,skewY:3.3,x:-36.1,y:25.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,skewX:11,skewY:3.9,x:-36,y:24.8},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:12.8,skewY:4.6,x:-35.9,y:24.5},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:14.6,skewY:5.2,y:24.2},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:16.3,skewY:5.8,x:-35.8,y:23.9},0).wait(1).to({scaleX:0.75,scaleY:0.77,skewX:17.9,skewY:6.4,x:-35.7,y:23.6},0).wait(1).to({scaleX:0.75,scaleY:0.76,skewX:19.3,skewY:6.9,x:-35.5,y:23.3},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:20.6,skewY:7.4,y:23.2},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:21.6,skewY:7.7,x:-35.4,y:23},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:22.4,skewY:8,y:22.8},0).wait(1).to({scaleX:0.73,scaleY:0.75,skewX:22.8,skewY:8.2,x:-35.3},0).wait(1).to({regX:-0.2,regY:0.1,skewX:23,x:-24.4,y:17.8},0).wait(1).to({regX:-11.5,regY:9.2,skewX:22.9,x:-35.3,y:22.9},0).wait(1).to({scaleX:0.74,scaleY:0.75,skewX:22.4,skewY:8},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:21.8,skewY:7.8,x:-35.4,y:23.1},0).wait(1).to({scaleX:0.74,scaleY:0.76,skewX:20.8,skewY:7.5,y:23.2},0).wait(1).to({scaleX:0.75,scaleY:0.76,skewX:19.6,skewY:7,x:-35.5,y:23.5},0).wait(1).to({scaleX:0.75,scaleY:0.77,skewX:18.2,skewY:6.5,y:23.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:16.7,skewY:6,x:-35.7,y:24},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:15,skewY:5.4,y:24.3},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:13.2,skewY:4.7,x:-35.9,y:24.5},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:11.3,skewY:4.1,y:24.8},0).wait(1).to({scaleX:0.78,scaleY:0.79,skewX:9.5,skewY:3.4,x:-36,y:25.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:7.7,skewY:2.8,x:-36.1,y:25.4},0).wait(1).to({scaleX:0.79,scaleY:0.8,skewX:6.1,skewY:2.2,y:25.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:4.5,skewY:1.6,x:-36.2,y:25.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:3.2,skewY:1.1,y:26.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:2.1,skewY:0.7,x:-36.3,y:26.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:1.2,skewY:0.4,y:26.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.5,skewY:0.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,skewX:0.1,skewY:0,x:-36.4,y:26.5},0).wait(1).to({regX:-0.1,regY:0.2,skewX:0,x:-27.3,y:19.1},0).to({_off:true},1).wait(285));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1,scaleY:1,skewX:0.1,x:-20.9,y:35.8},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:0.2,skewY:180.1,y:35.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:0.3,skewY:180.2,x:-20.8,y:35.6},0).wait(1).to({scaleX:0.98,scaleY:0.99,skewX:0.5,skewY:180.4,x:-20.7,y:35.5},0).wait(1).to({scaleX:0.97,scaleY:0.98,skewX:0.7,skewY:180.5,x:-20.6,y:35.3},0).wait(1).to({scaleX:0.96,scaleY:0.97,skewX:1,skewY:180.7,x:-20.4,y:35.1},0).wait(1).to({scaleX:0.95,scaleY:0.96,skewX:1.3,skewY:180.9,x:-20.2,y:34.9},0).wait(1).to({scaleX:0.94,scaleY:0.95,skewX:1.6,skewY:181.2,x:-20.1,y:34.7},0).wait(1).to({scaleX:0.93,scaleY:0.94,skewX:2,skewY:181.4,x:-19.8,y:34.4},0).wait(1).to({scaleX:0.91,scaleY:0.93,skewX:2.3,skewY:181.7,x:-19.6,y:34.1},0).wait(1).to({scaleX:0.9,scaleY:0.92,skewX:2.7,skewY:182,x:-19.4,y:33.9},0).wait(1).to({scaleX:0.89,scaleY:0.91,skewX:3,skewY:182.2,x:-19.2,y:33.6},0).wait(1).to({scaleX:0.87,scaleY:0.9,skewX:3.4,skewY:182.5,x:-19.1,y:33.4},0).wait(1).to({scaleX:0.86,scaleY:0.89,skewX:3.6,skewY:182.7,x:-18.9,y:33.2},0).wait(1).to({scaleX:0.85,scaleY:0.89,skewX:3.9,skewY:182.8,x:-18.7,y:33.1},0).wait(1).to({scaleX:0.85,scaleY:0.88,skewX:4.1,skewY:183,x:-18.6,y:32.9},0).wait(1).to({scaleX:0.84,scaleY:0.88,skewX:4.2,skewY:183.1,x:-18.5},0).wait(1).to({scaleX:0.84,scaleY:0.87,skewX:4.3,skewY:183.2,y:32.8},0).wait(1).to({regX:-17.4,regY:-14.8,scaleX:0.83,scaleY:0.87,skewX:4.4,x:-3.2,y:21},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:0.84,scaleY:0.87,x:-18.5,y:32.8},0).wait(1).to({scaleX:0.84,scaleY:0.87,skewX:4.3,skewY:183.1,x:-18.6,y:32.9},0).wait(1).to({scaleX:0.84,scaleY:0.88,skewX:4.2,x:-18.7,y:33},0).wait(1).to({scaleX:0.85,scaleY:0.88,skewX:4,skewY:182.9,x:-18.8},0).wait(1).to({scaleX:0.86,scaleY:0.89,skewX:3.8,skewY:182.8,x:-18.9,y:33.1},0).wait(1).to({scaleX:0.86,scaleY:0.89,skewX:3.6,skewY:182.7,x:-19,y:33.3},0).wait(1).to({scaleX:0.87,scaleY:0.9,skewX:3.4,skewY:182.5,x:-19.2,y:33.5},0).wait(1).to({scaleX:0.88,scaleY:0.91,skewX:3.1,skewY:182.3,x:-19.3,y:33.7},0).wait(1).to({scaleX:0.9,scaleY:0.92,skewX:2.8,skewY:182,x:-19.5,y:33.9},0).wait(1).to({scaleX:0.91,scaleY:0.93,skewX:2.4,skewY:181.8,x:-19.7,y:34.1},0).wait(1).to({scaleX:0.92,scaleY:0.94,skewX:2.1,skewY:181.5,x:-19.9,y:34.3},0).wait(1).to({scaleX:0.93,scaleY:0.95,skewX:1.8,skewY:181.3,x:-20,y:34.6},0).wait(1).to({scaleX:0.95,scaleY:0.96,skewX:1.5,skewY:181.1,x:-20.2,y:34.8},0).wait(1).to({scaleX:0.96,scaleY:0.97,skewX:1.2,skewY:180.8,x:-20.4,y:35},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:0.9,skewY:180.7,x:-20.6,y:35.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:0.7,skewY:180.5,x:-20.7,y:35.4},0).wait(1).to({scaleX:0.98,scaleY:0.99,skewX:0.5,skewY:180.3,x:-20.8,y:35.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:0.3,skewY:180.2,x:-20.9,y:35.6},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:0.2,skewY:180.1,x:-21,y:35.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0.1,y:35.8},0).wait(1).to({regX:-17.4,regY:-14.7,scaleX:1,scaleY:1,skewX:0,skewY:180,x:-3.8,y:21.3},0).to({_off:true},1).wait(244));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-70.6,218.9,141.2);


// stage content:
(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Idle:0,Swim:80});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay('Idle');
	}
	this.frame_120 = function() {
		this.gotoAndPlay('Swim');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(41).call(this.frame_120).wait(1));

	// Layer_1
	this.instance = new lib.BubblesClip("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(274.1,201.1,1,1,0,0,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(441.6,330.4,218.9,141.2);
// library properties:
lib.properties = {
	id: '75B87EFE095C4D44B4FB64888C8ADDB8',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bubbles_atlas_.png?1537378928371", id:"bubbles_atlas_"}
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
an.compositions['75B87EFE095C4D44B4FB64888C8ADDB8'] = {
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