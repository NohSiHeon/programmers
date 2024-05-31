function solution(number) {
    let answer = 0;
    
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j <number.length; j++){
            for(let k = j + 1; k < number.length; k++){
                let sum = 0;
                sum = number[i] + number[j] + number[k];
                console.log(sum);
                answer += sum === 0 ? 1 : 0;
            }
        }
    }
    
    // if(){
    //     answer += 1;
    // }
    
    return answer;
}