/**
 * Created by lingxiaoyuan on 2017/0531
 */

// 定义Circle类
class Circle {
	constructor(x, y) { // 类的默认方法，通过new方法生成实例时自动调用，必须，如果没有定义，会被默认添加一个空的constructor
		this.x = x;
		this.y = y;
		this.r = Math.random() * 14;
		this._mx = Math.random(); // 移动的距离
		this._my = Math.random();
	}

	drawCircle(ctx) {
		ctx.beginPath();
		// this.r = 10;
		ctx.arc(this.x, this.y, this.r, 0, 360);
		ctx.closePath();
		ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
		ctx.fill();
	}

	drawLine(ctx, _circle) {
		let dx = this.x - _circle.x;
		let dy = this.y - _circle.y;
		let d = Math.sqrt(dx * dx + dy * dy);

		if (d < 240 && d > 30) { // 设置粒子之间连线的最大距离，即超过这个范围的粒子之间不需要连线
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(_circle.x, _circle.y);
			ctx.closePath();
			ctx.strokeStyle = 'rgba(204, 204, 204, 0.2)';
			ctx.stroke();
		}
		
	}

	move(w, h) {
		// this._mx = (this.x > 0 && this.x < w) ? this._mx : (-this._mx);
		// this._my = (this.y > 0 && this.y < h) ? this._my : (-this._my);
		this.x += this._mx / 2;
		this.y += this._my / 2;
	}

}

class currentCircle extends Circle {
	
}

window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.msRequestAnimationFrame

})();

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];

function draw () {
	ctx.clearRect(0, 0, w, h);
	for (var i = 0 ; i < circles.length; i ++) {
		circles[i].move(w, h)
		circles[i].drawCircle(ctx);
		for (var j = i +1; j < circles.length; j ++) {
			circles[i].drawLine(ctx, circles[j])
		}
	}

	requestAnimationFrame(draw);
}

function init (num) {

	for (var i = 0 ; i < num; i++) {
		var circle = new Circle(Math.random() * w, Math.random() * h);
		circles.push(circle);
	}
	draw();
}
init(60);
