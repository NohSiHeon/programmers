function solution(n) {
    let answer = 0;
    // 0부터 n까지 만큼의 길이를 갖고, 모든 숫자가 소수라고 가정하고 배열 생성
    const primeArr = new Array(n + 1).fill(true);
    
    // 0과 1은 소수가 아니므로 false로 설정
    primeArr[0] = primeArr[1] = false;
    
    // 2부터 n까지 순회하며 소수 여부 확인
    for(let i = 2; i <= n; i++){
        if(primeArr[i]){
            // i가 소수라면(true인 경우) i의 배수들을 순회
            for(let j = i * i; j <= n; j+= i){
                // i의 배수는 소수가 아니므로 false로 변경
                primeArr[j] = false;
            }
        }
    }
    // true로 남아있는 값은 소수이므로 true인 것들만 반환하여 길이를 answer에 저장
    answer = primeArr.filter((el) => el == true).length;
    
    return answer;
}