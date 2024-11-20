function solution(s){
    let answer = true;
    // p와 y의 개수가 누적될 변수 선언
    let pCount = 0;
    let yCount = 0;
    // 문자들을 소문자로 변환
    s = s.toLowerCase();

    // s에 p, y 모두 하나도 없는 경우
    if(!s.includes('p') && !s.includes('y')){
        return true;
    }
    
    // s 문자열의 문자 하나씩 확인
    for(let i = 0; i < s.length; i++){
        // s의 i인덱스가 p이면 xCount 증가, y이면 yCount 증가
        if(s[i] == 'p') pCount++;
        if(s[i] == 'y') yCount++;
    }
    // p와 y의 개수가 같으면 true, 다르면 false를 answer에 할당
    answer = pCount == yCount ? true : false;

    return answer;
}