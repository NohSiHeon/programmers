function solution(myString) {
    let answer = '';
    for(let i = 0; i < myString.length; i++){
        answer += myString[i].toLowerCase();
    }
    answer = answer.split("").sort().join("");
    return answer;
}