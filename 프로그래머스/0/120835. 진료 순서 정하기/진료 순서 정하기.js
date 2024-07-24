function solution(emergency) {
    
    // 배열 얕은 복사 후 내림차순 정렬
    let sorted = emergency.slice().sort((a, b) => b - a);
    
    // 새로운 배열 반환
    return emergency.map(i => sorted.indexOf(i) + 1);
}