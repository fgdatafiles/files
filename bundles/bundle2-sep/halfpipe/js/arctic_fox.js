var debug = false;

var preloader;

// audio
var loops;
var mp3ogg;
var sounds = {};
var music;
var musicVolume = .5;
var cheerSounds;
var cheerSoundNum = 0;

// groups
var splash;
var g; //game

// sprites
var halfpipe;
var fox;

// halfpipe
var centerX = 309;
var centerY = 194;
var radius = 283;

//  motion
// 1.19 = .85 * 1.4
var angle = 0;
//var gravity = (.9 * 24 / 60) * 1.4; //(original gravity * original frame rate / new frame rate) * scale increase AWKWARD HANG
var gravity = .9 * 1.19; //1.071
//console.log('gravity', gravity);//0.504
//var maxVelocity = 45 * 1.4;
//var maxVelocity = (45 * 24 / 60) * 1.4;; //(original maxVelocity * original frame rate / new frame rate) * scale increase

var maxVelocity = 45 * 1.19;
//console.log('maxVelocity', maxVelocity);//53.55
var vy;
var vyBoost = 1.015;
console.log('vyBoost', vyBoost);
var vx;
var vyLast;
var xLast;
var yLast;
var xDirection;
var xDirectionLast;
var xDirectionChange;
var yDirection;
var yDirectionLast;
var flippedAtCenter;
var reverse; // 1 or -1
var pipeMinY = 75 + 149; //was 75
// scenery parralax
var halfpipeY = pipeMinY; //for halfpipe group 105
var skyY = halfpipeY - 766;
var mountainsY = skyY + 803;
var buildingsY = mountainsY + 70;
var groundY = buildingsY + 207;
var inPipe;
var pipeSide = "left";
var wipeOut;
var wipedOut;
var sweeps;
var wipeSweeps;
var riding;
var wipeOutCheckFrames = [23, 42, 48, 50, 72, 78, 80, 102, 107, 110, 132, 138, 145, 151, 157, 168, 175, 181, 187, 205, 211, 215, 219, 223, 234, 239, 244, 249, 254, 266, 270, 274, 278, 282, 285, 290, 296, 301, 306, 311, 316];
var spinFrames = [48, 72, 78, 102, 148, 178, 208, 212, 216, 220, 236, 246, 266, 270, 274, 278, 282, 298, 308];
var flipFrames = [105, 135];

// arrows
var arrowTablet;
var arrows;
var arrowSprites = [];
var arrowSpeed = (5 * 24 / 60) * 1.4; //(original speed * original frame rate / new frame rate) * scale increase
//console.log('arrowSpeed', arrowSpeed);
var arrowXs = [-95, -31, 31, 95];
var arrowAngles = [180, 270, 90, 0];
var arrowThreshold = 30; //how close arrow y needs to be to top arrow y to be correct on key press (was 25)
var arrowMissed;
var arrowNumInSeries;
var arrowsCorrect;
var stuntFrame;
var arrowsY;
var stuntArrows;
var stuntArrowsLeft;
var stuntArrowsRight;
var launchArrows;
var errors;
var stuntPerformed;
var stuntHeight = -150; //height fox needs to be to trigger height (top is ~-1000)

// tricks
var trickNum;
var trickFrame;
var firstTrick;
var nextTrick;
var easyTricks = [5, 6, 7];
var mediumTricks = [9, 10];
var mediumHardTricks = [2, 3];
var hardTricks = [4, 8];

// timer/game over related
var gameSeconds = 120; //120
var timer; // = new Timer(1000);
var timeLeft;
var timeTF;
var gameIsOver;

// animation related
var updates;
var lastUpdate;

// score related
var score = 0;
var scoreTF;

// Phaser.AUTO broke on ipad!
// original game was 730, 450 - new size is 1024, 768
var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'game', {
	init: init,
	preload: preload,
	create: create,
	update: update,
	render: render
});

function init() {
	game.stage.backgroundColor = '#B2D2E8';

	// keep things crisp
	game.renderer.renderSession.roundPixels = true;

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignVertically = true;
	game.scale.pageAlignHorizontally = true;

	if (game.device.desktop === false) {
		game.scale.setMinMax(100, 75, 1024, 768);
	} else {
		game.scale.setMinMax(640, 480, 1024, 768);
		//game.scale.setMinMax(1024, 768, 1024, 768);
	}
}

function preload() {
	// add preloader and text
	preloader = game.add.group();
	preloader.percent = game.add.text(512, 384, '0%', {
		font: 'bold 50px sans-serif',
		fill: '#666699'
	});
	preloader.percent.anchor.setTo(0.5, 0.5);
	preloader.add(preloader.percent);

	// load images
	var images = ['sky_splash', 'mountains_splash', 'buildings_splash1', 'buildings_splash2', 'buildings_splash3', 'halfpipe_splash', 'ground_splash', 'arctic_fox', 'snowboarding', 'logo_gray',

'how_to_play0001', 'how_to_play0002', 'how_to_play0003', 'how_to_play0004', 'how_to_play0005', 'how_to_play0006', 'how_to_play0007', 'how_to_play0008', 'how_to_play_arrow',

'consol', 'btn_main', 'sky', 'ground', 'buildings', 'mountains', 'halfpipe', 'your_score']; //, 'arrow_blue', 'arrow_green', 'arrow_red', 'arrow_white'
	for (var i = 0; i < images.length; i++) {
		game.load.image(images[i], 'images/' + images[i] + '.png');
	}

	// load sprite sheets
	var spritesheets = ['fox', 'btn_how_to_play', 'btn_play_game', 'btn_audio', 'countdown', 'arrow', 'arrow_button', 'btn_play_again'];
	for (i = 0; i < spritesheets.length; i++) {
		game.load.atlasJSONHash(spritesheets[i], 'images/' + spritesheets[i] + '.png', 'images/' + spritesheets[i] + '.json');
	}

	// load seamless loops
	loops = ['music_intro_loop', 'music_main_loop'];
	for (i = 0; i < loops.length; i++) {
		if (game.device.iOS || game.device.macOS) {
			game.load.audio(loops[i], ['sounds/' + loops[i] + '.m4a']);
		} else {
			// Firefox and Chrome will use OGG
			// IE11 will fall back to MP3, which will have a small gap at the end before replaying
			game.load.audio(loops[i], ['sounds/' + loops[i] + '.ogg', 'sounds/' + loops[i] + '.mp3']);
		}
	}

	// load audio
	mp3ogg = ['music_get_ready', 'music_end', 'right', 'wrong', 'ride', 'spin', 'wipeout', 'cheer1', 'cheer2', 'cheer3', 'cheer4', 'cheer5', 'cheer6', 'cheer7', 'cheer8', 'cheer9'];
	for (i = 0; i < mp3ogg.length; i++) {
		var mp3oggData = mp3ogg[i].split(":");
		game.load.audio(mp3ogg[i], ['sounds/' + mp3ogg[i] + '.mp3', 'sounds/' + mp3ogg[i] + '.ogg']);
	}

	// add preloader listeners
	game.load.onFileComplete.add(fileComplete, this);
	game.load.onLoadComplete.add(loadComplete, this);
}

// called after each filed is loaded
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
	//console.log("loaded " + cacheKey);
	//console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
	// update percent loaded
	preloader.percent.setText(progress + '%');
}

// called when preloading is complete
function loadComplete() {
	console.log('loadComplete');
	preloader.destroy();
}

function create() {
	console.log('create', game);

	// due to IE sound clipping issues adding all audio here
	for (var i = 0; i < loops.length; i++) {
		sounds[loops[i]] = game.add.audio(loops[i]);
	}
	for (i = 0; i < mp3ogg.length; i++) {
		sounds[mp3ogg[i]] = game.add.audio(mp3ogg[i]);
	}
	cheerSounds = [sounds['cheer1'], sounds['cheer2'], sounds['cheer3'], sounds['cheer4'], sounds['cheer5'], sounds['cheer6'], sounds['cheer7'], sounds['cheer8'], sounds['cheer9']];

	makeSplash();
}

function makeFox(x, y, angle) {
	// make fox
	var foxy = game.add.sprite(x, y, 'fox');
	foxy.startX = x;
	foxy.startY = y;
	foxy.anchor.setTo(0.45, 0.715);
	var foxFrames = ['normal:6', 'dropin:18', 'turn:21', 'trick1:46', 'trick5:76', 'trick6:106', 'trick7:136', 'trick9:166', 'trick10:196', 'trick2:226', 'trick3:258', 'trick4:288', 'trick8:320', 'error:322', 'wipeout:325', 'wipeout2:328']; //420, 423, 426
	var frame = 0;
	for (i = 0; i < foxFrames.length; i++) {
		var vars = foxFrames[i].split(':');
		var key = vars[0];
		var end = vars[1];
		var frames = [];
		while (frame < end) {
			frames.push(frame);
			frame++;
		}
		//console.log('key', key, 'frames', frames);
		var loop = false;
		if (!i || key == 'error') {
			loop = true;
			if (key == 'error') {
				frames.pop();
			}
		}
		// dropped framerate from 24 to extend animation time
		foxy.animations.add(key, frames, 20, loop); //name, frames, frameRate, loop,
	}
	foxy.animations.add('ready', [6], 20, true);
	foxy.angle = angle;
	return foxy;
}

function makeSplash() {
	splash = game.add.group();
	splash.y = 101;
	var sky = game.add.sprite(0, 0 - 85, 'sky_splash');
	splash.add(sky);
	var mountains = game.add.sprite(0, 55 - 85, 'mountains_splash');
	splash.add(mountains);
	var buildings = game.add.sprite(0, 50 - 85, 'buildings_splash1');
	splash.add(buildings);
	var buildings2 = game.add.sprite(0, 118 - 85, 'buildings_splash2');
	splash.add(buildings2);
	var buildings3 = game.add.sprite(0, 186 - 85, 'buildings_splash3');
	splash.add(buildings3);
	var buildings4 = game.add.sprite(1000, 190 - 85, 'buildings_splash3');
	buildings4.scale.x = -1;
	splash.add(buildings4);
	var ground = game.add.sprite(0, 225 - 10, 'ground_splash');
	splash.add(ground);
	halfpipe = game.add.sprite(0, 82 + 6, 'halfpipe_splash');
	halfpipe.centerX = 485;
	halfpipe.centerY = 110;
	halfpipe.radius = 430;
	splash.add(halfpipe);
	var title2 = game.add.sprite(495, 329, 'snowboarding');
	title2.anchor.setTo(0.504, 0.864);
	title2.alpha = 0;
	splash.add(title2);
	var title1 = game.add.sprite(491, 181, 'arctic_fox');
	title1.anchor.setTo(0.5, 0.523);
	title1.alpha = 0;
	splash.add(title1);
	var logo = game.add.sprite(10, 10 - splash.y, 'logo_gray');
	splash.add(logo);

	// animate stuff in
	mountains.visible = buildings.visible = buildings2.visible = buildings3.visible = buildings4.visible = false;
	game.add.tween(sky).from({
		alpha: 0
	}, 200, Phaser.Easing.Linear.None, true);
	var fadeIn = game.add.tween(ground).from({
		alpha: 0
	}, 200, Phaser.Easing.Linear.None, true);
	fadeIn.onComplete.add(function () {
		fadeIn.onComplete.removeAll();
		mountains.visible = buildings.visible = buildings2.visible = buildings3.visible = buildings4.visible = true;
	});
	game.add.tween(mountains).from({
		y: mountains.y + 250
	}, 500, Phaser.Easing.Back.Out, true, 300);
	game.add.tween(buildings).from({
		y: buildings.y + 250
	}, 500, Phaser.Easing.Back.Out, true, 400);
	game.add.tween(buildings2).from({
		y: buildings2.y + 250
	}, 500, Phaser.Easing.Back.Out, true, 500);
	game.add.tween(buildings3).from({
		y: buildings3.y + 250
	}, 500, Phaser.Easing.Back.Out, true, 600);
	game.add.tween(buildings4).from({
		y: buildings4.y + 250
	}, 500, Phaser.Easing.Back.Out, true, 700);
	game.add.tween(halfpipe).from({
		y: 768
	}, 500, Phaser.Easing.Back.Out, true, 800);
	game.add.tween(title1).to({
		alpha: 1
	}, 100, Phaser.Easing.Linear.None, true, 900);
	game.add.tween(title1).from({
		y: title1.y - 25
	}, 500, Phaser.Easing.Back.Out, true, 900);
	game.add.tween(title1.scale).from({
		x: 0.25,
		y: 0.25
	}, 500, Phaser.Easing.Back.Out, true, 900);
	var titleIn = game.add.tween(title2).to({
		alpha: 1
	}, 100, Phaser.Easing.Linear.None, true, 1100);
	game.add.tween(title2).from({
		y: title2.y - 60
	}, 500, Phaser.Easing.Back.Out, true, 1100);
	game.add.tween(title2.scale).from({
		x: 0.25,
		y: 0.25
	}, 500, Phaser.Easing.Back.Out, true, 1100);
	titleIn.onComplete.add(function () {
		titleIn.onComplete.removeAll();
		var foxSplash = makeFox(55, -500, 90);
		foxSplash.vy = 20;
		foxSplash.reverse = 1;
		foxSplash.animations.play('normal');
		foxSplash.update = function () {
			//console.log('animating splash fox');
			if (this.y < -1000) {
				this.vy *= -1;
				this.reverse *= -1;
				this.scale.x *= -1;
			}
			if (this.y < halfpipe.centerY) {
				if (this.x < halfpipe.centerX) {
					this.y += this.vy;
				} else {
					this.y -= this.vy;
				}
			} else {
				var dx = this.x - halfpipe.centerX;
				var dy = this.y - halfpipe.centerY;
				var angle = Math.atan2(dy, dx);
				var pipeVelocity = Math.abs(this.vy) * this.reverse;
				var rightAngle = angle - Math.PI / 2;
				var tempX = this.x + (Math.cos(rightAngle) * pipeVelocity);
				var tempY = this.y + (Math.sin(rightAngle) * pipeVelocity);
				dx = tempX - halfpipe.centerX;
				dy = tempY - halfpipe.centerY;
				angle = Math.atan2(dy, dx);
				this.x = halfpipe.centerX + Math.cos(angle) * halfpipe.radius;
				this.y = halfpipe.centerY + Math.sin(angle) * halfpipe.radius;
				this.angle = (angle * 180 / Math.PI) - 90;
			}
		};
		splash.add(foxSplash);
	});

	// audio toggle
	var btnAudio = game.add.button(975, 10 - splash.y, 'btn_audio', function () {
		if (!btnAudio.animations.currentFrame.index) {
			btnAudio.animations.frame = 1;
			game.sound.volume = 0;
		} else {
			btnAudio.animations.frame = 0;
			game.sound.volume = 1;
		}
	}, this);
	splash.add(btnAudio);
	if (!game.sound.volume) {
		btnAudio.animations.frame = 1;
	}

	var btnHowToPlay = game.add.button(293, 590, 'btn_how_to_play', function () {
		if (splash.how) {
			splash.how.destroy();
			splash.how = null;
		} else {
			makeHowToPlay();
		}
	}, this, 1, 0);
	splash.add(btnHowToPlay);

	var btnPlayGame = game.add.button(557, btnHowToPlay.y, 'btn_play_game', function () {
		splash.destroy(true);
		makeGame();
	}, this, 1, 0);
	splash.add(btnPlayGame);



	if (music) {
		music.stop();
	}
	music = sounds['music_intro_loop'];
	music.volume = musicVolume;
	music.loopFull();
}

function makeHowToPlay() {
	var how = game.add.group();
	how.x = 154;
	how.y = -16;
	how.frame = 1;
	how.add(game.add.sprite(0, 0, 'how_to_play0001'));
	how.arrowLeft = game.add.button(33, 230, 'how_to_play_arrow', function () {
		how.onArrow(-1);
	}, this);
	how.add(how.arrowLeft);
	how.arrowLeft.visible = false;
	how.arrowRight = game.add.button(692, 230, 'how_to_play_arrow', function () {
		how.onArrow(1);
	}, this);
	how.arrowRight.scale.x = -1;
	how.add(how.arrowRight);
	how.onArrow = function (num) {
		how.frame += num;
		if (how.frame < 1) {
			how.frame = 1;
		} else if (how.frame > 7) {
			how.frame = 7;
		}
		how.arrowLeft.visible = how.arrowRight.visible = true;
		if (how.frame == 1) {
			how.arrowLeft.visible = false;
		} else if (how.frame == 7) {
			how.arrowRight.visible = false;
		}
		//console.log('frame', how.frame);
		how.content.destroy();
		how.content = game.add.sprite(0, 0, 'how_to_play000' + Number(how.frame + 1));
		how.add(how.content);
	}
	how.content = game.add.sprite(0, 0, 'how_to_play0002');
	how.add(how.content);
	splash.add(how);
	splash.how = how;
}

function makeGame() {
	g = game.add.group();

	// scenery
	g.sky = game.add.sprite(0, skyY, 'sky');
	g.add(g.sky);
	g.mountains = game.add.sprite(0, mountainsY, 'mountains');
	g.add(g.mountains);
	g.buildings = game.add.sprite(0, buildingsY, 'buildings');
	g.add(g.buildings);
	g.ground = game.add.sprite(0, groundY, 'ground');
	g.add(g.ground);

	// halfpipe with fox at 119% (85% original scale * 1.4)
	halfpipe = game.add.group();
	halfpipe.x = 103;
	halfpipe.y = halfpipeY;
	var pipe = game.add.sprite(-199, 99, 'halfpipe');
	halfpipe.add(pipe);
	fox = makeFox(-13, 103, 0);
	fox.animations.play('ready');
	halfpipe.add(fox);
	g.add(halfpipe);
	g.add(game.add.sprite(10, 10, 'logo_gray'));

	// game console
	var consol = game.add.group();
	consol.x = 746;
	consol.y = 40;
	consol.add(game.add.sprite(0, 0, 'consol'));
	// main button quit game
	var btnMain = game.add.button(11, 6, 'btn_main', function () {
		game.tweens.removeAll();
		riding = false;
		killListeners();
		fox.destroy();
		g.destroy(true);
		makeSplash();
	}, this);
	consol.addChild(btnMain);
	// audio toggle
	var btnAudio = game.add.button(202, 11, 'btn_audio', function () {
		if (!btnAudio.animations.currentFrame.index) {
			btnAudio.animations.frame = 1;
			game.sound.volume = 0;
		} else {
			btnAudio.animations.frame = 0;
			game.sound.volume = 1;
		}
	}, this);
	consol.addChild(btnAudio);
	if (!game.sound.volume) {
		btnAudio.animations.frame = 1;
	}
	// time
	timeTF = game.add.text(129, 73, '0:00', {
		font: '31px subway_tickerregular',
		fill: '#FF0000'
	});
	consol.add(timeTF);
	// score
	scoreTF = game.add.text(100, 134, '0', {
		font: '31px subway_tickerregular',
		fill: '#FF0000'
	});
	scoreTF.setScore = function (num) {
		scoreTF.setText(num);
		scoreTF.x = Math.round(166 - scoreTF.width / 2);
	}
	scoreTF.setScore('0');
	consol.add(scoreTF);
	// arrows
	arrowTablet = game.add.group();
	arrowTablet.x = 130;
	arrowTablet.y = 200;
	consol.add(arrowTablet);
	arrowLeft = game.add.sprite(arrowXs[0], 14, 'arrow');
	arrowLeft.anchor.setTo(0.5, 0.5);
	arrowLeft.angle = arrowAngles[0];
	arrowTablet.add(arrowLeft);
	arrowUp = game.add.sprite(arrowXs[1], 14, 'arrow');
	arrowUp.anchor.setTo(0.5, 0.5);
	arrowUp.angle = arrowAngles[1];
	arrowTablet.add(arrowUp);
	arrowDown = game.add.sprite(arrowXs[2], 14, 'arrow');
	arrowDown.anchor.setTo(0.5, 0.5);
	arrowDown.angle = arrowAngles[2];
	arrowTablet.add(arrowDown);
	arrowRight = game.add.sprite(arrowXs[3], 14, 'arrow');
	arrowRight.anchor.setTo(0.5, 0.5);
	arrowTablet.add(arrowRight);
	// dynamic arrows group
	arrows = game.add.group();
	arrowTablet.add(arrows);
	arrowSprites = [arrowLeft, arrowUp, arrowDown, arrowRight];
	// arrow buttons required for tablets
	g.btnLeft = game.add.button(arrowXs[0], 463, 'arrow_button', null, this, 0, 0, 1);
	g.btnLeft.onInputDown.add(function () {
		onKeyPressed(0);
	}, this);
	g.btnLeft.anchor.setTo(0.5, 0.5);
	g.btnLeft.angle = arrowAngles[0];
	arrowTablet.add(g.btnLeft);
	g.btnUp = game.add.button(arrowXs[1], g.btnLeft.y, 'arrow_button', null, this, 0, 0, 1);
	g.btnUp.onInputDown.add(function () {
		onKeyPressed(1);
	}, this);
	g.btnUp.anchor.setTo(0.5, 0.5);
	g.btnUp.angle = arrowAngles[1];
	arrowTablet.add(g.btnUp);
	g.btnDown = game.add.button(arrowXs[2], g.btnLeft.y, 'arrow_button', null, this, 0, 0, 1);
	g.btnDown.onInputDown.add(function () {
		onKeyPressed(2);
	}, this);
	g.btnDown.anchor.setTo(0.5, 0.5);
	g.btnDown.angle = arrowAngles[2];
	arrowTablet.add(g.btnDown);
	g.btnRight = game.add.button(arrowXs[3], g.btnLeft.y, 'arrow_button', null, this, 0, 0, 1);
	g.btnRight.onInputDown.add(function () {
		onKeyPressed(3);
	}, this);
	g.btnRight.anchor.setTo(0.5, 0.5);
	arrowTablet.add(g.btnRight);
	g.btnLeft.input.enabled = g.btnUp.input.enabled = g.btnDown.input.enabled = g.btnRight.input.enabled = false;

	g.add(consol);

	g.countdown = game.add.sprite(centerX, centerY + 100, 'countdown');
	g.countdown.anchor.setTo(0.5, 0.5);
	halfpipe.add(g.countdown);
	g.countdown.animate = function () {
		g.countdown.scale.x = g.countdown.scale.y = g.countdown.alpha = 0;
		game.add.tween(g.countdown.scale).to({
			x: 1,
			y: 1
		}, 500, Phaser.Easing.Quartic.Out, true);
		var fadeIn = game.add.tween(g.countdown).to({
			alpha: 1
		}, 500, Phaser.Easing.Quartic.Out, true);
		if (g.countdown.animations.frame < 5) {
			var fadeOut = game.add.tween(g.countdown).to({
				alpha: 0
			}, 500, Phaser.Easing.Quartic.Out, false);
			fadeIn.chain(fadeOut);
			fadeOut.onComplete.add(function () {
				fadeOut.onComplete.removeAll();
				if (g.countdown.animations.frame < 4) {
					g.countdown.animations.frame += 1;
					g.countdown.animate();
				} else {
					g.countdown.visible = false;
					startGame();
				}
			});
		}
	}

	// for parallax
	positionScenery();

	readyGame();
}

function readyGame() {

	// reset score
	score = 0;
	scoreTF.setScore('0');

	// reset timer display
	var minutes = Math.floor(gameSeconds / 60);
	var seconds = gameSeconds - (minutes * 60);
	var secondsStr = seconds.toString();
	if (secondsStr.length < 2) {
		secondsStr = "0" + secondsStr;
	}
	//console.log(minutes + ":" + secondsStr);
	timeTF.setText(minutes + ":" + secondsStr);

	updates = 0;
	lastUpdate = 0;

	// reset snowboarder and scenery
	fox.animations.frame = 0;
	fox.x = fox.startX;
	fox.y = fox.startY;
	fox.angle = 0;
	fox.scale.x = 1;

	positionScenery();

	stuntArrows = [];

	Phaser.ArrayUtils.shuffle(cheerSounds);

	g.countdown.visible = true;
	g.countdown.animations.frame = 0;
	g.countdown.animate();

}

function startGame() {

	addListeners();
	startTimer();
	dropIn();

	if (music) {
		music.stop();
	}
	music = sounds['music_main_loop'];
	music.volume = musicVolume;
	music.loopFull();
}

function restartGame() {
	music = sounds['music_intro_loop'];
	music.volume = musicVolume;
	music.loopFull();

	readyGame();
}

function positionScenery() {
	halfpipe.y = pipeMinY - 50 - fox.y; //number controls space between top of screen and fox was + 50
	//console.log('halfpipe.y', halfpipe.y);
	if (halfpipe.y < pipeMinY) {
		halfpipe.y = pipeMinY;
	}
	//console.log('halfpipe.y', halfpipe.y);

	var percent = halfpipe.y / 600;
	//console.log('percent', percent);
	g.sky.y = skyY + 50 * percent; //50
	g.mountains.y = mountainsY + 100 * percent; //100
	g.buildings.y = buildingsY + 150 * percent; //150
	g.ground.y = groundY + 200 * percent; //200
}

function dropIn() {
	console.log('dropIn');

	// reset snowboarder and scenery
	fox.animations.frame = 0;
	fox.x = -13;
	fox.y = 103;
	fox.angle = 0;
	fox.scale.x = 1;
	positionScenery();

	// pipe animation related
	inPipe = false;
	pipeSide = "left";
	vy = 5; // was 2
	xDirection = "right";
	xDirectionLast = "right";

	vyLast = vy;
	yDirection = "down";
	yDirectionLast = "down";

	xLast = fox.x;
	xDirectionChange = false;
	reverse = 1;
	//flippedAtCenter = false;
	wipeOut = false;
	wipedOut = false;
	wipeSweeps = 0;
	sweeps = 0;
	trickNum = 0;

	// trick related
	firstTrick = true;
	nextTrick = [];
	stuntPerformed = false;

	// arrow related
	launchArrows = false;
	arrowMissed = false;
	errors = [];
	arrows.removeAll(true);

	// drop in animation
	fox.animations.play('dropin');
	fox.animations.currentAnim.onComplete.add(function () {
		fox.animations.currentAnim.onComplete.removeAll();
		fox.x = 26;
		fox.y = 73;
		fox.angle = 90;
		fox.animations.play('normal');
		riding = true;
	}, this);

	sounds['spin'].play();
}

// PIPE ANIMATION
function rideThePipe() {
	//console.log('rideThePipe');

	vy += gravity;
	//console.log("vy:"+vy);

	// determine y direction
	if (vy < 0) {
		yDirection = "up";
	} else {
		yDirection = "down";
	}
	//console.log(yDirection);


	//console.log("timeLeft"+timeLeft);

	/////////////////////////////////////
	// IN AIR OR VERTICAL PART OF PIPE //
	/////////////////////////////////////
	if (fox.y <= centerY) {

		// if snowboarder was previously in pipe
		if (inPipe) {
			//console.log("left pipe");
			inPipe = false;
			launchArrows = false;
			stuntPerformed = false;
		}

		// move snowboarder
		fox.y += vy;
		//console.log('fox.y', fox.y);

		positionScenery();

		//console.log(halfpipe.y); // 617.05 is highest

		// keep snowboarder facing proper directions
		if (yDirection == "down") {
			// left side
			if (fox.x < centerX) {
				fox.scale.x = 1;
				// right side
			} else {
				fox.scale.x = -1;
			}
			// catch wipeout that may have been missed in animation
			if (yDirection == "down" && sweeps > 1) { //doesn't seem to be necessary but just in case
				checkForErrorAction();
			}
		}

		//console.log('fox.animations.frame', fox.animations.frame);

		// if direction was reversed turn snowboarder
		if (yDirection != yDirectionLast && fox.animations.frame < 300) {
			// some tricks include the turn in the animation
			if (trickNum != 6 && trickNum != 7) {
				fox.animations.play('turn');
				fox.animations.currentAnim.onComplete.add(function () {
					fox.animations.currentAnim.onComplete.removeAll();
					fox.animations.play('normal');
				}, this);
			}
		}

		//console.log('fox.y', fox.y);
		// if there is enough time left
		if (timeLeft > 5) {
			// if first trick
			if (firstTrick) {
				// and snowboarder is high enough
				if (fox.y < -200) {
					pickTrick();
					firstTrick = false;
				}
				// arrows launched when fox starts moving down
			} else if (yDirection == 'down') {
				// launch arrows for stunt on opposite end of halfpipe
				// if launch sequence has not begun
				if (!arrows.children.length) {
					// and an arrow wasn't missed
					if (!arrowMissed) {
						// pick a trick
						pickTrick();
					}
				}
			}
		}

		// trigger stunt when snowboarder is moving up and passes a certain height
		if (fox.y < stuntHeight && yDirection == 'up') {
			if (!stuntPerformed && errors.length) {
				console.log('begin stunt', nextTrick[0]);
				//fox.animations.play('trick10');
				fox.trickNum = nextTrick[0];
				fox.animations.play(nextTrick[0]);
				// on trick complete
				fox.animations.currentAnim.onComplete.add(function () {
					console.log('stunt', fox.trickNum, 'complete! arrows left', arrows.children.length);
					// sometimes a false reading because new arrows can be in process when trick launches
					if (arrows.children.length) {
						console.log('stunt', fox.trickNum, 'completed before arrows!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
					}
					fox.trickNum = 0;
					fox.animations.currentAnim.onComplete.removeAll();
					fox.animations.play('normal');
				}, this);
				nextTrick.shift();
				stuntPerformed = true;
			}
		}

	} else {
		//////////////////////////////
		// IN CIRCULAR PART OF PIPE //
		//////////////////////////////
		// if snowboarder just entered the pipe
		if (!inPipe) {
			//console.log("entered pipe");
			inPipe = true;

			// determine direction of movement in pipe based on side of entry
			if (fox.x < centerX) {
				//xDirection = xDirectionLast = "right";
				reverse = 1;
			} else {
				//xDirection = xDirectionLast = "left";
				reverse = -1;
			}

			// if snowboarder wiped out go to that animation
			if (wipeOut && !wipedOut) {
				fox.animations.play("wipeout");
				wipedOut = true;
			}
			sounds['ride'].play();

		} else if (xDirectionChange) {
			//console.log(xDirection);
			if (xDirection == "right") {
				reverse = 1;
			} else {
				reverse = -1;
			}
			xDirectionChange = false;
		}

		if (!wipeOut && timeLeft) {

			// boost speed if velocity is at a minimum
			if (Math.abs(vy) > 20 && Math.abs(vy) < maxVelocity) {
				//console.log("mega speed boost");
				//if (sweeps < 2){
				//vy *= 1.015;
				//} else {
				vy *= vyBoost;
				//}

			}

			// make sure speed doesn't exceed maximum
			if (vy > maxVelocity) {
				vy = maxVelocity;
			} else if (vy < -maxVelocity) {
				vy = -maxVelocity;
			}

			// if fox wipes out or time is up slow him down in the pipe
		} else {
			vy *= .95;
		}



		// determine current angle of snowboarder in referenece to center of halfpipe circle
		var dx = fox.x - centerX;
		var dy = fox.y - centerY;
		var angle = Math.atan2(dy, dx); // in radians
		//console.log(angle);
		//console.log(angle * 180 / Math.PI); // degrees

		var pipeVelocity = vy;
		pipeVelocity = Math.abs(vy) * reverse;

		// project a point 90 degrees from the end of the line extending from center of halfpipe circle like so...
		// .
		// |
		// |_.
		var rightAngle = angle - Math.PI / 2;
		var tempX = fox.x + (Math.cos(rightAngle) * pipeVelocity);
		var tempY = fox.y + (Math.sin(rightAngle) * pipeVelocity);

		// determine angle of line from center of halfpipe circle to temporary point
		dx = tempX - centerX;
		dy = tempY - centerY;
		angle = Math.atan2(dy, dx); // in radians

		// place snowboarder based on adjusted angle
		fox.x = centerX + Math.cos(angle) * radius;
		fox.y = centerY + Math.sin(angle) * radius;

		fox.angle = (angle * 180 / Math.PI) - 90;

		// flip y velocity when snowboarder moves from one side of the pipe to the other
		flippedAtCenter = false;
		if (fox.x > centerX && xLast < centerX || fox.x < centerX && xLast > centerX) {
			flippedAtCenter = true;
			vy *= -1;
		}

		// determine direction
		if (fox.x - xLast > 0) {
			xDirection = "right";
		} else if (fox.x - xLast < 0) {
			xDirection = "left";
		}
		if (xDirection != xDirectionLast) {
			//console.log(xDirection + " vs " + xDirectionLast);
			//console.log("direction change");
			xDirectionChange = true;
		}
		xDirectionLast = xDirection;


		if (vyLast > 0 && vy < 0 || vyLast < 0 && vy > 0) {
			//console.log('slowing down');
			//console.log("vy change");
			//if (Math.abs(snowboarder.x - centerX) > 20){
			if (!flippedAtCenter) {
				reverse *= -1;
			}

			sweeps++;

			// after time over or wipe out and N back and forths stop the action
			if (!timeLeft) {
				wipeSweeps++;
				if (wipeSweeps == 6) {
					stopAction();
				} else if (wipeSweeps % 2 == 0) {
					sounds['wipeout'].play();
				}
			} else if (wipeOut) {
				wipeSweeps++;
				if (wipeSweeps == 4) {
					stopAction();
				} else if (wipeSweeps == 2) {
					sounds['wipeout'].play();
				}
			}

		}


	}

	//console.log(xDirectionChange);



	//////////////////////////////
	// IN EITHER PART OF PIPE //
	//////////////////////////////

	// if launch arrows flag is set the launch away
	if (launchArrows) {
		//console.log("launching arrows");
		// this determines what frame each arrow is launched - spaces them out
		//stuntFrame++;
		//console.log("stuntFrame: "+stuntFrame);
		arrowsY += arrowSpeed;
		//console.log("arrowsY: "+arrowsY);
		/*if (stuntArrows.length) {
		//if (stuntFrame >= stuntArrows[0][0]) {
		// use distance based method instead of frame based so arrows are spaced out the same as slower frame rate Flash game and speed can be adjusted
		if (arrowsY >= stuntArrows[0][0] * 7) { //every 10 frames 70 pixels went by so multiply by 7
		launchArrow(stuntArrows[0][1]);
		stuntArrows.shift();
		}
		}*/
		arrowNumInSeries = 1;
		for (var i = 0; i < stuntArrows.length; i++) {
			if (i < stuntArrows.length - 1) {
				launchArrow(stuntArrows[i][1], stuntArrows[i][0] * 7, false);
			} else {
				launchArrow(stuntArrows[i][1], stuntArrows[i][0] * 7, true);
			}
		}
		stuntArrows = [];
		launchArrows = false;
	}

	// is update OK?
	//if (!wipedOut) {
	//arrowCheck();
	//moveArrow();
	//}

	// save previous vars
	xLast = fox.x;
	yLast = fox.y;
	vyLast = vy;
	yDirectionLast = yDirection;
}

// select a trick based on how many successful tricks
function pickTrick() {

	//console.log('arrows', arrows.children.length);
	//if (!arrows.children.length) {

	//console.log("launch arrows!!!");
	launchArrows = true;
	stuntFrame = 0;
	arrowsY = 0;
	arrowsCorrect = 0;

	//arrowMissed = false;
	//errors = new Array();

	//console.log('sweeps', sweeps);
	if (sweeps == 1) {
		trickNum = 1;
	} else if (sweeps == 2) {
		//easyTricks.sort(shuffle);
		Phaser.ArrayUtils.shuffle(easyTricks);
		trickNum = easyTricks[0];
	} else if (sweeps == 3) {
		trickNum = easyTricks[1];
	} else if (sweeps == 4) {
		trickNum = easyTricks[2];
	} else if (sweeps == 5) {
		//mediumTricks.sort(shuffle);
		Phaser.ArrayUtils.shuffle(mediumTricks);
		trickNum = mediumTricks[0];
	} else if (sweeps == 6) {
		trickNum = mediumTricks[1];
	} else if (sweeps == 7) {
		//mediumHardTricks.sort(shuffle);
		Phaser.ArrayUtils.shuffle(mediumHardTricks);
		trickNum = mediumHardTricks[0];
	} else if (sweeps == 8) {
		trickNum = mediumHardTricks[1];
	} else if (sweeps == 9) {
		//hardTricks.sort(shuffle);
		Phaser.ArrayUtils.shuffle(hardTricks);
		trickNum = hardTricks[0];
	} else if (sweeps == 10) {
		trickNum = hardTricks[1];
	} else {
		trickNum = game.rnd.integerInRange(2, 10);
	}

	// for testing - to test timing miss last arrow
	/*if (trickNum > 1) {
		trickNum = 4;
	}*/

	if (trickNum) { //added this conditional
		nextTrick.push('trick' + trickNum);
		console.log('\n*** SWEEP', sweeps, 'TRICK', trickNum, '***\n');
		var adj = 15; //timing adjustment
		if (trickNum == 1) {
			// WARMUP - grab board
			stuntArrowsLeft = [[10,4],[30,1]];
			stuntArrowsRight = [[10,1],[30,4]];
		} else if (trickNum == 2) {
			// MEDIUM/HARD - grab 4 rolls
			stuntArrowsLeft = [[1, 1], [15, 4], [25, 4], [35, 4], [45, 4]];
			stuntArrowsRight = [[1, 4], [15, 1], [25, 1], [35, 1], [45, 1]];
		} else if (trickNum == 3) {
			// MEDIUM/HARD - grab 2 forward flip
			stuntArrowsLeft = [[1, 1], [12, 3], [23, 2], [34, 4], [45, 2]];
			stuntArrowsRight = [[1, 4], [12, 3], [23, 2], [34, 1], [45, 2]];
		} else if (trickNum == 4) {
			// HARD - turbo roll flip
			stuntArrowsLeft = [[1, 3], [9, 4], [18, 1], [27, 3], [36, 1], [45, 2]];
			stuntArrowsRight = [[1, 3], [9, 1], [18, 4], [27, 3], [36, 4], [45, 2]];
		} else if (trickNum == 5) {
			// EASY - nose grab
			stuntArrowsLeft = [[10, 2], [20, 1], [40, 3]];
			stuntArrowsRight = [[10, 2], [20, 4], [40, 3]];
		} else if (trickNum == 6) {
			// EASY - hand stand
			stuntArrowsLeft = [[10, 1], [20, 3], [40, 1]];
			stuntArrowsRight = [[10, 4], [20, 3], [40, 4]];
		} else if (trickNum == 7) {
			// EASY - side out
			stuntArrowsLeft = [[10, 1], [20, 4], [40, 3]];
			stuntArrowsRight = [[10, 4], [20, 1], [40, 3]];
		} else if (trickNum == 8) {
			// HARD - turbo roll flip
			stuntArrowsLeft = [[1, 1], [9, 4], [18, 1], [27, 4], [36, 1], [45, 2]];
			stuntArrowsRight = [[1, 4], [9, 1], [18, 4], [27, 1], [36, 4], [45, 2]];
		} else if (trickNum == 9) {
			// MEDIUM - forward flip
			adj = 12;
			stuntArrowsLeft = [[10, 1], [20, 3], [30, 4], [40, 2]];
			stuntArrowsRight = [[10, 4], [20, 3], [30, 1], [40, 2]];
		} else if (trickNum == 10) {
			// MEDIUM - backward flip
			adj = 12;
			stuntArrowsLeft = [[10, 4], [20, 3], [30, 1], [40, 2]];
			stuntArrowsRight = [[10, 1], [20, 3], [30, 4], [40, 2]];
		}

		if (fox.x < centerX) {
			pipeSide = "left";
			stuntArrows = stuntArrowsRight.slice();
		} else {
			pipeSide = "right";
			stuntArrows = stuntArrowsLeft.slice();
		}
		// adjust timing
		for (var i = 0; i < stuntArrows.length; i++) {
			stuntArrows[i][0] += adj;
			//console.log('stuntArrows', stuntArrows[i]);
		}

	}


	//}
}

function checkForErrorAction() {
	//console.log("checkForErrorAction");

	//console.log("errors:" + errors);

	if (errors.length) { // may add an additional safety check in after move
		if (errors[0] == 1) {
			console.log("WIPEOUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			wipeOut = true;
			// if in middle of trick kill on trick complete listener
			fox.animations.currentAnim.onComplete.removeAll();
			fox.animations.play('error');
			/*fox.animations.stop();
			fox.animations.frame = 322;*/
			if (trickNum == 6 || trickNum ==7){
				fox.scale.x *= -1;
			}
		}
		errors.shift();
	}

}

function onKeyPressed(index) {
	//console.log("onKeyPressed", index);
	// get top arrow in column that matches key press
	var arrowAbove = arrowSprites[index];
	//console.log('arrowAbove', arrowAbove);
	// cycle through all arrows
	for (var i = 0; i < arrows.children.length; i++) {
		var arrow = arrows.children[i];
		// if arrow is in same column as top arrow
		if (arrow.x == arrowAbove.x) {
			// check distance
			var arrowDist = Math.floor(Math.abs(arrowAbove.y - arrow.y));
			//console.log('arrowDist', arrowDist);
			// if it's close enough to be correct
			if (arrowDist < arrowThreshold) {
				// if arrow is blue
				if (arrow.animations.frame == 1) {
					//make arrow green
					arrow.animations.frame = 2;
					// update score
					arrowsCorrect++;
					var points = (arrowThreshold - arrowDist) * (arrowsCorrect * 10);
					//console.log("arrowsCorrect", arrowsCorrect, "points", points);
					score += points;
					scoreTF.setScore(score);
					// play sound
					sounds['right'].play();
				}
			}
		}
	}
}


function launchArrow(arrowNum, yDown, lastArrow) {
	console.log('launching arrow', arrowNumInSeries, arrowNum, yDown, lastArrow);
	//var names = ['left', 'up', 'down', 'right'];
	var arrow = game.add.sprite(arrowXs[arrowNum - 1], 378 + yDown, 'arrow');
	arrow.anchor.setTo(0.5, 0.5);
	arrow.angle = arrowAngles[arrowNum - 1];
	arrow.animations.frame = 1;
	arrow.alpha = 0;
	arrow.num = arrowNumInSeries;
	arrow.lastArrow = lastArrow;
	/*arrow.lastArrow = false;
	// if arrow is last in volley set flag
	//console.log("stuntArrows.length"+stuntArrows.length);
	if (stuntArrows.length == 1) {
	console.log("last in series!");
	arrow.lastArrow = true;
	}*/
	arrow.removing = false;
	arrow.update = function () {
		if (!wipedOut) {
			this.y -= arrowSpeed;
			if (this.y >= 0) {
				if (this.y <= 378) {
					// fade in arrow
					if (this.alpha < 1) {
						this.alpha += .1;
						if (this.alpha > 1) {
							this.alpha = 1; //was fractionally going over 1
						}
					}
				}
			} else {
				if (!this.removing) {
					// if arrow is blue
					if (this.animations.frame == 1) {
						console.log("error!");
						arrowMissed = true;
						arrowsCorrect = 0;
						// make it red
						this.animations.frame = 3;
						// record error
						errors.push(1);
						// play sound
						sounds['wrong'].play();
					} else {
						// if arrow is green record no error
						errors.push(0);
					}
					this.removing = true;

				} else {
					if (this.lastArrow) {
						//console.log('lastArrow');
						this.lastArrow = false;
						this.lastArrowOnFaded = true;
						if (!arrowMissed) {
							// play cheer sound
							cheerSounds[cheerSoundNum].play();

							// reshuffle sounds if at end of cheers array
							cheerSoundNum++;
							if (cheerSoundNum == cheerSounds.length) {
								Phaser.ArrayUtils.shuffle(cheerSounds);
								cheerSoundNum = 0;
							}

							// bonus based on number of arrows in series
							score += arrowNumInSeries * 1000;
							scoreTF.setScore(score);
						}
					}
					// fade arrow
					this.alpha -= 0.25;
					// destroy arrow
					if (this.alpha <= 0) {
						if (this.lastArrowOnFaded) {
							console.log('removing final arrow', this.num);
							console.log('trick', trickNum, 'arrows complete!');
						} else {
							console.log('removing arrow', this.num);
						}
						// remove arrow from screen
						this.destroy();
					}
				}
				//console.log(errors);
			}
		}
	}
	arrows.addChild(arrow);
	arrowNumInSeries++;
}

function startTimer() {
	timeLeft = gameSeconds;
	//timer.addEventListener(TimerEvent.TIMER, onTimer);
	//timer.start();

	timer = game.time.events.loop(Phaser.Timer.SECOND * 1, onTimer, this);
}

function onTimer() {
	timeLeft -= 1;
	var minutes = Math.floor(timeLeft / 60);
	var seconds = timeLeft - (minutes * 60);
	var secondsStr = seconds.toString();
	if (secondsStr.length < 2) {
		secondsStr = "0" + secondsStr;
	}
	//console.log(minutes + ":" + secondsStr);
	timeTF.setText(minutes + ":" + secondsStr);
	if (!timeLeft) {
		game.time.removeAll();
		gameOver();
	}
}

function pauseTimer() {
	timer.pause();
}

function resumeTimer() {
	timer.resume();
}

function killTimer() {
	game.time.events.remove(timer);
}

// END GAME STUFF

function stopAction() {

	riding = false;
	fox.animations.stop();

	if (timeLeft) {
		dropIn();
	} else {
		//popup.score = score;
		//popup.gotoAndStop("gameOver");
	}
}

function gameOver() {
	console.log("game over");

	gameIsOver = true;

	killListeners();

	g.countdown.animations.frame = 5;
	g.countdown.visible = true;
	g.countdown.animate();

	music.stop();
	music = sounds['music_end'];
	music.volume = musicVolume;
	music.play();
	music.onStop.add(function () {
		music.onStop.removeAll();
		arrows.removeAll(true);
		riding = false;
		showPopup();
	}, this);
}

function showPopup() {
	var popup = game.add.group();
	popup.x = centerX - 240;
	popup.y = centerY - 170 - 587;
	popup.add(game.add.sprite(0, 0, 'your_score'));
	var scor = game.add.text(239, 165 + 4, score, {
		font: 'bold 50px sans-serif',
		fill: '#666699'
	});
	scor.anchor.setTo(0.5, 0.5);
	popup.add(scor);
	var btnPlayAgain = game.add.button(154, 246, 'btn_play_again', function () {
		restartGame();
		popup.destroy(true);
	}, this, 1, 0);
	popup.add(btnPlayAgain);
	halfpipe.add(popup);
	var fadeIn = game.add.tween(popup).to({
		y: centerY - 170
	}, 1000, Phaser.Easing.Back.Out, true);
}

function addListeners() {
	// add key listeners
	g.cursors = game.input.keyboard.createCursorKeys();
	//console.log(cursors);

	g.cursors.left.onDown.add(function () {
		onKeyPressed(0);
		g.btnLeft.frame = 1;
	}, this);
	g.cursors.left.onUp.add(function () {
		g.btnLeft.frame = 0;
	}, this);

	g.cursors.up.onDown.add(function () {
		onKeyPressed(1);
		g.btnUp.frame = 1;
	}, this);
	g.cursors.up.onUp.add(function () {
		g.btnUp.frame = 0;
	}, this);

	g.cursors.down.onDown.add(function () {
		onKeyPressed(2);
		g.btnDown.frame = 1;
	}, this);
	g.cursors.down.onUp.add(function () {
		g.btnDown.frame = 0;
	}, this);

	g.cursors.right.onDown.add(function () {
		onKeyPressed(3);
		g.btnRight.frame = 1;
	}, this);
	g.cursors.right.onUp.add(function () {
		g.btnRight.frame = 0;
	}, this);
	//game.input.keyboard.addCallbacks(this, null, null, keyPress); //context, onDown, onUp, onPress
	//game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.UP, Phaser.Keyboard.DOWN]);
	g.btnLeft.input.enabled = g.btnUp.input.enabled = g.btnDown.input.enabled = g.btnRight.input.enabled = true;
}

// kill all listeners
function killListeners() {
	//console.log('killListeners');
	game.time.removeAll();

	// remove arrow key input
	if (g.cursors) {
		g.cursors.up.onDown.removeAll();
		g.cursors.up.onUp.removeAll();
		g.cursors.down.onDown.removeAll();
		g.cursors.down.onUp.removeAll();
		g.cursors.left.onDown.removeAll();
		g.cursors.left.onUp.removeAll();
		g.cursors.right.onDown.removeAll();
		g.cursors.right.onUp.removeAll();
	}

	g.btnLeft.input.enabled = g.btnUp.input.enabled = g.btnDown.input.enabled = g.btnRight.input.enabled = false;

	music.onStop.removeAll();
}

/*function shuffle(a, b) {
var num = Math.round(Math.random() * 2) - 1;
return num;
}*/

function update() {
	updates++;
	if (riding) {
		if (updates % 3 == 0) {
			rideThePipe();
		}

		// hack to lower frame rate
		/*var timestamp = new Date().getTime();
		//console.log(timestamp, lastUpdate);
		if (timestamp - lastUpdate < 18) { //20

		} else {
			rideThePipe();
			lastUpdate = timestamp;
		}*/


		// check for wipeout at certain frames in animation
		//console.log(fox.animations.currentAnim.frame);
		if (wipeOutCheckFrames.indexOf(fox.animations.currentAnim.frame) != -1) {
			checkForErrorAction();
		}
		// trigger spin sound on certain frames
		if (spinFrames.indexOf(fox.animations.currentAnim.frame) != -1) {
			// play spin sound
			sounds['spin'].play();
		}
		// trigger flip on certain frames
		if (flipFrames.indexOf(fox.animations.currentAnim.frame) != -1) {
			if (fox.x < centerX) {
				fox.scale.x = 1;
			} else {
				fox.scale.x = -1;
			}
			console.log('flip');
		}
	}
}

function render() {

}
