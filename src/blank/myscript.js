var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 
// var colours = ['navy', 'blue', 'skyblue', 'darkblue', 'lightblue']; 

var triArray = [];

function createTriangle(_triangleArray, _triangleCenter, _radius){
	var c = _triangleCenter;
	var Radius = _radius;

	var points = [
		new Point(c.x + Radius, c.y+Radius),
		new Point(c.x - Radius, c.y+Radius),
		new Point(c.x, c.y-Radius)
		];

	var path = new Path(points);
	// var triangleColor = colours[Math.floor(Math.random()*colours.length)];
	var triangleColor = Color.random();
		path.fillColor = triangleColor;
		_triangleArray.push(path);
}

var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
	for(var j = 0; j < view.size.height; j+= triDistance) {

	 	var Radius = triDistance/2;
		var triangleCenter = new Point(i,j);
		createTriangle(triArray, triangleCenter, Radius);

		var nextTriangleCenter = new Point(i+Radius,j);
		createTriangle(triArray, nextTriangleCenter, -Radius);
	}
}

var ball = new Path.Circle(view.center, 20);
// ball.fillColor = 'white';

var ballDirection = new Point(10, 10);


function onFrame(event) {

	// console.log(event.time);

	ball.position += ballDirection;
	
	if(ball.position.y >= view.bounds.height || ball.position.y <= 0) {
		ballDirection.y *= -1;
	}
	if(ball.position.x >= view.bounds.width || ball.position.x <= 0) {
		ballDirection.x *= -1;
	}

	for(var i = 0; i < triArray.length; i++) {

		var point1 = triArray[i].position;
		var distance = (ball.position - point1).length;

		// var siner = Math.sin(event.time * 2 + (i *100));

		triArray[i].scaling = distance/1000;

		// var triangleColor = Color.random();
		triArray[i].fillColor.hue += 1;

	}
}





