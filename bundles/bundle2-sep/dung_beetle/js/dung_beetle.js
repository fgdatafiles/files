var debug = false;
var firstRun = true; // set to false to skip intro animation
var instructionsSkip = false; // skip instruction that come up at start of each level

var preloader;
var preloaderPartsLoaded = 0;
var splash;
var levelSelect;
var howToPlay;
var howToPlayScene;

var music;
var world;
var levelScene;
var upscale = 1.4; // factor game is scaled up from original
var level = 1;
var levelsUnlocked = 1;
var gameWon = false;
var scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var time = 600;
var instructionsShown = false;
var instructionsShowing = false;
var hints;
var hintNum;
var hintSeconds = 60; //make less for testing
var facts = ['Dung beetles will often try to steal dung balls from other dung beetles.',
'Some dung beetles lay their eggs in dung balls.',
'Dung beetles live on every continent except Antarctica.',
'Dung beetles can be up to 2.4 inches (6 centimeters) long.',
'Some dung beetles coat their dung balls with clay before laying eggs inside.',
'Dung beetles have wings and can fly.',
'Most dung-eating dung beetles prefer dung from plant-eating animals. Not all dung beetles eat dung. Some eat insects, fungi, fruit, or even snail slime trails!',
'Dung beetles are part of the scarab family of beetles. The scarab considered to be sacred by ancient Egyptians is a dung beetle.',
'Dung beetles walk backwards when rolling their dung balls, using their hind legs to guide the ball.',
'Dung beetles help control pest populations by getting rid of the dung that flies and parasitic worms need to breed.'];

var g; //level group
var ui; // ui group
var updateFunctions = [];
var ppm = 50 * upscale; //70
var oneEightyDivPI = 180 / Math.PI;
var yShift = 75; //amount to push down game 28 is top ui bottom

// references to bodies
var wheel;
var dung;
var dungJoint;
// references to objects
var beetle;
var beetle2;
var ants = [];

var musicVolume = .25;
var mp3ogg;
var sounds = {};

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
	game.stage.backgroundColor = '#C4A370';

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
	// load preloader stuff first
	game.load.image('bg_preloader', 'images/bg_preloader.jpg');
	game.load.atlasJSONHash('beetle_preloader', 'images/beetle_preloader.png', 'images/beetle_preloader.json');

	// load images
	var images = ['dung_preloader', 'preloader_overlay',

'bg_splash', 'splash_grass_1', 'splash_grass_2', 'splash_grass_3', 'splash_ground', 'dung_splash', 'splash_grass_foreground', 'logo_splash', 'dung_beetle_derby',

'logo', 'bg_level_select', 'level_preview_1', 'level_name_1', 'level_preview_2', 'level_name_2', 'level_preview_3', 'level_name_3', 'level_preview_4', 'level_name_4', 'level_preview_5', 'level_name_5', 'level_preview_6', 'level_name_6', 'level_preview_7', 'level_name_7', 'level_preview_8', 'level_name_8', 'level_preview_9', 'level_name_9', 'level_preview_10', 'level_name_10', 'level_select_dung', 'level_select_dung_outline', 'lock', 'points',

'how_to_play', 'how_to_play_1', 'how_to_play_2', 'how_to_play_3', 'how_to_play_4', 'how_to_play_5', 'how_to_play_6', 'gem_green_50',

'ui_branch', 'ui_middle', 'btn_home', 'hint_popup', 'btn_close_dung',

'popup', 'popup_shadow', 'popup_shadow_wide', 'popup_win', 'popup_win_special', 'popup_fail', 'popup_times_up', 'popup_level1', 'popup_level2', 'popup_level3', 'popup_level4', 'popup_level5', 'popup_level6', 'popup_level7', 'popup_level8', 'popup_level9', 'popup_level10',

'dung_30', 'dung_40', 'berry_30', 'berry_40', 'berry_60', 'block_20', 'block_30', 'block_breakable_20', 'block_breakable_25', 'block_breakable_30', 'block_breakable_40', 'block_breakable_50', 'block_breakable_60', 'round_breakable_20', 'round_breakable_30', 'round_breakable_35', 'round_20', 'round_30', 'round_40', 'gem_blue_25', 'gem_green_25', 'gem_purple_25', 'gem_red_25', 'gem_blue_30', 'gem_green_30', 'gem_purple_30', 'gem_red_30', 'gem_green_35', 'gem_round_blue', 'gem_round_green', 'gem_round_purple', 'gem_round_red', 'gem_round_blue_tiny', 'gem_round_green_tiny', 'gem_round_purple_tiny', 'gem_round_red_tiny', 'shroom_small', 'shroom_medium', 'shroom_large', 'shroom_cap_small', 'shroom_cap_medium', 'shroom_cap_large', 'tongue',

'bg1', 'level1_holes',

'bg2', 'level2_stick1', 'level2_stick2', 'level2_stick3', 'level2_stick4', 'level2_stick5', 'level2_stick6',

'bg3', 'level3_foreground', 'level3_stick1', 'level3_stick2', 'level3_post1', 'level3_post2', 'level3_bridge1', 'level3_bridge2', 'level3_log',

'bg4', 'level4_catapult', 'level4_post', 'level4_platform', 'level4_swing', 'level4_ramps', 'level4_tree', 'level4_block1', 'level4_block2', 'level4_block3', 'level4_leaves',

'bg5', 'level5_foreground', 'level5_lift_platform', 'level5_spinner', 'level5_score',

'bg6', 'level6_ramp1', 'level6_ramp2', 'level6_ramp3', 'spider_egg', 'level6_leaf_100', 'level6_leaf_110', 'level6_leaf_120', 'bird_beetle',

'bg7', 'level7_bridge1', 'level7_bridge2', 'level7_bridge3', 'level7_ramp1',

'bg8', 'level8_foreground', 'level8_platform', 'level8_seesaw', 'level8_block', 'level8_block_log',

'bg9', 'level9_hammer', 'level9_hammer_gem', 'level9_post', 'level9_platform1', 'level9_platform2', 'level9_platform3', 'level9_toad_blocker', 'level9_breakable1', 'level9_breakable2', 'level9_breakable3', 'level9_crystal_bridge',

'level10_ui_middle', 'bg10', 'level10_foreground', 'level10_daisy', 'level10_daisy_small', 'level10_score', 'level10_penalty'
];
	for (var i = 0; i < images.length; i++) {
		game.load.image(images[i], 'images/' + images[i] + '.png');
	}
	game.load.image('pink', 'images/dung_pink.png');
	game.load.image('blue', 'images/dung_blue.png');
	game.load.image('green', 'images/dung_green.png');

	// load sprite sheets
	var spritesheets = ['btn_restart', 'btn_hint', 'btn_audio', 'btn_ok', 'btn_next', 'btn_select', 'btn_try_again', 'btn_close', 'btn_arrow', 'btn_fly_select_level', 'btn_fly_how_to_play', 'btn_fly_main_menu', 'beetle', 'beetle_enemy', 'beetle_splash', 'block_exploding', 'block_chipping', 'round_exploding', 'fly', 'snail', 'ant', 'spider', 'frog', 'lizard', 'ladybug', 'worms', 'bird', 'level10_flower'];
	for (i = 0; i < spritesheets.length; i++) {
		game.load.atlasJSONHash(spritesheets[i], 'images/' + spritesheets[i] + '.png', 'images/' + spritesheets[i] + '.json');
	}

	// load rube generated scenes
	for (i = 1; i < 11; i++) {
		game.load.text('level' + i, 'scenes/level' + i + '.json');
		if (i < 3) {
			game.load.text('help' + i, 'scenes/help' + i + '.json');
		}
	}

	// load seamless intro audio
	loadLoop('musicIntro', 'intro_music_loop');
	//loadLoop('flyLoop', 'fly_loop');//can't hear gap due to music
	function loadLoop(key, file) {
		if (game.device.iOS || game.device.macOS) {
			// M4A must be encoded with the Apple Lossless Audio Codec (ALAC)
			game.load.audio(key, ['sounds/' + file + '.m4a']);
		} else {
			// Firefox and Chrome will use OGG
			// IE11 will fall back to MP3, which will have a small gap at the end before replaying
			game.load.audio(key, ['sounds/' + file + '.ogg', 'sounds/' + file + '.mp3']);
		}
	}

	// load audio
	mp3ogg = ['musicGame:music_game', 'boink:boink', 'boinkReversed:boink_reversed', 'tryAgainSound:Menu_Magic10', 'flyShort1:fly_short', 'flyShort2:fly_short_2', 'flyLoop:fly_loop', 'popSound:Pop2', 'scrollSound:Beep_TextScroll4', 'dungGrab1:dung_grab1', 'dungGrab2:dung_grab2', 'ladybugSound:Insect_Wings', 'winSound:Menu_Magic02', 'loseSound:MagicAmulet_EnergyOff3', 'hintSound:Pickup_GemBells03', 'hintReadySound:Pickup_GemBells04', 'rockBreaking:rock_breaking', 'snailRetract:snail', 'leavesSound:Hit_Leaves01', 'shroomSound:mushroom', 'wormSound:CartoonCrab_Hurt1', 'antThrow:CartoonCrab_Hurt2', 'bumperSound:bumper', 'beetleEaten:Insect_Wasp_Hurt1', 'beetleEaten2:Insect_Wasp_Hurt5', 'catapultSound:catapult'];
	for (i = 0; i < mp3ogg.length; i++) {
		var mp3oggData = mp3ogg[i].split(":");
		game.load.audio(mp3oggData[0], ['sounds/' + mp3oggData[1] + '.mp3', 'sounds/' + mp3oggData[1] + '.ogg']);
	}

	// add preloader listeners
	game.load.onFileComplete.add(fileComplete, this);
	game.load.onLoadComplete.add(loadComplete, this);
}

// called after each filed is loaded
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
	//console.log("loaded " + cacheKey);
	// record preloader images loaded
	if (cacheKey.indexOf('preloader') != -1) {
		preloaderPartsLoaded++;
	}
	// once all preloader parts are loaded create preloader
	if (preloaderPartsLoaded == 4) {
		preloaderPartsLoaded = 0;
		preloader = game.add.group();
		// add bg
		preloader.add(game.add.image(0, 0, 'bg_preloader'));
		// add rotating dung
		var dung = game.add.image(512, 384, 'dung_preloader');
		dung.anchor.setTo(0.5, 0.5);
		preloader.add(dung);
		dung.update = function () {
				dung.angle += 2;
			}
			// add percent text
		preloader.percent = game.add.text(512, 363, '', {
			font: '35px d3_stonismregular',
			fill: '#FFFFFF'
		});
		preloader.add(preloader.percent);
		// add walking beetle
		var preloaderBeetle = game.add.sprite(310, 320, 'beetle_preloader');
		preloaderBeetle.animations.add('walk');
		preloaderBeetle.animations.play('walk', 10, true);
		preloader.addChild(preloaderBeetle);
		// add overlay
		preloader.add(game.add.image(0, 0, 'preloader_overlay'));
	}
	// update perecnt loaded
	//console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
	if (preloader) {
		preloader.percent.setText(progress + '%');
		preloader.percent.x = Math.round(512 - preloader.percent.width / 2);
	}
}

// called when preloading is complete
function loadComplete() {
	console.log('loadComplete');
	preloader.destroy();
}

function create() {
	console.log('create');

	// cookie
	//setCookie('levelsUnlocked', 1, 365);
	//setCookie('scores', scores, 365);
	var levelsUnlockedCookie = getCookie('levelsUnlocked');
	var scoresCookie = getCookie('scores');
	if (!levelsUnlockedCookie) {
		console.log('no cookie!');
		setCookie('levelsUnlocked', 1, 365);
		setCookie('scores', scores, 365);
	} else {
		console.log('cookie found!');
		levelsUnlocked = Number(levelsUnlockedCookie);
		scores = scoresCookie.replace(/, +/g, ",").split(",").map(Number);
		console.log('levelsUnlocked', levelsUnlocked);
		console.log('scores', scores, scores[0]);
	}

	// due to IE sound clipping issues adding all audio here
	for (i = 0; i < mp3ogg.length; i++) {
		var mp3oggData = mp3ogg[i].split(":");
		sounds[mp3oggData[0]] = game.add.audio(mp3oggData[0]);
	}
	sounds['musicIntro'] = game.add.audio('musicIntro');
	//sounds['flyLoop'] = game.add.audio('flyLoop');
	//sound.allowMultiple = true;

	// Enable Box2D physics
	game.physics.startSystem(Phaser.Physics.BOX2D);
	// startSystem on game screens only? can remove going back to splash with game.physics.destroy();
	//console.log('gravity', game.physics.box2d.gravity.y); //500 (10 in WCK * 50)
	//console.log('density', game.physics.box2d.density); //1
	//console.log('friction', game.physics.box2d.friction); //0.2
	// box appears on left and screws things up if using setBounds
	//game.world.setBounds(0, 0, 1600, 1200);
	//game.physics.box2d.setBoundsToWorld();
	// increase size of original dung beetle game world. 50 is old sized world. 70 is new.
	game.physics.box2d.setPTMRatio(50 * upscale);
	world = game.physics.box2d.world;

	// for debugging
	if (debug) {
		firstRun = false;
		instructionsSkip = true;
		levelsUnlocked = 10;
		// toggle box2d debug shapes on and off with space key
		game.physics.box2d.debugDraw.joints = true;
		var debugKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		debugKey.onDown.add(function () {
			if (!debug) {
				debug = true;
			} else {
				debug = false;
			}
		}, this);
	}

	makeSplash();

	//makeLevelSelect();
	/*makeUI();
	makeLevel();
	startGame();*/
}

function makeSplash() {
	splash = game.add.group();

	// background
	splash.add(game.add.image(0, 0, 'bg_splash'));

	// background grass layers
	var g1a = game.add.image(-240, 281, 'splash_grass_1');
	g1a.update = function () {
		g1a.x = g1a.x - 1.5;
		g1b.x = g1b.x - 1.5;
		if (g1a.x < -g1a.width) {
			g1a.x = g1a.x + g1a.width;
			g1b.x = g1b.x + g1b.width;
		}
	}
	splash.add(g1a);
	var g1b = game.add.image(g1a.x + g1a.width, 281, 'splash_grass_1');
	splash.add(g1b);

	var g2a = game.add.image(-143, 278, 'splash_grass_2');
	g2a.update = function () {
		g2a.x = g2a.x - 2;
		g2b.x = g2b.x - 2;
		if (g2a.x < -g2a.width) {
			g2a.x = g2a.x + g2a.width;
			g2b.x = g2b.x + g2b.width;
		}
	}
	splash.add(g2a);
	var g2b = game.add.image(g2a.x + g2a.width, 278, 'splash_grass_2');
	splash.add(g2b);

	var g3a = game.add.image(-240, 261, 'splash_grass_3');
	g3a.update = function () {
		g3a.x = g3a.x - 2.5;
		g3b.x = g3b.x - 2.5;
		if (g3a.x < -g3a.width) {
			g3a.x = g3a.x + g3a.width;
			g3b.x = g3b.x + g3b.width;
		}
	}
	splash.add(g3a);
	var g3b = game.add.image(g3a.x + g3a.width, 278, 'splash_grass_3');
	splash.add(g3b);

	// ground
	var b1 = game.add.image(0, 525, 'splash_ground');
	b1.update = function () {
		b1.x = b1.x - 3;
		b2.x = b2.x - 3;
		if (b1.x < -1024) {
			b1.x = b1.x + 1024;
			b2.x = b2.x + 1024;
		}
	}
	splash.add(b1);
	var b2 = game.add.image(1024, 525, 'splash_ground');
	splash.add(b2);

	// rotating dung
	var dung = game.add.image(823, 471, 'dung_splash');
	dung.update = function () {
		dung.angle += 2;
	}
	dung.anchor.setTo(0.5, 0.5);
	splash.add(dung);

	// walking beetle
	var beetle = game.add.sprite(520, 400, 'beetle_splash');
	beetle.animations.add('walk');
	beetle.animations.play('walk', 10, true);
	splash.addChild(beetle);

	// forground grass
	var g4 = game.add.image(1024, 74, 'splash_grass_foreground');
	g4.update = function () {
		g4.x = g4.x - 13;
		if (g4.x < -g4.width - 20) {
			g4.x = 1024;
		}
	}
	splash.add(g4);

	// overlay
	splash.add(game.add.image(0, 0, 'preloader_overlay'));

	// logo
	splash.add(game.add.image(7, 7, 'logo_splash'));

	// title
	var title = game.add.sprite(38, 78, 'dung_beetle_derby');
	splash.addChild(title);

	// audio toggle
	var btnAudio = game.add.sprite(973, 7, 'btn_audio');
	btnAudio.inputEnabled = true;
	btnAudio.input.useHandCursor = true;
	btnAudio.events.onInputUp.add(function () {
		if (!btnAudio.animations.currentFrame.index) {
			btnAudio.animations.frame = 1;
			game.sound.volume = 0;
		} else {
			btnAudio.animations.frame = 0;
			game.sound.volume = 1;
		}
	});
	splash.addChild(btnAudio);
	if (!game.sound.volume) {
		btnAudio.animations.frame = 1;
	}

	// how to play fly button
	var btn1 = game.add.image(263, 650, 'btn_fly_how_to_play');
	btn1.animations.add('fly');
	btn1.animations.play('fly', 20, true);
	btn1.hover = false;
	btn1.angl = 8.949;
	btn1.update = function () {
		if (btn1.hover) {
			btn1.y = 645 + Math.sin(btn1.angl) * 10; //range
			btn1.angl = btn1.angl + 0.05; //speed
			//console.log('angle', btn1.angl, 'y', btn1.y);
		}
	}
	btn1.inputEnabled = true;
	btn1.input.useHandCursor = true;
	btn1.events.onInputUp.add(function () {
		btn1.inputEnabled = false;
		makeHowToPlay();
		sounds['boink'].play();
	});
	splash.add(btn1);
	splash.howToPlay = btn1;

	// select level fly button
	var btn2 = game.add.image(606, 650, 'btn_fly_select_level');
	btn2.animations.add('fly');
	btn2.animations.play('fly', 20, true);
	btn2.hover = false;
	btn2.angl = 8.949;
	btn2.update = function () {
		if (btn2.hover) {
			btn2.y = 645 + Math.sin(btn2.angl) * 10; //range
			btn2.angl = btn2.angl + 0.04; //speed
		}
	}
	btn2.inputEnabled = true;
	btn2.input.useHandCursor = true;
	btn2.events.onInputUp.add(function () {
		if (howToPlay) {
			howToPlay.destroyInteractive();
			howToPlay.destroy();
		}
		splash.destroy();
		makeLevelSelect();
		sounds['boink'].play();
	});
	splash.add(btn2);
	splash.selectLevel = btn2;

	// only animate stuff in on first run
	if (firstRun) {
		firstRun = false;
		var beetleTween = game.add.tween(beetle).from({
			x: -633
		}, 5000, Phaser.Easing.Cubic.Out, true);
		var dungTween = game.add.tween(dung).from({
			x: -330
		}, 5000, Phaser.Easing.Cubic.Out, true);
		var logoTween = game.add.tween(title).from({
			y: -359
		}, 1500, Phaser.Easing.Bounce.Out, true);
		logoTween.pause();
		var fly1Tween = game.add.tween(btn1).from({
			y: 869
		}, 2000, Phaser.Easing.Back.Out, true);
		fly1Tween.pause();
		var fly2Tween = game.add.tween(btn2).from({
			y: 869
		}, 2000, Phaser.Easing.Back.Out, true, 500);
		fly2Tween.pause();
		// timed stuff
		game.time.events.add(2000, function () {
			fly1Tween.resume();
			fly2Tween.resume();
			fly1Tween.onComplete.add(function () {
				splash.howToPlay.hover = true;
			});
			fly2Tween.onComplete.add(function () {
				splash.selectLevel.hover = true;
			});
		});
		game.time.events.add(2200, function () {
			sounds['flyShort2'].play();
		});
		game.time.events.add(2700, function () {
			sounds['flyShort2'].play();
		});
		game.time.events.add(3000, function () {
			logoTween.resume();
		});
		game.time.events.add(3500, function () {
			sounds['boink'].play();
		});
	} else {
		splash.howToPlay.hover = true;
		splash.selectLevel.hover = true;
	}

	if (music) {
		music.stop();
	}
	music = sounds['musicIntro'];
	music.volume = musicVolume;
	//console.log(music);
	//music.play('', 0, 1, true);
	music.loopFull();
	/*music.onLoop.add(function() {
	console.log('looped');
	}, this);*/
	//addMarker(name, start, duration, volume, loop)

	/*music.addMarker('loop', 0, 7.594666666666667, .25, true);
	music.play('loop');*/
	/*music.onStop.add(function() {
	console.log('complete');
	}, this);*/
}

// make how to play popup
function makeHowToPlay() {

	howToPlay = game.add.group();
	howToPlay.x = 61;
	howToPlay.y = 168;
	// add popup
	howToPlay.add(game.add.image(0, 0, 'how_to_play'));
	// add close buttons
	var btnClose = game.add.sprite(847, 3, 'btn_close_dung');
	btnClose.inputEnabled = true;
	btnClose.input.useHandCursor = true;
	howToPlay.add(btnClose);
	btnClose.events.onInputUp.add(function () {
		howToPlay.destroyInteractive();
		howToPlay.destroy();
		splash.howToPlay.inputEnabled = true;
		sounds['popSound'].play();
	});
	var btnClose2 = game.add.sprite(358, 462, 'btn_close');
	btnClose2.inputEnabled = true;
	btnClose2.input.useHandCursor = true;
	howToPlay.add(btnClose2);
	btnClose2.events.onInputOver.add(function () {
		btnClose2.animations.frame = 1;
	});
	btnClose2.events.onInputOut.add(function () {
		btnClose2.animations.frame = 0;
	});
	btnClose2.events.onInputDown.add(function () {
		btnClose2.animations.frame = 2;
	});
	btnClose2.events.onInputUp.add(function () {
		howToPlay.destroyInteractive();
		howToPlay.destroy();
		splash.howToPlay.inputEnabled = true;
		splash.howToPlay.input.useHandCursor = true;
		sounds['popSound'].play();
	});
	// add arrow buttons
	var btnLeft = game.add.sprite(0, 230, 'btn_arrow');
	btnLeft.visible = false;
	btnLeft.inputEnabled = true;
	btnLeft.input.useHandCursor = true;
	howToPlay.add(btnLeft);
	btnLeft.events.onInputOver.add(function () {
		btnLeft.animations.frame = 1;
	});
	btnLeft.events.onInputOut.add(function () {
		btnLeft.animations.frame = 0;
	});
	btnLeft.events.onInputDown.add(function () {
		btnLeft.animations.frame = 2;
	});
	btnLeft.events.onInputUp.add(function () {
		if (howToPlay.page > 1) {
			howToPlay.page--;
			howToPlay.content.destroy();
			howToPlay.content = game.add.sprite(67, 72, 'how_to_play_' + howToPlay.page);
			howToPlay.add(howToPlay.content);
		}
		if (howToPlay.page == 1) {
			btnLeft.visible = false;
		}
		btnRight.visible = true;
		btnRight.animations.frame = 1;
		addInteractives();
		sounds['scrollSound'].play();
	});
	var btnRight = game.add.sprite(894, 230, 'btn_arrow');
	btnRight.scale.x = -1;
	btnRight.inputEnabled = true;
	btnRight.input.useHandCursor = true;
	howToPlay.add(btnRight);
	btnRight.events.onInputOver.add(function () {
		btnRight.animations.frame = 1;
	});
	btnRight.events.onInputOut.add(function () {
		btnRight.animations.frame = 0;
	});
	btnRight.events.onInputDown.add(function () {
		btnRight.animations.frame = 2;
	});
	btnRight.events.onInputUp.add(function () {
		if (howToPlay.page < 6) {
			howToPlay.page++;
			howToPlay.content.destroy();
			howToPlay.content = game.add.sprite(67, 72, 'how_to_play_' + howToPlay.page);
			howToPlay.add(howToPlay.content);
		}
		if (howToPlay.page == 6) {
			btnRight.visible = false;
		}
		btnLeft.visible = true;
		btnLeft.animations.frame = 1;
		addInteractives();
		sounds['scrollSound'].play();
	});
	// add content
	howToPlay.page = 1;
	howToPlay.content = game.add.sprite(67, 72, 'how_to_play_1');
	howToPlay.add(howToPlay.content);

	function addInteractives() {
		howToPlay.destroyInteractive();
		if (howToPlay.page == 2) {
			levelScene = new Phaser.Physics.Box2D.RubeScene('help1');
			levelScene.load(0, ptm(102)); //offsetX, offsetY, _afterLoadFunction ptm(yShift)
			g = game.add.group();
			addImages();
			game.input.onDown.add(getBodies, this);
		} else if (howToPlay.page == 3) {
			levelScene = new Phaser.Physics.Box2D.RubeScene('help2');
			levelScene.load(0, ptm(102)); //offsetX, offsetY, _afterLoadFunction ptm(yShift)
			g = game.add.group();
			addImages(['ladybug3'], ['spider']);
			getSprite('spider').scale.x = getSprite('spider').scale.y = .65;
			body('ladybug3').wakeup = body('berry3');
			game.input.onDown.add(getBodies, this);
		}
	}

	howToPlay.destroyInteractive = function () {
		if (levelScene) {
			levelScene.clear();
			g.destroy();
			game.input.onDown.removeAll();
		}
	}


}

// make level select screen
function makeLevelSelect() {
	// keep things crisp
	game.renderer.renderSession.roundPixels = true;

	levelSelect = game.add.group();

	levelSelect.add(game.add.image(0, 0, 'bg_level_select'));
	levelSelect.add(game.add.image(7, 7, 'logo'));

	// audio toggle
	var btnAudio = game.add.sprite(973, 7, 'btn_audio');
	btnAudio.inputEnabled = true;
	btnAudio.input.useHandCursor = true;
	btnAudio.events.onInputUp.add(function () {
		if (!btnAudio.animations.currentFrame.index) {
			btnAudio.animations.frame = 1;
			game.sound.volume = 0;
		} else {
			btnAudio.animations.frame = 0;
			game.sound.volume = 1;
		}
	});
	levelSelect.addChild(btnAudio);
	if (!game.sound.volume) {
		btnAudio.animations.frame = 1;
	}

	// generate level select buttons
	//levelSelect.locked = [];
	var c = 512; //center
	var t = 200; // top
	var h = 250; //horizontal spacing
	var v = 170; //vertical spacing
	var x = [c - h, c, c + h, c - h * 1.5, c - h * .5, c + h * .5, c + h * 1.5, c - h, c, c + h]; //x coordinates
	var y = [t, t, t, t + v, t + v, t + v, t + v, t + v * 2, t + v * 2, t + v * 2]; //y coordinates
	var totalScore = 0;
	for (var i = 0; i < 10; i++) {
		var btn = game.add.group();
		btn.x = x[i];
		btn.y = y[i];
		levelSelect.add(btn);

		btn.level = i + 1;

		btn.preview = game.add.image(0, 0, 'level_preview_' + btn.level);
		btn.preview.anchor.setTo(0.5, 0.5);
		btn.add(btn.preview);

		btn.dung = game.add.image(0, 0, 'level_select_dung');
		btn.dung.anchor.setTo(0.5, 0.5);
		btn.add(btn.dung);

		btn.outline = game.add.image(0, 0, 'level_select_dung_outline');
		btn.outline.anchor.setTo(0.5, 0.5);
		btn.add(btn.outline);

		btn.lock = game.add.image(0, 0, 'lock');
		btn.lock.anchor.setTo(0.5, .7);
		btn.add(btn.lock);

		if (scores[i]) {
			btn.points = game.add.image(45, -20, 'points');
			btn.add(btn.points);
			btn.score = game.add.text(35, -60, scores[i], {
				font: '35px d3_stonismregular',
				fill: '#FFFFFF'
			});
			btn.score.stroke = '#996600';
			btn.score.strokeThickness = 10;
			btn.score.x = btn.points.x + btn.points.width - btn.score.width + 11;
			btn.add(btn.score);
		}

		btn.name = game.add.image(0, 30, 'level_name_' + btn.level);
		btn.name.anchor.setTo(0.5, 0);
		btn.add(btn.name);

		if (i < levelsUnlocked) {
			btn.locked = false;
			btn.lock.visible = false;
		} else {
			btn.locked = true;
			btn.lock.visible = true;
		}

		btn.outline.inputEnabled = true;
		btn.outline.input.useHandCursor = true;
		btn.outline.events.onInputOver.add(function (btn) {
			btn.parent.dung.alpha = 0;
			btn.parent.lock.alpha = 0.5;
			//btn.parent.bug.visible = true;
		});
		btn.outline.events.onInputOut.add(function (btn) {
			btn.parent.dung.alpha = 1;
			btn.parent.lock.alpha = 1;
		});
		btn.outline.events.onInputDown.add(function (btn) {
			if (!btn.parent.locked) {
				//game.time.events.remove(levelSelect.ipadFix);
				level = btn.parent.level;
				levelSelect.destroy();
				makeUI();
				makeLevel();
				instructionsShown = false;
				startGame();
				music.stop();
				music = sounds['musicGame'];
				music.play('', 0, 1, true);
				music.volume = musicVolume;
			} else {
				// need for ipad
				btn.parent.dung.alpha = 0;
				btn.parent.lock.alpha = 0.5;
			}
			// same sound plays when beetle immediately grabs dung on level 10
			if (level < 10) {
				sounds['dungGrab1'].play();
			}
		});
		totalScore += scores[i];
	}

	// show total score if at least one level has a score
	if (totalScore) {
		var scoreText1 = game.add.text(37, 722, 'Total Score:', {
			font: '21px d3_stonismregular',
			fill: '#FFFFFF'
		});
		scoreText1.stroke = '#996600';
		scoreText1.strokeThickness = 10;
		//x, y, color, blur, shadowStroke, shadowFill
		scoreText1.setShadow(5, 5, 'rgba(0,0,0,0.2)', 5, true, false);
		levelSelect.add(scoreText1);

		var scoreText2 = game.add.text(scoreText1.x + scoreText1.width - 5, 705, totalScore, {
			font: '42px d3_stonismregular',
			fill: '#FFFFFF'
		});
		scoreText2.stroke = '#996600';
		scoreText2.strokeThickness = 10;
		scoreText2.setShadow(5, 5, 'rgba(0,0,0,0.2)', 5, true, false);
		levelSelect.add(scoreText2);
	}

	// add fly buttons
	var btn1 = game.add.image(435, 650, 'btn_fly_main_menu');
	btn1.animations.add('fly');
	btn1.animations.play('fly', 20, true);
	btn1.angl = 0;
	btn1.update = function () {
		btn1.y = 645 + Math.sin(btn1.angl) * 10; //range
		btn1.angl = btn1.angl + 0.05; //speed
	}
	btn1.inputEnabled = true;
	btn1.input.useHandCursor = true;
	btn1.events.onInputUp.add(function () {
		levelSelect.destroy();
		makeSplash();
		sounds['boink'].play();
	});
	levelSelect.add(btn1);
}

// make ui at top of game screen
function makeUI() {

	// top ui
	ui = game.add.group();
	ui.addChild(game.add.image(0, 0, 'ui_branch'));

	// level indicator
	ui.levelDung = game.add.image(10, 15, 'dung_30');
	ui.addChild(ui.levelDung);
	ui.levelNum = game.add.text(ui.levelDung.x + 22, ui.levelDung.y + 12, '1', {
		font: '21px d3_stonismregular',
		fill: '#FFFFFF'
	});
	ui.levelNum.setNum = function (num) {
		ui.levelNum.setText(num);
		ui.levelNum.x = Math.round(ui.levelDung.x + 22 - ui.levelNum.width / 2);
	}
	ui.addChild(ui.levelNum);

	// middle section
	if (level == 5 || level == 10) {
		ui.middle = game.add.image(345, 17, 'level10_ui_middle');
		var btnRestartX = 157;
		ui.btnCountdownX = 98;
	} else {
		ui.middle = game.add.image(365, 17, 'ui_middle');
		var btnRestartX = 117;
		ui.btnCountdownX = 59;
	}
	ui.addChild(ui.middle);

	if (level == 5 || level == 10) {
		ui.dungLeftNum = game.add.text(ui.middle.x + 25, ui.middle.y + 12, '0', {
			font: '18px d3_stonismregular',
			fill: '#FFFFFF'
		});
		ui.dungLeftNum.setNum = function (num) {
			ui.dungLeftNum.setText(num);
			ui.dungLeftNum.x = Math.round(ui.middle.x + 25 - ui.dungLeftNum.width / 2);
		}
		ui.dungLeftNum.setNum(20);
		ui.addChild(ui.dungLeftNum);
	}

	// countdown / leve 10 score text
	ui.countdownNum = game.add.text(ui.middle.x + ui.btnCountdownX, ui.middle.y + 10, '600', {
		font: '28px d3_stonismregular',
		fill: '#333333'
	});
	ui.countdownNum.setNum = function (num) {
		ui.countdownNum.setText(num);
		ui.countdownNum.x = Math.round(ui.middle.x + ui.btnCountdownX - ui.countdownNum.width / 2);
	}
	ui.addChild(ui.countdownNum);

	// restart button
	var btnRestart = game.add.image(ui.middle.x + btnRestartX, ui.middle.y + 4, 'btn_restart');
	btnRestart.inputEnabled = true;
	btnRestart.input.useHandCursor = true;
	btnRestart.events.onInputOver.add(function () {
		btnRestart.animations.frame = 1;
	});
	btnRestart.events.onInputOut.add(function () {
		btnRestart.animations.frame = 0;
	});
	btnRestart.events.onInputDown.add(function () {
		btnRestart.animations.frame = 2;
	});
	btnRestart.events.onInputUp.add(function () {
		btnRestart.animations.frame = 0;
		restartGame();
		sounds['tryAgainSound'].play();
	});
	ui.addChild(btnRestart);

	// hint button
	ui.btnHint = game.add.sprite(btnRestart.x + 138, btnRestart.y, 'btn_hint');
	ui.btnHint.inputEnabled = true;
	ui.btnHint.input.useHandCursor = true;
	ui.btnHint.events.onInputUp.add(function () {
		ui.btnHint.inputEnabled = false;
		ui.btnHint.animations.frame = 0;
		//hintPopup('Making things happen in a certain sequence is key not only to this level, but to the rest of the game.');
		//updateFunctions.push(function () {
		hintPopup(hints[hintNum % hints.length]);
		//});
		hintNum++;
		sounds['hintSound'].play();
	});
	ui.btnHint.inputEnabled = false;
	ui.addChild(ui.btnHint);

	// home button
	ui.btnHome = game.add.image(916, 15, 'btn_home');
	ui.btnHome.inputEnabled = true;
	ui.btnHome.input.useHandCursor = true;
	ui.btnHome.events.onInputUp.add(function () {
		console.log('btnHome');
		destroyGame();
		makeSplash();
		instructionsShowing = false;
		//makeLevelSelect();
		sounds['boinkReversed'].play();
	});
	ui.addChild(ui.btnHome);

	// audio toggle
	var btnAudio = game.add.sprite(970, ui.btnHome.y, 'btn_audio');
	btnAudio.inputEnabled = true;
	btnAudio.input.useHandCursor = true;
	btnAudio.events.onInputUp.add(function () {
		if (!btnAudio.animations.currentFrame.index) {
			btnAudio.animations.frame = 1;
			game.sound.volume = 0;
		} else {
			btnAudio.animations.frame = 0;
			game.sound.volume = 1;
		}
	});
	ui.addChild(btnAudio);
	if (!game.sound.volume) {
		btnAudio.animations.frame = 1;
	}
}

function makePopup(str) {
	console.log('makePopup', str);

	var popup = game.add.group();
	popup.x = 278;
	popup.y = 100;
	ui.add(popup);
	//game.world.bringToTop(popup);

	var shadow = game.add.group();
	popup.add(shadow);
	popup.add(game.add.sprite(0, 0, 'popup'));
	var btnClose = game.add.sprite(435, 4, 'btn_close_dung');
	btnClose.inputEnabled = true;
	btnClose.input.useHandCursor = true;
	popup.add(btnClose);

	var btn;

	if (str == 'instructions') {
		shadow.add(game.add.sprite(0, 0, 'popup_shadow'));
		popup.add(game.add.sprite(0, 0, 'popup_level' + level));
		btn = game.add.sprite(144, 292, 'btn_ok');
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputUp.add(function () {
			btn.animations.frame = 0;
			startTimers();
			if (level == 5 || level == 10) {
				g.go();
			}
			instructionsShowing = false;
			popup.destroy();
			sounds['boinkReversed'].play();
		});
		popup.add(btn);

		btnClose.events.onInputUp.add(function () {
			startTimers();
			if (level == 5 || level == 10) {
				g.go();
			}
			instructionsShowing = false;
			popup.destroy();
		});

	} else if (str == 'win') {

		if (level < 10) {
			shadow.add(game.add.sprite(0, 0, 'popup_shadow'));
		} else {
			shadow.add(game.add.sprite(0, 0, 'popup_shadow_wide'));
		}

		var txt;
		var unlockTxt = '';
		if (levelsUnlocked == level) {
			if (level < 10) {
				unlockTxt = 'You have unlocked the next level!';
				levelsUnlocked++;
				setCookie('levelsUnlocked', levelsUnlocked, 365);
			} else {
				if (!gameWon) {
					unlockTxt = 'Congratulations! You have completed the game!';
					gameWon = true;
				}
			}
			if (level % 5 != 0) {
				unlockTxt = '\n' + unlockTxt;
			} else {
				unlockTxt = ' ' + unlockTxt;
			}
		}

		// score
		var levelScore;
		if (level % 5 != 0) {
			levelScore = g.timeLeft;
		} else {
			levelScore = g.score;
		}
		console.log('levelScore', levelScore);
		if (levelScore > scores[level - 1]) {
			scores[level - 1] = levelScore;
			setCookie('scores', scores, 365);
		}

		var totalScore = 0;
		for (var i = 0; i < 10; i++) {
			totalScore += scores[i];
		}

		if (level == 5 || level == 10) {
			popup.add(game.add.sprite(0, 0, 'popup_win_special'));
			txt = g.goalsScored + " of " + g.dungBalls + " dung balls fell into the right burrows. That's " + g.percentCorrect + "%!" + unlockTxt + "\n\n" + facts[level - 1];
		} else {
			popup.add(game.add.sprite(0, 0, 'popup_win'));
			txt = 'Great job! Your total game score is: ' + totalScore + unlockTxt + '\n\n' + facts[level - 1];
		}

		var text = game.add.text(45, 69, txt, {
			font: '19px muliregular',
			fill: '#333333',
			wordWrap: true,
			wordWrapWidth: 385,
			lineSpacing: -50
		});
		text.lineSpacing = -4;
		popup.addChild(text);

		if (level < 10) {
			btn = game.add.sprite(144, 292, 'btn_next');
		} else {
			btn = game.add.sprite(127, 292, 'btn_select');
		}

		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputUp.add(function () {
			btn.animations.frame = 0;
			popup.onClose();
		});
		popup.add(btn);

		btnClose.events.onInputUp.add(function () {
			popup.onClose();
		});

		popup.onClose = function () {
			if (level < 10) {
				nextLevel();
				popup.destroy();
			} else {
				destroyGame();
				makeLevelSelect();
				if (music) {
					music.stop();
				}
				music = sounds['musicIntro'];
				music.play('', 0, 1, true);
				music.volume = musicVolume;
			}
			sounds['boinkReversed'].play();
		}
		sounds['winSound'].play();

	} else if (str == 'lose') {

		if (time) {
			popup.add(game.add.sprite(0, 0, 'popup_fail'));
			var txt;
			if (level == 5 || level == 10) {
				txt = g.goalsScored + " of " + g.dungBalls + " dung balls fell into the right burrows. That's " + g.percentCorrect + "%! You need to get 60% in order to complete this level. Better luck next time!";
			} else {
				txt = 'Your dung beetle will have to do without poo this time around. Keep trying!';
			}
		} else {
			txt = 'You ran out of time. Keep trying!';
			popup.add(game.add.sprite(0, 0, 'popup_times_up'));
		}

		var text = game.add.text(45, 69, txt, {
			font: '19px muliregular',
			fill: '#333333',
			wordWrap: true,
			wordWrapWidth: 375,
			lineSpacing: -50
		});
		text.lineSpacing = -4;
		popup.addChild(text);

		var hintText = game.add.text(45, 205, 'Use the hint button for tips. It will become active after one minute.', {
			font: '19px muliregular',
			fill: '#333333',
			wordWrap: true,
			wordWrapWidth: 375,
			lineSpacing: -50
		});
		hintText.lineSpacing = -4;
		popup.addChild(hintText);

		btn = game.add.sprite(144, 292, 'btn_try_again');
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputUp.add(function () {
			popup.destroy();
			restartGame();
			sounds['boinkReversed'].play();
			sounds['tryAgainSound'].play();
		});
		popup.add(btn);

		btnClose.events.onInputUp.add(function () {
			popup.destroy();
			restartGame();
			sounds['boinkReversed'].play();
			sounds['tryAgainSound'].play();
		});

		sounds['loseSound'].play();
	}

	btn.events.onInputOver.add(function () {
		btn.animations.frame = 1;
	});
	btn.events.onInputOut.add(function () {
		btn.animations.frame = 0;
	});
	btn.events.onInputDown.add(function () {
		btn.animations.frame = 2;
	});

}

function hintPopup(hint) {
	var hintPopup = game.add.group();
	hintPopup.x = 328;
	hintPopup.y = 150;

	hintPopup.addChild(game.add.sprite(0, 0, 'hint_popup'));

	var hintText = game.add.text(64, 76, hint, {
		font: '18px muliregular',
		fill: '#ffffff',
		wordWrap: true,
		wordWrapWidth: 250,
		lineSpacing: -50
	});
	hintText.lineSpacing = -4;
	hintPopup.addChild(hintText);

	var btnClose = game.add.image(292, 17, 'btn_close_dung');
	btnClose.inputEnabled = true;
	btnClose.input.useHandCursor = true;
	btnClose.events.onInputUp.add(function () {
		ui.hintPopup.destroy();
		ui.hintPopup = null;
		ui.hintShowing = false;
		startHintTimer();
		sounds['popSound'].play();
	});
	hintPopup.addChild(btnClose);

	ui.hintPopup = hintPopup;
	ui.hintShowing = true;
	ui.addChild(hintPopup);
}

function startHintTimer() {
	g.hintSeconds = 0;
	g.hintTimer = game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
		g.hintSeconds++;
		//console.log(g.hintSeconds);
		ui.btnHint.animations.frame = g.hintSeconds;
		if (ui.btnHint.animations.currentFrame.index == hintSeconds - 1) {
			game.time.events.remove(g.hintTimer);
			ui.btnHint.inputEnabled = true;
			ui.btnHint.input.useHandCursor = true;
			sounds['hintReadySound'].play();
		}
	}, this);
}

function nextLevel() {
	level++;
	instructionsShown = false;
	restartGame();
}

function restartGame() {
	console.log('restartGame');
	destroyGame();
	makeUI();
	makeLevel();
	startGame();
}

function startGame() {

	// can't use - need sub pixels movement
	game.renderer.renderSession.roundPixels = false;

	// move ui to top
	game.world.bringToTop(ui);

	if (g.scoringMethod == 'time') {
		g.timeLeft = 600;
		ui.countdownNum.setNum(g.timeLeft);
	} else {
		ui.countdownNum.setNum(g.score);
		ui.dungLeftNum.setNum(g.dungBallsToDrop);
	}

	instructionsShowing = false;
	if (instructionsShown || instructionsSkip) {
		startTimers();
	} else {
		makePopup('instructions');
		//makePopup('win');
		//time = 0;
		//makePopup('lose');
		instructionsShowing = true;
		instructionsShown = true;
	}

	// handles box2d object interactivity
	game.input.onDown.add(getBodies, this);
}

function startTimers() {

	startHintTimer();

	if (g.scoringMethod == 'time') {
		g.gameTimer = game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
			g.timeLeft--;
			ui.countdownNum.setNum(g.timeLeft);
			if (!g.timeLeft) {
				console.log('out of time!');
			}
		}, this);
	}
}

function destroyGame() {
	game.time.removeAll();
	game.tweens.removeAll();
	game.input.onDown.removeAll();

	if (g.flyLoop) {
		g.flyLoop.stop();
	}

	// destroy objects
	if (beetle) {
		beetle.destroy();
		beetle = null;
	}
	if (beetle2) {
		beetle2.destroy();
		beetle2 = null;
	}
	if (g.beetleController1) {
		g.beetleController1.destroy();
		g.beetleController1 = null;
	}
	if (g.beetleController2) {
		g.beetleController2.destroy();
		g.beetleController2 = null;
	}
	if (g.lift1) {
		g.lift1.destroy();
		g.lift1 = null;
	}
	if (g.lift2) {
		g.lift2.destroy();
		g.lift2 = null;
	}
	if (g.lift3) {
		g.lift3.destroy();
		g.lift3 = null;
	}
	for (var i = 0; i < ants.length; i++) {
		var obj = ants[i];
		// delete references
		delete obj.ant.body;
		delete obj.ant.sensor
			// destroy object
		obj = null;
	}
	ants = [];

	// destroy references (may not be necessary)
	if (dung) {
		dung = null;
	}
	if (dungJoint) {
		dungJoint = null;
	}
	if (wheel) {
		wheel = null;
	}

	/*for (var member in g) {
	console.log('obj', g[member]);
	delete g[member];
	}*/

	ui.destroy();

	if (g.destroySpecial) {
		g.destroySpecial();
	}

	g.destroy(); // does not null objects!
	levelScene.clear();

	// contain box2d hayware scenario
	game.physics.box2d.clear();//Clears all bodies from the simulation, resets callbacks.
	game.physics.box2d.reset();//Clears all bodies from the simulation, resets callbacks.

	console.log('destroyed');
}

function makeLevel() {
	console.log('makeLevel');

	// reset stuff
	updateFunctions = [];
	hintNum = 0;

	ui.levelNum.setNum(level);

	// add game group
	g = game.add.group();
	// add background
	g.background = game.add.image(0, 0, 'bg' + level);
	g.addChild(g.background);

	// load rube generated level
	levelScene = new Phaser.Physics.Box2D.RubeScene('level' + level);
	// amount level is pushed downward
	var yShifts = [75, 20, 75, 75, 50, 75, 50, 50, 75, 75];
	yShift = yShifts[level - 1];
	levelScene.load(0, ptm(yShift)); //offsetX, offsetY, _afterLoadFunction

	g.score = 0;

	if (level == 1) {
		//	 _       _____   _     _   _____   _            ___
		//	| |     | ____| | |   / / | ____| | |          |_  |
		//	| |     | |__   | |  / /  | |__   | |            | |
		//	| |     |  __|  | | / /   |  __|  | |            | |
		//	| |___  | |___  | |/ /    | |___  | |___         | |
		//	|_____| |_____| |___/     |_____| |_____|        |_|
		//
		// BERRY SIMPLE

		g.scoringMethod = 'time';
		hints = new Array("A perfect fit will keep the beetle from falling into a pit.", "Making things happen in a certain order is the key to this level, (and the rest of the game).");

		dung = body('dung');
		wheel = body('wheel');

		addImages(['ladybug2', 'ladybug3']); //flip, top

		beetle = new Beetle('wheel', 8, -6);
		grabDung(wheel, dung);

		// wake up dung when ladybug flies away
		body('ladybug1').wakeup = body('berry1');
		body('ladybug2').wakeup = body('berry2');
		body('ladybug3').wakeup = body('berry3');

		g.addChild(game.add.sprite(464, 534 + yShift, 'level1_holes'));

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			game.time.removeAll();
			makePopup('win');
		}, this);

		// level failed
		dung.setBodyContactCallback(body('sensorFail'), function () {
			dung.setBodyContactCallback(body('sensorFail')); //removes
			game.time.removeAll();
			makePopup('lose');
		}, this);

	} else if (level == 2) {
		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          /___  \
		//	| |     | |__   | |  / /  | |__   | |           ___| |
		//	| |     |  __|  | | / /   |  __|  | |          /  ___/
		//	| |___  | |___  | |/ /    | |___  | |___       | |___
		//	|_____| |_____| |___/     |_____| |_____|      |_____|
		//
		// TOPSY TURDSY

		g.scoringMethod = 'time';
		hints = new Array("A slanted stick will surely get the dung rolling in the right direction.", "If the fly can't see the dung ball, it won't steal the dung ball.", "Although rocks are fun to break, you don't have to go click crazy to solve this level.");

		g.flyLoop = sounds['flyLoop'];
		g.flyLoop.play('', 0, 1, true);

		dung = body('dung');
		wheel = body('wheel');
		g.flyIsBlocked = false;

		addImages([], ['dung', 'fly']); //flip, top

		beetle = new Beetle('wheel', 8, -6);
		beetle.angle = 6;

		// stick blocks fly
		body('stick4').setBodyContactCallback(body('sensorFlyBlocked'), function () {
			body('stick4').setBodyContactCallback(body('sensorFlyBlocked')); //removes
			console.log('fly blocked');
			g.flyIsBlocked = true;
		});

		// fly grabs dung
		getSprite('fly').anchor.setTo(0.46, 0.5); //adjustment to center on dung
		getSprite('fly').animations.play('fly', 20, true);
		dung.setBodyContactCallback(body('sensorFly'), function () {
			dung.setBodyContactCallback(body('sensorFly')); //removes
			updateFunctions.push(function () {
				console.log('dung hit sensorFly');
				if (!g.flyIsBlocked) {
					body('fly').sensor = true;
					body('fly').kinematic = true;
					getSprite('fly').animations.play('fly', 20, true);
					// fly to dung
					var grabTween = game.add.tween(body('fly')).to({
						x: dung.x,
						y: dung.y
					}, 200, Phaser.Easing.Linear.None, true);
					// chase dung by updating tween
					grabTween.onUpdateCallback(function () {
						grabTween.updateTweenData('vEnd', {
							x: dung.x,
							y: dung.y - 30
						});
					});
					// when dung is grabbed fly away with it
					grabTween.onComplete.add(function () {
						dung.static = true;
						dung.kinematic = true;
						var leaveTween = game.add.tween(body('fly')).to({
							x: body('flyTo').x,
							y: body('flyTo').y
						}, 500, Phaser.Easing.Quartic.In, true);
						leaveTween.onComplete.add(function () {
							getSprite('fly').animations.stop();
							game.time.removeAll();
							makePopup('lose');
						});
						game.add.tween(body('dung')).to({
							x: body('flyTo').x,
							y: body('flyTo').y + 30
						}, 500, Phaser.Easing.Quartic.In, true);
					});
				}
			});
			g.flyLoop.stop();
			sounds['flyShort1'].play();
		}, this);

		// grab dung when it moves past beetle
		dung.setBodyContactCallback(wheel, function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(wheel); //removes
				updateFunctions.push(function () {
					// dung moves fast so using fixed distance based on sensor so it's close to beetle
					grabDung(wheel, dung, Math.sqrt(Math.pow(body('dungDist').x - wheel.x, 2) + Math.pow(body('dungDist').y - wheel.y, 2)));
					wheel.sensor = false;
					wheel.static = false;
				});
			}
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			console.log('level complete');
			getJoint('motor').EnableMotor(false);
			game.time.removeAll();
			makePopup('win');
		}, this);

		// level failed
		dung.setBodyContactCallback(body('sensorFail'), function () {
			dung.setBodyContactCallback(body('sensorFail')); //removes
			console.log('level failed');
			getJoint('motor').EnableMotor(false);
			game.time.removeAll();
			makePopup('lose');
		}, this);

	} else if (level == 3) {
		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          |___  |
		//	| |     | |__   | |  / /  | |__   | |             _| |
		//	| |     |  __|  | | / /   |  __|  | |            |_  {
		//	| |___  | |___  | |/ /    | |___  | |___        ___| |
		//	|_____| |_____| |___/     |_____| |_____|      |_____/
		//
		// DUNG CROSSING
		// had to tweak density of post2 to create fail

		g.scoringMethod = 'time';
		hints = new Array("First, every bridge needs strong supports to hold it up.", "There are certain STEPS you need to take to drop the left post into place.", "Rocks in mid air? Get them out of there!", "It only takes one click to drop 3 rocks and 2 sticks. That will do the trick!", "Round rocks make perfect wheels.");

		wheel = body('wheel');
		dung = body('dung');

		addImages(); //flip, top

		beetle = new Beetle('wheel', 8, -6);
		beetle.animations.play('roll');
		grabDung(wheel, dung);

		g.addChild(game.add.sprite(0, 405, 'level3_foreground'));

		// level failed
		dung.setBodyContactCallback(body('sensorFail'), function () {
			dung.setBodyContactCallback(body('sensorFail')); //removes
			getJoint('motor').EnableMotor(false);
			game.time.removeAll();
			makePopup('lose');
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			getJoint('motor').EnableMotor(false);
			game.time.removeAll();
			makePopup('win');
		}, this);

	} else if (level == 4) {
		//	 _       _____   _     _   _____   _            _   _
		//	| |     | ____| | |   / / | ____| | |          | | | |
		//	| |     | |__   | |  / /  | |__   | |          | |_| |
		//	| |     |  __|  | | / /   |  __|  | |          \___  |
		//	| |___  | |___  | |/ /    | |___  | |___           | |
		//	|_____| |_____| |___/     |_____| |_____|          |_|
		//
		// SOARING SNAILS (old 9)

		g.scoringMethod = 'time';
		hints = new Array("Work your way up and you'll have plenty of luck.", "Swing it to win it.", "Break a staircase towards a friend, not a foe.");

		dung = body('dung');
		wheel = body('wheel');

		g.addChild(game.add.sprite(849, 11 + yShift - 74, 'level4_tree'));
		addImages(); //flip, top
		// foreground images
		g.addChild(game.add.sprite(703, 313 + yShift, 'level4_leaves'));

		// good beetle
		beetle = new Beetle('wheel', -15, 0);
		//bad beetle
		beetle2 = new Beetle('wheelEnemy', 15, -3, true);

		var ramps = game.add.sprite(0, -30 + yShift, 'level4_ramps');
		g.addChild(ramps);

		g.ant = new Ant(0);
		g.addChild(g.ant);

		body('snail3').setBodyContactCallback(body('sensorCatapultLaunched'), function () {
			body('snail3').setBodyContactCallback(body('sensorCatapultLaunched')); //removes
			sounds['catapultSound'].play();
		}, this);

		dung.setBodyContactCallback(body('sensorAnt'), function () {
			dung.setBodyContactCallback(body('sensorAnt')); //removes
			updateFunctions.push(function () {
				g.ant.pop();
				dung.applyForce(0, -350 * upscale);
			});
			// if dung lands back in catapult level failed
			dung.setBodyContactCallback(body('sensorCatapultLoaded'), function () {
				dung.setBodyContactCallback(body('sensorCatapultLoaded')); //removes
				g.delay = game.time.events.loop(1250, function () {
					game.time.removeAll();
					makePopup('lose');
				}, this);
			}, this);
		}, this);

		// grab dung when it moves past good beetle
		dung.setBodyContactCallback(wheel, function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(wheel); //removes
				updateFunctions.push(function () {
					grabDung(wheel, dung);
					wheel.sensor = false;
					wheel.static = false;
					beetle.scale.x = 1;
					beetle.scale.y = -1; //WHY?
					beetle.animations.play('roll');
				});
			}
		}, this);

		// grab dung when it moves past enemy beetle
		dung.setBodyContactCallback(body('wheelEnemy'), function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(body2); //removes
				updateFunctions.push(function () {
					grabDung(body2, dung);
					body2.sensor = false;
					body2.static = false;
					beetle2.animations.play('roll');
				});
			}
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			getJoint('motor').EnableMotor(false);
			updateFunctions.push(function () {
				wheel.static = true;
			});
			game.time.removeAll();
			makePopup('win');
		}, this);

		// level failed
		dung.setBodyContactCallback(body('sensorFail'), function () {
			dung.setBodyContactCallback(body('sensorFail')); //removes
			getJoint('motorEnemy').EnableMotor(false);
			updateFunctions.push(function () {
				body('wheelEnemy').static = true;
			});
			game.time.removeAll();
			makePopup('lose');
		}, this);

		// for ant testing
		//dung.reset(px(14.2491), pxy(-4.7641));

		// for bottom win testing
		//dung.reset(px(10.8), pxy(-7.2));

		// for bottom lose testing
		//dung.reset(px(13), pxy(-7));

	} else if (level == 5) {
		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          |  ___|
		//	| |     | |__   | |  / /  | |__   | |          | |___
		//	| |     |  __|  | | / /   |  __|  | |          \___  \
		//	| |___  | |___  | |/ /    | |___  | |___        ___| |
		//	|_____| |_____| |___/     |_____| |_____|      \_____|
		//
		//	WORM WORKS

		g.scoringMethod = 'points';
		g.dungBalls = g.dungBallsLeft = g.dungBallsToDrop = g.dungBallsDropped = g.dungBallsHoled = 15; //15
		g.goalsScored = 0;
		hints = new Array("Sometimes dung needs a little lift, even if it's going in the right direction.", "With good timing, dung can be catapulted all way across the screen.");
		g.holeNames = ['pink', 'blue', 'green'];

		addImages(); //flip, top

		// keep dynamically created dung below beetles
		g.dungGroup = game.add.group();
		g.add(g.dungGroup);

		g.beetleGroup = game.add.group();
		g.add(g.beetleGroup);

		g.addChild(game.add.image(0, 555 + yShift, 'level5_foreground'));

		// left beetle
		beetle = new Beetle('wheel1', 15, -6);
		g.beetle1 = beetle;

		// right beetle
		beetle2 = new Beetle('wheel2', -15, -6);
		g.beetle2 = beetle2;

		g.go = function () {
			g.beetle1.animations.play('roll');
			g.beetle2.animations.play('roll');
			getJoint('motor1').EnableMotor(true);
			getJoint('motor2').EnableMotor(true);
		}

		if (instructionsShown || instructionsSkip) {
			g.go();
		} else {
			getJoint('motor1').EnableMotor(false);
			getJoint('motor2').EnableMotor(false);
		}

		// beetle in hole setup
		for (var i = 1; i < 4; i++) {
			// set to proper animation frame
			body('beetle' + i).sprite.animations.frame = 6;
			// set home y for tweens
			body('beetle' + i).homeY = body('beetle' + i).y;
			// add to beetle group
			g.beetleGroup.addChild(body('beetle' + i).sprite);
		}

		// ant poppers
		g.ant1 = new Ant(1, 0, -490);
		g.addChild(g.ant1);
		g.ant2 = new Ant(2, 0, -490);
		g.addChild(g.ant2);
		//body('ant1').setCollisionCategory(1);

		function setAntCallback(dung, num) {
			//console.log('setAntCallback', dung.id, body('sensorAnt' + num));
			dung.setBodyContactCallback(body('sensorAnt' + num), function (body1, body2, fixture1, fixture2, begin) {
				updateFunctions.push(function () {
					var forceX = -(body2.x - body1.x) * 5;
					console.log('ant throw', num, 'forceX', forceX);
					g['ant' + num].pop();
					dung.applyForce(forceX, g['ant' + num].forceY);
				});
			}, this);
		}

		// dung beetle controllers
		// flash motor speed was 5
		function BeetleController(num) {
			//console.log('BeetleController', num);
			var me = this;
			this.num = num;
			this.wheel = body('wheel' + num);
			this.motor = getJoint('motor' + num);
			this.sensorReverse = body('sensorReverse' + num);
			this.sensorDrop = body('sensorDrop');
			this.dungOffsetX = px(0.655);
			this.dungOffsetY = px(0.15);
			if (num == 2) {
				this.dungOffsetX *= -1;
			}

			this.dung = new makeDung(me.wheel.x + me.dungOffsetX, me.wheel.y + me.dungOffsetY, true);
			// force body to stay awake so it can't get stuck anywhere
			/*this.dung.sprite.update = function () {
			me.dung.body.data.m_sleepTime = 0;
			}*/
			//dung = this.dung.body; //breaks without this
			this.dung.body.name = this.dung.sprite.name = 'dung' + g.dungBallsLeft;
			grabDung(me.wheel, this.dung.body);

			setAntCallback(this.dung.body, 1);
			setAntCallback(this.dung.body, 2);
			g.dungBallsLeft--;

			// sensors off screen that cause beetle to turn around and roll in new dung
			this.activateSensorReverse = function () {
				//console.log('activateSensorReverse');
				me.wheel.setBodyContactCallback(me.sensorReverse, function () {
					//console.log('dungBallsLeft', g.dungBallsLeft);
					if (g.dungBallsLeft) {
						me.wheel.setBodyContactCallback(me.sensorReverse);
						me.motor.SetMotorSpeed(me.motor.GetMotorSpeed() * -1);
						updateFunctions.push(function () {
							g.dungBallsLeft--;
							//console.log('activateSensorReverse');
							me.dung = new makeDung(me.wheel.x + me.dungOffsetX, me.wheel.y + me.dungOffsetY, true);
							// force body to stay awake so it can't get stuck anywhere
							/*me.dung.sprite.update = function () {
							me.dung.body.data.m_sleepTime = 0;
							}*/
							//dung = me.dung.body; //breaks without this
							me.dung.body.name = me.dung.sprite.name = 'dung' + g.dungBallsLeft;
							grabDung(me.wheel, me.dung.body);
							setAntCallback(me.dung.body, 1);
							setAntCallback(me.dung.body, 2);
							me.activateSensorDrop();
							// show roll animation
							g['beetle' + me.num].animations.play('roll');
						});
					} else {
						console.log('no more dung');
						me.motor.SetMotorSpeed(0);
					}
				});
			}

			// sensor in middle of screen
			this.activateSensorDrop = function () {
				//console.log('activateSensorDrop');
				me.dung.body.setBodyContactCallback(me.sensorDrop, function () {
					me.dung.body.setBodyContactCallback(me.sensorDrop);
					g.dungBallsToDrop--;
					ui.dungLeftNum.setNum(g.dungBallsToDrop);
					// release dung
					updateFunctions.push(function () {
						releaseDung(me.wheel, me.wheel.joint, true);
					});
					me.dung.addHoleCallbacks(3);
					// reverse beetle
					me.motor.SetMotorSpeed(me.motor.GetMotorSpeed() * -1);
					// activate reverse sensor
					me.activateSensorReverse();
					// show walk animation
					g['beetle' + me.num].animations.play('walk');
				});
			}
			this.activateSensorDrop();

			this.destroy = function () {
				me.wheel.setBodyContactCallback(me.sensorReverse);
				delete me.wheel;
				delete me.motor;
				if (me.dung) {
					me.dung.body.setBodyContactCallback(me.sensorDrop);
					delete me.dung;
				}
				delete me.sensorReverse;
				delete me.sensorDrop;
			}
		}
		g.beetleController1 = new BeetleController(1);
		g.beetleController2 = new BeetleController(2);

		// lifts
		function Lift(num) {
			var me = this;
			this.body = body('lift' + num);
			this.body.setCollisionCategory(3);
			this.btn = body('liftButton' + num);
			this.btn.liftObj = me;
			this.yStart = this.body.y;
			this.ys = [px(.1), px(.2), px(.1), 0, px(.1), px(.2), px(.1), 0];
			this.angles = [-13, -6.5, 0, 6.5, 13, 6.5, 0, -6.5, -13];
			this.frame = 1;
			this.animating = false;
			this.worms = game.add.sprite(-this.btn.x - 103, this.btn.y - 69, 'worms');
			this.dungOnLift = [];
			var left = this.worms.animations.add('left', [1, 2, 3, 4], 20, false); //name, frames, frameRate, loop,
			left.enableUpdate = true;
			var right = this.worms.animations.add('right', [5, 6, 7, 0], 20, false);
			right.enableUpdate = true;
			this.worms.animations.frame = 0;
			g.addChild(this.worms);
			this.lift = function () {
				if (!me.animating) {
					me.animating = true;
					me.frame = 1;
					//me.update();
					me.animate();
					sounds['wormSound'].play();
				}
			}
			this.animate = function () {
				//console.log('animate');
				// if dung is on lift set yStart as current position
				for (var i = 0; i < me.dungOnLift.length; i++) {
					me.dungOnLift[i].yStart = me.dungOnLift[i].y;
					//console.log('set me.dungOnLift[i].yStart', me.dungOnLift[i].y);
				}
				// play proper animation sequence
				//console.log('frame', me.worms.animations.frame);
				if (me.worms.animations.frame == 0) {
					me.worms.animations.play('left');
				} else {
					me.worms.animations.play('right');
				}
				// update lift platorm coordinates and angle as animation changes
				me.worms.animations.currentAnim.onUpdate.add(function () {
					//console.log('onUpdate frame', me.worms.animations.frame);
					me.body.angle = me.angles[me.worms.animations.frame];
					me.body.y = me.yStart - me.ys[me.worms.animations.frame];
				}, this);
				// when animation is complete fling dung
				me.worms.animations.currentAnim.onComplete.add(function () {
					me.worms.animations.currentAnim.onUpdate.removeAll();
					me.worms.animations.currentAnim.onComplete.removeAll();
					//console.log('onComplete frame', me.worms.animations.frame);
					me.body.angle = me.angles[me.worms.animations.frame];
					me.body.y = me.yStart - me.ys[me.worms.animations.frame];
					me.animating = false;
					//console.log('stuff on', me.body.name, me.dungOnLift);
					for (var i = 0; i < me.dungOnLift.length; i++) {
						var vy = me.dungOnLift[i].y - me.dungOnLift[i].yStart;
						//console.log('dungOnLift', me.dungOnLift[i].velocity.y, 'yStart', me.dungOnLift[i].yStart, 'yNow', me.dungOnLift[i].y, vy);
						if (vy < 0) {
							me.dungOnLift[i].applyForce(0, vy * 4);
						}
					}
				}, this);
			};
			// when dung lands on platform
			this.body.onDungLand = function (dungBody) {
					// add to dungOnLift array and set starting y
					me.dungOnLift.push(dungBody);
					dungBody.yStart = dungBody.y;
					//console.log(me.body.name, 'onDungLand', dungBody.name, me.dungOnLift);
				}
				// when dung leaves platform
			this.body.onDungLeave = function (dungBody) {
				// remove from dungOnLift array
				for (var i = 0; i < me.dungOnLift.length; i++) {
					if (dungBody.name === me.dungOnLift[i].name) {
						me.dungOnLift.splice(i, 1);
						break;
					}
				}
				//console.log(me.body.name, 'onDungLeave', dungBody.name, me.dungOnLift);
			}
			this.destroy = function () {
				delete this.body;
				delete this.btn.liftObj;
				delete this.btn;
				delete this.worms;
				me.dungOnLift = [];
			}
		}
		g.lift1 = new Lift(1);
		g.lift2 = new Lift(2);
		g.lift3 = new Lift(3);

		// spiders
		body('spider3').sprite.scale.x = body('spider3').sprite.scale.y = 0.75;
		body('spider4').sprite.scale.x = body('spider4').sprite.scale.y = 0.75;
		for (var i = 1; i < 5; i++) {
			body('spider' + i).setCollisionCategory(2);
			body('spider' + i).power = 3;
			body('spider' + i).sprite.animations.add('pop', [1, 2, 3, 4, 5, 6, 7, 8, 9], 10, false);
		}

		// called from dung sprites
		g.updateScore = function (points) {
			//console.log('score', points);
			g.score += points;
			if (g.score < 0) {
				g.score = 0;
			}
			ui.countdownNum.setNum(g.score);
		}


	} else if (level == 6) {
		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          /  ___|
		//	| |     | |__   | |  / /  | |__   | |          | |___
		//	| |     |  __|  | | / /   |  __|  | |          |  _  \
		//	| |___  | |___  | |/ /    | |___  | |___       | |_| |
		//	|_____| |_____| |___/     |_____| |_____|      \_____/
		//
		//	CRITTER CRAZE

		g.scoringMethod = 'time';
		hints = new Array("Four breaks is all it takes to make a jump.", "That spider sure looks hungry.", "Some snails look hungry for mushrooms.", "The rock is mightier than the dung.", "Block the tongue or you'll be done!");

		g.flyLoop = sounds['flyLoop'];
		g.flyLoop.play('', 0, 1, true);

		dung = body('dung');
		wheel = body('wheel');
		ant1 = body('ant1');
		ant2 = body('ant2');

		addImages(['shroomPlanted1']); //flip, top
		body('spider').sprite.scale.x = body('spider').sprite.scale.y = 0.65;
		body('spider').sprite.y -= 50;
		g.addChild(body('spider').sprite);

		// mask and hide frog tongue
		maskTongue(100, 570, 300, 75);
		body('tongue').sprite.visible = false;
		body('frog').y = 642;

		beetle = new Beetle('wheel', -15, -6);

		// ant poppers
		g.ant1 = new Ant(1);
		g.addChild(g.ant1);
		g.ant2 = new Ant(2);
		g.addChild(g.ant2);

		g.flyBlockers = 2;
		g.toadIsBlocked = false;

		// bird
		getSprite('bird').animations.play('loop');
		g.onBirdClick = function () {
			body('birdButton').destroy();
			// drop leaves
			for (var i = g.children.length - 1; i > -1; i--) {
				if (g.children[i].key.indexOf('leaf') != -1) {
					var s = g.children[i];
					s.center = -s.body.x;
					s.startY = s.body.y;
					s.vx = 2 + Math.random() * 10;
					s.vy = s.vx;
					s.angl = Math.abs(Math.round(s.body.angle));
					s.aniframe = 0;
					s.body.destroy();
					s.x = s.center;
					s.y = s.startY;
					s.angle = s.angl;
					//console.log(g.children[i].key, s.angl);
					s.update = function () {
						if (this.aniframe % 2 == 0) { // slows down animation
							this.vx += (this.center - this.x) * .1;
							this.x += this.vx;
							this.y += 15 - this.vy;
							this.angle++;
							this.scale.x = Math.sin(this.angl);
							this.angl += .1;
							if (this.y > 900) {
								this.destroy();
							}
						}
						this.aniframe++;
					}
				}
			}
			sounds['leavesSound'].play();
			// eat beetle after short delay
			game.time.events.add(1000, function () {
				getSprite('bird').animations.play('eat');
				getSprite('bird').animations.currentAnim.onUpdate.add(function () {
					//console.log('frame', getSprite('bird').animations.frame);
					if (getSprite('bird').animations.frame == 86) {
						body('birdFood').sprite.destroy();
						body('birdFood').destroy();
					}
				}, this);
				sounds['beetleEaten2'].play();
				// return to animation loop
				getSprite('bird').animations.currentAnim.onComplete.add(function () {
					getSprite('bird').animations.play('loop');
				}, this);
			});
		}

		// fly
		getSprite('fly').animations.play('fly', 20, true);
		// when fly is released
		g.onFlyReleased = function () {
			var flyTween = game.add.tween(body('fly')).to({
				x: body('flyTo').x,
				y: body('flyTo').y
			}, 200, Phaser.Easing.Linear.None, true);
			flyTween.onComplete.add(function () {
				getSprite('fly').animations.stop();
				// move spider onto fly
				game.add.tween(body('spider')).to({
					x: body('spiderTo').x,
					y: body('spiderTo').y
				}, 200, Phaser.Easing.Linear.None, true);
				body('egg1').applyForce(0, 0, true); //wakes up eggs
			});
			g.flyLoop.stop();
			sounds['flyShort2'].play();
		}

		// ant 1
		dung.setBodyContactCallback(body('sensorAnt1'), function () {
			//console.log('dung hit sensorAnt1');
			dung.setBodyContactCallback(body('sensorAnt1')); //removes
			updateFunctions.push(function () {
				// pop ant upward
				g.ant1.pop();
				dung.applyForce(0, -250 * upscale);
				// dung was sometimes getting stuck asleep wedged between ground and boulder
				dung.data.SetSleepingAllowed(false);
			});
		}, this);

		// ant 2
		dung.setBodyContactCallback(body('sensorAnt2'), function () {
			//console.log('dung hit sensorAnt2');
			dung.setBodyContactCallback(body('sensorAnt2')); //removes
			updateFunctions.push(function () {
				// pop ant upward
				g.ant2.pop();
				dung.applyForce(0, -250 * upscale);
			});
		}, this);

		// enemy beetles that grab dung popped to them
		dung.setBodyContactCallback(body('sensorEnemy1'), function () {
			dung.setBodyContactCallback(body('sensorEnemy1')); //removes
			updateFunctions.push(function () {
				dung.static = true;
			});
		}, this);
		dung.setBodyContactCallback(body('sensorEnemy2'), function () {
			dung.setBodyContactCallback(body('sensorEnemy2')); //removes
			updateFunctions.push(function () {
				dung.static = true;
			});
		}, this);

		// grab dung when it moves past beetle
		dung.setBodyContactCallback(wheel, function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(wheel); //removes
				updateFunctions.push(function () {
					grabDung(wheel, dung);
					beetle.animations.play('roll');
					beetle.rollingDung = true;
					beetle.scale.x = 1; //WHY?
					beetle.scale.y = -1; //WHY?
					wheel.sensor = false;
					wheel.static = false;
				});
			}
		}, this);

		// if stick hits sensor toad is blocked
		body('toadBlocker').setBodyContactCallback(body('sensorToad'), function () {
			body('toadBlocker').setBodyContactCallback(body('sensorToad')); //removes
			updateFunctions.push(function () {
				g.toadIsBlocked = true;
			});
		}, this);

		// check if toad is blocked when beetle hits sensor
		wheel.setBodyContactCallback(body('sensorToad'), function () {
			wheel.setBodyContactCallback(body('sensorToad')); //removes
			console.log('toadIsBlocked', g.toadIsBlocked);
			// if toad isn't blocked
			if (!g.toadIsBlocked) {
				// open frog's mouth
				body('frog').sprite.animations.play('open');

				body('frog').sprite.animations.currentAnim.onComplete.add(function () {
					body('frog').sprite.animations.frame = 2;
					body('tongue').sprite.visible = true;
					// move toad tongue
					game.add.tween(body('tongue')).to({
						x: px(3.154),
						y: pxy(-7.751)
					}, 200, Phaser.Easing.Linear.None, true);
					sounds['beetleEaten'].play();
					// when tongue hits beetle
					body('tongue').setBodyContactCallback(wheel, function () {
						body('tongue').setBodyContactCallback(wheel); //removes
						updateFunctions.push(function () {
							// release dung
							world.DestroyJoint(dungJoint);
							beetle.rollingDung = false;
							// deactivate beetle
							world.DestroyJoint(getJoint('motor'));
							body('gear').destroy();
							wheel.static = true; //stops velocity
							wheel.kinematic = true;
							wheel.sensor = true;
							// tween toungue back
							game.add.tween(body('tongue')).to({
								x: px(-0.133),
								y: pxy(-8.038)
							}, 200, Phaser.Easing.Linear.None, true);
							// tween beetle to toad mouth
							var tongueBack = game.add.tween(wheel).to({
								x: px(2.033),
								y: pxy(-7.85)
							}, 200, Phaser.Easing.Linear.None, true);
							tongueBack.onComplete.add(function () {
								// close frog's mouth
								body('frog').sprite.animations.play('close');
								body('tongue').sprite.visible = beetle.visible = false;
								game.time.removeAll();
								makePopup('lose');
							});
						});
					}, this);
				}, this);


			}
		}, this);

		// if dung makes it to goal level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			console.log('level complete');
			updateFunctions.push(function () {
				getJoint('motor').SetMotorSpeed(0);
			});
			game.time.removeAll();
			makePopup('win');
		}, this);

		// for top right testing
		//dung.reset(px(9.24332), pxy(-3.45342));

		// for bottom part testing
		//dung.reset(px(11), pxy(-6.7));
		//dung.reset(px(7.06299), pxy(-7.12823));
		//dung.reset(px(6.82592), pxy(-7.33987));


		//6.82592, -7.33987
	} else if (level == 7) {

		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          |___  |
		//	| |     | |__   | |  / /  | |__   | |              / /
		//	| |     |  __|  | | / /   |  __|  | |             / /
		//	| |___  | |___  | |/ /    | |___  | |___         / /
		//	|_____| |_____| |___/     |_____| |_____|       /_/
		//
		// TUNNEL TROUBLE (old 4)

		g.scoringMethod = 'time';
		g.lizardBlocked = false;
		hints = new Array("Ignore the dung ball until the roadwork is done.", "Dropping a stick straight down makes for a stable crossing.", "Rock and roll that bridge into place, but make sure you start the RIGHT way or your dung will be LEFT stranded.", "Some things are better off left in place.", "You shell not disturb me!", "Lizards don't eat gems.", "Right is right to cover one pit.", "Ramp up to get up.");

		addImages(['shroomPlanted1', 'shroomRolling1', 'snail1']); //flip, top

		dung = body('dung');
		wheel = body('wheel');

		beetle = new Beetle('wheel', 15, -6);

		// mask and hide lizard tongue
		maskTongue(0, 290, 250, 400);
		getSprite('tongue').visible = false;

		// set up lizard animation
		//getSprite('lizard').animations.add('open', [1], 10, false); //name, frames, frameRate, loop,
		//getSprite('lizard').animations.add('close', [3, 4], 10, false);

		// gem blocks lizard
		body('gem4').setBodyContactCallback(body('sensorLizardBlocked'), function () {
			body('gem4').setBodyContactCallback(body('sensorLizardBlocked')); //removes
			console.log('lizard blocked');
			g.lizardBlocked = true;
		}, this);

		// if dung hits beetle
		dung.setBodyContactCallback(wheel, function () {
			dung.setBodyContactCallback(wheel); //removes
			// grab it and start rolling
			updateFunctions.push(function () {
				beetle.animations.play('roll');
				beetle.rollingDung = true;
				grabDung(wheel, dung);
				wheel.static = false;
				getJoint('motor').SetMotorSpeed(-4);
			});
		}, this);

		// if beetle hits lizard sensor
		wheel.setBodyContactCallback(body('sensorLizardTrigger'), function () {
			wheel.setBodyContactCallback(body('sensorLizardTrigger')); //removes
			// and lizard isn't blocked with gem
			if (!g.lizardBlocked) {
				// open lizard's mouth
				body('lizard').sprite.animations.play('open');

				console.log('lizard eats beetle');

				body('lizard').sprite.animations.currentAnim.onComplete.add(function () {
					body('lizard').sprite.animations.frame = 2;
					getSprite('tongue').visible = true;
					// move lizard tongue
					game.add.tween(body('tongue')).to({
						x: px(1.884),
						y: pxy(-6.105)
					}, 200, Phaser.Easing.Linear.None, true);
					sounds['beetleEaten'].play();
					// when tongue hits beetle
					body('tongue').setBodyContactCallback(wheel, function () {
						body('tongue').setBodyContactCallback(wheel); //removes
						updateFunctions.push(function () {
							// release dung
							world.DestroyJoint(dungJoint);
							beetle.rollingDung = false;
							// deactivate beetle
							world.DestroyJoint(getJoint('motor'));
							body('gear').destroy();
							wheel.static = true; //stops velocity
							wheel.kinematic = true;
							wheel.sensor = true;
							// tween toungue back
							var tongueBack = game.add.tween(body('tongue')).to({
								x: px(1.356),
								y: pxy(-2.349)
							}, 200, Phaser.Easing.Linear.None, true);
							// tween beetle back
							game.add.tween(wheel).to({
								x: px(1.643),
								y: pxy(-4.399)
							}, 200, Phaser.Easing.Linear.None, true);
							tongueBack.onComplete.add(function () {
								// close lizards's mouth
								body('lizard').sprite.animations.play('close');
								body('tongue').sprite.visible = beetle.visible = false;
								game.time.removeAll();
								makePopup('lose');
							});
						});
					}, this);
				}, this);
			}
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			console.log('level complete');
			getJoint('motor').EnableMotor(false);
			game.time.removeAll();
			makePopup('win');
		}, this);

		// for bottom part testing
		//dung.reset(px(2.51983), px(-6.47537));
		//g.lizardBlocked = true;

	} else if (level == 8) {

		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          /  _  \
		//	| |     | |__   | |  / /  | |__   | |          | |_| |
		//	| |     |  __|  | | / /   |  __|  | |          }  _  {
		//	| |___  | |___  | |/ /    | |___  | |___       | |_| |
		//	|_____| |_____| |___/     |_____| |_____|      \_____/
		//
		// MUSHROOM MANIA (old 7)

		g.scoringMethod = 'time';
		g.lizardBlocked = false;
		hints = new Array("A mushroom seesaw sounds like a berry good idea.", "Alternating is the key to a perfect landing.", "If two mushroom caps and a stick resemble a division sign, you're ready to fly.", "Small doesn't always mean light. In some cases it means flight.", "Think big now. Think small later.", "A wall of mushrooms might be useful.");

		dung = body('dung');
		wheel = body('wheel2');

		addImages(['shroomPlanted3']); //flip, top

		// mask and hide lizard tongue
		maskTongue(140, 460, 300, 200);
		getSprite('tongue').visible = false;

		// good beetle
		beetle = new Beetle('wheel2', 15, -6);
		// bad beetle
		beetle2 = new Beetle('wheel1', -15, -6, true);

		g.addChild(game.add.image(0, 307 + yShift, 'level8_foreground'));

		// shroom blocks lizard
		body('shroom1').setBodyContactCallback(body('sensorLizardBlocked'), function () {
			body('shroom1').setBodyContactCallback(body('sensorLizardBlocked')); //removes
			console.log('lizard blocked');
			g.lizardBlocked = true;
		}, this);

		// if dung hits bad beetle on the left
		dung.setBodyContactCallback(body('wheel1'), function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(body('wheel1')); //removes
				updateFunctions.push(function () {
					grabDung(body('wheel1'), dung);
					body('gear1').sensor = false;
					body('wheel1').sensor = false;
					body('wheel1').static = false;
					getJoint('motor1').SetMotorSpeed(5);
					beetle2.scale.x = 1;
					beetle2.scale.y = -1; //WHY?
					beetle2.animations.play('roll');
					beetle2.rollingDung = true;
				});
			}
		}, this);

		// detect level fail
		dung.setBodyContactCallback(body('sensorLost'), function () {
			dung.setBodyContactCallback(body('sensorLost')); //removes
			console.log('level failed');
			updateFunctions.push(function () {
				getJoint('motor1').SetMotorSpeed(0);
			});
			game.time.removeAll();
			makePopup('lose');
		}, this);

		// if dung hits good beetle on the right
		dung.setBodyContactCallback(body('wheel2'), function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(body('wheel2')); //removes
				updateFunctions.push(function () {
					beetle.animations.play('roll');
					beetle.rollingDung = true;
					grabDung(body('wheel2'), dung);
					body('gear2').sensor = false;
					body('wheel2').sensor = false;
					body('wheel2').static = false;
					getJoint('motor2').SetMotorSpeed(-5);
				});
			}
		}, this);

		// if beetle hits lizard sensor
		body('wheel2').setBodyContactCallback(body('sensorLizardTrigger'), function () {
			body('wheel2').setBodyContactCallback(body('sensorLizardTrigger')); //removes
			// and lizard isn't blocked with shrooms
			if (!g.lizardBlocked) {
				console.log('lizard eats beetle');
				dung.setBodyContactCallback(body('wheel2')); //removes
				// open lizard's mouth
				body('lizard').sprite.animations.play('open');
				body('lizard').sprite.animations.currentAnim.onComplete.add(function () {
					body('lizard').sprite.animations.frame = 2;
					getSprite('tongue').visible = true;
					// move lizard tongue
					game.add.tween(body('tongue')).to({
						x: px(4.188),
						y: pxy(-7.311)
					}, 200, Phaser.Easing.Linear.None, true);
					sounds['beetleEaten'].play();
					// when tongue hits beetle
					body('tongue').setBodyContactCallback(wheel, function () {
						body('tongue').setBodyContactCallback(wheel); //removes
						updateFunctions.push(function () {
							// release dung
							world.DestroyJoint(dungJoint);
							// deactivate beetle
							world.DestroyJoint(getJoint('motor2'));
							body('gear2').destroy();
							wheel.static = true; //stops velocity
							wheel.kinematic = true;
							wheel.sensor = true;
							// slow down dung so it stays on screen
							dung.applyForce(10 * upscale, 0);
							// tween toungue back
							var tongueBack = game.add.tween(body('tongue')).to({
								x: px(0.898),
								y: pxy(-5.411)
							}, 200, Phaser.Easing.Linear.None, true);
							// tween beetle back
							game.add.tween(body('wheel2')).to({
								x: px(2.693),
								y: pxy(-6.449)
							}, 200, Phaser.Easing.Linear.None, true);
							tongueBack.onComplete.add(function () {
								// close lizards's mouth
								body('lizard').sprite.animations.play('close');
								body('tongue').sprite.visible = beetle.visible = false;
								game.time.removeAll();
								makePopup('lose');
							});
						});
					}, this);
				}, this);
			}
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			console.log('level complete');
			getJoint('motor2').EnableMotor(false);
			game.time.removeAll();
			makePopup('win');
		}, this);

		// for bottom left testing
		//dung.reset(px(3.71453), pxy(-7.61579));

		// for bottom right testing
		//dung.reset(px(4.78411), pxy(-7.55213));
		//g.lizardBlocked = true;

	} else if (level == 9) {
		//	 _       _____   _     _   _____   _            _____
		//	| |     | ____| | |   / / | ____| | |          /  _  \
		//	| |     | |__   | |  / /  | |__   | |          | |_| |
		//	| |     |  __|  | | / /   |  __|  | |          \___  |
		//	| |___  | |___  | |/ /    | |___  | |___        ___| |
		//	|_____| |_____| |___/     |_____| |_____|      |_____/
		//
		// CRYSTAL CAVE (old 8)
		//
		// NOTE: Tweaked this level to work before realizing all blocks at top were set to density of 0.5 in code

		g.scoringMethod = 'time';
		hints = new Array("Boom and zoom! Not slow, but in a row!", "If it's all in the wall that ant will stand tall.", "Put your left foot forward and click like you walk.", "Rock to roll before rock and roll.", "Look a LITTLE but don't touch!", "Emeralds are a toad's best friend.");

		dung = body('dung');
		wheel = body('wheel');
		wheel2 = body('wheel2');
		g.block1 = body('block1');
		g.flyIsBlocked = false;
		g.toadIsBlocked = false;

		addImages(['tongue', 'frog']); //flip, top

		// mask and hide frog tongue
		maskTongue(575, 590, 400, 50);
		getSprite('tongue').visible = false;

		// wake up dung when ladybug flies away
		body('ladybug').wakeup = dung;
		// stick can get stuck after ant hits it with dung
		body('breakable2').wakeup = body('post');
		body('breakable3').wakeup = body('post');

		// middle beetle
		beetle = new Beetle('wheel', -15, -6);
		// bottom beetle
		beetle2 = new Beetle('wheel2', 15, 0);

		// rock blocks fly
		g.block1.setBodyContactCallback(body('sensorFlyBlocked'), function () {
			g.block1.setBodyContactCallback(body('sensorFlyBlocked')); //removes
			console.log('fly blocked');
			g.flyIsBlocked = true;
		}, this);

		// fly grabs dung
		dung.setBodyContactCallback(body('sensorFlyEat'), function () {
			dung.setBodyContactCallback(body('sensorFlyEat')); //removes
			updateFunctions.push(function () {
				console.log('dung hit sensorFlyEat');
				if (!g.flyIsBlocked) {
					body('fly').sensor = true;
					body('fly').kinematic = true;
					getSprite('fly').animations.play('fly', 20, true);
					// fly to dung
					var grabTween = game.add.tween(body('fly')).to({
						x: dung.x,
						y: dung.y
					}, 300, Phaser.Easing.Linear.None, true);
					// chase dung by updating tween
					grabTween.onUpdateCallback(function () {
						grabTween.updateTweenData('vEnd', {
							x: dung.x,
							y: dung.y - 30
						});
					});
					// when dung is grabbed fly away with it
					grabTween.onComplete.add(function () {
						dung.static = true;
						dung.kinematic = true;
						var leaveTween = game.add.tween(body('fly')).to({
							x: body('flyTo').x,
							y: body('flyTo').y
						}, 500, Phaser.Easing.Quartic.In, true);
						leaveTween.onComplete.add(function () {
							getSprite('fly').animations.stop();
							game.time.removeAll();
							makePopup('lose');
						});
						game.add.tween(body('dung')).to({
							x: body('flyTo').x,
							y: body('flyTo').y + 30
						}, 500, Phaser.Easing.Quartic.In, true);
					});
					sounds['flyShort1'].play();
				}
			});
		}, this);

		// ant popper
		g.ant = new Ant(0);
		g.addChild(g.ant);
		dung.setBodyContactCallback(body('sensorAnt'), function () {
			dung.setBodyContactCallback(body('sensorAnt')); //removes
			updateFunctions.push(function () {
				console.log('dung hit sensorAnt');
				g.ant.pop();
				dung.applyForce(0, -200 * upscale);
			});
		}, this);

		// middle beetle grabs dung
		dung.setBodyContactCallback(body('wheel'), function (body1, body2, fixture1, fixture2, begin) {
			if (!begin) {
				dung.setBodyContactCallback(body('wheel')); //removes
				updateFunctions.push(function () {
					grabDung(body('wheel'), dung);
				});
			}
		}, this);

		// middle beetle drops dung over edge
		dung.setBodyContactCallback(body('sensorDrop'), function () {
			dung.setBodyContactCallback(body('sensorDrop')); //removes
			updateFunctions.push(function () {
				releaseDung(body('wheel'), dungJoint);
			});
		}, this);

		// bottom beetle grabs dung
		dung.setBodyContactCallback(body('sensorBeetle2'), function () {
			dung.setBodyContactCallback(body('sensorBeetle2')); //removes
			updateFunctions.push(function () {
				grabDung(wheel2, dung);
			});
		}, this);

		// branch blocks toad
		body('toadBlocker').setBodyContactCallback(body('sensorToadBlocked'), function () {
			body('toadBlocker').setBodyContactCallback(body('sensorToadBlocked')); //removes
			g.toadIsBlocked = true;
		}, this);

		// if beetle hits toad sensor
		body('wheel2').setBodyContactCallback(body('sensorToadEat'), function () {
			body('wheel2').setBodyContactCallback(body('sensorToadEat')); //removes
			// and toad isn't blocked by branch
			if (!g.toadIsBlocked) {
				console.log('toad eats beetle');
				dung.setBodyContactCallback(body('wheel2')); //removes
				dung.setBodyContactCallback(body('sensorGoal')); //removes
				// open lizard's mouth
				body('frog').sprite.animations.play('open');
				body('frog').sprite.animations.currentAnim.onComplete.add(function () {
					body('frog').sprite.animations.frame = 2;
					getSprite('tongue').visible = true;
					// move lizard tongue
					game.add.tween(body('tongue')).to({
						x: px(11.52),
						y: pxy(-7.823)
					}, 200, Phaser.Easing.Linear.None, true);
					sounds['beetleEaten'].play();
					// when tongue hits beetle
					body('tongue').setBodyContactCallback(body('wheel2'), function () {
						body('tongue').setBodyContactCallback(body('wheel2')); //removes
						updateFunctions.push(function () {
							// release dung
							world.DestroyJoint(dungJoint);
							// deactivate beetle
							world.DestroyJoint(getJoint('motor2'));
							body('gear2').destroy();
							body('wheel2').static = true; //stops velocity
							body('wheel2').kinematic = true;
							body('wheel2').sensor = true;
							// tween toungue back
							var tongueBack = game.add.tween(body('tongue')).to({
								x: px(14.82),
								y: pxy(-7.823)
							}, 200, Phaser.Easing.Linear.None, true);
							// tween beetle back
							game.add.tween(body('wheel2')).to({
								x: px(14.82),
								y: pxy(-7.823)
							}, 200, Phaser.Easing.Linear.None, true);
							tongueBack.onComplete.add(function () {
								// close toad's mouth
								body('frog').sprite.animations.play('close');
								body('tongue').sprite.visible = beetle2.visible = false;
								game.time.removeAll();
								makePopup('lose');
							});
						});
					}, this);
				}, this);
			}
		}, this);

		// level fails
		dung.setBodyContactCallback(body('sensorLose'), function () {
			dung.setBodyContactCallback(body('sensorLose')); //removes
			game.time.removeAll();
			makePopup('lose');
		}, this);
		// if dung falls in bottom hole
		dung.setBodyContactCallback(body('hole'), function () {
			dung.setBodyContactCallback(body('hole')); //removes
			if (beetle2.rollingDung) {
				updateFunctions.push(function () {
					world.DestroyJoint(dungJoint);
					beetle2.rollingDung = false;
					beetle2.animations.stop();
					beetle2.animations.frame = 0;
					beetle2.angle = 10;
					getJoint('motor2').SetMotorSpeed(-200);
				});
				g.toadIsBlocked = true;
			}
			game.time.removeAll();
			makePopup('lose');
		}, this);

		// level won
		dung.setBodyContactCallback(body('sensorGoal'), function () {
			dung.setBodyContactCallback(body('sensorGoal')); //removes
			console.log('level complete');
			getJoint('motor2').EnableMotor(false);
			game.time.removeAll();
			makePopup('win');
		}, this);

		// for ant popper testing
		/*for (var i = 1; i < 8; i++) {
		body('block' + i).sensor = true;
		}
		body('post').sensor = true;
		g.flyIsBlocked = true;*/

		// for middle part testing
		//dung.reset(px(14.56), pxy(-4.12));

		// for bottom part testing
		//dung.reset(px(1.4), pxy(-6));

	} else if (level == 10) {

		//	 _       _____   _     _   _____   _            ___   _____
		//	| |     | ____| | |   / / | ____| | |          |_  | /  _  \
		//	| |     | |__   | |  / /  | |__   | |            | | | | | |
		//	| |     |  __|  | | / /   |  __|  | |            | | | |/| |
		//	| |___  | |___  | |/ /    | |___  | |___         | | | |_| |
		//	|_____| |_____| |___/     |_____| |_____|        |_| \_____/
		//
		//

		g.scoringMethod = 'points';
		hints = new Array("This level isn't a puzzle like the others. Have fun!");
		g.dungBalls = g.dungBallsLeft = g.dungBallsToDrop = g.dungBallsHoled = 20;
		//public var dungBallsLeft:int = dungBalls;
		//g.dungBallsHoled = dungBalls;
		g.goalsScored = 0;
		g.level10 = true;

		//dung = body('dung');
		wheel = body('wheel');
		//wheel.startY = wheel.y;//keeps wheels from lifting off ground if user scrolls like crazy
		addImages(['beetle4', 'beetle5']); //flip, top

		//g.dungDist = Math.sqrt(Math.pow(body('dungStart').x - wheel.x, 2) + Math.pow(body('dungStart').y - wheel.y, 2));
		//console.log('dungDist',g.dungDist);

		// keeps dynamically created dung below beetle
		g.dungGroup = game.add.group();
		g.add(g.dungGroup);

		g.beetleGroup = game.add.group();
		g.add(g.beetleGroup);

		// beetle in hole setup
		for (var i = 1; i < 6; i++) {
			// set to proper animation frame
			body('beetle' + i).sprite.animations.frame = 6;
			// set home y for tweens
			body('beetle' + i).homeY = body('beetle' + i).y;
			// add to beetle group
			g.beetleGroup.addChild(body('beetle' + i).sprite);
		}

		g.addChild(game.add.sprite(0, 609, 'level10_foreground'));

		beetle = new Beetle('wheel', 15, -2);
		beetle.followPointer = true;
		g.beetleGroup.addChild(beetle);

		// ant poppers
		g.ant1 = new Ant(1, 0, -250);
		g.addChild(g.ant1);
		g.ant2 = new Ant(2, 100, -200);
		g.addChild(g.ant2);
		g.ant3 = new Ant(3, -100, -200);
		g.addChild(g.ant3);
		g.ant4 = new Ant(4, 0, -250);
		g.addChild(g.ant4);

		function setAntCallback(dung, num) {
			dung.setBodyContactCallback(body('sensorAnt' + num), function (body1, body2, fixture1, fixture2, begin) {
				updateFunctions.push(function () {
					console.log('ant throw', (dung.x - body2.x) * 4, g['ant' + num].forceY);
					g['ant' + num].pop();
					dung.applyForce(g['ant' + num].forceX, g['ant' + num].forceY);
					//dung.applyForce((dung.x - body2.x) * 4, (dung.y - body2.y) * 4);
					//dung.applyForce((dung.x - body2.x) * 4, g['ant' + num].forceY);
				});
			}, this);
		}

		// update score
		g.updateScore = function (points) {
			console.log('score', points);
			g.score += points;
			if (g.score < 0) {
				g.score = 0;
			}
			ui.countdownNum.setNum(g.score);
		}

		// make new dung ball function
		g.generateDung = function (x, y) {
			var dungNew = new makeDung(x, y, false);
			dungNew.body.name = 'dung' + g.dungBallsLeft;
			dung = dungNew;
			g.dungBallsLeft--;

			// beetle grabs dung
			dungNew.body.setBodyContactCallback(body('wheel'), function (body1, body2, fixture1, fixture2, begin) {
				//console.log('dung hit wheel', body1);
				body1.setBodyContactCallback(body2); //removes
				updateFunctions.push(function () {
					grabDung(wheel, body1, 41);
					//wheel.joint.m_collideConnected = true;// dung rolls is wrong direction
					beetle.animations.stop();
				});
			});

			// dung returns to solid state after hitting sensor below platform
			dungNew.body.setBodyContactCallback(body('sensorActivate'), function (body1, body2, fixture1, fixture2, begin) {
				body1.setBodyContactCallback(body2); //removes
				body1.sensor = false;
			});

			// count dung that was thrown off screen
			dungNew.body.setBodyContactCallback(body('sensorGone'), function (body1, body2, fixture1, fixture2, begin) {
				body1.setBodyContactCallback(body2); //removes
				console.log('dung thrown off screen dung!');
				// allow dung to go to sleep
				body1.data.SetSleepingAllowed(true);
				// also in hole callback
				g.dungBallsHoled--;
				// determine level results
				if (!g.dungBallsHoled) {
					g.percentCorrect = Math.round((g.goalsScored / g.dungBalls) * 100);
					if (g.percentCorrect >= 60) {
						makePopup('win');
					} else {
						makePopup('lose');
					}
				}
			});

			dungNew.addHoleCallbacks(5); //make automatic?

			for (var i = 1; i < 5; i++) {
				// ant popper setup
				setAntCallback(dung.body, i);
			}

			// force body to stay awake so it can't get stuck anywhere
			dungNew.sprite.update = function () {
				dungNew.body.data.m_sleepTime = 0;
			}
		}

		// start with beetle and dung in middle of screen
		g.generateDung(body('dungStart').x, body('dungStart').y);
		updateFunctions.push(function () {
			body('dungStart').destroy();
		});
		beetle.animations.stop();

		// set up flower bumpers
		for (var i = 1; i < 5; i++) {
			body('bumper' + i).setCollisionCategory(2);
			body('bumper' + i).power = 4;
		}

		// clicking on background releases dung
		g.background.inputEnabled = true;
		g.background.events.onInputUp.add(function () {
			if (beetle.rollingDung && !instructionsShowing && !ui.hintShowing) {
				g.dungBallsToDrop--;
				ui.dungLeftNum.setNum(g.dungBallsToDrop);
				updateFunctions.push(function () {
					//console.log('release dung', dungJoint);
					releaseDung(wheel, wheel.joint); // problems with dungJoint
					wheel.static = false;
					dung.body.sensor = true;
					if (g.dungBallsLeft) {
						g.generateDung(-1124, wheel.y);
						// roll new dung onto screen ('dung' is now new dung)
						dung.body.applyForce(50, 0);
					}
				});
			}
		}, this);

		g.go = function () {
			body('wheel').applyForce(0, 0);
		}

		// to be safe
		g.destroySpecial = function () {
			g.background.events.onInputUp.removeAll();
		}

		// for bottom part testing
		//dung.reset(px(.5), pxy(-6));

		// for bottom part testing
		//dung.reset(px(7), pxy(-4));
	}
}

// make beetle sprite
function Beetle(wheelName, xOffset, yOffset, enemy) {
	var n = 'beetle';
	if (enemy) {
		n = 'beetle_enemy'
	}
	var b = game.add.sprite(0, 0, n);
	b.anchor.setTo(0.5, 0.5);
	if (xOffset < 0) {
		b.scale.x = -1;
	}
	b.animations.add('walk', [0, 1, 2, 3, 4, 5], 10, true); //name, frames, frameRate, loop,
	b.animations.add('roll', [6, 7, 8, 9, 10, 11], 10, true);
	b.wheelName = wheelName;
	b.xOffset = xOffset;
	b.yOffset = yOffset;
	b.wheel = body(wheelName);
	b.updates = 0;
	g.addChild(b);

	// add sprite reference to wheel body
	body(wheelName).sprite = b;

	// called automatically
	b.update = function () {
		//console.log('rolling', b.rollingDung);
		//console.log(b.name, b.wheel.name, b.wheel.x);
		// lock beetle to wheel
		b.x = Math.round(-b.wheel.x + b.xOffset);
		b.y = Math.round(b.wheel.y + b.yOffset);
		if (b.rollingDung) {
			// rotate beetle to dung
			var radians = Math.atan2(b.wheel.y - b.wheel.dung.y, b.wheel.x - b.wheel.dung.x);
			//b.angle = 180 - radians * oneEightyDivPI;
			b.angle = -(radians * oneEightyDivPI);
		}
		// animation controlled by pointer movement
		if (b.followPointer) {
			if (b.updates % 5 == 0) { //slows down animation
				if (Math.abs(wheel.data.m_linearVelocity.x) > .1) {
					var frame = b.animations.frame;
					frame++;
					if (b.rollingDung) {
						if (frame == 12) {
							frame = 6;
						}
					} else {
						if (frame == 6) {
							frame = 0;
						}
					}
					b.animations.frame = frame;
				}
			}
			b.updates++;
		}
	}

	b.destroy = function () {
		delete body(b.wheelName).sprite;
		delete b.wheel;
	}

	return b;
}

// ant animation
function Ant(num, forceX, forceY) {
	var me = this;
	var b;
	var s;
	if (!num) {
		b = body('ant');
		s = body('sensorAnt');
	} else {
		b = body('ant' + num);
		s = body('sensorAnt' + num);
	}
	this.ant = game.add.sprite(Math.round(-b.x), Math.round(b.y - 10), 'ant');
	this.ant.anchor.setTo(0.5, 0.5);
	this.ant.animations.add('pop', [1], 1, false); //name, frames, frameRate, loop,
	this.ant.animations.add('drop', [2, 3, 4, 5], 10, false);
	this.ant.body = b;
	this.ant.sensor = s;
	this.ant.forceX = forceX;
	this.ant.forceY = forceY;

	this.ant.pop = function () {
		//console.log('ant sensor', me.ant.sensor);
		//console.log('ant frame', me.ant.animations.currentFrame.index);
		if (!me.ant.animations.currentFrame.index || me.ant.animations.currentFrame.index == 5) {
			// disable sensor and pop ant
			me.ant.sensor.data.SetActive(false);
			me.ant.animations.play('pop');
			me.ant.animations.currentAnim.onComplete.add(function () {
				// drop an back into hole
				me.ant.animations.play('drop');
				var downTween = game.add.tween(me.ant.body).to({
					y: me.ant.body.y + 45
				}, 250, Phaser.Easing.Linear.None, true);
				// enable sensor when ant is back in hole
				downTween.onComplete.add(function () {
					downTween.onComplete.removeAll();
					me.ant.sensor.data.SetActive(true);
				});
			}, this);
			me.ant.body.y -= 45;
			sounds['antThrow'].play();
		}
	}

	ants.push(this);

	return this.ant;
}

function maskTongue(x, y, w, h) {
	var tongueMask = game.add.graphics(x, y);
	tongueMask.beginFill('0xff0000', 1);
	tongueMask.drawRect(0, 0, w, h);
	tongueMask.endFill();
	g.addChild(tongueMask);
	getSprite('tongue').mask = tongueMask;
}

// attach beetle to dung
function grabDung(wheel, dung, dist) {
	//console.log('grabDung', wheel.name, dung);
	if (!dist) {
		// create distance joint based on current positions
		dist = Math.sqrt(Math.pow(dung.x - wheel.x, 2) + Math.pow(dung.y - wheel.y, 2));
	}
	// bodyA, bodyB, length, ax, ay, bx, by, frequency, damping
	dungJoint = game.physics.box2d.distanceJoint(wheel, dung, dist, 0, 0, 0, 0, 5, 0.7);
	wheel.joint = dungJoint; // for level 10
	//console.log('dungJoint', wheel.name, dung.name, dist, wheel.joint);
	//console.log('dung', dung);
	wheel.sensor = false;
	wheel.static = false;
	//console.log('my beetle', wheel.sprite, wheel.sprite.scale.y);
	// if beetle is flipped adjust
	if (wheel.sprite.scale.x == -1) {
		wheel.sprite.scale.x = 1;
		wheel.sprite.scale.y = -1;
	}
	wheel.sprite.animations.play('roll');
	wheel.sprite.rollingDung = true;
	wheel.dung = dung;
	sounds['dungGrab1'].play();
}

function releaseDung(wheel, joint, keepMoving) {
	world.DestroyJoint(joint);
	//console.log('my beetle', wheel.sprite);
	if (!keepMoving) {
		wheel.static = true;
		wheel.sprite.animations.stop();
		wheel.sprite.animations.frame = 0;
	}
	wheel.sprite.rollingDung = false;
	sounds['dungGrab2'].play();
}

// used in levels 5 & 10
function makeDung(x, y, randomColor) {
	//console.log('makeDung', x, y);
	var me = this;

	// make dung sprite and box2d enable
	if (level == 5) {
		var key = 'dung_40';
		if (randomColor) {
			key = game.rnd.pick(['pink', 'blue', 'green']);
		}
		var d = game.add.sprite(x, y, key);
		game.physics.box2d.enable(d);
		d.body.setCircle(-px(0.4)); //need to edit top graphics otherwise
	} else {
		var d = game.add.sprite(x, y, 'dung_30');
		game.physics.box2d.enable(d);
		d.body.setCircle(d.width / 2);
	}
	d.body.friction = 0.1;
	// keep dung from going to sleep so it doesn't get stuck
	d.body.data.SetSleepingAllowed(false);
	g.dungGroup.add(d);

	// references
	this.body = d.body;
	this.sprite = d;

	// add level specific callbacks
	if (level == 5) {
		// if dung hits a spider bumper
		this.body.setCategoryContactCallback(2, function (body1, body2, fixture1, fixture2, begin) {
			//console.log('hit bumper', body2.name, body2.power);
			updateFunctions.push(function () {
				body1.applyForce((body1.x - body2.x) * 4, (body1.y - body2.y) * 4);
				body2.sprite.animations.play('pop');
			});
			sounds['bumperSound'].play();
		}, this);

		// set contact for when dung lands on and leaves a lift
		this.body.setCategoryContactCallback(3, function (body1, body2, fixture1, fixture2, begin) {
			if (begin) {
				//console.log(body1.name, 'hit lift', body2.name);
				body2.onDungLand(body1);
			} else {
				//console.log(body1.name, 'left lift', body2.name);
				body2.onDungLeave(body1);
			}
		}, this);
	} else if (level == 10) {
		// if dung hits a flower bumper
		this.body.setCategoryContactCallback(2, function (body1, body2, fixture1, fixture2, begin) {
			//console.log('hit bumper', body2.name, body2.power);
			updateFunctions.push(function () {
				body1.applyForce((body1.x - body2.x) * body2.power, (body1.y - body2.y) * body2.power);
				body2.sprite.animations.play('pop');
			});
			sounds['bumperSound'].play();
		}, this);
	}

	// level 5 and 10 hole callbacks function
	this.addHoleCallbacks = function (num) {
		for (var i = 1; i <= num; i++) {
			// beetles grab dung that falls in hole
			me.body.setBodyContactCallback(body('beetle' + i), function (body1, body2, fixture1, fixture2, begin) {
				body1.setBodyContactCallback(body2); //removes
				//if (begin) {
				updateFunctions.push(function () {
					// allow dung to go to sleep
					body1.data.SetSleepingAllowed(true);
					// animate and update score
					if (level == 5) {
						//console.log('dung', body1.sprite.key, 'hole', g.holeNames[body2.name.substr(6, 1) - 1]);
						if (body1.sprite.key == g.holeNames[body2.name.substr(6, 1) - 1]) {
							g.goalsScored++;
							g.updateScore(500);
							var score = game.add.sprite(-body2.x, body2.y, 'level5_score');
						} else {
							g.updateScore(-100);
							var score = game.add.sprite(-body2.x, body2.y, 'level10_penalty');
						}
					} else {
						if (body2.sprite.key == 'beetle') {
							g.goalsScored++;
							g.updateScore(200);
							var score = game.add.sprite(-body2.x, body2.y, 'level10_score');
						} else {
							g.updateScore(-100);
							var score = game.add.sprite(-body2.x, body2.y, 'level10_penalty');
						}
					}
					score.anchor.setTo(0.5, 0.5);
					score.alpha = 0;
					g.addChild(score);
					var tweenDown = game.add.tween(score).to({
						y: score.y,
						alpha: 0
					}, 400, Phaser.Easing.Quartic.Out, false, 400);
					var tweenUp = game.add.tween(score).to({
						y: score.y - 70,
						alpha: 1
					}, 400, Phaser.Easing.Quartic.Out, true);
					tweenDown.onComplete.add(function () {
						score.destroy();
					});
					tweenUp.chain(tweenDown);
					// tween dung down
					body1.static = true;
					body1.kinematic = true;
					game.add.tween(body1).to({
						y: body1.y + 90
					}, 400, Phaser.Easing.Linear.None, true);
					// tween beetle down
					var beetleDown = game.add.tween(body2).to({
						y: body2.homeY + 90
					}, 400, Phaser.Easing.Linear.None, true);
					// tween beetle up
					beetleDown.onComplete.add(function () {
						body1.sprite.destroy(); //destroy dung
						game.add.tween(body2).to({
							y: body2.homeY
						}, 400, Phaser.Easing.Linear.None, true);
						g.dungBallsHoled--;
						// determine level results
						if (!g.dungBallsHoled) {
							g.percentCorrect = Math.round((g.goalsScored / g.dungBalls) * 100);
							if (g.percentCorrect >= 60) {
								makePopup('win');
							} else {
								makePopup('lose');
							}
						}
					});
				});
				//}
				sounds['dungGrab1'].play();
			}, this);
		}
	}

}

// add explosing sprite where body was removed
function makeExplosion(bodyUnder, bodySprite, key) {
	var explosion = game.add.sprite(-bodyUnder.x, bodyUnder.y, key);
	explosion.anchor.setTo(0.5, 0.5);
	// scale based on size of largest possible block or round
	if (key == 'round_exploding') {
		explosion.scale.x = explosion.scale.y = bodySprite.width / 51;
	} else {
		explosion.scale.x = bodySprite.width / 87;
		explosion.scale.y = bodySprite.height / 87;
	}
	explosion.angle = bodySprite.angle;
	var explode = explosion.animations.add('explode');
	explosion.animations.play('explode', 20, false);
	explosion.animations.currentAnim.onComplete.add(function () {
		explosion.destroy();
	}, this);
}

function getBodies() {
	//console.log('getBodies');
	if (!instructionsShowing) {
		// get pointer coordinates
		var x = -game.input.activePointer.x; //reversed in rube
		var y = game.input.activePointer.y;

		// get bodies under pointer
		var bodiesUnderMouse = game.physics.box2d.getBodiesAtPoint(x, y);
		for (var i = 0; i < bodiesUnderMouse.length; i++) {
			var bodyUnder = bodiesUnderMouse[i];
			var bodyName = '';
			if (bodyUnder.name) {
				bodyName = bodyUnder.name;
			}
			var bodyNum = bodyName.substr(bodyName.length - 1, 2); // just a short cut - won't always be a number
			var bodySprite;
			if (bodyUnder.sprite) {
				bodySprite = bodyUnder.sprite;
			}
			//console.log('getBodies bodyName', bodyName, bodyUnder, bodySprite);

			// breakables
			if (bodyName.indexOf('breakable') != -1) {
				console.log('breaking', bodyName, bodySprite.key);
				if (bodyName.indexOf('round') != -1 || bodySprite.key.indexOf('round_breakable') != -1) {
					makeExplosion(bodyUnder, bodySprite, 'round_exploding');
				} else {
					makeExplosion(bodyUnder, bodySprite, 'block_exploding');
				}
				removeBodyAndSprites(bodyUnder); //rube centric
				//console.log('still here?', bodySprite);
				if (bodySprite) {
					bodySprite.destroy();
				}
				sounds['rockBreaking'].play();

				// level 6 fly release
				if (level == 6 && bodyNum == 8 || bodyNum == 9) {
					if (g.flyBlockers) {
						g.flyBlockers--;
						//console.log('flyBlockers', g.flyBlockers);
						if (!g.flyBlockers) {
							g.onFlyReleased();
						}
					}
				}

				// post gets stuck on level 9 if ant popper hits it with dung
				if (bodyUnder.wakeup) {
					bodyUnder.wakeup.applyForce(0, 0);
				}

			} else if (bodyName.indexOf('chippable') != -1) {
				console.log('chipping', bodyName);
				makeExplosion(bodyUnder, bodySprite, 'block_chipping');
				removeBodyAndSprites(bodyUnder); //rube centric
				if (bodySprite) {
					bodySprite.destroy();
				}
				sounds['rockBreaking'].play();

				// destroy weld joint if it exists
				if (getJoint('weld' + bodyNum)) {
					world.DestroyJoint(getJoint('weld' + bodyNum));
				}

				// make round rock breakable
				var round;
				if (body('round' + bodyNum)) {
					round = body('round' + bodyNum);
					if (round.sprite.key.indexOf('breakable') != -1) {
						round.data.m_userData = 'round_breakable' + bodyNum;
					}
				} else if (body('roundBreakable' + bodyNum)) {
					round = body('roundBreakable' + bodyNum);
					round.data.m_userData = 'round_breakable' + bodyNum;
				}
				round.sensor = false;
				round.static = false;

			} else if (bodyName.indexOf('shroomPlanted') != -1) {
				removeBodyAndSprites(bodyUnder); //rube centric
				if (bodySprite) {
					bodySprite.destroy();
				}
				var shroom = body('shroomRolling' + bodyNum);
				shroom.sensor = false;
				shroom.static = false;
				shroom.sprite.visible = true;
				sounds['shroomSound'].play();

			} else if (bodyName.indexOf('ladybug') != -1) {
				// ladybug flies away
				bodyUnder.sensor = true;
				bodySprite.animations.play('fly');
				bodyUnder.angle = 0;
				game.add.tween(bodyUnder).to({
					x: bodyUnder.x - (400 * upscale) * bodySprite.scale.x
				}, 1000, Phaser.Easing.Quartic.Out, true);
				game.add.tween(bodyUnder).to({
					y: bodyUnder.y - 400 * upscale
				}, 1000, Phaser.Easing.Quartic.In, true);
				// wake up what's leaning on ladybug
				if (bodyUnder.wakeup) {
					bodyUnder.wakeup.applyForce(0, 0);
				}
				sounds['ladybugSound'].play();

				// snail
			} else if (bodyName.indexOf('snail') != -1) {
				if (!bodySprite.clicked) {
					bodySprite.clicked = true;
					bodySprite.animations.play('roll', 10, false);
					bodySprite.animations.currentAnim.onComplete.add(function () {
						// this doubles up if circle is clicked on so added flag so this doesn't run twice
						if (!bodySprite.animationComplete) {
							bodySprite.animationComplete = true;
							//console.log(bodyUnder.name, bodyUnder.data.GetFixtureList());
							bodyUnder.removeFixture(getFixture(bodyUnder.name + 'box'));
							bodyUnder.dynamic = true;
							if (level == 4) {
								if (bodyNum == 1) {
									bodyUnder.angularVelocity = -30;
								} else if (bodyNum == 2) {
									bodyUnder.angularVelocity = -30;
								} else if (bodyNum == 3) {
									bodyUnder.angularVelocity = -25;
								}
							}
						}
					}, this);
					sounds['snailRetract'].play();
				}

				// bird
			} else if (bodyName == 'birdButton') {
				g.onBirdClick();

				// worm lift
			} else if (bodyName.indexOf('liftButton') != -1) {
				//console.log(bodyUnder.liftObj);
				bodyUnder.liftObj.lift();
			}
		}

		// make previously solid bodies breakable if flagged
		for (var i = 0; i < levelScene.bodies.length; i++) {
			var b = levelScene.bodies[i];
			//console.log(b, b.name);
			if (b.m_userData) {
				console.log('makeBreakable', b.name);
				//b.name = b.m_userData;//doesn't work
				var bod = body(b.name);
				bod.name = b.m_userData;
				b.m_userData = null;
			}
		}

	}
}

function update() {
	// function queue - box2d functions would not run outside of update except during initialization
	while (updateFunctions.length) {
		updateFunctions[0]();
		updateFunctions.shift();
	}

	if (level == 10) {
		// wheel is nulled when game is destroyed - without this can't quit level
		if (wheel) {
			// constrain beetle to about one dung ball width from edge
			var inputX = game.input.x;
			if (inputX > 960) {
				inputX = 960;
			}
			//console.log(inputX);
			//sprite.body.velocity.x = (sprite.x - game.input.x) * 2;
			//sprite.body.applyForce(0, 0);
			var vx = (wheel.x + inputX) * 0.05;
			//console.log('vx', vx);
			// keeps dung from flipping to other side if not using collide connected
			if (vx < -10) {
				vx = -10;
			} else if (vx > 10) {
				vx = 10;
			}
			wheel.data.m_linearVelocity.x = vx;
			wheel.data.m_sleepTime = 0;
			//console.log(wheel.y);
			//wheel.y = 154.24000000000007;
		}
	}
}

function render() {
	if (debug) {
		game.debug.box2dWorld();
	}
}

// converts pixels to meters
function ptm(px) {
	// x and y are reversed in box2d world vs canvas
	return -(px / ppm);
}

// meters to pixels
function px(m) {
	//console.log(m + 'm to ' + -(m * ppm) + 'px');
	return (-(m * ppm));
}

// meters to pixels with yShift
function pxy(m) {
	//console.log(m + 'm to ' + -(m * ppm) + 'px');
	return (-(m * ppm) + yShift);
}

// RUBE body shortcut
function body(name) {
	return levelScene.getBody(name);
}

// RUBE joint shortcut
function getFixture(name) {
	return levelScene.getFixture(name);
}

// RUBE joint shortcut
function getJoint(name) {
	return levelScene.getJoint(name);
}

// get a body's sprite shortcut
function getSprite(name) {
	return body(name).sprite;
}

// add images to RUBE generated bodies
function addImages(flip, top) {
	for (var i = 0; i < levelScene.bodies.length; i++) {
		var n = levelScene.bodies[i].name;
		var b = levelScene.getBody(n); // levelScene.bodies[i] breaks
		if (b.data.customProperties) {
			var img = getProp(b, 'img');
			if (img) {
				//console.log(i, b.name, img);
				var s = game.add.sprite(0, 0, img);
				s.anchor.setTo(0.5, 0.5);
				b.sprite = s;
				s.body = b;
				g.addChild(s);

				if (img.indexOf('snail') != -1) {
					s.animations.add('roll');
				} else if (img.indexOf('ladybug') != -1) {
					s.animations.add('fly', [1, 2], 30, true);
				} else if (img == 'lizard') {
					s.animations.add('open', [1], 10, false); //name, frames, frameRate, loop,
					s.animations.add('close', [3, 4], 10, false);
				} else if (img == 'frog') {
					s.animations.add('open', [1], 10, false); //name, frames, frameRate, loop,
					s.animations.add('close', [3, 4], 10, false);
				} else if (img == 'fly') {
					s.animations.add('fly', [1, 2]);
				} else if (img == 'bird') {
					s.animations.add('loop', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84], 10, true); //name, frames, frameRate, loop,
					var eat = s.animations.add('eat', [85, 86, 87, 88, 89, 90, 91], 10, false);
					eat.enableUpdate = true;
				} else if (img == 'level10_flower') {
					s.animations.add('pop', [1, 0], 20, false);
				}

				// randomly rotate certain items
				// don't need to rotate rounds because they are welded to blocks
				// weld issue with rounds
				/*if (img.indexOf('block_breakable') != -1) {
				console.log(b);
				b.angle += game.rnd.pick([0, 90, 180, 270]);
				}*/

				// hide shroom cap if sensor
				if (img.indexOf('shroom') != -1) {
					if (b.sensor) {
						s.visible = false;
					}
				}
			}
			// align bodies based on width and height of centered image for maximum clarity
			// WARNING! Fractional pixel shift may impact gameplay!
			//if (b.static) {
			//console.log('crisping', n);
			if (Phaser.Math.isEven(s.width)) {
				//console.log('even width!');
				b.x = Math.round(b.x);
			} else {
				b.x = Math.floor(b.x) + 0.5;
			}
			if (Phaser.Math.isEven(s.height)) {
				//console.log('even height!');
				b.y = Math.round(b.y);
			} else {
				b.y = Math.floor(b.y) + 0.5;
			}
			//}
		}
	}
	// rounds depth
	for (i = g.children.length - 1; i > -1; i--) {

		if (g.children[i].key.indexOf('round') != -1) {
			g.addChild(g.children[i]);
		}
	}
	// shrooms depth
	for (i = g.children.length - 1; i > -1; i--) {

		if (g.children[i].key.indexOf('shroom') != -1) {
			g.addChild(g.children[i]);
		}
	}
	// wood depth
	for (i = g.children.length - 1; i > -1; i--) {
		if (g.children[i].body) {
			if (getProp(g.children[i].body, 'type') == 'wood') {
				g.addChild(g.children[i]);
			}
		}
	}
	// creatures depth
	for (i = g.children.length - 1; i > -1; i--) {
		if (g.children[i].key.indexOf('ladybug') != -1 || g.children[i].key.indexOf('fly') != -1 || g.children[i].key.indexOf('lizard') != -1 || g.children[i].key.indexOf('frog') != -1) {
			g.addChild(g.children[i]);
		}
	}

	if (flip) {
		for (i = 0; i < flip.length; i++) {
			getSprite(flip[i]).scale.x = -1;
		}
	}

	if (top) {
		for (i = 0; i < top.length; i++) {
			g.addChild(getSprite(top[i]));
		}
	}

}

// get custom properties from RUBE generated bodies
function getProp(body, key) {
	var arr = body.data.customProperties;
	for (var i = 0; i < arr.length; i++) {
		//console.log(arr[i]);
		if (arr[i].name == key) {
			//console.log(arr[i].int);
			if (arr[i].int) {
				return arr[i].int;
			} else if (arr[i].string) {
				return arr[i].string;
			}
		}
	}
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
