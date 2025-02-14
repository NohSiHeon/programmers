function solution(people, limit) {
    let answer = 0;
    // 무게 오름차순 정렬
    people.sort((a, b) => a - b);
    // 두 포인터 초기화: left는 가장 가벼운 사람, right는 가장 무거운 사람
    let left = 0;
    let right = people.length - 1;
    
    // 포인터가 교차할 때까지 반복
    while(left <= right){
        // 가장 가벼운 사람과 가장 무거운 사람의 무게 합이 limit 이하인지 확인
        if(people[left] + people[right] <= limit){
            // 두 명이 함께 보트에 탈 수 있으면, 가벼운 사람도 태웠으므로 left 포인터 이동
            left++;
        }
        // 무거운 사람은 무조건 보트에 태우므로 right 포인터 이동
        right--;
        
        // 보트를 하나 사용했으므로 카운트 증가
        answer++;
    }

    return answer;
}