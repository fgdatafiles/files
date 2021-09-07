var debug = false; // if true adds bug position row, col, type text
//var factsLocation = 'left'; //left or popup

// levelKeys allow for easy re-arrangement of levels - keep first element empty
var levelKeys = ['', 'spiderweb', 'swamp', 'ants', 'night', 'bees', 'desert', 'wood', 'garden', 'butterflies', 'prairie'];
var levelKey;
var boxColors = {
	'ants': '#f0fc82',
	'spiderweb': '#d3db2b',
	'butterflies': '#eeff76',
	'bees': '#feee1b',
	'wood': '#70d4ef',
	'swamp': '#eeff76',
	'garden': '#d3db2b',
	'night': '#00a8e6',
	'desert': '#feee1b',
	'prairie': '#eeff76'
};
var levelNames = {
	'ants': 'ANT COLONY',
	'spiderweb': 'SPIDERWEB',
	'butterflies': 'BUTTERFLY GARDEN',
	'bees': 'BEEHIVE',
	'wood': 'BUG TREE',
	'swamp': 'MOSQUITO MARSH',
	'garden': 'LADYBUG LAND',
	'night': 'BUGS AT NIGHT',
	'desert': 'BUGGY DESERT',
	'prairie': 'BUGS ON THE PRAIRIE'
};
var levelNamesDynamic = false;
var movesPerLevel = {
	'spiderweb': 25,
	'swamp': 25,
	'ants': 24,
	'night': 24,
	'bees': 23,
	'desert': 23,
	'wood': 22,
	'garden': 22,
	'butterflies': 21,
	'prairie': 21
};
var bugsToRemovePerLevel = {
	'ants': 375,
	'spiderweb': 350,
	'butterflies': 400,
	'bees': 400,
	'wood': 400,
	'swamp': 200,
	'garden': 325,
	'night': 250,
	'desert': 200,
	'prairie': 250
};
/*
bugsToRemovePerLevel = {
	'ants': 1,
	'spiderweb': 1,
	'butterflies': 1,
	'bees': 1,
	'wood': 1,
	'swamp': 1,
	'garden': 1,
	'night': 1,
	'desert': 1,
	'prairie': 1
};*/
var minMatchesForSpecial = {
	'ants': 3,
	'spiderweb': 3,
	'butterflies': 4,
	'bees': 3,
	'wood': 4,
	'swamp': 3,
	'garden': 4,
	'night': 3,
	'desert': 4,
	'prairie': 4
};
// pool of random bugs to pick from at level start - allows us to weight so special bug comes up less
var bugTypeStartPool = {
	'ants': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'spiderweb': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'butterflies': [1, 2, 3, 4, 5],
	'bees': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'wood': [1, 2, 3, 4, 5],
	'swamp': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'garden': [1, 2, 3, 4, 5],
	'night': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'desert': [1, 2, 3, 4, 5],
	'prairie': [1, 2, 3, 4, 5]
};
// pool of random bugs to pick from for bug regeneration - allows us to weight so special bug comes up less
var bugTypeRegeneratePool = {
	'ants': [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5],
	'spiderweb': [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5],
	'butterflies': [1, 2, 3, 4, 1, 2, 3, 4, 5],
	'bees': [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5],
	'wood': [1, 2, 3, 4, 5],
	'swamp': [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5],
	'garden': [1, 1, 2, 3, 4, 5],
	'night': [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5],
	'desert': [1, 2, 3, 4, 5],
	'prairie': [1, 2, 3, 4, 5]
};
var unlocked = 1;
var level = 1;
var public = false;

var game;

// preloader
var preloader;
var preloaderBar;
var preloaderPartsLoaded = 0;

// groups
var background;
var grid;
var progressMeter;
var popup;
var levelSelect;
var gameScreen;

var progressMeterFill;

var num;
var bugTypes; //array
var bugObjects; //array

var bugTypesQueue;

var rows = 9;
var cols = 9;
var cellSize = 70;

var bugID;
var bug1;
var bug2;
var boxes;
var box1;
var box2;
var boxBorder = 4;

var animate;
var swappedBugs;
var fallingBugs;
var leavingBugs;
var movesLeft;
var bugsToRemove;
var bugsRemoved;
var bugsToLaunch = [];
var bugsToAnimate = [];
var activeBugs;

var movesLeftText;

var data;
var factsText;
var factIndexes = {
	'ants': 0,
	'spiderweb': 0,
	'butterflies': 0,
	'bees': 0,
	'wood': 0,
	'swamp': 0,
	'garden': 0,
	'night': 0,
	'desert': 0,
	'prairie': 0
};

var movesPossible;
var gameCompleted = false;
var fullscreen = false;

var clickSound;
var matchSound;
var nomatchSound;
var dropSound;
var levelEndSound;
var levelFailSound;
var ambienceSound;
var powerUpSound;
var flySound;
var glowSound;
var spinSound;
var stingSound;
var jumpSound;

function loadGame(mode) {
	if (mode == 1) {
		unlocked = 1;
		public = true;
	} else if (mode == 2) {
		unlocked = 1;
		public = false;
	} else if (mode == 3) {
		unlocked = 10;
		public = false;
	} else if (mode == 4) {
		unlocked = 10;
		public = false;
		fullscreen = true;
	} else {
		// final
		//unlocked = 1;//using cookie now
		public = false;
		fullscreen = true;
	}
	getJSON();
}

function getJSON() {
	//console.log("loading JSON");
	$.getJSON('bugs.json', function (result) {
		data = result;
		console.log("loaded JSON");
		//console.log(data.facts.swamp);
		startPhaser();
	}).fail(function (jqXHR, textStatus, errorThrown) {
		//console.log("JSON " + errorThrown);
	});
}

function startPhaser() {
	// Phaser.AUTO broke on ipad!
	game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'bugs', {
		init: init,
		preload: preload,
		create: create,
		update: update,
		render: render
	});
}

function init() {
	game.stage.backgroundColor = '#6d94b5';
	// keep text crisp
	game.renderer.renderSession.roundPixels = true;

	// using this gets rid of all othe screen elements
	/*game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setMinMax(1024, 768, 1024, 768);
	game.scale.pageAlignVertically = true;
	game.scale.pageAlignHorizontally = true;*/

	if (game.device.desktop === false || fullscreen) {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.setMinMax(100, 75, 1024, 768);
		//screen.orientation.lock('landscape') chrome and android
		/*game.scale.forceOrientation(true, false);
		game.scale.enterIncorrectOrientation.add(enterIncorrectOrientation);
		game.scale.leaveIncorrectOrientation.add(leaveIncorrectOrientation);
		game.scale.onOrientationChange.add(onOrientationChange);
		game.scale.refresh();*/
	}
}

function preload() {
	preloader = game.add.group();

	// images to load array
	var images = ['splashTop:splash_top', 'progressMeter:progress_meter_frame', 'progressMeterBlue:progress_meter_blue', 'progressMeterFill:progress_meter_fill',

				  'logo:logo', 'levelSelectBG:level_select_bg', 'levelSelectCircle:level_select_circle', 'levelSelectLeaf:level_select_leaf', 'lock:lock',
				  'btnMainMenu:btn_main_menu', 'btnPlay:btn_play', 'btnContinue:btn_continue', 'btnPlayAgain:btn_play_again', 'btnSignUp:btn_sign_up', 'btnNextLevel:btn_next_level', 'levelTitles:level_titles',

				  'popupHelp:popup_help', 'howToPlay:how_to_play', 'helpPrev:help_prev', 'helpNext:help_next', 'help1:1', 'help2:2', 'howToPlayGrid1:how_to_play_grid1', 'howToPlayGrid2:how_to_play_grid2',

				  'bugBash:bug_bash', 'factsBox:facts_box', 'weird:weird_but_true', 'movesLeft:moves_left', 'helpBtn:help_button', 'audioBtn:audio_button', 'audioBtnOff:audio_button_off',

				  'popup:popup', 'popupOutOfMoves:popup_out_of_moves', 'levelComplete:level_complete', 'outOfMoves:out_of_moves',

				  'antsLevelSelect:level_select_ant', 'antsBG:bg_ants', 'antsGrid:grid_aqua', 'ants1:ant_black', 'ants2:ant_brown', 'ants3:ant_green', 'ants4:ant_red', 'ants5:ant_pupa', 'ants6:ant_queen', 'antsMeter:meter_ant',

				  'spiderwebLevelSelect:level_select_spider', 'spiderwebBG:bg_spiderweb', 'spiderwebGrid:grid_spiderweb', 'spiderweb1:fly_blue', 'spiderweb2:fly_green', 'spiderweb3:fly_purple', 'spiderweb4:fly_red', 'spiderweb5:spider', 'spiderweb6:spider_special', 'spiderwebMeter:meter_fly',

				  'butterfliesLevelSelect:level_select_butterfly', 'butterfliesBG:bg_butterflies', 'butterfliesGrid:grid_aqua', 'butterflies1:butterfly_monarch', 'butterflies2:butterfly_morpho', 'butterflies3:butterfly_swallowtail', 'butterflies4:butterfly_mourningcloak', 'butterflies5:chrysalis', 'butterflies6:butterfly_buckeye', 'butterfliesMeter:meter_butterfly',

				  'beesLevelSelect:level_select_bee', 'beesBG:bg_bees', 'beesGrid:grid_bees', 'bees1:bee_blue', 'bees2:bee_green', 'bees3:bee_red', 'bees4:bee_yellow', 'bees5:bee_pupa', 'bees6:bee_queen', 'beesMeter:meter_bee',

				  'woodLevelSelect:level_select_beetle', 'woodBG:bg_wood', 'woodGrid:grid_wood', 'wood1:beetle_brown', 'wood2:beetle_orange', 'wood3:millipede_gray', 'wood4:millipede_red', 'wood5:termite_worker', 'wood6:termite_eater', 'woodMeter:meter_beetle',

				  'swampLevelSelect:level_select_mosquito', 'swampBG:bg_swamp', 'swampGrid:grid_aqua', 'swamp1:mosquito_green', 'swamp2:mosquito_purple', 'swamp3:mosquito_red', 'swamp4:mosquito_yellow', 'swamp5:dragonfly', 'swamp6:dragonfly_special', 'swampMeter:meter_mosquito',

				  'gardenLevelSelect:level_select_ladybug', 'gardenBG:bg_garden', 'gardenGrid:grid_garden', 'garden1:aphid', 'garden2:lacewing', 'garden3:stinkbug_orange', 'garden4:stinkbug_brown', 'garden5:ladybug', 'garden6:ladybug_special', 'gardenMeter:meter_aphid',

				  'nightLevelSelect:level_select_click', 'nightBG:bg_night', 'nightGrid:grid_night', 'night1:click_beetle', 'night2:cricket', 'night3:glow_worm', 'night4:luna_moth', 'night5:firefly', 'night6:firefly_glowing', 'night7:firefly_glowing_open', 'nightMeter:meter_click', 'glowBurst:glow_burst',

				  'desertLevelSelect:level_select_scorpion', 'desertBG:bg_desert', 'desertGrid:grid_desert', 'desert1:death_beetle', 'desert2:dung_beetle', 'desert3:inflated_beetle', 'desert4:scarab_beetle', 'desert5:scorpion', 'desert6:scorpion_glowing', 'desert7:scorpion_striking', 'desertMeter:meter_scarab',

				  'prairieLevelSelect:level_select_longhorn', 'prairieBG:bg_prairie', 'prairieGrid:grid_prairie', 'prairie1:alfalfa_bug', 'prairie2:longhorn_beetle', 'prairie3:partridge_bug', 'prairie4:prairie_cricket', 'prairie5:grasshopper', 'prairie6:grasshopper_glowing', 'prairie7:grasshopper_jumping_glowing', 'prairieMeter:meter_longhorn'
				 ];

	// add images
	game.load.image('bgSplash', 'images/bg_splash.jpg');
	for (var i = 0; i < images.length; i++) {
		var imageData = images[i].split(":");
		game.load.image(imageData[0], 'images/' + imageData[1] + '.png');
	}

	//console.log(game.device, game.device.desktop);
	//alert('iOS ' + game.device.iOS + ' macOS ' + game.device.macOS);

	// load seamless loops
	loops = ['ambience:day', 'night:night', 'desert:light_wind'];
	for (i = 0; i < loops.length; i++) {
		var loopsData = loops[i].split(":");
		if (game.device.iOS || game.device.macOS) {
			game.load.audio(loopsData[0], ['sounds/' + loopsData[1] + '.m4a']);
		} else {
			// Firefox and Chrome will use OGG
			// IE11 will fall back to MP3, which will have a small gap at the end before replaying
			game.load.audio(loopsData[0], ['sounds/' + loopsData[1] + '.ogg', 'sounds/' + loopsData[1] + '.mp3']);
		}
	}

	// add audio
	var mp3ogg = ['click:click-bright_M17XtuE_', 'match:whoosh-bright_GyIP3uE_', 'nomatch:chime-bright-short_fyZFDuN_', 'drop:magical-whoosh-twinkle-shimmer_zk7xKKNO', 'powerUp:chime-metallic-harmonic-delay_MJZEOuVO', 'levelEnd:chime-ascend_GJPmP_E_', 'levelFail:chime-melody_fy-V_ONd', 'fly:cricket-interface-whoosh_GJQq3BVd', 'glow:chime-digital-twinkle_zJq3wuVd', 'spin:cockroach-scurry-movement-short_GJR7N3E_', 'sting:monster-scorpion-tail-snap-stinger-impact-blood-juicy_M1pB3UV_', 'jump:spring-twang_zkaRp94_'];
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

	// preloader images
	if (cacheKey == 'bgSplash' || cacheKey == 'splashTop') {
		// add splash background and top first
		preloader[cacheKey] = game.add.sprite(0, 0, cacheKey);
		preloader.add(preloader[cacheKey]);
		preloaderPartsLoaded++;
	} else if (cacheKey.indexOf('progressMeter') != -1) {
		preloaderPartsLoaded++;
	}

	// once all preloader parts are loaded create preloader bar
	if (preloaderPartsLoaded == 5) {
		preloaderPartsLoaded = 0;

		// make sure splash top is above background
		preloader.addChild(preloader.bgSplash);
		preloader.addChild(preloader.splashTop);

		// meter that show's level progress
		progressMeter = game.add.group();
		progressMeter.x = 376;
		progressMeter.y = 650;
		// blue empty image
		var blue = game.add.image(4, 6, 'progressMeterBlue');
		progressMeter.addChild(blue);
		// bar that fills meter
		progressMeterFill = game.add.image(-257, 6, 'progressMeterFill');
		progressMeter.addChild(progressMeterFill);
		// fill bar mask
		var mask = game.add.graphics(0, 0);
		mask.beginFill(0xff0000);
		mask.moveTo(3, 25);
		mask.lineTo(11, 5);
		mask.lineTo(260, 5);
		mask.lineTo(271, 25);
		mask.lineTo(260, 43);
		mask.lineTo(11, 43);
		mask.lineTo(3, 25);
		mask.endFill();
		progressMeter.addChild(mask);
		progressMeterFill.mask = mask;
		// the actual meter
		var progressMeterBG = game.add.image(0, 0, 'progressMeter');
		progressMeter.addChild(progressMeterBG);
		progressMeter.fill = function (percent) {
			progressMeterFill.x = Math.round(-257 + 262 * percent);
		};
		preloader.add(progressMeter);
		progressMeter.fill(0);
	}

	// update preload meter
	if (progressMeter) {
		progressMeter.fill(progress * 0.01);
	}

	//console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
}

// called when preloading is complete
function loadComplete() {
	//preloader.destroy();
}

function create() {
	game.input.maxPointers = 1;

	// cookie
	var unlockedCookie = getCookie('unlocked');
	if (!unlockedCookie) {
		console.log('no cookie!');
		setCookie('unlocked', 1, 365);
	} else {
		console.log('cookie found!');
		unlocked = Number(unlockedCookie);
		console.log('unlocked', unlocked);
	}

	// init sounds
	clickSound = game.add.audio('click');
	matchSound = game.add.audio('match');
	nomatchSound = game.add.audio('nomatch');
	dropSound = game.add.audio('drop');
	levelEndSound = game.add.audio('levelEnd');
	levelFailSound = game.add.audio('levelFail');
	powerUpSound = game.add.audio('powerUp');
	flySound = game.add.audio('fly');
	glowSound = game.add.audio('glow');
	spinSound = game.add.audio('spin');
	stingSound = game.add.audio('sting');
	jumpSound = game.add.audio('jump');
	ambienceSound = game.add.audio('ambience');
	ambienceSound.play('', 0, 1, true);

	// once loaded hide preloader meter and show play button
	progressMeter.visible = false;
	var btnPlay = game.add.image(458, 645, 'btnPlay');
	btnPlay.inputEnabled = true;
	btnPlay.input.useHandCursor = true;
	btnPlay.events.onInputDown.add(function () {
		makeLevelSelectScreen();
		preloader.destroy();
		clickSound.play();
	});
	preloader.add(btnPlay);

	//makeLevelSelectScreen();
	//showPopup();
}


function makeGameScreen(startWithHelp) {

	// keep text crisp
	game.renderer.renderSession.roundPixels = true;

	levelKey = levelKeys[level];
	console.log('makeGameScreen levelKey', levelKey);
	if (levelKey == 'night' || levelKey == 'desert') {
		ambienceSound.stop();
		ambienceSound = game.add.audio(levelKey);
		ambienceSound.play('', 0, 1, true);
	}

	gameScreen = game.add.group();

	// background elements
	background = game.add.group();
	// background image
	background.addChild(game.add.image(0, 0, levelKey + 'BG'));

	// semi-transparent strip for content
	var bgOverlay = game.add.graphics(27, 0);
	var opacity = 0.55;
	if (levelKey == 'night') {
		opacity = 0.2;
	}
	bgOverlay.beginFill('0xffffff', opacity);
	bgOverlay.drawRect(0, 0, 310, 768);
	bgOverlay.endFill();
	background.addChild(bgOverlay);

	// weird but true facts box
	/*	gameScreen.facts = game.add.group();
	gameScreen.facts.x = 46;
	gameScreen.facts.y = 68;
	gameScreen.facts.addChild(game.add.image(0, 0, 'factsBox'));
	gameScreen.facts.addChild(game.add.image(89, 13, 'weird'));
	// add text
	factsText = game.add.text(137, 118, '', {
		font: '16px bpreplayregular',
		fill: '#000000',
		strokeThickness: 0.3,
		align: 'center',
		wordWrap: true,
		wordWrapWidth: 200
	});
	factsText.lineSpacing = -10;
	gameScreen.facts.add(factsText);
	// function to update facts after match action is complete
	gameScreen.updateFacts = function () {
		console.log(data.facts);
		console.log('levelKey', levelKey);
		if (factsText.width > 10) {
			gameScreen.factsFadeOut = game.add.tween(factsText).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None, true);
			gameScreen.factsFadeOut.onComplete.add(function () {
				gameScreen.factsFadeOut.onComplete.removeAll();
				factsText.setText(data.facts[levelKey][factIndexes[levelKey] % data.facts[levelKey].length]);
				factsText.x = Math.floor(137 + 4 - factsText.width / 2);
				factIndexes[levelKey]++;
				gameScreen.factsFadeIn = game.add.tween(factsText).to({
					alpha: 1
				}, 500, Phaser.Easing.Linear.None, true);
			});
		} else {
			factsText.setText(data.facts[levelKey][factIndexes[levelKey] % data.facts[levelKey].length]);
			factsText.x = Math.floor(137 + 4 - factsText.width / 2);
			factIndexes[levelKey]++;
		}
	}
	gameScreen.updateFacts();
	background.addChild(gameScreen.facts);*/

	// grid
	background.addChild(game.add.image(363, 67, levelKey + 'Grid'));
	gameScreen.add(background);

	// selection boxes that appear behind bugs
	boxes = game.add.group();
	boxes.x = 333;
	boxes.y = 69;
	gameScreen.add(boxes);

	// contains bugs
	grid = game.add.group();
	grid.x = boxes.x = 364;
	grid.y = boxes.y = 68;
	gameScreen.add(grid);

	gameScreen.add(game.add.image(69, 67, 'bugBash'));

	// meter that show's level progress
	progressMeter = game.add.group();
	progressMeter.x = 46;
	progressMeter.y = 358 - 30; //358 if weird but true facts showing
	// blue empty image
	var blue = game.add.image(4, 6, 'progressMeterBlue');
	progressMeter.addChild(blue);
	// bar that fills meter
	progressMeterFill = game.add.image(-257, 6, 'progressMeterFill');
	progressMeter.addChild(progressMeterFill);
	// fill bar mask
	var mask = game.add.graphics(0, 0);
	mask.beginFill(0xff0000);
	mask.moveTo(3, 25);
	mask.lineTo(11, 5);
	mask.lineTo(260, 5);
	mask.lineTo(271, 25);
	mask.lineTo(260, 43);
	mask.lineTo(11, 43);
	mask.lineTo(3, 25);
	mask.endFill();
	progressMeter.addChild(mask);
	progressMeterFill.mask = mask;
	// the actual meter
	var progressMeterBG = game.add.image(0, 0, 'progressMeter');
	progressMeter.addChild(progressMeterBG);
	progressMeter.fill = function (percent) {
		if (percent > 1) {
			percent = 1;
		}
		console.log('percent', percent);
		if (!percent) {
			progressMeterFill.x = -257;
		} else {
			var toX = Math.round(-257 + 262 * percent);
			game.tweens.remove(progressMeter.fillTween);
			progressMeter.fillTween = game.add.tween(progressMeterFill).to({
				x: toX
			}, 500, Phaser.Easing.Linear.None, true);
			game.tweens.remove(progressMeter.bugTween);
			progressMeter.bugTween = game.add.tween(progressMeter.progressBug).to({
				x: toX + 262 + progressBug.offset
			}, 500, Phaser.Easing.Linear.None, true);
		}
	};

	var progressBug = game.add.image(0, 24, levelKey + 'Meter');
	//progressBug.anchor.setTo(0.35, 0);//causing fractional values and blurring
	progressBug.offset = -Math.round(progressBug.width * 0.35);
	progressBug.x += progressBug.offset;
	progressBug.y -= Math.round(progressBug.height / 2);
	progressMeter.addChild(progressBug);
	progressMeter.progressBug = progressBug;

	gameScreen.add(progressMeter);
	progressMeter.fill(0);

	var movesLeft = game.add.image(46, 447 - 30, 'movesLeft'); //447 if weird but true facts showing
	gameScreen.add(movesLeft);
	movesLeftText = game.add.text(184, movesLeft.y + 69, '99', {
		font: '40px bpreplaybold',
		fill: '#000000',
		align: 'center'
	});
	//movesLeftText.anchor.x = Math.round(movesLeftText.width * 0.5) / movesLeftText.width;
	//movesLeftText.anchor.setTo(0.5, 0.5);
	movesLeftText.anchor.x = 0.5;
	gameScreen.add(movesLeftText);

	var helpBtn = game.add.sprite(83, 612, 'helpBtn'); //613 if weird but true facts showing
	helpBtn.inputEnabled = true;
	helpBtn.input.useHandCursor = true;
	helpBtn.events.onInputDown.add(function () {
		clickSound.play();
		showHelp(true);
	});
	gameScreen.add(helpBtn);

	var audioBtnOn = game.add.sprite(193, helpBtn.y, 'audioBtn');
	gameScreen.add(audioBtnOn);
	var audioBtnOff = game.add.sprite(193, helpBtn.y, 'audioBtnOff');
	audioBtnOff.alpha = 0;
	audioBtnOff.inputEnabled = true;
	audioBtnOff.input.useHandCursor = true;
	audioBtnOff.events.onInputDown.add(function () {
		if (!audioBtnOff.alpha) {
			audioBtnOn.alpha = 0;
			audioBtnOff.alpha = 1;
			game.sound.volume = 0;
		} else {
			audioBtnOn.alpha = 1;
			audioBtnOff.alpha = 0;
			game.sound.volume = 1;
		}
		clickSound.play();
	});
	gameScreen.add(audioBtnOff);

	newGame();

	if (startWithHelp) {
		showHelp();
	}
}



function makeLevelSelectScreen() {

	// if we mix odd and even strokes this can't be true or text is misaligned
	//game.renderer.renderSession.roundPixels = false;

	console.log('makeLevelSelectScreen levelKey', levelKey);
	if (levelKey == 'night' || levelKey == 'desert') {
		ambienceSound.stop();
		ambienceSound = game.add.audio('ambience');
		ambienceSound.play('', 0, 1, true);
	}

	levelSelect = game.add.group();

	var levelSelectBG = game.add.image(0, 0, 'levelSelectBG');
	levelSelect.add(levelSelectBG);

	var logo = game.add.image(24, 24, 'logo');
	levelSelect.add(logo);

	// generate level select buttons
	levelSelect.locked = [];
	var btnCoords = [[190, 47], [428, 47], [665, 47], [70, 283], [308, 283], [547, 283], [785, 283], [190 - 40, 520], [428, 520], [665 + 40, 520]];
	for (var i = 0; i < btnCoords.length; i++) {
		var btn = game.add.group();
		btn.x = btnCoords[i][0];
		btn.y = btnCoords[i][1];
		var circle = game.add.image(12, 41, 'levelSelectCircle');
		btn.circle = circle;
		btn.add(circle);

		var key = levelKeys[i + 1];
		var bugKey = key + 'LevelSelect';
		var bug;
		if (key == 'ants') {
			bug = game.add.image(11, 37, bugKey);
		} else if (key == 'spiderweb') {
			bug = game.add.image(7, 38, bugKey);
		} else if (key == 'butterflies') {
			bug = game.add.image(16, 44, bugKey);
		} else if (key == 'bees') {
			bug = game.add.image(23, 56, bugKey);
		} else if (key == 'wood') {
			bug = game.add.image(43, 36, bugKey);
		} else if (key == 'swamp') {
			bug = game.add.image(17, 36, bugKey);
		} else if (key == 'garden') {
			bug = game.add.image(33, 53, bugKey);
		} else if (key == 'night') {
			bug = game.add.image(36, 39, bugKey);
		} else if (key == 'desert') {
			bug = game.add.image(27, 35, bugKey);
		} else if (key == 'prairie') {
			bug = game.add.image(26, 53, bugKey);
		}
		btn.bug = bug;

		btn.add(bug);
		var leaf = game.add.image(0, 0, 'levelSelectLeaf');
		btn.leaf = leaf;
		btn.leaf.level = i + 1;
		btn.add(leaf);
		var lock = game.add.image(49, 78, 'lock');
		btn.lock = lock;
		btn.add(lock);

		// add level number and title
		// Safari 9.0.1 renders text incorrectly so now using image
		// using a SIX-PER-EM SPACE before the added HAIR SPACE www.cs.tut.fi/~jkorpela/chars/spaces.html
		if (levelNamesDynamic) {
			var myText = multistroke(Number(i + 1) + '. ' + levelNames[key], '20px bpreplaybold', '#FFF', ['#231f20', '#a8bf38'], [11, 7]);
			myText.x = (89 - myText.width / 2) + 8;
			myText.y = 172;
			btn.add(myText);
		}

		levelSelect.add(btn);

		if (i < unlocked) {
			btn.leaf.locked = false;
			btn.leaf.alpha = 0;
			lock.visible = false;

		} else {
			btn.leaf.locked = true;
			bug.visible = false;
			levelSelect.locked.push(btn.leaf);
		}

		btn.leaf.inputEnabled = true;
		btn.leaf.input.useHandCursor = true;
		btn.leaf.events.onInputOver.add(function (btn) {
			btn.alpha = 0;
			btn.parent.lock.alpha = 0.65;
			btn.parent.bug.visible = true;
		});
		btn.leaf.events.onInputOut.add(function (btn) {
			if (btn.locked) {
				btn.alpha = 1;
				btn.parent.bug.visible = false;
			}
			btn.parent.lock.alpha = 1;
		});
		btn.leaf.events.onInputDown.add(function (btn) {
			console.log('onInputDown');
			if (!btn.locked) {
				btn.alpha = 0;
				//btn.parent.lock.alpha = 0.5;
				console.log(btn.level);
				game.time.events.remove(levelSelect.ipadFix);
				level = btn.level;
				levelSelect.destroy();
				makeGameScreen(true);
				clickSound.play();
			} else {
				// need for ipad
				btn.alpha = 0;
				btn.parent.lock.alpha = 0.65;
				btn.parent.bug.visible = true;
			}
		});
		/*btn.leaf.events.onInputUp.add(function (btn) {
			console.log('onInputUp');
			if (levelSelect.checkForRelease) {
				console.log('release me');
			}
		});*/
	}

	// ipad button stuck in down state fix
	// minor glitch - if button is pressed, released, then rolled over it doesn't work until rolled off again and then back on
	// resetting rollover with btn.events.onInputOver.removeAll doesn't help
	levelSelect.checkForRelease = false;
	levelSelect.ipadFix = game.time.events.loop(50, function () {
		//console.log('totalActivePointers', game.input.totalActivePointers);
		//console.log('activePointer.isUp', game.input.activePointer.isUp);
		// if user is only using mouse this will never happen
		if (game.input.totalActivePointers) {
			levelSelect.checkForRelease = true;
		}
		// if activated and no pointers then reset buttons
		if (levelSelect.checkForRelease && !game.input.totalActivePointers) {
			levelSelect.checkForRelease = false;
			for (var i = 0; i < levelSelect.locked.length; i++) {
				var btn = levelSelect.locked[i];
				// if leaf is hidden / button is active
				if (!btn.alpha) {
					// if pointer is not over leaf reset it
					//console.log(i, 'over', btn.input.pointerOver());
					// btn.input.pointerOver reads true on iPad even if touch is release over button
					//if (!btn.input.pointerOver()) {
					btn.alpha = 1;
					btn.parent.bug.visible = false;
					btn.parent.lock.alpha = 1;
					//}
				}
			}
		}
	});

	// level titles graphic due to Safari multistroke issue
	if (!levelNamesDynamic) {
		var levelTitles = game.add.image(60 - 5, 219, 'levelTitles');
		levelSelect.add(levelTitles);
	}
}




// make help screen
function showHelp(gameInPlay) {

	//levelKey = levelKeys[level];

	popup = game.add.group();

	popup.add(makeDimmer());

	var popwin = game.add.image(game.world.centerX, game.world.centerY, 'popupHelp');
	popwin.anchor.setTo(0.5, 0.5);
	//popwin.x -= Math.round(popwin.width / 2);
	//popwin.y -= Math.round(popwin.height / 2);
	popup.add(popwin);

	// window header - all elements below are based off of this y
	var title = game.add.image(226, popwin.y - popwin.height / 2 - 19, 'howToPlay');
	popup.add(title);

	// level header
	var headerText = game.add.text(260, title.y + 97, 'LEVEL ' + level + ': ' + levelNames[levelKey], {
		font: '20px bpreplaybold',
		fill: '#000000'
	});
	popup.add(headerText);

	// legend
	var legendInfo = {
		'ants': [1, 'Ant', 5, 'Pupa', 6, 'Queen Ant'],
		'spiderweb': [1, 'Fly', 5, 'Spider', 6, 'Hungry\nSpider'],
		'butterflies': [1, 'Butterfly', 5, 'Chrysalis', 6, 'Special\nButterfly'],
		'bees': [1, 'Bee', 5, 'Pupa', 6, 'Queen Bee'],
		'wood': [1, 'Beetle', 3, 'Millipede', 5, 'Worker\nTermite', 6, 'Soldier\nTermite'],
		'swamp': [1, 'Mosquito', 5, 'Dragonfly'],
		'garden': [1, 'Aphid', 2, 'Lacewing', 3, 'Stinkbug', 5, 'Ladybug', 6, 'Hungry\nLadybug'],
		'night': [1, 'Click\nBeetle', 2, 'Cricket', 3, 'Glow Worm', 4, 'Luna Moth', 5, 'Firefly'],
		'desert': [1, 'Death\nBeetle', 2, 'Dung\nBeetle', 3, 'Inflated\nBeetle', 4, 'Scarab\nBeetle', 5, 'Scorpion'],
		'prairie': [1, 'Alfalfa\nBug', 2, 'Longhorn\nBeetle', 3, 'Partridge\nBug', 4, 'Prairie\nCricket', 5, 'Grasshopper']
	};
	var legend = game.add.group();
	for (var i = 0; i < legendInfo[levelKey].length; i += 2) {
		legend.add(game.add.image(i * 50, 0, levelKey + legendInfo[levelKey][i])); //legend.height
		var legendText = game.add.text(i * 50 + 35, 67, legendInfo[levelKey][i + 1], {
			font: '16px bpreplayregular',
			fill: '#000000',
			align: 'center'
		});
		legendText.anchor.setTo(0.5, 0);
		legendText.lineSpacing = -10;
		legendText.strokeThickness = 0.2;
		legend.add(legendText);
	}
	legend.x = 259;
	legend.y = headerText.y + headerText.height;
	popup.add(legend);

	// help section 1
	var help1 = game.add.group();
	help1.y = legend.y + legend.height + 10;
	popup.add(help1);

	// number 1 icon
	var number1 = game.add.image(259, 0, 'help1');
	help1.add(number1);

	// step 1 text
	var step1text = game.add.text(317, number1.y - 2, data.help[levelKey][0], {
		font: '16px bpreplayregular',
		fill: '#000000'
	});
	step1text.lineSpacing = -6;
	step1text.strokeThickness = 0.2;
	help1.add(step1text);

	// make first how to play grid
	var grid1 = game.add.group();
	grid1.x = 317;
	grid1.y = step1text.y + step1text.height + 10;
	help1.add(grid1);
	var grid1bg = game.add.image(-1, -1, 'howToPlayGrid1');
	grid1.add(grid1bg);

	// make first how to play grid selection boxes
	var selectBox1 = makeSelectionBox(0, 0);
	grid1.add(selectBox1);
	var selectBox2 = makeSelectionBox(0, 1);
	grid1.add(selectBox2);

	// make help bugs
	var helpBug1 = makeBug(0, 0, 3, true);
	grid1.add(helpBug1);
	var helpBug2 = makeBug(0, 1, 1, true);
	grid1.add(helpBug2);
	var helpBug3 = makeBug(0, 2, 3, true);
	grid1.add(helpBug3);
	var helpBug4 = makeBug(0, 3, 3, true);
	grid1.add(helpBug4);

	// help grid 1 animations
	var grid1timer;
	popup.grid1step1 = function () {
		selectBox1.visible = selectBox2.visible = false;
		helpBug1.reset();
		helpBug2.reset();
		helpBug3.reset();
		helpBug4.reset();
		grid1timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid1step2, this);
	};
	popup.grid1step2 = function () {
		selectBox1.visible = true;
		grid1timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid1step3, this);
	};
	popup.grid1step3 = function () {
		selectBox2.visible = true;
		grid1timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid1step4, this);
	};
	popup.grid1step4 = function () {
		selectBox1.visible = selectBox2.visible = false;
		helpBug1.swap(0, 1);
		helpBug2.swap(0, 0);
		grid1timer = game.time.events.add(Phaser.Timer.SECOND * 0.75, popup.grid1step5, this);
	};
	popup.grid1step5 = function () {
		helpBug1.fadeAway();
		helpBug3.fadeAway();
		helpBug4.fadeAway();
		grid1timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid1step1, this);
		console.log("STILL GOING");
	};
	popup.grid1step1();

	// help section 2
	var help2 = game.add.group();
	help2.y = help1.y;
	help2.visible = false;
	popup.add(help2);

	// number 2 icon
	var number2 = game.add.image(259, 0, 'help2');
	help2.add(number2);

	// step 2 text
	var step2text = game.add.text(317, step1text.y, data.help[levelKey][1].split('[#]').join(minMatchesForSpecial[levelKey]), { //.split('3').join('3 or more')
		font: '16px bpreplayregular',
		fill: '#000000'
	});
	step2text.lineSpacing = -6;
	step2text.strokeThickness = 0.2;
	help2.add(step2text);

	// make second how to play grid
	var grid2 = game.add.group();
	grid2.x = 317;
	grid2.y = grid1.y;
	help2.add(grid2);
	var grid2bg = game.add.image(-1, -1, 'howToPlayGrid2');
	grid2.add(grid2bg);

	// make second how to play grid selection boxes
	var selectBox3 = makeSelectionBox(1, 2);
	grid2.add(selectBox3);
	var selectBox4 = makeSelectionBox(0, 2);
	grid2.add(selectBox4);

	var helpBugsType2 = [
		[2, 4, 5, 4],
		[5, 5, 2, 5]
	];
	var helpBugs2 = [];

	for (var r = 0; r < 2; r++) {
		helpBugs2[r] = [];
		for (var c = 0; c < 4; c++) {
			//console.log(r, c);
			var helpBug = makeBug(r, c, helpBugsType2[r][c], true);
			grid2.add(helpBug);
			helpBugs2[r][c] = helpBug;
		}
	}

	var help2bug = helpBugs2[0][2];

	// bugs that drop in
	var helpBugs2drop1 = makeBug(-1, 0, 2, true);
	grid2.add(helpBugs2drop1);
	var helpBugs2drop2 = makeBug(-1, 1, 1, true);
	grid2.add(helpBugs2drop2);
	var helpBugs2drop3 = makeBug(-1, 2, 1, true);
	grid2.add(helpBugs2drop3);
	var helpBugs2drop4 = makeBug(-1, 3, 2, true);
	grid2.add(helpBugs2drop4);

	// help grid 2 animations
	var grid2timer;
	popup.grid2step1 = function () {
		selectBox3.visible = selectBox4.visible = false;
		helpBugs2[0][0].reset();
		helpBugs2[0][1].reset();
		helpBugs2[0][2].reset();
		helpBugs2[0][3].reset();
		helpBugs2[1][0].reset();
		helpBugs2[1][1].reset();
		helpBugs2[1][2].reset();
		helpBugs2[1][3].reset();
		help2bug.loadTexture(levelKey + '5');
		helpBugs2drop1.reset();
		helpBugs2drop2.reset();
		helpBugs2drop3.reset();
		helpBugs2drop4.reset();
		grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step2, this);
	};
	// select first bug
	popup.grid2step2 = function () {
		selectBox4.visible = true;
		grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step3, this);
	};
	// select second bug
	popup.grid2step3 = function () {
		selectBox3.visible = true;
		grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step4, this);
	};
	// swap bugs
	popup.grid2step4 = function () {
		selectBox3.visible = selectBox4.visible = false;
		help2bug.swap(1, 2);
		helpBugs2[1][2].swap(0, 2);
		grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step5, this);
	};
	// fade away matched bugs and show special bug
	popup.grid2step5 = function () {
		helpBugs2[1][0].fadeAway();
		helpBugs2[1][1].fadeAway();
		// swap to special bug image
		help2bug.loadTexture(levelKey + '6');
		helpBugs2[1][3].fadeAway();
		// drop bugs
		helpBugs2[0][0].drop(1);
		helpBugs2[0][1].drop(1);
		helpBugs2[0][3].drop(1);
		// drop new bugs
		helpBugs2drop1.drop(0);
		helpBugs2drop2.drop(0);
		helpBugs2drop4.drop(0);
		grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step6, this);
	};

	// help diverges at this point
	if (levelKey == 'swamp') {
		popup.grid2step6 = function () {
			// dragonfly fly and eat
			help2bug.hasStopTweens = true;
			grid2.addChild(help2bug);
			help2bug.flyTween = game.add.tween(help2bug).to({
				y: 0
			}, 200, Phaser.Easing.Linear.None, true);
			help2bug.flyTween.onComplete.add(function () {
				help2bug.flyTween.onComplete.removeAll();
				// fade away eaten bug
				helpBugs2[1][2].fadeAway();
				// continue flying and fade away
				help2bug.flyTween = game.add.tween(help2bug).to({
					y: -70,
					alpha: 0
				}, 200, Phaser.Easing.Linear.None, true);
			});
			grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
			help2bug.stopTweens = function () {
				game.tweens.remove(help2bug.flyTween);
			}
		};
	} else if (levelKey == 'garden') {
		// make ladybug eat aphids
		popup.grid2step6 = function () {
			help2bug.hasStopTweens = true;
			grid2.addChild(help2bug);
			help2bug.bugsToEat = [];
			for (i = 0; i < grid2.children.length; i++) {
				var bug2 = grid2.children[i];
				if (bug2.helpBug && bug2.type === 2) {
					help2bug.bugsToEat.push(bug2);
				}
			}
			help2bug.eat = function () {
				help2bug.bugToEat = help2bug.bugsToEat[0];
				help2bug.bugsToEat.shift();
				help2bug.eatTween = game.add.tween(this).to({
					x: help2bug.bugToEat.x,
					y: help2bug.bugToEat.y
				}, 200, Phaser.Easing.Quartic.InOut, true);
				help2bug.eatTween.onComplete.add(function () {
					help2bug.eatTween.onComplete.removeAll();
					help2bug.bugToEat.alpha = 0;
					if (help2bug.bugsToEat.length) {
						help2bug.eat();
					} else {
						help2bug.fadeAway();
						grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
					}
				});
			};
			help2bug.eat();
			help2bug.stopTweens = function () {
				game.tweens.remove(help2bug.eatTween);
			}
		};
	} else if (levelKey == 'night') {
		// firefly burst
		popup.grid2step6 = function () {
			help2bug.hasStopTweens = true;
			help2bug.glow = function () {
				//console.log('glow!');
				// open firefly
				help2bug.loadTexture('night7');
				// add glow burst
				var glow = game.add.image(help2bug.x + 35, help2bug.y + 35, 'glowBurst');
				help2bug.myGlow = glow;
				glow.anchor.setTo(0.5, 0.5);
				glow.alpha = 0;
				grid2.addAt(glow, 1);
				// fade in glow burst
				help2bug.glownTween = game.add.tween(glow).to({
					alpha: 1
				}, 200, Phaser.Easing.Linear.None, true);
				// when glow burst is in
				help2bug.glownTween.onComplete.add(function () {
					// fade it back out
					help2bug.glownTween.onComplete.removeAll();
					help2bug.glownTween = game.add.tween(glow).to({
						alpha: 0
					}, 200, Phaser.Easing.Linear.None, true);
					// destroy it when faded out
					help2bug.glownTween.onComplete.add(function () {
						help2bug.glownTween.onComplete.removeAll();
						glow.destroy();
					});
					// remove bugs that surround the firefly
					for (var i = 0; i < grid2.children.length; i++) {
						var other = grid2.children[i];
						if (other.helpBug) {
							var dist = Math.sqrt(Math.pow(other.x - help2bug.x, 2) + Math.pow(other.y - help2bug.y, 2));
							if (dist && dist < cellSize * 1.5) {
								other.fadeAway();
							}
						}
					}
					help2bug.fadeAway(500);
					grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
				});
			};
			help2bug.stopTweens = function () {
				game.tweens.remove(help2bug.glownTween);
				help2bug.myGlow.destroy();
			}
			help2bug.glow();
		};
	} else if (levelKey == 'desert') {
		// desert scorpion sting
		popup.grid2step6 = function () {
			help2bug.hasStopTweens = true;
			help2bug.sting = function () {
				// center bug
				help2bug.anchor.setTo(0.5, 0.5);
				help2bug.x += 35;
				help2bug.y += 35;
				// rotate scorpion
				help2bug.spinTween = game.add.tween(this).to({
					angle: 270
				}, 1200, Phaser.Easing.Quartic.Out, true);
				// snap tail
				help2bug.spinTween.onComplete.add(function () {
					help2bug.spinTween.onComplete.removeAll();
					help2bug.loadTexture('desert7');
					// make array of bugs to sting away
					help2bug.bugsToSting = [];
					for (var i = 0; i < grid2.children.length; i++) {
						var other = grid2.children[i];
						if (other.helpBug) {
							if (other.y == help2bug.y - 35 && other.x < help2bug.x) {
								help2bug.bugsToSting.push(other);
							}
						}
					}
					// sting away bugs
					help2bug.bugsToSting.reverse();
					for (var i = 0; i < help2bug.bugsToSting.length; i++) {
						help2bug.bugsToSting[i].fadeAway(i * 100);
					}
					help2bug.fadeAway(500);
					grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
				});
			};
			help2bug.stopTweens = function () {
				game.tweens.remove(help2bug.spinTween);
			}
			help2bug.sting();
		};
	} else if (levelKey == 'prairie') {
		// grasshopper jump
		popup.grid2step6 = function () {
			help2bug.hasStopTweens = true;
			help2bug.row = 1;
			help2bug.col = 2;
			grid2.addChild(help2bug);
			help2bug.jump = function () {
				// swap in jumping bug image
				help2bug.loadTexture('prairie7');
				help2bug.anchor.setTo(0.5, 0.5);
				help2bug.scale.x = help2bug.scale.y = 0.75;
				help2bug.x = help2bug.col * cellSize + cellSize * 0.5;
				help2bug.y = help2bug.row * cellSize + cellSize * 0.5;
				help2bug.row = 0;
				help2bug.col = 0;
				// scale up
				help2bug.upTween = game.add.tween(this.scale).to({
					x: 1,
					y: 1
				}, 500, Phaser.Easing.Quartic.In, true);
				// scale down
				help2bug.downTween = game.add.tween(this.scale).to({
					x: 0.75,
					y: 0.75
				}, 500, Phaser.Easing.Quartic.Out);
				help2bug.upTween.chain(help2bug.downTween);
				// jump to new cell
				help2bug.jumpTween = game.add.tween(this).to({
					x: help2bug.col * cellSize + cellSize * 0.5,
					y: help2bug.row * cellSize + cellSize * 0.5,
				}, 1000, Phaser.Easing.Quartic.InOut, true);
				help2bug.downTween.onComplete.add(function () {
					help2bug.downTween.onComplete.removeAll();
					// land cricket
					help2bug.loadTexture('prairie6');
					help2bug.scale.x = help2bug.scale.y = 1;
					// fade away bugs
					var bugsToFade = [helpBugs2[0][0], helpBugs2drop1, helpBugs2drop2];
					for (var b = 0; b < bugsToFade.length; b++) {
						if (bugsToFade[b]) {
							bugsToFade[b].fadeAway();
						}
					}
					help2bug.fadeAway(500);
					help2bug.row = 0;
					help2bug.col = 2;
					grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
				});
			};
			help2bug.stopTweens = function () {
				help2bug.row = 0;
				help2bug.col = 2;
				game.tweens.remove(help2bug.upTween);
				game.tweens.remove(help2bug.downTween);
				game.tweens.remove(help2bug.jumpTween);
			}
			help2bug.jump();
		}
	} else {
		// select special bug
		popup.grid2step6 = function () {
			selectBox3.visible = true;
			grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step7, this);
		};
		// select other bug
		popup.grid2step7 = function () {
			selectBox4.visible = true;
			grid2timer = game.time.events.add(Phaser.Timer.SECOND * 1, popup.grid2step8, this);
		};
		// hide selection boxes and swap bugs
		popup.grid2step8 = function () {
			selectBox3.visible = selectBox4.visible = false;
			helpBugs2[0][2].swap(0, 2);
			helpBugs2[1][2].swap(1, 2);
			grid2timer = game.time.events.add(Phaser.Timer.SECOND * 0.75, popup.grid2step9, this);
		};
		// fade away matched bugs
		popup.grid2step9 = function () {
			help2bug.fadeAway();
			// remove matched bugs
			for (i = 0; i < grid2.children.length; i++) {
				var bug = grid2.children[i];
				//console.log('bug.type', bug, bug.type);
				if (bug.helpBug && bug.type === helpBugs2[0][0].type) {
					bug.fadeAway();
				}
			}
			grid2timer = game.time.events.add(Phaser.Timer.SECOND * 2, popup.grid2step1, this);
		};
	}

	// start animations
	//popup.grid2step1();

	// previous button
	var btnPrev;
	btnPrev = game.add.image(popwin.x - popwin.width / 2 - 32, popwin.y - 36, 'helpPrev');
	btnPrev.visible = false;
	btnPrev.inputEnabled = true;
	btnPrev.input.useHandCursor = true;
	btnPrev.events.onInputDown.add(function () {
		game.time.events.remove(grid2timer);
		game.tweens.removeFrom(grid2, true);
		game.tweens.removeFrom(help2bug, true);
		if (help2bug.hasStopTweens) {
			help2bug.stopTweens();
		}
		btnPrev.visible = false;
		btnNext.visible = true;
		help1.visible = true;
		help2.visible = false;
		popup.grid1step1();
		clickSound.play();
	});
	popup.add(btnPrev);

	// next button
	var btnNext;
	btnNext = game.add.image(popwin.x + popwin.width / 2 - 41, btnPrev.y, 'helpNext');
	btnNext.inputEnabled = true;
	btnNext.input.useHandCursor = true;
	btnNext.events.onInputDown.add(function () {
		game.time.events.remove(grid1timer);
		game.tweens.removeFrom(grid1, true);
		btnPrev.visible = true;
		btnNext.visible = false;
		help1.visible = false;
		help2.visible = true;
		popup.grid2step1();
		clickSound.play();
	});
	popup.add(btnNext);

	// play button
	var btnPlay;
	if (!gameInPlay) {
		btnPlay = game.add.image(398, popwin.y + popwin.height / 2 - 36, 'btnPlay');
	} else {
		btnPlay = game.add.image(352, popwin.y + popwin.height / 2 - 36, 'btnContinue');
	}
	btnPlay.inputEnabled = true;
	btnPlay.input.useHandCursor = true;
	btnPlay.events.onInputDown.add(function () {
		game.time.events.remove(grid1timer);
		game.time.events.remove(grid2timer);
		game.tweens.removeFrom(grid1, true);
		game.tweens.removeFrom(grid2, true);
		game.tweens.removeFrom(help2bug, true);
		if (help2bug.hasStopTweens) {
			help2bug.stopTweens();
		}
		popup.destroy();
		clickSound.play();
	});
	popup.add(btnPlay);

	// main menu button
	var btnMainMenu = game.add.image(520, btnPlay.y, 'btnMainMenu');
	btnMainMenu.inputEnabled = true;
	btnMainMenu.input.useHandCursor = true;
	btnMainMenu.events.onInputDown.add(function () {
		game.time.events.remove(grid1timer);
		game.time.events.remove(grid2timer);
		game.tweens.removeFrom(grid1, true);
		game.tweens.removeFrom(grid2, true);
		game.tweens.removeFrom(help2bug, true);
		if (help2bug.hasStopTweens) {
			help2bug.stopTweens();
		}
		popup.destroy();
		destroyGame();
		makeLevelSelectScreen();
		clickSound.play();
	});
	popup.add(btnMainMenu);
}

function destroyGame() {
	game.time.removeAll();
	game.tweens.removeAll();
	game.input.onDown.removeAll();
	gameScreen.destroy();
}

function makeSelectionBox(row, col) {
	var selectionBox = game.add.graphics(0, 0);
	selectionBox.beginFill('0xc7d32f');
	selectionBox.drawRect(1 + col * 70, 1 + row * 70, 68, 68);
	selectionBox.endFill();
	selectionBox.visible = false;
	return selectionBox;
}




function showPopup(str) {
	popup = game.add.group();

	popup.add(makeDimmer());

	//bugsToRemove = 1000;
	var levelCompleted = true;
	if (bugsRemoved < bugsToRemove) {
		levelCompleted = false;
	}

	var popwin;
	/*if (str == 'noPossibleMoves'){
		alert('booya!');
	} else */
	if (!levelCompleted) {
		popwin = game.add.image(game.world.centerX, game.world.centerY, 'popupOutOfMoves');
		var outOfMoves = game.add.image(274, 224, 'outOfMoves');
		popup.add(popwin);
		popup.add(outOfMoves);
	} else {
		popwin = game.add.image(game.world.centerX, game.world.centerY, 'popup');
		var levelComplete = game.add.image(276, 165, 'levelComplete');
		popup.add(popwin);
		popup.add(levelComplete);
	}
	//popwin.anchor.setTo(0.5, 0.5);
	popwin.x -= Math.round(popwin.width / 2);
	popwin.y -= Math.round(popwin.height / 2);



	var content = game.add.group();
	content.x = 309;
	content.y = 262;
	popup.add(content);



	if (public && levelCompleted && level == 3) {
		var btnSignUp = game.add.image(278, 546, 'btnSignUp');
		btnSignUp.inputEnabled = true;
		btnSignUp.input.useHandCursor = true;
		btnSignUp.events.onInputDown.add(function () {
			window.location.href = 'http://kids.nationalgeographic.com/premium-promotions/premium-landing-page/';
		});
		popup.add(btnSignUp);
	}

	var btnPlayAgain = game.add.image(425, 546, 'btnPlayAgain');
	btnPlayAgain.inputEnabled = true;
	btnPlayAgain.input.useHandCursor = true;
	btnPlayAgain.events.onInputDown.add(function () {
		popup.destroy();
		destroyGame();
		makeGameScreen(false);
		clickSound.play();
	});
	popup.add(btnPlayAgain);

	var btnMainMenu = game.add.image(593, 546, 'btnMainMenu');
	btnMainMenu.inputEnabled = true;
	btnMainMenu.input.useHandCursor = true;
	btnMainMenu.events.onInputDown.add(function () {
		popup.destroy();
		destroyGame();
		makeLevelSelectScreen();
		clickSound.play();
	});
	popup.add(btnMainMenu);

	var resultsHeader;

	// if level fail
	if (!levelCompleted) {
		// out of moves popup
		var outOfMovesHeader = game.add.text(308, 322, 'NICE TRY!', {
			font: '20px bpreplaybold',
			fill: '#000000'
		});
		popup.add(outOfMovesHeader);
		var str = 'You almost did it! You are out of moves for Level ' + level + '!\nClick PLAY AGAIN below to try again.';
		console.log('movesPossible', movesPossible);
		if (!movesPossible) {
			str = 'There are no possible matches for Level ' + level + '!\nClick PLAY AGAIN below to try again.'
		}
		var outOfMovesText = game.add.text(308, 353, str, {
			font: '16px bpreplayregular',
			fill: '#000000',
			wordWrap: true,
			wordWrapWidth: 420
		});
		outOfMovesText.lineSpacing = -5;
		outOfMovesText.strokeThickness = 0.2;
		popup.add(outOfMovesText);
		btnPlayAgain.x = 349;
		btnPlayAgain.y = 484;
		btnMainMenu.x = 518;
		btnMainMenu.y = 484;

		levelFailSound.play();
	} else {
		// if level was complete
		var resultsStr = 'GREAT JOB!';
		if (level == 10 && !gameCompleted) {
			resultsStr = 'CONGRATULATIONS!';
		}
		resultsHeader = game.add.text(0, 0, resultsStr, {
			font: '20px bpreplaybold',
			fill: '#000000'
		});
		content.add(resultsHeader);

		/*	var resultsBody = game.add.text(0, 30, 'You completed Level 1. To play more levels, become a National Geographic Kids Adventure Pass Member!', {
		font: '16px bpreplayregular',
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 420
	});
	//resultsBody.fontWeight = 'bold';
	resultsBody.lineSpacing = -5;
	content.add(resultsBody);*/

		var resultsGroup = game.add.group();
		resultsGroup.y = 30;
		content.add(resultsGroup);

		if (public && level == 3) {

			var textParts = ['You completed Level ' + level + '. To play more levels, upgrade to', 'become an ', 'Adventure Pass Member', '!'];
			var textX = 0;
			var textY = 0;
			var font;
			var fill;
			for (var i = 0; i < textParts.length; i++) {
				//console.log(i, font);
				if (i == 2) {
					font = '16px bpreplaybold';
					//font = '16px bpreplayregular';
					fill = '#00a8e6';
				} else {
					font = '16px bpreplayregular';
					fill = '#000000';
				}
				var message = game.add.text(textX, textY, textParts[i], {
					font: font,
					fill: fill
				});
				message.lineSpacing = -5;
				if (i != 2) {
					//message.stroke = '#000000';
					message.strokeThickness = 0.2;
				}

				if (i > 0) {
					textX += message.width;
				}
				if (i == 2) {
					//message.fontWeight = 'bold';
					message.x -= 2;
					message.y = 22;
					// nudge ! over a tad
					//textX += 1;
				}
				resultsGroup.add(message);
				textY = 22;
			}

			var clickText = resultsGroup.getChildAt(2);
			clickText.inputEnabled = true;
			clickText.input.useHandCursor = true;
			clickText.events.onInputDown.add(function () {
				window.location.href = 'http://kids.nationalgeographic.com/premium-promotions/premium-landing-page/';
			});

		} else {
			// if on paid site / full version
			var winStr = 'You completed Level ' + level + '!';
			if (level == 10 && !gameCompleted) {
				winStr = 'You completed the game!\nFor more fun visit natgeokids.com/games.';
				gameCompleted = true;
			}
			var winText = game.add.text(0, 30, winStr, {
				font: '16px bpreplayregular',
				fill: '#000000'
			});
			winText.lineSpacing = -5;
			winText.strokeThickness = 0.2;
			winText.addColor('#00a8e6', 42);
			winText.addColor('#000000', 62);
			content.add(winText);

			var btn = game.add.graphics(134, 56);
			btn.beginFill(0xFF0000, 0);
			btn.drawRect(0, 0, 175, 18);
			btn.endFill();
			content.add(btn);
			btn.inputEnabled = true;
			btn.input.useHandCursor = true;
			btn.events.onInputDown.add(function () {
				//window.location.href = 'http://kids.nationalgeographic.com/games/';
				window.open('http://kids.nationalgeographic.com/games/', '_blank');
			});

			if (unlocked < level + 1) {
				unlocked = level + 1;
				console.log('unlocking level', unlocked);
				if (public && unlocked > 3) {
					unlocked = 3;
				}
				setCookie('unlocked', unlocked, 365);
			}

			if (level < 10) {
				btnPlayAgain.destroy();
				var btnNextLevel = game.add.image(352, 546, 'btnNextLevel');
				btnNextLevel.inputEnabled = true;
				btnNextLevel.input.useHandCursor = true;
				btnNextLevel.events.onInputDown.add(function () {
					popup.destroy();
					destroyGame();
					level++;
					makeGameScreen(true);
					clickSound.play();
				});
				popup.add(btnPlayAgain);
			} else {
				btnPlayAgain.x = 352;
			}
			btnMainMenu.x = 521;
		}

		// weird but true
		/*var weirdHeader = game.add.text(0, 95, 'Weird But True!', {
			font: '20px bpreplaybold',
			fill: '#000000'
		});
		content.add(weirdHeader);*/

		var weird = game.add.image(0, content.height + 8, 'weird');
		content.add(weird);

		var weirdBody = game.add.text(0, weird.y + weird.height + 8, data.facts[levelKey][factIndexes[levelKey] % data.facts[levelKey].length], {
			font: '16px bpreplayregular',
			fill: '#000000',
			wordWrap: true,
			wordWrapWidth: 420
		});
		factIndexes[levelKey]++;
		//weirdBody.fontWeight = 'bold';
		weirdBody.lineSpacing = -5;
		weirdBody.strokeThickness = 0.2;
		content.add(weirdBody);
		levelEndSound.play();
	}
}


// make semi-transparent blocker
function makeDimmer() {
	var dimmer = game.add.graphics(0, 0);
	dimmer.beginFill('#231f20', 0.6);
	dimmer.drawRect(0, 0, 1024, 768);
	dimmer.endFill();
	dimmer.inputEnabled = true; //to block stuff
	return dimmer;
}


// new game (really new level)
function newGame() {
	bugID = 0;

	movesLeft = movesPerLevel[levelKey];
	movesLeftText.setText(movesLeft);
	bugsRemoved = 0;
	bugsToRemove = bugsToRemovePerLevel[levelKey];

	//game.add.image(grid.x + 1, grid.y + 1, 'gridmask');
	/*var bmd = game.make.bitmapData(630, 630);
	bmd.alphaMask('level' + level + 'grid', 'gridmask');
	g.visible = false;
	game.add.image(0, 0, bmd)*/

	// start with a grid of bugs with matches
	var moves = false;
	while (!moves) {
		makeBugTypes();
		logBugTypes();
		moves = possibleMatches();
		console.log('moves', moves);
	}

	populateGrid();
	checkBugTypes();
	makeBugTypesQueue();

	grid.setAll('inputEnabled', true);
	grid.setAll('input.useHandCursor', true);

	bug1 = undefined;
	bug2 = undefined;
	animate = false;
	bugsToLaunch = [];
	activeBugs = [];

	// create selection boxes
	/*	box1 = game.add.graphics(0, 0);
	box1.lineStyle(0);
	box1.beginFill(boxColors[level - 1], 1);
	box1.drawRect(1, 1, cellSize - 1, cellSize - 1);
	box1.endFill();
	box1.visible = false;
	grid.addChild(box1);
	box2 = game.add.graphics(0, 0);
	box2.lineStyle(0);
	box2.beginFill(boxColors[level - 1], 1);
	box2.drawRect(1, 1, cellSize - 1, cellSize - 1);
	box2.endFill()
	grid.addChild(box2);
	box2.visible = false;;
	boxes.addChild(box1);
	boxes.addChild(box2);*/
}



///////////////////////////////////////////////////////////////////////
// MAIN UPDATE LOOP ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function update() {
	// used an animation dragonflies
	if (bugsToAnimate.length) {
		for (var i = bugsToAnimate.length - 1; i > -1; i--) {
			var bug = bugsToAnimate[i];
			bug.animate();
			//console.log(bugsToAnimate[i].inWorld);
			if (bug.world.y < -70) {
				//bugObjects[bug.row][bug.col] = null;
				bug.destroy();
				bugsToAnimate.splice(i, 1);
				if (!bugsToAnimate.length) {
					onSpecialBugsGone();
				}
			}
		}
	}
}




// make 9x9 grid array of zeros
function resetGrid() {
	bugTypes = [];
	for (var r = 0; r < rows; r++) {
		bugTypes[r] = [];
		for (var c = 0; c < cols; c++) {
			bugTypes[r][c] = 0;
		}
	}
}

// create array of bug types with no triple matches
function makeBugTypes() {
	//console.log('makeBugTypes');
	bugTypes = [];
	for (var r = 0; r < rows; r++) {
		bugTypes[r] = [];
		for (var c = 0; c < cols; c++) {
			//console.log(r, c);
			var selected = false;
			while (!selected) {
				var type = game.rnd.pick(bugTypeStartPool[levelKey]);
				bugTypes[r][c] = type;
				// check for horizontal matches
				//console.log(grid[r][c], grid[r][c - 1], grid[r][c - 2]);
				if (c > 1 && bugTypes[r][c] == bugTypes[r][c - 1] && bugTypes[r][c] == bugTypes[r][c - 2]) {
					//console.log(r, c, '3 in a row!');
				} else if (r > 1 && bugTypes[r][c] == bugTypes[r - 1][c] && bugTypes[r][c] == bugTypes[r - 2][c]) {
					//console.log(r, c, '3 in a col!');
				} else {
					selected = true;
				}
			}
		}
	}
}

// for debugging
function logBugTypes() {
	console.log('logBugTypes');
	for (var r = 0; r < rows; r++) {
		console.log(r, bugTypes[r]);
	}
}

// analyzes if there are any moves left
function possibleMatches() {
	var match = false;
	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			var type = bugTypes[r][c];
			if (type == 6) {
				onMovesPossible('r ' + r + ' c ' + c + ' special bug');
			}
			// check to the right matches
			if (c < cols - 3) {
				var matches = 1;
				for (var c2 = 1; c2 < 4; c2++) {
					if (bugTypes[r][c + c2] == type) {
						matches++;
					}
				}
				if (matches > 2) {
					onMovesPossible('r ' + r + ' c ' + c + ' across match');
				}
			}
			// check down below matches
			if (r < rows - 3) {
				var matches = 1;
				for (var r2 = 1; r2 < 4; r2++) {
					if (bugTypes[r + r2][c] == type) {
						matches++;
					}
				}
				if (matches > 2) {
					onMovesPossible('r ' + r + ' c ' + c + ' below match');
				}
			}
			// cluster checks
			if (c < cols - 1 && r < rows - 2) {
				var info = 'r ' + r + ' c ' + c + ' column cluster match\n';
				// X O
				// O X
				// O X
				if (bugTypes[r][c] == bugTypes[r + 1][c + 1] && bugTypes[r][c] == bugTypes[r + 2][c + 1]) {
					onMovesPossible(info + 'X O\nO X\nO X');
				}
				// O X
				// X O
				// X O
				if (bugTypes[r][c + 1] == bugTypes[r + 1][c] && bugTypes[r][c + 1] == bugTypes[r + 2][c]) {
					onMovesPossible(info + 'O X\nX O\nX O');
				}
				// X O
				// X O
				// O X
				if (bugTypes[r][c] == bugTypes[r + 1][c] && bugTypes[r][c] == bugTypes[r + 2][c + 1]) {
					onMovesPossible(info + 'X O\nX O\nO X');
				}
				// O X
				// O X
				// X O
				if (bugTypes[r][c + 1] == bugTypes[r + 1][c + 1] && bugTypes[r][c + 1] == bugTypes[r + 2][c]) {
					onMovesPossible(info + 'O X\nO X\nX O');
				}
				// X O
				// O X
				// X O
				if (bugTypes[r][c] == bugTypes[r + 1][c + 1] && bugTypes[r][c] == bugTypes[r + 2][c]) {
					onMovesPossible(info + 'X O\nO X\nX O');
				}
				// O X
				// X O
				// O X
				if (bugTypes[r][c + 1] == bugTypes[r + 1][c] && bugTypes[r][c + 1] == bugTypes[r + 2][c + 1]) {
					onMovesPossible(info + 'O X\nX O\nO X');
				}
			}
			if (c < cols - 2 && r < rows - 1) {
				var info = 'r ' + r + ' c ' + c + ' row cluster match\n';
				// X O O
				// O X X
				if (bugTypes[r][c] == bugTypes[r + 1][c + 1] && bugTypes[r][c] == bugTypes[r + 1][c + 2]) {
					onMovesPossible(info + 'X O O\nO X X');
				}
				// O X X
				// X O O
				if (bugTypes[r + 1][c] == bugTypes[r][c + 1] && bugTypes[r + 1][c] == bugTypes[r][c + 2]) {
					onMovesPossible(info + 'O X X\nX O O');
				}
				// X X O
				// O O X
				if (bugTypes[r][c] == bugTypes[r][c + 1] && bugTypes[r][c] == bugTypes[r + 1][c + 2]) {
					onMovesPossible(info + 'X X O\nO O X');
				}
				// O O X
				// X X O
				if (bugTypes[r + 1][c] == bugTypes[r + 1][c + 1] && bugTypes[r + 1][c] == bugTypes[r][c + 2]) {
					onMovesPossible(info + 'O O X\nX X O');
				}
				// X O X
				// O X O
				if (bugTypes[r][c] == bugTypes[r + 1][c + 1] && bugTypes[r][c] == bugTypes[r][c + 2]) {
					onMovesPossible(info + 'X O X\nO X O');
				}
				// O X O
				// X O X
				if (bugTypes[r + 1][c] == bugTypes[r][c + 1] && bugTypes[r + 1][c] == bugTypes[r + 1][c + 2]) {
					onMovesPossible(info + 'O X O\nX O X');
				}
			}
		}
	}

	function onMovesPossible(str) {
		//console.log('onMovesPossible', str);
		match = true;
	}
	return match;
}

// for debugging - check for inconsistencies in bugTypes and bugObjects array
function checkBugTypes() {
	console.log('checkBugTypes');
	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			if (bugTypes[r][c] != bugObjects[r][c].type) {
				console.log('error at', r, c);
				alert('error at', r, c);
			}
		}
	}
}

// make a queue of non matching bug types to drop in after matched bugs are removed
// so if you match 3+ in a column or 3+ in a row 3 of the same bugs won't drop in and potentially match on landing
function makeBugTypesQueue() {
	//console.log('makeBugTypesQueue');
	// reset bugTypesQueue, where each array represents a column to pull bugs from
	bugTypesQueue = [[], [], [], [], [], [], [], [], []];
	// make a temporary array, which follows the same grid format as the bugTypes array,
	// copying the first two rows in reverse order so we can build downward with no matches
	var temp = [bugTypes[1].slice(), bugTypes[0].slice()];
	//console.log(0, temp[0]);
	//console.log(1, temp[1]);
	for (var r = 2; r < rows + 2; r++) {
		temp[r] = [];
		for (var c = 0; c < cols; c++) {
			//console.log(r, c);
			var selected = false;
			while (!selected) {
				// special bugs are less likely here than when grid starts out
				temp[r][c] = game.rnd.pick(bugTypeRegeneratePool[levelKey]);
				if (c > 1 && temp[r][c] == temp[r][c - 1] && temp[r][c] == temp[r][c - 2]) {
					//console.log(r, c, '3 in a row!');
				} else if (temp[r][c] == temp[r - 1][c] && temp[r][c] == temp[r - 2][c]) {
					//console.log(r, c, '3 in a col!');
				} else {
					selected = true;
				}
			}
			// push type into bugTypesQueue column, which contains types from the bottom up (reverse of bugTypes)
			bugTypesQueue[c].push(temp[r][c]);
		}
		//console.log(r, temp[r]);
	}
	/*console.log(bugTypesQueue[0]);
	var type = bugTypesQueue[0].shift();
	console.log(type, bugTypesQueue[0]);*/
}

// add bugs to screen and bugObjects
function populateGrid() {
	bugObjects = [];
	for (var r = 0; r < rows; r++) {
		bugObjects[r] = [];
		for (var c = 0; c < cols; c++) {
			var type = bugTypes[r][c];
			makeBug(r, c, type);
		}
	}
}




function makeBug(row, col, type, help) {
	//console.log(c * cellSize, r * cellSize, type);
	var bug = game.add.image(col * cellSize, row * cellSize, levelKey + type);
	if (!help) {
		bugObjects[row][col] = bug;
		grid.addChild(bug);
	}
	bug.type = type;
	bug.col = col;
	bug.row = row;
	bug.toX = 0;
	bug.toY = 0;
	bug.id = bugID;
	bug.name = 'bug' + bugID;
	//bug.animate = false;
	bug.toRow = null;
	bug.matchGroup = 0;
	bug.matchGroupRow = 0;
	bug.matchGroupCol = 0;

	bugID++;


	if (!help) {
		//bug.inputEnabled = true;
		//bug.input.useHandCursor = true;
		// don't want newly dropped bugs to be enabled so using grid.setAll calls
		bug.events.onInputDown.add(onBugDown, this);
		bug.swap = function () {
			this.row = this.toRow;
			this.col = this.toCol;
			this.toRow = null;
			bugObjects[this.row][this.col] = this;
			this.swapTween = game.add.tween(this).to({
				x: this.col * cellSize,
				y: this.row * cellSize
			}, 200, Phaser.Easing.Quadratic.Out, true);
			bug.swapTween.onComplete.add(function () {
				bug.swapTween.onComplete.removeAll();
				onSwapped();
			});
		};
		// fade bug away and destroy
		bug.fadeAway = function (testMode, delay) {
			if (testMode) {
				bug.fadeTween = game.add.tween(this).to({
					alpha: 0.5
				}, 500, Phaser.Easing.Quartic.Out, true);
			} else {
				// set delay to 0 if it was't passed
				if (!delay) {
					delay = 0;
				}
				// fade bug away
				bug.fadeTween = game.add.tween(this).to({
					alpha: 0
				}, 500, Phaser.Easing.Quartic.Out, true, delay);
				// shrink bug away
				this.anchor.setTo(0.5, 0.5);
				this.x = this.col * cellSize + cellSize * 0.5;
				this.y = this.row * cellSize + cellSize * 0.5;
				game.add.tween(this.scale).to({
					x: 0.5,
					y: 0.5
				}, 500, Phaser.Easing.Quartic.Out, true, delay);
			}
			bug.fadeTween.onComplete.add(function () {
				bug.fadeTween.onComplete.removeAll();
				if (levelKey === 'garden' && bug.type === 6) { // for ladybug
					onAllEaten();
					matchSound.play();
				} else {
					onBugGone();
				}
				bug.destroy();
			});
		};
		// dop bug to designated spot
		bug.drop = function () {
			/*if (this.animate){
			if (this.y < this.toRow * cellSize){
				this.y += 10;
			} else {
				this.animate = false;
				this.toRow = null;
			}
		}*/
			var dropRows = Math.abs((this.y - this.toRow * cellSize) / cellSize);
			var dropSpeed = 250 + 250 * dropRows;
			//console.log('drop to row', this.toRow, 'dropRows', dropRows, 'dropSpeed', dropSpeed);
			bug.dropTween = game.add.tween(this).to({
				y: this.toRow * cellSize
			}, dropSpeed, Phaser.Easing.Cubic.InOut, true); //Quadratic, Cubic, Quartic, Quintic
			this.row = this.toRow;
			this.toRow = null;
			bug.dropTween.onComplete.add(function () {
				bug.dropTween.onComplete.removeAll();
				onBugDropped();
			});
		};

		// dragonfly
		if (levelKey == 'swamp') {
			bug.fly = function () {
				bugObjects[bug.row][bug.col] = null;
				//bug.checkWorldBounds = true;
				//bug.outOfBoundsKill = true;
				grid.addChild(bug);
				bugsToAnimate.push(bug);
				flySound.play();
			};
			bug.animate = function () {
				bug.y -= 10;
				// row dragonfly is currently over
				var rowOver = bug.y / cellSize;
				// if row is a whole number
				if (rowOver % 1 === 0) {
					//console.log(rowOver);
					if (rowOver > -1) {
						var bugToEat = bugObjects[rowOver][bug.col];
						// if 2 dragonflies in same column bug may have already been eaten
						if (bugToEat) {
							// only eat mosquitoes
							if (bugToEat.type < 5) {
								bugObjects[rowOver][bug.col] = null;
								bugsRemoved++;
								updateMeter();
								bugToEat.fadeAway();
								//matchSound.play();
							}
						}
					}
				}
			};
		} else if (levelKey == 'garden' && bug.type == 6) {
			// ladybug
			bug.bugsToEat = [];
			bug.eat = function () {
				//console.log('bugsToEat', bug.bugsToEat);
				bug.bugToEat = bug.bugsToEat[0];
				bug.bugsToEat.shift();
				//bug.x = bugToEat.x;
				//bug.y = bugToEat.y;
				bug.eatTween = game.add.tween(this).to({
					x: bug.bugToEat.x,
					y: bug.bugToEat.y
				}, 200, Phaser.Easing.Quartic.InOut, true);
				bug.eatTween.onComplete.add(function () {
					bug.eatTween.onComplete.removeAll();
					bugObjects[bug.bugToEat.row][bug.bugToEat.col] = null;
					bugsRemoved++;
					updateMeter();
					bug.bugToEat.destroy();
					onBugGone();
					if (bug.bugsToEat.length) {
						bug.eat();
						matchSound.play();
					} else {
						bug.fadeAway();
					}
				});
			};
		} else if (levelKey == 'night' && bug.type == 6) {
			// firefly
			bug.glow = function () {
				//console.log('glow!');
				// open firefly
				bug.loadTexture('night7');
				// add glow burst
				var glow = game.add.image(bug.x + 35, bug.y + 35, 'glowBurst');
				glow.anchor.setTo(0.5, 0.5);
				glow.alpha = 0;
				boxes.add(glow);
				// fade in glow burst
				bug.glownTween = game.add.tween(glow).to({
					alpha: 1
				}, 200, Phaser.Easing.Linear.None, true);
				// when glow burst is in
				bug.glownTween.onComplete.add(function () {
					// fade it back out
					bug.glownTween.onComplete.removeAll();
					bug.glownTween = game.add.tween(glow).to({
						alpha: 0
					}, 200, Phaser.Easing.Linear.None, true);
					// destroy it when faded out
					bug.glownTween.onComplete.add(function () {
						bug.glownTween.onComplete.removeAll();
						glow.destroy();
					});
					// remove bugs that surround the firefly
					for (var i = 0; i < grid.children.length; i++) {
						var other = grid.children[i];
						var dist = Math.sqrt(Math.pow(other.x - bug.x, 2) + Math.pow(other.y - bug.y, 2));
						if (dist && dist < cellSize * 1.5) {
							//console.log(i, 'dist', dist);
							if (bugObjects[other.row][other.col]) {
								// don't fade away other special fireflies
								if (bugObjects[other.row][other.col].type < 6) {
									leavingBugs++;
									bugObjects[other.row][other.col].fadeAway();
									bugObjects[other.row][other.col] = null;
									bugsRemoved++;
								}
							}
						}
					}
					updateMeter();
					matchSound.play();
				});
			};
		} else if (levelKey == 'desert' && bug.type == 6) {
			// scorpion
			bug.sting = function () {
				// determine direction to spin
				var stingDirections = [['colsLeft', bug.col, 270 + 360, -90 - 360], ['colsRight', 8 - bug.col, 90 + 360, -270 - 360], ['rowsAbove', bug.row, 0 + 360, 0 - 360], ['rowsBelow', 8 - bug.row, 180 + 360, -180 - 360]];
				stingDirections.sort(numericByIndex);
				// remove directions with less cells so maximum damage
				for (var i = 3; i > -1; i--) {
					//console.log(stingDirections[i]);
					if (stingDirections[i][1] < stingDirections[stingDirections.length - 1][1]) {
						stingDirections.splice(i, 1);
					}
				}
				// add available degrees values to an array
				var degreesPool = [];
				for (i = 0; i < stingDirections.length; i++) {
					//console.log(stingDirections[i]);
					degreesPool.push(stingDirections[i][game.rnd.pick([3, 3])]);
				}
				console.log('degreesPool', degreesPool);
				var degrees = game.rnd.pick(degreesPool);
				console.log('degrees', degrees);
				// center bug
				bug.anchor.setTo(0.5, 0.5);
				bug.x += 35;
				bug.y += 35;
				// rotate scorpion
				bug.spinTween = game.add.tween(this).to({
					angle: degrees
				}, 1200, Phaser.Easing.Quartic.Out, true);
				spinSound.play();
				// snap tail
				bug.spinTween.onComplete.add(function () {
					bug.spinTween.onComplete.removeAll();
					bug.loadTexture('desert7');
					stingSound.play();
					// make array of bugs to sting away
					console.log('bug.row', bug.row, 'bug.col', bug.col, 'bug.angle', bug.angle);
					bug.bugsToSting = [];
					if (!bug.angle) {
						for (var up = bug.row - 1; up > -1; up--) {
							console.log('row', up);
							if (bugObjects[up][bug.col]) {
								bug.bugsToSting.push(bugObjects[up][bug.col]);
							}
						}
					} else if (bug.angle == 90) {
						for (var right = bug.col + 1; right < 9; right++) {
							console.log('col', right);
							if (bugObjects[bug.row][right]) {
								bug.bugsToSting.push(bugObjects[bug.row][right]);
							}
						}
					} else if (Math.abs(bug.angle) == 180) {
						for (var down = bug.row + 1; down < 9; down++) {
							console.log('row', down);
							if (bugObjects[down][bug.col]) {
								bug.bugsToSting.push(bugObjects[down][bug.col]);
							}
						}
					} else if (bug.angle == 270 || bug.angle == -90 || bug.angle == -450) {
						for (var left = bug.col - 1; left > -1; left--) {
							console.log('col', left);
							if (bugObjects[bug.row][left]) {
								bug.bugsToSting.push(bugObjects[bug.row][left]);
							}
						}
					}
					// sting away bugs
					for (var i = 0; i < bug.bugsToSting.length; i++) {
						if (bug.bugsToSting[i].type < 6) {
							leavingBugs++;
							bug.bugsToSting[i].fadeAway(false, i * 50);
							bugObjects[bug.bugsToSting[i].row][bug.bugsToSting[i].col] = null;
							bugsRemoved++;
						}
					}
					updateMeter();
					matchSound.play();
				});
			};
		} else if (levelKey == 'prairie' && bug.type == 6) {
			// grasshopper
			bug.jumps = 0;
			bug.jump = function () {
				grid.addChild(bug);
				// null out grasshopper's initial position
				if (!bug.jumps) {
					bugObjects[bug.row][bug.col] = null;
					leavingBugs++;
				}
				jumpSound.play();
				// swap in jumping bug image
				bug.loadTexture('prairie7');
				bug.anchor.setTo(0.5, 0.5);
				bug.scale.x = bug.scale.y = 0.75;
				bug.x = bug.col * cellSize + cellSize * 0.5;
				bug.y = bug.row * cellSize + cellSize * 0.5;
				// pick a cell somewhat far away
				var jumpPicked = false;
				while (!jumpPicked) {
					bug.row = game.rnd.integerInRange(1, 7);
					bug.col = game.rnd.integerInRange(1, 7);
					var dist = Math.sqrt(Math.pow(bug.col * cellSize - bug.x, 2) + Math.pow(bug.row * cellSize - bug.y, 2));
					console.log('r', bug.row, 'c', bug.col, 'dist', dist);
					if (dist > cellSize * 2) {
						jumpPicked = true;
					}
				}
				// scale up
				bug.upTween = game.add.tween(this.scale).to({
					x: 1,
					y: 1
				}, 500, Phaser.Easing.Quartic.In, true);
				// scale down
				bug.downTween = game.add.tween(this.scale).to({
					x: 0.75,
					y: 0.75
				}, 500, Phaser.Easing.Quartic.Out);
				bug.upTween.chain(bug.downTween);
				// jump to new cell
				bug.jumpTween = game.add.tween(this).to({
					x: bug.col * cellSize + cellSize * 0.5,
					y: bug.row * cellSize + cellSize * 0.5,
				}, 1000, Phaser.Easing.Quartic.InOut, true);
				bug.downTween.onComplete.add(function () {
					bug.downTween.onComplete.removeAll();
					// land cricket
					bug.loadTexture('prairie6');
					bug.scale.x = bug.scale.y = 1;
					// fade away bugs
					var bugsToFade = [bugObjects[bug.row][bug.col], bugObjects[bug.row][bug.col - 1], bugObjects[bug.row][bug.col + 1], bugObjects[bug.row - 1][bug.col], bugObjects[bug.row + 1][bug.col]];
					for (var b = 0; b < bugsToFade.length; b++) {
						if (bugsToFade[b]) {
							leavingBugs++;
							bugsToFade[b].fadeAway();
							bugObjects[bugsToFade[b].row][bugsToFade[b].col] = null;
							bugsRemoved++;
						}
					}
					updateMeter();
					matchSound.play();
					bug.jumps++;
					if (bug.jumps < 2) {
						// jump again
						bug.timer = game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
							bug.jump()
						}, this);
					} else {
						// fade away
						bug.timer = game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
							//bug.fadeAway();
							onBugGone();
						}, this);
					}
				});
			};
		}
	} else {
		// HELP bugs have less functionality
		bug.helpBug = true;
		bug.reset = function () {
			this.anchor.setTo(0, 0);
			this.x = this.col * cellSize;
			this.y = this.row * cellSize;
			this.alpha = this.scale.x = this.scale.y = 1;
			this.angle = 0;
			if (row == -1) {
				bug.alpha = 0;
			}
			this.rowNow = this.row;
		};
		bug.swap = function (row, col) {
			this.swapTween = game.add.tween(this).to({
				x: col * cellSize,
				y: row * cellSize
			}, 200, Phaser.Easing.Quadratic.Out, true);
		};
		// fade bug away
		bug.fadeAway = function (delay) {
			if (!delay) {
				delay = 0;
			}
			bug.fadeTween = game.add.tween(this).to({
				alpha: 0
			}, 500, Phaser.Easing.Quartic.Out, true, delay);
			// shrink bug away
			if (!this.anchor.x) {
				this.anchor.setTo(0.5, 0.5);
				this.x = this.x + cellSize * 0.5;
				this.y = this.y + cellSize * 0.5;
			}
			game.add.tween(this.scale).to({
				x: 0.5,
				y: 0.5
			}, 500, Phaser.Easing.Quartic.Out, true, delay);
		};
		bug.drop = function (row) {
			//console.log('drop to row', row);
			this.rowNow = row;
			bug.dropTween = game.add.tween(this).to({
				alpha: 1,
				y: row * cellSize
			}, 500, Phaser.Easing.Cubic.InOut, true);
		};
		bug.reset();
	}

	if (debug) {
		bug.text = game.add.text(0, 0, bug.row + ',' + bug.col + ',' + bug.type, {
			font: '20px Arial',
			fill: '#ffffff',
		});
		bug.addChild(bug.text);
		bug.updateText = function () {
			bug.text.setText(bug.row + ',' + bug.col + ',' + bug.type);
		};
	} else {
		bug.updateText = function () {
			// do nothing (avoids need for if statement)
		};
	}

	// make it so bug isn't clickable
	bug.disable = function () {
		//console.log('disable', bug.id);
		bug.inputEnabled = false;
		bug.input.useHandCursor = false; //doesn't work sometimes
	};

	return bug;
}

function onBugDown(bug) {
	console.log('onBugDown', bug.row, bug.col, bug.type);
	if (!bug1) {
		console.log('bug1');
		bug1 = bug;
		bug1.selectedNum = 1; //NOT IN USE
		//box1.x = bug1.x;
		//box1.y = bug1.y;
		//box1.visible = true;
		box1 = drawBox(bug1);
		boxes.addChild(box1);
	} else if (bug.id != bug1.id) {
		console.log(bug.col, bug1.col);
		var rowDif = Math.abs(bug.row - bug1.row);
		var colDif = Math.abs(bug.col - bug1.col);
		if (rowDif == 1 && !colDif || colDif == 1 && !rowDif) {
			console.log('bug2');
			bug2 = bug;
			bug1.selectedNum = 2; //NOT IN USE
			//box2.x = bug2.x;
			//box2.y = bug2.y;
			//box2.visible = true;
			box2 = drawBox(bug2);
			boxes.addChild(box2);
			onSelected();
		} else {
			console.log('bug1');
			bug1 = bug;
			bug1.selectedNum = 1; //NOT IN USE
			//box1.x = bug1.x;
			//box1.y = bug1.y;
			box1.destroy();
			box1 = drawBox(bug1);
			boxes.addChild(box1);
		}
	}
	clickSound.play();
}

// once two bugs have been selected
function onSelected() {
	// get rid of hand cursor still showing
	this.game.canvas.style.cursor = 'default';

	// disable grid elements
	//grid.inputEnabled = true;
	//grid.input.useHandCursor = false;
	//grid.setAll('inputEnabled', false);
	//grid.callAll('disable');
	for (var i = 0; i < grid.children.length; i++) {
		grid.children[i].disable();
	}
	grid.setAll('input.useHandCursor', false);

	// pause a moment then swap
	swappedBugs = 2; //2 indicates first swap
	game.time.events.add(Phaser.Timer.SECOND * 0.5, swapBugs, this);
}

function swapBugs() {
	//box1.visible = false;
	//box2.visible = false;
	box1.destroy();
	box2.destroy();
	bug1.toX = bug2.x;
	bug1.toY = bug2.y;
	bug1.toRow = bug2.row;
	bug1.toCol = bug2.col;
	bug2.toX = bug1.x;
	bug2.toY = bug1.y;
	bug2.toRow = bug1.row;
	bug2.toCol = bug1.col;
	bug1.swap();
	bug2.swap();
}

function onSwapped() {
	swappedBugs--;
	console.log('onSwapped', swappedBugs);
	if (!swappedBugs) {
		// may have to set powerup to true instead of using 6
		if (bug1.type == 6 || bug2.type == 6) {
			masterBlaster();
		} else {
			checkForMatches(true);
		}
		movesLeft--;
		movesLeftText.setText(movesLeft);
	} else if (swappedBugs == 8) {
		// bugs were swapped back after non match
		noMoreMatches();
	}
}

// remove everything of one type
function masterBlaster() {

	var typeToRemove = bug1.type;
	if (bug1.type == 6) {
		typeToRemove = bug2.type;
	}
	// power up on power up - for now they remove themselves
	if (bug1.type == 6 && bug2.type == 6) {
		typeToRemove = 6;
	}
	console.log('typeToRemove', typeToRemove);

	// fade away matched bugs
	bug1.alive = bug2.alive = false;
	leavingBugs = 0;
	for (var i = 0; i < grid.children.length; i++) {
		var bug = grid.children[i];
		if (bug.type == typeToRemove || !bug.alive) {
			leavingBugs++;
			bugObjects[bug.row][bug.col] = null;
			bug.fadeAway();
		}
	}
	bugsRemoved += leavingBugs;

	updateSpots();
	regenerateBugs();
	matchSound.play();
}

// check to see if there are any matches
function checkForMatches(boolean) {

	var firstCheck = boolean;
	var matchGroupRow = 0;
	var matchGroupCol = 0;
	var matchGroupRows = [0];
	var matchGroupCols = [0];
	var matchGroups = [];
	var match = false;

	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			var bug = bugObjects[r][c];
			// check column
			if (r < rows - 2) {
				//console.log(bug, bug.type, bugObjects[r+1][c].type, bugObjects[r+2][c].type);
				if (bug.type == bugObjects[r + 1][c].type && bug.type == bugObjects[r + 2][c].type) {
					console.log(r, c, '3 in a col!', matchGroupCol);
					if (!bug.matchGroupCol) {
						matchGroupCol++;
						bug.matchGroupCol = matchGroupCol;
						matchGroupCols[matchGroupCol] = [bug.id, bugObjects[r + 1][c].id, bugObjects[r + 2][c].id];
					} else {
						matchGroupCols[matchGroupCol].push(bugObjects[r + 2][c].id);
					}
					console.log('matchGroupCol', matchGroupCol);
					bugObjects[r + 1][c].matchGroupCol = bugObjects[r + 2][c].matchGroupCol = bug.matchGroupCol;
					bug.alive = bugObjects[r + 1][c].alive = bugObjects[r + 2][c].alive = false;
					match = true;
				}
			}
			// check row
			if (c < cols - 2) {
				//console.log(c, bug.type, bugObjects[r][c + 1].type, bugObjects[r][c + 2].type);
				if (bug.type == bugObjects[r][c + 1].type && bug.type == bugObjects[r][c + 2].type) {
					console.log(r, c, '3 in a row!', matchGroupRow);
					if (!bug.matchGroupRow) {
						matchGroupRow++;
						bug.matchGroupRow = matchGroupRow;
						matchGroupRows[matchGroupRow] = [bug.id, bugObjects[r][c + 1].id, bugObjects[r][c + 2].id];
					} else {
						matchGroupRows[matchGroupRow].push(bugObjects[r][c + 2].id);
					}
					console.log('matchGroupRow', matchGroupRow);
					bugObjects[r][c + 1].matchGroupRow = bugObjects[r][c + 2].matchGroupRow = bug.matchGroupRow;
					bug.alive = bugObjects[r][c + 1].alive = bugObjects[r][c + 2].alive = false;
					match = true;
				}
			}
		}
	}

	if (match) {

		// MATCH MIN+ STUFF
		matchGroupRows.shift();
		matchGroupCols.shift();
		matchGroups = matchGroupRows.concat(matchGroupCols);
		// create an array of match groups with minMatch or more bugs
		var minMatchGroups = [];
		for (var i = 0; i < matchGroups.length; i++) {
			//console.log('matchGroup', i, matchGroups[i]);
			if (matchGroups[i].length >= minMatchesForSpecial[levelKey]) {
				minMatchGroups.push(matchGroups[i]);
			}
		}

		// combine intersecting match groups
		for (var i = 0; i < minMatchGroups.length; i++) {
			for (var j = i + 1; j < minMatchGroups.length; j++) {
				// check for common values
				var matches = intersectIntegers(minMatchGroups[i], minMatchGroups[j]);
				console.log(i, minMatchGroups[i], 'vs', j, minMatchGroups[j], '=', matches);
				// if arrays have a common value
				if (matches.length) {
					console.log('match! combine', i, j);
					// merge first array into second array - will pull out the intersections later
					minMatchGroups[j] = minMatchGroups[j].concat(minMatchGroups[i]);
					// clear out first array so we ignore it later
					minMatchGroups[i] = [];
				}
			}
		}
		// combine intersecting match groups
		//mergeGroups(minMatchGroups);

		// cycle through revised array
		for (i = 0; i < minMatchGroups.length; i++) {
			// ignore empty arrays
			if (minMatchGroups[i].length) {
				// add special bug in places user selected bug if it exists, otherwise just randomly pick a spot
				var bugToReplaceID;
				if (minMatchGroups[i].indexOf(bug1.id) != -1) {
					console.log('power up pick from', minMatchGroups[i]);
					console.log('replace bug', bug1.id);
					bugToReplaceID = bug1.id;
				} else if (minMatchGroups[i].indexOf(bug2.id) != -1) {
					console.log('power up pick from', minMatchGroups[i]);
					console.log('replace bug', bug1.id);
					bugToReplaceID = bug2.id;
				} else {
					console.log('replace random bug');
					// check for duplicate values in array, which indicates an intersection
					var duplicates = findDuplicates(minMatchGroups[i]);
					//console.log(arr[i], duplicates);
					if (duplicates.length) {
						// if intersections are found choose from those to place power up
						minMatchGroups[i] = duplicates;
					}
					console.log('power up pick from', minMatchGroups[i]);
					// do we want to remove special bugs from the pool?
					bugToReplaceID = game.rnd.pick(minMatchGroups[i]);
				}
				console.log('bugToReplaceID', bugToReplaceID);

				// replace regular bug with power up bug if type 5
				var bugToReplace = getBugByID(bugToReplaceID);
				console.log('bugToReplace.type', bugToReplace.type);
				if (bugToReplace.type == 5) {
					var specialBug = makeBug(bugToReplace.row, bugToReplace.col, 6);
					specialBug.inputEnabled = false;
					bugToReplace.destroy();
					// ready special bugs for action for levels where they do something other than destroy what they were swapped with
					if (levelKey == 'swamp' || levelKey == 'garden' || levelKey == 'night' || levelKey == 'desert' || levelKey == 'prairie') {
						bugsToLaunch.push(specialBug);
					}
					powerUpSound.play();
				}
			}
		}

		// null array references for removed bugs
		for (var r2 = 0; r2 < rows; r2++) {
			for (var c2 = 0; c2 < cols; c2++) {
				if (!bugObjects[r2][c2].alive) {
					bugObjects[r2][c2] = null;
					//console.log('nulling r', r2, 'c', c2);
				}
			}
		}

		// fade away matched bugs
		leavingBugs = 0;
		for (i = 0; i < grid.children.length; i++) {
			if (!grid.children[i].alive) {
				leavingBugs++;
				//grid.children[i].remove(true);//for test mode
				grid.children[i].fadeAway();
			}
		}
		bugsRemoved += leavingBugs;
		matchSound.play();
	} else {
		if (firstCheck) {
			console.log('no matches');
			swappedBugs = 10; //10 will trigger call to noMoreMatches in onSwapped
			swapBugs();
			nomatchSound.play();
		} else {
			console.log('no more matches');
			if (bugsToLaunch.length) {
				launchSpecialBugs();
				if (levelKey == 'night') {
					glowSound.play();
				} else if (levelKey == 'desert') {
					//stingSound.play();
				}
			} else {
				noMoreMatches();
			}

		}
	}

}

// combines intersecting match groups - integrated into above
/*function mergeGroups(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			// check for common values
			var matches = intersectIntegers(arr[i], arr[j]);
			//console.log(i, arr[i], 'vs', j, arr[j], '=', matches);
			// if arrays have a common value
			if (matches.length) {
				//console.log('match! combine', i, j);
				// merge first array into second array - will pull out the intersections later
				arr[j] = arr[j].concat(arr[i]);
				// clear out first array so we ignore it later
				arr[i] = [];
			}
		}
	}
}*/

// once there are no more matches activate special bugs
function launchSpecialBugs() {
	console.log('launchSpecialBugs');
	if (levelKey == 'garden') {
		eatAllAphids();
	} else {
		activeBugs = [];
		for (var i = 0; i < bugsToLaunch.length; i++) {
			if (levelKey == 'swamp') {
				bugsToLaunch[i].fly();
			} else if (levelKey == 'night') {
				leavingBugs = 0;
				activeBugs.push(bugsToLaunch[i]);
				bugsToLaunch[i].glow();
			} else if (levelKey == 'desert') {
				//leavingBugs = 0;
				activeBugs.push(bugsToLaunch[i]);
				bugsToLaunch[i].sting();
			} else if (levelKey == 'prairie') {
				activeBugs.push(bugsToLaunch[i]);
				bugsToLaunch[i].jump();
			}
		}
	}

	bugsToLaunch = [];
}

var ladybugsEating;

function eatAllAphids() {
	// get all aphids and ladybugs and clear out their spots
	var aphids = [];
	var ladybugs = [];
	for (var i = 0; i < grid.children.length; i++) {
		var bug = grid.children[i];
		if (bug.type == 1) {
			bugObjects[bug.row][bug.col] = null;
			aphids.push(bug);
		} else if (bug.type == 6) {
			bugObjects[bug.row][bug.col] = null;
			ladybugs.push(bug);
		}
	}
	// shuffle aphids so they aren't eaten in any kind of order
	Phaser.ArrayUtils.shuffle(aphids);
	// determine which aphids each ladybug will eat
	for (i = 0; i < aphids.length; i++) {
		var ladybug = ladybugs[i % ladybugs.length];
		//console.log('ladybug', i % ladybugs.length, i);
		ladybug.bugsToEat.push(aphids[i]);
	}
	// doesn't work
	//leavingBugs = aphids.length + ladybugs.length;
	// eat some aphids!
	ladybugsEating = ladybugs.length;
	for (i = 0; i < ladybugs.length; i++) {
		ladybugs[i].eat();
	}
}

function onAllEaten() {
	ladybugsEating--;
	if (!ladybugsEating) {
		onSpecialBugsGone();
	}
}

// once all special bugs have left the screen
function onSpecialBugsGone() {
	dropBugs();
}

function dropBugs() {
	//animate = true;
	updateSpots(); //added
	regenerateBugs(); //added

	fallingBugs = 0;
	for (var i = 0; i < grid.children.length; i++) {
		if (grid.children[i].toRow !== null) {
			fallingBugs++;
			//grid.children[i].y = grid.children[i].toRow * cellSize;
			//grid.children[i].toRow = null;
			grid.children[i].drop();
		}
	}

	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			// update bug variables
			bugObjects[r][c].row = r;
			bugObjects[r][c].col = c;
			bugObjects[r][c].updateText();
			// match values in bugTypes array with bug types (this is being missed in at least one case REMOVE STUFF OTHER THAN THIS LATER)
			bugTypes[r][c] = bugObjects[r][c].type;
		}
	}

	dropSound.play();
}

// called when each bug lands
function onBugDropped() {
	fallingBugs--;
	//console.log('fallingBugs', fallingBugs);
	// when the last bug lands
	if (!fallingBugs) {
		console.log('bugs done falling');
		//logBugTypes();
		checkBugTypes();
		makeBugTypesQueue();
		checkForMatches();
		//game.time.events.add(Phaser.Timer.SECOND * 2, checkForMatches, this);
	}
}

// called after each bug fades away
function onBugGone() {
	leavingBugs--;
	console.log('onBugGone leavingBugs', leavingBugs);
	// when the last bug lands
	if (!leavingBugs) {
		console.log('matched bugs gone');
		if (activeBugs.length) {
			for (var i = 0; i < activeBugs.length; i++) {
				leavingBugs++;
				bugObjects[activeBugs[i].row][activeBugs[i].col] = null;
				activeBugs[i].fadeAway();
				bugsRemoved++;
				if (!i) {
					matchSound.play();
				}
			}
			updateMeter();
			activeBugs = [];
		} else {
			updateMeter();
			dropBugs();
		}
	}
}

// update the bug grids after bugs were removed
function updateSpots() {
	//console.log("drop");
	for (var r = rows - 2; r > -1; r--) {
		for (var c = 0; c < cols; c++) {
			//console.log('checking r', r, 'c', c);
			if (bugObjects[r][c]) {
				// find lowest empty spot
				var rTo = 0;
				for (var rNext = r + 1; rNext < rows; rNext++) {
					if (!bugObjects[rNext][c]) {
						//console.log('null at r', rNext, 'c', c);
						rTo = rNext;
					}
				}
				// if an empty spot was found
				if (rTo) {
					//console.log('rTo', rTo);
					// move bug to that spot in array
					bugObjects[rTo][c] = bugObjects[r][c];
					bugTypes[rTo][c] = bugObjects[r][c].type; //REMOVE MAYBE since adding later
					// free up the bug's previous spot
					bugObjects[r][c] = null;
					// set row to tween to
					bugObjects[rTo][c].toRow = rTo;
				}
			}
		}
	}
}

// add new bugs to fill in empty spots in the bugs grid
function regenerateBugs() {
	// check each column
	for (var c = 0; c < cols; c++) {
		// for empty spots
		var emptySpots = 0;
		for (var r = rows - 1; r > -1; r--) {
			if (!bugObjects[r][c]) {
				//console.log('row', r, 'col', c, 'empty!');
				var type = bugTypesQueue[c].shift();
				var bug = makeBug(r, c, type);
				bugTypes[r][c] = type;
				emptySpots++;
				bug.y = -emptySpots * cellSize - cellSize; //last var starts it off screen
				bug.toRow = r;
				//console.log('toRow', bug.toRow);
			}
		}
		/*if (emptySpots) {
			//console.log('col', c, 'empty spots', emptySpots);
			for (var e = 0; e < emptySpots; e++) {

			}
		}*/
	}
}

function updateMeter() {
	console.log('bugsRemoved', bugsRemoved);
	progressMeter.fill(bugsRemoved / bugsToRemove);
}

// called after all of the match action is complete and nothing else matches
function noMoreMatches() {
	console.log('noMoreMatches');
	//logBugTypes();
	movesPossible = possibleMatches();
	console.log('movesPossible', movesPossible);
	if (movesPossible) {
		bug1 = undefined;
		bug2 = undefined;
		if (bugsRemoved >= bugsToRemove) {
			game.time.events.add(Phaser.Timer.SECOND * 1, showPopup, this);
		} else if (movesLeft <= 0) {
			game.time.events.add(Phaser.Timer.SECOND * 1, showPopup, this);
		} else {
			grid.setAll('inputEnabled', true);
			grid.setAll('input.useHandCursor', true);
		}
		// update facts in weird but true area
		//gameScreen.updateFacts();
	} else {
		// no possible moves left
		showPopup();
	}
}



// UTILITIES

// draws selection boxes with rounded corners if necessary
function drawBox(bug) {
	var width = 69;
	var height = 69;
	var radius = 10;
	var bmd = game.add.bitmapData(width, height);
	bmd.ctx.fillStyle = boxColors[levelKey];
	bmd.ctx.beginPath();
	// top left corner
	if (!bug.row && !bug.col) {
		bmd.ctx.moveTo(radius, 0);
	}
	// top right corner
	if (!bug.row && bug.col == cols - 1) {
		bmd.ctx.lineTo(width - radius, 0);
		bmd.ctx.quadraticCurveTo(width, 0, width, radius);
	} else {
		bmd.ctx.lineTo(width, 0);
	}
	// bottom right corner
	if (bug.row == rows - 1 && bug.col == cols - 1) {
		bmd.ctx.lineTo(width, height - radius);
		bmd.ctx.quadraticCurveTo(width, height, width - radius, height);
	} else {
		bmd.ctx.lineTo(width, height);
	}
	// bottom left corner
	if (bug.row == rows - 1 && !bug.col) {
		bmd.ctx.lineTo(radius, height);
		bmd.ctx.quadraticCurveTo(0, height, 0, height - radius);
	} else {
		bmd.ctx.lineTo(0, height);
	}
	// top left corner
	if (!bug.row && !bug.col) {
		bmd.ctx.lineTo(0, radius);
		bmd.ctx.quadraticCurveTo(0, 0, radius, 0);
	} else {
		bmd.ctx.lineTo(0, 0);
	}
	bmd.ctx.closePath();
	bmd.ctx.fill();
	var sprite = game.add.sprite(bug.x + 1, bug.y + 1, bmd);
	return sprite;
}

// gets bug by specified id
function getBugByID(id) {
	for (var i = 0; i < grid.children.length; i++) {
		if (grid.children[i].id === id) {
			return grid.children[i];
		}
	}
}

// returns array of common integers in two arrays
function intersectIntegers(array1, array2) {
	var seen = [],
		results = [];
	for (var i = 0; i < array1.length; i++) {
		seen[array1[i]] = true;
	}
	for (var i = 0; i < array2.length; i++) {
		if (seen[array2[i]])
			results.push(array2[i]);
	}
	return results;
}

// returns array of duplicate values in an array
function findDuplicates(arr) {
	var sorted_arr = arr.sort();
	var results = [];
	for (var i = 0; i < arr.length - 1; i++) {
		if (sorted_arr[i + 1] == sorted_arr[i]) {
			results.push(sorted_arr[i]);
		}
	}
	return results;
}

// returns a group of text objects that simulates text with mutliple strokes
function multistroke(chars, font, fill, stroke, strokeThickness) {
	var multistroked = game.add.group();
	// add letter spacing
	// copy spaces from www.cs.tut.fi/~jkorpela/chars/spaces.html
	var charCopy = '';
	for (var c = 0; c < chars.length; c++) {
		charCopy += chars.charAt(c) + ' '; // hair space
	}
	chars = charCopy.substr(0, charCopy.length - 1);
	// add strokes based on lenght of stroke array
	for (var i = 0; i < stroke.length; i++) {
		// add shadow
		// shadow was being cropped into a box for some reason so can't use text.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0, true, false);
		// likely a custom font glitch like www.html5gamedevs.com/topic/12111-text-getting-cropped-cut-off-updated-issue/
		if (!i) {
			var shadow = game.add.text(-strokeThickness[i] / 2 - 2, -strokeThickness[i] / 2 + 2, chars, {
				font: font,
				fill: fill
			});
			shadow.stroke = stroke[i];
			shadow.strokeThickness = strokeThickness[i];
			shadow.alpha = 0.25;
			multistroked.add(shadow);
		}
		// hack to fill in holes that show the outside stroke in the middle of uppercase Cs using 2 hair spaces and a bullet
		if (i == stroke.length - 1) {
			if (chars.indexOf('C') != -1) {
				var holeFiller = game.add.text(0, 0, chars.split('C').join('  •'), {
					font: font,
					fill: stroke[i]
				});
				multistroked.add(holeFiller);
			}
		}
		// add stroked text
		var text = game.add.text(-strokeThickness[i] / 2, -strokeThickness[i] / 2, chars, {
			font: font,
			fill: fill
		});
		text.stroke = stroke[i];
		text.strokeThickness = strokeThickness[i];
		multistroked.add(text);
	}
	return multistroked;
}

// used to sort array that determines scorpion sting direction
function numericByIndex(a, b) {
	var arrayIndex = 1;
	var num1 = Number(a[arrayIndex]);
	var num2 = Number(b[arrayIndex]);
	if (num1 < num2) {
		return -1;
	} else if (num1 > num2) {
		return 1;
	} else {
		return 0;
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

// DEBUGGING

function render() {

	/*	game.debug.geom(roadTopLine);
	//game.debug.lineInfo(roadTopLine, 32, 32);
	game.debug.geom(roadMiddleLine);
	game.debug.geom(roadBottomLine);
	game.debug.geom(carLine);
	game.debug.geom(stopLine);
	game.debug.geom(stopLineActivate);

	game.debug.text('FPS:' + game.time.fps || '--', 2, 14, "#00ff00");*/
	/*game.debug.pointer(game.input.mousePointer);
	game.debug.pointer(game.input.pointer1);
	game.debug.pointer(game.input.pointer2);*/
/*	if (levelSelect) {
		//game.debug.text("Over: " + levelSelect.locked[0].input.pointerOver(), 32, 32);
		game.debug.text("totalActivePointers: " + game.input.totalActivePointers, 32, 32);

	}*/

}
