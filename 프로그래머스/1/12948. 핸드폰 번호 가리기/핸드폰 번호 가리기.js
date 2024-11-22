function solution(phone_number) {
    let answer = '';
    
    // 배열로 변환
    phone_number = phone_number.split("");
    
    // 마지막 4자리 전까지만 각 자리를 *로 변경
    for(let i = 0; i < phone_number.length - 4; i++){
        phone_number[i] = "*";
    }
    
    // 배열의 요소를 다 합쳐서 문자열로 변환
    answer = phone_number.join("");


    return answer;
}