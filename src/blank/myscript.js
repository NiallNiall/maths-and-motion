var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 


function createTriangle(_triangleCentre, _radius){

	var Radius = _radius;
	var c = _triangleCentre;

	var points = [
		new Point(c.x + Radius, c.y +Radius),
		new Point(c.x - Radius, c.y +Radius),
		new Point(c.x, c.y -Radius)
	];

	var path = new Path(points);

	var triangleColor = colours[Math.floor(Math.random()*colours.length)];
	path.fillColor = triangleColor;

}

// createTriangle(view.center, 20);

var triDistance = 50;

for(var i =0; i < view.bounds.width; i +=triDistance ){
	for(var j =0; j < view.bounds.height; j +=triDistance ){
		
		var triangleCenter = new Point(i, j);
		
		var triRadius = triDistance /2;
		createTriangle(triangleCenter, triRadius);

		var newTriangleCenter = new Point(triangleCenter.x + triRadius, triangleCenter.y)
		createTriangle(newTriangleCenter, -triRadius);
	}
} 