function solution(n, left, right) {
    // 1. 2차원 배열 만들기
    var answer = [];

    // for 문 한번만 써야함
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;

        answer.push(Math.max(row, col) + 1);
    }

    return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
console.log(solution(4, 4, 6));
