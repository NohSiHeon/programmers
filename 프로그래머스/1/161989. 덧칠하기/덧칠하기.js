function solution(n, m, section) {
    let answer = 0;
    
    // 벽의 상태를 나타내는 배열 생성 (0: 페인트칠 완료, 1: 페인트칠 필요)
    const wall = new Array(n).fill(0);

    // 페인트칠이 필요한 위치를 1로 표시
    for(let i = 0;i < section.length; i++){
        wall[section[i] - 1] = 1;
    }

    // 페인트칠이 필요한 부분이 남아 있을 경우 반복
    while(wall.includes(1)){
        answer++;   // 페인트칠 횟수 증가
        const paintIndex = wall.indexOf(1); // 가장 앞에 있는 페인트칠이 필요한 위치 찾기
        for(let i = paintIndex; i < paintIndex + m; i++){
            wall[i] = 0;    // 칠했음을 표시
        }
    }
    
    return answer;
}