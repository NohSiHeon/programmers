function solution(polynomial) {
    let answer = '';
    const arrX = [];
    const arrNum = [];
    const splitPolynomial = polynomial.split(" ");
    
    for(let i = 0; i < splitPolynomial.length; i+=2){
        if(splitPolynomial[i].includes("x")){
            if(splitPolynomial[i].length > 1){
                let splitValue = splitPolynomial[i].split("x");
                arrX.push(+splitValue[0]);
            } else {
                arrX.push(1);
            }
        } else {
            arrNum.push(+splitPolynomial[i]);
        }
    }
    // 배열 arrX의 요소 값을 모두 합침
    const x = arrX.reduce((acc, cur) => acc + cur, 0);
    // 배열 arrNum의 요소 값을 모두 합침
    const num = arrNum.reduce((acc, cur) => acc + cur, 0);

    // x값 계산
    // x가 1 초과일 경우
    if(x > 1){
        // x 뒤에 문자 x를 붙임
        answer += x + "x";
    // x가 1일 경우
    } else if(x === 1){
        // 1x가 아닌 문자 x를 넣음
        answer += "x";
    // x가 없을 경우
    } else {
        // 아무것도 추가하지 않음
        answer += "";
    }
    
    // 숫자 계산
    // num이 1 초과일 경우
    if(num > 0){
        // answer에 x 값이 있을 경우 + 연산자를 붙이고 num 요소 값을 모두 더해서 answer에 추가 아니면 + 안붙이고 추가
        answer +=  answer.length > 0 ? " + " + num : num;
    // num이 없을 경우
    } else {
        // answer에 아무것도 추가하지 않음
        answer += "";
    }
    
    return answer;
}