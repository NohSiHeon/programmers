function solution(n) {
    // x를 1로 시작
    let x = 1;
    // i를 x값으로 시작해서 n 전 까지 반복
    for(let i = x; i < n; i++){
        // n 을 i 로 나누었을 때 나머지 값이 1일 경우
        if(n % i == 1){
            // x 값에 i를 할당하고, 반복문 종료
            x = i;
            break;
        }
    }
    return x;
}