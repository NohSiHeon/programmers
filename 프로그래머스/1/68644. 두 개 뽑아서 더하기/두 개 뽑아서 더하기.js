function solution(numbers) {
    let answer = [];
    let newArr = [];
    numbers.sort((a, b) => a - b);
    // numbers 배열에서 두 개의 수를 뽑아서 더하기
    for(let i = 0 ; i < numbers.length; i++){
        for(let j = 1; j < numbers.length; j++){
            if(i === j){
                continue;
            }
             answer.push(numbers[i] + numbers[j]);
        }
    }
    
    // 중복 값 제거
    // answer 배열 순회
    answer.forEach(e => {
        // 만약 newArr 배열에 answer 요소 값이 없으면 newArr 배열에 요소 값 추가
        if(!newArr.includes(e)){
            newArr.push(e);
        }
    });

    return newArr.sort((a, b) => a - b);
}