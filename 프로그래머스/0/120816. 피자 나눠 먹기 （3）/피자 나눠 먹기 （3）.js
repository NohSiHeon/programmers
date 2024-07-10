function solution(slice, n) {
    let answer = 0;
    // slice : 피자 조각 수
    // n : 사람의 수
    // 조건1. 최소 한 조각 이상 먹으려면 사람의 인원 수 보다 피자의 조각 수가 더 많아야 함
    
    // 사람 수를 피자 조각 수로 나누었을 때 나머지 값이 0 이면 몫이 피자의 판 수를 의미
    // 나머지 값이 0이 아니면 
    if( n % slice === 0){
        answer = Math.floor(n / slice);
    }
    else {
       answer = Math.floor(n / slice) + 1;
    }

    return answer;
}