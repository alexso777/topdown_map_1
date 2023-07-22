"use strict";

app.KEYBOARD = {
	"KEY_LEFT": 37,
	"KEY_UP": 38,
	"KEY_RIGHT": 39,
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_ENTER": 13,
	"KEY_ESC": 27,
	"KEY_BUILD": 66,
	"KEY_YES": 89,
	"KEY_NO": 78,
};

app.food = 30;
app.wood = 0;
app.stone = 0;
app.social = 0;


// properties of app that will be accessed by the topDown.js module
app.animationID = undefined;
app.paused = false;

// app.keydown array to keep track of which keys are down
// this is called a "key daemon"
// topDown.js will "poll" this array every frame
// this works because JS has "sparse arrays" - not every language does
app.keydown = [];


// the Modernizr object is from the modernizr.custom.js file
window.onblur = function () {
	app.paused = true;
	cancelAnimationFrame(app.animationID);
	app.keydown = []; // clear key daemon

	// call update() so that our paused screen gets drawn
	app.engine.update();
};

window.onfocus = function () {
	app.paused = false;
	cancelAnimationFrame(app.animationID);

	// start the animation back up
	app.engine.update();
};

// event listeners
window.addEventListener("keydown", function (e) {
	//console.log("keydown=" + e.keyCode);
	app.keydown[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
	//console.log("keyup=" + e.keyCode);
	app.keydown[e.keyCode] = false;
});


function initObjects(){
	for (let i = 0; i < app.w_h; i++) {
		app.objects.push([]);
		for (let j = 0; j < app.w_w; j++) {
			app.objects[i].push(null);
		}
	}


	//Area 1
	{
		new app.House_4(45, 45, 0, 8);
		new app.House_1(54, 46, 0, 8);
		new app.House_2(65, 49, 0, 8);
		new app.House_3(57, 53, 0, 8);
		new app.House_4(48, 61, 0, 8);
		new app.House_1(48, 68, 0, 8);
		new app.House_2(39, 74, 0, 8);
	
		new app.Food_1(47, 56);
		new app.Food_1(49, 56);
		new app.Food_1(47, 54);
		new app.Food_1(49, 54);
		new app.Food_1(41, 56);
		new app.Food_1(39, 56);
		new app.Food_1(41, 54);
		new app.Food_1(39, 54);
		new app.Food_1(43, 56);
		new app.Food_1(43, 54);
	
		new app.Food_2(39, 60);
		new app.Food_2(41, 60);
		new app.Food_2(43, 60);
		new app.Food_2(45, 60);
	
		new app.Food_1(39, 63);
		new app.Food_1(41, 63);
		new app.Food_1(43, 63);
		new app.Food_1(45, 63);
	
		new app.Food_2(39, 65);
		new app.Food_2(41, 65);
		new app.Food_2(43, 65);
		new app.Food_2(45, 65);
	
		new app.Food_1(39, 67);
		new app.Food_1(41, 67);
		new app.Food_1(43, 67);
		new app.Food_1(45, 67);
	
		new app.Food_1(44, 71);
		new app.Food_1(46, 71);
		new app.Food_1(48, 71);
		new app.Food_1(50, 71);
	
		new app.Food_2(44, 73);
		new app.Food_2(46, 73);
		new app.Food_2(48, 73);
		new app.Food_2(50, 73);
	
		new app.Tree(50, 76);
		new app.Tree(50, 77);
		new app.Tree(50, 78);
		new app.Tree(50, 79);
		new app.Tree(50, 80);
		new app.Tree(50, 81);
		new app.Tree(50, 82);
		new app.Tree(50, 83);
		new app.Tree(50, 84);
		new app.Tree(50, 85);
	
		new app.Tree(47, 76);
		new app.Tree(47, 77);
		new app.Tree(47, 78);
		new app.Tree(47, 79);
		new app.Tree(47, 80);
		new app.Tree(47, 81);
		new app.Tree(47, 82);
		new app.Tree(47, 83);
		new app.Tree(47, 84);
		new app.Tree(47, 85);
	
		new app.Tree(44, 76);
		new app.Tree(44, 77);
		new app.Tree(44, 78);
		new app.Tree(44, 79);
		new app.Tree(44, 80);
		new app.Tree(44, 81);
		new app.Tree(44, 82);
		new app.Tree(44, 83);
		new app.Tree(44, 84);
		new app.Tree(44, 85);
	
		new app.Tree(32, 75, true);
		new app.Tree(32, 74, true);
		new app.Tree(32, 73, true);
		new app.Tree(32, 72, true);
		new app.Tree(32, 71, true);
		new app.Tree(32, 70, true);
		new app.Tree(32, 69, true);
		new app.Tree(32, 68, true);
		new app.Tree(32, 67, true);
		new app.Tree(32, 66, true);
		new app.Tree(32, 65, true);
		new app.Tree(32, 64, true);
		new app.Tree(32, 63, true);
		new app.Tree(32, 62, true);
		new app.Tree(32, 61, true);
		new app.Tree(32, 60, true);
		new app.Tree(32, 59, true);
		new app.Tree(32, 58, true);
		new app.Tree(32, 57, true);
		new app.Tree(32, 56, true);
		new app.Tree(32, 55, true);
		new app.Tree(32, 54, true);
		new app.Tree(32, 53, true);
		new app.Tree(32, 52, true);
		new app.Tree(32, 51, true);
		new app.Tree(32, 50, true);
		new app.Tree(32, 49, true);
		new app.Tree(32, 48, true);
		new app.Tree(32, 47, true);
		new app.Tree(32, 46, true);
		new app.Tree(32, 45, true);
		new app.Tree(32, 44, true);
	
		new app.Tree(34, 75, true);
		new app.Tree(34, 74, true);
		new app.Tree(34, 73, true);
		new app.Tree(34, 72, true);
		new app.Tree(34, 71, true);
		new app.Tree(34, 70, true);
		new app.Tree(34, 69, true);
		new app.Tree(34, 68, true);
		new app.Tree(34, 67, true);
		new app.Tree(34, 66, true);
		new app.Tree(34, 65, true);
		new app.Tree(34, 64, true);
		new app.Tree(34, 63, true);
		new app.Tree(34, 62, true);
		new app.Tree(34, 61, true);
		new app.Tree(34, 60, true);
		new app.Tree(34, 59, true);
		new app.Tree(34, 58, true);
		new app.Tree(34, 57, true);
		new app.Tree(34, 56, true);
		new app.Tree(34, 55, true);
		new app.Tree(34, 54, true);
		new app.Tree(34, 53, true);
		new app.Tree(34, 52, true);
		new app.Tree(34, 51, true);
		new app.Tree(34, 50, true);
		new app.Tree(34, 49, true);
		new app.Tree(34, 48, true);
		new app.Tree(34, 47, true);
		new app.Tree(34, 46, true);
		new app.Tree(34, 45, true);
		new app.Tree(34, 44, true);
	
		new app.Stone_1(43, 76);
		new app.Stone_1(42, 76);
		new app.Stone_1(41, 76);
		new app.Stone_1(40, 76);
		new app.Stone_1(39, 76);
		new app.Stone_1(38, 76);
		new app.Stone_1(43, 77);
		new app.Stone_1(42, 77);
		new app.Stone_1(41, 77);
		new app.Stone_1(40, 77);
		new app.Stone_1(39, 77);
		new app.Stone_1(38, 77);
		new app.Stone_1(43, 78);
		new app.Stone_1(42, 78);
		new app.Stone_1(41, 78);
		new app.Stone_1(40, 78);
		new app.Stone_1(39, 78);
		new app.Stone_1(38, 78);
	
		new app.Tree(60, 40);
		new app.Tree(60, 41);
		new app.Tree(60, 42);
		new app.Tree(62, 42);
		new app.Tree(64, 42);
		new app.Tree(66, 42);
		new app.Tree(68, 42);
		new app.Tree(70, 42);
		new app.Tree(72, 42);
		new app.Tree(74, 42);
		new app.Tree(72, 43);
		new app.Tree(74, 43);
		new app.Tree(72, 44);
		new app.Tree(74, 44);
		new app.Tree(72, 45);
		new app.Tree(74, 45);
		new app.Tree(72, 46);
		new app.Tree(74, 46);
		new app.Tree(72, 47);
		new app.Tree(74, 47);
		new app.Tree(72, 48);
		new app.Tree(74, 48);
		new app.Tree(72, 49);
		new app.Tree(74, 49);
		new app.Tree(72, 50);
		new app.Tree(74, 50);
		new app.Tree(72, 51);
		new app.Tree(74, 51);
		new app.Tree(72, 52);
		new app.Tree(74, 52);
		new app.Tree(76, 52);
		new app.Tree(78, 52);
		new app.Tree(80, 52);
		new app.Tree(82, 52);
		new app.Tree(84, 52);
		new app.Tree(86, 52);
		new app.Tree(88, 52);
		new app.Tree(90, 52);

		new app.Tree(54, 73);
		new app.Tree(54, 71);
		new app.Tree(54, 69);
		new app.Tree(54, 67);
		new app.Tree(54, 65);
		new app.Tree(54, 63);

		new app.Tree(67, 73);
		new app.Tree(67, 71);
		new app.Tree(67, 69);
		new app.Tree(67, 67);
		new app.Tree(67, 65);
		new app.Tree(67, 63);

		new app.Food_1(56, 73);
		new app.Food_1(56, 71);
		new app.Food_1(56, 69);
		new app.Food_1(56, 67);
		new app.Food_1(56, 65);
		new app.Food_1(56, 63);

		new app.Food_1(65, 73);
		new app.Food_1(65, 71);
		new app.Food_1(65, 69);
		new app.Food_1(65, 67);
		new app.Food_1(65, 65);
		new app.Food_1(65, 63);

		new app.Food_2(58, 73);
		new app.Food_2(58, 71);
		new app.Food_2(58, 69);
		new app.Food_2(58, 67);
		new app.Food_2(58, 65);
		new app.Food_2(58, 63);

		new app.Food_2(63, 73);
		new app.Food_2(63, 71);
		new app.Food_2(63, 69);
		new app.Food_2(63, 67);
		new app.Food_2(63, 65);
		new app.Food_2(63, 63);

		new app.Tree(72, 73);
		new app.Tree(72, 71);
		new app.Tree(72, 69);
		new app.Tree(72, 67);
		new app.Tree(72, 65);
		new app.Tree(72, 63);
		new app.Tree(72, 61);
		new app.Tree(72, 59);

		new app.Tree(75, 73);
		new app.Tree(75, 71);
		new app.Tree(75, 69);
		new app.Tree(75, 67);
		new app.Tree(75, 65);
		new app.Tree(75, 63);
		new app.Tree(75, 61);
		new app.Tree(75, 59);

		new app.Tree(78, 65);
		new app.Tree(78, 63);
		new app.Tree(78, 61);
		new app.Tree(78, 59);

		new app.Tree(81, 65);
		new app.Tree(81, 63);
		new app.Tree(81, 61);
		new app.Tree(81, 59);

		new app.Tree(84, 65);
		new app.Tree(84, 63);
		new app.Tree(84, 61);
		new app.Tree(84, 59);

		new app.Tree(87, 65);
		new app.Tree(87, 63);
		new app.Tree(87, 61);
		new app.Tree(87, 59);
	}

	//Pass 1
	{
		new app.Tree(94, 65);
		new app.Tree(94, 64);
		new app.Tree(94, 63);
		new app.Tree(94, 62);
		new app.Tree(94, 61);
		new app.Tree(94, 60);
		new app.Tree(94, 59);
		new app.Tree(94, 58);
		new app.Tree(94, 57);
		new app.Tree(94, 56);
		new app.Tree(94, 55);
		new app.Tree(94, 54);
		new app.Tree(94, 53);
		new app.Tree(94, 52);
		new app.Tree(94, 51);

		new app.Tree(96, 65);
		new app.Tree(96, 64);
		new app.Tree(96, 63);
		new app.Tree(96, 62);
		new app.Tree(96, 61);
		new app.Tree(96, 60);
		new app.Tree(96, 59);
		new app.Tree(96, 58);
		new app.Tree(96, 57);
		new app.Tree(96, 56);
		new app.Tree(96, 55);
		new app.Tree(96, 54);
		new app.Tree(96, 53);
		new app.Tree(96, 52);
		new app.Tree(96, 51);

		new app.Tree(98, 65);
		new app.Tree(98, 64);
		new app.Tree(98, 63);
		new app.Tree(98, 62);
		new app.Tree(98, 61);
		new app.Tree(98, 60);
		new app.Tree(98, 59);
		new app.Tree(98, 58);
		new app.Tree(98, 57);
		new app.Tree(98, 56);
		new app.Tree(98, 55);
		new app.Tree(98, 54);
		new app.Tree(98, 53);
		new app.Tree(98, 52);
		new app.Tree(98, 51);

		new app.Tree(100, 65);
		new app.Tree(100, 64);
		new app.Tree(100, 63);
		new app.Tree(100, 62);
		new app.Tree(100, 61);
		new app.Tree(100, 60);
		new app.Tree(100, 59);
		new app.Tree(100, 58);
		new app.Tree(100, 57);
		new app.Tree(100, 56);
		new app.Tree(100, 55);
		new app.Tree(100, 54);
		new app.Tree(100, 53);
		new app.Tree(100, 52);
		new app.Tree(100, 51);

		new app.Tree(102, 65);
		new app.Tree(102, 64);
		new app.Tree(102, 63);
		new app.Tree(102, 62);
		new app.Tree(102, 61);
		new app.Tree(102, 60);
		new app.Tree(102, 59);
		new app.Tree(102, 58);
		new app.Tree(102, 57);
		new app.Tree(102, 56);
		new app.Tree(102, 55);
		new app.Tree(102, 54);
		new app.Tree(102, 53);
		new app.Tree(102, 52);
		new app.Tree(102, 51);

		new app.Tree(104, 65);
		new app.Tree(104, 64);
		new app.Tree(104, 63);
		new app.Tree(104, 62);
		new app.Tree(104, 61);
		new app.Tree(104, 60);
		new app.Tree(104, 59);
		new app.Tree(104, 58);
		new app.Tree(104, 57);
		new app.Tree(104, 56);
		new app.Tree(104, 55);
		new app.Tree(104, 54);
		new app.Tree(104, 53);
		new app.Tree(104, 52);
		new app.Tree(104, 51);

		new app.Tree(106, 65);
		new app.Tree(106, 64);
		new app.Tree(106, 63);
		new app.Tree(106, 62);
		new app.Tree(106, 61);
		new app.Tree(106, 60);
		new app.Tree(106, 59);
		new app.Tree(106, 58);
		new app.Tree(106, 57);
		new app.Tree(106, 56);
		new app.Tree(106, 55);
		new app.Tree(106, 54);
		new app.Tree(106, 53);
		new app.Tree(106, 52);
		new app.Tree(106, 51);

		new app.Tree(150, 65);
		new app.Tree(150, 64);
		new app.Tree(150, 63);
		new app.Tree(150, 62);
		new app.Tree(150, 61);

		new app.Tree(152, 65);
		new app.Tree(152, 64);
		new app.Tree(152, 63);
		new app.Tree(152, 62);
		new app.Tree(152, 61);

		new app.Tree(154, 65);
		new app.Tree(154, 64);
		new app.Tree(154, 63);
		new app.Tree(154, 62);
		new app.Tree(154, 61);

		new app.Tree(156, 65);
		new app.Tree(156, 64);
		new app.Tree(156, 63);
		new app.Tree(156, 62);
		new app.Tree(156, 61);

		new app.Tree(158, 65);
		new app.Tree(158, 64);
		new app.Tree(158, 63);
		new app.Tree(158, 62);
		new app.Tree(158, 61);

		new app.Tree(160, 65);
		new app.Tree(160, 64);
		new app.Tree(160, 63);
		new app.Tree(160, 62);
		new app.Tree(160, 61);
		new app.Tree(160, 60);
		new app.Tree(160, 59);
		new app.Tree(160, 58);
		new app.Tree(160, 57);
		new app.Tree(160, 56);
		new app.Tree(160, 55);
		new app.Tree(160, 54);
		new app.Tree(160, 53);
		new app.Tree(160, 52);
		new app.Tree(160, 51);
		new app.Tree(160, 50);

		new app.Tree(162, 65);
		new app.Tree(162, 64);
		new app.Tree(162, 63);
		new app.Tree(162, 62);
		new app.Tree(162, 61);
		new app.Tree(162, 60);
		new app.Tree(162, 59);
		new app.Tree(162, 58);
		new app.Tree(162, 57);
		new app.Tree(162, 56);
		new app.Tree(162, 55);
		new app.Tree(162, 54);
		new app.Tree(162, 53);
		new app.Tree(162, 52);
		new app.Tree(162, 51);
		new app.Tree(162, 50);

		new app.Tree(164, 65);
		new app.Tree(164, 64);
		new app.Tree(164, 63);
		new app.Tree(164, 62);
		new app.Tree(164, 61);
		new app.Tree(164, 60);
		new app.Tree(164, 59);
		new app.Tree(164, 58);
		new app.Tree(164, 57);
		new app.Tree(164, 56);
		new app.Tree(164, 55);
		new app.Tree(164, 54);
		new app.Tree(164, 53);
		new app.Tree(164, 52);
		new app.Tree(164, 51);
		new app.Tree(164, 50);

		new app.Tree(166, 64);
		new app.Tree(166, 63);
		new app.Tree(166, 62);
		new app.Tree(166, 61);
		new app.Tree(166, 60);
		new app.Tree(166, 59);
		new app.Tree(166, 58);

		new app.Tree(168, 64);
		new app.Tree(168, 63);
		new app.Tree(168, 62);
		new app.Tree(168, 61);
		new app.Tree(168, 60);
		new app.Tree(168, 59);
		new app.Tree(168, 58);

		new app.Stone_1(167, 56);
		new app.Stone_1(167, 55);
		new app.Stone_1(167, 54);
		new app.Stone_1(167, 53);
		new app.Stone_1(167, 51);
		new app.Stone_1(167, 50);

		new app.Stone_1(168, 56);
		new app.Stone_1(168, 55);
		new app.Stone_1(168, 54);
		new app.Stone_1(168, 53);
		new app.Stone_1(168, 51);
		new app.Stone_1(168, 50);

		new app.Stone_1(169, 56);
		new app.Stone_1(169, 55);
		new app.Stone_1(169, 54);
		new app.Stone_1(169, 53);
		new app.Stone_1(169, 51);
		new app.Stone_1(169, 50);

		new app.Stone_1(170, 56);
		new app.Stone_1(170, 55);
		new app.Stone_1(170, 54);
		new app.Stone_1(170, 53);
		new app.Stone_1(170, 51);
		new app.Stone_1(170, 50);

		new app.Stone_1(171, 56);
		new app.Stone_1(171, 55);
		new app.Stone_1(171, 54);
		new app.Stone_1(171, 53);
		new app.Stone_1(171, 51);
		new app.Stone_1(171, 50);

		new app.Stone_1(172, 56);
		new app.Stone_1(172, 55);
		new app.Stone_1(172, 54);
		new app.Stone_1(172, 53);
		new app.Stone_1(172, 52);
		new app.Stone_1(172, 51);
		new app.Stone_1(172, 50);

		new app.Stone_1(173, 56);
		new app.Stone_1(173, 55);
		new app.Stone_1(173, 54);
		new app.Stone_1(173, 53);
		new app.Stone_1(173, 52);
		new app.Stone_1(173, 51);
		new app.Stone_1(173, 50);

		new app.Stone_1(174, 56);
		new app.Stone_1(174, 55);
		new app.Stone_1(174, 54);
		new app.Stone_1(174, 53);
		new app.Stone_1(174, 52);
		new app.Stone_1(174, 51);
		new app.Stone_1(174, 50);

		new app.Stone_1(175, 56);
		new app.Stone_1(175, 55);
		new app.Stone_1(175, 54);
		new app.Stone_1(175, 53);
		new app.Stone_1(175, 52);
		new app.Stone_1(175, 51);
		new app.Stone_1(175, 50);

		new app.Stone_1(176, 56);
		new app.Stone_1(176, 55);
		new app.Stone_1(176, 54);
		new app.Stone_1(176, 53);
		new app.Stone_1(176, 52);
		new app.Stone_1(176, 51);
		new app.Stone_1(176, 50);

		new app.Stone_1(177, 56);
		new app.Stone_1(177, 55);
		new app.Stone_1(177, 54);
		new app.Stone_1(177, 53);
		new app.Stone_1(177, 52);
		new app.Stone_1(177, 51);
		new app.Stone_1(177, 50);

		new app.Stone_1(178, 57);
		new app.Stone_1(178, 56);
		new app.Stone_1(178, 55);
		new app.Stone_1(178, 54);
		new app.Stone_1(178, 53);
		new app.Stone_1(178, 52);
		new app.Stone_1(178, 51);
		new app.Stone_1(178, 50);

		new app.Stone_1(179, 57);
		new app.Stone_1(179, 56);
		new app.Stone_1(179, 55);
		new app.Stone_1(179, 54);
		new app.Stone_1(179, 53);
		new app.Stone_1(179, 52);
		new app.Stone_1(179, 51);
		new app.Stone_1(179, 50);

		new app.Stone_1(180, 57);
		new app.Stone_1(180, 56);
		new app.Stone_1(180, 55);
		new app.Stone_1(180, 54);
		new app.Stone_1(180, 53);
		new app.Stone_1(180, 52);
		new app.Stone_1(180, 51);
		new app.Stone_1(180, 50);

		new app.Stone_1(181, 57);
		new app.Stone_1(181, 56);
		new app.Stone_1(181, 55);
		new app.Stone_1(181, 54);
		new app.Stone_1(181, 53);
		new app.Stone_1(181, 52);
		new app.Stone_1(181, 51);
		new app.Stone_1(181, 50);

		new app.Tree(170, 64);
		new app.Tree(170, 63);
		new app.Tree(170, 62);
		new app.Tree(170, 61);
		new app.Tree(170, 60);
		new app.Tree(170, 59);
		new app.Tree(170, 58);

		new app.Tree(172, 64);
		new app.Tree(172, 63);
		new app.Tree(172, 62);
		new app.Tree(172, 61);
		new app.Tree(172, 60);
		new app.Tree(172, 59);
		new app.Tree(172, 58);

		new app.Tree(174, 64);
		new app.Tree(174, 63);
		new app.Tree(174, 62);
		new app.Tree(174, 61);
		new app.Tree(174, 60);
		new app.Tree(174, 59);
		new app.Tree(174, 58);

		new app.Tree(176, 64);
		new app.Tree(176, 63);
		new app.Tree(176, 62);
		new app.Tree(176, 61);
		new app.Tree(176, 60);
		new app.Tree(176, 59);
		new app.Tree(176, 58);

		new app.Tree(178, 64);
		new app.Tree(178, 63);
		new app.Tree(178, 62);
		new app.Tree(178, 61);
		new app.Tree(178, 60);
		new app.Tree(178, 59);
		new app.Tree(178, 58);

		new app.Tree(180, 64);
		new app.Tree(180, 63);
		new app.Tree(180, 62);
		new app.Tree(180, 61);
		new app.Tree(180, 60);
		new app.Tree(180, 59);
		new app.Tree(180, 58);

		new app.Tree(182, 64);
		new app.Tree(182, 63);
		new app.Tree(182, 62);
		new app.Tree(182, 61);
		new app.Tree(182, 60);
		new app.Tree(182, 59);
		new app.Tree(182, 58);

		new app.Tree(184, 64);
		new app.Tree(184, 63);
		new app.Tree(184, 62);
		new app.Tree(184, 61);
		new app.Tree(184, 60);
		new app.Tree(184, 59);
		new app.Tree(184, 58);

		new app.Tree(186, 64);
		new app.Tree(186, 63);
		new app.Tree(186, 62);
		new app.Tree(186, 61);
		new app.Tree(186, 60);
		new app.Tree(186, 59);
		new app.Tree(186, 58);

		new app.Tree(188, 64);
		new app.Tree(188, 63);
		new app.Tree(188, 62);
		new app.Tree(188, 61);
		new app.Tree(188, 60);
		new app.Tree(188, 59);
		new app.Tree(188, 58);

		new app.Tree(190, 64);
		new app.Tree(190, 63);
		new app.Tree(190, 62);
		new app.Tree(190, 61);
		new app.Tree(190, 60);
		new app.Tree(190, 59);
		new app.Tree(190, 58);

		new app.Tree(192, 64);
		new app.Tree(192, 63);
		new app.Tree(192, 62);
		new app.Tree(192, 61);
		new app.Tree(192, 60);
		new app.Tree(192, 59);
		new app.Tree(192, 58);

		new app.Tree(194, 64);
		new app.Tree(194, 63);
		new app.Tree(194, 62);
		new app.Tree(194, 61);
		new app.Tree(194, 60);
		new app.Tree(194, 59);
		new app.Tree(194, 58);

		new app.Tree(196, 64);
		new app.Tree(196, 63);
		new app.Tree(196, 62);
		new app.Tree(196, 61);
		new app.Tree(196, 60);
		new app.Tree(196, 59);
		new app.Tree(196, 58);

		new app.Tree(198, 64);
		new app.Tree(198, 63);
		new app.Tree(198, 62);
		new app.Tree(198, 61);
		new app.Tree(198, 60);
		new app.Tree(198, 59);
		new app.Tree(198, 58);

		new app.Tree(200, 64);
		new app.Tree(200, 63);
		new app.Tree(200, 62);
		new app.Tree(200, 61);
		new app.Tree(200, 60);
		new app.Tree(200, 59);
		new app.Tree(200, 58);

	}
	// new app.Tree(7, 8, false);

	// new app.Food_1(3, 3);
	// new app.Food_2(14, 3);

	// new app.Stone_1(8, 3);
	// new app.Stone_2(9, 4);

	// new app.Person_1(1, 29);
	// new app.Person_2(13, 14);

	// new app.House_1(12, 10, 0, 8);
}

initObjects();
app.engine.init();
