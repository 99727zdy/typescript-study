// 函数类型
var log = function (message) {
    console.log(message);
};
// 规定类型
var log2 = function (message) { return console.log(message); };
log2("hh");
// 报错
// log2(1)
// log2(true)
// 必须写上两个参数，并且类型对应
var log3 = function (message, code) {
    console.log(message, code);
};
log3("hh", 1);
// 某一个参数的可选性
var log4 = function (message, code) {
    console.log(message, code);
};
// 第二个参数可选可不选，默认为undefined
log4("hh"); //hh undefined
// 设置默认值
var log5 = function (message, code) {
    if (code === void 0) { code = 0; }
    console.log(message, code);
};
// 第二个参数可选可不选，默认为undefined
log5("hh"); //hh 0
