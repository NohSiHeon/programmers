function solution(num, k) {
    let answer = 0;
    num = num.toString();
    answer = num.includes(k) ? num.indexOf(k) + 1 : -1;
    return answer;
}