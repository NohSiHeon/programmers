function solution(array, n) {
    let answer = 0;
    newArray = array.filter((i)=> i === n);
    answer = newArray.length;
    return answer;
}