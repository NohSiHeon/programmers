function solution(a, b, n) {
    let answer = 0;
    
    // 반납할 수 있는 빈병 n개
    // 빈 병을 반납 했을 때 1병 돌려받을 수 있는 최소 기준 a개
    while(n / a >= 1){
        
        // 돌려받은 개수 누적
        // n / a 값이 1이면 1 * b, 2이면 2 * b
        // b 는 한번 반납했을 때 돌려받을 수 있는 콜라 병의 수
        answer += Math.floor(n / a) * b;
        // 반납 하고 나서도 다시 반납할 수 있는 병의 수
        n = Math.floor(n / a) * b + n % a;
    }
    return answer;
}