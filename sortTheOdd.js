function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
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

function sortArray(array) {
  let odd = array.filter(num => Math.abs(num) % 2 == 1)
    let oddSorted = bubbleSort(odd)
    return array.map(num => Math.abs(num) % 2 == 1 ? oddSorted.shift() : num)
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 3, 2, 2, 8])); // [2, 2, 3, 3, 5, 8]
console.log(sortArray([-5, 3, 2, -8, 1, 4])); // [-5, 1, 2, -8, 3, 4]