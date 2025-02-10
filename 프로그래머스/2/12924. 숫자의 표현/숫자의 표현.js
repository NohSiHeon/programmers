function solution(n) {
    let answer = 0; // 연속된 자연수의 합으로 n을 만들 수 있는 경우의 수
    let sum = 0;    // 누적 합을 저장할 변수
    
    for(let i = 1; i <= n; i++){
        sum = 0;    // 새로운 시작 숫자에서 누적 합 초기화
        
        // 연속된 숫자를 더해가며 n과 비교
        for(let num = i; num <= n; num++){
            sum += num; // 현재 숫자를 누적
            
            // 합산 값이 n과 같을 경우
            if(sum == n){
                answer++;   // 경우의 수 증가
                break;      // 현재 값은 일치했기 때문에 현재 반복문에서 빠져나가고, 다음 반복 수행
            // 합산 값이 n보다 클 경우
            } else if (sum > n){
                break;  // 더 이상 합산은 의미가 없기 때문에 현재 반복문에서 빠져나가고, 다음 반복 수행
            }
        }
    }
    return answer;
}