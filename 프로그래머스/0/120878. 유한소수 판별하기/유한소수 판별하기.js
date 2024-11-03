function solution(a, b) {
    let answer = 0;
    let gcd = 1;
    
    // 최대 공약수 구하기
    for(let i = 2; i <= Math.min(a, b); i++){
        if(a % i == 0 && b % i == 0){
            gcd = i;
        }
    }
    // 약분
    a = a / gcd;
    b = b / gcd;
    
    // 2와 5로 나뉘어지는지 확인
    while(b % 2 === 0){
        b = b / 2;
    }
    while(b % 5 === 0){
        b = b / 5;
    }
    answer = b === 1 ? 1 : 2 ;

    return answer;
}