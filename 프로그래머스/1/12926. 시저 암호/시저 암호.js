function solution(s, n) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++){
        let text = '';
        
        // 공백일 경우 공백 처리
        if(s.charAt(i) == ' '){
            answer += ' ';
            
        // 대문자일 경우
        //charCodeAt: 문자를 유니코드로 변환
        }else if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91){
            
            // 변환한 유니코드 + n 했을 때 알파벳 대문자 범위인지 체크
            // 벗어날 경우 첫 알파벳 유니코드부터 시작되게 - 26
            // 알파벳 개수: 26
            text += s.charCodeAt(i) + n > 90 ? s.charCodeAt(i) + n - 26 : s.charCodeAt(i) + n;
            // String.fromcharCode() : 유니코드를 문자로 변경
            answer += String.fromCharCode(text);
         
          // 소문자일 경우  
        } else if(s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123){
            
            // 변환한 유니코드 + n 했을 때 알파벳 소문자 범위 체크
            // 벗어날 경우 첫 알파벳 유니코드부터 시작되게 -26
            text += s.charCodeAt(i) + n > 122 ? s.charCodeAt(i) + n - 26 : s.charCodeAt(i) + n;
            
            // 유니코드를 문자로 변경
            answer += String.fromCharCode(text);
        }


    }
    return answer;
}