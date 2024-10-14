function solution(my_string, num1, num2) {
    let answer = '';
    const arr = my_string.split("");
    const temp1 = my_string[num1];
    const temp2 = my_string[num2];

    arr[num1] = temp2;
    arr[num2] = temp1;
    answer = arr.join("");

    return answer;
}