function solution(numbers, direction) {
    let answer = [];
    if(direction === 'left'){
        // numbers의 첫 번째 요소 제거하고, 제거한 요소를 할당
        const shiftElement = numbers.shift();
        // numbers의 마지막에 추가
        numbers.push(shiftElement);
        // 스프레드 연산자를 이용하여 배열 복사
        answer = [...numbers];
    } else {
        // numbers의 마지막 요소를 제거하고, 제거한 요소를 할당
        const popElement = numbers.pop();
        // numbers의 첫 번째에 추가
        numbers.unshift(popElement);
        // 스프레드 연산자를 이용하여 배열 복사
        answer = [...numbers]
    }
    return answer;
}