function solution(n) {
    let answer = 0;
    // 1부터 n까지 반복
    for(let i = 1; i <= n; i++){
        // n을 i로 나누었을 때 나머지가 0이면 약수 이므로 answer에 i 누적
        answer += n % i == 0 ? i : 0;
    }
    return answer;
}