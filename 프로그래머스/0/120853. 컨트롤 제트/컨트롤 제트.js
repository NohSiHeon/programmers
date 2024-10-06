function solution(s) {
    let answer = 0;
    const splitS = s.split(" ");
    
    for(let i = 0; i < splitS.length; i++){
        if(splitS[i] !== 'Z'){
            answer += +splitS[i];
        } else {
            answer -= splitS[i-1];
        }        
    }
    
    return answer;
}