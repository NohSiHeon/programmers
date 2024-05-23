function solution(s) {
    let answer = false;
    const numS = parseInt(s);
    
    // 문자열 s의 길이가 4 혹은 6 이고, 숫자로만 구성돼있는지 확인
    if((s.length == 4 || s.length == 6) && numS == s){
        // if() 안이 true이면 answer = true
        answer = true;
        // 아니면 false
    } else {
        answer = false;
    }
    return answer;
}