function isPrime(n){
    if(n === 1){
        return false;
    }
    for(let i = 2; i <= n - 1; i++){
        if(n % i === 0){
            return false;
        }        
    }
    return true;
}
function solution(n) {
    let answer = [];

    for(let i = 2; i <= n; i++){
        if(n % i == 0 && isPrime(i)){
            answer.push(i);
        }
    }
    answer.sort((a,b) => a - b);
    return answer;
}