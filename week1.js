console.log(`Problem #1: What should the following evaluations return?

2 == '2' should return true
'he' == 'she' returns false
2 === 2 returns true
'true' == true returns false
true === true returns true
'true' != true returns true
'true' !== true returns true\n`);

console.log(
  "Problem #2: What are the three different ways you can declare a variable? And what is the differences between them?\n"
);
const first =
  "const is block scoped, cannot be re-assigned or re-declared , but obj or array delcared with const can be updated or removed, hoisted to the top of the their scope but uninitialized";
let second =
  "let is block scoped, an be re-assigned but cannot be re-declared witin its scope, hoisted to the top of the their scope but uninitialized";
var third =
  "var is globally or funtion scoped, can be re-declared and re-assigned, hoisted to the top of their scope initialized with 'undefined'\n";
console.log(first);
console.log(second);
console.log(third);

console.log(
  "Problem #3: Write a simple function for each type of these functions:\n"
);

// First-Class Functions - First-class functions are treated like any other variable.
//a.Assigning a function to a varialbe
const firstCalssFuc = (a, b) => {
  return a + b;
};
//b.Returning a function
function sayBye() {
  return () => {
    console.log("Bye!");
  };
}
//c. Passing a function as an argument
function sayHi() {
  return "Hi, ";
}
function greeting(func, name) {
  console.log(func() + name);
}

greeting(sayHi, "Hyun ");

//Higher Order Function - higher-order functions operate on other functions by taking them as arguments, returning them from a function, or both.
const ages = [25, 30, 31, 45];
//higher-order function
function higherOrderFunc(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function func(age) {
  console.log(`I am ${age} years old`);
}

higherOrderFunc(ages, func);

//Callback Function - A callback is a function passed as an argument to another function.
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
//callback function
function callBack() {
  console.log("This is a callback function\n");
}

greet("Hyun", callBack);

console.log(
  "Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?\n"
);

let problem = `
const a = "hi";
console.log(c);
const someFunction = (arg) => {
  const b = "bye";
  if (arg) {
    const c = "see ya!";
    console.log(a);
    console.log(b);
  }
};\n`;
console.log(problem);

console.log("a will log 'hi'");
console.log("b will log 'bye'");
console.log("c will throw ReferenceError due to function scope\n");

console.log(
  "Problem #5: Given the following data structure, write a for loop using:"
);
console.log("const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n");

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`- For statement
for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
  }`);
for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}
console.log(`
- For ...of
for (const ele of someArray) {
    console.log(ele);
  };`);
for (const ele of someArray) {
  console.log(ele);
}

console.log("\nProblem #6: Given the following data structure:");
console.log(`const someArray = [1, 2, 3, 4, 5];\n`);
let otherArray = [1, 2, 3, 4, 5];

console.log(otherArray.concat()); // NM
console.log(otherArray.length); // NM
console.log(otherArray.filter((num) => num !== 3)); // NM
console.log(otherArray.find((num) => num === 5)); // NM
console.log(otherArray.slice(2, 4)); // NM

otherArray.splice(2, 2); // MT
console.log(otherArray);
otherArray = [1, 2, 3, 4, 5];

console.log(otherArray.includes(4)); // NM
console.log(otherArray.indexOf(2)); // NM
console.log(Array.isArray(otherArray)); // NM
console.log(otherArray.join(", ")); // NM
console.log(otherArray.map((num) => num * 2)); // NM

otherArray.pop(); // MT
console.log(otherArray);
otherArray = [1, 2, 3, 4, 5];

otherArray.push(6); // MT
console.log(otherArray);
otherArray = [1, 2, 3, 4, 5];

otherArray.shift(); // MT
console.log(otherArray);
otherArray = [1, 2, 3, 4, 5];

otherArray.unshift(0); // MT
console.log(otherArray);
otherArray = [1, 2, 3, 4, 5];

console.log([9, 1, 3, 5].sort()); // MT

console.log(
  otherArray.reduce((total, curr) => total + curr, 0),
  "\n"
); // NM

console.log("Problem #7: Given the following data structure:");
console.log(`const someObject = {
    color: 'black'
};\n`);

const someObject = {
  color: "black",
};

Object.assign(someObject, { name: "john doe" });
console.log(someObject);

someObject.age = 22;
console.log(someObject);

someObject["address"] = "123 test address";
console.log(someObject);

console.log(Object.keys(someObject));
console.log(Object.values(someObject));

for (const prop in someObject) {
  console.log(someObject[prop]);
}

console.log(`\nProblem #8: Given the following data structure:`);
console.log(`const numbers = [
    {
      num: 1,
    },
    {
      num: 2,
    },
    {
      num: 3,
    },
  ];`);

const numbers = [
  {
    num: 1,
  },
  {
    num: 2,
  },
  {
    num: 3,
  },
];

for (const i of numbers) {
  console.log(i.num);
}

console.log("\nProblem #9: Create a new Set() object\n");
const newSet = new Set();
newSet.add("john doe");
console.log(newSet);
console.log(newSet.has("john doe"));
newSet.delete("john doe");
console.log(newSet);

console.log("\nProblem #10: Create a new Map() object\n");
const newMap = new Map();
newMap.set("name", "john doe");
console.log(newMap);
// console.log(newMap.has("john doe")); //has method check keys exist or not
console.log(newMap.get("name") === "john doe");
// const mapValues = [...newMap.values()];
// console.log(mapValues.includes("john doe"));
newMap.delete("name");

console.log(newMap);

console.log(
  "\nProblem #11: Explain what asynchronous programming means in 3 sentences.\n"
);
console.log(
  `An asynchronous programming allows multiple things to happen at the same time. 
When you start an action, your program continues to run. 
When the action finishes, the program is informed and gets access to the result\n`
);

console.log("Problem #12: Explain what call back hell is.\n");

console.log(
  "Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. "
);

console.log(
  "Problem (#13: Explain what is a promise and describe the possible states of promises.\n"
);
console.log(`
A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

A JavaScript Promise object can be:

Pending
Fulfilled
Rejected

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.`);

console.log(`Problem #14: What is async/await?\n
The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
`);

console.log(
  "Problem #15: Using Git, please push this code up to your GitHub repo following the directions:\n"
);
