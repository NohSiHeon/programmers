function solution(lines) {
    let answer = 0;
    
    // 제한 사항에 명시된 숫자의 범위는 -100 부터 100 사이로 총 200개이므로 배열의 길이를 200으로 설정하고, 0으로 각 요소를 채움
    const arr = new Array(200).fill(0);
    
    // 각 선분의 시작과 끝을 반복하며 배열에 기록
    for(let i = 0; i < lines.length; i++){
        // i번째 선분의 시작점부터 끝점 전까지 반복
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            // 배열의 중앙이 숫자 0에 대응하므로, -100부터 100 사이의 값은 100을 더해 인덱스에 맞춰줌
            // 선분이 해당 구간을 덮고 있음을 표시
            arr[j + 100] += 1;
        }
    }
    
    // 중복되는 구간 확인
    // 선분이 2개 이상 겹친 인덱스 위치의 개수를 필터링해서 answer에 할당
    answer = arr.filter((e) => e > 1).length;
    
    return answer;
}