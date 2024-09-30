function solution(my_string) {
    let answer = '';
    const popString = ['a', 'e', 'i', 'o', 'u'];
    answer = my_string.split('');
    
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < popString.length; j++){
            if(answer[i] === popString[j]){
                answer.splice(i, 1);
                i--;
            }
        }
    }

    return answer.join('');
}