function push(arr, item) {
  // arr.length = arr.length + 1;
  // arr[arr.length - 1] = item;
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

function shift(arr) {
  const firstItem = arr[0]; //we want to target the first item in the array
  for (let i = 0; i < arr.length - 1; i++) {
    //we want to move all the items in the array one index to the left
    arr[i] = arr[i + 1]; //we want to move the item to the left one index
  }
  arr.length = arr.length - 1; //we want to remove the last item in the array
  return firstItem; //we want to return the first item in the array
}

function hasDuplicates(arr) {
  let hasDupes = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        hasDupes = true;
      }
    }
  }
  return hasDupes;
}

function countLetters(arr) {
  let countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countObj[arr[i]]) {
      countObj[arr[i]] = 1;
    } else {
      countObj[arr[i]]++;
    }
  }
  return countObj;
}

module.exports = { push, pop, unshift, shift, hasDuplicates, countLetters };
