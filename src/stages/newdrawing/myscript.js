
// =================================================
// draw lines
// =================================================

// var circleArray = [];

// function makeNewCircle(cirArray, cirPosition, radius){
// 	var myCircle = new Path.Circle(cirPosition, 5);
// 	myCircle.strokeColor = 'white';
// 	cirArray.push(myCircle);
// }

// function getRandomA(min, max) {
//   return Math.random() * (max - min) + min;
// }

// 	var circlePosition = view.center;//new Point(100,100);
// 	makeNewCircle(circleArray, circlePosition);

// // var squiggleCount = 0;
// var count = 0;

// function getRandomPoint(array) {
// 	// var lastPoint = array[array.length-1].position;
// 	// var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 	// var randomPoint = lastPoint + (randomDirection.normalize() * 50);
// }

// function onFrame(event) {
// 	// count++

// 		var lastPoint = circleArray[circleArray.length-1].position;
	

// 		var searching = true;
// 		var makeCircle = true;

// 		var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 		var randomPoint = lastPoint + (randomDirection.normalize() * 20);

// 		// var randomPoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 			// console.log('yo');
// 			// makeNewCircle(circleArray, randomPoint, 10);


// 		for(var i =0; i < circleArray.length; i++) {

// 			var thisPoint = circleArray[i].position;
// 			// console.log(thisPoint);
// 			var length1 = (randomPoint - thisPoint).length;
// 			// console.log('circle array number ' + i + ' has length ' + length1);

// 				if(length1 <= 20) {
// 						// makeNewCircle(circleArray, randomPoint, 10);
// 						// var myCircle = new Path.Circle(randomPoint, 5);
// 						// myCircle.strokeColor = 'white';
// 						makeCircle = false;
// 				}
// 		// 		// console.log(length1);
// 				// makeNewCircle(circleArray, randomPoint, 10);
// 		// 	// }
// 		// }
// 		// for(var i =0; i < circleArray.length; i++) {

// 		}

// 		if (makeCircle) {
// 			makeNewCircle(circleArray, randomPoint, 10);
// 		}


// 	// if(count >= 40){

// 	// 	var lastPoint = circleArray[circleArray.length-1].position;
// 	// 	var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 	// 	var randomPoint = lastPoint + (randomDirection.normalize() * 100);
		

// 	// 	// var length1 = (lastPoint - randomPoint).length;

// 	// 	// var length2 = 

// 	// 	var searching = true;


// 	// 	for(var i =0; i < circleArray.length-1; i++) {

// 	// 		while(searching) {
// 	// 			var thisPoint = circleArray[i].position;

// 	// 			var myPath = new Path();
// 	// 			myPath.strokeColor = 'white';
// 	// 			myPath.add(randomPoint, thisPoint);

// 	// 			var length1 = (randomPoint - thisPoint).length;
// 	// 			if (length1 > 30) {
// 	// 				searching = false;
// 	// 			}

// 	// 		}

// 	// 	}

// 	// 	makeNewCircle(circleArray, randomPoint, length1);

// 	// 	count = 0;
// 	// }

// }


// // =================================================
// // draw lines
// // =================================================

// var circleArray = [];
// var path = new Path();
// path.strokeColor = Color.random();
// path.strokeWidth = 10.0;
// path.strokeCap = 'round';
// path.strokeJoin = 'round';

// function makeNewCircle(cirArray, cirPosition, radius){
// 	var myCircle = new Path.Circle(cirPosition, 8);
// 	myCircle.fillColor = path.strokeColor;

// 	var myCircle = new Path.Circle(cirPosition, 5);
// 	myCircle.fillColor = 'white';



// 	cirArray.push(myCircle);
// 	path.add(cirPosition);
// }

// function getRandomA(min, max) {
//   return Math.random() * (max - min) + min;
// }

// 	var circlePosition = view.center;//new Point(100,100);
// 	makeNewCircle(circleArray, circlePosition);

// // var squiggleCount = 0;
// var count = 0;

// function getRandomPoint(array) {
// 	// var lastPoint = array[array.length-1].position;
// 	// var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 	// var randomPoint = lastPoint + (randomDirection.normalize() * 50);
// }

// function onFrame(event) {
// 	// count++

// 		var lastPoint = circleArray[circleArray.length-1].position;
	

// 		var searching = true;
// 		var makeCircle = true;

// 		var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 		var randomPoint = lastPoint + (randomDirection.normalize() * 20);


// 		for(var i =0; i < circleArray.length; i++) {

// 			var thisPoint = circleArray[i].position;
// 			var length1 = (randomPoint - thisPoint).length;

// 				if(length1 <= 20) {
// 						makeCircle = false;
// 				}

// 		}

// 		if (makeCircle) {
// 			makeNewCircle(circleArray, randomPoint, 10);
// 		}

// }

// =================================================
// draw lines
// =================================================


// var mainPaths = [];

// var drawDistance = 20;




// function getRandomA(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function makeRandomPointLocal(_point) {
// 	var lastPoint = _point;
// 	var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
// 	var randomPoint = lastPoint + (randomDirection.normalize() * drawDistance);
// 	return randomPoint;
// }

// function makeRandomPointGlobal(_point) {
// 	var randomPoint = new Point(view.bounds.width, view.bounds.height) * Point.random()
// 	return randomPoint;
// }

// function defineStyle(){
// 	var myStyle = {
// 		strokeColor: Color.random(),
// 		strokeWidth: 10.0,
// 		strokeCap: 'round',
// 		strokeJoin: 'round'
// 	};

// 	return myStyle;
// }

// function makeNewSquiggle(_path){

// 	var point1 = makeRandomPointGlobal();
// 	var point2 = makeRandomPointLocal(point1);


// 	rndpoint = point2;

// 	var points = [
// 		point1,
// 		point2
// 	];

// 	var path = new Path(points);

// 	mainPaths.push( new Path(points));
// 	mainPaths[mainPaths.length-1].style = defineStyle();

// 	makeCircle(point1);
// 	makeCircle(point2);
// }

// function makeNewPoint(pathArray, cirPosition){
// 	makeCircle(cirPosition);
// 	pathArray.add(cirPosition);
// }


// function makeCircle(_point){
// 	var circleRadius = 5;
// 	var myCircle = new Path.Circle(_point, circleRadius);
// 	myCircle.fillColor = 'white';
// }

// function getLengthofOne(_point, _path){

// 	var testBool = true;

// 	for(var i =0; i < _path.segments.length; i++) {

// 		var thisPoint = _path.segments[i].point;
// 		var length1 = (_point - thisPoint).length;

// 		if(length1 <= drawDistance) {
// 			testBool = false;
// 		}

// 		if(_point.x <= 0 || _point.x >= view.bounds.width) {
// 			testBool = false;
// 		}
// 		if(_point.y <= 0 || _point.y >= view.bounds.height) {
// 			testBool = false;
// 		}

// 	}

// 	return testBool;

// }



// function getLengthofAll(_path) {

// 		var makeCircle = true;

// 		var randomPoint = makeRandomPointLocal(_path.segments[_path.segments.length-1].point);

// 		for(var j =0; j<mainPaths.length; j ++){
// 			makeCircle = getLengthofOne(randomPoint, mainPaths[j]);
// 		}

// 		if (makeCircle) {
// 			makeNewPoint(_path, randomPoint);
// 		}

// }

// makeNewSquiggle();

// function onFrame(event) {

// 		getLengthofAll(mainPaths[mainPaths.length-1]);

// 		if(mainPaths[mainPaths.length-1].segments.length > drawDistance){
// 			makeNewSquiggle(mainPaths);
// 		}

// }

// function onKeyDown(event) {
// 	makeNewSquiggle();
// }

// =================================================
// draw lines
// =================================================


var mainPaths = [];

var drawDistance = 30;
var lineLength = 20;

function getRandomA(min, max) {
  return Math.random() * (max - min) + min;
}

function makeRandomPointLocal(_point) {
	var lastPoint = _point;
	var randomDirection = new Point(getRandomA(-1, 1),getRandomA(-1, 1));
	var randomPoint = lastPoint + (randomDirection.normalize() * drawDistance);
	return randomPoint;
}

function makeRandomPointGlobal(_point) {

	var testCount = 0;

	while(testCount< 1000){
		var randomPoint = new Point(view.bounds.width, view.bounds.height) * Point.random();
		var legalPoint = isPointLegal(randomPoint);

		if(legalPoint){
			testCount = 1000;
			// console.log(legalPoint);
		}

		// console.log(legalPoint);
		testCount ++;
	}

	return randomPoint;
}

function defineStyle(){

	var randomHue = getRandomA(0, 100);
	var randomSat = getRandomA(0.5, 1.0);
	var randomBrightness = getRandomA(0.4, 1.0);

	var myStyle = {
		// strokeColor: { hue: randomHue, saturation: randomSat, brightness: randomBrightness },
		strokeColor: Color.random(),
		strokeWidth: 10.0,
		strokeCap: 'round',
		strokeJoin: 'round'
	};
	return myStyle;
}

function isPointLegal(_point) {
	var legalPoint = true;
	var returnBool = true;

	for(var j =0; j<mainPaths.length; j ++){
			legalPoint = getLengthofOne(_point, mainPaths[j], legalPoint);
		}

		if(legalPoint){
			returnBool = true;
		} else {
			returnBool = false;
		}

	return returnBool;
}

function makeNewSquiggle(_path){

	var point1 = makeRandomPointGlobal();
	var point2 = point1;//makeRandomPointLocal(point1);


		var testCount = 0;
		var legalPoint2 = false;

		while(testCount< 1000){
			point2 = makeRandomPointLocal(point1);
			var legalPoint = isPointLegal(point2);

			if(legalPoint){
				testCount = 1000;
				legalPoint2 = true;
				// console.log(legalPoint);
			}

			// console.log(legalPoint);
			testCount ++;
		}

		if(legalPoint2){
			console.log("legal");
		} else {
			console.log("illegal");
		}



	rndpoint = point2;

	var points = [
		point1,
		point2
	];

	var path = new Path(points);

	mainPaths.push( new Path(points));
	mainPaths[mainPaths.length-1].style = defineStyle();

	makeCircle(point1);
	makeCircle(point2);
}

function makeNewPoint(pathArray, cirPosition){
	makeCircle(cirPosition);
	pathArray.add(cirPosition);
}


function makeCircle(_point){
	var circleRadius = 4;
	var myCircle = new Path.Circle(_point, circleRadius);
	myCircle.fillColor = 'white';

	var myCircle = new Path.Circle(_point, circleRadius*2);
	myCircle.fillColor = mainPaths[mainPaths.length-1].strokeColor;
	// myCircle.strokeWidth = 3.0;
}

function getLengthofOne(_point, _path, _testBool){

	var testBool = _testBool;

	for(var i =0; i < _path.segments.length; i++) {

		var thisPoint = _path.segments[i].point;
		var length1 = (_point - thisPoint).length;

		if(length1 <= drawDistance) {
			testBool = false;
		}

		if(_point.x <= 0 || _point.x >= view.bounds.width) {
			testBool = false;
		}
		if(_point.y <= 0 || _point.y >= view.bounds.height) {
			testBool = false;
		}
	}

	return testBool;

}



function getLengthofAll(_path) {

		var testCount = 0;
		var makePoint = false;

		while(testCount< 1000){
			var randomPoint = makeRandomPointLocal(_path.segments[_path.segments.length-1].point);
			var legalPoint = isPointLegal(randomPoint);

			if(legalPoint){
				testCount = 1000;
				makePoint = true;
				// console.log(legalPoint);
			}

			// makePoint = false;
			// console.log(legalPoint);
			testCount ++;
		}

		if(makePoint){
			makeNewPoint(_path, randomPoint);
		} else {
			makeNewSquiggle();
		}

		// var makeCircle = true;

		// var randomPoint = makeRandomPointLocal(_path.segments[_path.segments.length-1].point);

		// for(var j =0; j<mainPaths.length; j ++){
		// 	makeCircle = getLengthofOne(randomPoint, mainPaths[j], makeCircle);
		// }

		// if (makeCircle) {
		// 	makeNewPoint(_path, randomPoint);
		// }
}

makeNewSquiggle();

function onFrame(event) {

		getLengthofAll(mainPaths[mainPaths.length-1]);

		if(mainPaths[mainPaths.length-1].segments.length > lineLength){
			makeNewSquiggle(mainPaths);
		}

}

function onKeyDown(event) {
	makeNewSquiggle();
}
