function solution(myStr, n) {
    let answer = [];

    for(let i = 0; i < myStr.length; i+=n){
        answer.push(myStr.slice(i, i+n));
    }

    return answer;
}