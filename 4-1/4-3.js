// 根据接口定义实现类
var myPoint = /** @class */ (function () {
    // 构造函数
    function myPoint(x, y) {
        if (y === void 0) { y = 2; }
        var _this = this;
        this.drawPoint = function () {
            console.log("x:", _this.x, "y:", _this.y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return myPoint;
}());
var point = new myPoint(1); //对象object,实例instance
// point.x=2;
// point.y=3;
// 有更好的方法来初始化坐标点 使用构造函数
point.drawPoint(); //x: 1 y: 2
// 注意 js中的构造函数不可以重载 一个类只有一个constructor
// 关键词public private protected （访问修饰符）
// 使用访问修饰符来修饰构造函数的参数时，可以自动生成模板代码
var myPoint2 = /** @class */ (function () {
    // x:number;//可自动帮忙生成成员变量
    // y:number;
    function myPoint2(x, y) {
        if (y === void 0) { y = 2; }
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log("x:", _this.x, "y:", _this.y);
        };
        this.getDistance = function (p) {
            console.log(Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2));
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        // this.x=x;//自动赋值
        // this.y=y
    }
    return myPoint2;
}());
var point2 = new myPoint2(3);
point2.drawPoint(); //x: 3 y: 2
// point2.getDistance()???
