function solution(price, money, count) {
    let answer = -1;
    // 총 비용
    let total = 0;
    
    for(let i = 1; i <= count; i++){
        // 비용 누적
        total += price * i;
    }
    // 가지고 있던 금액이 비용보다 많을 경우 0, 적을 경우 부족한 금액 할당
    answer = money > total ? 0 : total - money;

    return answer;
}