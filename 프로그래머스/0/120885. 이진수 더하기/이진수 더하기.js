function solution(bin1, bin2) {
    let answer = '';
    answer = parseInt(parseInt(bin1, 2) + parseInt(bin2, 2), 10).toString(2);
    return answer;
}