function solution(n) {
    let answer = 0;
    // 1. n을 문자열로 변환
    // 2. 문자열을 구성하는 각 문자를 요소로 갖는 배열로 변환
    // 3. 내림차순 정렬
    // 4. 각 요소를 문자열로 합침
    // 5. 숫자로 변환
    answer = Number(("" + n).split("").sort((a, b) => b - a).join(""));
    return answer;
}