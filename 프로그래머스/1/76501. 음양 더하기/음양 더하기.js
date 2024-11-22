function solution(absolutes, signs) {
    let answer = 0;
    
    for(let i = 0; i < absolutes.length; i++){
        // signs의 요소가 true이면 양수, false이면 음수 더하기
        answer += signs[i] == true ? +absolutes[i]: -absolutes[i];
    }
    return answer;
}