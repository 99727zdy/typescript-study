// Access Modifier 访问修饰符
interface IPoint2{
    drawPoint:()=>void;
    getDistance:(p:IPoint2)=>number;
    X:number
    Y:number
}

class myPoint3 implements IPoint2{
    constructor(private _x:number,private _y:number=2){}
    drawPoint=()=>{
        console.log("x:",this._x,"y:",this._y)
    };
    getDistance=(p:IPoint2)=>{
        return Math.pow(p.X-this._x,2)+Math.pow(p.Y-this._y,2)
    };
    set X(value:number){
        if(value<0){
            throw new Error("value不能小于0")
        }
        this._x=value
    }
    set Y(value:number){
        if(value<0){
            throw new Error("value不能小于0")
        }
        this._y=value
    }
    get X(){
        return this._x
    }
    get Y(){
        return this._y
    }
}
const point3=new myPoint3(4,5)

// public
// point3.x=30//外界可修改 这样子有点危险
// point3.y=5

// private
// point3.setX(10)
// console.log(point3.getX()) 
// point3.drawPoint()//x: 10 y: 5

// get set 懒人包
point3.X=20
console.log(point3.X)





