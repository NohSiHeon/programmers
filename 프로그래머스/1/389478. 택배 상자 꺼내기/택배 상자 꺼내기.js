function solution(n, w, num) {
    let answer = 0;
    let boxNum = 1;
    const floor = Math.ceil(n / w);
    const boxArr = [];

    // i를 증가시키면서 배열에 넣음
    // 배열의 길이가 w와 같아지면 다음 인덱스에서 반복
    for(let i = 0; i < floor; i++){
        // 빈 배열 추가
        boxArr.push([]);
        // 가로로 나열될 개수만큼 반복
        for(let j = 0; j < w; j++){
            // 상자 번호가 최대 상자 수보다 작은 경우 현재 인덱스 배열에 상자 번호 추가
            if(boxNum <= n){
                boxArr[i].push(boxNum);
            }
            
            // 상자 번호가 최대 상자 수보다 커진 경우 null 값 추가
            if(boxNum > n){
                boxArr[i].push(null);
            }
            
            // 다음 반복을 위해 상자 번호 증가
            boxNum++;
        }
        
    }
    
    // 배열 인덱스가 홀수인 경우 순서를 뒤집어서 위치 재정렬
    boxArr.map((box, index) => {
        if(index % 2 !== 0){
            boxArr[index].reverse();
        }
    });
    
    // 원하는 상자 번호의 위치를 찾기 위한 좌표
    let targetX = -1;
    let targetY = -1;
    
    // num 위치 찾기
    for(let i = 0; i < boxArr.length; i++){
        // 현재 인덱스에 찾는 번호가 있을 경우
        if(boxArr[i].includes(num)){
            // 현재 인덱스인 i를 x 좌표로 설정
            targetX = i;
            // 현재 찾는 숫자의 인덱스를 y좌표로 설정
            targetY = boxArr[i].indexOf(num);
        }
    }
    
    // 목표 번호 상자를 꺼내기 위해 차례대로 인덱스만 넘기면서 값이 null이 아니면 상자이므로 꺼내야하는 상자 수 증가
    for(let i = targetX; i < boxArr.length; i++){
        if(boxArr[i][targetY] !== null){
            answer++;
        }
    }
    
    return answer;
}