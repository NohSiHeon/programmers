function solution(array) {
    let answer = 0;
    
    // 배열 오름차순 정렬
    array.sort((a, b) => a - b);
    answer = array[parseInt(array.length / 2)];
    
    return answer;
}