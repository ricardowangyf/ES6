var num1 = [
    [1]
];
var num2 = [2, [3]];
var num3 = [5, [6]];

var nums = num1.concat(num2);

console.log(nums);

var nums2 = num1.concat(4, num3);

console.log(nums2)

num1[0].push(4);

console.log(nums);