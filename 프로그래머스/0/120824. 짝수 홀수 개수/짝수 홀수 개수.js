function solution(num_list) {
    let answer = [];
    // 짝수
    let even = 0;
    // 홀수
    let odd = 0;
    // num_list 의 요소를 2로 나누었을 때 나머지가 0이면
    // 짝수이므로 even값 증가, 나머지가 1이면 홀수이므로 odd 값 증가
    num_list.map((i)=> i % 2 === 0 ? even++ : odd++);
    answer.push(even, odd);
    return answer;
}