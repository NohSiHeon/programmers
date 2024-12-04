function solution(k, score) {
    let answer = [];
    let temp = [];
    for(let i = 0; i < score.length; i++){
        
        // 임시 배열의 요소 개수가 k보다 작을 경우
        if(temp.length < k){
            // 임시 배열에 현재 값 추가
            temp.push(score[i]);
        } else {
            // 요소 중 가장 작은 값보다 현재 요소가 더 클 경우
            if(Math.min(...temp) < score[i]){
                // temp의 맨 앞 요소 제거
                temp.shift();
                // temp에 현재 요소 추가
                temp.push(score[i]);
            }
        }
        // 결과 배열에 temp의 요소 중 가장 작은 값 추가
        answer.push(Math.min(...temp));
        // shift와 pop를 이용하기 위한 정렬
        temp.sort((a, b) => a - b);
    }
    return answer;
}