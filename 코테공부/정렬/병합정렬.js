function mergeSort(arr) {
    // 원소가 하나만 남을때까지 재귀적으로 정렬, 병합
    if (arr.length <= 1) {
        return arr;
    }

    // 버림
    const mid = Math.floor(arr.length / 2);
    // 반씩 정렬
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        // 왼쪽이 더 작음
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // slice(index) : index 부터 끝까지 새로운 배열 return

    // 남아있는 요소 붙이기
    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
