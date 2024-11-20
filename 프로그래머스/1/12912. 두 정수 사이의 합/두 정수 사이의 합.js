function solution(a, b) {
    let answer = 0;
    // a와 b가 같은 경우
    if(a == b){
        return a;
    // a가 b보다 작을 경우
    } else if(a < b){
        // i값을 a로 시작하여 b가 될때까지 반복
        for(let i = a; i <= b; i++){
            // i 값을 answer에 누적
            answer += i;
        }
    // b가 a보다 작을 경우
    } else {
        // i값을 b로 시작하여 a가 될때까지 반복
        for(let i = b; i <= a; i++){
            // i값을 answer에 누적
            answer += i;
        }
    }
    return answer;
}