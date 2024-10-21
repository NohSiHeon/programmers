function solution(keyinput, board) {
    let answer = [0, 0];
    const limitX = Math.floor(board[0] / 2);
    const limitY = Math.floor(board[1] / 2);

    // keyinput에 들어있는 값에 따라 변동된 값 넣기
    for(const i of keyinput){
        if(i === "left") {
            if(answer[0] > -limitX){
                answer[0] = answer[0] - 1;
            }
        } else if(i === "right") {
            if(answer[0] < limitX){
                answer[0] = answer[0] + 1;
            }
        } else if(i === "up") {
            if(answer[1] < limitY){
                answer[1] = answer[1] + 1;
            }
        } else if(i === "down") {
            if(answer[1] > -limitY){
                answer[1] = answer[1] - 1;
            }
        } 
    }
    return answer;
}