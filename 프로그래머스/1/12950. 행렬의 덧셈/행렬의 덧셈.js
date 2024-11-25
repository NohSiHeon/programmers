function solution(arr1, arr2) {
    let answer = [];
    
    
    for(let i = 0 ; i < arr1.length; i++){
        // 배열의 길이만큼 2차원 배열 만들기
        answer.push([]);
        for(let j = 0; j < arr1[i].length; j++){
            // 각 자리에 맞는 값 끼리 더해서 answer에도 각 자리에 맡게 할당
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return answer;
}