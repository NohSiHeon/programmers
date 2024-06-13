function solution(s) {
    let answer = [];
    let arr = [];
    

    
    for(let i = 0; i < s.length; i++){

        // s[i] 값이 arr 배열에 포함되어있는지 확인
        if(!arr.includes(s[i])){
            // arr 배열에 s[i] 값이 없으면 answer 배열에 -1 
            answer.push(-1);
            // arr 배열에는 s[i] 값 넣기
            arr.push(s[i]);
        } else {
            // arr 배열에 s[i] 값이 있으면 answer 배열에 arr의 길이를 arr 배열을 역순으로 탐색하여 포함되어있는 값의 인덱스로 뺀 값 넣기 
            answer.push(arr.length - arr.lastIndexOf(s[i]));
            // arr 배열에는 s[i] 값 넣기
            arr.push(s[i]);
        }
    }

    return answer;
}