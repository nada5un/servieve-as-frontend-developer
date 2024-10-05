function solution(s) {
    const stack = [];
    const waiting = [];

    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        stack.push(item);
    }

    // stack 에 있는걸 다 뺄 때 까지
    while (stack.length > 0) {
        const poped = stack.pop();
        // ) 라면, ( 를 찾을때까지
        if (poped == ")") {
            waiting.push(")");
        }
        // ( 라면
        else {
            const waitingPoped = waiting.pop();
            if (!waitingPoped) {
                return false;
            }
        }
    }
    return true;
}

console.log(solution("(())()")); // 반환값 : true
console.log(solution("((())()")); // 반환값 : false
