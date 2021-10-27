let s;
const unit = 10;
let food;
function setup() {
	createCanvas(400, 400);
	frameRate(10);
	s = new Snake();
	food = createVector(random(width), random(height));
}

function draw() {
	background(106, 272, 204);
	s.update();
	s.show();

	fill(255, 0, 100);
	rect(food.x, food.y, unit, unit);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	}
}
