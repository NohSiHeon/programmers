function solution(n) {
    let answer = 0;
    
    // 제곱근 구하기
    const sqrtNum = Math.sqrt(n);
    
    // 구한 제곱근과 제곱근에서 소수점 버려서 같은지 비교
    // 같을 경우 정수
    if(sqrtNum == Math.floor(sqrtNum)){
        // 제곱근 + 1 한 값의 제곱한 값을 answer에 할당
        answer = (sqrtNum + 1) ** 2;
    // 다를 경우 정수가 아님
    } else {
        // -1을 answer에 할당
        answer = -1;
    }
    return answer;
}