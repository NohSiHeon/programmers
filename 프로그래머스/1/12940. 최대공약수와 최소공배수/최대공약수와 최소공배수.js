function solution(n, m) {
    let answer = [];
    // 최대공약수
    let gcd= 1;
    // 최소공배수
    let lcm = 1;
    
    // 최대공약수 구하기
    for(let i = 1; i <= n; i++){
        // 작은 숫자부터 반복을 시작해서 가장 마지막에 조건에 만족하는 i가 최대공약수
        if(n % i == 0 && m % i == 0){
            gcd = i;
        }
    }
    
    // 최소공배수 구하기
    // 두 수를 곱하고 최대공약수로 나누면 최소공배수
    lcm = n * m / gcd;

    answer.push(gcd, lcm)
    return answer;
}