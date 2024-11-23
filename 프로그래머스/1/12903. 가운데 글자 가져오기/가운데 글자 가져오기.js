function solution(s) {
    let answer = '';
    s = s.split("");

    // 길이가 짝수일 경우
    if(s.length % 2 == 0){
        answer = s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)];
    // 길이가 홀수인 경우
    } else {
        answer = s[Math.floor(s.length / 2)];
    }
    return answer;
}