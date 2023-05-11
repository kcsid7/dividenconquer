function sortedFrequency(arr, num) {
    // arr is sorted so we can use binary search
    const first = binaryS(arr, num, 0, arr.length - 1);
    if (first === -1) return -1;
    const last = binaryS(arr, num, 0, arr.length - 1, true);
    return last + 1 - first
}

function binaryS(arr, num, start, end, reverse=false) {
    if (start <= end) {
        let middle = Math.floor((1/2) * (start + end));
        if (!reverse) {
            if (arr[middle] === num && ((arr[middle - 1] < num) || (middle === 0))) {
                // If the midpoint of the array is the number and the number just to the left of it is smaller
            // Then in the sorted array we've found our first match
            return middle
            } else if ( arr[middle] < num) {
                // If the middle number is greater than the search num, then discard the right side and search from start to mid
                return binaryS(arr, num, middle + 1, end)
            } else {
                // If the middle number is less than the search num, then discard the left side and search from middle to end
                return binaryS(arr, num, start, middle - 1)
            }
        } else {
            if (arr[middle] === num && ((arr[middle + 1] > num) || (middle === arr.length - 1))) {
                // If the midpoint is the number, and the number just to the right is greater
                // Then in the sorted array we've found our last match
                return middle
            } else if ( arr[middle] > num) {
                // If the middle number is greater than the search num,then discard the right side and search from start to mid
                return binaryS(arr, num, start, middle - 1, true)
            } else {
                // If the middle number is less than the search num, then discard the left side and search from middle to end
                return binaryS(arr, num, middle + 1, end, true)
            }
        }
    }
    // If not found return -1
    return -1
}

module.exports = sortedFrequency