/**
 * 
 * 用来画心形图案的函数
 * 
 */

r = 8;
randianDecrement = 0; //弧度增量
i = 0;
intervalId = 0;
randian = Math.PI;

intervalTime = 10;
function drawHeart(){
	ctx.strokeStyle = "red";   //设置笔触的颜色
	ctx.lineWidth = 1;	//设置线的宽度

	//randian = 0; //初始弧度为0  取值范围为[0,2π];
	randianDecrement = Math.PI / 360 * 2;

	ctx.moveTo(getX(randian), getY(randian)); //移动画笔到初始位置
	// alert(getX(randian));

	intervalId = setInterval("printHeart()", intervalTime);

}

function printHeart(){
	randian += randianDecrement;
	ctx.lineTo(getX(randian), getY(randian));
	i++
	ctx.stroke();//划线

	if(i > 360){
		clearInterval(intervalId);
	}
}

function getX(t) {//由弧度得到 X 坐标  
    return 200 + r * (16 * Math.pow(Math.sin(t), 3));  
}  

function getY(t) {//由弧度得到 Y 坐标  
    return 200 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));  
}