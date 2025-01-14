function avg(x, y){
    return (x+y)/2;
}

function f(fn, a, b){
    return fn(a,b);
}

r = f(avg, 1, 2);

console.log("r: ", r);