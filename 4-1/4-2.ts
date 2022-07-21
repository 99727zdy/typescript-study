// interface与class
// 描绘坐标函数
let drawPoint=(x,y)=>{
    console.log({x,y})
}

// x y应该作为一个整体被传入函数 使用面向对象重构
let dranPoint2=(point:Point)=>{
    console.log({x:point.x,y:point.y})
}

// 创建接口
interface Point{
    x:number;
    y:number;
}

dranPoint2({x:100,y:50})

//报错 不符合接口定义的类型
// dranPoint2({x:"hh",y:"ee"})
//报错 不符合接口定义的参数名和类型
// dranPoint2({wether:"炎热",temperature:"40℃"})



// 高内聚 低耦合
// 功能相关的事物放在同一个集合中 形成一个模块 这是高内聚
// 这些模块是互相独立的 不同模块直接应该保持低耦合的状态

let getDistances=(a:Point,b:Point)=>{
    // ...
}

// dranPoint2  getDistances都跟坐标对象Point有关，所以能不能打包到一个集合里？
