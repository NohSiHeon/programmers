function solution(arr) {
    let answer = [];
    // 가장 작은 값 제거
    // arr 배열에 가장 작은값의 인덱스부터 1개만 제거
    arr.splice(arr.indexOf(Math.min(...arr)), 1);

    // 배열이 빈 배열일 경우
    if(arr.length == 0){
        // answer에 -1 추가
        answer.push(-1);
    } else {
        // answer에 arr 대입
        answer = arr;
    }
    return answer;
}