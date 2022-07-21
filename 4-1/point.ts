interface IPoint3{
    drawPoint:()=>void;
    getDistance:(p:IPoint3)=>number;
    X:number
    Y:number
}

export class myPoint4 implements IPoint3{
    constructor(private _x:number,private _y:number=2){}
    drawPoint=()=>{
        console.log("x:",this._x,"y:",this._y)
    };
    getDistance=(p:IPoint3)=>{
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