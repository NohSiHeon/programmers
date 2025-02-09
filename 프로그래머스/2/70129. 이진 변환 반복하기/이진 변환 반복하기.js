function solution(s) {
    let answer = [0, 0];    // [이진 변환 횟수, 제거한 0의 개수]
    let deleteZero = [];    // 0을 제거한 후 남은 1들을 저장하는 배열
    
    // s가 '1'이 될때까지 반복
    while(s !== '1'){
        answer[0]++;    // 이진 변환 횟수 증가
        
        // 문자열에서 '1'만 남기고 '0'을 제거하는 과정
        for(let i = 0; i < s.length; i++){
            
            if(s[i] == '1'){
                deleteZero.push(s[i]);  // '1'이면 배열에 추가
            } else {
                answer[1]++;    // '0'이면 제거된 개수 증가
            }
        }
        // 남아있는 '1'들의 개수를 2진수로 변환하여 s 갱신
        s = deleteZero.length.toString(2);
        
        // 다음 반복을 위해 deleteZero 배열 초기화
        deleteZero = [];
    }

    return answer;
}