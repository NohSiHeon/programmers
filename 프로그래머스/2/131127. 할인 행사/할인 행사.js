function solution(want, number, discount) {
    let answer = 0;
    
    // 구매하려는 품목과 각 품목의 수량을 저장하는 Map 객체
    const wantItems = new Map();
    
    // 품목과 수량을 Map 객체에 묶어서 할당
    for(let i = 0 ; i < want.length; i++){
        wantItems.set(want[i], number[i]);
    }

    // 당일 기준 10일까지만 반복할 것이기 뒤에서 10개까지는 무의미하기 때문에 -10
    for(let i = 0; i <= discount.length - 10; i++){
        // 현재 할인 시작일(i)로부터 10일 동안의 할인 품목을 잘라냄
        const sliceDiscount = discount.slice(i, i + 10);
        
        // 현재 10일 동안의 할인 품목별 수량을 저장하는 Map 객체
        const sliceDiscountMap = new Map();
        
        // 잘라낸 10일 할인 품목 배열을 순회하며 각 품목의 수량을 계산
        for(const item of sliceDiscount){
            // Map에 이미 품목이 있으면, 수량을 1 증가시키고, 없으면 1로 초기화
            sliceDiscountMap.set(item, (sliceDiscountMap.get(item) || 0) + 1);
        }
        
        // 모든 품목 수량이 다 충족되는 날인지 확인하기 위한 boolean
        let allItemsSatisfied = true;
        
        // 원하는 품목(wantItems)을 순회하며, 실제 할인 품목(sliceDiscountMap)과 비교
        for(const [item, count] of wantItems){
            // 자른 배열에 해당 품목의 수량 조회하는데, 없으면 0 할당
            const currentCount = sliceDiscountMap.get(item) || 0;
            
            // 만약 실제 수량이 원하는 수량보다 적다면, 해당 10일 구간은 조건을 충족하지 못함
            if(currentCount < count){
                // 충족되는 날인지 확인하는 boolean 값을 false로 설정
                allItemsSatisfied = false;
                // 조건을 만족하지 못하므로 더 이상 확인할 필요 없이 반복 종료
                break;
            }
        }
        // 모듬 품목의 수량 조건이 충족되기 때문에 일수 증가
        if(allItemsSatisfied){
            answer++;
        }
    }
    
    return answer;
}