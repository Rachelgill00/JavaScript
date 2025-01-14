//1. 可以省略function， 有时（只有一个形参的时候）还可以省略接受参数的（）
var test = a => {
    console.log("output: ", 111, a);
}

test("qq")
//----------------------------------------------------------------

//2. {}大括号也可以省略： 只有一句代码的时候.或者 只有返回值的时候, 省略return
//1）
//原型代码：
var test = (a) => {
    return a*100
}
// 简化代码：
var testC = a => a* 100 

console.log("test C: ", testC(10));

//2）
//原始代码：
var list = ["aaa", "bbb", "ccc"]
var newlist = list.map(function(item){
    return item;
})
console.log("newlist: ", newlist);

//简化代码：
var newlistC = list.map(item => item);
console.log("newlistC: ", newlistC.join("Heya!"));

//---------------------------------------------------------------
//3)复杂情况
//原版：
var test2 = () => {
    //返回一个 对象。
    return {
        name: "zhiwei"
    }
}

console.log("test2(): ", test2());

//简化板：
var test3 = () => ({
    name: "zhiwei"
})
console.log("test3(): ", test3());
//=========================================
//3.  没有argument(形餐）， 
//其实在函数里，它里面内建了一个“变量”：arguments，你也不需要define。
//arguments 它直接接住你传来的实参数
//原型：
var test4 = function() {
    //console.log(arguments);
    //console.log(arguments[0], arguments[1], arguments[2])
    console.log(Array.from(arguments));
}

test4(1,2,3)


//简化板
var test5 = () => {
    console.log(Array.from(arguments));
    //报错： 没有定义arguments
    //所以 这就是 箭头函数 的 缺点： 要用arguments的话，老实写形参
}

test5(1,2,3)

//4. 箭头函数没有this
//箭头函数 this 是 父级作用域的
