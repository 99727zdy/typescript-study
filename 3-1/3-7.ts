// any和unknown

// any 支持并且兼容所有类型
// 使用any是为了加快开发过程，避免没必要的类型定义
// 为啥要有any  最大程度的保持语言灵活性的同时，
// 还能带来强类型语言才能形成的高可维护性
let randomValue:any=666;
randomValue=true
randomValue="hh"
randomValue={}
randomValue()//运行的时候会报错randomValue is not a function
randomValue.toUpperCase()

// unknown
// 不保证类型，但是能保证类型安全
let randomValue2:unknown=666;
randomValue2=true
randomValue2="hh"
randomValue2={}

if(typeof randomValue2==='function'){
    randomValue2()
}
if(typeof randomValue2==='string'){
    randomValue2.toUpperCase()
}






