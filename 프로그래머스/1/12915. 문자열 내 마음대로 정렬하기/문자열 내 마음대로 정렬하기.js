function solution(strings, n) {

    // 1. 특정 인덱스 가져오기
    for(let i = 0; i < strings.length; i++){
        strings[i] = strings[i][n] + strings[i];
    }

    // 2. 인덱스 값 사전순 정렬
    strings.sort();

    // 3. 요소 값 원 상태로 되돌리기
    // replace(): 첫 번째 인자를 두 번째 인자로 변경
    for(let j = 0; j < strings.length; j++){
        strings[j] = strings[j].replace(strings[j][0], "")
    }

    return strings;
}