function solution(arr){
    let answer = [];
    
    for(let i = 0; i < arr.length; i++){
        // 빈 배열일 경우
        if(answer.length == 0){
            answer.push(arr[i]);
        // 이전 인덱스의 값이 연속될 경우
        } else if(arr[i] == arr[i-1]){
            continue;
        // 위 조건에 충족되지 않는 경우
        } else {
            answer.push(arr[i]);
        }
    }

    return answer;
}