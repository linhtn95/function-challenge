// 2.1 Write an identity function that takes an argument and return that arguments
// identify(3); // 3

function identify(arg) {
  return arg;
}

console.log(identify(3));
console.log(identify('Test'));
console.log(identify([1, 2, 3]));
console.log(identify({ name: 'linh', age: 23 }));
console.log(identify(undefined));
console.log(identify(true));
console.log(identify(() => console.log('This is function')));

module.exports = identify;
