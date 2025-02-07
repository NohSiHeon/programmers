function solution(s){
    let answer = true;
    // 여는 괄호 '(' 를 저장할 스택
    const stack = [];

    // 앞에서부터 한 글자씩 확인
    for(let i = 0; i < s.length; i++){
        // 현재 문자가 '('이면 스택에 추가
        if(s[i] == '(') stack.push(s[i]);
        
        // 현재 문자가 ')'이면 
        if(s[i] == ')'){
            // 스택에서 '('를 꺼내 짝을 맞춤 (없다면 undefined 반환)
            let stackValue = stack.pop();
            // 가져올 값이 존재하지 않으면 바르게 짝지어지지 못하기 떄문에 false 리턴
            if(!stackValue) return answer = false;
        }
    }
    // 반복 끝난 후, 스택이 비어 있어야 올바른 괄호 문자열
    answer = stack.length ? false : true;

    return answer;
}