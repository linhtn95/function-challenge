/* Make a function gensymf that makes a function that generatres unique symbols */

function gensymf(str) {
  return function () {
    let i = 0;
    i += 1;
    return str + i;
  };
}

const genG = gensymf('G');
const genH = gensymf('H');
console.log(genG());
console.log(genG());
console.log(genG());
console.log(genG());
console.log(genG());
console.log(genH());
console.log(genH());
console.log(genH());

module.exports = gensymf;
