function solution(numbers) {
    const sum = numbers.reduce((a, b) => a + b);
    let answer = sum / numbers.length;
    return answer.toFixed(1);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
