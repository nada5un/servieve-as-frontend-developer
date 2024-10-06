function solution(prices) {
    // 1. prices 의 길이 10만 => O(N)
    const n = prices.length;
    const answer = new Array(n).fill(0);

    const stack = [0];

    for (let i = 1; i < n; i++) {
        // 가격이 떨어지는 지점을 찾기
        while (
            stack.length > 0 &&
            prices[i] < prices[stack[stack.length - 1]]
        ) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = n - 1 - j;
    }

    return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
