function solution(my_string, n) {
    let answer = '';
    
    // 길이만큼 반복
    for(let i = 0; i <my_string.length; i++){
        // n만큼 my_string 문자열의 i 인덱스의 값을 answer에 추가
        for(let j = 0; j < n; j++){
            answer += my_string[i];
        }
    }
    return answer;
}