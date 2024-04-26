function solution(n)
{
    var answer = 0;
    let newN = String(n);
    
    for(let i = 0; i < newN.length; i ++){
        answer += parseInt(newN[i]);
    }
 

    return answer;
}