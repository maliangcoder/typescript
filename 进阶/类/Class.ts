/*
*  Typescript中类的用法
*  TypeScript可以使用三种访问修饰符
*
*  - public 修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是public
*  - private 修饰的属性或方法是私有的，不饿能在声明它的类的外部访问
*  - protected 修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
* */

class Animal{
    public name;
    public constructor(name) {
        this.name = name;
    }
}
let a = new Animal('jack');
console.log(a.name);
a.name = 'Tom';
console.log(a.name);

// 某些时候，希望属性是无法直接存取的，这时候就可以用private了：
class Animal1{
    protected name;
    public constructor(name) {
        this.name = name;
    }
}
let b = new Animal1('Jack')
// console.log(b.name)  Property 'name' is private and only accessible within class 'Animal1'

// 使用private修饰的属性或方法，在子类中也是不允许访问的
// 而如果是protected修饰，则允许在子类中访问
class Animal2{
    protected name;
    public constructor(name) {
        this.name = name
    }
}
class Cat extends Animal1{
    constructor(name) {
        super(name);
        console.log(this.name)

    }
}

/* 当构造函数修饰为private时，该类不允许被继承或者实例化 */
class Animal3{
    public name;
    private constructor(name) {
        this.name = name;
    }
}
// class Cat1 extends Animal3{
//     constructor(name) {
//         super(name);
//     }
// }
// let c = new Animal2('Jack')// index.ts(7,19): TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
// // index.ts(13,9): TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.

/* 当构造函数修饰为protected时，该类只允许被继承 */


/*
*  参数属性
* */
// 修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。
class Animal4 {
    public constructor(public name) {
    }
}
// readonly 注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
class Animal5{
    public constructor(public readonly name) {
    }
}

/*
*  抽象类：abstract用于定义抽象类和其中的抽象方法
*  - 抽象类不允许被实例化
* */
abstract class Animal6{
    public name;
    public constructor(name) {
        this.name = name
    }
    public abstract sayHi()
}
// let d = new Animal6

/*
*  类的类型
* */
class Animal7{
    name:string;
    constructor(name:string) {
        this.name = name
    }
    sayHi():string{
        return `My name is ${this.name}`
    }
}
let e:Animal7 = new Animal7('Jack')
console.log(e.sayHi()); // My name is Jack