/*
* @Author: 仇少凯
* @Date:   2018-04-23 10:43:15
* @Last Modified by:   仇少凯
* @Last Modified time: 2018-04-23 11:18:04
*/
class StarrySky{
    paint(ctx, paintSize, properties){
        let xMax = paintSize.width;
        let yMax = paintSize.height;
        // 黑色夜空
        ctx.fillRect(0,0,xMax,yMax);
        // 星星数量
        let hmTimes = xMax + yMax;
        for( var i=0; i<=hmTimes; i++ ){
            // 星星坐标
            let x = Math.floor((Math.random() * xMax ) + 1);
            let y = Math.floor((Math.random() * yMax ) + 1);
            // 星星的大小
            let size = Math.floor((Math.random() * 2) + 1);
            // 星星的亮暗
            let opacityOne = Math.floor((Math.random() * 9) + 1);
            let opacityTwo = Math.floor((Math.random() * 9) + 1);
            let hue = Math.floor((Math.random() * 360) + 1);
            ctx.fillStyle = `hsla($(hue),30%,80%,.$(opacityOne + opacityTwo))`
        }
    }
}
// 注册这个属性
registerPaint('starry-sky',StarrySky);