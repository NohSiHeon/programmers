function solution(num_list, n) {
    let answer = [];    
    
    // n만큼을 한 인덱스에 넣기
    for(let i = 0; i < num_list.length / n; i++){
        // 해당 인덱스 빈 배열로 초기화
        answer[i] = [];
        
        // answer[i] 인덱스에 num_list의 요소 추가
        for(let j = 0; j < n; j++){
            answer[i].push(num_list[i * n + j]);
        }
    }
    return answer;
}