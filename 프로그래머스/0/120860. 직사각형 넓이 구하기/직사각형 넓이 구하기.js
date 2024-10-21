function solution(dots) {
    let answer = 0;
    let minX = dots[0][0];
    let maxX = dots[0][0];
    let minY = dots[0][1];
    let maxY = dots[0][1];
    // x의 가장 큰 값과 가장 작은 값, y의 가장 큰 값과 가장 작은 값 구하기
    for(let i = 0; i < dots.length; i++){
        if(minX > dots[i][0]){
            minX = dots[i][0];
        }
        if(maxX < dots[i][0]){
            maxX = dots[i][0];
        }
        if(minY > dots[i][1]){
            minY = dots[i][1];
        } 
        if(maxY < dots[i][1]){
            maxY = dots[i][1];
        }        
    }
    return answer = (maxX - minX) * (maxY - minY);
}