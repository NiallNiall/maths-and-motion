// // =================================================
// // MAKE WHITE BALL BOUNCE
// // =================================================

// var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 

// var triArray = [];
// var triArrayAlt = [];


// function createTriangle(_trianglearray, _triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius),
// 		new Point(c.x + Radius, c.y+Radius)
// 		];

// 		_trianglearray.push(new Path(points));
// }

// var triDistance = 50;

// for(var i = 0; i < view.size.width; i+= triDistance) {
// 	for(var j = 0; j < view.size.height; j+= triDistance) {
// 		var triangleCenter = new Point(i,j);
// 		createTriangle(triArray, triangleCenter, 25);
// 		var triangleCenter = new Point(i+triDistance/2,j);
// 		createTriangle(triArrayAlt, triangleCenter, -25);
// 	}
// }

// console.log(triArray);

// for(var i = 0; i < triArray.length; i++) {
// 		var triangleColor = Color.random();
// 		triArray[i].fillColor = triangleColor;
// }
// for(var i = 0; i < triArrayAlt.length; i++) {
// 	var triangleColor = Color.random();
// 	triArrayAlt[i].fillColor = triangleColor;
// }


// var ball = new Path.Circle(view.center, 20);
// ball.fillColor = 'white';

// var ballSpeed = new Point(10, 10);
// var ballDirection = new Point(1, 1);


// function onFrame(event) {

// 	for(var i = 0; i < triArrayAlt.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArrayAlt[i].rotate(-1);
// 		// var sinus = Math.sin(event.time * 2 +1);
// 		triArrayAlt[i].fillColor.hue +=5;
// 		// triArrayAlt[i].scaling = sinus;

// 	}

// 	for(var i = 0; i < triArray.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArray[i].rotate(1);
// 		// var sinus = Math.sin(event.time * -2 +1);
// 		triArray[i].fillColor.hue +=5;
// 		// triArray[i].scaling = sinus;
// 	}

// 	if (ball.position.y >= view.bounds.height || ball.position.y <= 0){
// 		ballDirection.y *= -1;
// 	}

// 	if (ball.position.x >= view.bounds.width || ball.position.x <= 0){
// 		ballDirection.x *= -1;
// 	}

// 	ball.position += ballSpeed * ballDirection;

// }

// =================================================
// MAKE WHITE BALL BOUNCE
// =================================================

var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 

var triArray = [];
var triArrayAlt = [];


function createTriangle(_trianglearray, _triangleCenter, _radius){
	var c = _triangleCenter;
	var Radius = _radius;

	var points = [
		new Point(c.x + Radius, c.y+Radius),
		new Point(c.x - Radius, c.y+Radius),
		new Point(c.x, c.y-Radius),
		new Point(c.x + Radius, c.y+Radius)
		];

		_trianglearray.push(new Path(points));
}

var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
	for(var j = 0; j < view.size.height; j+= triDistance) {
		var triangleCenter = new Point(i,j);
		createTriangle(triArray, triangleCenter, 25);
		var triangleCenter = new Point(i+triDistance/2,j);
		createTriangle(triArrayAlt, triangleCenter, -25);
	}
}

console.log(triArray);

for(var i = 0; i < triArray.length; i++) {
		var triangleColor = Color.random();
			// var triangleColor = colours[Math.floor(Math.random()*colours.length)];

		triArray[i].fillColor = triangleColor;
}
for(var i = 0; i < triArrayAlt.length; i++) {
	var triangleColor = Color.random();
		// var triangleColor = colours[Math.floor(Math.random()*colours.length)];

	triArrayAlt[i].fillColor = triangleColor;
}


var ball = new Path.Circle(view.center, 20);
// ball.fillColor = 'white';

var ballSpeed = new Point(5, 5);
var ballDirection = new Point(1, 1);


// function getDistance(_point1, point2) {
// 	var dist = _point2 - _point1;

// 	var length;
// 	return length;
// }

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

// function mapNumbers(num, in_min, in_max, out_min, out_max) {
//   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }

function onFrame(event) {

	for(var i = 0; i < triArrayAlt.length; i++) {
		// var triangleColor = Color.random();
		// triArray[i].fillColor = triangleColor;
		// triArrayAlt[i].rotate(-1);
		// var sinus = Math.sin(event.time * 2 +1);
		triArrayAlt[i].scaling = 0.1;
		// triArrayAlt[i].fillColor.hue +=5;
		var distance = (ball.position - triArrayAlt[i].position).length;

		var clampr = distance / 500;
		var triSize = clampr.clamp(0, 1);

		// var triSize = mapNumbers(distance, 0, 500, 0, 1.0);
		// var triSize = distance / 500;
		// console.log(distance);

		triArrayAlt[i].scaling = triSize;

	}

	for(var i = 0; i < triArray.length; i++) {
		// var triangleColor = Color.random();
		// triArray[i].fillColor = triangleColor;
		// triArray[i].rotate(1);
		// var sinus = Math.sin(event.time * -2 +1);
		triArray[i].scaling = 0.1;
		// triArray[i].fillColor.hue +=5;
		var distance = (ball.position - triArray[i].position).length;

		// var triSize = mapNumbers(distance, 0, 500, 0, 1.0);
		var clampr = distance / 500;
		var triSize = clampr.clamp(0, 1);

		// var triSize = distance / 500;
		// console.log(distance);

		triArray[i].scaling = triSize;
		// triArray[i].scaling = sinus;
	}

	if (ball.position.y >= view.bounds.height || ball.position.y <= 0){
		ballDirection.y *= -1;
	}

	if (ball.position.x >= view.bounds.width || ball.position.x <= 0){
		ballDirection.x *= -1;
	}

	ball.position += ballSpeed * ballDirection;

}