function solution(dots) {
    let answer = 0;
    const arrX = [];
    const arrY = [];
    // dots 배열 평탄화
    const flatDots = dots.flat();
    // x와 y 담는 배열 따로 만들기
    for(let i = 0; i < flatDots.length; i+=2){
        arrX.push(flatDots[i]);
        arrY.push(flatDots[i+1]);
    }
    // 비교
    if((arrY[0] - arrY[1]) / (arrX[0] - arrX[1]) == (arrY[2] - arrY[3]) / (arrX[2] - arrX[3])){
        answer = 1;
    } else if((arrY[0] - arrY[2]) / (arrX[0] - arrX[2]) == (arrY[1] - arrY[3]) / (arrX[1] - arrX[3])){
        answer = 1;
    } else if((arrY[0] - arrY[3]) / (arrX[0] - arrX[3]) == (arrY[1] - arrY[2]) / (arrX[1] - arrX[2])){
        answer = 1;
    }
    
    
    return answer;
}