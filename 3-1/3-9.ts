// 类型适配（类型断言）Type Assertions

let message:any
message="abc"//赋值为字符串
message.endsWith("c")//也不会改变初始化默认的类型,不能使用string的方法


// 第一种方法
let ddd=(<string>message).length
// 第二种方法
let ddd2=(message as string).length