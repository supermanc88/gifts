/**
 * 
 * 用来画心形图案的函数
 * 
 */

r = 20;
randianDecrement = 0; //弧度增量
i = 0;
intervalId = 0;
randian = Math.PI;

intervalTime = 10;
function drawHeart(){
	ctx.strokeStyle = "red";   //设置笔触的颜色
	ctx.lineWidth = 1;	//设置线的宽度

	//randian = 0; //初始弧度为0  取值范围为[0,2π];
	randianDecrement = Math.PI / 180 * 2;

	ctx.moveTo(getX(randian), getY(randian)); //移动画笔到初始位置
	// alert(getX(randian));

	intervalId = setInterval("printHeart()", intervalTime);

}

function printHeart(){
	randian += randianDecrement;
	ctx.lineTo(getX(randian), getY(randian));

	garden.createRandomBloom(getX(randian), getY(randian));

	i++
	ctx.stroke();//划线

	if(i > 180){
		clearInterval(intervalId);
	}
}

function getX(t) {//由弧度得到 X 坐标  
    return WINDOW_WIDTH / 2 + r * (16 * Math.pow(Math.sin(t), 3));  
}  

function getY(t) {//由弧度得到 Y 坐标  
    return WINDOW_HEIGHT / 2 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));  
}



//玫瑰花线数学公式
//x=a* sin(nθ)* cos(θ), y=a*sin(nθ)* sin(θ)
var beishu = 50;
var a = Math.PI;
var n = Math.E; 
var angle = -2*Math.PI;
var angleDecrement = 0; //角度增量
var zhouqi = Math.PI*2;

var roseIntervalId = 0;
var dd = 0;

function drawRose(){
	ctx.strokeStyle = "red";   //设置笔触的颜色
	ctx.lineWidth = 1;	//设置线的宽度

	angleDecrement = zhouqi / 360;

	var point = getRosePoint(angle);

	ctx.moveTo(point[0], point[1]);

	roseIntervalId = setInterval("printRose()", intervalTime);
}

function printRose(){

	angle += angleDecrement;

	var point = getRosePoint(angle);
	ctx.lineTo(point[0], point[1]);
	ctx.stroke();

	dd ++;

	if(dd > 360){
		clearInterval(roseIntervalId);
	}

}

function getRosePoint(t){
	var x = WINDOW_WIDTH / 2 + beishu * a * Math.sin(n * t) * Math.cos(t);
	var y = WINDOW_HEIGHT / 2 + beishu * a * Math.sin(n * t) * Math.sin(t);
	return new Array(x, y); 
}