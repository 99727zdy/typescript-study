// Generics 泛型
// 类型<类型> = 泛型
let list2:Array<number>=[1,2,3,4]

//T表示动态类型 泛型 用T动态的代替Array中的类型
let lastInArray=<T>(arr:Array<T>)=>{
    return arr[arr.length-1]
}

const l1=lastInArray([1,2,3,4])
const l2=lastInArray<string>(["a","b","c"])
const l3=lastInArray<string|number>([1,"a","b"])//联合类型

let makeTuole=<T,Y=number>(x:T,y:Y)=>[x,y] //设置第二个泛型默认类型为number
const v1=makeTuole(1,"one")
const v2=makeTuole(true,1)
const v3=makeTuole<boolean>(true,1)//显式地定义泛型类型,(第二个泛型有默认值)


console.log(l1,l2)