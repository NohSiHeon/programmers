function solution(numlist, n) {
    let answer = [];
    answer = numlist.sort((a, b) => {
        // 요소와 n의 차이를 diffA, diffB에 할당
        const diffA = Math.abs(a - n);
        const diffB = Math.abs(b - n);
        
        // 만약 차이가 같으면 큰 값이 먼저 오도록 정렬(내림차순 정렬)
        if(diffA  === diffB){
            return b - a;
        }
        
        // diffA - diffB의 값이 양수이면 diffB가 먼저 오도록, 음수이면 diffA가 먼저 오도록 정렬
        return diffA - diffB;
    })
    return answer;
}