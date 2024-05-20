function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i < right + 1; i++){
        let cnt = 0;
        for(let j = 1; j < right + 1; j++){
            cnt += i % j == 0 ? 1 : 0;    
        }
        answer += cnt % 2 == 0 ? i : -i;
    }
    
    return answer;
}