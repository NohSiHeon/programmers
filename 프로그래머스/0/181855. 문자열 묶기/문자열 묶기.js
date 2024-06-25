function solution(strArr) {
    let answer = 0;
    
    // strArr의 각 요소의 길이로 된 배열 만들기
    const arr = strArr.map(e => e.length);
    
    // 빈 객체 만들기
    const result = {};
    
    // arr 배열의 각 요소를 이용하여 result 객체에 값 넣기
    // result[x] 값이 있으면 값에다가 + 1 해서 값 증가
    // result[x] 값이 없으면 0에다가 + 1 한 값인 요소 추가
    arr.forEach((x) => {
        result[x] = (result[x] || 0) + 1;
    });

    // result 객체에 값들을 spread operator로 풀어서 가장 큰 값을 answer에 할당
    answer = Math.max(...Object.values(result));

    return answer;
}