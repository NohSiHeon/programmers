function solution(board, moves) {
    let answer = 0;     // 터트린 인형의 개수를 저장하는 변수
    const stack = [];   // 뽑은 인형들을 담을 스택
    
    moves.forEach((el) => {
        // moves의 각 열 번호에 대해 인형을 뽑는 작업 수행
        let doll = 0;   // 현재 뽑은 인형을 저장할 변수
        
        for(let i = 0; i < board.length; i++){
            doll = board[i][el - 1];    // 현재 위치의 인형 값
            // 해당 요소가 0이 아닌 경우
            if(doll !== 0){
                // 인형이 존재하는 경우 스택에 인형 추가하고 뽑힌 자리는 0으로 설정
                stack.push(doll);
                board[i][el - 1] = 0;
                break;  // 인형을 뽑았을 경우 반복 종료
            } else {
                continue;   // 인형이 없는 경우 다음 행 탐색
            }
        }
        // 스택의 가장 위 두 인형이 같은 경우 제거
        if(stack.length >= 2 && stack[stack.length - 1] == stack[stack.length - 2]){
            // 2개 터트림
            stack.pop();    // 마지막 인형 제거
            stack.pop();    // 그 직전 인형 제거
            answer += 2;    // 제거된 인형 수 추가
        }
    });

    return answer;
}