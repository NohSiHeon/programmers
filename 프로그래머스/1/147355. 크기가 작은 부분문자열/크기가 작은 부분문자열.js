function solution(t, p) {
    let answer = 0;
    // p의 길이
    const lOP = p.length;

    // 인덱스 0부터 인덱스 t의길이 - p의길이 이하까지 반복해야 t문자열 끝까지 접근 가능
    for(let i = 0; i <= t.length - lOP; i++){
        // 자른 문자열이 p보다 작을 경우
        if(+t.substring(i, i + lOP) <= +p){
            answer++;
        }
    }
    
    return answer;
}