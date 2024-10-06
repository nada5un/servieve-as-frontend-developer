function solution(s) {
    // 문자열의 길이 10^6 => O(N)
    const stack = [];

    for (const item of s) {
        const top = stack[stack.length - 1];
        // console.log("top:", top, "item:", item);
        if (top == item) {
            stack.pop();
        }
        // top!=item
        else {
            stack.push(item);
        }
    }

    if (stack.length == 0) {
        return 1;
    } else return 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
