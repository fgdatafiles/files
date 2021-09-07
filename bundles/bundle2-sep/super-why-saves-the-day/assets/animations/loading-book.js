(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"loading_book_atlas_", frames: [[0,121,37,40],[0,0,123,119]]}
];


// symbols:



(lib.pixieDustFancymed = function() {
	this.spriteSheet = ss["loading_book_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SWlogo123w = function() {
	this.spriteSheet = ss["loading_book_atlas_"];
	this.gotoAndStop(1);
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


(lib.starry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pixieDustFancymed();
	this.instance.parent = this;
	this.instance.setTransform(-37,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.starry, new cjs.Rectangle(-37,-40,37,40), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SWlogo123w();
	this.instance.parent = this;
	this.instance.setTransform(-59.9,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-59.9,-57,123,119), null);


(lib.logobook1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F9F").s().p("AgQCfIAMk+IABgKIAUgEIgSFbg");
	this.shape.setTransform(21.8,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBECB").s().p("AibAXIEzguIACACIACACQABABhPALIicAUIhNALg");
	this.shape_1.setTransform(2,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D2DE").s().p("AikAqQgOgMACgSIE/g1IAiAsIlVAngAifAbIAAAAIBNgKICcgUQBPgMgBgBIgCgCIgCgBg");
	this.shape_2.setTransform(2.4,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E4E4EF","#EFF0F5","#C6CBDB"],[0,0.863,1],3.7,-7,-2.6,-7.7).s().p("AgTCjIADAAIgBgIQgHhmAAhlIAAgLQAChNAQhGIAfBUIAAAMIgME+g");
	this.shape_3.setTransform(18.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#010D76").s().p("Ai9ADIFFg2IAAAAIAGAIIk/A1QgCARAOAMIAAAAIFVgmIAOAPIAAABIgBAAIlgAjQgbgXABgag");
	this.shape_4.setTransform(2.5,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#054CCC","#000094"],[0,1],0,-24.2,0,24.2).s().p("AiADyQg2irgPjGIGLhyIAAAAIAAAAIgBANIgBARIAAADQgMDEAODHIlFA3g");
	this.shape_5.setTransform(-3.7,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFhFIAAgBIANgEIABADQgPBGgCBMQAAhIADhIg");
	this.shape_6.setTransform(17.2,-12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A7AD8").s().p("AAADTIAAAAQgOjJAMjDIAAgCIABgRIABgNIAJAJIgBAEIgCARIAAACIgCAjIAAABQgEBIAABJIAAAKQABBmAHBmIAAAIIgDAAg");
	this.shape_7.setTransform(16.2,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobook1, new cjs.Rectangle(-23.5,-26.6,47,53.2), null);


(lib.logorings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rings
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FAD712").ss(1,1,1).p("Ah1hDQAhhXAhhLQAMgdANgbQAkhQAlhCQBYihAjAOQAbAKgSBxAjemBQgUgRgTgPQiPhygYAXQgZAYBtCTQATAZAUAbQBPBlBtB1QAAABABAAQADAEAEAFQAZAaAaAbQCpCwCLBwQAGAFAGAFQCPByAYgXQAZgXhtiUQgGgJgHgKQgEgEgDgFAh1hDQgBABAAABAh6g3QgFAMgEAMQgPAmgNAlQguCCgdBuQgPA2gKAxQgnCzAjAOQAiAMBZigQADgFADgF");
	this.shape.setTransform(4.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD712").s().p("An7BnQgvgDgBgOQgFgYCkgqQCJggC6gfIACABIABAAIABAAIAAgBIAIAIIgDABIgEgBIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCABQi4AeiHAgQiaAnACAPQACAHAkACQAqACBRgFIAsgDIABAKIgsADQg4AEglAAIgfgBgAGZghQCLgkgCgPQgCgGgkgCQgqgChRAFQguADgyAFQhJAGhTAMQhEAIhHAMIg3AIIgIgIIADgBIA6gJQBHgMBEgIQBUgMBKgHIBfgHQBSgGAqADQAvADABAOQAFAXiZAngAhFgrIAAAAg");
	this.shape_1.setTransform(0,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-59,111.3,118.1);


(lib.glow7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD712").s().p("AjtCHQhrgHgCgmQgNg8FdhXIBtgaIBigWQBIgPBOgPIAAAuQiEAZh0AbIhjAXQkhBIgLAYQAIAEA7AEQBTAECkgKIBVgGIAGAAQAFgCAEAFQADADABAFIABAUQAAAFgDAEQgCADgGABIgJABIhRAGQhyAHhMAAQglAAgcgBg");
	this.shape.setTransform(2.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,215,18,0.796)").s().p("AjnCTQh7gIACgyQgJhGFihYIBwgbIAogJQBjgVBtgVIAAAMQhOAPhIAPIhiAWIhtAaQldBXAOA8QACAmBrAHQBVAFCpgLIBRgGIAJgBQAGgBACgDQADgEAAgFIgBgUQgBgFgCgDQgFgFgFACIgGAAIhVAGQikAKhTgEQg7gEgHgEQAKgYEhhIIBjgXQB0gbCEgZIAAAMQiEAah0AaIhfAXQjtA6gtATQAOAAAgADQBSAECjgKQAqgEAsgCIAFAAQAKgBAIAHQAIAGABAKIABAUQABAJgIAIQgGAJgKABIgKABIhRAFQh4AHhOAAIg5gBg");
	this.shape_1.setTransform(1.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.596)").s().p("AjhCfQiJgJAFg7QgQhRFxhaIBmgZIANgDQB0gaCEgaIAAANQhtAVhjAVIgoAJIhwAbQliBYAJBGQgCAyB7AIQBWAFCpgLIBRgFIAKgBQAKgBAGgJQAIgIgBgJIgBgUQgBgKgIgGQgIgHgKABIgFAAQgsACgqAEQijAKhSgEQgggDgOAAQAtgTDtg6IBfgXQB0gaCEgaIAAANQiEAah0AbIhdAVIjgA4QBTACCUgJQApgDAtgCIAEgBQAOgCANAKQALALACAPIABAUQABAPgJAMQgLALgPACIgLABIhQAFQhzAIhNAAQgkAAgcgCg");
	this.shape_2.setTransform(1.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.396)").s().p("AjcCrQiYgJAIhGQgPhbF6hdIAygNIBEgPQB1gbCDgZIAAAMQiEAah0AaIgNADIhnAZQlwBaAQBRQgFA7CJAJQBWAFCqgLIBQgFIALgBQAPgCALgLQAJgMgBgPIgBgUQgCgPgLgLQgNgKgOACIgEABQgtACgpADQiUAJhTgCIDgg4IBdgVQB0gbCEgaIAAANQiEAZh0AaIhbAUIiEAiQA7gCBOgFIBWgGIADAAQAUgCAQANQAPAOACAUIABAUQABAVgMAPQgNAPgVACIgMABIhPAFQh0AIhNAAQglAAgcgCg");
	this.shape_3.setTransform(0.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.196)").s().p("AjWC4QilgLAJhPQgUhkGHhiIAEgBIB3gcQB0gaCEgZIAAAMQiEAZh0AbIhEAPIg0ANQl4BdAPBbQgIBGCYAJQBWAGCrgMIBQgFIAMgBQAUgCANgPQANgPgBgVIgBgUQgDgUgPgOQgQgNgTACIgDAAIhXAGQhNAFg8ACICFgiIBbgUQB0gaCEgZIAAAMQiEAah0AZIhYAVQgHABgGACQAGgBAHAAIBYgGIACgBQAYgBAUAQQAUAQACAaIABAUQACAZgRAUQgQASgZADIgNABIhPAFQh4AIhPAAQgiAAgagBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow7, new cjs.Rectangle(-37.2,-18.5,74.4,37.1), null);


(lib.glow6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(250,215,18,0.796)").s().p("As4DlQh7gIADgyQgJhGFhhZIBygaIAngJQDhgxEZguIABgBIAFAAQADgCAFAAIB3gSQCTgYCLgSICggUQB3gOBsgJIBRgGIAAAMQheAHhoAKQiAAOiOATQiJARiTAXIh3ASQgFACgDACIgGAAQj2AojLArIhiAWIhuAZQldBYANA8QACAmBrAHQBWAFCpgLIBSgGIAJgBQAFgBADgDQADgEAAgFIgBgUQgBgFgDgDQgEgFgFACIgGAAIhVAGQilAKhUgEQg7gEgHgEQAKgYEjhJIBjgXQCXgjCzggQBsgUB0gTIAIgDIAFAAIABAAIB3gSQCSgXCKgSQD+giDPgPIAAANQjOAPj9AhQiKASiSAXIgBAAQg8AIg7ALIgFABIgIACIicAaQjcAmi0ApIhgAXQjuA7gsATQAOAAAgADQBSAECkgKQAqgEAsgCIAFAAQAJgBAIAHQAIAGABAKIABAUQABAJgHAIQgGAJgKABIgKABIhSAFQh4AIhPAAIg5gCg");
	this.shape.setTransform(1.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD712").s().p("As9DZQhrgHgCgmQgNg8FdhXIBugaIBigVQDKgsD3goIAGAAQACgCAGgBIB3gSQCSgYCKgRQCOgTCAgNQBngLBfgHIAAAtQjPAQj+AiQiKARiSAXIh3ATIgBAAIgFAAIgIADQh1AThrAUQizAgiXAiIhjAXQkjBKgKAXQAHAEA7AEQBUAECkgKIBWgFIAGgBQAFgBAEAEQADADABAFIABAVQAAAFgDAEQgDADgFABIgJAAIhSAGQhzAIhMAAQgkAAgcgCg");
	this.shape_1.setTransform(2.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.596)").s().p("AsyDxQiIgJAEg7QgQhQFyhcIBngXIANgDQDvg3EwgyIABAAIADAAQAFgCAFAAQA6gKA9gJQCTgXCLgRIBDgJQCygYCbgNIBGgFIAAANIhRAGQhsAJh3AOIigAUQiLARiTAYIh3ATQgFAAgDACIgFAAIgBABQkZAtjhAyIgnAJIhyAZQlhBZAJBGQgDAyB7AJQBXAECpgLIBSgFIAKgBQAKgBAGgIQAHgIgBgJIgBgVQgBgKgIgGQgIgHgJABIgFABQgsACgqADQikAKhSgEQgggCgOAAQAsgUDug6IBggXQC0gqDcglICcgbIAIgCIAFgBQA7gKA8gIIABAAQCSgXCKgSQD9giDOgPIAAAMQjNAPj8AiIgBAAQiKARiRAYIh4ATIgBAAIgDAAQgEACgFAAIhWAPQkGAsjSAwIhdAWIjhA4QBTADCUgJQAqgEAtgCIAEAAQAOgCAMAKQAMAKACAPIAAAVQABAPgJALQgKALgPADIgLAAIhRAFQhzAIhNAAQglAAgcgCg");
	this.shape_2.setTransform(1.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.396)").s().p("AssD+QiYgJAIhGQgPhcF5hdIA0gMIBEgQQDug2EvgxQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAFgEAGAAIB3gSQCGgVB9gQIAbgEQCPgTCBgOQBogLBggGIAAAMIhGAFQibANiyAYIhDAJQiLARiTAXQg9AJg6AKQgFAAgFACIgDAAIgBAAQkwAyjvA3IgNADIhnAXQlyBcAQBQQgEA7CIAJQBXAGCqgMIBRgFIALAAQAPgDAKgLQAJgLgBgPIAAgVQgCgPgMgKQgMgKgOACIgEAAQgtACgqAEQiUAJhTgDIDhg4IBdgWQDSgwEGgsIBWgPQAFAAAEgCIADAAIABAAIB4gTQCRgYCKgRIABAAQD8giDNgPIAAAMQjNAPj7AjQiKARiRAXIh4ASIAAAAIgDAAIgKAEIgMACQk0AxjwA3IhbAVIiGAiQA8gCBOgGIBXgFIADgBQATgCAQAOQAPANADAUIABAVQABAUgNAPQgNAQgUABIgMABIhQAGQh0AHhOAAQgkAAgcgBg");
	this.shape_3.setTransform(0.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.196)").s().p("AsnEIQikgLAJhPQgUhlGIhhIAEgBIB2gcQDug2EtgxIACAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABIALgDIB4gTIgBAAQBWgNBTgMIB1gPQBVgMBPgJQCBgPBzgKIBBAAIAAAHQhfAHhpALQiBANiPAUIgbADQh9ARiFAVIh4ASQgGAAgFADQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQkuAyjvA2IhEAPIgzANQl6BdAPBbQgIBGCYAJQBWAGCtgMIBPgFIAMgBQAVgCANgPQAMgPgBgVIgBgUQgCgUgPgOQgQgNgUACIgDAAIhWAGQhPAFg7ACICFgiIBbgVQDwg2E1gyIAMgCIAKgDIACAAIABAAIB3gSQCSgYCJgRQD8giDMgPIAAAMQjMAPj6AiIgBAAQiIASiSAXIhKALIgtAHIgBAAIgDAAIgKACQk9A0j1A4IhXAVQgIABgGACQAGgBAIAAIBXgGIACgBQAYgBAVAQQATAQACAaIACAUQACAZgRAUQgQASgaADIgNABIhOAFQh5AIhPAAQgiAAgbgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow6, new cjs.Rectangle(-96.4,-26.5,192.9,53.1), null);


(lib.glow5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD712").s().p("AwMDeQhrgHgCgmQgNg8FdhXIBugbIBigUQDLgsD3goIAGAAQADgCAFgBIB3gSQCSgYCJgRQCOgTCAgNQCDgOB0gHIAhgCIAqgCQAugDAmAAQA4gBAnADQBOAEAXAWQAJAIAAALQANA6lEBRQgEABgEgBQgEgCgCgDQgCgEABgEIACgVQAAgEADgDQACgCAEgBQEBhCANgVQgJgFg6gDQhVgFikAKQjjAOkeAnQiKARiRAXIh3ATIgBAAIgFAAIgIADQh1AThsAUQizAgiXAiIhjAXQkjBKgKAXQAHAEA7AEQBUAEClgKIBVgFIAGgBQAFgBAEAEQADADABAFIABAVQAAAFgDAEQgDADgFABIgJAAIhSAGQhzAIhMAAQgkAAgcgCg");
	this.shape.setTransform(0,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,215,18,0.796)").s().p("AwNDrQh7gJADgyQgJhGFhhZIBygZIAngJQDhgyEagtIABgBIAFAAQADgCAFAAIB3gTQCSgYCLgRICggUQB3gOBsgJICBgKIA/gEIAGAAQB3gGBEAFIAWABQBOAIARAdQAFAIgBALQALBDlLBVQgIABgIgCQgHgFgEgGQgGgIADgHIACgVQABgIAFgGQAFgGAHgCQDPg0ArgRIgtgBQhUgFikAKQjiAPkdAmQiKASiRAXIgBAAQg8AIg7AKIgFABIgIACIidAbQjcAli0AqIhgAXQjuA6gsAUQAOAAAgACQBSAECkgKQAqgDAsgCIAFgBQAJgBAIAHQAIAGABAKIABAVQABAJgHAIQgGAIgKABIgKABIhSAFQh4AIhPAAIg5gBgApZgRIhiAUIhuAbQldBXANA8QACAmBrAHQBWAGCpgMIBSgGIAJAAQAFgBADgDQADgEAAgFIgBgVQgBgFgDgDQgEgEgFABIgGABIhVAFQilAKhUgEQg7gEgHgEQAKgXEjhKIBjgXQCXgiCzggQBsgUB1gTIAIgDIAFAAIABAAIB3gTQCRgXCKgRQEegnDjgOQCkgKBVAFQA6ADAJAFQgNAVkBBCQgEABgCACQgDADAAAEIgCAVQgBAEACAEQACADAEACQAEABAEgBQFEhRgNg6QAAgLgJgIQgXgWhOgEQgngDg4ABQgmAAguADIgqACIghACQh0AHiDAOQiAANiOATQiJARiSAYIh3ASQgFABgDACIgGAAQj3AojLAsg");
	this.shape_1.setTransform(0,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.596)").s().p("AwND3QiJgJAFg7QgQhRFxhbIBngYIANgDQDvg2ExgyIABAAIADgBQAGgCAEAAQA7gKA9gIQCSgYCKgRIBDgJQCzgXCbgNIB2gJQCpgLBXAGQA1ADAfALQAmANAJAXQACAIAAAJQAPBMlEBVIgUAFQgMACgMgEIgGgDQgHgFgEgHQgHgLACgMIADgWQABgLAHgIQAIgJAKgDIC+gwQhSgCiSAJQjhAOkeAnIgBAAQiJARiRAYIh3ASIgBAAIgDAAQgEACgGABIhWAOQkHAsjSAxIhdAWIjhA4QBTACCVgJQApgDAtgCIAEgBQAOgCANAKQALALACAPIABAUQABAPgJAMQgLALgPACIgLABIhQAFQhzAHhNAAQglAAgcgBgAiZhwQkaAujhAxIgoAJIhxAaQliBZAJBGQgCAyB7AIQBWAFCqgLIBRgFIAKgBQAKgBAGgJQAIgIgBgJIgBgUQgBgKgIgGQgIgHgKABIgFAAQgsACgqAEQikAKhSgEQgggDgOAAQAtgTDug7IBfgXQC0gpDcgmICdgaIAIgCIAGgBQA6gLA9gIIABAAQCRgXCJgSQEegmDigOQCkgLBTAGIAtABQgqARjPA0QgHACgGAGQgFAFgBAIIgCAWQgCAHAFAIQAEAGAIAEQAIADAIgCQFLhUgLhEQAAgKgFgJQgQgdhPgHIgVgCQhEgFh3AHIgGAAIg/AEIiBAJQhsAJh4AOIigAUQiLASiRAYIh3ASQgFAAgEACIgFAAg");
	this.shape_2.setTransform(0,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.396)").s().p("AwOEBQiYgJAIhGQgPhbF6hdIAzgNIBEgPQDvg2EvgyQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAFgDAGAAIB4gSQCEgVB9gRIAbgDQCPgUCBgNQCDgOB1gHIBAgEIDRAAQBDAGAhATQAYAOAEAWQACAIgBAIIAAABQAPBQklBRIg8AQQgQAEgQgGQgMgEgHgKIgEgGQgIgOACgQIADgWQABgPAKgLQAKgMAPgDIBfgYQg5ABhJAFQjhAOkeAnQiJARiRAYIh3ASIgBAAIgCAAIgKADIgMACQk2AyjwA2IhbAVIiFAiQA7gCBPgFIBWgGIADAAQAUgCAQANQAPAOACAUIABAUQABAVgMAPQgNAPgVACIgMABIhPAFQh1AIhNAAQglAAgcgCgAich+QkxAyjvA2IgNADIhnAYQlxBbAQBRQgFA7CJAJQBWAFCrgLIBQgFIALgBQAPgCALgLQAJgMgBgPIgBgUQgCgPgLgLQgNgKgOACIgEABQgtACgpADQiVAJhTgCIDhg4IBdgWQDSgxEHgsIBWgOQAGgBAEgCIADAAIABAAIB3gSQCRgYCJgRIABAAQEegnDhgOQCSgJBSACIi+AwQgKADgIAJQgHAIgBALIgDAWQgCAMAHALQAEAHAHAFIAGADQAMAEAMgCIAUgFQFEhVgPhMQAAgJgCgIQgJgXgmgNQgfgLg1gDQhXgGipALIh2AJQibANizAXIhDAJQiKARiSAYQg9AIg7AKQgEAAgGACIgDABIAAAAIgBAAg");
	this.shape_3.setTransform(0,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.196)").s().p("AwPEIQikgLAJhPQgUhlGIhhIAEgBIB2gcQDug2EugxIACAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIALgDIB4gTIgBAAQBVgNBTgMIB1gPQBVgMBPgJQCBgPBzgKICxAAIhAAEQh1AHiDAOQiBANiPAUIgbADQh9ARiEAVIh4ASQgGAAgFADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQkvAyjvA2IhEAPIgzANQl6BdAPBbQgIBGCYAJQBWAGCtgMIBPgFIAMgBQAVgCANgPQAMgPgBgVIgBgUQgCgUgPgOQgQgNgUACIgDAAIhWAGQhPAFg7ACICFgiIBbgVQDwg2E2gyIAMgCIAKgDIACAAIABAAIB3gSQCRgYCJgRQEegnDhgOQBJgFA5gBIhfAYQgPADgKAMQgKALgBAPIgDAWQgCAQAIAOIAEAGQAHAKAMAEQAQAHAQgFIA8gQQElhRgPhQIAAgBQABgIgCgIQgEgWgYgOQghgThDgGIBKAAQAfAJASAQQAQAPADAVIAAAOQASBTkJBRQgvAPg3ANQgUAFgSgIQgTgHgKgSQgMgSADgTIAEgWQACgTAMgOQAHgJAKgFIgRABQjiAPkcAmIgBAAQiIASiRAXIhKALIgtAHIgBAAIgDAAIgKACQk+A0j1A4IhXAVQgIABgGACQAGgBAIAAIBXgGIACgBQAYgBAVAQQATAQACAaIACAUQACAZgRAUQgQASgaADIgNABIhOAFQh5AIhPAAQgiAAgbgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow5, new cjs.Rectangle(-119.6,-26.5,239.2,53.1), null);


(lib.glow4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(250,215,18,0.196)").s().p("Au3CnIAIgCQDwg3E1gyIAMgCIAKgEIADAAIAAAAIB4gSQCRgXCJgQQEdgnDhgPQBJgFA6gBIhgAYQgOAEgLALQgKALgBAPIgDAVQgCAQAIAPIAEAGQAIAJAMAFQAPAGAQgEIA9gQQEkhRgOhPIAAgBQAAgJgBgHQgFgWgYgPQgggThDgGIBKAAQAfAKARAPQARAPACAWIAAAOQATBTkJBQQgvAOg4AOQgTAFgSgIQgUgIgKgRQgLgTADgTIADgWQACgSAMgOQAHgIAKgFIgRABQjhAOkcAlIgBAAQiIASiSAXIhKAMIgtAHIgBAAIgDAAIgKACQk9A0j1A5IgIACgAu3AiIAIgCQDug1EugyIACAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAKgDIB4gSIgBAAQBWgOBUgLIBzgQQBVgMBPgJQCBgPBzgKICyAAIhBAEQh0AIiDANQiBAOiPATIgaAEQh9AQiGAVIh3ASQgGAAgFAEQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQkwAxjuA1IgIACg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD712").s().p("AueBcIAIgCIBigWQDLgrD3gnIAGAAQADgCAFgCIB3gSQCTgXCIgRQCOgTCAgOQCDgNB0gIIAhgCIAqgCQAugCAmAAQA4gBAnADQBOAEAXAVQAJAIAAALQANA6lEBRQgEABgEgBQgEgCgCgDQgCgEABgFIACgVQAAgEADgCQACgDAEgBQEBhAANgWQgJgFg6gDQhVgFikAKQjjAPkeAmQiJASiSAWIh3ASIgBAAIgFAAIgIADQh1AThsAUQizAhiXAjIgIACg");
	this.shape_1.setTransform(-2.5,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.796)").s().p("AukCKIAIgCQCXgjCzghQBsgUB1gTIAIgDIAFAAIABAAIB3gSQCSgWCJgSQEegmDjgPQCkgKBVAFQA6ADAJAFQgNAWkBBAQgEABgCADQgDACAAAEIgCAVQgBAFACAEQACADAEACQAEABAEgBQFEhRgNg6QAAgLgJgIQgXgVhOgEQgngDg4ABQgmAAguACIgqACIghACQh0AIiDANQiAAOiOATQiIARiTAXIh3ASQgFACgDACIgGAAQj3AnjLArIhiAWIgIACIAAgNIAIgCIAngJQDhgxEagtIABgBIAFAAQADgCAFAAIB3gSQCTgYCKgSICggUQB3gOBsgJICBgJIA/gEIAGAAQB3gHBEAFIAWACQBOAHARAdQAFAJgBAKQALBElLBTQgIACgIgDQgHgEgEgGQgGgIADgHIACgWQABgIAFgFQAFgFAHgCQDPg0ArgRIgtgBQhUgGikALQjiAOkdAmQiJASiSAWIgBAAQg8AIg7ALIgFABIgIACIidAaQjcAni0ApIgIACg");
	this.shape_2.setTransform(-1.9,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.596)").s().p("AurCWIAIgCQC0gqDcgmICdgbIAIgCIAGgBQA6gKA9gIIABAAQCSgWCIgSQEegmDigPQCkgKBTAFIAtABQgqARjPA0QgHACgGAGQgFAFgBAIIgCAVQgCAHAFAIQAEAGAIAFQAIACAIgBQFLhUgLhDQAAgLgFgIQgQgdhPgIIgVgBQhEgFh3AGIgGAAIg/AEIiBAKQhsAJh4AOIigAUQiKARiSAYIh3ATQgFAAgEACIgFAAIAAABQkaAsjhAyIgoAJIgIACIAAgMIAIgCQDvg3ExgxIABAAIADAAQAGgCAEAAQA7gKA9gJQCTgXCJgRIBDgJQCzgYCbgNIB2gIQCpgMBXAGQA1ADAfALQAmANAJAYQACAIAAAJQAPBLlEBVIgUAFQgMACgMgEIgGgDQgHgFgEgIQgHgLACgMIADgVQABgLAHgIQAIgJAKgCIC+gwQhSgDiSAJQjhAOkeAnIgBAAQiIAQiSAYIh3ATIgBAAIgDAAQgEACgGAAIhWAPQkHAtjSAwIgIACg");
	this.shape_3.setTransform(-1.2,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.396)").s().p("AuxCiIAIgCQDSgxEHgtIBWgOQAGgBAEgCIADAAIABAAIB3gSQCSgYCIgQIABAAQEegnDhgOQCSgJBSACIi+AwQgKADgIAJQgHAIgBAKIgDAWQgCAMAHALQAEAHAHAFIAGADQAMAEAMgCIAUgFQFEhUgPhMQAAgJgCgIQgJgXgmgNQgfgLg1gDQhXgGipALIh2AJQibANizAXIhDAJQiJARiTAYQg9AIg7AKQgEAAgGACIgDABIgBAAQkxAxjvA2IgIACIAAgMIAIgCQDvg1EvgyQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAFgDAGAAIB4gSQCFgVB9gRIAagDQCPgUCBgNQCDgOB1gHIBAgEIDRAAQBDAGAhATQAYAOAEAWQACAIgBAIIAAABQAPBQklBQIg8AQQgQAFgQgHQgMgEgHgKIgEgGQgIgOACgQIADgWQABgOAKgLQAKgMAPgDIBfgYQg5ABhJAFQjhAOkeAmQiIARiSAYIh3ASIgBAAIgCAAIgKADIgMACQk2AzjwA2IgIACg");
	this.shape_4.setTransform(-0.6,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow4, new cjs.Rectangle(-95.2,-18,190.5,36), null);


(lib.glow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD712").s().p("AFQBdQgDgCgCgDQgDgEABgFIADgVQAAgEACgCQACgDAFgBQEAhAAOgWQgJgFg7gDQhUgFikAKQjjAPkeAlQiJASiSAXIh3ASIgBAAIgFAAIgIADIgVAEIAAguIANgCIAHAAQACgCAGgCIB3gSQCSgWCKgRQCOgTB/gOQCDgNB0gIIAggCIAqgCQAugCAmAAQA4gBAoADQBOAEAWAVQAJAIABALQAMA5lDBSIgFAAIgEAAg");
	this.shape.setTransform(-2.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,215,18,0.796)").s().p("AFGBoQgIgEgEgGQgFgIACgHIACgWQABgIAFgFQAGgGAHgCQDPgzAqgRIgtgBQhTgGikALQjiAOkdAlQiJASiSAXIgBAAQg9AIg6ALIgGABIgIACIgWADIAAgMIAVgEIAIgDIAFAAIABAAIB3gSQCSgXCJgSQEeglDjgPQCkgKBUAFQA7ADAJAFQgOAWkABAQgFABgCADQgCACAAAEIgDAVQgBAFADAEQACADADACQAFABAEgBQFDhSgMg5QgBgLgJgIQgWgVhOgEQgogDg4ABQgmAAguACIgqACIggACQh0AIiDANQh/AOiOATQiKARiSAWIh3ASQgGACgCACIgHAAIgNACIAAgMIAMgCIAAgBIAFAAQAEgCAFAAIB3gRQCSgYCLgSICggUQB3gOBsgJICBgJIA/gEIAGAAQB3gHBEAFIAVACQBPAHAQAdQAFAJAAAKQALBDlLBUIgGABQgFAAgFgCg");
	this.shape_1.setTransform(-1.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.596)").s().p("AE7BzIgGgDQgIgFgDgHQgHgLABgMIADgWQABgLAIgIQAHgJALgDIC+gvQhTgCiSAJQjhAOkcAmIgBAAQiKARiRAYIh4ASIgBAAIgDAAQgEACgFABIgYAEIAAgNIAWgDIAIgCIAFgBQA7gLA8gIIABAAQCSgXCKgSQEcglDigOQCkgLBUAGIAtABQgrARjPAzQgHACgFAGQgFAFgBAIIgCAWQgDAHAGAIQAEAGAHAEQAIADAIgCQFLhUgLhDQABgKgFgJQgRgdhOgHIgWgCQhEgFh3AHIgGAAIg/AEIiBAJQhsAJh2AOIigAUQiLASiTAYIh3ARQgFAAgDACIgFAAIgBABIgLACIAAgNIAJgBIABAAIADgBQAFgCAFAAQA6gJA9gIQCTgYCLgRIBDgJQCxgXCbgNIB2gJQCpgLBYAGQA0ADAgALQAmANAIAXQADAIgBAJQAQBLlFBVIgTAFIgIABQgIAAgIgDg");
	this.shape_2.setTransform(-1.2,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.396)").s().p("AEwB9QgMgFgIgJIgEgGQgIgPACgQIADgVQABgQAKgLQALgLAOgEIBggXQg6ABhJAFQjhAOkcAnQiKARiRAXIh4ASIAAAAIgDAAIgKAEIgMACIgOACIAAgNIAYgEQAFAAAEgCIADAAIABAAIB4gTQCRgYCKgRIABAAQEcgmDhgOQCSgJBTADIi+AvQgLACgHAJQgIAIgBAMIgDAVQgBAMAHALQADAIAIAFIAGADQALAEANgCIATgFQFFhWgQhKQABgJgDgIQgIgYgmgNQgggLg0gDQhYgGipAMIh2AIQiaANiyAYIhDAJQiLARiTAXQg9AJg6AJQgFAAgFACIgDAAIgBAAIgJACIAAgLIAHgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAQAFgEAGAAIB3gSQCGgVB9gQIAbgEQCPgTCAgOQCDgNB0gIIBBgEIDRAAQBDAGAgATQAYAPAFAWQABAHAAAJIAAABQAOBOkkBSIg9AQQgGACgHAAQgJAAgJgEg");
	this.shape_3.setTransform(-0.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.196)").s().p("AElCCQgTgIgKgRQgMgTADgTIAEgWQACgTAMgOQAHgIAKgEIgRAAQjiAOkbAmIgBAAQiIASiSAXIhKAMIgtAHIgBAAIgDAAIgKACIgcAEIAAgLIAPgCIAMgCIAKgEIACAAIABAAIB3gSQCSgXCJgRQEdgnDhgOQBJgFA5gBIhfAXQgPAEgKALQgKALgBAQIgDAVQgCAQAIAPIAEAGQAHAJAMAFQAQAGAQgEIA8gQQElhSgPhOIAAgBQABgJgCgHQgEgWgYgPQghgThDgGIBKAAQAfAKASAPQAQAPADAWIAAAOQASBSkJBRQgvAOg3AOQgIACgHAAQgMAAgLgFgAqogZIAFgBIACAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIALgDIB4gSIgBAAQBWgOBTgLIB1gQQBVgMBPgJQCAgPBzgKICxAAIhAAEQh1AIiDANQiAAOiPATIgbAEQh9AQiFAVIh4ASQgGAAgFAEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgHABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow3, new cjs.Rectangle(-68,-13.5,136.1,27), null);


(lib.glow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(250,215,18,0.596)").s().p("AC4BzIgGgDQgHgFgEgHQgHgLACgMIADgWQABgLAHgIQAIgJAKgDIC+gvQhSgCiSAJQjgAOkeAmIgBAAQhLAJhNAMIgaADIAAgMIAagEICXgVQEeglDhgOQCkgLBTAGIAtABQgqARjPAzQgHACgGAGQgFAFgBAIIgCAWQgCAHAFAIQAEAGAIAEQAIADAIgCQFLhUgLhDQAAgKgFgJQgQgdhPgHIgVgCQhEgFh3AHIgGAAIg/AEIiBAJQhrAJh4AOIigAUIiOAUIgaADIAAgLIAagEICMgTIBDgJQCzgXCagNIB2gJQCpgLBXAGQA1ADAfALQAmANAJAXQACAIAAAJQAPBLlEBVIgUAFIgIABQgIAAgIgDg");
	this.shape.setTransform(-1.3,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD712").s().p("ADNBdQgDgCgCgDQgDgEABgFIADgVQAAgEACgCQACgDAFgBQEAhAAOgWQgJgFg7gDQhUgFikAKQjiAPkfAlIiVAVIgaADIAAgsIAagEQBIgLBHgIQCOgTCAgOQCCgNB0gIIAggCIAqgCQAugCAmAAQA4gBAoADQBOAEAWAVQAJAIABALQAMA5lDBSIgEAAIgFAAg");
	this.shape_1.setTransform(-2.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.796)").s().p("ADDBoQgIgEgEgGQgFgIACgHIACgWQABgIAFgFQAGgGAHgCQDPgzAqgRIgtgBQhTgGikALQjhAOkeAlIiXAVIgaAEIAAgNIAagDICVgVQEfglDigPQCkgKBUAFQA7ADAJAFQgOAWkABAQgFABgCADQgCACAAAEIgDAVQgBAFADAEQACADADACQAFABAEgBQFDhSgMg5QgBgLgJgIQgWgVhOgEQgogDg4ABQgmAAguACIgqACIggACQh0AIiCANQiAAOiOATQhHAIhIALIgaAEIAAgNIAagDICOgUICggUQB4gOBrgJICBgJIA/gEIAGAAQB3gHBEAFIAVACQBPAHAQAdQAFAJAAAKQALBDlLBUIgGABQgFAAgFgCg");
	this.shape_2.setTransform(-1.9,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.396)").s().p("ACtB9QgMgFgIgJIgEgGQgIgPACgQIADgVQABgQAKgLQALgLAOgEIBggXQg6ABhJAFQjgAOkdAnQhMAJhPAMIgaADIAAgMIAagEQBOgLBLgKIABAAQEdgmDggOQCSgJBTADIi+AvQgLACgHAJQgIAIgBAMIgDAVQgBAMAHALQADAIAIAFIAGADQALAEANgCIATgFQFFhWgQhKQABgJgDgIQgIgYgmgNQgggLg0gDQhYgGipAMIh2AIQiaANiyAYIhDAJIiNASIgaAEIAAgMIAagEIBwgPIAbgEQCPgTCBgOQCCgNB0gIIBBgEIDRAAQBDAGAgATQAYAPAFAWQABAHAAAJIAAABQAOBOkkBSIg9AQQgGACgHAAQgJAAgJgEg");
	this.shape_3.setTransform(-0.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.196)").s().p("ACiCCQgTgIgKgRQgMgTADgTIAEgWQACgTAMgOQAHgIAKgEIgRAAQjhAOkcAmIgBAAQhMAKhPAMIgaAEIAAgNIAagDQBOgMBMgJQEegnDggOQBJgFA5gBIhfAXQgPAEgKALQgKALgBAQIgDAVQgCAQAIAPIAEAGQAHAJAMAFQAQAGAQgEIA8gQQElhSgPhOIAAgBQABgJgCgHQgEgWgYgPQghgThDgGIBKAAQAfAKASAPQAQAPADAWIAAAOQASBSkJBRQgvAOg3AOQgIACgHAAQgMAAgLgFgAolhCIAagDIAUgDIB1gQQBVgMBPgJQCBgPBygKICxAAIhAAEQh1AIiCANQiBAOiPATIgbAEIhvAPIgaAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow2, new cjs.Rectangle(-55,-13.5,110,27), null);


(lib.glow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD712").s().p("AiGBdQgDgCgCgDQgDgEABgFIADgVQAAgEACgCQACgDAFgBQD/hAAOgWQgJgFg7gDQhNgEiUAIIgWABIgJABIAAgtIAGgBIAZgBIAHgBIAqgCQAugCAmAAQA3gBAoADQBOAEAWAVQAJAIABALQAMA5lCBSIgEAAIgFAAg");
	this.shape.setTransform(-2.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,215,18,0.196)").s().p("AiuCCIgBAAQgTgIgJgRIgDgFQgIgQACgRIAEgWIACgKQADgNAJgKQAHgIAKgEIgRAAIgMABIAAgMIALgBIAUgBQA9gEAxgBIhfAXQgIACgHAEQgFAEgFAFQgKALgBAQIgDAVQgCAQAIAPIAEAGQAGAHAIAFIAFACQAQAGAQgEIA8gQQEkhSgPhOIAAgBQABgJgCgHQgEgWgYgPQghgThDgGIBKAAQAfAKASAPQAQAPADAWIAAAOQASBSkIBRQgvAOg3AOQgIACgHAAQgLAAgMgFgAjOiGIBEAAIglADIgbABIgEABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,215,18,0.396)").s().p("AimB9IgFgCQgJgFgGgHIgEgGQgIgPACgQIADgVQABgQAKgLQAFgFAGgEQAGgEAIgCIBggXQgyABg8AEIgVABIgLABIAAgMIAKgBIAWgBQCCgIBMADIi9AvQgKACgHAIIgBABQgIAIgBAMIgDAVQgBAMAHALQACAGAFAEIAEADIAGADQALAEANgCIATgFQFEhWgQhKQABgJgDgIQgIgYgmgNQgggLg0gDQhQgFiVAJIgbACIgFAAIAAgMIAEgBIAcgBIAlgDIDQAAQBDAGAgATQAYAPAFAWQABAHAAAJIAAABQAOBOkjBSIg9AQQgGACgHAAQgJAAgJgEg");
	this.shape_2.setTransform(-0.3,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,215,18,0.596)").s().p("AibBzIgGgDIgEgDQgEgEgDgFQgHgLACgMIADgWQABgLAHgIIABgBQAHgIAKgDIC9gvQhLgCiDAIIgVABIgKABIAAgNIAJAAIAWgCQCUgIBMAFIAtABQgqARjOAzQgHACgGAGQgFAFgBAIIgCAWQgBAEABAFIADAGQAEAGAIAEQAIADAIgCQFKhUgLhDQAAgKgFgJQgQgdhPgHIgVgCQhDgFh3AHIgGAAIglACIgaACIgFAAIAAgMIAFgBIAagBQCWgKBPAGQA1ADAfALQAmANAJAXQACAIAAAJQAPBLlDBVIgUAFIgIABQgIAAgIgDg");
	this.shape_3.setTransform(-1,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,215,18,0.796)").s().p("AiQBoQgIgEgEgGIgDgGQgBgFABgEIACgWQABgIAFgFQAGgGAHgCQDOgzAqgRIgtgBQhMgFiUAIIgWACIgJAAIAAgMIAJgBIAWgBQCUgIBNAEQA7ADAJAFQgOAWj/BAQgFABgCADQgCACAAAEIgDAVQgBAFADAEQACADADACQAFABAEgBQFChSgMg5QgBgLgJgIQgWgVhOgEQgogDg3ABQgmAAguACIgqACIgHABIgZABIgGABIAAgMIAFAAIAagCIAlgCIAGAAQB2gHBEAFIAVACQBPAHAQAdQAFAJAAAKQALBDlKBUIgGABQgFAAgFgCg");
	this.shape_4.setTransform(-1.6,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow1, new cjs.Rectangle(-21.3,-13.5,42.6,27), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starry();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4,3.405,3.405,0,0,0,-18.5,-19.9);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 102, 0)];
	this.instance.cache(-39,-42,41,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-63,-68.1,126,136.2), null);


(lib.ringbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logorings();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.995,1.986);

	this.instance_1 = new lib.logobook1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-6.1,3.365,3.564,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ringbook, new cjs.Rectangle(-111,-116.2,222,232.5), null);


(lib.glowring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(88,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:10.6,y:-12},0).wait(1).to({x:-13.9,y:-8},0).wait(1).to({x:-70.8,y:4.8},0).wait(1).to({x:-68.4,y:20.1},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_1 = new lib.glow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.3,-13);

	this.instance_2 = new lib.glow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.6,-13);

	this.instance_3 = new lib.glow3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.5,-13);

	this.instance_4 = new lib.glow4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.4,-8.5);

	this.instance_5 = new lib.glow5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.glow6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-23.1,0);

	this.instance_7 = new lib.glow7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-82.4,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,-89.9,126,136.2);


(lib.loading_book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_superwhy
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// glowring 1
	this.instance_1 = new lib.glowring("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,-5.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},8).wait(16));

	// glowring 2
	this.instance_2 = new lib.glowring("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,-14.9,1.095,1.317,0,-141,35.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},8).wait(8));

	// glowring 3
	this.instance_3 = new lib.glowring("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45.6,116.6,1.096,1.419,0,-75.7,100.3,115.2,-17.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(8));

	// Layer 1
	this.instance_4 = new lib.ringbook();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-116.2,222,232.5);


// stage content:
(lib.loadingbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.loading_book();
	this.instance.parent = this;
	this.instance.setTransform(111,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,116,222,232.5);
// library properties:
lib.properties = {
	id: 'D4FE3762A84649B68F21E90E806A29B2',
	width: 222,
	height: 232,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/loading_book_atlas_.png", id:"loading_book_atlas_"}
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
an.compositions['D4FE3762A84649B68F21E90E806A29B2'] = {
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