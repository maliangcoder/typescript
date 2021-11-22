/*
*  Typescript中类的用法
*  TypeScript可以使用三种访问修饰符
*
*  - public 修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是public
*  - private 修饰的属性或方法是私有的，不饿能在声明它的类的外部访问
*  - protected 修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
* */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('jack');
console.log(a.name);
a.name = 'Tom';
console.log(a.name);
