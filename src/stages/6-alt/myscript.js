// // =================================================
// // Draw make random triangles
// // =================================================

// var triArray = [];


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
// 		_trianglearray[_trianglearray.length-1].fillColor = 'white';
// }

// // var triDistance = 50;

// var numTriangles = 10;

// for(var i = 0; i < numTriangles; i++) {
// 		var triangleCenter = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		createTriangle(triArray, triangleCenter, 25);
// }

// console.log(triArray);



// function onFrame(event) {

// 	// for(var i = 0; i < triArray.length; i ++) {

// 	// 	if (triArray[i].position.y > view.bounds.height){
// 	// 		triArray[i].position.y = view.bounds.height;
// 	// 	} else {
// 	// 		triArray[i].position.y += 10;
// 	// 	}


// 	// }

// }

// // =================================================
// // Triangles drop down
// // =================================================

// var triArray = [];
// var triDirectionArray = []


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
// 		_trianglearray[_trianglearray.length-1].fillColor = Color.random();
// }

// // var triDistance = 50;

// var numTriangles = 10;

// for(var i = 0; i < numTriangles; i++) {
// 		var triangleCenter = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		createTriangle(triArray, triangleCenter, 25);
// 		triDirectionArray.push(Math.random() * 10);
// }

// console.log(triArray);



// function onFrame(event) {

// 	for(var i = 0; i < triArray.length; i ++) {

// 		if (triArray[i].position.y >= view.bounds.height){
// 			// triArray[i].position.y = view.bounds.height;
// 			triDirectionArray[i] *= -1;
// 			// console.log(triDirectionArray);
// 		} else {
// 			// triArray[i].position.y += triDirectionArray[i];
// 		}
// 			triArray[i].position.y += triDirectionArray[i];


// 	}

// }

// =================================================
// Triangles drop down then bounce
// =================================================

// var triArray = [];
// var triDirectionArray = []


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
// 		_trianglearray[_trianglearray.length-1].fillColor = Color.random();
// }

// // var triDistance = 50;

// var numTriangles = 10;

// for(var i = 0; i < numTriangles; i++) {
// 		var triangleCenter = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		createTriangle(triArray, triangleCenter, 25);
// 		triDirectionArray.push(Math.random() * 10);
// }

// console.log(triArray);



// function onFrame(event) {

// 	for(var i = 0; i < triArray.length; i ++) {

// 		if (triArray[i].position.y >= view.bounds.height || triArray[i].position.y <= 0){
// 			// triArray[i].position.y = view.bounds.height;
// 			triDirectionArray[i] *= -1;
// 			// console.log(triDirectionArray);
// 		} else {
// 			// triArray[i].position.y += triDirectionArray[i];
// 		}
// 			triArray[i].position.y += triDirectionArray[i];


// 	}

// }

// // =================================================
// // Triangles drop down then bounce
// // =================================================

// var triArray = [];
// var triDirectionArray = []


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
// 		_trianglearray[_trianglearray.length-1].fillColor = Color.random();
// }

// // var triDistance = 50;

// var numTriangles = 10;

// for(var i = 0; i < numTriangles; i++) {
// 		var triangleCenter = new Point(view.bounds.width, view.bounds.height) * Point.random();
// 		createTriangle(triArray, triangleCenter, 25);
// 		triDirectionArray.push(new Point(Math.random() * 10,Math.random() * 10));
// }

// console.log(triArray);



// function onFrame(event) {

// 	for(var i = 0; i < triArray.length; i ++) {

// 		if (triArray[i].position.y >= view.bounds.height || triArray[i].position.y <= 0){
// 			// triArray[i].position.y = view.bounds.height;
// 			triDirectionArray[i].y *= -1;
// 			// console.log(triDirectionArray);
// 		}
// 			triArray[i].position.y += triDirectionArray[i].y;

// 		if (triArray[i].position.x >= view.bounds.width || triArray[i].position.x <= 0){
// 			// triArray[i].position.x = view.bounds.height;
// 			triDirectionArray[i].x *= -1;
// 			// console.log(triDirectionArray);
// 		}
// 			triArray[i].position.x += triDirectionArray[i].x;



// 	}

// }


// =================================================
// Triangles drop down then bounce
// =================================================

var triArray = [];
var triDirectionArray = []


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
		_trianglearray[_trianglearray.length-1].fillColor = Color.random();
}

// var triDistance = 50;

var numTriangles = 4;

for(var i = 0; i < numTriangles; i++) {
		var triangleCenter = new Point(view.bounds.width, view.bounds.height) * Point.random();
		createTriangle(triArray, triangleCenter, 25);
		triDirectionArray.push(new Point(Math.random() * 4 ,Math.random() * 4));
}

console.log(triArray);



function onFrame(event) {

	for(var i = 0; i < triArray.length; i ++) {

		if (triArray[i].position.y >= view.bounds.height || triArray[i].position.y <= 0){
			// triArray[i].position.y = view.bounds.height;
			triDirectionArray[i].y *= -1;
			// console.log(triDirectionArray);
		}
			triArray[i].position.y += triDirectionArray[i].y;

		if (triArray[i].position.x >= view.bounds.width || triArray[i].position.x <= 0){
			// triArray[i].position.x = view.bounds.height;
			triDirectionArray[i].x *= -1;
			// console.log(triDirectionArray);
		}
			triArray[i].position.x += triDirectionArray[i].x;

			var rotat = triDirectionArray[i].normalize();
			// triArray[i].matrix.rotation = 45;
			// console.log(triArray[i].rotation);
			// console.log(rotat);
			var p1 = triArray[i].position;

		for(var j = 0; j < triArray.length; j ++) {
			if(i != j) {
				var p2 = triArray[j].position;
				var d1 = p1 - p2;
				var l1 = d1.length;
				if(l1 < 10 ) {
					// triArray[i].fillColor = 'red';
					triDirectionArray[i] *= -1;
				}	
			}
		}

	}

}