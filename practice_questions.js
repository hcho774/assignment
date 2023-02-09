//PROBLEM 1: // To create a function that returns a string in reverse in JavaScript, you can use the following code:

function reverseString(str) {
  if (str.length === 0) return str;

  let reversedStr = str.split("").reverse().join("");

  return reversedStr;
  //second way to reverse the string using for loop
  //   let result = [];
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     result.push(str[i]);
  //   }

  //   return result.join("");
}

console.log(reverseString("cat"));
console.log(reverseString("hyun"));

//example: 'cat' -> 'tac'

//PROBLEM 2: // The toLowerCase() method is used to convert the string to lowercase, so that the function is not case-sensitive.
// The split(), reverse(), and join() methods are used to reverse the string.
// The function compares the original string to the reversed string. If they are the same, the function returns true, indicating that the string is a palindrome. If they are different, the function returns false, indicating that the string is not a palindrome.

function isPalindrome(str) {
  if (str.length === 0) return str;

  let reversedStr = str.toLowerCase().split("").reverse().join("");

  if (str.toLowerCase() === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("god"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("GoD"));
console.log(isPalindrome("HyUn"));
console.log(isPalindrome("Pop"));
console.log(isPalindrome(""));

//example: 'god' -> 'dog' so false
//         'bob' -> 'bob' so true

//PROBLEM 3: // Return the character that is most common in a string

function mostCommonChar(string) {
  if (string.length === 0) return string;

  let lookUp = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    lookUp[char] = (lookUp[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char in lookUp) {
    if (lookUp[char] > maxCount) {
      maxChar = char;
      maxCount = lookUp[char];
    }
  }
  return maxChar;
}

console.log(mostCommonChar("apple"));
console.log(mostCommonChar("cheese"));
console.log(mostCommonChar("kimchi"));

//example: 'apple' -> 'p'
