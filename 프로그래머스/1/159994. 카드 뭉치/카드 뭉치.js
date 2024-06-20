function solution(cards1, cards2, goal) {
    
    // goal 배열 끝까지 순회
    for(const s of goal) {
        
        // cards1 배열의 0번 인덱스와 goal 배열의 s 값 일치 여부 확인
        // 일치하면 cards1 배열의 첫 번째 요소(0번 인덱스) 제거
        if(cards1[0] === s) {
            cards1.shift();
                
            // cards2 배열의 0번 인덱스와 goadl 배열의 s 값 일치 여부 확인
            // 일치하면 cards2 배열의 첫 번째 요소(0번 인덱스) 제거
        } else if(cards2[0] === s) {
            cards2.shift();
                
            // 위 두 조건에 해당되지 않으면 원하는 순서의 단어 배열을 만들 수 없으므로 No 리턴
        } else {
                
            return "No"
        }
    }
    return "Yes";
}