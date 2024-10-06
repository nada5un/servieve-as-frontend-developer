function solution(prices) {
    // 1. prices 의 길이 10만 => O(N)
    const stack = [];
    var answer = [];
    // 최근 것만 비교하면 될 것 같은데
    for (let i = 0; i < prices.length; i++) {
        const item = prices[i];
        const prev = i < 0 ? prices[i - 1] : 0;

        stack.push(item);
    }

    console.log("stack:", stack);
    return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
