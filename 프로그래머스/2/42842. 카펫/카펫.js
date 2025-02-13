function solution(brown, yellow) {
    const divisors = [];      // 약수를 저장할 배열

    const sum = brown + yellow; // 총 카펫의 격자 개수 (brown과 yellow의 합)
    
    // 카펫의 가로와 세로 길이를 구하기 위한 약수 찾기
    // 약수는 대칭적으로 나오므로 sqrt(sum)까지 탐색하면 절반을 구할 수 있음
    for(let i = 1; i <= Math.sqrt(sum); i++){
        
        // sum을 i로 나누었을 때 나머지가 0이면 i와 sum/i는 약수 쌍이므로 divisors 배열에 추가
        if(sum % i == 0){
            divisors.push([sum / i, i]);    // [가로, 세로] 형식으로 추가
        }
    }
    
    // divisors 배열에서 가로, 세로 길이를 순회
    for(let i = 0; i < divisors.length; i++){
        // 약수 쌍을 하나씩 가져와 가로와 세로 길이를 분리
        let [width, height] = divisors[i];
        
        // 카펫의 가로와 세로에서 2씩 빼면 yellow 영역의 크기가 되므로 해당 값이 yellow와 일치하는지 확인
        if((width - 2) * (height - 2) == yellow){
            // 조건을 만족하는 가로, 세로 길이를 반환
            return [width, height];
        }
    }

}