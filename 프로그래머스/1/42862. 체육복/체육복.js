function solution(n, lost, reserve) {   
    // lost는 체육복 없는 사람
    // n = 인원수
    // reserve = 여벌 체육복 있는 사람(여벌 체육복이 있는데 도난 당했을 경우 여벌을 본인이 사용)
    
    // 실질적으로 체육복이 있는 사람과 없는 사람 구분
    let actualLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
    let actualReserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);
    
    // 최소 인원 계산(총 인원수(n) - 실질적으로 체육이 없는 사람의 수)
    let answer = n - actualLost.length;

    actualLost.forEach((el) => {
        if(actualReserve.includes(el - 1)){
            answer++;
            // 여벌 체육복을 빌려줬으니 더 이상 여벌이 없으므로 배열에서 제거
            actualReserve = actualReserve.filter((v) => v !== el - 1);
        } else if(actualReserve.includes(el + 1)){
            answer++;
            // 여벌 체육복을 빌려줬으니 더 이상 여벌이 없으므로 배열에서 제거
            actualReserve = actualReserve.filter((v) => v !== el + 1);
        }
    });
    
    return answer;
}