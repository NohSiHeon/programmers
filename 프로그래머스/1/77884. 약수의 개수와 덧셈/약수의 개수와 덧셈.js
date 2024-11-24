function solution(left, right) {
    let answer = 0;
    let divisor = 0;

    // left부터 right까지 1씩 증가
    for(let i = left; i <= right; i++){
        divisor = 0;
        // j 값을 1부터 나누어질 수까지 1씩 증가
        for(let j = 1; j <= i; j++){
            // 약수일 경우 약수의 개수 증가
            if(i % j == 0){
                divisor++;
            }
        }
        // 약수의 개수가 짝수이면 덧셈, 아니면 뺄셈 
        answer += divisor % 2 == 0 ? i : -i;
    }
    return answer;
}