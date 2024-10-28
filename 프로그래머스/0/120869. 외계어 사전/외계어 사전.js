function solution(spell, dic) {
    let answer = 0;

    // 문자열 배열 순회
    for(const word of dic){
        // 알파벳 배열의 모든 요소가 문자열에 포함되어 있을 경우 answer를 1로 할당하고 break로 반복 종료
        if(spell.every(alphabet => word.includes(alphabet))){
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    return answer;
}