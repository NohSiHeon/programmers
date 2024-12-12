function solution(answers) {
    let answer = [];
    let cnt = 0;
    const arr = [];
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    // 각 수포자의 정답 개수를 계산
    patterns.forEach((pattern) => {
        answers.forEach((answer, i) => {
            if(answer == pattern[i % pattern.length]) cnt++;
        });
        arr.push(cnt); // 각 수포자의 점수를 배열에 저장
        cnt = 0; // 다음 수포자를 위해 초기화
    });
    const maxScore = Math.max(...arr); // 가장 높은 점수를 계산
    
    // 가장 높은 점수를 받은 수포자 찾기
    arr.forEach((v, i) => {
        if(v == maxScore) {
            answer.push(i + 1); // 수포자는 1번부터 시작하므로 index + 1
        }
    });
    answer.sort((a, b) => a - b); // 결과를 오름차순으로 정렬
    return answer;
}