function solution(n) {
    let answer = 0;
    
    // 점화식 구현하기 위한 초기값 설정
    // n=1 → 1가지, n=2 → 2가지로 고정
    // dp[0]은 배열 인덱스를 점화식과 맞추기 위해 포함
    let arr = [0, 1, 2];
    
    // i는 3부터 시작: f(n)은 n이 3 이상일 때 f(n)=f(n-1)+f(n-2)로 정의됨
    for(let i = 3; i <= n; i++){
        // 점화식
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
    
    return answer = arr[n];
}