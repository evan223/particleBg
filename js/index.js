var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(0,0,80,100);



class Circle {
	constructor (x, y) { // 创建圆对象
		this.x = x;
		this.y = y;
		this.r = Math.random()*10;
		this._mx = Math.random();
		this._my = Math.random();
	},

}