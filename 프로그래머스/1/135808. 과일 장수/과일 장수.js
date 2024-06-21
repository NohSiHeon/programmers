function solution(k, m, score) {
    let answer = 0;
    
        // 첫 번째로 시도한 방법
    
//     // 오름차순 정렬하기
//     score.sort((a, b) => a - b);
    
//     // 사과의 개수가 한 박스 만드는 개수 조건에 부합하면 실행
//     while(score.length >= m){
//         let box = [];
        
//         // 개수에 맞게 반복
//         for(let i = 0 ; i < m; i++){
//             // 박스에 가장 큰 값 넣기
//             box.push(Math.max(...score));
//             // 박스에 큰 값을 넣었으니 해당 값은 빼기
//             score.pop();
//         }
//         // 상자안에 들어간 사과 중 가장 낮은 사과의 점수 * 사과의 개수 한 것을 누적
//         answer += Math.min(...box) * box.length;
//     }
    
    // 두 번째로 시도한 방법
    // 내림차순 정렬
    score.sort((a,b) => b - a);
    
    // 초기값을 m 값으로 설정
    // 내림차순을 한 이유
    // i - 1번째들이 한 사과 상자 안에 들어가는 값 중 가장 낮은 값이 됨
    for(let i = m; i <= score.length; i += m){
        // i - 1 인덱스의 값은 사과상자 안에 들어가는 사과의 점수 중 가장 낮은 점수를 의미함
        answer += score[i-1] * m;

    }
    return answer;
}