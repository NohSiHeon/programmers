function solution(numer1, denom1, numer2, denom2) {
    let answer = [];

    // 통분하기
    let denom = denom1 * denom2;
    
    // 분자 값도 원래 값과 일치하도록 곱한 값을 더하기
    let numer = numer1 * denom2 + numer2 * denom1;
    
    // 약분하기
    const gcd = (numer, denom) => numer % denom === 0 ? denom : gcd(denom, numer % denom);
    // answer 배열에 값 분자, 분모 값 넣기
    answer[0] = numer / gcd(numer, denom);
    answer[1] = denom / gcd(numer, denom);
    
    return answer;
}