/*
*  泛型：在定义函数、接口或类的时候，不预先指定具体的类型，而在使用时候在指定类型的一种特性
* */

// function createArray(length:number,value:any):Array<any>{
//     let result = [];
//     for(let i=0; i<length;i++){
//         result[i] = value
//     }
//     return result
// }
// createArray(3,'x')
function createArray<T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    for(let i=0;i<length;i++){
        result[i] = value;
    }
    return result
}
createArray<string>(3,'x')

/* 多个类型参数 */
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
swap([1,'seven'])

/* 泛型约束 */
interface Lengthwise{
    length:number;
}
function loggingIdentity<T extends Lengthwise>(arg:T):T{
    return arg
}

// 多个类型参数之间互相约束
function copyFields<T extends U,U>(target:T,source:U){
    for(let id in source){
        target[id] = (<T>source)[id];
    }
    return target
}
let x = {a:1,b:2,c:3,d:4}
copyFields(x,{b:10,d:20})

/* 泛型接口 */
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function (source:string,subString:string){
    return source.search(subString) !== -1
}
// 使用泛型来定义接口
interface CreateArrayFunc{
    <T>(length:number,value:T):Array<T>;
}
let createArrays:CreateArrayFunc;
createArrays = function <T>(length:number,value:T):Array<T>{
    let result:T[] = [];
    for(let i = 0; i<length; i++){
        result[i] = value
    }
    return result
}
createArrays(3,'x')

