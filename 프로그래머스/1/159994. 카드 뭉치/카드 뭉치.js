function solution(cards1, cards2, goal) {
    let answer = 'Yes';

    goal.map((x) => {
        // goal의 첫 요소가 cards1의 첫 요소인 경우
        if(x == cards1[0]){
            // cards1 배열의 첫 요소 제거
            cards1.shift();
        // goal의 첫 요소가 cards2의 첫 요소인 경우
        } else if(x == cards2[0]){
            // cards2 배열의 첫 요소 제거
            cards2.shift();
        // 위 경우 둘 다 아닌 경우
        // 위 경우에서 끝나야 만들 수 있는 goal임
        } else {
            // 순서가 맞지 않은 것이기 때문에 answer에 No로 변경하고 반환
            return answer = 'No';
        }
    });
    
    return answer;
}