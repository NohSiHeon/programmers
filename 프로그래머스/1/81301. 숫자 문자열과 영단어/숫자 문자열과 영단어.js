function solution(s) {
    let answer = s;
    const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < str.length; i++){
        
        // split(): string 객체를 ()안에 들어가는 것을 이용하여 문자열을 나누고 배열로 반환
        // () 안에 들어가는 것이 문자열 안에 있는 문자와 같다면
        // 배열에서 그 문자는 사라지고 공백과 나머지 문자열을 배열로 반환
        let arr = answer.split(str[i]);
        
        // join(): 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환
        answer = arr.join(i);
    }
    
    return parseInt(answer);
}