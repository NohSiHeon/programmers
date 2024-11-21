function solution(seoul) {
    let answer = '';
    // 값이 Kim인 요소의 인덱스 값 구하기
    const IOK = seoul.indexOf("Kim");
    answer = `김서방은 ${IOK}에 있다`
    return answer;
}