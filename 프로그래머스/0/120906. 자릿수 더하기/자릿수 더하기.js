function solution(n) {
    let answer = 0;
    n = n.toString();
    const splitN = n.split("");
    answer = splitN.reduce((acc, cur) => acc + +cur, 0);
    return answer;
}