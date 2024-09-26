function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b)=> a - b);
    answer = numbers.pop()*numbers.pop();

    return answer;
}