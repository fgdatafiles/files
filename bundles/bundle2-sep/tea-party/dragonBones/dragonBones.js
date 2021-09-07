var dragonBones;
(function (dragonBones) {
    let geom;
    (function (geom) {
        class Point {
            constructor(x = 0, y = 0) {
                this.x = x;
                this.y = y;
            }
            toString() {
                return "[Point (x=" + this.x + " y=" + this.y + ")]";
            }
        }
        geom.Point = Point;
        class Rectangle {
            constructor(x = 0, y = 0, width = 0, height = 0) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
        }
        geom.Rectangle = Rectangle;
        class Matrix {
            constructor() {
                this.a = 1;
                this.b = 0;
                this.c = 0;
                this.d = 1;
                this.tx = 0;
                this.ty = 0;
            }
            invert() {
                var a1 = this.a;
                var b1 = this.b;
                var c1 = this.c;
                var d1 = this.d;
                var tx1 = this.tx;
                var n = a1 * d1 - b1 * c1;
                this.a = d1 / n;
                this.b = -b1 / n;
                this.c = -c1 / n;
                this.d = a1 / n;
                this.tx = (c1 * this.ty - d1 * tx1) / n;
                this.ty = -(a1 * this.ty - b1 * tx1) / n;
            }
        }
        geom.Matrix = Matrix;
        class ColorTransform {
            constructor() {
                this.alphaMultiplier = 0;
                this.alphaOffset = 0;
                this.blueMultiplier = 0;
                this.blueOffset = 0;
                this.greenMultiplier = 0;
                this.greenOffset = 0;
                this.redMultiplier = 0;
                this.redOffset = 0;
            }
        }
        geom.ColorTransform = ColorTransform;
    })(geom = dragonBones.geom || (dragonBones.geom = {}));
    let events;
    (function (events) {
        class Event {
            constructor(type) {
                this.type = type;
            }
        }
        events.Event = Event;
        class AnimationEvent extends Event {
            constructor(type) {
                super(type);
            }
        }
        AnimationEvent.FADE_IN = "fadeIn";
        AnimationEvent.FADE_OUT = "fadeOut";
        AnimationEvent.START = "start";
        AnimationEvent.COMPLETE = "complete";
        AnimationEvent.LOOP_COMPLETE = "loopComplete";
        AnimationEvent.FADE_IN_COMPLETE = "fadeInComplete";
        AnimationEvent.FADE_OUT_COMPLETE = "fadeOutComplete";
        events.AnimationEvent = AnimationEvent;
        class ArmatureEvent extends Event {
            constructor(type) {
                super(type);
            }
        }
        ArmatureEvent.Z_ORDER_UPDATED = "zOrderUpdated";
        events.ArmatureEvent = ArmatureEvent;
        class FrameEvent extends Event {
            constructor(type) {
                super(type);
            }
        }
        FrameEvent.ANIMATION_FRAME_EVENT = "animationFrameEvent";
        FrameEvent.BONE_FRAME_EVENT = "boneFrameEvent";
        events.FrameEvent = FrameEvent;
        class SoundEvent extends Event {
            constructor(type) {
                super(type);
            }
        }
        SoundEvent.SOUND = "sound";
        SoundEvent.BONE_FRAME_EVENT = "boneFrameEvent";
        events.SoundEvent = SoundEvent;
        class EventDispatcher {
            constructor() {
            }
            hasEventListener(type) {
                if (this._listenersMap && this._listenersMap[type]) {
                    return true;
                }
                return false;
            }
            addEventListener(type, listener) {
                if (type && listener) {
                    if (!this._listenersMap) {
                        this._listenersMap = {};
                    }
                    var listeners = this._listenersMap[type];
                    if (listeners) {
                        this.removeEventListener(type, listener);
                    }
                    if (listeners) {
                        listeners.push(listener);
                    }
                    else {
                        this._listenersMap[type] = [listener];
                    }
                }
            }
            removeEventListener(type, listener) {
                if (!this._listenersMap || !type || !listener) {
                    return;
                }
                var listeners = this._listenersMap[type];
                if (listeners) {
                    var length = listeners.length;
                    for (var i = 0; i < length; i++) {
                        if (listeners[i] == listener) {
                            if (length == 1) {
                                listeners.length = 0;
                                delete this._listenersMap[type];
                            }
                            else {
                                listeners.splice(i, 1);
                            }
                        }
                    }
                }
            }
            removeAllEventListeners(type) {
                if (type) {
                    delete this._listenersMap[type];
                }
                else {
                    this._listenersMap = null;
                }
            }
            dispatchEvent(event) {
                if (event) {
                    var listeners = this._listenersMap[event.type];
                    if (listeners) {
                        event.target = this;
                        var listenersCopy = listeners.concat();
                        var length = listeners.length;
                        for (var i = 0; i < length; i++) {
                            listenersCopy[i](event);
                        }
                    }
                }
            }
        }
        events.EventDispatcher = EventDispatcher;
        class SoundEventManager extends EventDispatcher {
            constructor() {
                super();
                if (SoundEventManager._instance) {
                    throw new Error("Singleton already constructed!");
                }
            }
            static getInstance() {
                if (!SoundEventManager._instance) {
                    SoundEventManager._instance = new SoundEventManager();
                }
                return SoundEventManager._instance;
            }
        }
        events.SoundEventManager = SoundEventManager;
    })(events = dragonBones.events || (dragonBones.events = {}));
    let animation;
    (function (animation) {
        class WorldClock {
            constructor() {
                this.timeScale = 1;
                this.time = new Date().getTime() * 0.001;
                this._animatableList = [];
            }
            contains(animatable) {
                return this._animatableList.indexOf(animatable) >= 0;
            }
            add(animatable) {
                if (animatable && this._animatableList.indexOf(animatable) == -1) {
                    this._animatableList.push(animatable);
                }
            }
            remove(animatable) {
                var index = this._animatableList.indexOf(animatable);
                if (index >= 0) {
                    this._animatableList[index] = null;
                }
            }
            clear() {
                this._animatableList.length = 0;
            }
            advanceTime(passedTime) {
                if (passedTime < 0) {
                    var currentTime = new Date().getTime() * 0.001;
                    passedTime = currentTime - this.time;
                    this.time = currentTime;
                }
                passedTime *= this.timeScale;
                var length = this._animatableList.length;
                if (length == 0) {
                    return;
                }
                var currentIndex = 0;
                for (var i = 0; i < length; i++) {
                    var animatable = this._animatableList[i];
                    if (animatable) {
                        if (currentIndex != i) {
                            this._animatableList[currentIndex] = animatable;
                            this._animatableList[i] = null;
                        }
                        animatable.advanceTime(passedTime);
                        currentIndex++;
                    }
                }
                if (currentIndex != i) {
                    length = this._animatableList.length;
                    while (i < length) {
                        this._animatableList[currentIndex++] = this._animatableList[i++];
                    }
                    this._animatableList.length = currentIndex;
                }
            }
        }
        WorldClock.clock = new WorldClock();
        animation.WorldClock = WorldClock;
        class TimelineState {
            constructor() {
                this.transform = new objects.DBTransform();
                this.pivot = new geom.Point();
                this._durationTransform = new objects.DBTransform();
                this._durationPivot = new geom.Point();
                this._durationColor = new geom.ColorTransform();
            }
            /** @private */
            static _borrowObject() {
                if (TimelineState._pool.length == 0) {
                    return new TimelineState();
                }
                return TimelineState._pool.pop();
            }
            /** @private */
            static _returnObject(timeline) {
                if (TimelineState._pool.indexOf(timeline) < 0) {
                    TimelineState._pool[TimelineState._pool.length] = timeline;
                }
                timeline.clear();
            }
            /** @private */
            static _clear() {
                var i = TimelineState._pool.length;
                while (i--) {
                    TimelineState._pool[i].clear();
                }
                TimelineState._pool.length = 0;
            }
            static getEaseValue(value, easing) {
                if (easing > 1) {
                    var valueEase = 0.5 * (1 - Math.cos(value * Math.PI)) - value;
                    easing -= 1;
                }
                else if (easing > 0) {
                    valueEase = Math.sin(value * TimelineState.HALF_PI) - value;
                }
                else if (easing < 0) {
                    valueEase = 1 - Math.cos(value * TimelineState.HALF_PI) - value;
                    easing *= -1;
                }
                return valueEase * easing + value;
            }
            fadeIn(bone, animationState, timeline) {
                this._bone = bone;
                this._animationState = animationState;
                this._timeline = timeline;
                this._originTransform = this._timeline.originTransform;
                this._originPivot = this._timeline.originPivot;
                this._tweenTransform = false;
                this._tweenColor = false;
                this._totalTime = this._animationState.totalTime;
                this.transform.x = 0;
                this.transform.y = 0;
                this.transform.scaleX = 0;
                this.transform.scaleY = 0;
                this.transform.skewX = 0;
                this.transform.skewY = 0;
                this.pivot.x = 0;
                this.pivot.y = 0;
                this._durationTransform.x = 0;
                this._durationTransform.y = 0;
                this._durationTransform.scaleX = 0;
                this._durationTransform.scaleY = 0;
                this._durationTransform.skewX = 0;
                this._durationTransform.skewY = 0;
                this._durationPivot.x = 0;
                this._durationPivot.y = 0;
                this._currentFrame = null;
                switch (this._timeline.getFrameList().length) {
                    case 0:
                        this._bone._arriveAtFrame(null, this, this._animationState, false);
                        this._updateState = 0;
                        break;
                    case 1:
                        this._updateState = -1;
                        break;
                    default:
                        this._updateState = 1;
                        break;
                }
            }
            fadeOut() {
                this.transform.skewX = utils.TransformUtil.formatRadian(this.transform.skewX);
                this.transform.skewY = utils.TransformUtil.formatRadian(this.transform.skewY);
            }
            update(progress) {
                if (this._updateState) {
                    if (this._updateState > 0) {
                        if (this._timeline.scale == 0) {
                            progress = 1;
                        }
                        else {
                            progress /= this._timeline.scale;
                        }
                        if (progress == 1) {
                            progress = 0.99999999;
                        }
                        progress += this._timeline.offset;
                        var loopCount = Math.floor(progress);
                        progress -= loopCount;
                        //
                        var playedTime = this._totalTime * progress;
                        var isArrivedFrame = false;
                        var frameIndex;
                        while (!this._currentFrame || playedTime > this._currentFramePosition + this._currentFrameDuration || playedTime < this._currentFramePosition) {
                            if (isArrivedFrame) {
                                this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, true);
                            }
                            isArrivedFrame = true;
                            if (this._currentFrame) {
                                frameIndex = this._timeline.getFrameList().indexOf(this._currentFrame) + 1;
                                if (frameIndex >= this._timeline.getFrameList().length) {
                                    frameIndex = 0;
                                }
                                this._currentFrame = this._timeline.getFrameList()[frameIndex];
                            }
                            else {
                                frameIndex = 0;
                                this._currentFrame = this._timeline.getFrameList()[0];
                            }
                            this._currentFrameDuration = this._currentFrame.duration;
                            this._currentFramePosition = this._currentFrame.position;
                        }
                        if (isArrivedFrame) {
                            this.tweenActive = this._currentFrame.displayIndex >= 0;
                            frameIndex++;
                            if (frameIndex >= this._timeline.getFrameList().length) {
                                frameIndex = 0;
                            }
                            var nextFrame = this._timeline.getFrameList()[frameIndex];
                            if (frameIndex == 0 &&
                                this._animationState.loop &&
                                this._animationState.loopCount >= Math.abs(this._animationState.loop) - 1 &&
                                ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + loopCount - this._timeline.offset) * this._timeline.scale > 0.99999999) {
                                this._updateState = 0;
                                this._tweenEasing = NaN;
                            }
                            else if (this._currentFrame.displayIndex < 0 || nextFrame.displayIndex < 0 || !this._animationState.tweenEnabled) {
                                this._tweenEasing = NaN;
                            }
                            else if (isNaN(this._animationState.clip.tweenEasing)) {
                                this._tweenEasing = this._currentFrame.tweenEasing;
                            }
                            else {
                                this._tweenEasing = this._animationState.clip.tweenEasing;
                            }
                            if (isNaN(this._tweenEasing)) {
                                this._tweenTransform = false;
                                this._tweenColor = false;
                            }
                            else {
                                this._durationTransform.x = nextFrame.transform.x - this._currentFrame.transform.x;
                                this._durationTransform.y = nextFrame.transform.y - this._currentFrame.transform.y;
                                this._durationTransform.skewX = nextFrame.transform.skewX - this._currentFrame.transform.skewX;
                                this._durationTransform.skewY = nextFrame.transform.skewY - this._currentFrame.transform.skewY;
                                this._durationTransform.scaleX = nextFrame.transform.scaleX - this._currentFrame.transform.scaleX;
                                this._durationTransform.scaleY = nextFrame.transform.scaleY - this._currentFrame.transform.scaleY;
                                if (frameIndex == 0) {
                                    this._durationTransform.skewX = utils.TransformUtil.formatRadian(this._durationTransform.skewX);
                                    this._durationTransform.skewY = utils.TransformUtil.formatRadian(this._durationTransform.skewY);
                                }
                                this._durationPivot.x = nextFrame.pivot.x - this._currentFrame.pivot.x;
                                this._durationPivot.y = nextFrame.pivot.y - this._currentFrame.pivot.y;
                                if (this._durationTransform.x != 0 ||
                                    this._durationTransform.y != 0 ||
                                    this._durationTransform.skewX != 0 ||
                                    this._durationTransform.skewY != 0 ||
                                    this._durationTransform.scaleX != 0 ||
                                    this._durationTransform.scaleY != 0 ||
                                    this._durationPivot.x != 0 ||
                                    this._durationPivot.y != 0) {
                                    this._tweenTransform = true;
                                }
                                else {
                                    this._tweenTransform = false;
                                }
                                if (this._currentFrame.color && nextFrame.color) {
                                    this._durationColor.alphaOffset = nextFrame.color.alphaOffset - this._currentFrame.color.alphaOffset;
                                    this._durationColor.redOffset = nextFrame.color.redOffset - this._currentFrame.color.redOffset;
                                    this._durationColor.greenOffset = nextFrame.color.greenOffset - this._currentFrame.color.greenOffset;
                                    this._durationColor.blueOffset = nextFrame.color.blueOffset - this._currentFrame.color.blueOffset;
                                    this._durationColor.alphaMultiplier = nextFrame.color.alphaMultiplier - this._currentFrame.color.alphaMultiplier;
                                    this._durationColor.redMultiplier = nextFrame.color.redMultiplier - this._currentFrame.color.redMultiplier;
                                    this._durationColor.greenMultiplier = nextFrame.color.greenMultiplier - this._currentFrame.color.greenMultiplier;
                                    this._durationColor.blueMultiplier = nextFrame.color.blueMultiplier - this._currentFrame.color.blueMultiplier;
                                    if (this._durationColor.alphaOffset != 0 ||
                                        this._durationColor.redOffset != 0 ||
                                        this._durationColor.greenOffset != 0 ||
                                        this._durationColor.blueOffset != 0 ||
                                        this._durationColor.alphaMultiplier != 0 ||
                                        this._durationColor.redMultiplier != 0 ||
                                        this._durationColor.greenMultiplier != 0 ||
                                        this._durationColor.blueMultiplier != 0) {
                                        this._tweenColor = true;
                                    }
                                    else {
                                        this._tweenColor = false;
                                    }
                                }
                                else if (this._currentFrame.color) {
                                    this._tweenColor = true;
                                    this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset;
                                    this._durationColor.redOffset = -this._currentFrame.color.redOffset;
                                    this._durationColor.greenOffset = -this._currentFrame.color.greenOffset;
                                    this._durationColor.blueOffset = -this._currentFrame.color.blueOffset;
                                    this._durationColor.alphaMultiplier = 1 - this._currentFrame.color.alphaMultiplier;
                                    this._durationColor.redMultiplier = 1 - this._currentFrame.color.redMultiplier;
                                    this._durationColor.greenMultiplier = 1 - this._currentFrame.color.greenMultiplier;
                                    this._durationColor.blueMultiplier = 1 - this._currentFrame.color.blueMultiplier;
                                }
                                else if (nextFrame.color) {
                                    this._tweenColor = true;
                                    this._durationColor.alphaOffset = nextFrame.color.alphaOffset;
                                    this._durationColor.redOffset = nextFrame.color.redOffset;
                                    this._durationColor.greenOffset = nextFrame.color.greenOffset;
                                    this._durationColor.blueOffset = nextFrame.color.blueOffset;
                                    this._durationColor.alphaMultiplier = nextFrame.color.alphaMultiplier - 1;
                                    this._durationColor.redMultiplier = nextFrame.color.redMultiplier - 1;
                                    this._durationColor.greenMultiplier = nextFrame.color.greenMultiplier - 1;
                                    this._durationColor.blueMultiplier = nextFrame.color.blueMultiplier - 1;
                                }
                                else {
                                    this._tweenColor = false;
                                }
                            }
                            if (!this._tweenTransform) {
                                if (this._animationState.blend) {
                                    this.transform.x = this._originTransform.x + this._currentFrame.transform.x;
                                    this.transform.y = this._originTransform.y + this._currentFrame.transform.y;
                                    this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX;
                                    this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY;
                                    this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX;
                                    this.transform.scaleY = this._originTransform.scaleY + this._currentFrame.transform.scaleY;
                                    this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x;
                                    this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y;
                                }
                                else {
                                    this.transform.x = this._currentFrame.transform.x;
                                    this.transform.y = this._currentFrame.transform.y;
                                    this.transform.skewX = this._currentFrame.transform.skewX;
                                    this.transform.skewY = this._currentFrame.transform.skewY;
                                    this.transform.scaleX = this._currentFrame.transform.scaleX;
                                    this.transform.scaleY = this._currentFrame.transform.scaleY;
                                    this.pivot.x = this._currentFrame.pivot.x;
                                    this.pivot.y = this._currentFrame.pivot.y;
                                }
                            }
                            if (!this._tweenColor) {
                                if (this._currentFrame.color) {
                                    this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, true);
                                }
                                else if (this._bone._isColorChanged) {
                                    this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, false);
                                }
                            }
                            this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, false);
                        }
                        if (this._tweenTransform || this._tweenColor) {
                            progress = (playedTime - this._currentFramePosition) / this._currentFrameDuration;
                            if (this._tweenEasing) {
                                progress = TimelineState.getEaseValue(progress, this._tweenEasing);
                            }
                        }
                        if (this._tweenTransform) {
                            var currentTransform = this._currentFrame.transform;
                            var currentPivot = this._currentFrame.pivot;
                            if (this._animationState.blend) {
                                this.transform.x = this._originTransform.x + currentTransform.x + this._durationTransform.x * progress;
                                this.transform.y = this._originTransform.y + currentTransform.y + this._durationTransform.y * progress;
                                this.transform.skewX = this._originTransform.skewX + currentTransform.skewX + this._durationTransform.skewX * progress;
                                this.transform.skewY = this._originTransform.skewY + currentTransform.skewY + this._durationTransform.skewY * progress;
                                this.transform.scaleX = this._originTransform.scaleX + currentTransform.scaleX + this._durationTransform.scaleX * progress;
                                this.transform.scaleY = this._originTransform.scaleY + currentTransform.scaleY + this._durationTransform.scaleY * progress;
                                this.pivot.x = this._originPivot.x + currentPivot.x + this._durationPivot.x * progress;
                                this.pivot.y = this._originPivot.y + currentPivot.y + this._durationPivot.y * progress;
                            }
                            else {
                                this.transform.x = currentTransform.x + this._durationTransform.x * progress;
                                this.transform.y = currentTransform.y + this._durationTransform.y * progress;
                                this.transform.skewX = currentTransform.skewX + this._durationTransform.skewX * progress;
                                this.transform.skewY = currentTransform.skewY + this._durationTransform.skewY * progress;
                                this.transform.scaleX = currentTransform.scaleX + this._durationTransform.scaleX * progress;
                                this.transform.scaleY = currentTransform.scaleY + this._durationTransform.scaleY * progress;
                                this.pivot.x = currentPivot.x + this._durationPivot.x * progress;
                                this.pivot.y = currentPivot.y + this._durationPivot.y * progress;
                            }
                        }
                        if (this._tweenColor) {
                            if (this._currentFrame.color) {
                                this._bone._updateColor(this._currentFrame.color.alphaOffset + this._durationColor.alphaOffset * progress, this._currentFrame.color.redOffset + this._durationColor.redOffset * progress, this._currentFrame.color.greenOffset + this._durationColor.greenOffset * progress, this._currentFrame.color.blueOffset + this._durationColor.blueOffset * progress, this._currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * progress, this._currentFrame.color.redMultiplier + this._durationColor.redMultiplier * progress, this._currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * progress, this._currentFrame.color.blueMultiplier + this._durationColor.blueMultiplier * progress, true);
                            }
                            else {
                                this._bone._updateColor(this._durationColor.alphaOffset * progress, this._durationColor.redOffset * progress, this._durationColor.greenOffset * progress, this._durationColor.blueOffset * progress, 1 + this._durationColor.alphaMultiplier * progress, 1 + this._durationColor.redMultiplier * progress, 1 + this._durationColor.greenMultiplier * progress, 1 + this._durationColor.blueMultiplier * progress, true);
                            }
                        }
                    }
                    else {
                        this._updateState = 0;
                        if (this._animationState.blend) {
                            this.transform.copy(this._originTransform);
                            this.pivot.x = this._originPivot.x;
                            this.pivot.y = this._originPivot.y;
                        }
                        else {
                            this.transform.x =
                                this.transform.y =
                                    this.transform.skewX =
                                        this.transform.skewY =
                                            this.transform.scaleX =
                                                this.transform.scaleY = 0;
                            this.pivot.x = 0;
                            this.pivot.y = 0;
                        }
                        this._currentFrame = this._timeline.getFrameList()[0];
                        this.tweenActive = this._currentFrame.displayIndex >= 0;
                        if (this._currentFrame.color) {
                            this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, true);
                        }
                        else {
                            this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, false);
                        }
                        this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, false);
                    }
                }
            }
            clear() {
                this._updateState = 0;
                this._bone = null;
                this._animationState = null;
                this._timeline = null;
                this._currentFrame = null;
                this._originTransform = null;
                this._originPivot = null;
            }
        }
        TimelineState.HALF_PI = Math.PI * 0.5;
        TimelineState._pool = [];
        animation.TimelineState = TimelineState;
        class AnimationState {
            constructor() {
                this.loop = 0;
                this.layer = 0;
                this._timelineStates = {};
            }
            /** @private */
            static _borrowObject() {
                if (AnimationState._pool.length == 0) {
                    return new AnimationState();
                }
                return AnimationState._pool.pop();
            }
            /** @private */
            static _returnObject(animationState) {
                if (AnimationState._pool.indexOf(animationState) < 0) {
                    AnimationState._pool[AnimationState._pool.length] = animationState;
                }
                animationState.clear();
            }
            /** @private */
            static _clear() {
                var i = AnimationState._pool.length;
                while (i--) {
                    AnimationState._pool[i].clear();
                }
                AnimationState._pool.length = 0;
            }
            fadeIn(armature, clip, fadeInTime, timeScale, loop, layer, displayControl, pauseBeforeFadeInComplete) {
                this.layer = layer;
                this.clip = clip;
                this.name = this.clip.name;
                this.totalTime = this.clip.duration;
                this._armature = armature;
                if (Math.round(this.clip.duration * this.clip.frameRate) < 2 || timeScale == Infinity) {
                    this.timeScale = 1;
                    this.currentTime = this.totalTime;
                    if (this.loop >= 0) {
                        this.loop = 1;
                    }
                    else {
                        this.loop = -1;
                    }
                }
                else {
                    this.timeScale = timeScale;
                    this.currentTime = 0;
                    this.loop = loop;
                }
                this._pauseBeforeFadeInComplete = pauseBeforeFadeInComplete;
                this._fadeInTime = fadeInTime * this.timeScale;
                this._fadeState = 1;
                this._fadeOutBeginTime = 0;
                this._fadeOutWeight = -1;
                this._fadeWeight = 0;
                this._fadeIn = true;
                this._fadeOut = false;
                this.loopCount = -1;
                this.displayControl = displayControl;
                this.isPlaying = true;
                this.isComplete = false;
                this.weight = 1;
                this.blend = true;
                this.enabled = true;
                this.tweenEnabled = false;
                this.updateTimelineStates();
            }
            fadeOut(fadeOutTime, pause = false) {
                if (!this._armature || this._fadeOutWeight >= 0) {
                    return;
                }
                this._fadeState = -1;
                this._fadeOutWeight = this._fadeWeight;
                this._fadeOutTime = fadeOutTime * this.timeScale;
                this._fadeOutBeginTime = this.currentTime;
                this._fadeOut = true;
                this.isPlaying = !pause;
                this.displayControl = false;
                for (var index in this._timelineStates) {
                    this._timelineStates[index].fadeOut();
                }
                this.enabled = true;
            }
            play() {
                this.isPlaying = true;
            }
            stop() {
                this.isPlaying = false;
            }
            getMixingTransform(timelineName) {
                if (this._mixingTransforms) {
                    return Number(this._mixingTransforms[timelineName]);
                }
                return -1;
            }
            addMixingTransform(timelineName, type = 2, recursive = true) {
                if (this.clip && this.clip.getTimeline(timelineName)) {
                    if (!this._mixingTransforms) {
                        this._mixingTransforms = {};
                    }
                    if (recursive) {
                        var i = this._armature._boneList.length;
                        var bone;
                        var currentBone;
                        while (i--) {
                            bone = this._armature._boneList[i];
                            if (bone.name == timelineName) {
                                currentBone = bone;
                            }
                            if (currentBone && (currentBone == bone || currentBone.contains(bone))) {
                                this._mixingTransforms[bone.name] = type;
                            }
                        }
                    }
                    else {
                        this._mixingTransforms[timelineName] = type;
                    }
                    this.updateTimelineStates();
                }
                else {
                    throw new Error();
                }
            }
            removeMixingTransform(timelineName = null, recursive = true) {
                if (timelineName) {
                    if (recursive) {
                        var i = this._armature._boneList.length;
                        var bone;
                        var currentBone;
                        while (i--) {
                            bone = this._armature._boneList[i];
                            if (bone.name == timelineName) {
                                currentBone = bone;
                            }
                            if (currentBone && (currentBone == bone || currentBone.contains(bone))) {
                                delete this._mixingTransforms[bone.name];
                            }
                        }
                    }
                    else {
                        delete this._mixingTransforms[timelineName];
                    }
                    for (var index in this._mixingTransforms) {
                        var hasMixing = true;
                        break;
                    }
                    if (!hasMixing) {
                        this._mixingTransforms = null;
                    }
                }
                else {
                    this._mixingTransforms = null;
                }
                this.updateTimelineStates();
            }
            advanceTime(passedTime) {
                if (!this.enabled) {
                    return false;
                }
                var event;
                var isComplete;
                if (this._fadeIn) {
                    this._fadeIn = false;
                    if (this._armature.hasEventListener(events.AnimationEvent.FADE_IN)) {
                        event = new events.AnimationEvent(events.AnimationEvent.FADE_IN);
                        event.animationState = this;
                        this._armature._eventList.push(event);
                    }
                }
                if (this._fadeOut) {
                    this._fadeOut = false;
                    if (this._armature.hasEventListener(events.AnimationEvent.FADE_OUT)) {
                        event = new events.AnimationEvent(events.AnimationEvent.FADE_OUT);
                        event.animationState = this;
                        this._armature._eventList.push(event);
                    }
                }
                this.currentTime += passedTime * this.timeScale;
                if (this.isPlaying && !this.isComplete) {
                    var progress;
                    var currentLoopCount;
                    if (this._pauseBeforeFadeInComplete) {
                        this._pauseBeforeFadeInComplete = false;
                        this.isPlaying = false;
                        progress = 0;
                        currentLoopCount = Math.floor(progress);
                    }
                    else {
                        progress = this.currentTime / this.totalTime;
                        //update loopCount
                        currentLoopCount = Math.floor(progress);
                        if (currentLoopCount != this.loopCount) {
                            if (this.loopCount == -1) {
                                if (this._armature.hasEventListener(events.AnimationEvent.START)) {
                                    event = new events.AnimationEvent(events.AnimationEvent.START);
                                    event.animationState = this;
                                    this._armature._eventList.push(event);
                                }
                            }
                            this.loopCount = currentLoopCount;
                            if (this.loopCount) {
                                if (this.loop && this.loopCount * this.loopCount >= this.loop * this.loop - 1) {
                                    isComplete = true;
                                    progress = 1;
                                    currentLoopCount = 0;
                                    if (this._armature.hasEventListener(events.AnimationEvent.COMPLETE)) {
                                        event = new events.AnimationEvent(events.AnimationEvent.COMPLETE);
                                        event.animationState = this;
                                        this._armature._eventList.push(event);
                                    }
                                }
                                else {
                                    if (this._armature.hasEventListener(events.AnimationEvent.LOOP_COMPLETE)) {
                                        event = new events.AnimationEvent(events.AnimationEvent.LOOP_COMPLETE);
                                        event.animationState = this;
                                        this._armature._eventList.push(event);
                                    }
                                }
                            }
                        }
                    }
                    for (var index in this._timelineStates) {
                        this._timelineStates[index].update(progress);
                    }
                    var frameList = this.clip.getFrameList();
                    if (frameList.length > 0) {
                        var playedTime = this.totalTime * (progress - currentLoopCount);
                        var isArrivedFrame = false;
                        var frameIndex;
                        while (!this._currentFrame || playedTime > this._currentFrame.position + this._currentFrame.duration || playedTime < this._currentFrame.position) {
                            if (isArrivedFrame) {
                                this._armature._arriveAtFrame(this._currentFrame, null, this, true);
                            }
                            isArrivedFrame = true;
                            if (this._currentFrame) {
                                frameIndex = frameList.indexOf(this._currentFrame);
                                frameIndex++;
                                if (frameIndex >= frameList.length) {
                                    frameIndex = 0;
                                }
                                this._currentFrame = frameList[frameIndex];
                            }
                            else {
                                this._currentFrame = frameList[0];
                            }
                        }
                        if (isArrivedFrame) {
                            this._armature._arriveAtFrame(this._currentFrame, null, this, false);
                        }
                    }
                }
                //update weight and fadeState
                if (this._fadeState > 0) {
                    if (this._fadeInTime == 0) {
                        this._fadeWeight = 1;
                        this._fadeState = 0;
                        this.isPlaying = true;
                        if (this._armature.hasEventListener(events.AnimationEvent.FADE_IN_COMPLETE)) {
                            event = new events.AnimationEvent(events.AnimationEvent.FADE_IN_COMPLETE);
                            event.animationState = this;
                            this._armature._eventList.push(event);
                        }
                    }
                    else {
                        this._fadeWeight = this.currentTime / this._fadeInTime;
                        if (this._fadeWeight >= 1) {
                            this._fadeWeight = 1;
                            this._fadeState = 0;
                            if (!this.isPlaying) {
                                this.currentTime -= this._fadeInTime;
                            }
                            this.isPlaying = true;
                            if (this._armature.hasEventListener(events.AnimationEvent.FADE_IN_COMPLETE)) {
                                event = new events.AnimationEvent(events.AnimationEvent.FADE_IN_COMPLETE);
                                event.animationState = this;
                                this._armature._eventList.push(event);
                            }
                        }
                    }
                }
                else if (this._fadeState < 0) {
                    if (this._fadeOutTime == 0) {
                        this._fadeWeight = 0;
                        this._fadeState = 0;
                        if (this._armature.hasEventListener(events.AnimationEvent.FADE_OUT_COMPLETE)) {
                            event = new events.AnimationEvent(events.AnimationEvent.FADE_OUT_COMPLETE);
                            event.animationState = this;
                            this._armature._eventList.push(event);
                        }
                        return true;
                    }
                    else {
                        this._fadeWeight = (1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime) * this._fadeOutWeight;
                        if (this._fadeWeight <= 0) {
                            this._fadeWeight = 0;
                            this._fadeState = 0;
                            if (this._armature.hasEventListener(events.AnimationEvent.FADE_OUT_COMPLETE)) {
                                event = new events.AnimationEvent(events.AnimationEvent.FADE_OUT_COMPLETE);
                                event.animationState = this;
                                this._armature._eventList.push(event);
                            }
                            return true;
                        }
                    }
                }
                if (isComplete) {
                    this.isComplete = true;
                    if (this.loop < 0) {
                        this.fadeOut((this._fadeOutWeight || this._fadeInTime) / this.timeScale, true);
                    }
                }
                return false;
            }
            updateTimelineStates() {
                if (this._mixingTransforms) {
                    for (var timelineName in this._timelineStates) {
                        if (this._mixingTransforms[timelineName] == null) {
                            this.removeTimelineState(timelineName);
                        }
                    }
                    for (timelineName in this._mixingTransforms) {
                        if (!this._timelineStates[timelineName]) {
                            this.addTimelineState(timelineName);
                        }
                    }
                }
                else {
                    for (timelineName in this.clip.getTimelines()) {
                        if (!this._timelineStates[timelineName]) {
                            this.addTimelineState(timelineName);
                        }
                    }
                }
            }
            addTimelineState(timelineName) {
                var bone = this._armature.getBone(timelineName);
                if (bone) {
                    var timelineState = TimelineState._borrowObject();
                    var timeline = this.clip.getTimeline(timelineName);
                    timelineState.fadeIn(bone, this, timeline);
                    this._timelineStates[timelineName] = timelineState;
                }
            }
            removeTimelineState(timelineName) {
                TimelineState._returnObject(this._timelineStates[timelineName]);
                delete this._timelineStates[timelineName];
            }
            clear() {
                this.clip = null;
                this.enabled = false;
                this._armature = null;
                this._currentFrame = null;
                this._mixingTransforms = null;
                for (var timelineName in this._timelineStates) {
                    this.removeTimelineState(timelineName);
                }
            }
        }
        AnimationState._pool = [];
        animation.AnimationState = AnimationState;
        class Animation {
            constructor(armature) {
                this._armature = armature;
                this._animationLayer = [];
                this._isPlaying = false;
                this.animationNameList = [];
                this.tweenEnabled = false;
                this.timeScale = 1;
            }
            getLastAnimationName() {
                return this._lastAnimationState ? this._lastAnimationState.name : null;
            }
            getLastAnimationState() {
                return this._lastAnimationState;
            }
            getAnimationDataList() {
                return this._animationDataList;
            }
            setAnimationDataList(value) {
                this._animationDataList = value;
                this.animationNameList.length = 0;
                for (var index in this._animationDataList) {
                    this.animationNameList[this.animationNameList.length] = this._animationDataList[index].name;
                }
            }
            getIsPlaying() {
                return this._isPlaying && !this.getIsComplete();
            }
            getIsComplete() {
                if (this._lastAnimationState) {
                    if (!this._lastAnimationState.isComplete) {
                        return false;
                    }
                    var j = this._animationLayer.length;
                    while (j--) {
                        var animationStateList = this._animationLayer[j];
                        var i = animationStateList.length;
                        while (i--) {
                            if (!animationStateList[i].isComplete) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                return false;
            }
            dispose() {
                if (!this._armature) {
                    return;
                }
                this.stop();
                var i = this._animationLayer.length;
                while (i--) {
                    var animationStateList = this._animationLayer[i];
                    var j = animationStateList.length;
                    while (j--) {
                        AnimationState._returnObject(animationStateList[j]);
                    }
                    animationStateList.length = 0;
                }
                this._animationLayer.length = 0;
                this.animationNameList.length = 0;
                this._armature = null;
                this._animationLayer = null;
                this._animationDataList = null;
                this.animationNameList = null;
            }
            gotoAndPlay(animationName, fadeInTime = -1, duration = -1, loop = NaN, layer = 0, group = null, fadeOutMode = Animation.SAME_LAYER_AND_GROUP, displayControl = true, pauseFadeOut = true, pauseFadeIn = true) {
                if (!this._animationDataList) {
                    return null;
                }
                var i = this._animationDataList.length;
                var animationData;
                while (i--) {
                    if (this._animationDataList[i].name == animationName) {
                        animationData = this._animationDataList[i];
                        break;
                    }
                }
                if (!animationData) {
                    return null;
                }
                this._isPlaying = true;
                //
                fadeInTime = fadeInTime < 0 ? (animationData.fadeInTime < 0 ? 0.3 : animationData.fadeInTime) : fadeInTime;
                var durationScale;
                if (duration < 0) {
                    durationScale = animationData.scale < 0 ? 1 : animationData.scale;
                }
                else {
                    durationScale = duration / animationData.duration;
                }
                loop = isNaN(loop) ? animationData.loop : loop;
                layer = this.addLayer(layer);
                //autoSync = autoSync && !pauseFadeOut && !pauseFadeIn;
                var animationState;
                var animationStateList;
                switch (fadeOutMode) {
                    case Animation.NONE:
                        break;
                    case Animation.SAME_LAYER:
                        animationStateList = this._animationLayer[layer];
                        i = animationStateList.length;
                        while (i--) {
                            animationState = animationStateList[i];
                            animationState.fadeOut(fadeInTime, pauseFadeOut);
                        }
                        break;
                    case Animation.SAME_GROUP:
                        j = this._animationLayer.length;
                        while (j--) {
                            animationStateList = this._animationLayer[j];
                            i = animationStateList.length;
                            while (i--) {
                                animationState = animationStateList[i];
                                if (animationState.group == group) {
                                    animationState.fadeOut(fadeInTime, pauseFadeOut);
                                }
                            }
                        }
                        break;
                    case Animation.ALL:
                        var j = this._animationLayer.length;
                        while (j--) {
                            animationStateList = this._animationLayer[j];
                            i = animationStateList.length;
                            while (i--) {
                                animationState = animationStateList[i];
                                animationState.fadeOut(fadeInTime, pauseFadeOut);
                            }
                        }
                        break;
                    case Animation.SAME_LAYER_AND_GROUP:
                    default:
                        animationStateList = this._animationLayer[layer];
                        i = animationStateList.length;
                        while (i--) {
                            animationState = animationStateList[i];
                            if (animationState.group == group) {
                                animationState.fadeOut(fadeInTime, pauseFadeOut);
                            }
                        }
                        break;
                }
                this._lastAnimationState = AnimationState._borrowObject();
                this._lastAnimationState.group = group;
                this._lastAnimationState.tweenEnabled = this.tweenEnabled;
                this._lastAnimationState.fadeIn(this._armature, animationData, fadeInTime, 1 / durationScale, loop, layer, displayControl, pauseFadeIn);
                this.addState(this._lastAnimationState);
                var slotList = this._armature._slotList;
                var slot;
                var childArmature;
                i = slotList.length;
                while (i--) {
                    slot = slotList[i];
                    childArmature = slot.getChildArmature();
                    if (childArmature) {
                        childArmature.animation.gotoAndPlay(animationName, fadeInTime);
                    }
                }
                return this._lastAnimationState;
            }
            play() {
                if (!this._animationDataList || this._animationDataList.length == 0) {
                    return;
                }
                if (!this._lastAnimationState) {
                    this.gotoAndPlay(this._animationDataList[0].name);
                }
                else if (!this._isPlaying) {
                    this._isPlaying = true;
                }
                else {
                    this.gotoAndPlay(this._lastAnimationState.name);
                }
            }
            stop() {
                this._isPlaying = false;
            }
            getState(name, layer = 0) {
                var l = this._animationLayer.length;
                if (l == 0) {
                    return null;
                }
                else if (layer >= l) {
                    layer = l - 1;
                }
                var animationStateList = this._animationLayer[layer];
                if (!animationStateList) {
                    return null;
                }
                var i = animationStateList.length;
                while (i--) {
                    if (animationStateList[i].name == name) {
                        return animationStateList[i];
                    }
                }
                return null;
            }
            hasAnimation(animationName) {
                var i = this._animationDataList.length;
                while (i--) {
                    if (this._animationDataList[i].name == animationName) {
                        return true;
                    }
                }
                return false;
            }
            advanceTime(passedTime) {
                if (!this._isPlaying) {
                    return;
                }
                passedTime *= this.timeScale;
                var l = this._armature._boneList.length;
                var i;
                var j;
                var k = l;
                var stateListLength;
                var bone;
                var boneName;
                var weigthLeft;
                var x;
                var y;
                var skewX;
                var skewY;
                var scaleX;
                var scaleY;
                var pivotX;
                var pivotY;
                var layerTotalWeight;
                var animationStateList;
                var animationState;
                var timelineState;
                var weight;
                var transform;
                var pivot;
                l--;
                while (k--) {
                    bone = this._armature._boneList[k];
                    boneName = bone.name;
                    weigthLeft = 1;
                    x = 0;
                    y = 0;
                    skewX = 0;
                    skewY = 0;
                    scaleX = 0;
                    scaleY = 0;
                    pivotX = 0;
                    pivotY = 0;
                    i = this._animationLayer.length;
                    while (i--) {
                        layerTotalWeight = 0;
                        animationStateList = this._animationLayer[i];
                        stateListLength = animationStateList.length;
                        for (j = 0; j < stateListLength; j++) {
                            animationState = animationStateList[j];
                            if (k == l) {
                                if (animationState.advanceTime(passedTime)) {
                                    this.removeState(animationState);
                                    j--;
                                    stateListLength--;
                                    continue;
                                }
                            }
                            timelineState = animationState._timelineStates[boneName];
                            if (timelineState && timelineState.tweenActive) {
                                weight = animationState._fadeWeight * animationState.weight * weigthLeft;
                                transform = timelineState.transform;
                                pivot = timelineState.pivot;
                                x += transform.x * weight;
                                y += transform.y * weight;
                                skewX += transform.skewX * weight;
                                skewY += transform.skewY * weight;
                                scaleX += transform.scaleX * weight;
                                scaleY += transform.scaleY * weight;
                                pivotX += pivot.x * weight;
                                pivotY += pivot.y * weight;
                                layerTotalWeight += weight;
                            }
                        }
                        if (layerTotalWeight >= weigthLeft) {
                            break;
                        }
                        else {
                            weigthLeft -= layerTotalWeight;
                        }
                    }
                    transform = bone.tween;
                    pivot = bone._tweenPivot;
                    transform.x = x;
                    transform.y = y;
                    transform.skewX = skewX;
                    transform.skewY = skewY;
                    transform.scaleX = scaleX;
                    transform.scaleY = scaleY;
                    pivot.x = pivotX;
                    pivot.y = pivotY;
                }
            }
            addLayer(layer) {
                if (layer >= this._animationLayer.length) {
                    layer = this._animationLayer.length;
                    this._animationLayer[layer] = [];
                }
                return layer;
            }
            addState(animationState) {
                var animationStateList = this._animationLayer[animationState.layer];
                animationStateList.push(animationState);
            }
            removeState(animationState) {
                var layer = animationState.layer;
                var animationStateList = this._animationLayer[layer];
                animationStateList.splice(animationStateList.indexOf(animationState), 1);
                AnimationState._returnObject(animationState);
                if (animationStateList.length == 0 && layer == this._animationLayer.length - 1) {
                    this._animationLayer.length--;
                }
            }
        }
        Animation.NONE = "none";
        Animation.SAME_LAYER = "sameLayer";
        Animation.SAME_GROUP = "sameGroup";
        Animation.SAME_LAYER_AND_GROUP = "sameLayerAndGroup";
        Animation.ALL = "all";
        animation.Animation = Animation;
    })(animation = dragonBones.animation || (dragonBones.animation = {}));
    let objects;
    (function (objects) {
        class DBTransform {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.skewX = 0;
                this.skewY = 0;
                this.scaleX = 1;
                this.scaleY = 1;
            }
            getRotation() {
                return this.skewX;
            }
            setRotation(value) {
                this.skewX = this.skewY = value;
            }
            copy(transform) {
                this.x = transform.x;
                this.y = transform.y;
                this.skewX = transform.skewX;
                this.skewY = transform.skewY;
                this.scaleX = transform.scaleX;
                this.scaleY = transform.scaleY;
            }
            toString() {
                return "[DBTransform (x=" +
                    this.x +
                    " y=" + this.y +
                    " skewX=" + this.skewX +
                    " skewY=" + this.skewY +
                    " scaleX=" + this.scaleX +
                    " scaleY=" + this.scaleY +
                    ")]";
            }
        }
        objects.DBTransform = DBTransform;
        class Frame {
            constructor() {
                this.position = 0;
                this.duration = 0;
            }
            dispose() {
            }
        }
        objects.Frame = Frame;
        class TransformFrame extends Frame {
            constructor() {
                super();
                this.tweenEasing = 0;
                this.tweenRotate = 0;
                this.displayIndex = 0;
                this.zOrder = NaN;
                this.visible = true;
                this.global = new DBTransform();
                this.transform = new DBTransform();
                this.pivot = new geom.Point();
            }
            dispose() {
                super.dispose();
                this.global = null;
                this.transform = null;
                //SkeletonData pivots
                this.pivot = null;
                this.color = null;
            }
        }
        objects.TransformFrame = TransformFrame;
        class Timeline {
            constructor() {
                this._frameList = [];
                this.duration = 0;
                this.scale = 1;
            }
            getFrameList() {
                return this._frameList;
            }
            dispose() {
                var i = this._frameList.length;
                while (i--) {
                    this._frameList[i].dispose();
                }
                this._frameList.length = 0;
                this._frameList = null;
            }
            addFrame(frame) {
                if (!frame) {
                    throw new Error();
                }
                if (this._frameList.indexOf(frame) < 0) {
                    this._frameList[this._frameList.length] = frame;
                }
                else {
                    throw new Error();
                }
            }
        }
        objects.Timeline = Timeline;
        class TransformTimeline extends Timeline {
            constructor() {
                super();
                this.originTransform = new DBTransform();
                this.originPivot = new geom.Point();
                this.offset = 0;
                this.transformed = false;
            }
            dispose() {
                if (this == TransformTimeline.HIDE_TIMELINE) {
                    return;
                }
                super.dispose();
                this.originTransform = null;
                this.originPivot = null;
            }
        }
        TransformTimeline.HIDE_TIMELINE = new TransformTimeline();
        objects.TransformTimeline = TransformTimeline;
        class AnimationData extends Timeline {
            constructor() {
                super();
                this.frameRate = 0;
                this.loop = 0;
                this.tweenEasing = NaN;
                this.fadeInTime = 0;
                this._timelines = {};
            }
            getTimelines() {
                return this._timelines;
            }
            dispose() {
                super.dispose();
                for (var timelineName in this._timelines) {
                    this._timelines[timelineName].dispose();
                }
                this._timelines = null;
            }
            getTimeline(timelineName) {
                return this._timelines[timelineName];
            }
            addTimeline(timeline, timelineName) {
                if (!timeline) {
                    throw new Error();
                }
                this._timelines[timelineName] = timeline;
            }
        }
        objects.AnimationData = AnimationData;
        class DisplayData {
            constructor() {
                this.transform = new DBTransform();
            }
            dispose() {
                this.transform = null;
                this.pivot = null;
            }
        }
        DisplayData.ARMATURE = "armature";
        DisplayData.IMAGE = "image";
        objects.DisplayData = DisplayData;
        class SlotData {
            constructor() {
                this._displayDataList = [];
                this.zOrder = 0;
                this.blendMode = "normal";
            }
            getDisplayDataList() {
                return this._displayDataList;
            }
            dispose() {
                var i = this._displayDataList.length;
                while (i--) {
                    this._displayDataList[i].dispose();
                }
                this._displayDataList.length = 0;
                this._displayDataList = null;
            }
            addDisplayData(displayData) {
                if (!displayData) {
                    throw new Error();
                }
                if (this._displayDataList.indexOf(displayData) < 0) {
                    this._displayDataList[this._displayDataList.length] = displayData;
                }
                else {
                    throw new Error();
                }
            }
            getDisplayData(displayName) {
                var i = this._displayDataList.length;
                while (i--) {
                    if (this._displayDataList[i].name == displayName) {
                        return this._displayDataList[i];
                    }
                }
                return null;
            }
        }
        objects.SlotData = SlotData;
        class BoneData {
            constructor() {
                this.length = 0;
                this.global = new DBTransform();
                this.transform = new DBTransform();
                this.scaleMode = 1;
                this.fixedRotation = false;
            }
            dispose() {
                this.global = null;
                this.transform = null;
            }
        }
        objects.BoneData = BoneData;
        class SkinData {
            constructor() {
                this._slotDataList = [];
            }
            getSlotDataList() {
                return this._slotDataList;
            }
            dispose() {
                var i = this._slotDataList.length;
                while (i--) {
                    this._slotDataList[i].dispose();
                }
                this._slotDataList.length = 0;
                this._slotDataList = null;
            }
            getSlotData(slotName) {
                var i = this._slotDataList.length;
                while (i--) {
                    if (this._slotDataList[i].name == slotName) {
                        return this._slotDataList[i];
                    }
                }
                return null;
            }
            addSlotData(slotData) {
                if (!slotData) {
                    throw new Error();
                }
                if (this._slotDataList.indexOf(slotData) < 0) {
                    this._slotDataList[this._slotDataList.length] = slotData;
                }
                else {
                    throw new Error();
                }
            }
        }
        objects.SkinData = SkinData;
        class ArmatureData {
            constructor() {
                this._boneDataList = [];
                this._skinDataList = [];
                this._animationDataList = [];
            }
            getBoneDataList() {
                return this._boneDataList;
            }
            getSkinDataList() {
                return this._skinDataList;
            }
            getAnimationDataList() {
                return this._animationDataList;
            }
            dispose() {
                var i = this._boneDataList.length;
                while (i--) {
                    this._boneDataList[i].dispose();
                }
                i = this._skinDataList.length;
                while (i--) {
                    this._skinDataList[i].dispose();
                }
                i = this._animationDataList.length;
                while (i--) {
                    this._animationDataList[i].dispose();
                }
                this._boneDataList.length = 0;
                this._skinDataList.length = 0;
                this._animationDataList.length = 0;
                this._boneDataList = null;
                this._skinDataList = null;
                this._animationDataList = null;
            }
            getBoneData(boneName) {
                var i = this._boneDataList.length;
                while (i--) {
                    if (this._boneDataList[i].name == boneName) {
                        return this._boneDataList[i];
                    }
                }
                return null;
            }
            getSkinData(skinName) {
                if (!skinName) {
                    return this._skinDataList[0];
                }
                var i = this._skinDataList.length;
                while (i--) {
                    if (this._skinDataList[i].name == skinName) {
                        return this._skinDataList[i];
                    }
                }
                return null;
            }
            getAnimationData(animationName) {
                var i = this._animationDataList.length;
                while (i--) {
                    if (this._animationDataList[i].name == animationName) {
                        return this._animationDataList[i];
                    }
                }
                return null;
            }
            addBoneData(boneData) {
                if (!boneData) {
                    throw new Error();
                }
                if (this._boneDataList.indexOf(boneData) < 0) {
                    this._boneDataList[this._boneDataList.length] = boneData;
                }
                else {
                    throw new Error();
                }
            }
            addSkinData(skinData) {
                if (!skinData) {
                    throw new Error();
                }
                if (this._skinDataList.indexOf(skinData) < 0) {
                    this._skinDataList[this._skinDataList.length] = skinData;
                }
                else {
                    throw new Error();
                }
            }
            addAnimationData(animationData) {
                if (!animationData) {
                    throw new Error();
                }
                if (this._animationDataList.indexOf(animationData) < 0) {
                    this._animationDataList[this._animationDataList.length] = animationData;
                }
            }
            sortBoneDataList() {
                var i = this._boneDataList.length;
                if (i == 0) {
                    return;
                }
                var helpArray = [];
                while (i--) {
                    var boneData = this._boneDataList[i];
                    var level = 0;
                    var parentData = boneData;
                    while (parentData && parentData.parent) {
                        level++;
                        parentData = this.getBoneData(parentData.parent);
                    }
                    helpArray[i] = { level: level, boneData: boneData };
                }
                helpArray.sort(this.sortBoneData);
                i = helpArray.length;
                while (i--) {
                    this._boneDataList[i] = helpArray[i].boneData;
                }
            }
            sortBoneData(object1, object2) {
                return object1.level > object2.level ? 1 : -1;
            }
        }
        objects.ArmatureData = ArmatureData;
        class SkeletonData {
            constructor() {
                this._armatureDataList = [];
                this._subTexturePivots = {};
            }
            getArmatureNames() {
                var nameList = [];
                for (var armatureDataIndex in this._armatureDataList) {
                    nameList[nameList.length] = this._armatureDataList[armatureDataIndex].name;
                }
                return nameList;
            }
            getArmatureDataList() {
                return this._armatureDataList;
            }
            dispose() {
                for (var armatureDataIndex in this._armatureDataList) {
                    this._armatureDataList[armatureDataIndex].dispose();
                }
                this._armatureDataList.length = 0;
                this._armatureDataList = null;
                this._subTexturePivots = null;
            }
            getArmatureData(armatureName) {
                var i = this._armatureDataList.length;
                while (i--) {
                    if (this._armatureDataList[i].name == armatureName) {
                        return this._armatureDataList[i];
                    }
                }
                return null;
            }
            addArmatureData(armatureData) {
                if (!armatureData) {
                    throw new Error();
                }
                if (this._armatureDataList.indexOf(armatureData) < 0) {
                    this._armatureDataList[this._armatureDataList.length] = armatureData;
                }
                else {
                    throw new Error();
                }
            }
            removeArmatureData(armatureData) {
                var index = this._armatureDataList.indexOf(armatureData);
                if (index >= 0) {
                    this._armatureDataList.splice(index, 1);
                }
            }
            removeArmatureDataByName(armatureName) {
                var i = this._armatureDataList.length;
                while (i--) {
                    if (this._armatureDataList[i].name == armatureName) {
                        this._armatureDataList.splice(i, 1);
                    }
                }
            }
            getSubTexturePivot(subTextureName) {
                return this._subTexturePivots[subTextureName];
            }
            addSubTexturePivot(x, y, subTextureName) {
                var point = this._subTexturePivots[subTextureName];
                if (point) {
                    point.x = x;
                    point.y = y;
                }
                else {
                    this._subTexturePivots[subTextureName] = point = new geom.Point(x, y);
                }
                return point;
            }
            removeSubTexturePivot(subTextureName) {
                if (subTextureName) {
                    delete this._subTexturePivots[subTextureName];
                }
                else {
                    for (subTextureName in this._subTexturePivots) {
                        delete this._subTexturePivots[subTextureName];
                    }
                }
            }
        }
        objects.SkeletonData = SkeletonData;
        class DataParser {
            static parseTextureAtlasData(rawData, scale = 1) {
                if (!rawData) {
                    throw new Error();
                }
                var textureAtlasData = {};
                textureAtlasData.__name = rawData[utils.ConstValues.A_NAME];
                var subTextureList = rawData[utils.ConstValues.SUB_TEXTURE];
                for (var index in subTextureList) {
                    var subTextureObject = subTextureList[index];
                    var subTextureName = subTextureObject[utils.ConstValues.A_NAME];
                    var subTextureData = new geom.Rectangle(Number(subTextureObject[utils.ConstValues.A_X]) / scale, Number(subTextureObject[utils.ConstValues.A_Y]) / scale, Number(subTextureObject[utils.ConstValues.A_WIDTH]) / scale, Number(subTextureObject[utils.ConstValues.A_HEIGHT]) / scale);
                    textureAtlasData[subTextureName] = subTextureData;
                }
                return textureAtlasData;
            }
            static parseSkeletonData(rawData) {
                if (!rawData) {
                    throw new Error();
                }
                /*var version:string = rawData[utils.ConstValues.A_VERSION];
                 switch (version)
                 {
                 case dragonBones:
                 break;
                 default:
                 throw new Error("Nonsupport version!");
                 }*/
                var frameRate = Number(rawData[utils.ConstValues.A_FRAME_RATE]);
                var data = new SkeletonData();
                data.name = rawData[utils.ConstValues.A_NAME];
                var armatureObjectList = rawData[utils.ConstValues.ARMATURE];
                for (var index in armatureObjectList) {
                    var armatureObject = armatureObjectList[index];
                    data.addArmatureData(DataParser.parseArmatureData(armatureObject, data, frameRate));
                }
                return data;
            }
            static parseArmatureData(armatureObject, data, frameRate) {
                var armatureData = new ArmatureData();
                armatureData.name = armatureObject[utils.ConstValues.A_NAME];
                var boneObjectList = armatureObject[utils.ConstValues.BONE];
                for (var index in boneObjectList) {
                    var boneObject = boneObjectList[index];
                    armatureData.addBoneData(DataParser.parseBoneData(boneObject));
                }
                var skinObjectList = armatureObject[utils.ConstValues.SKIN];
                for (var index in skinObjectList) {
                    var skinObject = skinObjectList[index];
                    armatureData.addSkinData(DataParser.parseSkinData(skinObject, data));
                }
                utils.DBDataUtil.transformArmatureData(armatureData);
                armatureData.sortBoneDataList();
                var animationObjectList = armatureObject[utils.ConstValues.ANIMATION];
                for (var index in animationObjectList) {
                    var animationObject = animationObjectList[index];
                    armatureData.addAnimationData(DataParser.parseAnimationData(animationObject, armatureData, frameRate));
                }
                return armatureData;
            }
            static parseBoneData(boneObject) {
                var boneData = new BoneData();
                boneData.name = boneObject[utils.ConstValues.A_NAME];
                boneData.parent = boneObject[utils.ConstValues.A_PARENT];
                boneData.length = Number(boneObject[utils.ConstValues.A_LENGTH]) || 0;
                var scaleMode = Number(boneObject[utils.ConstValues.A_SCALE_MODE]);
                if (!isNaN(scaleMode) && scaleMode) {
                    boneData.scaleMode = scaleMode;
                }
                var inheritRotation = boneObject[utils.ConstValues.A_FIXED_ROTATION];
                if (inheritRotation) {
                    boneData.fixedRotation = inheritRotation;
                }
                DataParser.parseTransform(boneObject[utils.ConstValues.TRANSFORM], boneData.global);
                boneData.transform.copy(boneData.global);
                return boneData;
            }
            static parseSkinData(skinObject, data) {
                var skinData = new SkinData();
                skinData.name = skinObject[utils.ConstValues.A_NAME];
                var slotObjectList = skinObject[utils.ConstValues.SLOT];
                for (var index in slotObjectList) {
                    var slotObject = slotObjectList[index];
                    skinData.addSlotData(DataParser.parseSlotData(slotObject, data));
                }
                return skinData;
            }
            static parseSlotData(slotObject, data) {
                var slotData = new SlotData();
                slotData.name = slotObject[utils.ConstValues.A_NAME];
                slotData.parent = slotObject[utils.ConstValues.A_PARENT];
                slotData.zOrder = Number(slotObject[utils.ConstValues.A_Z_ORDER]);
                slotData.blendMode = slotObject[utils.ConstValues.A_BLENDMODE];
                if (!slotData.blendMode) {
                    slotData.blendMode = "normal";
                }
                var displayObjectList = slotObject[utils.ConstValues.DISPLAY];
                for (var index in displayObjectList) {
                    var displayObject = displayObjectList[index];
                    slotData.addDisplayData(DataParser.parseDisplayData(displayObject, data));
                }
                return slotData;
            }
            static parseDisplayData(displayObject, data) {
                var displayData = new DisplayData();
                displayData.name = displayObject[utils.ConstValues.A_NAME];
                displayData.type = displayObject[utils.ConstValues.A_TYPE];
                displayData.pivot = data.addSubTexturePivot(0, 0, displayData.name);
                DataParser.parseTransform(displayObject[utils.ConstValues.TRANSFORM], displayData.transform, displayData.pivot);
                return displayData;
            }
            static parseAnimationData(animationObject, armatureData, frameRate) {
                var animationData = new AnimationData();
                animationData.name = animationObject[utils.ConstValues.A_NAME];
                animationData.frameRate = frameRate;
                animationData.loop = Number(animationObject[utils.ConstValues.A_LOOP]) || 0;
                animationData.fadeInTime = Number(animationObject[utils.ConstValues.A_FADE_IN_TIME]);
                animationData.duration = Number(animationObject[utils.ConstValues.A_DURATION]) / frameRate;
                animationData.scale = Number(animationObject[utils.ConstValues.A_SCALE]);
                if (animationObject.hasOwnProperty(utils.ConstValues.A_TWEEN_EASING)) {
                    var tweenEase = animationObject[utils.ConstValues.A_TWEEN_EASING];
                    if (tweenEase == undefined ||
                        tweenEase == null) {
                        animationData.tweenEasing = NaN;
                    }
                    else {
                        animationData.tweenEasing = Number(tweenEase);
                    }
                }
                else {
                    animationData.tweenEasing = NaN;
                }
                DataParser.parseTimeline(animationObject, animationData, DataParser.parseMainFrame, frameRate);
                var timeline;
                var timelineName;
                var timelineObjectList = animationObject[utils.ConstValues.TIMELINE];
                for (var index in timelineObjectList) {
                    var timelineObject = timelineObjectList[index];
                    timeline = DataParser.parseTransformTimeline(timelineObject, animationData.duration, frameRate);
                    timelineName = timelineObject[utils.ConstValues.A_NAME];
                    animationData.addTimeline(timeline, timelineName);
                }
                utils.DBDataUtil.addHideTimeline(animationData, armatureData);
                utils.DBDataUtil.transformAnimationData(animationData, armatureData);
                return animationData;
            }
            static parseTimeline(timelineObject, timeline, frameParser, frameRate) {
                var position = 0;
                var frame;
                var frameObjectList = timelineObject[utils.ConstValues.FRAME];
                for (var index in frameObjectList) {
                    var frameObject = frameObjectList[index];
                    frame = frameParser(frameObject, frameRate);
                    frame.position = position;
                    timeline.addFrame(frame);
                    position += frame.duration;
                }
                if (frame) {
                    frame.duration = timeline.duration - frame.position;
                }
            }
            static parseTransformTimeline(timelineObject, duration, frameRate) {
                var timeline = new TransformTimeline();
                timeline.duration = duration;
                DataParser.parseTimeline(timelineObject, timeline, DataParser.parseTransformFrame, frameRate);
                timeline.scale = Number(timelineObject[utils.ConstValues.A_SCALE]);
                timeline.offset = Number(timelineObject[utils.ConstValues.A_OFFSET]);
                return timeline;
            }
            static parseFrame(frameObject, frame, frameRate) {
                frame.duration = Number(frameObject[utils.ConstValues.A_DURATION]) / frameRate;
                frame.action = frameObject[utils.ConstValues.A_ACTION];
                frame.event = frameObject[utils.ConstValues.A_EVENT];
                frame.sound = frameObject[utils.ConstValues.A_SOUND];
            }
            static parseMainFrame(frameObject, frameRate) {
                var frame = new Frame();
                DataParser.parseFrame(frameObject, frame, frameRate);
                return frame;
            }
            static parseTransformFrame(frameObject, frameRate) {
                var frame = new TransformFrame();
                DataParser.parseFrame(frameObject, frame, frameRate);
                frame.visible = Number(frameObject[utils.ConstValues.A_HIDE]) != 1;
                if (frameObject.hasOwnProperty(utils.ConstValues.A_TWEEN_EASING)) {
                    var tweenEase = frameObject[utils.ConstValues.A_TWEEN_EASING];
                    if (tweenEase == undefined ||
                        tweenEase == null) {
                        frame.tweenEasing = NaN;
                    }
                    else {
                        frame.tweenEasing = Number(tweenEase);
                    }
                }
                else {
                    frame.tweenEasing = 0;
                }
                frame.tweenRotate = Number(frameObject[utils.ConstValues.A_TWEEN_ROTATE]) || 0;
                frame.displayIndex = Number(frameObject[utils.ConstValues.A_DISPLAY_INDEX]) || 0;
                //
                frame.zOrder = Number(frameObject[utils.ConstValues.A_Z_ORDER]) || 0;
                DataParser.parseTransform(frameObject[utils.ConstValues.TRANSFORM], frame.global, frame.pivot);
                frame.transform.copy(frame.global);
                var colorTransformObject = frameObject[utils.ConstValues.COLOR_TRANSFORM];
                if (colorTransformObject) {
                    frame.color = new geom.ColorTransform();
                    frame.color.alphaOffset = Number(colorTransformObject[utils.ConstValues.A_ALPHA_OFFSET]);
                    frame.color.redOffset = Number(colorTransformObject[utils.ConstValues.A_RED_OFFSET]);
                    frame.color.greenOffset = Number(colorTransformObject[utils.ConstValues.A_GREEN_OFFSET]);
                    frame.color.blueOffset = Number(colorTransformObject[utils.ConstValues.A_BLUE_OFFSET]);
                    frame.color.alphaMultiplier = Number(colorTransformObject[utils.ConstValues.A_ALPHA_MULTIPLIER]) * 0.01;
                    frame.color.redMultiplier = Number(colorTransformObject[utils.ConstValues.A_RED_MULTIPLIER]) * 0.01;
                    frame.color.greenMultiplier = Number(colorTransformObject[utils.ConstValues.A_GREEN_MULTIPLIER]) * 0.01;
                    frame.color.blueMultiplier = Number(colorTransformObject[utils.ConstValues.A_BLUE_MULTIPLIER]) * 0.01;
                }
                return frame;
            }
            static parseTransform(transformObject, transform, pivot = null) {
                if (transformObject) {
                    if (transform) {
                        transform.x = Number(transformObject[utils.ConstValues.A_X]);
                        transform.y = Number(transformObject[utils.ConstValues.A_Y]);
                        transform.skewX = Number(transformObject[utils.ConstValues.A_SKEW_X]) * utils.ConstValues.ANGLE_TO_RADIAN;
                        transform.skewY = Number(transformObject[utils.ConstValues.A_SKEW_Y]) * utils.ConstValues.ANGLE_TO_RADIAN;
                        transform.scaleX = Number(transformObject[utils.ConstValues.A_SCALE_X]);
                        transform.scaleY = Number(transformObject[utils.ConstValues.A_SCALE_Y]);
                    }
                    if (pivot) {
                        pivot.x = Number(transformObject[utils.ConstValues.A_PIVOT_X]);
                        pivot.y = Number(transformObject[utils.ConstValues.A_PIVOT_Y]);
                    }
                }
            }
        }
        objects.DataParser = DataParser;
    })(objects = dragonBones.objects || (dragonBones.objects = {}));
    let factorys;
    (function (factorys) {
        class BaseFactory extends events.EventDispatcher {
            constructor() {
                super();
                this._dataDic = {};
                this._textureAtlasDic = {};
                this._textureAtlasLoadingDic = {};
            }
            getSkeletonData(name) {
                return this._dataDic[name];
            }
            addSkeletonData(data, name = null) {
                if (!data) {
                    throw new Error();
                }
                name = name || data.name;
                if (!name) {
                    throw new Error("Unnamed data!");
                }
                if (this._dataDic[name]) {
                }
                this._dataDic[name] = data;
            }
            removeSkeletonData(name) {
                delete this._dataDic[name];
            }
            getTextureAtlas(name) {
                return this._textureAtlasDic[name];
            }
            addTextureAtlas(textureAtlas, name = null) {
                if (!textureAtlas) {
                    throw new Error();
                }
                name = name || textureAtlas.name;
                if (!name) {
                    throw new Error("Unnamed data!");
                }
                if (this._textureAtlasDic[name]) {
                }
                this._textureAtlasDic[name] = textureAtlas;
            }
            removeTextureAtlas(name) {
                delete this._textureAtlasDic[name];
            }
            dispose(disposeData = true) {
                if (disposeData) {
                    for (var i in this._dataDic) {
                        this._dataDic[i].dispose();
                    }
                    for (var i in this._textureAtlasDic) {
                        this._textureAtlasDic[i].dispose();
                    }
                }
                this._dataDic = null;
                this._textureAtlasDic = null;
                this._textureAtlasLoadingDic = null;
                this._currentDataName = null;
                this._currentTextureAtlasName = null;
            }
            buildArmature(armatureName, animationName, skeletonName, textureAtlasName, skinName) {
                if (skeletonName) {
                    var data = this._dataDic[skeletonName];
                    if (data) {
                        var armatureData = data.getArmatureData(armatureName);
                    }
                }
                else {
                    for (skeletonName in this._dataDic) {
                        data = this._dataDic[skeletonName];
                        armatureData = data.getArmatureData(armatureName);
                        if (armatureData) {
                            break;
                        }
                    }
                }
                if (!armatureData) {
                    return null;
                }
                this._currentDataName = skeletonName;
                this._currentTextureAtlasName = textureAtlasName || skeletonName;
                var armature = this._generateArmature();
                armature.name = armatureName;
                var bone;
                var boneData;
                var boneDataList = armatureData.getBoneDataList();
                for (var index in boneDataList) {
                    boneData = boneDataList[index];
                    bone = new Bone();
                    bone.name = boneData.name;
                    bone.fixedRotation = boneData.fixedRotation;
                    bone.scaleMode = boneData.scaleMode;
                    bone.origin.copy(boneData.transform);
                    if (armatureData.getBoneData(boneData.parent)) {
                        armature.addChild(bone, boneData.parent);
                    }
                    else {
                        armature.addChild(bone, null);
                    }
                }
                if (animationName && animationName != armatureName) {
                    var animationArmatureData = data.getArmatureData(animationName);
                    if (!animationArmatureData) {
                        for (skeletonName in this._dataDic) {
                            data = this._dataDic[skeletonName];
                            animationArmatureData = data.getArmatureData(animationName);
                            if (animationArmatureData) {
                                break;
                            }
                        }
                    }
                }
                if (animationArmatureData) {
                    armature.animation.setAnimationDataList(animationArmatureData.getAnimationDataList());
                }
                else {
                    armature.animation.setAnimationDataList(armatureData.getAnimationDataList());
                }
                var skinData = armatureData.getSkinData(skinName);
                if (!skinData) {
                    throw new Error();
                }
                var slot;
                var displayData;
                var childArmature;
                var i;
                var helpArray = [];
                var slotData;
                var slotDataList = skinData.getSlotDataList();
                var displayDataList;
                for (var index in slotDataList) {
                    slotData = slotDataList[index];
                    bone = armature.getBone(slotData.parent);
                    if (!bone) {
                        continue;
                    }
                    displayDataList = slotData.getDisplayDataList();
                    slot = this._generateSlot();
                    slot.name = slotData.name;
                    slot.setBlendMode(slotData.blendMode);
                    slot._originZOrder = slotData.zOrder;
                    slot._dislayDataList = displayDataList;
                    helpArray.length = 0;
                    i = displayDataList.length;
                    while (i--) {
                        displayData = displayDataList[i];
                        switch (displayData.type) {
                            case objects.DisplayData.ARMATURE:
                                //TODO: make this async
                                childArmature = this.buildArmature(displayData.name, null, this._currentDataName, this._currentTextureAtlasName, null);
                                if (childArmature) {
                                    helpArray[i] = childArmature;
                                }
                                break;
                            case objects.DisplayData.IMAGE:
                            default:
                                helpArray[i] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], displayData.name, displayData.pivot.x, displayData.pivot.y);
                                break;
                        }
                    }
                    slot.setDisplayList(helpArray);
                    slot._changeDisplay(0);
                    bone.addChild(slot);
                }
                armature._slotsZOrderChanged = true;
                armature.advanceTime(0);
                return armature;
            }
            getTextureDisplay(textureName, textureAtlasName, pivotX, pivotY) {
                if (textureAtlasName) {
                    var textureAtlas = this._textureAtlasDic[textureAtlasName];
                }
                if (!textureAtlas && !textureAtlasName) {
                    for (textureAtlasName in this._textureAtlasDic) {
                        textureAtlas = this._textureAtlasDic[textureAtlasName];
                        if (textureAtlas.getRegion(textureName)) {
                            break;
                        }
                        textureAtlas = null;
                    }
                }
                if (textureAtlas) {
                    if (isNaN(pivotX) || isNaN(pivotY)) {
                        var data = this._dataDic[textureAtlasName];
                        if (data) {
                            var pivot = data.getSubTexturePivot(textureName);
                            if (pivot) {
                                pivotX = pivot.x;
                                pivotY = pivot.y;
                            }
                        }
                    }
                    return this._generateDisplay(textureAtlas, textureName, pivotX, pivotY);
                }
                return null;
            }
            /** @private */
            _generateArmature() {
                return null;
            }
            /** @private */
            _generateSlot() {
                return null;
            }
            /** @private */
            _generateDisplay(textureAtlas, fullName, pivotX, pivotY) {
                return null;
            }
        }
        factorys.BaseFactory = BaseFactory;
    })(factorys = dragonBones.factorys || (dragonBones.factorys = {}));
    let utils;
    (function (utils) {
        class ConstValues {
        }
        ConstValues.ANGLE_TO_RADIAN = Math.PI / 180;
        ConstValues.DRAGON_BONES = "dragonBones";
        ConstValues.ARMATURE = "armature";
        ConstValues.SKIN = "skin";
        ConstValues.BONE = "bone";
        ConstValues.SLOT = "slot";
        ConstValues.DISPLAY = "display";
        ConstValues.ANIMATION = "animation";
        ConstValues.TIMELINE = "timeline";
        ConstValues.FRAME = "frame";
        ConstValues.TRANSFORM = "transform";
        ConstValues.COLOR_TRANSFORM = "colorTransform";
        ConstValues.TEXTURE_ATLAS = "TextureAtlas";
        ConstValues.SUB_TEXTURE = "SubTexture";
        ConstValues.A_VERSION = "version";
        ConstValues.A_IMAGE_PATH = "imagePath";
        ConstValues.A_FRAME_RATE = "frameRate";
        ConstValues.A_NAME = "name";
        ConstValues.A_PARENT = "parent";
        ConstValues.A_LENGTH = "length";
        ConstValues.A_TYPE = "type";
        ConstValues.A_FADE_IN_TIME = "fadeInTime";
        ConstValues.A_DURATION = "duration";
        ConstValues.A_SCALE = "scale";
        ConstValues.A_OFFSET = "offset";
        ConstValues.A_LOOP = "loop";
        ConstValues.A_EVENT = "event";
        ConstValues.A_SOUND = "sound";
        ConstValues.A_ACTION = "action";
        ConstValues.A_HIDE = "hide";
        ConstValues.A_TWEEN_EASING = "tweenEasing";
        ConstValues.A_TWEEN_ROTATE = "tweenRotate";
        ConstValues.A_DISPLAY_INDEX = "displayIndex";
        ConstValues.A_Z_ORDER = "z";
        ConstValues.A_BLENDMODE = "blendMode";
        ConstValues.A_WIDTH = "width";
        ConstValues.A_HEIGHT = "height";
        ConstValues.A_SCALE_MODE = "scaleMode";
        ConstValues.A_FIXED_ROTATION = "fixedRotation";
        ConstValues.A_X = "x";
        ConstValues.A_Y = "y";
        ConstValues.A_SKEW_X = "skX";
        ConstValues.A_SKEW_Y = "skY";
        ConstValues.A_SCALE_X = "scX";
        ConstValues.A_SCALE_Y = "scY";
        ConstValues.A_PIVOT_X = "pX";
        ConstValues.A_PIVOT_Y = "pY";
        ConstValues.A_ALPHA_OFFSET = "aO";
        ConstValues.A_RED_OFFSET = "rO";
        ConstValues.A_GREEN_OFFSET = "gO";
        ConstValues.A_BLUE_OFFSET = "bO";
        ConstValues.A_ALPHA_MULTIPLIER = "aM";
        ConstValues.A_RED_MULTIPLIER = "rM";
        ConstValues.A_GREEN_MULTIPLIER = "gM";
        ConstValues.A_BLUE_MULTIPLIER = "bM";
        utils.ConstValues = ConstValues;
        class TransformUtil {
            static transformPointWithParent(transform, parent) {
                var helpMatrix = TransformUtil._helpMatrix;
                TransformUtil.transformToMatrix(parent, helpMatrix);
                helpMatrix.invert();
                var x = transform.x;
                var y = transform.y;
                transform.x = helpMatrix.a * x + helpMatrix.c * y + helpMatrix.tx;
                transform.y = helpMatrix.d * y + helpMatrix.b * x + helpMatrix.ty;
                transform.skewX = TransformUtil.formatRadian(transform.skewX - parent.skewX);
                transform.skewY = TransformUtil.formatRadian(transform.skewY - parent.skewY);
            }
            static transformToMatrix(transform, matrix) {
                matrix.a = transform.scaleX * Math.cos(transform.skewY);
                matrix.b = transform.scaleX * Math.sin(transform.skewY);
                matrix.c = -transform.scaleY * Math.sin(transform.skewX);
                matrix.d = transform.scaleY * Math.cos(transform.skewX);
                matrix.tx = transform.x;
                matrix.ty = transform.y;
            }
            static formatRadian(radian) {
                radian %= TransformUtil.DOUBLE_PI;
                if (radian > Math.PI) {
                    radian -= TransformUtil.DOUBLE_PI;
                }
                if (radian < -Math.PI) {
                    radian += TransformUtil.DOUBLE_PI;
                }
                return radian;
            }
        }
        TransformUtil.DOUBLE_PI = Math.PI * 2;
        TransformUtil._helpMatrix = new geom.Matrix();
        utils.TransformUtil = TransformUtil;
        class DBDataUtil {
            static transformArmatureData(armatureData) {
                var boneDataList = armatureData.getBoneDataList();
                var i = boneDataList.length;
                var boneData;
                var parentBoneData;
                while (i--) {
                    boneData = boneDataList[i];
                    if (boneData.parent) {
                        parentBoneData = armatureData.getBoneData(boneData.parent);
                        if (parentBoneData) {
                            boneData.transform.copy(boneData.global);
                            TransformUtil.transformPointWithParent(boneData.transform, parentBoneData.global);
                        }
                    }
                }
            }
            static transformArmatureDataAnimations(armatureData) {
                var animationDataList = armatureData.getAnimationDataList();
                var i = animationDataList.length;
                while (i--) {
                    DBDataUtil.transformAnimationData(animationDataList[i], armatureData);
                }
            }
            static transformAnimationData(animationData, armatureData) {
                var skinData = armatureData.getSkinData(null);
                var boneDataList = armatureData.getBoneDataList();
                var slotDataList = skinData.getSlotDataList();
                var i = boneDataList.length;
                var boneData;
                var timeline;
                var slotData;
                var displayData;
                var parentTimeline;
                var frameList;
                var originTransform;
                var originPivot;
                var prevFrame;
                var frame;
                var frameListLength;
                while (i--) {
                    boneData = boneDataList[i];
                    timeline = animationData.getTimeline(boneData.name);
                    if (!timeline) {
                        continue;
                    }
                    slotData = null;
                    for (var slotIndex in slotDataList) {
                        slotData = slotDataList[slotIndex];
                        if (slotData.parent == boneData.name) {
                            break;
                        }
                    }
                    parentTimeline = boneData.parent ? animationData.getTimeline(boneData.parent) : null;
                    frameList = timeline.getFrameList();
                    originTransform = null;
                    originPivot = null;
                    prevFrame = null;
                    frameListLength = frameList.length;
                    for (var j = 0; j < frameListLength; j++) {
                        frame = frameList[j];
                        if (parentTimeline) {
                            //tweenValues to transform.
                            DBDataUtil._helpTransform1.copy(frame.global);
                            //get transform from parent timeline.
                            DBDataUtil.getTimelineTransform(parentTimeline, frame.position, DBDataUtil._helpTransform2);
                            TransformUtil.transformPointWithParent(DBDataUtil._helpTransform1, DBDataUtil._helpTransform2);
                            //transform to tweenValues.
                            frame.transform.copy(DBDataUtil._helpTransform1);
                        }
                        else {
                            frame.transform.copy(frame.global);
                        }
                        frame.transform.x -= boneData.transform.x;
                        frame.transform.y -= boneData.transform.y;
                        frame.transform.skewX -= boneData.transform.skewX;
                        frame.transform.skewY -= boneData.transform.skewY;
                        frame.transform.scaleX -= boneData.transform.scaleX;
                        frame.transform.scaleY -= boneData.transform.scaleY;
                        if (!timeline.transformed) {
                            if (slotData) {
                                frame.zOrder -= slotData.zOrder;
                            }
                        }
                        if (!originTransform) {
                            originTransform = timeline.originTransform;
                            originTransform.copy(frame.transform);
                            originTransform.skewX = TransformUtil.formatRadian(originTransform.skewX);
                            originTransform.skewY = TransformUtil.formatRadian(originTransform.skewY);
                            originPivot = timeline.originPivot;
                            originPivot.x = frame.pivot.x;
                            originPivot.y = frame.pivot.y;
                        }
                        frame.transform.x -= originTransform.x;
                        frame.transform.y -= originTransform.y;
                        frame.transform.skewX = TransformUtil.formatRadian(frame.transform.skewX - originTransform.skewX);
                        frame.transform.skewY = TransformUtil.formatRadian(frame.transform.skewY - originTransform.skewY);
                        frame.transform.scaleX -= originTransform.scaleX;
                        frame.transform.scaleY -= originTransform.scaleY;
                        if (!timeline.transformed) {
                            frame.pivot.x -= originPivot.x;
                            frame.pivot.y -= originPivot.y;
                        }
                        if (prevFrame) {
                            var dLX = frame.transform.skewX - prevFrame.transform.skewX;
                            if (prevFrame.tweenRotate) {
                                if (prevFrame.tweenRotate > 0) {
                                    if (dLX < 0) {
                                        frame.transform.skewX += Math.PI * 2;
                                        frame.transform.skewY += Math.PI * 2;
                                    }
                                    if (prevFrame.tweenRotate > 1) {
                                        frame.transform.skewX += Math.PI * 2 * (prevFrame.tweenRotate - 1);
                                        frame.transform.skewY += Math.PI * 2 * (prevFrame.tweenRotate - 1);
                                    }
                                }
                                else {
                                    if (dLX > 0) {
                                        frame.transform.skewX -= Math.PI * 2;
                                        frame.transform.skewY -= Math.PI * 2;
                                    }
                                    if (prevFrame.tweenRotate < 1) {
                                        frame.transform.skewX += Math.PI * 2 * (prevFrame.tweenRotate + 1);
                                        frame.transform.skewY += Math.PI * 2 * (prevFrame.tweenRotate + 1);
                                    }
                                }
                            }
                            else {
                                frame.transform.skewX = prevFrame.transform.skewX + TransformUtil.formatRadian(frame.transform.skewX - prevFrame.transform.skewX);
                                frame.transform.skewY = prevFrame.transform.skewY + TransformUtil.formatRadian(frame.transform.skewY - prevFrame.transform.skewY);
                            }
                        }
                        prevFrame = frame;
                    }
                    timeline.transformed = true;
                }
            }
            static getTimelineTransform(timeline, position, retult) {
                var frameList = timeline.getFrameList();
                var i = frameList.length;
                var currentFrame;
                var tweenEasing;
                var progress;
                var nextFrame;
                while (i--) {
                    currentFrame = frameList[i];
                    if (currentFrame.position <= position && currentFrame.position + currentFrame.duration > position) {
                        tweenEasing = currentFrame.tweenEasing;
                        if (i == frameList.length - 1 || isNaN(tweenEasing) || position == currentFrame.position) {
                            retult.copy(currentFrame.global);
                        }
                        else {
                            progress = (position - currentFrame.position) / currentFrame.duration;
                            if (tweenEasing) {
                                progress = animation.TimelineState.getEaseValue(progress, tweenEasing);
                            }
                            nextFrame = frameList[i + 1];
                            retult.x = currentFrame.global.x + (nextFrame.global.x - currentFrame.global.x) * progress;
                            retult.y = currentFrame.global.y + (nextFrame.global.y - currentFrame.global.y) * progress;
                            retult.skewX = TransformUtil.formatRadian(currentFrame.global.skewX + (nextFrame.global.skewX - currentFrame.global.skewX) * progress);
                            retult.skewY = TransformUtil.formatRadian(currentFrame.global.skewY + (nextFrame.global.skewY - currentFrame.global.skewY) * progress);
                            retult.scaleX = currentFrame.global.scaleX + (nextFrame.global.scaleX - currentFrame.global.scaleX) * progress;
                            retult.scaleY = currentFrame.global.scaleY + (nextFrame.global.scaleY - currentFrame.global.scaleY) * progress;
                        }
                        break;
                    }
                }
            }
            static addHideTimeline(animationData, armatureData) {
                var boneDataList = armatureData.getBoneDataList();
                var i = boneDataList.length;
                var boneData;
                var boneName;
                while (i--) {
                    boneData = boneDataList[i];
                    boneName = boneData.name;
                    if (!animationData.getTimeline(boneName)) {
                        animationData.addTimeline(objects.TransformTimeline.HIDE_TIMELINE, boneName);
                    }
                }
            }
        }
        DBDataUtil._helpTransform1 = new objects.DBTransform();
        DBDataUtil._helpTransform2 = new objects.DBTransform();
        utils.DBDataUtil = DBDataUtil;
    })(utils = dragonBones.utils || (dragonBones.utils = {}));
    /** @private */
    class DBObject {
        constructor() {
            this.global = new objects.DBTransform();
            this.origin = new objects.DBTransform();
            this.offset = new objects.DBTransform();
            this.tween = new objects.DBTransform();
            this.tween.scaleX = this.tween.scaleY = 0;
            this._globalTransformMatrix = new geom.Matrix();
            this._visible = true;
            this._isColorChanged = false;
            this._isDisplayOnStage = false;
            this._scaleType = 0;
            this.fixedRotation = false;
        }
        getVisible() {
            return this._visible;
        }
        setVisible(value) {
            this._visible = value;
        }
        /** @private */
        _setParent(value) {
            this.parent = value;
        }
        /** @private */
        _setArmature(value) {
            if (this.armature) {
                this.armature._removeDBObject(this);
            }
            this.armature = value;
            if (this.armature) {
                this.armature._addDBObject(this);
            }
        }
        dispose() {
            this.parent = null;
            this.armature = null;
            this.global = null;
            this.origin = null;
            this.offset = null;
            this.tween = null;
            this._globalTransformMatrix = null;
        }
        /** @private */
        _update() {
            this.global.scaleX = (this.origin.scaleX + this.tween.scaleX) * this.offset.scaleX;
            this.global.scaleY = (this.origin.scaleY + this.tween.scaleY) * this.offset.scaleY;
            if (this.parent) {
                var x = this.origin.x + this.offset.x + this.tween.x;
                var y = this.origin.y + this.offset.y + this.tween.y;
                var parentMatrix = this.parent._globalTransformMatrix;
                this._globalTransformMatrix.tx = this.global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
                this._globalTransformMatrix.ty = this.global.y = parentMatrix.d * y + parentMatrix.b * x + parentMatrix.ty;
                if (this.fixedRotation) {
                    this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX;
                    this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
                }
                else {
                    this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX;
                    this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY;
                }
                if (this.parent.scaleMode >= this._scaleType) {
                    this.global.scaleX *= this.parent.global.scaleX;
                    this.global.scaleY *= this.parent.global.scaleY;
                }
            }
            else {
                this._globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this.tween.x;
                this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y;
                this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX;
                this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
            }
            this._globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
            this._globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
            this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
            this._globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX);
        }
    }
    dragonBones.DBObject = DBObject;
    class Slot extends DBObject {
        constructor(displayBrideg) {
            super();
            this._displayBridge = displayBrideg;
            this._displayList = [];
            this._displayIndex = -1;
            this._scaleType = 1;
            this._originZOrder = 0;
            this._tweenZorder = 0;
            this._offsetZOrder = 0;
            this._isDisplayOnStage = false;
            this._isHideDisplay = false;
            this._blendMode = "normal";
            this._displayBridge.updateBlendMode(this._blendMode);
        }
        getZOrder() {
            return this._originZOrder + this._tweenZorder + this._offsetZOrder;
        }
        setZOrder(value) {
            if (this.getZOrder() != value) {
                this._offsetZOrder = value - this._originZOrder - this._tweenZorder;
                if (this.armature) {
                    this.armature._slotsZOrderChanged = true;
                }
            }
        }
        getDisplay() {
            var display = this._displayList[this._displayIndex];
            if (display instanceof Armature) {
                return display.getDisplay();
            }
            return display;
        }
        setDisplay(value) {
            this._displayList[this._displayIndex] = value;
            this._setDisplay(value);
        }
        getBlendMode() {
            return this._blendMode;
        }
        setBlendMode(value) {
            if (this._blendMode != value) {
                this._blendMode = value;
                if (this._displayBridge.getDisplay()) {
                    this._displayBridge.updateBlendMode(this._blendMode);
                }
            }
        }
        getChildArmature() {
            var display = this._displayList[this._displayIndex];
            if (display instanceof Armature) {
                return display;
            }
            return null;
        }
        setChildArmature(value) {
            this._displayList[this._displayIndex] = value;
            if (value) {
                this._setDisplay(value.getDisplay());
            }
        }
        getDisplayList() {
            return this._displayList;
        }
        setDisplayList(value) {
            if (!value) {
                throw new Error();
            }
            var i = this._displayList.length = value.length;
            while (i--) {
                this._displayList[i] = value[i];
            }
            if (this._displayIndex >= 0) {
                var displayIndexBackup = this._displayIndex;
                this._displayIndex = -1;
                this._changeDisplay(displayIndexBackup);
            }
        }
        _setDisplay(display) {
            if (this._displayBridge.getDisplay()) {
                this._displayBridge.setDisplay(display);
            }
            else {
                this._displayBridge.setDisplay(display);
                if (this.armature) {
                    this._displayBridge.addDisplay(this.armature.getDisplay(), -1);
                    this.armature._slotsZOrderChanged = true;
                }
            }
            this.updateChildArmatureAnimation();
            if (display) {
                this._displayBridge.updateBlendMode(this._blendMode);
            }
            if (!this._isHideDisplay && this._displayBridge.getDisplay()) {
                this._isDisplayOnStage = true;
            }
            else {
                this._isDisplayOnStage = false;
            }
        }
        /** @private */
        _changeDisplay(displayIndex) {
            if (displayIndex < 0) {
                if (!this._isHideDisplay) {
                    this._isHideDisplay = true;
                    this._displayBridge.removeDisplay();
                    this.updateChildArmatureAnimation();
                }
            }
            else {
                if (this._isHideDisplay) {
                    this._isHideDisplay = false;
                    var changeShowState = true;
                    if (this.armature) {
                        this._displayBridge.addDisplay(this.armature.getDisplay(), -1);
                        this.armature._slotsZOrderChanged = true;
                    }
                }
                var length = this._displayList.length;
                if (displayIndex >= length && length > 0) {
                    displayIndex = length - 1;
                }
                if (this._displayIndex != displayIndex) {
                    this._displayIndex = displayIndex;
                    var display = this._displayList[this._displayIndex];
                    if (display instanceof Armature) {
                        this._setDisplay(display.getDisplay());
                    }
                    else {
                        this._setDisplay(display);
                    }
                    if (this._dislayDataList && this._displayIndex <= this._dislayDataList.length) {
                        this.origin.copy(this._dislayDataList[this._displayIndex].transform);
                    }
                }
                else if (changeShowState) {
                    this.updateChildArmatureAnimation();
                }
            }
            if (!this._isHideDisplay && this._displayBridge.getDisplay()) {
                this._isDisplayOnStage = true;
            }
            else {
                this._isDisplayOnStage = false;
            }
        }
        setVisible(value) {
            if (value != this._visible) {
                this._visible = value;
                this._updateVisible(this._visible);
            }
        }
        /** @private */
        _setArmature(value) {
            super._setArmature(value);
            if (this.armature) {
                this.armature._slotsZOrderChanged = true;
                this._displayBridge.addDisplay(this.armature.getDisplay(), -1);
            }
            else {
                this._displayBridge.removeDisplay();
            }
        }
        dispose() {
            if (!this._displayBridge) {
                return;
            }
            super.dispose();
            this._displayBridge.dispose();
            this._displayList.length = 0;
            this._displayBridge = null;
            this._displayList = null;
            this._dislayDataList = null;
        }
        /** @private */
        _update() {
            super._update();
            if (this._isDisplayOnStage) {
                var pivotX = this.parent._tweenPivot.x;
                var pivotY = this.parent._tweenPivot.y;
                if (pivotX || pivotY) {
                    var parentMatrix = this.parent._globalTransformMatrix;
                    this._globalTransformMatrix.tx += parentMatrix.a * pivotX + parentMatrix.c * pivotY;
                    this._globalTransformMatrix.ty += parentMatrix.b * pivotX + parentMatrix.d * pivotY;
                }
                this._displayBridge.updateTransform(this._globalTransformMatrix, this.global);
            }
        }
        /** @private */
        _updateVisible(value) {
            this._displayBridge.setVisible(this.parent.getVisible() && this._visible && value);
        }
        updateChildArmatureAnimation() {
            var childArmature = this.getChildArmature();
            if (childArmature) {
                if (this._isHideDisplay) {
                    childArmature.animation.stop();
                    childArmature.animation._lastAnimationState = null;
                }
                else {
                    var lastAnimationName = this.armature ? this.armature.animation.getLastAnimationName() : null;
                    if (lastAnimationName && childArmature.animation.hasAnimation(lastAnimationName)) {
                        childArmature.animation.gotoAndPlay(lastAnimationName);
                    }
                    else {
                        childArmature.animation.play();
                    }
                }
            }
        }
    }
    dragonBones.Slot = Slot;
    class Bone extends DBObject {
        constructor() {
            super();
            this._children = [];
            this._scaleType = 2;
            this._tweenPivot = new geom.Point();
            this.scaleMode = 1;
        }
        setVisible(value) {
            if (this._visible != value) {
                this._visible = value;
                var i = this._children.length;
                while (i--) {
                    var child = this._children[i];
                    if (child instanceof Slot) {
                        child._updateVisible(this._visible);
                    }
                }
            }
        }
        /** @private */
        _setArmature(value) {
            super._setArmature(value);
            var i = this._children.length;
            while (i--) {
                this._children[i]._setArmature(this.armature);
            }
        }
        dispose() {
            if (!this._children) {
                return;
            }
            super.dispose();
            var i = this._children.length;
            while (i--) {
                this._children[i].dispose();
            }
            this._children.length = 0;
            this._children = null;
            this._tweenPivot = null;
            this.slot = null;
        }
        contains(child) {
            if (!child) {
                throw new Error();
            }
            if (child == this) {
                return false;
            }
            var ancestor = child;
            while (!(ancestor == this || ancestor == null)) {
                ancestor = ancestor.parent;
            }
            return ancestor == this;
        }
        addChild(child) {
            if (!child) {
                throw new Error();
            }
            if (child == this || (child instanceof Bone && child.contains(this))) {
                throw new Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
            }
            if (child.parent) {
                child.parent.removeChild(child);
            }
            this._children[this._children.length] = child;
            child._setParent(this);
            child._setArmature(this.armature);
            if (!this.slot && child instanceof Slot) {
                this.slot = child;
            }
        }
        removeChild(child) {
            if (!child) {
                throw new Error();
            }
            var index = this._children.indexOf(child);
            if (index >= 0) {
                this._children.splice(index, 1);
                child._setParent(null);
                child._setArmature(null);
                if (child == this.slot) {
                    this.slot = null;
                }
            }
            else {
                throw new Error();
            }
        }
        getSlots() {
            var slotList = [];
            var i = this._children.length;
            while (i--) {
                if (this._children[i] instanceof Slot) {
                    slotList.unshift(this._children[i]);
                }
            }
            return slotList;
        }
        /** @private */
        _arriveAtFrame(frame, timelineState, animationState, isCross) {
            if (frame) {
                var mixingType = animationState.getMixingTransform(this.name);
                if (animationState.displayControl && (mixingType == 2 || mixingType == -1)) {
                    if (!this.displayController ||
                        this.displayController == animationState.name) {
                        var tansformFrame = frame;
                        if (this.slot) {
                            var displayIndex = tansformFrame.displayIndex;
                            if (displayIndex >= 0) {
                                if (!isNaN(tansformFrame.zOrder) &&
                                    tansformFrame.zOrder != this.slot._tweenZorder) {
                                    this.slot._tweenZorder = tansformFrame.zOrder;
                                    this.armature._slotsZOrderChanged = true;
                                }
                            }
                            this.slot._changeDisplay(displayIndex);
                            this.slot._updateVisible(tansformFrame.visible);
                        }
                    }
                }
                if (frame.event && this.armature.hasEventListener(events.FrameEvent.BONE_FRAME_EVENT)) {
                    var frameEvent = new events.FrameEvent(events.FrameEvent.BONE_FRAME_EVENT);
                    frameEvent.bone = this;
                    frameEvent.animationState = animationState;
                    frameEvent.frameLabel = frame.event;
                    this.armature._eventList.push(frameEvent);
                }
                if (frame.sound && Bone._soundManager.hasEventListener(events.SoundEvent.SOUND)) {
                    var soundEvent = new events.SoundEvent(events.SoundEvent.SOUND);
                    soundEvent.armature = this.armature;
                    soundEvent.animationState = animationState;
                    soundEvent.sound = frame.sound;
                    Bone._soundManager.dispatchEvent(soundEvent);
                }
                if (frame.action) {
                    for (var index in this._children) {
                        if (this._children[index] instanceof Slot) {
                            var childArmature = this._children[index].getChildArmature();
                            if (childArmature) {
                                childArmature.animation.gotoAndPlay(frame.action);
                            }
                        }
                    }
                }
            }
            else {
                if (this.slot) {
                    this.slot._changeDisplay(-1);
                }
            }
        }
        /** @private */
        _updateColor(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier, isColorChanged) {
            if (isColorChanged || this._isColorChanged) {
                this.slot._displayBridge.updateColor(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier);
            }
            this._isColorChanged = isColorChanged;
        }
    }
    Bone._soundManager = events.SoundEventManager.getInstance();
    dragonBones.Bone = Bone;
    class Armature extends events.EventDispatcher {
        constructor(display) {
            super();
            this.animation = new animation.Animation(this);
            this._display = display;
            this._slotsZOrderChanged = false;
            this._slotList = [];
            this._boneList = [];
            this._eventList = [];
        }
        getDisplay() {
            return this._display;
        }
        dispose() {
            if (!this.animation) {
                return;
            }
            this.animation.dispose();
            var i = this._slotList.length;
            while (i--) {
                this._slotList[i].dispose();
            }
            i = this._boneList.length;
            while (i--) {
                this._boneList[i].dispose();
            }
            this._slotList.length = 0;
            this._boneList.length = 0;
            this._eventList.length = 0;
            this._slotList = null;
            this._boneList = null;
            this._eventList = null;
            this._display = null;
            this.animation = null;
        }
        advanceTime(passedTime) {
            this.animation.advanceTime(passedTime);
            passedTime *= this.animation.timeScale;
            var i = this._boneList.length;
            while (i--) {
                this._boneList[i]._update();
            }
            i = this._slotList.length;
            var slot;
            while (i--) {
                slot = this._slotList[i];
                slot._update();
                if (slot._isDisplayOnStage) {
                    var childArmature = slot.getChildArmature();
                    if (childArmature) {
                        childArmature.advanceTime(passedTime);
                    }
                }
            }
            if (this._slotsZOrderChanged) {
                this.updateSlotsZOrder();
                if (this.hasEventListener(events.ArmatureEvent.Z_ORDER_UPDATED)) {
                    this.dispatchEvent(new events.ArmatureEvent(events.ArmatureEvent.Z_ORDER_UPDATED));
                }
            }
            if (this._eventList.length) {
                var length = this._eventList.length;
                for (i = 0; i < length; i++) {
                    this.dispatchEvent(this._eventList[i]);
                }
                this._eventList.length = 0;
            }
        }
        getSlots(returnCopy = true) {
            return returnCopy ? this._slotList.concat() : this._slotList;
        }
        getBones(returnCopy = true) {
            return returnCopy ? this._boneList.concat() : this._boneList;
        }
        getSlot(slotName) {
            var i = this._slotList.length;
            while (i--) {
                if (this._slotList[i].name == slotName) {
                    return this._slotList[i];
                }
            }
            return null;
        }
        getSlotByDisplay(display) {
            if (display) {
                var i = this._slotList.length;
                while (i--) {
                    if (this._slotList[i].getDisplay() == display) {
                        return this._slotList[i];
                    }
                }
            }
            return null;
        }
        removeSlot(slot) {
            if (!slot) {
                throw new Error();
            }
            if (this._slotList.indexOf(slot) >= 0) {
                slot.parent.removeChild(slot);
            }
            else {
                throw new Error();
            }
        }
        removeSlotByName(slotName) {
            if (!slotName) {
                return;
            }
            var slot = this.getSlot(slotName);
            if (slot) {
                this.removeSlot(slot);
            }
        }
        getBone(boneName) {
            var i = this._boneList.length;
            while (i--) {
                if (this._boneList[i].name == boneName) {
                    return this._boneList[i];
                }
            }
            return null;
        }
        getBoneByDisplay(display) {
            var slot = this.getSlotByDisplay(display);
            return slot ? slot.parent : null;
        }
        removeBone(bone) {
            if (!bone) {
                throw new Error();
            }
            if (this._boneList.indexOf(bone) >= 0) {
                if (bone.parent) {
                    bone.parent.removeChild(bone);
                }
                else {
                    bone._setArmature(null);
                }
            }
            else {
                throw new Error();
            }
        }
        removeBoneByName(boneName) {
            if (!boneName) {
                return;
            }
            var bone = this.getBone(boneName);
            if (bone) {
                this.removeBone(bone);
            }
        }
        addChild(object, parentName) {
            if (!object) {
                throw new Error();
            }
            if (parentName) {
                var boneParent = this.getBone(parentName);
                if (boneParent) {
                    boneParent.addChild(object);
                }
                else {
                    throw new Error();
                }
            }
            else {
                if (object.parent) {
                    object.parent.removeChild(object);
                }
                object._setArmature(this);
            }
        }
        updateSlotsZOrder() {
            this._slotList.sort(this.sortSlot);
            var i = this._slotList.length;
            var slot;
            while (i--) {
                slot = this._slotList[i];
                if (slot._isDisplayOnStage) {
                    slot._displayBridge.addDisplay(this._display, -1);
                }
            }
            this._slotsZOrderChanged = false;
        }
        /** @private */
        _addDBObject(object) {
            if (object instanceof Slot) {
                var slot = object;
                if (this._slotList.indexOf(slot) < 0) {
                    this._slotList[this._slotList.length] = slot;
                }
            }
            else if (object instanceof Bone) {
                var bone = object;
                if (this._boneList.indexOf(bone) < 0) {
                    this._boneList[this._boneList.length] = bone;
                    this._sortBoneList();
                }
            }
        }
        /** @private */
        _removeDBObject(object) {
            if (object instanceof Slot) {
                var slot = object;
                var index = this._slotList.indexOf(slot);
                if (index >= 0) {
                    this._slotList.splice(index, 1);
                }
            }
            else if (object instanceof Bone) {
                var bone = object;
                index = this._boneList.indexOf(bone);
                if (index >= 0) {
                    this._boneList.splice(index, 1);
                }
            }
        }
        /** @private */
        _sortBoneList() {
            var i = this._boneList.length;
            if (i == 0) {
                return;
            }
            var helpArray = [];
            var level;
            var bone;
            var boneParent;
            while (i--) {
                level = 0;
                bone = this._boneList[i];
                boneParent = bone;
                while (boneParent) {
                    level++;
                    boneParent = boneParent.parent;
                }
                helpArray[i] = { level: level, bone: bone };
            }
            helpArray.sort(this.sortBone);
            i = helpArray.length;
            while (i--) {
                this._boneList[i] = helpArray[i].bone;
            }
        }
        /** @private */
        _arriveAtFrame(frame, timelineState, animationState, isCross) {
            if (frame.event && this.hasEventListener(events.FrameEvent.ANIMATION_FRAME_EVENT)) {
                var frameEvent = new events.FrameEvent(events.FrameEvent.ANIMATION_FRAME_EVENT);
                frameEvent.animationState = animationState;
                frameEvent.frameLabel = frame.event;
                this._eventList.push(frameEvent);
            }
            if (frame.sound && Armature._soundManager.hasEventListener(events.SoundEvent.SOUND)) {
                var soundEvent = new events.SoundEvent(events.SoundEvent.SOUND);
                soundEvent.armature = this;
                soundEvent.animationState = animationState;
                soundEvent.sound = frame.sound;
                Armature._soundManager.dispatchEvent(soundEvent);
            }
            if (frame.action) {
                if (animationState.isPlaying) {
                    this.animation.gotoAndPlay(frame.action);
                }
            }
        }
        sortSlot(slot1, slot2) {
            return slot1.getZOrder() < slot2.getZOrder() ? 1 : -1;
        }
        sortBone(object1, object2) {
            return object1.level < object2.level ? 1 : -1;
        }
    }
    Armature._soundManager = events.SoundEventManager.getInstance();
    dragonBones.Armature = Armature;
})(dragonBones || (dragonBones = {}));
