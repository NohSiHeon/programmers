function solution(hp) {
    let answer = 0;
    if(hp / 5 >= 1){
        answer += Math.floor(hp / 5);
    }
    if(hp % 5 >= 3){
        answer += Math.floor(hp % 5 / 3);
    }
    if(hp % 5 % 3 >= 1){
        answer += Math.floor(hp % 5 % 3 / 1);
    }
    return answer;
}