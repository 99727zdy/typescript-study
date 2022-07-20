// 枚举类型 Enum
enum Color{
    red,
    green,
    blue
}
let color=Color.blue
console.log(color)//2

enum Color2{
    red=5,
    green=10,
    blue=1
}

enum Color3{
    red="red",
    green="green",
    blue=1
}

let color3=Color3.green
console.log(color3)