function solution(n) {
    let answer = '';
    
    // 길이가 n 이므로 n 만큼 반복
    for(let i = 0; i < n; i++){
        // i 를 2로 나누었을때 나머지값이 0 이라는 뜻은 0 또는 짝수라는 것을 의미
        // 0부터 시작하므로 '수'로 시작
        
        if(i % 2 == 0){
            answer += '수';
        } else {
            // i 를 2로 나누었을때 나머지값이 0이 아니면 짝수 아닌 홀수를 의미
            // 예) 1, 3, 5, 7, 9
            // 수 다음에는 '박'이 나올 수 밖에 없음
            answer += '박';  
        }
    }
    return answer;
}