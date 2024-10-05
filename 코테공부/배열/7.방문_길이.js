function move(dir, arr, index) {
    // U,D,R,L
    const dirArr = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    let x = 0;
    let y = 0;

    const prevValue = index > 0 ? arr[index - 1] : [0, 0];

    switch (dir) {
        case "U":
            x = prevValue[0];
            y = prevValue[1] + 1;
            break;
        case "D":
            x = prevValue[0];
            y = prevValue[1] - 1;
            break;
        case "R":
            x = prevValue[0] + 1;
            y = prevValue[1];
            break;
        case "L":
            x = prevValue[0] - 1;
            y = prevValue[1];
            break;
    }

    if (Math.abs(x) > 5 || Math.abs(y) > 5) {
        arr[index] = arr[index - 1];
        return;
    }

    //x,y
    arr[index][0] = x;
    arr[index][1] = y;

    //dx, dy
    arr[index][2] = x - prevValue[0];
    arr[index][3] = y - prevValue[1];
}

function solution(dirs) {
    // U,D,R,L
    const dirArr = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const arr = new Array(4).fill(0);

    const pathArr = [...new Array(dirs.length)].map((_) =>
        new Array(4).fill(0)
    );

    // 배열의 길이 500 : n2 까지 가능
    // 처음 걸어 본 길인지를 어떻게 알지?

    for (let i = 0; i < dirs.length; i++) {
        move(dirs[i], pathArr, i);
    }

    console.log("pathArr:", pathArr);
    const uniquePathArr = [
        ...new Map(pathArr.map((item) => [item.toString(), item])).values(),
    ];

    return uniquePathArr.length;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
