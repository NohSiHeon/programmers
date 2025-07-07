function solution(elements) {
    
    let answer = 0;
    // 중복되는 값을 제거하기 위한 Set 객체 선언 및 할당
    let set = new Set();
    
    // 수열의 인덱스 접근 시작하여 모든 인덱스에 접근하도록 반복
    for(let i = 0; i < elements.length; i++){
        // 현대 다루는 인덱스가 바뀔때마다 합을 0으로 초기화
        let sum = 0;
        // 수들의 합들을 누적하면서 set 객체에 추가
        // i를 더해야 j값이 배열의 인덱스를 초과하였을 때 % 연산으로 다시 맨 앞 인덱스에 접근할 수 있음
        for(let j = i; j < elements.length + i; j++){
            sum += elements[j % elements.length];
            set.add(sum);
        }
    }
    
    return answer = set.size;
}