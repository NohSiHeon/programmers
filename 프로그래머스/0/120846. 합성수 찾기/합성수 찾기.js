function solution(n) {
    let answer = 0;
    
    while(n > 1){
        let cnt = 0;
        for(let i = 1; i <= n; i++){
            if(n % i === 0){
                cnt++;
            }
        }
        if(cnt > 2){
            answer++;
        }
        n--;
    }

    return answer;
}