function solution(number) {
    let answer = 0;
    
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j < number.length; j++){
            for(let k = j + 1; k < number.length; k++){
                // 숫자 3개의 합이 0이면 경우의 수 1증가
                if(number[i] + number[j] + number[k] == 0) answer++;
            }
        }
    }
    
    return answer;
}