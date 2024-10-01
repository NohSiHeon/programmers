function solution(my_string) {
    let answer = [];
    let splitMyString = my_string.split('');
    for(const i of splitMyString){
        if(i-i === 0){
            answer.push(+i);
        }
    }
    answer.sort((a, b) => a - b);
    
    return answer;
}