function solution(common) {
    let answer = 0;

    if(common[0] - common[1] == common[1] - common[2]){
        answer = common[common.length - 1] + (common[1] - common[0]);
    } else {
        answer = common[common.length - 1] * (common[1] / common[0]);
    }
    
    return answer;
}