// void undefined never
// void
function printResult() {
    console.log("hh");
}
console.log("hello", printResult()); //hello undefined
// undefined 指变量没有赋值，没有初始化
// void 指变量本身就不存在
function printResult2() {
    console.log("hhh");
    return;
}
