function solution(A, B) {
    let answer = 0;
    A = A.split("");
    console.log(A);
    let temp = "";
        
    
    for(let i = 0; i <= A.length; i++){
        // i가 A의 길이와 같다는건 밀 수 있는 경우의 수를 모두 했는데도 B와 같을 수 없음을 의미
        if(i == A.length){
            answer = -1;
            break;
        }
        // A와 B가 같은지 비교
        if(A.join("") == B){
            break;
        }
        // 연산 전 선 증가
        answer++;
        
        // A의 마지막 요소를 제거 및 임시 변수에 저장
        temp = A.pop();

        // 임시 변수 값을 unshift로 맨 앞에 값을 추가
        A.unshift(temp);

    }
    return answer;
}