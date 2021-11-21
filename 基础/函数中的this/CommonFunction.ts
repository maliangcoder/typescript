/*
*  函数中的this
* */

interface T{
    a:number;
    fn:(x:number) => void;
}

let obj: T = {
    a:1,
    fn(this:T,x:number){
        this.fn
    }
}


/*
*  箭头函数中的this
* */
interface F{
    a:number;
    fn:(x:number) => void;
}

let obj2:T ={
    a:1,
    fn(this:F,x:number){
        return () =>{
            this.a
        }
    }
}