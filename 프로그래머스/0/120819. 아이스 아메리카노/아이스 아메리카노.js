function solution(money) {
    let answer = [];
    // 아메리카노 가격 설정
    const americano = 5500;
    // 마실 아메리카노 수
    const cntAmericano = parseInt(money / americano);
    // 잔돈 구하기
    const change = parseInt(money % americano);
    
    // 배열에 넣기 push()
    answer.push(cntAmericano, change);
    return answer;
}