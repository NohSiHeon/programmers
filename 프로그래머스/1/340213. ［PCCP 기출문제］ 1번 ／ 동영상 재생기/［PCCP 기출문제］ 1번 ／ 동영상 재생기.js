function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    
    // 오프닝 시작과 끝 시간을 MM:SS 형식에서 분과 초로 분리
    let [opStartMM, opStartSS] = op_start.split(":");
    let [opEndMM, opEndSS] = op_end.split(":");
    
    // 동영상 전체 길이를 MM:SS 형식에서 분과 초로 분리
    let [videoMM, videoSS] = video_len.split(":");
    
    // 명령어 배열을 순회하며 각 명령에 따라 현재 위치(pos)를 갱신
    commands.forEach((command) => {
        // 현재 위치(pos)를 MM:SS 형식에서 분과 초로 분리
        let [mm, ss] = pos.split(":");
        mm = +mm;
        ss = +ss;
        
        // 현재 시간이 오프닝 구간(op_start ~ op_end)인지 확인
        if((mm > +opStartMM || (mm == +opStartMM && ss >= +opStartSS)) &&
           (mm < +opEndMM || (mm == +opEndMM && ss <= +opEndSS))
          ){
            // 오프닝 끝나는 위치로 이동
            mm = +opEndMM;
            ss = +opEndSS;
        }

        // prev 명령(10초 전으로 이동)
        if(command == "prev"){
            ss -= 10;
            // 10초 차감된 초가 음수가 되는 경우
            if(ss < 0){
                // 분에서 1분 차감하고, 초에 60을 더해서 재조정하는데, 만약 분 차감했을 때 음수일 경우 맨 처음인 00:00 으로 분, 초 할당 
                mm = mm - 1 < 0 ? "00" : mm - 1;
                ss = mm == "00" ? "00" : 60 + ss;
            }

        // next 명령(10초 후로 이동)
        } else if(command == "next"){
            ss += 10;
            // 증가한 초가 60 이상일 경우
            if(ss >= 60){
                // 1분 추가하고, 초는 60 빼서 재조정
                mm += 1;
                ss -= 60;
            }
            // 동영상 시간을 초과하면 동영상의 끝 시간으로 재조정
            if(mm > +videoMM || (mm == +videoMM && ss > +videoSS)){
                mm = videoMM;
                ss = videoSS;
            }
        }
        
        // 현재 시간이 오프닝 구간(op_start ~ op_end)인지 확인
        if((mm > +opStartMM || (mm == +opStartMM && ss >= +opStartSS)) &&
           (mm < +opEndMM || (mm == +opEndMM && ss <= +opEndSS))
          ){
            // 오프닝 끝나는 위치로 이동
            mm = +opEndMM;
            ss = +opEndSS;
        }
        
        // MM:SS 형식으로 포맷팅
        mm = String(mm).length == 2 ? String(mm) : "0" + mm;
        ss = String(ss).length == 2 ? String(ss) : "0" + ss;
        
        pos = `${mm}:${ss}`;    // 현재 위치 업데이트        
    });
    answer = pos;
    return answer;
}