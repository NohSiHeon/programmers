// 주어진 이진수 문자열 i를 길이 n만큼 왼쪽에서부터 0으로 채움
function CheckLength(i, n){
    while(i.length < n) i = "0" + i;
    
    return "" + i;
}
function solution(n, arr1, arr2) {
    let answer = [];
    let temp = "";

    for(let i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i].toString(2);
        arr1[i] = CheckLength(arr1[i], n);
        arr2[i] = arr2[i].toString(2);
        arr2[i] = CheckLength(arr2[i], n);

    }
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[i].length; j++){
            // 두 배열의 해당 자리 값 중 하나라도 1이면 "#"을 추가하고, 그렇지 않으면 " "를 추가
            if(arr1[i][j] == 1 || arr2[i][j] == 1){
                temp += "#";
            } else {
                temp += " ";
            }
        }
        // 한 행(row)을 완성한 후 결과 배열에 추가하고, 다음 행을 위해 temp를 초기화
        answer.push(temp);
        temp = "";
    }
    
    return answer;
}