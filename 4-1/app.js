"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Module模块
var point_1 = require("./point");
var point4 = new point_1.myPoint4(4, 5);
// get set 懒人包
point4.X = 20;
console.log(point4.X);
