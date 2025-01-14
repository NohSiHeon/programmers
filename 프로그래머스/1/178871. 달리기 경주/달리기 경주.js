function solution(players, callings) {
    let answer = [];
    const playerIndexMap = new Map();   // 선수 이름을 키(key), 해당 선수의 현재 인덱스를 값(value)으로 저장하는 Map 객체 
    
    // players 배열을 순회하여 선수 이름과 인덱스를 Map에 저장
    players.forEach((player, index) => {
        // key, value 에 이름과 인덱스 담기 
        playerIndexMap.set(player, index);
    });
    
    callings.forEach((calling) => {
        // 현재 호출된 선수의 인덱스를 Map에서 가져옴
        const index = playerIndexMap.get(calling);
        
        // 호출된 선수의 바로 앞에 있는 선수의 이름
        const frontPlayer = players[index - 1];
        
        // players 배열에서 두 선수의 위치를 교환 (추월 처리)
        players[index - 1] = calling;   // 호출된 선수는 한 칸 앞으로 이동
        players[index] = frontPlayer;   // 앞 선수는 한 칸 뒤로 밀림
        
        // Map에서도 두 선수의 인덱스를 업데이트
        playerIndexMap.set(frontPlayer, index); // 앞 선수의 새로운 위치 저장
        playerIndexMap.set(calling, index - 1); // 호출된 선수의 새로운 위치 저장
    });
    
    return answer = players;
}