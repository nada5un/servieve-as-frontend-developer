function solution(answers) {
    var scores = [
        { id: 1, score: 0 },
        { id: 2, score: 0 },
        { id: 3, score: 0 },
    ];
    // 1번 수포자 (5개)
    const arr1 = [1, 2, 3, 4, 5];
    // 2번 수포자 (8개)
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    // 3번 수포자 (10개)
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for (i = 0; i < answers.length; i++) {
        const answer1 = arr1[i % 5];
        const answer2 = arr2[i % 8];
        const answer3 = arr3[i % 10];

        if (answers[i] == answer1) {
            scores[0].score += 1;
        }

        if (answers[i] == answer2) {
            scores[1].score += 1;
        }

        if (answers[i] == answer3) {
            scores[2].score += 1;
        }
    }

    scores.sort((a, b) => b.score - a.score);
    const maxScore = scores[0].score;
    return scores.filter((score) => score.score == maxScore).map((_) => _.id);
}
console.log(
    solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
);
console.log(solution([1, 3, 2, 4, 2]));
