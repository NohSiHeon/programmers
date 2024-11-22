function solution(num) {
    let answer = 0;
    
    while(num !== 1){
        // 해당 반복을 500번 했을 경우
        if(answer == 500){
            answer = -1;
            break;
        }
        // 짝수인 경우
        if(num % 2 == 0){
            num = num / 2;
        // 홀수인 경우
        } else {
            num = num * 3 + 1;
        }
        answer++;
    }
    
    return answer;
}