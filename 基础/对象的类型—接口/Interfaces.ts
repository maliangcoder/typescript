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
interface Person2{
    name:string;
    age?:number;
    [propName:string]:any;
}
