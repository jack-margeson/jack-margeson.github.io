// Initialize Firebase
var config = {
	apiKey: "AIzaSyBgHWzU4oj7TQpgw-XSey6v07AV2-J_A-Q",
	authDomain: "collaborative-sketch-together.firebaseapp.com",
	databaseURL: "https://collaborative-sketch-together.firebaseio.com",
	projectId: "collaborative-sketch-together",
	storageBucket: "collaborative-sketch-together.appspot.com",
	messagingSenderId: "858865570515"
};
firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();
var points = [];
	
function setup() {
	var canvas = createCanvas(400, 400);
	background(255);
	fill(0);
		
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  pointsData.on("child_removed", function () {
    points = [];
  });
  
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(mousecheck);
}

function mousecheck() {
  if (mouseIsPressed) {
    drawPoint();
  }
}

function saveDrawing() {
	saveCanvas('drawing');
}

function clearDrawing() {
	pointsData.remove();
	points = [];
}

function draw() {
	background(255);
	
	for (var i = 0; i < points.length; i++) {
	var point = points[i];
	ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
	pointsData.push({x: mouseX, y: mouseY});
}