function solution(N, stages) {
    let answer = [];
    let players = stages.length;    // 총 인원 수
    const failureRates = [];    // 실패율을 담을 배열
    const stageCounts = Array(N + 1).fill(0);   // 스테이지별 인원 수를 구분할 배열
    
    // 각 스테이지별 인원 구분
    stages.forEach(stage => {
        if(stage <= N) stageCounts[stage]++;
    });

    // 실패율 계산
    for(let i = 1; i <= N; i++){
        if(stageCounts[i] == 0){
            // 해당 스테이지에 도달한 사람이 없으면 실패율 0
            failureRates.push([i, 0]);
        } else {
            // 실패율 계산
            failureRates.push([i, stageCounts[i] / players]);
            // 현재 스테이지 인원 차감
            players -= stageCounts[i];

        }
    }
    // 순서 정렬
    answer = failureRates.sort((a, b) => {
        if(a[1] == b[1]) return a[0] - b[0];
        return b[1] - a[1];
    });
    // 값 변경
    answer.map((x , i) => {
        answer[i] = x[0];
    })
    return answer;
}