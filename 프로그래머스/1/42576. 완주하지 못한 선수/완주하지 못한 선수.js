function solution(participant, completion) {
    let answer = '';
    // 참가자 명단의 이름과 횟수를 저장할 객체
    const participantCnt = {};
    
    // 참가자 명단의 이름을 카운팅 (동명이인 처리)
    participant.forEach(name => {
        participantCnt[name] = (participantCnt[name] || 0) + 1;
    });

    // 완주자 명단의 이름을 카운팅하여 참가자 명단에서 차감
    completion.forEach(name => {
        participantCnt[name] -= 1;
    });

    // value가 1인 이름을 찾기 (완주하지 못한 사람)
    for(const name in participantCnt){
        if(participantCnt[name] == 1){
            answer = name;
            break;  // 1명만 실패하므로 순회 종료
        }
    }

    return answer;
}