function solution(d, budget) {
    let answer = 0;
    // 오름차순 정렬을 해야 최대 지원 수
    d.sort((a, b) => a - b);
    
    d.map(x => {
        // 예산이 비용보다 크거나 같을 경우 예산에서 비용 차감 및 지원 부서 개수 증가
        if(budget >= x){
            budget -= x;
            answer++;
        }
    });
    
    return answer;
}