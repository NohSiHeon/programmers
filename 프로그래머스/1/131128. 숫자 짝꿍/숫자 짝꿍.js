function solution(X, Y) {
    let answer = '';
    // X와 Y의 각 문자 횟수를 저장할 객체
    const countX = {};
    const countY = {};
    
    // 문자열 X와 Y를 배열로 변환(각 문자 단위로 분리)
    X = X.split("");
    Y = Y.split("");
    
    // X의 각 문자가 몇 번 나오는지 countX 객체에 저장
    X.forEach((el) => {
        countX[el] = (countX[el] || 0) + 1;
    });
    
     // Y의 각 문자가 몇 번 나오는지 countY 객체에 저장
    Y.forEach((el) => {
        countY[el] = (countY[el] || 0) + 1;
    });

    // X의 각 문자를 순회하면서 Y에도 같은 문자가 있는지 확인
    for(const prop in countX){
        // Y에 해당 문자가 있는 경우
        if(countY.hasOwnProperty(prop)){
            // 공통된 문자의 개수는 countX와 countY 중 작은 값으로 결정
            let countProp = Math.min(countX[prop], countY[prop]);
            // 공통된 문자만큼 answer에 추가
            for(let i = 0; i < countProp; i++){
                answer += prop;
            }
        }
    }
    
    // 공통된 숫자가 없으면 "-1"을 반환
    if(answer.length == 0){
        return answer = "-1";
    }
    
    // 공통된 숫자가 있지만 숫라 변환시 결과가 0일 경우 "0" 반환
    if(Number(answer) == 0){
        return answer ="0";
    }
    
    // 공통된 문자를 내림차순으로 정렬하여 반환
    return answer.split("").sort((a, b) => b - a).join("");
}