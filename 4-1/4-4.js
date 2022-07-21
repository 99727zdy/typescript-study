var myPoint3 = /** @class */ (function () {
    function myPoint3(x, y) {
        if (y === void 0) { y = 2; }
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log("x:", _this.x, "y:", _this.y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.Y - _this.y, 2);
        };
    }
    Object.defineProperty(myPoint3.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(myPoint3.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return myPoint3;
}());
var point3 = new myPoint3(4, 5);
// public
// point3.x=30//外界可修改 这样子有点危险
// point3.y=5
// private
// point3.setX(10)
// console.log(point3.getX()) 
// point3.drawPoint()//x: 10 y: 5
// get set 懒人包
point3.X = 20;
console.log(point3.X);
