function solution(x) {
    let answer = true;
    let arr = String(x).split('').map(Number);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    answer = x % sum == 0 ? true : false;
    return answer;
}