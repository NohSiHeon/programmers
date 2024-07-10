function solution(n) {
    let answer = 1;
    // 1판당 6조각
    let pieces = 6;
    // 조각의 수를 인원수로 나누었을 때
    // 나머지가 0 이어야만 똑같이 먹을 수 있는 최소 판수
    while(pieces % n !== 0){
        // 조각 수 증가
        pieces += 6;
        // 판 수 증가
        answer += 1;
    }
    return answer;
}