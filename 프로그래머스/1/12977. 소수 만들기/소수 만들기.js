// 소수 판별 함수
function isPrime(num){
    // 2부터 시작하여 num의 제곱근까지 반복
    for(let i = 2; i * i <= num; i++){
        // 나누어떨어지는 경우 소수가 아니므로 false 반환
        if(num % i == 0){
            return false;
        }
    }
    // 위에서 나누어떨어지지 않을 경우 소수이므로 true 반환
    return true;
}

// 조합 만들기 함수
function getCombinations(arr, cnt){
    // 조합의 크기가 1인 경우, 각 원소를 배열로 변환
    if(cnt == 1) return arr.map((v) => [v]);
    
    // 조합을 저장할 배열
    const combinations = [];
    
    // 배열의 각 원소를 기준으로 조합 생성
    arr.forEach((value, index, array) => {
        const tempArr = array.slice(index + 1); // 현재 원소 이후의 배열 자르기
        const combination = getCombinations(tempArr, cnt - 1);  // 나머지 배열에서 cnt - 1개의 조합 생성
        const returnArr = combination.map((arr) => [value, ...arr]);    // 현재 원소를 조합의 앞에 추가
        combinations.push(...returnArr);    // 생성된 조합을 결과에 추가
    });
    return combinations;
    
}
function solution(nums) {
    let answer = 0;
    
    // 입력 배열에서 3개의 숫자를 선택하는 모든 조합 생성
    const combinations = getCombinations(nums, 3);
    
    // 각 조합의 합을 계산하고 소수 여부 확인
    combinations.forEach((combination) => {
        const sum = combination.reduce((acc, cur) => acc + cur, 0); // 조합의 합 계산
        if(isPrime(sum)) answer++;  // 소수이면 개수 증가
    });
    
    
    return answer;
}