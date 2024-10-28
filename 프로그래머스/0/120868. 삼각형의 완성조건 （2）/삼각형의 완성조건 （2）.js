function solution(sides) {
    let answer = 0;
    // 오름차순 정렬
    sides.sort((a, b) => a - b);
    
    // 남은 삼각형 변의 길이가 가능한 최대 값
    const max = sides[0] + sides[1];
    
    for(let i = 1; i <= max; i++){
        // 세 변 중 가장 큰 값 구하기
        let maxNum = Math.max(...sides, i);
        
        // 가장 큰 값이 i일 경우
        if(maxNum == i){
            // 가장 큰 값이 나머지 변의 길이보다 작을 경우에만 삼각형이 가능하므로 answer 증가
            if(sides[0] + sides[1] > maxNum){
                answer++;
            }
        // 가장 큰 값이 sides 배열에서 가장 큰 값인 sides[1]일 경우
        } else if(maxNum == sides[1]){
            // 가장 큰 값이 나머지 변의 길이보다 작을 경우에만 삼각형이 가능하므로 answer 증가
            if(sides[0] + i > maxNum){
                answer++;
            }
        }
    }
    return answer;
}