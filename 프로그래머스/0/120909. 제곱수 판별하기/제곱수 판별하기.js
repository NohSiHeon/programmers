function solution(n) {
    let answer = 0;
    answer = Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
    return answer;
}