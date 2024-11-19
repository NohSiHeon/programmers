function solution(n) {
    let answer = 0;
    // 숫자를 문자열로 변환
    n = n + "";
    
    // 문자열의 각 문자를 숫자로 변환하여 answer에 누적
    for(let i = 0; i < n.length; i++){
        answer += +n[i];
    }
    return answer;
}