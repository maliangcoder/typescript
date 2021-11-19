/*
* 数组的类型：类型 + 方括号表示数组*/
let fibonacci : number[] = [1,1,2,3,5]; // 数组的元素中不允许出现其他类型，同时数组的一些方法参数也会根据数组在定义时约定的类型进行限制

// fibonacci.push('8') 方法的参数类型不满足数组在定义时约定的类型

/*
* 数组的泛型 （Array Generic） Array<elemType> 来表示数组*/
let fibonacci1 : Array<number> = [1,1,2,3,5];

/*
* 用接口表示数组
* */
interface NumberArray {
    [index:number]:number;
}
let fibonacciArr :NumberArray = [1,1,2,3,5]

/*
* 类数组 （Array-like Object）*/
function sum() {
    // let ages:number[] = arguments; arguments实际上是一个类数组，不能用普通的数组方式来描述，应该用接口
}

function sum1(){
    let args:{
        [index:number]:number;
        length:number;
        callee:Function;
    } = arguments
}
// 类数组都有自己的接口定义 如 IArguments，NodeList,HTMLCollection
function sum2(){
    let args:IArguments = arguments;
}

// any在数组中的应用
let list: any[] = ['1',2,{age:10},Function];

