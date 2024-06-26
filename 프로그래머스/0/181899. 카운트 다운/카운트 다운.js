function solution(start_num, end_num) {
    const answer = [];
    const limit = start_num - end_num;
    
    for(let i = 0; i < limit + 1; i++, start_num--){
        answer.push(start_num);
    }
    
    return answer;
}