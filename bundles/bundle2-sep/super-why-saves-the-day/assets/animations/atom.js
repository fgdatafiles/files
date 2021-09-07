(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"atom_atlas_", frames: [[0,471,15,15],[0,157,135,155],[0,314,135,155],[137,157,135,155],[0,0,155,155]]}
];


// symbols:



(lib.circle = function() {
	this.spriteSheet = ss["atom_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glow1 = function() {
	this.spriteSheet = ss["atom_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glow2 = function() {
	this.spriteSheet = ss["atom_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.glow3 = function() {
	this.spriteSheet = ss["atom_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.square = function() {
	this.spriteSheet = ss["atom_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.solid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.square();
	this.instance.parent = this;
	this.instance.setTransform(-135.6,-149.6,1.57,1.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-149.6,243.3,298.3);


(lib.Loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ac7AAQAACVoeBoQoeBpr/AAQr+AAoehpQoehoAAiVQAAiUIehpQIehoL+AAQL/AAIeBoQIeBpAACUg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-37.2,373.1,74.6);


(lib.Glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glow1();
	this.instance.parent = this;
	this.instance.setTransform(-125.1,-143.6,1.853,1.853);

	this.instance_1 = new lib.glow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125.1,-143.6,1.853,1.853);

	this.instance_2 = new lib.glow3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-125.1,-143.6,1.853,1.853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.1,-143.6,250.2,287.3);


(lib.Electron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.circle();
	this.instance.parent = this;
	this.instance.setTransform(-13.9,-13.9,1.853,1.853);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-13.9,27.8,27.8);


(lib.ValenceShells = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Loop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,-59.5,120.5);

	this.instance_1 = new lib.Loop("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,59.5);

	this.instance_2 = new lib.Loop("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-162,373.1,324.1);


(lib.BallAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Electron("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:12.3,y:-16.8},0).wait(1).to({x:23.2,y:-31.6},0).wait(1).to({x:34.7,y:-43.5},0).wait(1).to({x:44.5,y:-53.6},0).wait(1).to({x:52.6,y:-61.8},0).wait(1).to({x:62.4,y:-66.8},0).wait(1).to({x:69.4,y:-70.3},0).wait(1).to({x:73.6,y:-69.9},0).wait(1).to({x:75,y:-69.8},0).wait(1).to({x:75.4,y:-68.7},0).wait(1).to({x:76.8,y:-65.2},0).wait(1).to({x:79,y:-59.5},0).wait(1).to({x:78.5,y:-50.3},0).wait(1).to({x:78,y:-38.3},0).wait(1).to({x:73.6,y:-25},0).wait(1).to({x:68.4,y:-9.2},0).wait(1).to({x:60.7,y:5.6},0).wait(1).to({x:52,y:22.5},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.atom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// solid
	this.instance = new lib.solid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11.4,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	// BallAnimation
	this.instance_1 = new lib.BallAnimation("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.7,-29.6,1,1,0,-56.4,123.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44));

	// BallAnimation
	this.instance_2 = new lib.BallAnimation("synched",1,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.7,-26.7,1,1,58.5,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(34));

	// BallAnimation
	this.instance_3 = new lib.BallAnimation("synched",1,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-66.3,61.6,1,1,0,-114.9,65.1,0.1,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(25));

	// BallAnimation
	this.instance_4 = new lib.BallAnimation("synched",1,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-19.2,-93,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(39));

	// BallAnimation
	this.instance_5 = new lib.BallAnimation("synched",1,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.3,64.6,1,1,114.9,0,0,0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(30));

	// BallAnimation
	this.instance_6 = new lib.BallAnimation("synched",1,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.2,-90);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(18));

	// glow loop
	this.instance_7 = new lib.Glow("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44));

	// valence shells
	this.instance_8 = new lib.ValenceShells("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.9,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.4,-163.4,373.1,324.1);


// stage content:
(lib.atom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.atom_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.5,373.1,359.3);
// library properties:
lib.properties = {
	id: 'EB9AAC9A138E463A88506DDD9C0D8CEA',
	width: 373,
	height: 359,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/atom_atlas_.png", id:"atom_atlas_"}
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
an.compositions['EB9AAC9A138E463A88506DDD9C0D8CEA'] = {
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