function solution(ingredient) {
    let answer = 0; // 햄버거를 만든 개수를 저장할 변수
    let stack = []; // 재료를 순서대로 쌓아올릴 스택
    let str = "";   // 스택의 마지막 4개를 문자열로 변환해 저장할 변수
    
    for(let i = 0; i < ingredient.length; i++){
        // 현재 재료를 스택에 추가
        stack.push(ingredient[i]);
        
        // 스택의 길이가 4 이상일 경우
        // 즉, 햄버거를 만들 수 있는 최소 조건이 충족된 상태
        if(stack.length >= 4){
            // 스택의 마지막 4개 요소를 문자열로 변환
            str = stack.slice(-4).join("");
            
            // 마지막 4개가 "1231"인 경우 햄버거 완성
            if(str == "1231"){
                answer++;   // 완성된 햄버거 개수 증가
                stack.splice(-4, 4);    // 완성된 햄버거 재료 제거
            }
        }
    }
    
    return answer;
}