function solution(s) {
    const stack = [];
    for (item of s) {
        // (
        if (item == "(") {
            stack.push("(");
        }
        // )
        else {
            // ( 가 없다면
            if (stack.length == 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

console.log(solution("(())()")); // 반환값 : true
console.log(solution("((())()")); // 반환값 : false
