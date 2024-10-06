function solution(strList) {
    let answer = [];
    console.log(strList[0].length);
    for(let i of strList){
        answer.push(i.length);
    }
    return answer;
}