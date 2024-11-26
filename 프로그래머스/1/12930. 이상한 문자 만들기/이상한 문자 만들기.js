function solution(s) {
    let answer = [];
    // 공백을 기준으로 문자열을 단어 단위로 나눔
    s = s.split(" ");

    s = s.map(x => {
        // 단어 x를 구성하는 각 문자를 배열로 변환
        x = x.split("");
        for(let i = 0; i < x.length; i++){
            // 인덱스가 홀수인 경우 소문자로 변환
            if(i % 2 == 1){
                x[i] = x[i].toLowerCase();
            // 인덱스가 짝수인 경우 대문자로 변환
            } else {
                x[i] = x[i].toUpperCase();
            }
        }
        // 배열을 다시 문자열로 변환
        x = x.join("");
        // 변환된 문자열을 answer 배열에 추가
        answer.push(x);
    });
    // 단어들을 공백으로 구분하여 하나의 문자열로 합침
    answer = answer.join(" ");
    return answer;
}