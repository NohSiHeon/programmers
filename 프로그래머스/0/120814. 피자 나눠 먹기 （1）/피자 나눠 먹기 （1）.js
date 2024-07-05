function solution(n) {
    let answer = 0;
    answer = Math.floor(n / 7) <= 1 ? 1 : Math.floor(n % 7) === 0 ? n / 7 : Math.floor(n / 7) + 1;
    return answer;
}