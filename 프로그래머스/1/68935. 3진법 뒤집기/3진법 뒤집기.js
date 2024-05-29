function solution(n) {
    let answer = 0;
    let num = 0;
    
    let baseThree = n.toString(3).split('').reverse();
    let threeToTen = baseThree.map(Number);
    console.log(threeToTen);
    // console.log(threeToTen.length);
    
    for(let i = threeToTen.length - 1; i >= 0; i--){
       answer += threeToTen[i] * (3**num);
        num++;
    }


    return answer;
}