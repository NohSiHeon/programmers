function solution(my_string) {
    let answer = 0;
    let splitString = my_string.split("");

    for(let i of splitString){
        if(i - i === 0){
            answer += +i;
        }
    }
    return answer;
}