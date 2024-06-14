function solution(food) {
    let answer = '';
    // 0오는 구간을 마지막이라고 생각하고 0 전에 붙은 값을 reverse 해서 붙이면 끝 아닌가???
    
    // 총 길이 구하기
    // 중간 인덱스에는 0(0번 인덱스 값) 이 들어가게 하기
    for(let i = 1; i < food.length; i++){
        // 음식 배치를 양 옆에 해야 하므로 2로 나누기
        let foodCount = parseInt(food[i]/2);
        // 양 옆에 배치할 한 음식의 각 개수가 1개가 안되면 다음 과정을 생략함
        if(foodCount < 1){
            continue;
        }
        // 왼쪽부터 음식 배치하기
        // 각 음식의 개수에 맞게 나열하여 배치
        for(let j = 0; j < foodCount; j++){
            answer += i.toString();
        }
    }
    // 반대편 음식
    let half = answer.split('');
    // 서로 양 끝에서부터 먹기 시작해야 하므로 왼쪽과 순서를 반대로 하기
    half = half.reverse().join('');
    // 중간에 물인 0 배치
    answer += "0" + half;
    return answer;
    
    
}