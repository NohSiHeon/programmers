function solution(number, limit, power) {
    let answer = 0; // 최종 결과를 저장할 변수
    let num = 0;    // 현재 숫자를 저장할 변수
    let cd = [];    // 각 숫자의 약수 개수를 저장할 배열
    let cnt = 0;    // 약수의 개수를 계산하기 위한 변수
    
    // 1부터 number까지 반복
    for(let i = 1; i <= number; i++){
        num = i;    // 현재 숫자 설정
        if(num == 1) {  // 숫자가 1일 경우
            cd.push(1); // 1의 약수는 자기 자신 하나이므로 1을 배열에 추가
        } else {
            // 1부터 현재 숫자의 제곱근까지 약수 여부를 확인
            for(let j = 1; j * j <= num; j++){
                if(num % j == 0){   // j가 num의 약수인지 확인
                    cnt += 2;  // 약수 쌍(j와 num / j)을 카운트
                }
                if(j * j == num) cnt--; // 제곱수일 경우 중복 제거
            }
            cd.push(cnt);   // 약수 개수를 배열에 추가
            cnt = 0;    // 다음 숫자의 약수 개수를 위해 카운트를 초기화
        }
    }
    // 약수 개수 배열을 순회하며 결과 계산
    // 약수 개수가 limit 이하면 그대로 더하고, 초과하면 power를 더함
    answer = cd.reduce((acc, cur) => cur <= limit ? acc + cur : acc + power, 0)
    
    return answer;
}