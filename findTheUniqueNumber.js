function ans(arr){
    return arr.filter(nums => nums === arr[0]).length !== 1 ? Number(arr.filter(nums => nums !== arr[0]).join("")) : arr[0];
}

console.log(ans([ 1, 0, 0 ]));
console.log(ans([ 0, 1, 0 ]));
console.log(ans([ 0, 0, 1 ]));
console.log(ans([ 1, 1, 1, 2, 1, 1 ]));
console.log(ans([ 1, 1, 2, 1, 1 ]));
console.log(ans([ 3, 10, 3, 3, 3  ]));