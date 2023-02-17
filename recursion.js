//Problem 1: Recursion
// Write a recursive function called flatTheArray which accepts an array of arrays // and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]

const { json } = require("body-parser");

// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
const flatTheArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatTheArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatTheArray([1, 2, 3, [4, 5]]));
console.log(flatTheArray([1, [2, [3, 4], [[5]]]]));
console.log(flatTheArray([[1], [2], [3]]));
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

//Problem 2: Recursion
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']
const capitalizeAllLetters = (array) => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    const result = capitalizeAllLetters(array.slice(0, -1));
    result.push(array.slice(array.length - 1)[0].toUpperCase());
    return result;
  }
};

console.log(capitalizeAllLetters(["tony", "kim", "best"]));

//Problem 3: Recursion
// example 12: collect Strings
// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string
// collectStrings(obj); // ["foo", "bar", "baz"]) //recursion with helper
function collectStrings(obj) {
  let result = [];

  const helper = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        helper(obj[key]);
      }
    }
  };

  helper(obj);

  return result;
}

console.log(
  collectStrings({
    a: "foo",
    b: {
      c: "bar",
      d: {
        e: "baz",
      },
    },
  })
);
