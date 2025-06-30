function solution(k, tangerine) {
    let answer = 0;
    let obj = {};
    
    // 각 귤 크기별로 개수를 세어 객체에 저장
    tangerine.map((x) => {
        if(obj[x] === undefined){
            obj[x] = 1; // 해당 크기가 처음 나오면 1로 초기화
        } else {
            obj[x] += 1; // 이미 있으면 개수 증가
        }
    });
    
    // 각 크기의 개수만 추출하여 내림차순 정렬
    // 많이 나온 크기부터 선택하기 위함
    const cntArr = Object.values(obj).sort((a, b) => b - a);
    
    // 귤 개수를 많이 가진 종류부터 차례로 선택하여 k개를 채움
    for(let i = 0; i < cntArr.length; i++){
        k = k - cntArr[i];  // 해당 종류의 귤을 전부 선택
        answer++;           // 선택한 귤 종류의 수 증가
        if(k <= 0){
            break;          // k개 이상을 채웠으면 반복 종료
        }
    }
    
    return answer;
}