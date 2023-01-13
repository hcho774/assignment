const sameOccurances = (num1, num2) => {
  let string1 = num1.toString();
  let string2 = num2.toString();

  if (string1.length !== string2.length) return false;

  const lookUp = {};

  for (let i = 0; i < string1.length; i++) {
    let number = string1[i];
    lookUp[number] = (lookUp[number] || 0) + 1;
  }

  for (let i = 0; i < string2.length; i++) {
    let number = string2[i];
    if (!lookUp[number]) {
      return false;
    } else {
      lookUp[number] -= 1;
    }
  }

  return true;
};

// console.log(sameOccurances(123, 321));

const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;

  const lookUp = {};

  for (const val of first) {
    lookUp[val] = (lookUp[val] || 0) + 1;
  }
  for (const val of second) {
    if (!lookUp[val]) {
      return false;
    } else {
      lookUp[val] -= 1;
    }
  }
  return true;
};

// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("awesome", "awesom"));
// console.log(validAnagram("qwerty", "qeywrt"));
// console.log(validAnagram("texttwisttime", "timetwisttext"));

const areThereDupliates = (arrOfLetters) => {
  arrOfLetters.sort();
  for (let i = 0; i < arrOfLetters.length; i++) {
    if (arrOfLetters[i] == arrOfLetters[i + 1]) {
      return true;
    }
  }
  return false;
};

// console.log(areThereDupliates(["a", "c", "d"]));

const avgPair = (arr, averageTarget) => {
  if (arr.length === 0) return false;

  let [l, r] = [0, arr.length - 1];

  while (l < r) {
    let avg = (arr[l] + arr[r]) / 2;
    if (avg === averageTarget) {
      return true;
    } else if (avg < averageTarget) {
      l++;
    } else {
      r--;
    }
  }
  return false;
};

// console.log(avgPair([1, 2, 3], 2.5));

const subsequence = (str1, str2) => {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
};
console.log(subsequence("hello", "hello world"));
console.log(subsequence("sing", "sting"));
console.log(subsequence("abc", "abracadabra"));
console.log(subsequence("abc", "acb"));
