function solution(array, commands) {
    let answer = [];
    let temp = [];
    
    commands.map((i) => {
        
        // array에서 i[0]-1부터 i[1]까지 자름 
        temp = array.slice(i[0] - 1, i[1]);
        
        // 잘라낸 배열을 오름차순 정렬
        temp.sort((a, b) => a - b);
        
        // 잘라내고 정렬한 배열에서 i[2]-1번째 값을 결과 배열에 추가
        answer.push(temp[i[2] - 1]);
        
        // temp 초기화
        temp = [];
    })
    return answer;
}