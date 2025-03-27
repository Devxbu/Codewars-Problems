function sum(num) {
    return num.split('').reduce((acc, wn) => acc + Number(wn), 0);
  }

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (sum(arr[i]) > sum(arr[i + 1]) || sum(arr[i]) == sum(arr[i + 1]) && arr[i] != arr[i + 1] && arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}
  
function orderWeight(strng) {
  return bubbleSort(strng.split(' ')).join(' ');
}

console.log(orderWeight("103 123 456 789")); // "123 456 789 103"
console.log(orderWeight("2000 10003 123456")); // "10003 123456 2000"
console.log(orderWeight("11 11 2 2 13 13")); // "2 2 11 11 13 13"