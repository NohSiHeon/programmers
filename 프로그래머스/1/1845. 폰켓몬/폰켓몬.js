function solution(nums) {
    let answer = 0;
    // 중복된 값을 허용하지 않는 Set 객체 사용
    const set = new Set();
    
    // nums 배열의 각 요소를 Set에 추가 (중복된 값은 자동으로 제거됨)
    for(const num of nums){
        set.add(num);
    }
    // 선택할 수 있는 폰켓몬의 최대 종류 수는 nums.length / 2
    // 중복 제거 후 폰켓몬의 실제 종류 수(set.size)와 비교하여 더 작은 값을 선택
    answer = nums.length / 2 >= set.size ? set.size : nums.length / 2;
    
    return answer;
}