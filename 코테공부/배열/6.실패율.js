function solution(N, stages) {
    // 전체 스테이지 갯수 N

    // 사용자가 멈춰 있는 스테이지 번호 stages

    // stages : 20만개 => n2 불가

    // 1. 스테이지 별 사용자 개수 세기

    // n+1 개 만큼 user 존재
    // stageUsers : 스테이지별 잔존 유저
    // 스테이지별 도전 중인 유저
    var stageUsers = new Array(N + 1).fill(0);
    var stageTryUsers = new Array(N + 1).fill(0);
    var stageFailPercents = Array.from({ length: N + 1 }, (_, i) => ({
        stage: i + 1,
        percent: 0,
    }));

    for (user of stages) {
        stageUsers[user - 1] += 1;
    }

    stageTryUsers[N] = stageUsers[N];

    // 거꾸로
    for (let i = stageUsers.length - 2; i > -1; i--) {
        stageTryUsers[i] = stageTryUsers[i + 1] + stageUsers[i];
    }

    for (let i = 0; i < N; i++) {
        stageFailPercents[i].percent = stageUsers[i] / stageTryUsers[i];
    }

    stageFailPercents.sort((a, b) => b.percent - a.percent);

    return stageFailPercents.filter((a) => a.stage <= N).map((_) => _.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
