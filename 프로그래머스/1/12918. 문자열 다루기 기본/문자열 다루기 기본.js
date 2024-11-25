function solution(s) {
    let answer = true;
    // 문자열의 길이가 4혹은 6이면서, 문자열s에 문자가 있는지 parseInt로 확인
    // parseInt는 문자를 숫자로 변환하는데, 숫자형 문자만 변환이 가능하기 때문에 숫자형 문자가 아니면 같을 수 없음
    answer = (s.length == 4 || s.length == 6) && s == parseInt(s) ? true : false;
    return answer;
}