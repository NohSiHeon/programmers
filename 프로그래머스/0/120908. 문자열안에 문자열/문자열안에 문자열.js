function solution(str1, str2) {
    let answer = 0;
    answer = str1.includes(str2) ? 1 : 2;
    return answer;
}