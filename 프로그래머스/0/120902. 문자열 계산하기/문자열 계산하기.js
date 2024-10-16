function solution(myString) {

    const splitString = myString.split(" ");
    let answer = +splitString[0];

    for(let i = 1; i <splitString.length; i+=2){
        if(splitString[i] === "+"){
            answer += +splitString[i+1];
        } else {
             answer -= +splitString[i+1];
        }
    }
    return answer;
}