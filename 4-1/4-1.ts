// 面向对象
// 对象Object
const person={
    firstName:"莱布尼茨",
    lastName:"泰勒",
    age:18
}
console.log(person)
// console.log(person.name)//报错 没有name属性 但是在JS里面是不会报错的



// 改成any类型就不会报错了
const person2:any={
    firstName:"莱布尼茨",
    lastName:"泰勒",
    age:18
}
console.log(person)
console.log(person2.name)//undefined