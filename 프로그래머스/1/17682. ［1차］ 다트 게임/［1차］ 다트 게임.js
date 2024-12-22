function solution(dartResult) {
    let answer = 0;
    const chance = [];  // 기회를 3개로 나누기위한 배열
    let tempNum = "";   // 점수를 담을 임시 변수

    for(let i = 0; i < dartResult.length; i++){
        const input = dartResult[i];
        // 들어온 값이 숫자인지 확인
        if(!isNaN(input)){
            tempNum += input;   // 숫자를 문자열에 붙임
        } else {
            if(input == 'S'){
                chance.push(tempNum ** 1);  // S일 경우 1 제곱하여 배열에 추가
                tempNum = '';   // 임시 변수를 빈 문자열로 초기화
            } else if (input == 'D'){
                chance.push(tempNum ** 2);  // D일 경우 2 제곱하여 배열에 추가
                tempNum = '';   // 임시 변수를 빈 문자열로 초기화
            } else if (input == 'T'){
                chance.push(tempNum ** 3);  // T일 경우 3 제곱하여 배열에 추가
                tempNum = '';   // 임시 변수를 빈 문자열로 초기화
            } else if (input == "*"){
                // chance 배열에 이미 값이 존재할 경우
                if(chance.length){
                    chance[chance.length - 2] *= 2; // 이전에 다룬 값 2배 적용
                }
                chance[chance.length - 1] *= 2; // 현재 다루는 값 2배 적용
            } else {
                chance[chance.length - 1] *= -1;    // 현재 다루는 값 음수로 전환
            }
        }
    }
    answer = chance.reduce((acc, cur) => acc + cur, 0);
    return answer;
}