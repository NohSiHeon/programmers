function solution(id_pw, db) {
    let answer = '';
    
    // db 배열 순회
    for(let i = 0; i < db.length; i++){
        // 존재하는 id인지 조회
        if(db[i][0] === id_pw[0]){
            // 비밀번호도 같은지 비교
            // 비밀번호가 같을 경우 login, 다를 경우 wrong pw 할당
            answer = db[i][1] === id_pw[1] ? "login" : "wrong pw";
            break;
        // 입력한 id가 db에 존재하지 않을 경우
        } else {
            answer = "fail";
        }
    }

    return answer;
}