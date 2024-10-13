function solution(numbers) {
    
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    arr.map((value, index) => {
        numbers = numbers.split(value).join(index);
    })
    
    return +numbers;
}