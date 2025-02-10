function solution(n) {
    let answer = 0;
    // 숫자 n를 2진수로 변환
    const binaryN = n.toString(2);
    
    // 2진수된 값에서 1의 개수
    let cntOfOneByBinaryN = binaryN.split("").filter((v) => v == '1').length;
    
    // n의 다음 큰 숫자 시작점
    let num = n + 1;                
   
    while(true){
        // 큰 숫자를 2진수로 변환
        let binaryNum = num.toString(2);
        
        // 2진수에 1의 개수
        let cntOfOneByBinaryNum = binaryNum.split("").filter((v) => v == '1').length;

        // n의 2진수 변환된 값에서 1의 개수와 큰 숫자를 2진수 변환된 값에서 1의 개수가 같을 경우 현재 숫자 반환
        if(cntOfOneByBinaryN == cntOfOneByBinaryNum){
            return num;
        }
        // 조건을 만족하지 못하면 숫자 증가
        num++;
    }
}