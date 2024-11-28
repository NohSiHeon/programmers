function solution(sizes) {
    let answer = 0;
    // 가로 세로 통합 더 긴건 longer, 짧은건 shorter에 할당
    let longer = [];
    let shorter= [];
    
    // 각 요소에 더 긴 것과 짧은 것을 구분지어서 저장
    // 이렇게 하면 
    for(let i = 0; i < sizes.length; i++){
        longer.push(Math.max(...sizes[i]));
        shorter.push(Math.min(...sizes[i]));
    }
    
    answer = Math.max(...longer) * Math.max(...shorter);
    
    return answer;
}