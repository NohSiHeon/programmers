function solution(n) {
    let answer = 0;
    let x = 0;
    while(true){
        if(n % x === 1){
            answer = x;
        break;
        } else {
            x++;
        }
       
    }
    return answer;
}