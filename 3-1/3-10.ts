// 函数类型
let log=function(message){
    console.log(message)
}

// 规定类型
let log2=(message:string)=>console.log(message)
log2("hh")
// 报错
// log2(1)
// log2(true)


// 必须写上两个参数，并且类型对应
let log3=(message:string,code:number)=>{
    console.log(message,code)
}
log3("hh",1)


// 某一个参数的可选性
let log4=(message:string,code?:number)=>{
    console.log(message,code)
}
// 第二个参数可选可不选，默认为undefined
log4("hh")//hh undefined


// 设置默认值
let log5=(message:string,code:number=0)=>{
    console.log(message,code)
}
// 第二个参数可选可不选，默认为undefined
log5("hh")//hh 0

// 注意，不管是可选参数还是默认参数都必须在参数列表的末尾