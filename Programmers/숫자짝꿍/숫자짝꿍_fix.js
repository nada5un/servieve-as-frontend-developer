// 이 문제에서 얻어가야 할 것

// 기본적인 split, join, slice, splice 등의 사용법

// 추가 기법 해시맵 : {}, Map()

// 이런 문제에서 떠올려야 할 것 : 숫자의 빈도를 세자

// get(), set()

function solution(X, Y) {
    let countX = {};
    let countY = {};

    // 1. 각 숫자 별 숫자 출현 횟수 구하기
    for (i of X) {
        countX[i] = (countX[i] | 0) + 1;
    }

    for (i of Y) {
        countY[i] = (countY[i] | 0) + 1;
    }

    // 2. 공통 숫자 구하기

    let pairs = [];

    // key
    for (let i in countX) {
        // Y 에 없다면
        if (countY[i] == undefined) {
            continue;
        }
        const count = Math.min(countX[i], countY[i]);

        for (let j = 0; j < count; j++) {
            pairs.push(i);
        }
    }

    if (pairs.length < 1) {
        return "-1";
    }

    const pairSorted = pairs.sort().reverse();

    if (pairSorted[0] < 1) {
        return "0";
    }

    const pairNumber = pairSorted.join("");

    return pairNumber.toString();
}
