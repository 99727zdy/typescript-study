// class类
//接口定义 
interface IPoint{
    x:number;
    y:number;
    drawPoint:()=>void;
    getDistance:(p:IPoint)=>number;
}

// 根据接口定义实现类
class myPoint implements IPoint{
    x:number;
    y:number;
    // 构造函数
    constructor(x?:number,y:number=2){//初始化参数且可选赋不赋值
        this.x=x;
        this.y=y
    }
    drawPoint=()=>{
        console.log("x:",this.x,"y:",this.y)
    };
    getDistance=(p:IPoint)=>{
        return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2)
    };
}

const point=new myPoint(1) //对象object,实例instance
// point.x=2;
// point.y=3;
// 有更好的方法来初始化坐标点 使用构造函数
point.drawPoint()//x: 1 y: 2
// 注意 js中的构造函数不可以重载 一个类只有一个constructor



// 关键词public private protected （访问修饰符）
// 使用访问修饰符来修饰构造函数的参数时，可以自动生成模板代码
class myPoint2 implements IPoint{
    // x:number;//可自动帮忙生成成员变量
    // y:number;
    constructor(public x:number,public y:number=2){
        // this.x=x;//自动赋值
        // this.y=y
    }
    drawPoint=()=>{
        console.log("x:",this.x,"y:",this.y)
    };
    getDistance=(p:IPoint)=>{
        console.log(Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2))
        return Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2)
    };
}
const point2=new myPoint2(3)
point2.drawPoint()//x: 3 y: 2
// point2.getDistance()???