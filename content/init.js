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
