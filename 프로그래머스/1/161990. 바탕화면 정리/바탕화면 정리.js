function solution(wallpaper) {
    let answer = [];
    const x = [];   // 파일이 존재하는 x(행) 좌표를 저장할 배열
    const y = [];   // 파일이 존재하는 y(열) 좌표를 저장할 배열
    
    for(let i = 0; i < wallpaper.length; i++){
        let file = wallpaper[i];    // 현재 행을 file 변수에 저장
        // 현재 행에 파일이 있는 동안 반복
        while(file.includes('#')){
            x.push(i);  // 현재 행 번호를 x 배열에 추가
            y.push(file.indexOf('#'));  // #이 처음 나타난 열 번호를 y 배열에 추가
            file = file.replace('#', ".");  // #을 .으로 치환하여 다음 #을 찾을 수 있게 함
        }
    }
    // 정답 배열에 최소/최대 좌표를 기반으로 드래그 영역 좌표 추가
    answer.push(
        Math.min(...x),     // 파일이 있는 최소 x 좌표 (시작 행)
        Math.min(...y),     // 파일이 있는 최소 y 좌표 (시작 열)
        Math.max(...x) + 1, // 파일이 있는 최대 x 좌표 + 1 (끝 행)
        Math.max(...y) + 1  // 파일이 있는 최대 y 좌표 + 1 (끝 열)
    );
    return answer;
}