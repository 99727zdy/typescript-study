// 数组（Array）和元组（Tupple）
var list1 = [1, 2, 3];
// 使用泛型（强类型语言一般会使用泛型）
var list2 = [1, 2, 3];
var list3 = [1, 2, 3]; //也行
var list4 = [1, "ddd"]; //初始化list4只能存放数字和字符串
var list5 = [1, "dss", true]; //可以存放任何
// 元组类型
// 固定长度固定类型的数组
var person1 = [1, "莱布尼茨"];
// person1=["hh",11]//报错
// person1=[1,"莱布尼茨","hh"]//报错（长度不符）
// 注意：有bug
// person1[2]=3//报错
person1.push(3);
console.log(person1);
