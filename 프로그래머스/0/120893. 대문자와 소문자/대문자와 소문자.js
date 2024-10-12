function solution(myString) {
    let answer = '';
    const splitmyString = myString.split("");
    for(const i of splitmyString){
        if(i === i.toLowerCase()){
            answer += i.toUpperCase();
        } else {
            answer += i.toLowerCase();
        }
    }
    return answer;
}