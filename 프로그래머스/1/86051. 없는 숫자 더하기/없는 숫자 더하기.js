function solution(numbers) {
    let answer = 0;

    for(let i = 1; i <= 9; i++){
        // 요소에 i가 있으면 0, 없으면 i값 누적
        answer += numbers.includes(i) ? 0 : i; 
    }
    return answer;
}