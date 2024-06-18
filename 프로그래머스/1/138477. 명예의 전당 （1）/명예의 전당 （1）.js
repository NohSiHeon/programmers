function solution(k, score) {
    let answer = [];
    // 명예의 전당 목록
    let minValue = [];
    
    // score 길이(7일) 만큼 반복
    for(let i = 0; i < score.length; i++){
        
        // 3일까지는 그냥 값 넣기
        if(minValue.length < k){
            minValue.push(score[i]);
            answer.push(Math.min(...minValue));
            
        // 명예의 전당 목록 점수 중 가장 낮은 점수와 score[i] 비교
        // score[i]가 더 크면 가장 낮은 값 빼고 score[i] 값 추가
        } else if (Math.min(...minValue) < score[i]){
            // 명예의 전당 배열 오름차순 정렬
            minValue.sort((a, b) => a - b);
            // 명예의 전당 배열에 제일 앞 요소 빼기
            minValue.shift();
            // 명예의 전당 배열에 score[i] 값 넣기
            minValue.push(score[i]);
            // answer 배열에 명예의 전당 배열값 중 가장 낮은 요소 값 넣기
            answer.push(Math.min(...minValue));
        // 위 경우가 다 false 인 경우()
        } else {
            // answer 배열에 명예의 전당 배열 값 중 가장 낮은 요소 값 넣기
            answer.push(Math.min(...minValue));
        }
    }
    return answer;
    
}