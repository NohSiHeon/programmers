function solution(numbers, hand) {
    let answer = '';
    const keypad = {
      1: [0, 0], 2: [1, 0], 3: [2, 0],
      4: [0, 1], 5: [1, 1], 6: [2, 1],
      7: [0, 2], 8: [1, 2], 9: [2, 2],
      '*': [0, 3], 0: [1, 3], '#': [2, 3]
    };
    let leftPos = '*';  // 왼손의 초기 위치
    let rightPos = '#'; // 오른손의 초기 위치
    let leftDistance = 0;   // 왼손과 목표 키패드의 거리
    let rightDistance = 0;  // 오른손과 목표 키패드의 거리
    
    // numbers 배열을 순회하며 각 순자를 처리
    numbers.forEach((number) => {
        
        // 1, 4, 7은 무조건 왼손으로 누름
        if(number == 1 || number == 4 || number == 7){
            answer += 'L';
            leftPos = number;   // 왼손 위치를 현재 숫자로 업데이트
        // 3, 6, 9는 무조건 오른손으로 누름
        } else if(number == 3 || number == 6 || number == 9){
            answer += 'R';
            rightPos = number;  // 오른손 위치를 현재 숫자로 업데이트
            
        // 2, 5, 8, 0은 가까운 손으로 선택하거나, 거리가 같으면 주 손(hand)을 기준으로 선택
        } else {
            // 현재 숫자와 왼손 위치 간의 거리 계산
            leftDistance =
                Math.abs(keypad[number][0] - keypad[leftPos][0]) + Math.abs(keypad[number][1] - keypad[leftPos][1]);
            
             // 현재 숫자와 오른손 위치 간의 거리 계산
            rightDistance =
                Math.abs(keypad[number][0] - keypad[rightPos][0]) + Math.abs(keypad[number][1] - keypad[rightPos][1]);
            
            // 오른손이 더 가깝거나, 거리가 같을 때 주 손이 오른손일 경우
            if(leftDistance > rightDistance || leftDistance == rightDistance && hand === 'right'){
                answer += 'R';
                rightPos = number;  // 오른손 위치를 현재 숫자로 업데이트
            // 왼손이 더 가깝거나, 거리가 같을 때 주 손이 왼손일 경우
            } else if (leftDistance < rightDistance || leftDistance == rightDistance && hand === 'left'){
                answer += 'L';
                leftPos = number;   // 왼손 위치를 현재 숫자로 업데이트
            } 
        }
    });
    return answer;
}