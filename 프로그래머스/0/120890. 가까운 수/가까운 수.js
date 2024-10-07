function solution(array, n) {
    array.sort((a,b) => a - b);
    let answer = 0;
    let gaps = [];

    // 1. array를 순회
    for(const i of array){
        // n과 i를 뺄셈하여 절댓값으로 변환 후 배열 gaps에 추가
        gaps.push(Math.abs(n - i));
    }

    
    
    return answer = array[gaps.indexOf(Math.min(...gaps))];
}