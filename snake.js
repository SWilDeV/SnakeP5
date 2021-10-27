function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	// this.speed = 0.05;

	this.dir = function (x, y) {
		this.xspeed = x;
		this.yspeed = y;
	};

	this.update = function () {
		this.x = this.x + this.xspeed * unit;
		this.y = this.y + this.yspeed * unit;

		this.x = constrain(this.x, 0, width - unit);
		this.y = constrain(this.y, 0, height - unit);
	};
	this.show = function () {
		fill(255);
		rect(this.x, this.y, unit, unit);
	};
}
