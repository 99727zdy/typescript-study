// 数组（Array）和元组（Tupple）

let list1:number[]=[1,2,3]

// 使用泛型（强类型语言一般会使用泛型）
let list2:Array<number>=[1,2,3]
let list3=[1,2,3] //也行

let list4=[1,"ddd"]//初始化list4只能存放数字和字符串（数量和位置无所谓）
let list5:any[]=[1,"dss",true]//可以存放任何




// 元组类型
// 固定长度固定类型的数组
let person1:[number,string]=[1,"莱布尼茨"]
// person1=["hh",11]//报错
// person1=[1,"莱布尼茨","hh"]//报错（长度不符）
// person1[2]=3//报错


// 注意：元祖类型还有bug!
person1.push(3)
console.log(person1)//[ 1, '莱布尼茨', 3 ] 长度本来不应该能改变

// 声明一个元祖的时候一定要指明类型

