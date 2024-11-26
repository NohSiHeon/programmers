function solution(n) {
    let answer = 0;
    // 3진수로 변환
    n = n.toString(3);
    
    // 순서 뒤집기
    n = n.split("").reverse().join("");
    
    // 3진수를 10진수로 변환
    answer = parseInt(n, 3);
    
    return answer;
}