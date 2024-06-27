function solution(todo_list, finished) {
    let answer = [];
    
    // finished의 i 인덱스가 true, false 에 따라 마친 일, 마치지 못한 일인지 구분
    
    for(let i = 0; i < todo_list.length; i++){
        if(finished[i] === false){
            answer.push(todo_list[i]);
        }
    }
    
    return answer;
}