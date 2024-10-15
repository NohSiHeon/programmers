function solution(s) {
    let answer = '';
    
    // 빈도수 체크 객체 선언 
    const countWord = new Map();
    
    // 문자열 정렬하기
    const newS = s.split("").sort();
    
    // 빈도수 체크
    for(const i of newS){
        if(!countWord.has(i)){
            countWord.set(i, 1);
        } else {
            countWord.set(i, countWord.get(i) + 1);
        }
    }
    // 빈도수(value)가 1일 경우 key를 answer에 추가
    countWord.forEach((value, key) => {
        answer += value === 1 ? key : "";
    })
    return answer;
}