function solution(a, b, n) {
    let answer = 0;

    // a: 콜라를 받기 위한 최소 빈 병 개수
    // b: 교환할 때 받는 콜라 병 개수
    // n: 현재 가지고 있는 빈 병 개수
    while(n >= a){
        // 현재 가지고 있는 빈 병으로 받을 수 있는 콜라 병 개수
        answer += Math.floor(n / a) * b;
        // 새로운 빈 병 개수 계산 (남은 병 + 받은 콜라 병 개수)
        n = Math.floor(n % a) + Math.floor(n / a) * b;
        
    }
    return answer;
}