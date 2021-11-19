/*
* 联合类型（Union Type）表示取值可以为多种类型中的一种
* 联合类型使用 | 分隔每个类型*/
var myFavoriteNumber; // 表示允许的类型是 string或者是number 不能是其他类型
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// myFavoriteNumber = true   Type 'boolean' is not assignable to type 'number'.
// 访问联合类型的属性和方法
function getLength(something) {
    // return something.length  “length” 不是string和number的共有属性，所以会报错
    return something.toString();
}
// 联合类型的变量在复制的时候，会根据类型推论的规则推断出一个类型
var myNumber;
myNumber = 'seven';
console.log(myNumber.length); //这里根据类型推论myNumber推断成了string，所以访问length属性不会报错
myNumber = 7;
// console.log(myNumber.length) 这里被推论成了number，所以没有length属性
