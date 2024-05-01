function solution(n) {
    let answer = 0
    let x = Math.sqrt(n);
    answer = x === parseInt(x) ? (x + 1)**2 : -1;
    
    return answer;
}