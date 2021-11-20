/*
* 类型断言（Type Assertion）：可以用来手动指定一个值的类型
* 语法：值 as 类型  或者   <类型>值
* */

// 在typescript不确定一个联合类型的变量到底时哪一个类型的时候，我们只能访问此联合类型的所有类型中共有的属性和方法：
interface Cat{
    name:string;
    run():void;
}
interface Fish{
    name:string;
    swim():void;
}
function getName(animal:Cat | Fish){
    return animal.name;

    //下面的代码表示animal的联合类型没有swim这个共同的属性所以报错。
    // if(typeof animal.swim === 'function'){
    //     return true
    // }
}

/* 使用类型断言解决上面代码的错误 */
function isFish(animal:Cat | Fish){
    // if(typeof (animal as Fish).swim === 'function'){
    //     return true
    // }
    // return false
    return typeof (animal as Fish).swim === 'function'

}

/*
*  将一个父类断言为更加具体的子类
* */
class ApiError extends Error{
    code:number = 0;
}
class HttpError extends Error{
    statusCode:number = 200;
}
function isApiError(error:Error){
    return typeof (error as ApiError).code === 'number'
}

/*
*  将任何一个类型断言为 any
* */

// window.foo = 1; typescript编译会报错，提示window上不错在foo属性
// 使用 as any 临时将window断言为 any 类型
(window as any).foo = 1;

/*
*  将 any 断言为一个具体的类型
* */

function getCacheData(key:string):any{
    return (window as any).cache[key];
}
interface Cat{
    name:string;
    run():void;
}
const tom = getCacheData('tom') as Cat;
tom.run();
// 上面代码，我们调用完了getCacheData之后，立即将它断言为 Cat 类型，明确了tom的类型，

/*
*  1.联合类型可以被断言为其中一个类型
*  2.父类可以被断言为子类
*  3.任何类型都可以被断言为any
*  4.any可以被断言为任何类型
* */

/*
*  双重断言 as any as Foo
*
*  使用双重断言，可以打破[要使得A能够被断言为B，是要A兼容B或则和B兼容A即可]的限制，将任何一个类型断言为任何另一个类型
* */
interface Cat{
    run():void
}
interface Fish{
    swim():void
}
function testCat(cat:Cat){
    return (cat as any as Fish) // 若直接使用 cat as Fish 会报错，因为Cat和Fish互相不兼容
}

/*
*  类型断言 vs 类型转换
* */
function toBoolean(something:any):boolean{
    return something as boolean;
}
toBoolean(1)
// 上面的例子中，将something断言为Boolean虽然可以通过编译，但是，最后代码在编译后会变成
// function toBoolean(something){
//     return something;
// }

// 若要进行类型转换，需要直接调用类型转换的方法
function toBoolean1(something:any):boolean{
    return Boolean(something);
}
toBoolean1(1); // 返回值为true

/*
*  类型断言 vs 类型声明
* */
function getCacheData1(key:string):any{
    return (window as any).cache[key];
}
interface Cat1{
    name:string;
    run():void
}
const tom1:Cat = getCacheData1('tom');
tom.run();
// 上面的例子中，我们通过类型声明的方式，将tom声明为cat，然后再将 any 类型的getCacheData('tom')赋值给cat类型的tom


/*
*  类型断言 vs 泛型
* */
function getCacheData2(key:string):any{
    return (window as any).cache[key];
}
interface Cat3{
    name:string;
    run():void;
}
const tom2 = getCacheData2('tom') as Cat3;
tom.run();

// 使用泛型解决上述问题
function getCacheData3<T>(key:string):T{
    return (window as any).cache[key];
}
interface Cat{
    name:string;
    run():void;
}
const tom3 = getCacheData3<Cat>('tom');
tom3.run();



