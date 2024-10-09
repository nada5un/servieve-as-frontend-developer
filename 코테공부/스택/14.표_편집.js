function insertClosest(arr, num, index) {
    // 이진 탐색을 통해 num이 들어갈 위치 찾기
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // 이제 left가 num이 들어가야 할 위치를 나타냄
    // 인덱스 3보다 가까운지 확인하고, 가장 가까운 위치에 삽입
    if (Math.abs(left - index) < Math.abs(left - 1 - index)) {
        arr.splice(left, 0, num); // 왼쪽이 더 가까우면 left에 삽입
    } else {
        arr.splice(left - 1, 0, num); // 아니면 left-1에 삽입
    }

    return arr;
}

function solution(n, k, cmd) {
    var answer = "";
    const deletedStack = []; // 삭제된 행의 인덱스 저장
    let arr = []; // 현재 존재하는 행의 인덱스 저장

    // n: 행의 개수
    // k : 시작 index

    let currIndex = k;

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    for (c of cmd) {
        // cmd 나누기
        const arrow = c.split(" ");

        switch (arrow[0]) {
            case "U":
                // console.log("up", arrow[1], currIndex - Number(arrow[1]));
                currIndex = Math.max(0, currIndex - Number(arrow[1]));
                break;
            case "D":
                // console.log("down", arrow[1], currIndex + Number(arrow[1]));
                currIndex = Math.min(
                    arr.length - 1,
                    currIndex + Number(arrow[1])
                );
                break;
            // 삭제하고 바로 아래로
            // 만약 삭제된 행이 가장 마지막이라면 위로
            case "C":
                const isLast = currIndex == arr.length - 1;
                const remove = arr[currIndex];

                deletedStack.push(remove);
                arr.splice(currIndex, 1);
                // 마지막인 경우
                if (isLast) {
                    currIndex = Math.max(0, currIndex - 1);
                }
                break;
            // 복구
            case "Z":
                // 가장 최근에 삭제한 행
                const lastRemoved = deletedStack.pop();
                // 가장 최근에 삭제한 행 복귀
                insertClosest(arr, lastRemoved, lastRemoved);
                // // 현재 행보다 앞이라면, 1증가
                if (lastRemoved < currIndex) {
                    currIndex = Math.min(arr.length - 1, currIndex + 1);
                }
                break;
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr.includes(i)) {
            answer += "O";
        } else {
            answer += "X";
        }
    }

    return answer;
}
console.log(
    solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
