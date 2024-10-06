function solution(myString) {
    let answer = new Set();
    for(let i of myString){
        answer.add(i);
    }
    let answer1 = [...answer].join('');
    return answer1;
}