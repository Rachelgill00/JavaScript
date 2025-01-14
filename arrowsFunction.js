//1. 可以省略function， 有时（只有一个形参的时候）还可以省略接受参数的（）
var test = a => {
    console.log("output: ", 111, a);
}

test("qq")
//----------------------------------------------------------------

//2. {}也可以省略： 只有一句代码的时候.或者 只有返回值的时候
//原型代码：
var test = (a) => {
    return a*100
}

var testC = a => a* 100 

console.log("test C: ", testC(10));