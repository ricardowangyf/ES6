[1, undefined, 3].map((x = 'yes') => x);
(3)[1, 'yes', 3]

function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
(2)[0, 0]


function add([x, y]) {
    return x + y;
}

add([1, 2]);
3


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
//函数参数的解构赋值