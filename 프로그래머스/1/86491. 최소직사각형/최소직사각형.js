function solution(sizes) {
    let answer = 0;
    let bigger = [];
    let smaller = [];
    
    
    // 배열 길이만큼 반복
    for(let i = 0; i < sizes.length; i++){
        // [i][0]요소가 [i][1] 요소보다 클 경우
        // bigger에는 [i][0], smaller에는 [i][1] push
        if(sizes[i][0] > sizes[i][1]){
            bigger.push(sizes[i][0]);
            smaller.push(sizes[i][1]);
        // [i][0]요소가 [i][1] 요소보다 작을 경우
        // bigger에는 [i][0], smaller에는 [i][1] push
        } else {
            bigger.push(sizes[i][1]);
            smaller.push(sizes[i][0]);
        }
    }
    // 큰 값 모임 중 가장 큰 값과 작은 값 모임 중 가장 큰 값 곱하기
    answer = Math.max(...bigger) * Math.max(...smaller);
    return answer;
}