function solution(name, yearning, photo) {
    let answer = [];
    
    let sum = 0;
    
    photo.map((v) => {
        // 현재 사진에서 name 배열에 포함된 이름만 필터링
        let includeName = name.filter((x) => v.includes(x));
        
        // 포함된 이름들의 yearning 값 누적
        includeName.map((n) => {
            sum += yearning[name.indexOf(n)];
        });
        // 현재 사진에 대한 누적 점수를 결과 배열에 추가
        answer.push(sum);
        // 다음 사진의 추억 점수 계산을 위해 0으로 초기화
        sum = 0;
        
    });
    return answer;
}