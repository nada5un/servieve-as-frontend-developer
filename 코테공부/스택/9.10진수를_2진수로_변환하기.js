function solution(decimal) {
    const stack = [];
    let answer = "";

    while (decimal > 0) {
        const remain = decimal % 2;
        stack.push(remain);
        decimal = Math.floor(decimal / 2);
    }

    while (stack.length > 0) {
        const poped = stack.pop();
        answer += poped;
    }

    return answer;
}

console.log(solution(13));
console.log(solution(27));
