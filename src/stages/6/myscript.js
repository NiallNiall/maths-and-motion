// =================================================
// ANIMATE COLOUR
// =================================================


// var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 
// var triArray = [];
// var triArrayAlt = [];


// var points = [
// 	new Point(100,100),
// 	new Point(400,100)
// 	];

// var path = new Path(points);
// // path.strokeColor = 'white';

// for (var i = 0; i < points.length; i++) {
// 	// console.log(points[i]);
// 	var myCircle = new Path.Circle(points[i], 10);
// 	myCircle.fillColor = 'white';
// };


// var mainPath = new Path(points);
// mainPath.strokeColor = 'red';
// mainPath.strokeWidth = 10.0;
// mainPath.strokeCap = 'round';


// var rndpoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
// var myCircle = new Path.Circle(rndpoint, 10);
// myCircle.fillColor = 'white';

// function onFrame(event) {

// 	var destination = rndpoint.round();
// 	var point2 = mainPath.segments[1].point.round();
// 	var diff = destination - point2;
// 	var pointlength = diff.length;
// 	console.log(pointlength);

// 	if(pointlength < 10) {
// 		console.log("frog!");
// 		rndpoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		myCircle.position = rndpoint;
// 	} else {
// 		var direction = destination - point2;
// 		var d1 = direction.normalize();
// 		var point3 = point2 + (d1*8);

// 		mainPath.segments[1].point = point3;
// 	}
// }

// function onMouseMove(event) {

// }









// =================================================
// draw lines
// =================================================

// var points = [
// 	new Point(100,100),
// 	new Point(400,100)
// 	];

// var path = new Path(points);
// // path.strokeColor = 'white';

// // for (var i = 0; i < points.length; i++) {
// // 	// console.log(points[i]);
// // 	var myCircle = new Path.Circle(points[i], 10);
// // 	myCircle.fillColor = 'white';
// // };


// var mainPath = new Path(points);
// mainPath.strokeColor = 'red';
// mainPath.strokeWidth = 10.0;
// mainPath.strokeCap = 'round';
// mainPath.strokeJoin = 'round';

// var lineInc = 1;

// var rndpoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
// var myCircle = new Path.Circle(rndpoint, 10);
// myCircle.fillColor = 'white';

// function onFrame(event) {

// 	var destination = rndpoint;
// 	var point2 = mainPath.segments[lineInc].point;
// 	var diff = destination - point2;
// 	var pointlength = diff.length;
// 	// console.log(pointlength);

// 	if(pointlength < 10) {
// 		console.log("frog!");
// 		mainPath.add(destination);
// 		lineInc +=1;
// 		rndpoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		myCircle.position = rndpoint;
// 	} else {
// 		var direction = destination - point2;
// 		var d1 = direction.normalize();
// 		var point3 = point2 + (d1*8);

// 		mainPath.segments[lineInc].point = point3;
// 	}
// }

// function onMouseMove(event) {

// }




// // =================================================
// // draw lines
// // =================================================

// var points = [
// 	view.center,
// 	view.center
// 	];

// var path = new Path(points);
// // path.strokeColor = 'white';

// // for (var i = 0; i < points.length; i++) {
// // 	// console.log(points[i]);
// // 	var myCircle = new Path.Circle(points[i], 10);
// // 	myCircle.fillColor = 'white';
// // };


// var mainPath = new Path(points);
// mainPath.strokeColor = 'red';
// mainPath.strokeWidth = 10.0;
// mainPath.strokeCap = 'round';
// mainPath.strokeJoin = 'round';

// var lineInc = 1;

// var rndpoint = view.center + (new Point(getRandomA(-1, 1),getRandomA(-1, 1))* 50);;
// var myCircle = new Path.Circle(rndpoint, 10);
// myCircle.fillColor = 'white';

// function getRandomA(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function onFrame(event) {

// 	var destination = rndpoint;
// 	var point2 = mainPath.segments[lineInc].point;
// 	var diff = destination - point2;
// 	var pointlength = diff.length;
// 	// console.log(pointlength);

// 	if(pointlength < 10) {
// 		console.log("frog!");
// 		mainPath.add(destination);
// 		lineInc +=1;
// 		rndpoint = point2 + (new Point(getRandomA(-1, 1),getRandomA(-1, 1))* 10);
// 		if(rndpoint.x > view.bounds.width) {
// 			rndpoint.x = view.bounds.width - 10;
// 		}
// 		if(rndpoint.x < 0) {
// 			rndpoint.x = 10;
// 		}
// 		if(rndpoint.y > view.bounds.height) {
// 			rndpoint.y = view.bounds.height - 10;
// 		}
// 		if(rndpoint.y < 0) {
// 			rndpoint.y = 10;
// 		}
// 		myCircle.position = rndpoint;
// 	} else {
// 		var direction = destination - point2;
// 		var d1 = direction.normalize();
// 		var point3 = point2 + (d1*10);

// 		mainPath.segments[lineInc].point = point3;
// 	}
// }

// function onMouseMove(event) {

// }

// =================================================
// draw lines
// =================================================

var mainPaths = [];

// var points = [
// 	view.center,
// 	view.center
// 	];

// var path = new Path(points);

// var mainPath = new Path(points);
// mainPath.strokeColor = 'red';
// mainPath.strokeWidth = 10.0;
// mainPath.strokeCap = 'round';
// mainPath.strokeJoin = 'round';

var lineInc = 1;

var rndpoint = view.center + (new Point(getRandomA(-1, 1),getRandomA(-1, 1))* 50);;
// var myCircle = new Path.Circle(rndpoint, 10);
// myCircle.fillColor = 'white';

makeNewSquiggle();


function makeNewSquiggle(){

	var point1 = new Point(view.bounds.width, view.bounds.height) * Point.random();
	var point2 = point1 + (new Point(getRandomA(-1, 1),getRandomA(-1, 1))* 50);
	rndpoint = point2;

	var points = [
		point1,
		point2
	];

	var path = new Path(points);

	mainPaths.push( new Path(points));
	mainPaths[mainPaths.length-1].strokeColor = Color.random();
	mainPaths[mainPaths.length-1].strokeWidth = 10.0;
	mainPaths[mainPaths.length-1].strokeCap = 'round';
	mainPaths[mainPaths.length-1].strokeJoin = 'round';
}

function getRandomA(min, max) {
  return Math.random() * (max - min) + min;
}

function drawSquiggle(_path) {

	var destination = rndpoint;
	var point2 = _path.segments[lineInc].point;
	var diff = destination - point2;
	var pointlength = diff.length;
	// console.log(pointlength);

	if(pointlength < 10) {
		_path.add(destination);
		lineInc +=1;
		rndpoint = point2 + (new Point(getRandomA(-1, 1),getRandomA(-1, 1))* 10);
		if(rndpoint.x > view.bounds.width) {
			rndpoint.x = view.bounds.width - 10;
		}
		if(rndpoint.x < 0) {
			rndpoint.x = 10;
		}
		if(rndpoint.y > view.bounds.height) {
			rndpoint.y = view.bounds.height - 10;
		}
		if(rndpoint.y < 0) {
			rndpoint.y = 10;
		}
		// myCircle.position = rndpoint;
	} else {
		var direction = destination - point2;
		var d1 = direction.normalize();
		var point3 = point2 + (d1*10);

		_path.segments[lineInc].point = point3;
	}

}

// var squiggleCount = 0;

function onFrame(event) {
	drawSquiggle(mainPaths[mainPaths.length-1]);

	for(var i = 0; i < mainPaths[mainPaths.length-1].segments.length; i++) {
		mainPaths[mainPaths.length-1].segments[i].point += (new Point(getRandomA(-1, 1),getRandomA(-1, 1))*2);
	}

	// for(var i = 0; i < mainPaths.length; i++) {
	// 	mainPaths[i].rotate(25);
	// }

	if(mainPaths[mainPaths.length-1].segments.length > 20){
		lineInc =0;
		makeNewSquiggle();
	}



}

function onMouseMove(event) {

}

function onKeyDown(event) {
	lineInc =0;
	makeNewSquiggle();
	// squiggleCount +=1;

	if(event.key == 'a') {
		console.log(mainPaths);
	}

}