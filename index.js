function push(arr, item) {
  arr.length = arr.length + 1;
  arr[arr.length - 1] = item;
  return arr.length;
}

function pop(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

module.exports = { push, pop };
