function solution(today, terms, privacies) {
    let answer = [];
    
    // 오늘 날짜를 Date 객체로 변환
    today = new Date(today.split(".")[0], today.split(".")[1] - 1, today.split(".")[2]);

    // 각 개인정보 항목을 순회하며 유효기간을 계산
    privacies.forEach((privaciesEl, index) => {
        const past = privaciesEl.split(" ")[0]; // 개인 정보 수집일
        const type = privaciesEl.split(" ")[1]; // 약관 종류
        let yyyy = past.split(".")[0];  // 수집일의 년도
        let mm = past.split(".")[1];    // 수집일의 월
        let dd = past.split(".")[2];    // 수집일의 일

        for(let i = 0; i < terms.length; i++){
            const term = terms[i].split(" ")[0];    // 약관 종류
            const num = terms[i].split(" ")[1];     // 유효 기간

            // 현재 약관 종류와 개인정보 약관 종류가 일치할 경우
            if(type == term){
                mm = Number(mm) + Number(num);  // 유효기간을 월에 더함
                
                // 월이 12를 초과하면 연도와 월을 조정
                if(mm > 12){
                    yyyy = Number(yyyy) + Math.floor(mm / 12);  // 초과 월 수만큼 연도 증가
                    mm = mm % 12;   // 12를 초과한 나머지를 월로 설정
                }
                if(String(mm).length == 1) mm = "0" + String(mm);   // 월이 한 자리일 경우 두 자리로 포맷

                let disposalDate = new Date(yyyy, mm - 1, dd);  // 유효기간 만료일을 Date 객체로 변환
                
                // 만료일이 오늘 날짜 이전(혹은 동일)인지 확인
                if(today >= disposalDate){
                    answer.push(index + 1); // 만료된 개인정보의 인덱스를 결과에 추가
                }
                break;  // 현재 개인정보 계산이 끝났으므로 반복 종료
            }
        }
    });
    // 오름차순 정렬
    return answer.sort((a, b) => a - b);
}