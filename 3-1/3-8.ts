// void undefined never

// void 指变量本身就不存在
function printResult():void{
    console.log("hh")
}

console.log("hello",printResult())//hello undefined


// undefined 指变量没有赋值，没有初始化
function printResult2():undefined{
    console.log("hhh")//不打印
    return
}


// never 一个函数永远执行不完
function throwError(message:string,errorCode:number):never{
    throw {
        message,
        errorCode
    }
}// 这个函数永远都不能来到第24行（这一行）
throwError("not found",404)

function whileLoop():never{
    while(true){
        console.log("hhhh")
    }
}