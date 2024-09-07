function factorial(num){
    let result = BigInt(1);
    // 매개변수에 들어온 값이 1일 경우
    if(num === 1){
        return result;
    }
    else {
        for(let i = num; i > 1; i--){
            result *= BigInt(i);
        }
        return result;
    }
}

function solution(balls, share) {
    let answer = 0;
    let n = 0;
    let m = 0;
    let nMinusM = 0;
    
    nMinusM = factorial(balls-share);
    m = factorial(share);
    n = factorial(balls);
    
    answer = n / (nMinusM * m);
    
    return answer;
}