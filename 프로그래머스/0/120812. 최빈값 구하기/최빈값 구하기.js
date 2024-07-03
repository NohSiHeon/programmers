function solution(array) {
    let answer = 0;
    let frequency = {};
    
    // 배열이 하나의 요소만 가지고 있다면, 그 요소를 반환
    if(array.length === 1) return array[0];
    
    // 배열을 순회하면서 frequency 객체에 각 요소의 빈도를 저장
    // 요소가 이미 객체에 있다면 값에 1을 더하고, 없다면 값을 1로 설정
    array.forEach((n) => {
        frequency[n] = frequency[n] + 1 || 1;
    });

    // 최대 빈도를 추적하기 위한 변수
    let maxFrequency = 0;
    // 최대 빈도를 가진 숫자의 개수를 추적하기 위한 변수
    let maxFrequencyCount = 0;

    // frequency 객체를 순회하며 최대 빈도를 찾음
    for (let key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
            answer = parseInt(key);  // 현재 키를 정답으로 업데이트
            maxFrequencyCount = 1;   // 개수를 1로 초기화
        } else if (frequency[key] === maxFrequency) {
            maxFrequencyCount++;  // 동일한 최대 빈도를 가진 다른 키가 있으면 개수를 증가
        }
    }

    // 최대 빈도를 가진 숫자가 둘 이상이면 answer를 -1로 설정
    if (maxFrequencyCount > 1) {
        answer = -1;
    }

    return answer;
}