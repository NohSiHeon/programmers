function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a);   // 내림차순으로 정렬 (높은 점수의 사과부터 처리)
    
    // 한 번에 m개씩 묶어 상자의 가격을 계산
    for(let i = m; i <= score.length; i+= m){
        // i번째 사과가 포함된 상자의 최소 점수는 score[i - 1] (m번째 사과)
        // 상자 가격 = 최소 점수 * 사과 개수(m)
        answer += score[i - 1] * m;
    }
    
    return answer;
}