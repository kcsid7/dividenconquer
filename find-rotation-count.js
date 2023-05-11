function findRotationCount(arr, start = 0, end = arr.length - 1) {
    // array of distinct numbers sorted in increasing order
    // array has been rotated counter-clockwise n number of times
    // find the value of n
    if (start > end) return 0;
    if (start === end ) return 0;

    const middle = Math.floor((1/2) * (start + end));

    if ((arr[middle] > arr[middle + 1]) && (end > middle)) return middle + 1;

    if ((arr[middle] < arr[middle - 1]) && (start < middle)) return middle;

    if (arr[middle] > arr[end]) {
        return findRotationCount(arr, middle + 1, end);
    } else {
        return findRotationCount(arr, start, middle - 1);
    }

}

module.exports = findRotationCount