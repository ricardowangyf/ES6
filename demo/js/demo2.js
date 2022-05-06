function logIterable(it) {
    var iterator = it[Symbol.iterator]();
    // 浏览器必须支持 for...of 循环
    for (let letter of iterator) {
        console.log(letter);
    }
}

// Array
logIterable(['a', 'b', 'c']);
// a
// b
// c

// string
logIterable('abc');
// a
// b
// c