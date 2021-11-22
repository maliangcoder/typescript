/*
*  元组
* */

// 定义一堆值分别为string和number的元组：
let num : [string,number] = ['tom',20];

// 当赋值访问一个已知索引的元素是，会得到正确的类型
let tom :[string,number];
tom[0] = 'tom';
tom[1] = 20

tom[0].slice(1);
tom[1].toFixed(2)

// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let tom1 :[string,number]
tom1=['tom',25]

/*
*  越界的元素
*  当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
* */
let tom2:[string,number];
tom2 = ['tom',20];
tom2.push('male');
// tom2.push(true) // Argument of type 'true' is not assignable to parameter of type 'string | number'.