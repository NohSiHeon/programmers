function solution(array, commands) {
    let answer = [];
    
    // commands 배열의 길이만큼 반복
    for(let i = 0; i < commands.length; i++){
        
        let tempArr = [];
        // i부터 j까지 배열 자르기
        tempArr = array.slice(commands[i][0] - 1, commands[i][1]);
        
        // 배열 정렬하기
        tempArr.sort((a, b) => a - b);

        // 인덱스 값 구하기
        let k = commands[i][2];

        // 구한 값을 결과 배열에 넣기
        answer.push(tempArr[k - 1] );
    }    
    return answer;
}