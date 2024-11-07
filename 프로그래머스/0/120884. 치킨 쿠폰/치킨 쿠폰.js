function solution(coupon) {
    let answer = 0;
    
    // 쿠폰이 10개보다 많을 경우만 반복
    while(coupon >= 10){
        // 받을 수 있는 서비스 치킨 누적
        // 10쿠폰(10치킨)에 1마리 서비스 받을 수 있으니 10으로 나누었을 때 몫을 누적
        answer += Math.floor(coupon / 10);
        
        // 쿠폰 사용했으니 쿠폰 개수 계산
        // 받은 서비스 치킨에 대한 쿠폰 차감하고 서비스 치킨에대한 쿠폰 증가
        coupon = coupon - Math.floor(coupon / 10) * 10 + Math.floor(coupon / 10);
    }
    
    return answer;
}