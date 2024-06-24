function solution(answers) {
    let answer = [];
    // 1,2,3번 수포자가 찍는 패턴
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // 수포자 별 정답 수를 담을 배열
    let count = [0, 0, 0];
    
    // 각 수포자별 정답 체크
    // answers[i]와 각 수포자의 인덱스 값이 일치하면
    
    // % 연산자를 사용한 이유는 answers의 길이가 패턴보다 긴 상황을 대비
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === supo1[i%5]){
            count[0]++;
        }
        if(answers[i] === supo2[i%8]){
            count[1]++;
        }
        if(answers[i] === supo3[i%10]){
            count[2]++;
        }
    }
    // 각 수포자가 맞춘 정답의 개수 중 최대 값 구하기
    const max = Math.max(...count);
    
    // 최대 값과 각 수포자가 맞춘 정답 수가 같은지 확인
    // 같으면 해당 인덱스 + 1 값을 answer 배열에 추가
    for(let j = 0; j < count.length; j++){
        if(max === count[j]){
            answer.push(j+1);

        }
    }
    
    return answer;
}