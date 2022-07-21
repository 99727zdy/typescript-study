"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPoint4 = void 0;
var myPoint4 = /** @class */ (function () {
    function myPoint4(_x, _y) {
        if (_y === void 0) { _y = 2; }
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.drawPoint = function () {
            console.log("x:", _this._x, "y:", _this._y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.X - _this._x, 2) + Math.pow(p.Y - _this._y, 2);
        };
    }
    Object.defineProperty(myPoint4.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(myPoint4.prototype, "Y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return myPoint4;
}());
exports.myPoint4 = myPoint4;
