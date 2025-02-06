function solution(s) {
    let answer = '';

    [...s].forEach((char, index) => {
        if(index == 0 || [...s][index - 1] == " " && !Number(char)){
            char = char.toUpperCase();
        } else {
            char = char.toLowerCase();
        }
        answer += char;
    })
    
    return answer;
}