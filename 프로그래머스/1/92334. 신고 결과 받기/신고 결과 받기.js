function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0); // 유저 별 메일 받은 횟수
    report = new Set(report);                       // 중복 신고 제거
    const reportCount = new Map();                  // 어떤 유저가 몇번 신고 당했는지 기록 

    // 신고 당한 유저가 몇번 당했는지 횟수 세기
    report.forEach((el) => {
        // 신고 당한 사람의 이름
        const reported = el.split(" ")[1];
        // 이미 신고 당한 기록이 있으면 기록 +1, 없으면 1
        reportCount.set(reported, (reportCount.get(reported)|| 0) + 1);
    });

    // 정지되는 유저
    const bannedUsers = new Set();
    // k번 이상일 경우 정지될 유저
    for(const [user, cnt] of reportCount){
        if(cnt >= k){
            bannedUsers.add(user);
        }
    }


    report.forEach(el => {
        const [reporter, reported] = el.split(" ");
        // 정지당하는 유저를 신고한 유저에게 메일 전송(신고한 유저의 인덱스를 이용하여 해당 인덱스값 1 증가)
        for(let user of bannedUsers){
            if(reported == user){
                answer[id_list.indexOf(reporter)] += 1;
            }
        }
    })

    return answer;
}