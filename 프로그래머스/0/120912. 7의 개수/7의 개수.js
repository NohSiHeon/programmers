function solution(array) {
    let answer = 0;
    const joinArr = array.join("");
    
    for(let i = 0; i < joinArr.length; i++){
        answer += joinArr[i].includes(7) ? 1 : 0; 
    }

    return answer;
}