function solution(numbers) {
    let answer = new Set();
    let sum = 0;
    // 오름차순으로 담겨야하기 때문에 처음부터 오름차순 정렬
    numbers.sort((a, b) => a - b);

    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            // 두 요소의 합
            sum = numbers[i] + numbers[j];

            // 이미 있는 값이 아닐 경우에만 추가
            answer.add(sum);
        }
    }

    return [...answer].sort((a, b) => a - b);
}