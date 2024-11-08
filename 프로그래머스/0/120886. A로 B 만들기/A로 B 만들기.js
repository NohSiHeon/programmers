function solution(before, after) {
    let answer = 0;
    // 문자열을 구조분해할당해서 배열로 만들고, 정렬하고, 각 요소를 합침
    before = [...before].sort().join();
    after = [...after].sort().join();
    
    if(before == after){
        answer = 1;
    }
    return answer;
}