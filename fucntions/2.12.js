// 2.12 Write a limit function that allows a binary function to be called a limited number of times
function add(a, b) {
    return a + b;
}

function limit(func, called) {
    return function(x, y) {
        if( called > 0) {
            called = 0;
            return func(x, y);
        }
        return undefined;
    }
}

var addLimited = limit(add, 1);
console.log(addLimited(3, 4)); // 7
console.log(addLimited(3, 5)); // undefined
console.log(addLimited(4, 5)); // undefined