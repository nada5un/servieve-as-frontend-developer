function solution(nums) {
    // n^2
    // return 최대 포켓몬 종류 개수
    // 중복 제거 : set ?

    // nums/2 골라야함

    // 종류별 갯수 맵

    const count = nums.length / 2;

    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        map.set(value, (map[value] || 0) + 1);
    }

    if (map.size > count) {
        return count;
    }

    return map.size;
}
