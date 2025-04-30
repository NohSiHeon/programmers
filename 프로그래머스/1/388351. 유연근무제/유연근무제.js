function solution(schedules, timelogs, startday) {
    // 처음에는 모두가 상품 받을 수 있기 때문에 모두를 시작값으로 설정
    let answer = schedules.length;
    
    
    for(let i = 0; i < schedules.length; i++){
        let today = startday;
        // 시간을 분으로 변환 + 분 + 인정해주는 10분
        let possibleTime = Math.floor(schedules[i] / 100) * 60 + schedules[i] % 100 + 10;
        
        
        for(let j = 0; j < 7; j++){
            // 주말일 경우
            if(today == 6 || today == 7){
                today = today % 7 + 1;
                continue;
            }
            // 출근 기록을 분으로 변환
            let convertByMinutes = Math.floor(timelogs[i][j] / 100) * 60 + timelogs[i][j] % 100;
            if(possibleTime < convertByMinutes){
                answer--;
                break;
            }
            today++;
        }
        
    }

    return answer;
}