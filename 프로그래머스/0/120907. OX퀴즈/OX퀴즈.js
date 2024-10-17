function solution(quiz) {
    let answer = [];
    let sum = 0;
    
    // 퀴즈의 모든 인덱스를 돌기위한 반복
    for(let i = 0; i < quiz.length; i++){
        // quiz의 인덱스를 공백을 기준으로 요소로 분할
        let splitQuiz = quiz[i].split(" ");
        console.log("splitQuiz:", splitQuiz);
        // sum 초기값 설정
        sum = +splitQuiz[0];
        console.log("초기 sum:", sum);
        // 부호에 따른 연산 구분
        if(splitQuiz[1] === "+"){
            sum += +splitQuiz[2];
        } else if(splitQuiz[1] === "-"){
            sum -= +splitQuiz[2];
        }
        console.log("합계:", sum);
        console.log(+splitQuiz[4]);
        if(sum === +splitQuiz[4]){
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    
    return answer;
}