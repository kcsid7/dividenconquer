function countZeroes(arr) {
    const len = arr.length;
    const zero = binaryS(arr, 0, len - 1);
    if (zero === null ) return 0;
    return len - zero

}


function binaryS(arr, start, end) {
    while (start <= end) {
        let middle = Math.floor((1/2) * (start + end));
        if (arr[middle] === 0 && (arr[middle - 1] === 1 || middle === 0)) {
            // Check the midpoint value to see if it is 0 and the item before it is a 1. If so, we've found the beginning of the zeroes
            return middle
        } else if (arr[middle] === 1) {
            // If the midpoint value is 1, then we discard everything from the left and search from the middle + 1 value until the end
            // Finding the midpoint of that sub array again and checking if we've found a zero
            return binaryS(arr, middle + 1, end)
        } else {
        // If the midpoint value is a 0 and the item before it is not a 1, then that is not the start of the zeroes
        // Therefore discard everything from the right, and search from the start until the middle - 1 value, 
        // Find the midpoint of that subarray and check if we've found a zero
        return binaryS(arr, start, middle - 1)
        }
    }
    return null;
}

module.exports = countZeroes