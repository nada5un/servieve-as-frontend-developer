function solution(num_list) {
    var answer = [];
    for (let i = num_list.length - 1; i >= 0; i--) {
        const item = num_list[i];
        answer.push(item);
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
