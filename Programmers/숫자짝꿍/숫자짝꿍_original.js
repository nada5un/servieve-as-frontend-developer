function solution(X, Y) {
    const small = Number(X) < Number(Y) ? X : Y;

    const big = X == small ? Y : X;

    const bigArray = big.split("");

    // 1. 두 수의 공통 정수 찾기
    var equals = [];

    if (X == Y) {
        return X;
    }

    for (let i of small) {
        const index = bigArray.indexOf(i);
        if (index !== -1) {
            equals.push(i);
            bigArray.splice(index, 1);
        }
    }

    // 2. 가장 큰 정수 찾기

    if (equals.length < 1) {
        return "-1";
    }

    // 내림차순 정렬
    equals.sort().reverse();

    if (equals[0] < 1) {
        return "0";
    }

    const equalNum = Number(equals.join(""));

    if (equalNum > Number(small)) {
        return equalNum.slice(0, equalNum.length - 1);
    }

    return equalNum.toString();
}

// console.log("result:", solution("100", "2345"));

// console.log("result:", solution("100", "203045"));

// console.log("result:", solution("100", "123450"));

// console.log("result:", solution("12321", "42531"));
