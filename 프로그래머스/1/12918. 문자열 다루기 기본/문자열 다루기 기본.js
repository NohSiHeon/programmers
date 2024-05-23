function solution(s) {
    let answer = false;
    const numS = parseInt(s);
    
    // 문자열 s의 길이가 4 혹은 6 이고,
    // 정수로 변환한 numS 와 s의 값이 같은지 비교
    // 같으면 문자가 없다는 뜻, 같지 않으면 숫자
    if((s.length == 4 || s.length == 6) && numS == s){
        // if() 안이 true이면 answer = true
        answer = true;
        
        // 아니면 false
    } else {
        answer = false;
    }
    return answer;
}