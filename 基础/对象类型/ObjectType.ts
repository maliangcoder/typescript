/*
*  对象类型
* */

let a: Object = {};
let arr:Array<number> = [1,2,3];
let d1: Date = new Date();

// 对象字面量
let user: {username:string,age:number} = {
    username:'ml',
    age:20
}

/*
*  类与构造函数
* */
class Person{
    constructor(public username:string,public age:number) {
    }
}
