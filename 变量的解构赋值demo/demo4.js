var { x = 3 } = {};
x // 3

var { x, y = 5 } = { x: 1 };
x // 1
y // 5

var { x: y = 3 } = {};
y // 3

var { x: y = 3 } = { x: 5 };
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"

var { x = 3 } = { x: undefined };
x // 3

var { x = 3 } = { x: null };
x // null