function solution(t, p) { 
    let answer = 0;
    
    // 반복할 횟수 지정
    // t와 p의 길이 차이만큼 반복하면 마지막 인덱스 도달까지 딱 맞게 반복할 수 있다.
    for(let i = 0; i <= t.length - p.length; i++){
        
        // substr(i, p.length): 문자열 자르기, 즉, i인덱스부터 p의 길이만큼 자른다.
        // i값이 증가되면서 자를 인덱스 위치 변경
        // substr(i, p.length) : 시작 위치, 길이(개수)
        let num = t.substr(i, p.length);
        
        // 값 비교 후 증가 또는 유지
        answer += num <= p ? 1 : 0;
    }

    return answer;
}