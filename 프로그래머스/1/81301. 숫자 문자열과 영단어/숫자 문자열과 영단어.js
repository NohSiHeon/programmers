function solution(s) {
    let answer = 0;
    const num = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    
    // 객체의 각 요소를 이루는 원소에 접근
    for(const [key, value] of Object.entries(num)){
        // 문자열에 key 값이 포함되어 있을 경우 key 문자열을 value로 바꿈
        if(s.includes(key)){
            s = s.replaceAll(key, value);
        }
    }
    answer = +s;
    return answer;
}