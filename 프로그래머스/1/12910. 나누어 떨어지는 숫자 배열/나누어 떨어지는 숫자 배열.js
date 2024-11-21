function solution(arr, divisor) {
    let answer = [];
    
    // arr의 각 요소 x 를 divisor로 나누어 떨어지면 answer 배열에 추가
    arr.map(x => {
        if(x % divisor == 0) {
            answer.push(x);
        }
    });
    // answer 길이가 1 이상일 경우(요소가 있을 경우)
    if(answer.length){
        // 오름차순 정렬
        answer.sort((a, b) => a - b);
    // answer 길이가 0일 경우(요소가 없을 경우)
    } else {
        // -1 추가
        answer.push(-1);
    }
    
    
    return answer;
}