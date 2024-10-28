function solution(board) {
    let answer = 0;
    // 8방향 좌표
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    // board 길이만큼 반복
    for(let i = 0; i < board.length; i++){
        // board[i]의 길이만큼 반복
        for(let j = 0; j < board[i].length; j++){
            // board[i][j] 값이 1일 경우
            if(board[i][j] === 1){
                // 방향 좌표를 나타내는 directions 요소 순회
                directions.forEach(([x, y]) => {
                    const newX = i + x;
                    const newY = j + y;
                    // 새로운 좌표값이 X와 Y가 0보다 크거나 board, board[i]의 길이보다 작을 경우
                    if(newX >= 0 && newX < board.length && newY >= 0 && newY < board[i].length){
                        // 좌표 값이 안전지대를 의미하는 0일 경우에만 X로 변경
                        if(board[newX][newY] === 0){
                            board[newX][newY] = 'X';
                        }
                    }
                });                
            }
        }
    }
    return answer = board.flat().filter(x => x === 0).length;
}