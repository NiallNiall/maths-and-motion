// // =================================================
// // draw lines
// // =================================================


var flourish = new Symbol();
var start = false;

project.importSVG('../..//img/leaf.svg', function(item) {
                        console.log(item);
                        item.scale(0.15);
                        item.rotate(140);
                        item.fillColor = 'pink';
                        flourish = new Symbol(item);
                        makeNewSquiggle();
                        start = true;
                    });


// function onMouseMove(event) {
// 	var flour = flourish.place(event.point);
// 	flour.rotate(45);
// }


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
		strokeColor: 'brown',
		strokeWidth: 30.0,
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


	var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    var angle = ((Math.atan2(dx, dy) * 180) / Math.PI);


	makeFlourish(point1, angle);
	makeFlourish(point2, angle);
}

function makeNewPoint(pathArray, cirPosition){
	// makeFlourish(cirPosition, 45);
	pathArray.add(cirPosition);
	// flourish.place(cirPosition);
}

function makeFlourish(_point, _rotation){
	var flour = flourish.place(_point);
	flour.rotate(_rotation);
}

function makeCircle(_point){
	// var flour = flourish.place(_point)
	// var circleRadius = 4;
	// var myCircle = new Path.Circle(_point, circleRadius);
	// myCircle.fillColor = 'white';

	// var myCircle = new Path.Circle(_point, circleRadius*2);
	// myCircle.fillColor = mainPaths[mainPaths.length-1].strokeColor;
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
			}

			testCount ++;
		}

		if(makePoint){
			makeNewPoint(_path, randomPoint);

			var dx = _path.segments[_path.segments.length-1].point.x - _path.segments[_path.segments.length-2].point.x;
		    var dy = _path.segments[_path.segments.length-1].point.y - _path.segments[_path.segments.length-2].point.y;
		    console.log(dx + ' ' + dy)
		    var angle = ((Math.atan2(dx, dy) * 180) / Math.PI);
			makeFlourish(randomPoint, angle);
		} else {
			makeNewSquiggle();
		}
}

// makeNewSquiggle();

function onFrame(event) {

		if (start){
			getLengthofAll(mainPaths[mainPaths.length-1]);

			if(mainPaths[mainPaths.length-1].segments.length > lineLength){
				makeNewSquiggle(mainPaths);
			}
		}
}

function onKeyDown(event) {
	// var flour = flourish.place(view.center);
	makeNewSquiggle();
}