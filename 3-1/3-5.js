// 联合（Union）与文献（Literal）类型
// 联合类型(Union) 指能同时支持多个类型
var union;
union = 2;
union = "hh";
var union2;
function merge(n1, n2, resultType) {
    if (resultType === "as-string") {
        return n1.toString() + n2.toString();
    }
    // +号不能支持联合类型
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
var mergeNumber = merge(1, 2, "as-number");
var mergeNumber2 = merge(1, 2, "as-string");
var mergeString = merge("hello", "world", "as-string");
console.log(mergeNumber, mergeNumber2, mergeString);
// 也可以写成几个确定值的联合
// 字面量类型(literal) 明确了取值数据
var union3; //不仅确定了取值类型，还确定了取值范围
union3 = 1;
// union3=4//报错
var literal;
