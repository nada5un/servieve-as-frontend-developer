function solution(numbers) {
    const result = [];
    for (i = 0; i < numbers.length - 1; i++) {
        console.log("=i :", numbers[i]);
        for (j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    const duplicatedNon = new Set(result);
    return [...duplicatedNon].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
