function stackFunction(newStr, stack) {
    const pair1 = ["[", "]"];
    const pair2 = ["(", ")"];
    const pair3 = ["{", "}"];

    for (let str of newStr) {
        // console.log("stack:", stack, "str:", str);

        // 여는 문자
        if (str == pair1[0] || str == pair2[0] || str == pair3[0]) {
            stack.push(str);
        }
        // 닫는 문자
        else {
            if (stack.length <= 0) {
                return false;
            }
            const poped = stack.pop();
            // console.log("poped:", poped);
            switch (poped) {
                case pair1[0]:
                    if (str != pair1[1]) {
                        return false;
                    }
                    break;
                case pair2[0]:
                    if (str != pair2[1]) {
                        return false;
                    }
                    break;
                case pair3[0]:
                    if (str != pair3[1]) {
                        return false;
                    }
                    break;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}

function solution(s) {
    // s: 1000 이하 n^2 가능
    var stackArr = new Array(s.length).fill([]);

    // console.log("stackArr:", stackArr);

    let count = 0;
    // 1.X <= s 만큼 arr 만들기
    for (let i = 0; i < s.length; i++) {
        const newStr = s.slice(i).concat(s.slice(0, i));
        const result = stackFunction(newStr, stackArr[i]);
        if (result) {
            count += 1;
        }
        // console.log("result:", result);
    }

    return count;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
console.log(solution("(){{"));
