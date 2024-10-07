function solution(board, moves) {
    // answer : 두개 쌓여서 사라진 인형의 갯수

    // 1. stack 구현
    const c = board[0].length;

    const stackArr = [];

    const moveArr = [];

    let answer = 0;

    // 0, 1, 2, 3, 4
    for (let i = 0; i < c; i++) {
        const arr = [];
        for (let j = c - 1; j > -1; j--) {
            const item = board[j][i];
            if (item > 0) {
                arr.push(item);
            }
        }
        stackArr.push(arr);
    }

    // 2. moves 구현
    for (const move of moves) {
        const index = move - 1;
        // console.log("stackArr:", stackArr);
        // console.log("moveArr:", moveArr);

        // 비어 있다면
        if (stackArr[index].length <= 0) {
            continue;
        }

        const poped = stackArr[index].pop();

        // top == poped
        if (moveArr.length > 0 && poped == moveArr[moveArr.length - 1]) {
            moveArr.pop();
            answer += 2;
        } else {
            moveArr.push(poped);
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);
