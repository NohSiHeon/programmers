function solution(s) {
    let answer = 0;
    const stack = [];   // 제거할 문자 쌍을 찾기 위한 스택
    
    // 문자열 순회
    for(let char of s){
        // 스택의 마지막 요소가 현재 문자가 같으면 제거
        if(stack.length > 0 && stack[stack.length - 1] == char){
            stack.pop();
        } else {
            // 스택의 마지막 요소가 현재 문자와 같지 않으면 스택에 추가
            stack.push(char);
        }
    }
    // 스택이 비어있지 않으면 다 제거되지 못했으므로 0, 비어있으면 다 제거된 것이므로 1 반환
    answer = stack.length > 0 ? 0 : 1;
    return answer;
}