function add([x, y]) {
    return x + y;
}

add([1, 2]); // 3

//函数的参数也可以使用解构赋值。


[
    [1, 2],
    [3, 4]
].map(([a, b]) => a + b);
// 控制台输出结果为 ：[ 3, 7 ]