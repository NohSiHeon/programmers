function solution(n) {
    let answer = [];
    // 숫자 n을 문자열로 변환 후, 문자열을 구성하는 각 문자들을 요소로 갖는 배열로 변환 후, 배열 순서 반전
    n = ("" + n).split("").reverse();
    
    // 각 요소를 숫자로 변환하여 answer에 추가
    n.map(x => answer.push(+x));
    
    return answer;
}