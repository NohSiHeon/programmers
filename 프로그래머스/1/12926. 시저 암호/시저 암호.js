function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = '';
    
    // 문자열을 문자 배열로 변환
    s = s.split("");
    
    // 각 문자를 순회하며 반환
    s.map(x => {
        let index = 0;
        
        // x값이 공백일 경우 그대로 추가
        if(x == " "){
            answer += " ";
        // x값이 소문자일 경우
        } else if(lower.includes(x)){
            // 소문자 문자열에서 현재 문자의 인덱스를 찾고 n만큼 이동
            index = lower.indexOf(x) + n;
            
            // 인덱스가 소문자 문자열 길이를 초과하면 순환하도록 처리
            if(index >= upper.length){
                index = index - upper.length; // 초과분만큼 길이를 뺀 값을 사용
            }
            
            // 이동한 위치의 문자 추가
            answer += lower[index];
        // x값이 대문자일 경우
        } else {
            // 대문자 문자열에서 현재 문자의 인덱스를 찾고 n만큼 이동
            index = upper.indexOf(x) + n;
            
            // 인덱스가 대문자 문자열 길이를 초과하면 순환하도록 처리
            if(index >= upper.length){
                index = index - upper.length; // 초과분만큼 길이를 뺀 값을 사용
            }
            
            // 이동한 위치의 문자 추가
            answer += upper[index];
        }
    });
    
    return answer;
}