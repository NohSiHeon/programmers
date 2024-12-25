function solution(s, skip, index) {
    let answer = '';
    // 알파벳 배열 선언 및 skip 배열에 포함되지 않은 문자만 필터링
    // skip에 있는 문자는 암호화 과정에서 제외됨
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].filter((v) => !skip.includes(v));
    
    // 문자열 s의 각 문자를 순회하며 암호화 진행
    // 1. 현재 문자(e)의 알파벳 배열 내 위치를 찾음
    // 2. 현재 위치 + index를 계산하여 암호화 후의 위치를 결정
    // 3. 배열 길이를 초과할 경우 % 연산을 사용해 순환 처리
    answer = s.split("").map((e) => alphabet[(alphabet.indexOf(e) + index) % alphabet.length]).join("");
    
    return answer;
}