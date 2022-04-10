/*
*  字符串字面量类型
*  字符串字面量用来约束取值只能是某几个字符串中的一个
* */

type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele:Element,event:EventNames){

}
handleEvent(document.getElementById('hello'),'click')
// handleEvent(document.getElementById('world'),'dbclick') // event不能为 ’dbclick‘

/* 类型别名与字符串字面量类型都是使用 type 进行定义 */
/* 字符串类型 */
/* test */

