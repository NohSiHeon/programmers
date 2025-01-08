function solution(survey, choices) {
    let answer = '';
    const scores = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 };
    // 1 ~ 7 : 매우 비동의 ~ 매우 동의
    // 4 : 어디에도 점수 얻지 않음
    
    for(let i = 0; i < survey.length; i++){
        const [str1, str2] = survey[i];
        const choice = choices[i];
        
        if(choice < 4){
            scores[str1] += 4 - choice;
        } else if(choice > 4){
            scores[str2] += choice - 4;
        }
        
    }
    answer += scores['R'] >= scores['T'] ? 'R' : 'T';
    answer += scores['C'] >= scores['F'] ? 'C' : 'F';
    answer += scores['J'] >= scores['M'] ? 'J' : 'M';
    answer += scores['A'] >= scores['N'] ? 'A' : 'N';
    
    return answer;
}