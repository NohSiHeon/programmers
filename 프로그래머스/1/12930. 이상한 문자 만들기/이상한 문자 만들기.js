function solution(s) {
    let answer = '';
    
    // 공백 기준으로 나뉘어서 단어로 나뉘어진 배열로 만들기
    let newS = s.split(" ");
    
    // 단어로 나뉘어진 배열의 길이 만큼 반복
    for(let i = 0; i < newS.length; i++){
        // 배열의 각 인덱스 값의 길이만큼 반복
        for(let j = 0; j < newS[i].length; j++){
            // 단어의 짝/홀수에 맞게 대소문자 구별해서 값 넣기
            answer += j % 2 == 0 ? newS[i][j].toUpperCase() : newS[i][j].toLowerCase();
        }
        // 단어마다 구분을 위해 공백 추가
        // 맨 마지막에는 공백이 필요없으니 마지막을 알기 위한 조건
        // 배열의 마지막 인덱스에 도달하면 ' '(공백)이 아닌 ''을 넣어서 공백 없게 하기
        answer += i < newS.length - 1 ? ' ': '';
    }    
    return answer;
}