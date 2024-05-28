function solution(n, m) {
    let answer = [];
    const numbers = [n, m];
    numbers.sort((a, b) => a - b);
    let [min, max] = numbers;
    
    let cd = [];
    for(let i = 1; i <= min; i++){
        if(min % i ===0 && max % i === 0){
            cd.push(i);
        }
    }    
    answer.push(Math.max(...cd));
    answer.push((max * min)/Math.max(...cd));

    
    return answer;
}