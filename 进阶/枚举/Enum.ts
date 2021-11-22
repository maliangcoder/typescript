/*
*  枚举
* */

// 枚举使用 enum 关键字来定义
// enum Days{
//     Sun,Mon,Tue,Wed,Thu,Fri,Sat,
// }
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射:
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true

/*
*  手动赋值
* */

// 未手动赋值的枚举项会接着上一个枚举项递增
enum Day {Sun = 3,Mon = 1,Tue,Wed,Thu,Fri,Sat}
console.log(Day['Sun'] === 3) // true
console.log(Day['Wed'] === 3) // true