function solution(s) {
    let answer = '';
    // split으로 각 문자를 요소 갖는 배열로 만듦
    // sort로 문자열 정렬: 기본 정렬 순서는 문자열의 유니코드 코드
    // reverse로 요소의 순서 뒤집기
    // join으로 각 요소를 합쳐서 문자열로 변환
    answer = s.split("").sort().reverse().join("");
    
    return answer;
}