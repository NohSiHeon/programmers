function solution(num, total) {
    let answer = [];
    

    // 첫 번째 값 구하기
    // 1. total을 num으로 나눈 몫은 수열의 중간값에 해당하는 값 = Math.floor(total / num)
    // 2. num이 홀수일 경우 중간값이 중앙 숫자가 되고, num이 짝수일 경우 중간 두 숫자 사이의 값
    // 3. 중간값을 기준으로 연속된 수열이 시작될 첫 숫자는 중간값 - (num - 1) / 2 으로 계산
    const start = Math.floor(total / num) - Math.floor((num -1) / 2);
    
    // answer 배열에 start + i 값을 num 만큼 반복해서 추가
    for(let i = 0; i < num; i++){
        answer.push(start + i);
    }
    return answer;
}