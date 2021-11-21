class User{

    /*
    *  当我们给构造函数参数设置了访问属性修饰符：public，那么ts会做如下两件事情
    *  - 给当前类添加同名的成员属性
    *  - 在类的实例化的时候，会把传入的参数赋值给对象的成员属性
    * */
    constructor(
        public id:number,
        public username:number
    ) {
    }

}