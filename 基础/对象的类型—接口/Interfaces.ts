/*
* 在typescript中，使用接口（interface）来定义定向的类型*/

interface Person{
    name:string;
    age:number;
}
let tom:Person = {
    name:'Tom',
    age:25
}

// 可选属性/*
// 可选属性的含义是该属性可以不存在，
// 这时候仍然不允许添加未定义的属性
// */
interface Person1 {
    name:string;
    age?:number;
}
let tom1 : Person1 = {
    name:'tom'
}
console.log(tom1)

// 任意属性
/*
* 使用[propName:string] 定义了任意属性读取string类型的值
* */
interface Person2{
    name:string;
    age?:number;
    [propName:string]:string | number | undefined;
}
let tom3:Person2 = {
    name:'tom',
    gender:'male',
}
console.log(tom3)

/*
* 只读属性 readonly定义制度属性
* 注意：只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
* */
interface Person4 {
    readonly id:number;
    name:string;
    age?:number;
    [key:string]:any;
}
let tom4:Person4 = {
    id:857,
    name:'Tom',
    gender:'male'
}
// tom4.id = 9527  “id” is readonly
// 没有给readonly赋值也是会出现错误的