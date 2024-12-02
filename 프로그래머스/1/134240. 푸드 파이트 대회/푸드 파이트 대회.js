function solution(food) {
    let answer = [];
    // 물은 항상 처음에 오기때문에 가장 먼저 오는 요소 제거
    food.shift();
    
    // 같은 개수를 먹어야 하기 때문에 2로 나눠서 몫만큼만 해당 음식의 번호값 추가
    for(let i = 0; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i] / 2); j++){
            answer.push(i + 1);
        }
    }
    
    // 기존 음식 순서 + 물 + 음식 순서 뒤집기
    answer = answer.join("") + "0" + answer.reverse().join("");

    return answer;
}