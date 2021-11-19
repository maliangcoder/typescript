/* 任意值(any) 用来表示允许赋值为任意类型 */
let myFavoriteNumber:string = 'seven';

// myFavoriteNumber = 7 Type 'number' is not assignable to type 'string';

let myFavorite: any = 'seven';
myFavorite = 7;
// 任意值的属性和方法
// 在任意值上访问任意属性都是允许的
let anyThing : any = 'hello';
console.log(anyThing.myName)
// 也允许调用任意方法
let anyThing1 :any = 'Tom';
anyThing1.setName('Jerry')

/* 如果变量在声明的时候，未指定其类型，会被定义为任意值类型 */
let something;
something = 'seven';
something = 7;