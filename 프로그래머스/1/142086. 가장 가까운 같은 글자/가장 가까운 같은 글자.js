function solution(s) {
    let answer = [];
    let arr = [];
    
    for(let i = 0; i < s.length; i++){
        // 문자가 포함되지 않을 경우 -1 추가 및 arr에 s[i] 넣기
        if(!arr.includes(s[i])){
            answer.push(-1);
            arr.push(s[i]);
        // 문자가 포함되는 경우
        } else {
            // lastIndexOf: 같은 문자가 여러개일 경우 뒤에서 접근해야 더 가까운 인덱스에 접근 가능
            answer.push(arr.length - arr.lastIndexOf(s[i]));
            arr.push(s[i]);
        }
    }
    
    return answer;
}