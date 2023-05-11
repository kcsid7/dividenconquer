function findRotatedIndex(arr, num) {
    // Sorted rotated array
    // Need to find the index where the order goes from larger num to smaller num
    const rotatedIdx = rotatedIndex(arr);
    if (num >= arr[0] && num <= arr[rotatedIdx - 1] && rotatedIdx > 0) {
        return binaryS(arr, num, 0, rotatedIdx - 1)
    } else {
        return binaryS(arr, num, rotatedIdx);
    }
}


const binaryS = (arr, num, start = 0, end = arr.length - 1) => {
    if (arr.length === 0 || num < arr[start] || num > arr[end]) return -1

    while (start <= end ) {
        const middle = Math.floor((1/2) * (start + end));
        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] > num) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1
}

function rotatedIndex(arr, start=0, end=arr.length - 1) {
    if (arr.length === 1 || arr[start] < arr[end]) return 0

    while (start <= end) {
        const middle = Math.floor((1/2) * (start + end));
        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        } else if (arr[middle] >= arr[start]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
}

module.exports = findRotatedIndex