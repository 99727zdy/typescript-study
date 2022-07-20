// 联合（Union）与文献（Literal）类型

// 联合类型(Union) 指能同时支持多个类型
let union:string|number
union=2
union="hh"

let union2:number|string|boolean|string[]

function merge(
    n1:number|string,
    n2:number|string
    ,resultType:"as-number"|"as-string"
    )
    {
    if(resultType==="as-string"){
        return n1.toString()+n2.toString()
    }
    // +号不能支持联合类型
    if(typeof n1==="string"||typeof n2==="string"){
        return n1.toString()+n2.toString()
    }else{
        return n1+n2
    }
}

let mergeNumber=merge(1,2,"as-number")
let mergeNumber2=merge(1,2,"as-string")
let mergeString=merge("hello","world","as-string")//3 12 helloworld


console.log(mergeNumber,mergeNumber2,mergeString)
// 也可以写成几个确定值的联合


// 字面量类型(literal) 明确了取值数据
let union3:0|1|2//不仅确定了取值类型，还确定了取值范围
union3=1
// union3=4//报错

let literal:1|"2"|true|[1,2,3]



