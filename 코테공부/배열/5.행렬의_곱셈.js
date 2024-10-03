function solution(arr1, arr2) {
    const r1 = arr1.length;
    const r2 = arr2.length;
    const c1 = arr1[0].length;
    const c2 = arr2[0].length;

    var answer = [...new Array(r1)].map((_) => new Array(c2).fill(0));

    console.log("answer:", answer);
    // 행렬의 크기: r1 X c2

    console.log("r1:", r1, "c2:", c2);

    for (i = 0; i < r1; i++) {
        for (j = 0; j < c2; j++) {
            answer[i][j] = arr1[i][j] * arr2[j][j] + arr1[i][j] * arr2[j][j];
            console.log("i:", i, "j:", j);
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [1, 4],
            [3, 2],
            [4, 1],
        ],
        [
            [3, 3],
            [3, 3],
        ]
    )
);
