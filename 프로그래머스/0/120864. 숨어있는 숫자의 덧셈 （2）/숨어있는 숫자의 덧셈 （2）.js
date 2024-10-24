function solution(myString) {
    let answer = 0;
    let numArr = [];
    let num = "";

    const splitMyString = myString.split("");
    
    for(let i = 0; i < splitMyString.length; i++){
        // 현재 요소가 숫자일 경우
        if(!isNaN(+splitMyString[i])){
            if(!isNaN(splitMyString[i-1])){
                numArr[numArr.length - 1] = numArr[numArr.length - 1] + splitMyString[i];
            } else {
                numArr.push(splitMyString[i]);
            }
        }
    }
    answer = numArr.reduce((acc, cur) => acc + +cur, 0);
    return answer;
}