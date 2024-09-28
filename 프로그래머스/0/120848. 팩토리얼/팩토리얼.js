function factorial(num){
    let answer = 1;
    for(let i = 1; i <= num; i++){
        answer *= i;
    }
    return answer;
}
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= 11; i++){
        console.log(i);
        if(n < factorial(i)){
            answer = i - 1;
            return answer;
        }
    }
    return answer;
}