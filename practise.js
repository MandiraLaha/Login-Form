let arr = [16, 17, 4, 3, 5, 2];
let n = 6;
let result = [];
let max = arr[n - 1];
console.log(max);
for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
        max = arr[i];
        result.push(max);

    }
}
console.log(result.reverse());

