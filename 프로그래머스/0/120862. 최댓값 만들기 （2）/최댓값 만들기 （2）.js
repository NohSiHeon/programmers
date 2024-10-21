function solution(numbers) {
    let answer = 0;
    // 배열을 오름차순으로 정렬 
    numbers.sort((a,b) => a - b);
    
    // 큰 값 2개에대한 곱셈
    const multiply1 = numbers[numbers.length -1] * numbers[numbers.length -2];
    // 작은 값 2개에대한 곱셈
    const multiply2 = numbers[0] * numbers[1];
    // 둘 중 더 큰 값을 answer에 할당
    answer = multiply1 > multiply2 ? multiply1 : multiply2;
    
    return answer;
}