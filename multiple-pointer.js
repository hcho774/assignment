const areThereDuplicates = (arr) => {
  // Sort the array
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  // // If the pointer has reached the end of the array and no duplicates were found, return false
  return false;
};

function areThereDuplicates2(arr) {
  let collection = {};
  for (let val of arr) {
    console.log(val);
    collection[val] = (collection[val] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

const avgPair = (arr, avgTarget) => {
  if (arr.length === 0) return false;

  let [l, r] = [0, arr.length - 1];

  while (l < r) {
    let avg = (arr[l] + arr[r]) / 2;
    if (avg === avgTarget) {
      return true;
    } else if (avg < avgTarget) {
      l++;
    } else {
      r--;
    }
  }
  return false;
};

const mostWater = (arr) => {
  let [l, r, max] = [0, arr.length - 1, 0];

  while (l < r) {
    const area = (r - l) * Math.min(arr[l], arr[r]);

    max = Math.max(max, area);

    if (arr[l] <= arr[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};
