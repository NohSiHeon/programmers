function solution(friends, gifts) {
    let answer = 0;
    
    const giftCnt = new Map();          // 각 사람이 다른 사람에게 준 선물 횟수를 기록하는 객체
    const giftScore = new Map();        // 각 사람의 선물 지수를 저장하는 객체
    const nextMonthGift = new Map();    // 다음 달 받을 선물 개수를 저장하는 객체
    
    // 모든 친구들에 대해 초기화
    friends.forEach(friend => {
        giftCnt.set(friend, new Map()); // 해당 친구가 다른 친구들에게 준 선물 기록을 저장할 Map 생성
        giftScore.set(friend, 0);       // 선물 지수를 0으로 초기화
        nextMonthGift.set(friend, 0);   // 다음 달 받을 선물 개수를 0으로 초기화
    });
    
    // 선물 기록 및 선물 지수 계산
    gifts.forEach(gift => {
        const [from, to] = gift.split(" ");                               // 선물을 준 사람과 받은 사람을 분리
        giftCnt.get(from).set(to, (giftCnt.get(from).get(to) || 0) + 1);  // key(선물하는 사람), value: {선물받은 사람: 받은 회수}
        giftScore.set(from, giftScore.get(from) + 1);                     // 선물하는 사람의 지수 증가
        giftScore.set(to, giftScore.get(to) - 1);                         // 선물받은 사람의 지수 감소
        
    });
    
    for(let i = 0; i < friends.length; i++){
        for(let j = i + 1; j < friends.length; j++){
            const A = friends[i];   // 선물한 사람
            const B = friends[j];   // 선물받은 사람
            
            const AtoB = giftCnt.get(A).get(B) || 0;    // A가 B에게 선물한 횟수, 없으면 0
            const BtoA = giftCnt.get(B).get(A) || 0;    // B가 A에게 선물한 횟수, 없으면 0
            
            // A가 B보다 선물한 횟수가 더 많으면 다음달에 A가 선물받는 개수 증가하고 적으면 B가 선물받는 개수 증가
            // 위 경우 둘 다 포함이 안되면 선물 지수 비교해서 지수가 높은 사람의 다음달 선물받는 개수 증가
            if(AtoB > BtoA){
                nextMonthGift.set(A, nextMonthGift.get(A) + 1);
            } else if(AtoB < BtoA){
                nextMonthGift.set(B, nextMonthGift.get(B) + 1);
            } else {
                if(giftScore.get(A) > giftScore.get(B)){
                    nextMonthGift.set(A, nextMonthGift.get(A) + 1);
                } else if(giftScore.get(A) < giftScore.get(B)){
                    nextMonthGift.set(B, nextMonthGift.get(B) + 1);
                }
            }
        }
    }

    // 선물 받는 회수가 가장 높은값 할당
    answer = Math.max(...nextMonthGift.values());
    return answer;
}