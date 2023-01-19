/*
Write a function called minSubarraySum which accepts an array of integers and a number called n.
The function should calculate the min sum of n consecutive elements in the array.
*/

const minSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let [minSum, tempSum] = [0, 0];

  for (let i = 0; i < n; i++) {
    minSum += arr[i];
  }
  tempSum = minSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    minSum = Math.min(minSum, tempSum);
  }
  return minSum;
};

// console.log(minSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 3
// console.log(minSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 10
// console.log(minSubarraySum([4, 2, 1, 6], 1)); // 1
// console.log(minSubarraySum([4, 2, 1, 6, 2], 4)); // 11
// console.log(minSubarraySum([], 4)); // null

/*
Write a function called longestSubstringInString, which accepts a string and returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n) */
const longestSubstringInString = (str) => {
  const set = new Set();
  let start = 0;
  let maxLength = 0;
  //sliding window
  for (let end = 0; end < str.length; end++) {
    while (set.has(str[end])) {
      set.delete(str[start]);
      start++;
    }
    set.add(str[end]);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};

// Test Cases:

console.log(longestSubstringInString(""));
console.log(longestSubstringInString("rithmschool"));
console.log(longestSubstringInString("thisisawesome"));
console.log(longestSubstringInString("thecatinthehat"));
console.log(longestSubstringInString("bbbbbb"));
console.log(longestSubstringInString("longestsubstring"));
// longestSubstringInString('') 0
// longestSubstringInString('rithmschool') 7
// longestSubstringInString('thisisawesome') 6
// longestSubstringInString('thecatinthehat') 7
// longestSubstringInString('bbbbbb') 1
// longestSubstringInString('longestsubstring') 8
