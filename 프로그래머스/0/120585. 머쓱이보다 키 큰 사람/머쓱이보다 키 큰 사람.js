function solution(array, height) {
    let answer = 0;
    answer = array.filter((i) => i > height).length;
    return answer;
}