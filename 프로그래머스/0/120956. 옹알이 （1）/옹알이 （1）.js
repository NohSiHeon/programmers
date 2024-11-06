function solution(babbling) {
    let answer = 0;
    // 문자열을 임시로 담을 변수 선언
    let str = "";
    
    // 가능한 발음들의 배열
    const psb = ['aya', 'ye', 'woo', 'ma'];
    
    // 문자열 순회
    babbling.forEach(el => {
        // 문자열을 str에 할당
        str = el;
        // 가능한 발음으로 구성된 배열 순회
        psb.forEach(word => {
            // 문자열에 가능한 발음이 포함되어있는지 확인
            while(str.includes(word)){
                // 문자열에 가능한 발음을 x로 변경
                str = str.replace(word, "x");
            }
        });
        // x 모두를 공백으로 변경
        str = str.replaceAll("x", "");
        // 단어가 x로 변했었고, x를 모두 공백으로 변경했을 때 길이가 0이면 가능한 단어들로만 구성되어있었기 때문에 증가
        answer += str.length === 0 ? 1 : 0;
    })

    return answer;
}