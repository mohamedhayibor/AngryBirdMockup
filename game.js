/** Your goal is getting the perfect score 100pts. Repeat as much as possible until you become a Master.
*	Press on 'ctrl' + r to refresh the page.
*   The corn will earn you 60 pts and each pillar will earn you 10pts.	
**/

// user points
var points = 0;

var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

world.createEntity({
	name: "player1",
	shape: "circle",
	color: "red",
	radius: 1.5,
	density: 2,
	x: 2,
	image: "angryBird.png",
	imageStretchToFit(image) {
		return true;
	},
	onKeyDown: function (e) {
		this.applyImpulse(300 * Math.random(), 55);
	}
});

world.createEntity({
	name: "food",
	shape: "square",
	height: 3,
	width: 2,
	x: 40,
	y: 8,
	image: "corn.jpg",
	onImpact: function (entity, force) {
		if (entity.name() === "player1") {
			this.destroy(); // gets eaten
			points += 60; // user gets 60 pts
			setTimeout(function() {
				if (points === 100) {
					alert("You are a Master at this game. Congrats.");
				} else {
					alert("You got a total of  "+ (points).toString() + "! Try becoming a Master by earning 100pts." + "\n"
					+ "\n" + "Press on 'ctrl' + r to try again.");
				}
			}, 2000);
		}
	},
	imageStretchToFit(image) {
		return true;
	}
});

var block = {
	name: "block",
	shape: "square",
	color: "orange",
	width: 0.5,
	height: 7,
	onImpact: function (entity, force) {
		if (entity.name() === "player1") {
			if (this.color() === "orange") {  // only if the pillar has never been touched
				points += 10;
			}
			this.color("red");
		}
	}
};

world.createEntity(block, {
	x: 20,
});
world.createEntity(block, {
	x: 30,
});
world.createEntity(block), {
	x: 30,
};
// horizontal pillar
world.createEntity(block, {
	x: 25,
	y: 1,
	width: 12,
	height: .5
});


// creating the target object
world.createEntity({
	name: "target",
	shape: "square",
	x: 40,
	type: "static",
	color: "red",
	width: 4,
	height: 3,
	y: 10
});


// Setting up the environment
// Pillars to isolate our world
var pillar = {
	name: "pillar",
	shape: "square",
	type: "static",
	color: "black",
};
// Floor
world.createEntity( pillar, {
	width: 100,
	height: .5,
	y: 20,
	color: "grey"
});

// left
world.createEntity(pillar, {
	x: 0,
	height: 40.5,
	width: 0.1,
	y: 0,
});

// Top
world.createEntity(pillar, {
	x: 0,
	height: 0.1,
	width: 100,
	y: 0,
});

// right
world.createEntity(pillar, {
	x: 44.6,
	height: 40.5,
	width: 0.1,
	y: 0,
});


/** please refer to box's documentation @ http://incompl.github.io/boxbox/updoc.html
* launch on browser with: index.html on your browser and enjoy
*
* Rules of the game: feed Mr. Angry. Help him reach the corn while after having knocked down (physically touched)
* all 4 different pillars
* Bonus: knockdown the pillars (will receive 10 points for each)
*
*/
