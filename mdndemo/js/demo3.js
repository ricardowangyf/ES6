// 声明一个常量
const cart = ['apple', 'banana', 'pear'];


// 设定一个函数方法returnLast用来返回数组的最后一个项目
function returnLast(arr) {
    return arr.at(-1);
}
// 获取cart中的最后一项pear
const item1 = returnLast(cart);
console.log(item1);

// 在cart数组中添加一个
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2);