function findFloor(arr, x, start = 0, end = arr.length - 1) {
    // arr = sorted (binary search)
    // floor of x is the largest element in the array which is smaller than or equal to x
    // if floor does not exist return -1
    const middle = Math.floor((1/2) * (start + end));
    
    if (end < start) return -1;
    
    if (x >= arr[end]) return arr[end];

    if (x === arr[middle]) return arr[middle];

    if (x >= arr[middle - 1] && x < arr[middle] && middle > 0) return arr[middle - 1]

    if (x < arr[middle]) return findFloor(arr, x, start, middle - 1);

    return findFloor(arr, x, middle + 1, end);
  
}

module.exports = findFloor