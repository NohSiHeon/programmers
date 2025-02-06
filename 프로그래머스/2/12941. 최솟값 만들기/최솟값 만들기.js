function solution(A,B){
    let answer = 0;
    // for문에서 A.length를 안하고 따로 변수에 값을 설정 해주는 이유는 pop, shift가 되면 A.length의 값이 반복될 때 마다 달라져서 불가능
    let length = A.length;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for(let i = 0; i < length; i++){
        answer += A[i] * B[i];

    }

    return answer;
}