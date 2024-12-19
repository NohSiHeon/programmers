function solution(babbling) {
    let answer = 0;
    // 옹알이할 수 있는 단어 리스트를 배열로 정의
    const canBabbling = ['aya', 'ye', 'woo', 'ma'];
    
    // babbling 배열의 각 단어를 검사
    for(let i = 0; i < babbling.length; i++){
        for(let j = 0; j < canBabbling.length; j++){
            // 같은 발음이 연속으로 등장하면 유효하지 않으므로 반복 종료
            if(babbling[i].includes(canBabbling[j].repeat(2))){
                break;
            }
            // 현재 발음을 공백으로 대체하여 나머지 단어를 검사
            babbling[i] = babbling[i].split(canBabbling[j]).join(" ");
        }
        
        // 모든 발음을 제거한 결과가 공백만 남았다면 유효한 발음 조합
        if(babbling[i].split(" ").join("").length == 0){
            answer++;
        }
    }
    return answer;
}