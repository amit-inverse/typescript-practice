// Write a JavaScript function that reverses a given string... join the reversed characters with an underscore.

function split(str) {
  return str.split("");
}

function reverse(arr) {
  return arr.reverse();
}

function join(arr) {
  return arr.join("_");
}

const compose =
  (...functions) =>
  //   (str) => {
  //     functions.reverse().forEach((func) => {
  //       str = func(str);
  //     });

  //     return str;
  //   };
  (str) =>
    functions.reduceRight((acc, currFunc) => currFunc(acc), str);

const composedFunction = compose(join, reverse, split);

console.log(composedFunction("hello"));
