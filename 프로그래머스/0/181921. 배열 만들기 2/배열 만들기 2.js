function solution(l, r) {
    let answer = [];
    

    for(let i = l; i <= r; i++){
        let num = [...String(i)];
        
        if(num.every(x => x == '5' || x == '0')) answer.push(i);
        
    }
    if(!answer.length) answer.push(-1);
    return answer;
}