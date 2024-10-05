function heapify(arr, length, rootIndex) {
    let largest = rootIndex;
    let left = 2 * rootIndex + 1;
    let right = 2 * rootIndex + 2;

    if (left < length && arr[left] > arr[right]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== rootIndex) {
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr, length, largest);
    }
}

function heapSort(arr) {
    const length = arr.length;

    // 배열을 힙으로 변환
    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(heapSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
