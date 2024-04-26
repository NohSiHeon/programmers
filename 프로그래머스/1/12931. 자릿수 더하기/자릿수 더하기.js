function solution(n)
{
    var answer = 0;
    let newN = String(n);
    
    for(let i = 0; i < newN.length; i ++){
        answer += parseInt(newN[i]);
    }
 
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
//     let n100 = parseInt(n / 100);
//     let n10 = parseInt(n % 100 / 10);
//     let n1 = parseInt(n % 10);
//     answer = n100 + n10 + n1;
    return answer;
}