/*
* 函数声明
* */
function sum(x:number,y:number):number{
    return x + y;
}
sum(1,2) // 如果输入多余的（或者时少于要求的）参数，是不被允许的

// 表达式
let mySum = function (x:number,y:number):number{
    return x + y;
}
console.log(mySum(1,2))
// 上面的代码只对等号右侧的匿名函数进行了定义，而等号左边的mySum，是通过赋值操作进行类型推论而推断出来的，如果需要我们手动给mySum添加类型，如下：

let mySum1:(x:number,y:number) => number = function (x:number,y:number):number{
    return x + y;
}

/*
* 用接口定义函数的形状
* */
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch : SearchFunc;
mySearch = function (source:string,subSting:string){
    return source.search(subSting) !== -1;
}

/*
*  可选参数
*  注意：可选参数必须接在必须参数后，也就是说可选参数后面不允许出现必须参数
* */
function buildName(firstName:string,lastName?:string){
    if(lastName){
        return firstName + '' + lastName
    }else{
        return firstName
    }
}
let tomcat = buildName('Tom','cat')
let tom = buildName('Tom')

/*
*  参数默认值
* */
function buildName1(firstName:string,lastName:string = 'Cat'){
    return firstName + '' + lastName
}
let tomcat1 = buildName('Tom','Cat');
let cat1 = buildName('tom')

/*
*  剩余参数
*  rest参数只能是最后一个参数
* */
function push(array:any[],...items:any[]){
    items.forEach((item) =>{
        array.push(item)
    })
}
let a = [];
push(a,1,2,3);

/*
* 重载:允许一个函数接受不同数量或类型的参数时，做出不同的处理
* */
function reverse(x:number | string):number | string | void{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('');
    }
}

// 重载定义多个 reverse的函数类型
function reverse1(x:number):number;
function reverse1(x:string):string;
function reverse1(x:number | string):number | string | void{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''))
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}
