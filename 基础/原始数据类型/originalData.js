// 布尔值 使用boolean定义布尔值类型
var isDone = false;
// 数值 使用number定义数值类型：
var num = 1;
var hexLiteral = 0xf00d; // ES6中表示二进制
// 字符串 使用string定义字符串类型：
var myName = 'Tom';
var myAge = 20;
// 模板字符串
var sentence = "hello,my name is ".concat(myName, " ill be ").concat(myAge + 1, " years old next month");
// 空值 在typescript中，可以用void表示没有任何返回值的函数：
function alertName() {
    alert('my name is tom');
}
// 声明一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null（只在 --strictNullChecks未指定时）
var unusable = undefined;
// Null 和 Undefined
/* 与void的区别是：undefined和null是所有类型的子类型，也就是说undefined类型的变量，可以赋值给number类型的变量 */
var u = undefined;
var n = null;
var num1 = undefined; // 这样不会报错
//而void类型的变量不能赋值给number类型的变量
var u1;
var num2 = u;
