function solution(score) {
    let answer = new Array(score.length).fill(1);
    
    // 각 요소 별 점수에대한 평균 구하기
    const avgs = score.map((v) => (v[0]+v[1]) / 2);

    
    for(let i = 0; i < avgs.length; i++){
        for(let j = 0; j < avgs.length; j++){
            if(avgs[i] < avgs[j]){
                answer[i]++;
            }
        }
    }
    return answer;
}