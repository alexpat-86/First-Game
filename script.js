var myGameArea = document.getElementById("myCanvas");

var draw = 
	myGameArea.getContext("2d");
	draw.fillStyle = "#b92d5d";
	x = 10, y = 300; mv = 15;
	
var enemy = 
  myGameArea.getContext("2d");
	enemy.fillStyle = "#feb43f";
	enemy.beginPath();
	enemy.arc(100, 75, 10, 0, 2 * Math.PI);
	enemy.fill();

var scoretxt = 
  myGameArea.getContext("2d");
	scoretxt.font = "30px Arial";
	scoretxt.fillStyle = "black";
	scoretxt.fillText("Score " + score, 5, 30);
	
/* score currently updates on moveup()*/	
var score = 0;

/* testing function to build a wall*/
function build() {
	myGameArea.getContext("2d");
	draw.fillStyle = "black";
	draw.fillRect(x, y, 50, 10);
}

function moveup() {
	var draw =
	myGameArea.getContext("2d");
	draw.fillStyle = "#b92d5d";
  y = y - mv;
	score++;
	if (y < 0) {
		y = 0;
	}
}
 
function movedown() {
	var draw = 
	myGameArea.getContext("2d");
	draw.fillStyle = "#b92d5d";
	y = y + mv;
	if (y > 600) {
		y = 600;
	}
}

function moveleft() {
	var draw = 
	myGameArea.getContext("2d");
	draw.fillStyle = "#b92d5d";
	x = x - mv;
	if (x < 0) {
		x = 0;
	}
}

function moveright() {
	var draw = 
	myGameArea.getContext("2d");
	draw.fillStyle = "#b92d5d";
	x = x + mv;
	if (x > 360) {
		x = 360;
	}
}

var canvas;
var draw;

var WIDTH;
var HEIGHT;

var x;
var y;

function init() {
    canvas = document.getElementById('myCanvas');
    HEIGHT = canvas.height;
    WIDTH = canvas.width;
    draw = canvas.getContext('2d');
    setInterval(redraw, 30);		
}

function clear(c) {
    c.clearRect(0, 0, WIDTH, HEIGHT);
}

function redraw() {
    clear(draw);
		draw.fillStyle = "#b92d5d";
    draw.fillRect(x, y, '50', '50');
		enemy.fillStyle = "#feb43f";
	  enemy.beginPath();
	 enemy.arc(100, 75, 10, 0, 2 * Math.PI);
	  enemy.fill();
		scoretxt.fillStyle = "black";
		scoretxt.font = "30px Arial";
		scoretxt.fillText("Score " + score, 5, 30);
}
