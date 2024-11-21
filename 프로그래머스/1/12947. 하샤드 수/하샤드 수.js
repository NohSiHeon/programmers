function solution(x) {
    let answer = true;
    // 1. 숫자 x를 문자열로 변환
    // 2. 문자열을 구성하는 문자들을 요소로 갖는 배열로 변환
    // 3. 각 요소들을 숫자로 변환하여 총 합을 할당
    const totalSumSplitX = String(x).split("").reduce((acc, cur) => acc + +cur, 0);
    // x를 자릿수의 합으로 나누었을 때 나누어 떨어지면 true, 아니면 false 할당
    answer = x % totalSumSplitX == 0 ? true : false;
    
    return answer;
}