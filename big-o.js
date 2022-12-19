//Problem 1: In 3-4 sentences, please explain what Big O Notation is.
//Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

//Problem 2: For each of the time complexities shown below:
// O(1) - constant time complexity - 1 - When your calculation is not dependent on the input size, it is a constant time complexity (O(1)).
let num = [1, 2, 3, 4, 5, 6];

function constant(arr) {
  return arr[0];
}
console.log(constant(num));

// O(logn) - Logarithmic time complexity - 2 - When the input size is reduced by half, maybe when iterating, handling recursion, or whatsoever, it is a logarithmic time complexity (O(log n)).
const binarySearch = (array, target) => {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (array[middleIndex] === target) {
      return middleIndex;
    }

    if (array[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }
  return -1;
};

let score = [12, 22, 45, 67, 96];
console.log(binarySearch(score, 96));
// O(n) - linear time complexity - 3 - When you have a single loop within your algorithm, it is linear time complexity (O(n)).
const calcFactorial = (n) => {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(calcFactorial(5)); // 120
// O(n^2) - quadratic time complexity - 4 - When you have nested loops within your algorithm, meaning a loop in a loop, it is quadratic time complexity (O(n^2)).
const matchElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return "No matches found 😞";
};

const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];
console.log(matchElements(fruit)); // "Match found at 2 and 8"
// O(N!) - factorial time complexity - 5 - A factorial time complexity is a type of time complexity that grows very quickly as the size of the input increases.
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Problem 3: Name 3 reasons why we care about Big O and we care about code performance.
/*
Efficiency: One of the main reasons we care about Big O notation is because it allows us to analyze the efficiency of an algorithm. By understanding the worst-case running time of an algorithm, we can determine whether it will be able to handle large input sizes within an acceptable amount of time. This is especially important for applications that need to handle large amounts of data, such as databases and search engines.

Scalability: Another reason we care about Big O notation is because it helps us understand how well an algorithm scales. If an algorithm has a high time complexity (e.g. O(n^2) or O(n^3)), it may perform well for small input sizes, but it may become impractical for larger input sizes. By understanding the scalability of an algorithm, we can determine whether it is suitable for our needs.

Resource constraints: In some cases, we may be working with limited resources, such as memory or processing power. In these situations, it is important to consider the space complexity of an algorithm, which is the amount of memory it requires to run. By understanding the space complexity of an algorithm, we can determine whether it is feasible to use within the constraints of our resources.
*/

// Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines.
// This method returns a floating-point number that reflects the current time in milliseconds. This is a very simple technique to measure the performance of a function. This time is not fixed, it may change every time we run the code again. As the number of elements in the array increases, the function becomes slower and the runtime increases. If we run the same program on different computers can take different time, the reason being the CPU. The time taken to run a certain function or to perform a certain task depends on how powerful the CPU is, and what other programs are running on a particular computer.

// Problem 5: Given the following piece of code:
// TOTAL time complexity is 1+2n+n^2
// CONSOLIDATED time complexity is n^2

// Problem 6: Given the following piece of code:
// TOTAL time complexity is 1 + 1 + n^3
// CONSOLIDATED time complexity is n^3

//Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
// We can ignore constants and consolidate our time complexities because constants do not significantly affect the running time of an algorithm as the input size grows.
// Ignoring constants and consolidating time complexities allows us to more easily compare the efficiency of different algorithms and make decisions about which algorithm is the most suitable for a given problem. It also helps to simplify the analysis of algorithms, as we can focus on the dominant terms in the time complexity rather than worrying about constant factors.

// Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.
// Space complexity is a measure of the amount of memory an algorithm requires to run. We care about space complexity because in some cases, we may be working with limited memory resources or may be concerned about the amount of memory an algorithm consumes. Understanding the space complexity of an algorithm can help us determine whether it is feasible to use within the constraints of our resources and can also help us optimize our use of memory

//Problem 9: Given the following data TYPES, label what the space complexity is for each one:
// - Boolean - O(1)
// - Undefined - O(1)
// - Null - O(1)
// - Numbers - O(1)
// - String - O(n)
// - Array - O(n)
// - Object - O(n)

// Problem 10: Give two reasons when you should use a array and when you should use a object.
//We should use objects when we want the element names to be strings (text) or should use arrays when we want the element names to be numbers.
//groups of similarly typed data, which you need ordered or want to manipulate as a batch are better suited for arrays, and grouped properties of a single entity are better suited for objects.

// Problem 11: Given the following object methods, label what the TIME complexity is for each one:

const obj = { name: "tony" };
//inserting
obj.age = 44;
-O(1);
//removing
delete obj.age;
-O(1);
//searching 1
obj.hasOwnProperty["name"] - O(1);
//searching 2
for (const prop in obj) {
  console.log(obj[prop]) - O(n);
}
//accessing
obj.age; //44  - O(1)
//retrieving keys
Object.keys(obj) - O(1);
//retrieving values
Object.values(obj) - O(1);

//Problem 12: Given the following array methods, label what the TIME complexity is for each one:
const arr2 = [1, 2, 3, 4, 5, 6, 7];
//inserting 1
arr2.push(8) - O(1);
//inserting 2
arr2.unshift(0) - O(n);
//removing 1
arr2.pop() - O(1);
//removing 2
arr2.shift() - O(n);
//searching 1
const findNumber = arr2.find((num) => num === 2) - O(n);
//searching 2
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 2) {
    return arr2[i];
  }
  -O(n);
}
//retrieving
const getNumber = arr2[3] - O(1);
//method 1
const double = arr2.map((num) => num * 2) - O(n);
//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) - O(n);
//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) - O(n);
//method 4
for (const num of nums) {
  console.log(num * 2);
}
-O(n);
//method 5
const convertToString = arr2.join(" ") - O(n);
//method 6
const reversed = arr2.reverse();
-O(n);

// Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is.

// Problem 1: Time complexity: O(n) using for loop iterating each element, space complexity: O(1)  function uses fixed amount of the space regardless of input array.
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}
// Problem 2: Time complexity: O(n) using foreach method to iterate throuhg each element in array, Space Complexity: O(n) - because size of array index will increase as input increases.
function findEachIndexOfNumber(number, array) {
  let arrayOfIndexes = [];
  array.forEach(function (element, index) {
    if (element === number) {
      arrayOfIndexes.push(index);
    }
  });
  return arrayOfIndexes;
}
// Problem 3: Time complexity: O(1) function only peforms fixed number of operations regardless of the input array, Space Complexity: O(1) - the function only uses a fixed amount of space, regardless of the size of the input array.
const array = [36, 14, 1, 7, 21];
function higherOrLower(array) {
  if (array[array.length - 1] > array[0]) {
    return "Higher";
  } else if (array[array.length - 1] < array[0]) {
    return "Lower";
  } else {
    return "Neither";
  }
}
// Problem 4: Time complexity: O(n) the function uses a loop to iterate through the elements of the array, and the number of iterations is directly proportional to the size of the array. , Space Complexity: O(1) - the function only uses a fixed amount of space, regardless of the size of the input array.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// Problem 5: Time complexity: O(1) function performs fixed number of operation regardless of the input size, Space Complexity: O(1) - the function only uses a fixed amount of space, regardless of the size of the input array.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array) {
  return (array.length * (array.length + 1)) / 2;
}
// Problem 6: Time complexity: O(log n) the function uses a binary search algorithm, which reduces the search space by half at each iteration. , Space Complexity: O(log n) each recursive call adds a new layer to the call stack. The call stack size is directly proportional to the number of recursive calls, which is logarithmic in the size of the input array.
function searchSortedArray(
  number,
  array,
  beginIndex = 0,
  endIndex = array.length - 1
) {
  let middleIndex = Math.floor((beginIndex + endIndex) / 2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  }
}
//  Problem 7: Time complexity: O(n^2) This is because the function uses two nested loops to compare every element of array1 with every element of array2. The number of iterations is directly proportional to the size of both input arrays, resulting in a quadratic time complexity., Space Complexity: O(n) - the function creates a new array, arrayOfPairs, which has a size proportional to the size of the input arrays.
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function (e, i) {
    array2.forEach(function (e2, i2) {
      if (e === e2) {
        arrayOfPairs.push([i, i2]);
      }
    });
  });
  return arrayOfPairs;
}

// Problem 8: Time complexity: O(n)the function uses an algorithm known as bubble sort, which has a time complexity of O(n^2) in the worst case. Bubble sort works by repeatedly iterating through the elements of the array and swapping adjacent elements that are out of order. The inner loop iterates through the elements of the array, and the outer loop repeats the process until the array is fully sorted., Space Complexity: O(1) - function only uses a fixed amount of space, regardless of the size of the input array.
function sortByValue(array) {
  function swap(array, index1, index2) {
    let temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
  }
  let count = 1;
  while (count < array.length) {
    let swapCount = 0;
    for (let i = 0; i < array.length - count; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapCount++;
      }
    }
    count++;
  }
  return array;
}
// Problem 9: Time complexity: O(n) the function uses a loop to iterate through the elements of the array and function also uses the includes method to check if an element is present in array2. The time complexity of the includes method is also O(n). , Space Complexity: O(n) -the function creates a new array, dupeArray, which has a size proportional to the size of the input array.
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function (element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    }
  });
  return dupeArray;
}
// Problem 10: Time complexity: O(n) This is because the function uses two higher-order functions, filter and reduce, which both have a time complexity of O(n). , Space Complexity: O(1) - This is because the function creates a new array using the filter function, which has a size proportional to the size of the input array.
function sumFilteredData(array) {
  return array
    .filter(function (element) {
      return element > 5 && element < 20;
    })
    .reduce(function (valueToAdd, currentValue) {
      return valueToAdd + currentValue;
    }, 0);
}
