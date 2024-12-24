function solution(s) {
    let answer = 0; // 나누어진 문자열의 개수를 저장할 변수
    let x = ''; // 현재 구간의 첫 문자를 저장할 변수
    let firstCharCnt = 0;   // 첫 문자의 빈도수를 세는 변수
    let othersCharCnt = 0;  // 첫 문자가 아닌 문자의 빈도수를 세는 변수

    for(let i = 0; i < s.length; i++){
        if(!x) x = s[i];    // 첫 문자가 설정되지 않은 경우, 현재 문자를 첫 문자로 설정
        
        if(x == s[i]){
            firstCharCnt++;     // 현재 문자가 첫 문자(x)와 같으면 빈도수 증가
        } else {
            othersCharCnt++;    // 현재 문자가 첫 문자(x)와 다르면 다른 문자 빈도수 증가
        }
        
        // 첫 문자와 다른 문자의 빈도수가 같아지면 문자열을 분리
        if(firstCharCnt == othersCharCnt){
            answer++;   // 분리된 문자열 개수 증가
            firstCharCnt = 0;   // 다음 구간 처리를 위해 빈도수 초기화
            othersCharCnt = 0;  
            x = ''; // 새로운 구간의 첫 문자를 초기화
        }
    }
     // 순회가 끝난 후 분리되지 않은 문자열이 남아 있는 경우 처리
    if(firstCharCnt !== 0 || othersCharCnt !== 0) answer++;
    return answer;
}