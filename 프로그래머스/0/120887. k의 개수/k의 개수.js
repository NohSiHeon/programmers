function solution(i, j, k) {
    let answer = 0;
    let splitStart = "";
    // start 부터 시작해서 j 이하까지 반복
    for(let start = i; start <= j; start++){
        
        // start가 두 자리 이상이 될 수 있기 때문에 문자열로 바꾸고 split 메서드로 자리 수별로 쪼개서 할당
        splitStart = start.toString().split("");
        
        // 쪼개진 start의 각 자리가 k인지 확인해서 일치하면 answer 1 증가
        splitStart.forEach(el => {
            if(el == k) answer++;
        });
    }
    return answer;
}