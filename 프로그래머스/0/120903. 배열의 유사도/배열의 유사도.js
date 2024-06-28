function solution(s1, s2) {
    let answer = 0;
    
    // s1 배열의 각 요소를 한번씩 순회
    // s2 배열에 요소값이 포함되면 answer 값을 1 증가, 포함되지 않으면 0 증가
    s1.forEach((e) => {
       answer += s2.includes(e) ? 1 : 0;
    });
    
    return answer;
}