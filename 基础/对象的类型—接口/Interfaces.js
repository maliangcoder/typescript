/*
* 在typescript中，使用接口（interface）来定义定向的类型*/
var tom = {
    name: 'Tom',
    age: 25
};
var tom1 = {
    name: 'tom'
};
console.log(tom1);
var tom3 = {
    name: 'tom',
    gender: 'male'
};
console.log(tom3);
var tom4 = {
    id: 857,
    name: 'Tom',
    gender: 'male'
};
// tom4.id = 9527  “id” is readonly
// 没有给readonly赋值也是会出现错误的
