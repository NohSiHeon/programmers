function solution(park, routes) {
    let answer = [];                // 현재 좌표
    const maxH = park.length;       // 공원의 세로 길이
    const maxW = park[0].length;    // 공원의 가로 길이
    
    // S 찾기 (시작점 찾기)
    for(let i = 0; i < park.length; i++){
        if(park[i].includes('S')){
            answer = [+i, park[i].indexOf('S')];
            break;
        }
    }

    for(let i = 0 ; i < routes.length; i++){
        let route = routes[i];          // 방향과 이동 거리
        let [op, n] = route.split(" "); // 방향, 이동 거리 따로 할당
        n = +n;                         // 이동거리 숫자 타입으로 변환
        // 동쪽 이동
        if(op == 'E'){
            // 공원 밖으로 나가지는지 확인 || 가는 길에 X가 있는지 (slice)
            if(maxW <= answer[1] + n || park[answer[0]].slice(answer[1], answer[1] + n + 1).includes('X')){
                continue;
            }
            answer[1] += n;
        }
        // 서쪽 이동
        if(op == 'W'){
            // 공원 밖으로 나가지는지 확인 || 가는 길에 X가 있는지 (slice)
            if(0 > answer[1] - n || park[answer[0]].slice(answer[1] - n, answer[1] + 1).includes('X')){
                continue;
            }
            answer[1] -= n;
        }
        // 남쪽 이동
        if(op == 'S'){
            // 공원 밖으로 나가지는지 확인
            if(maxH <= answer[0] + n){
                continue;
            }
            
            let canMove = true;
            for(let j = 1; j <= n; j++){
                if(park[answer[0] + j][answer[1]] == 'X'){
                    canMove = false;
                    break;
                }
            }
            if(canMove) answer[0] += n;
        }
        // 북쪽 이동
        if(op == 'N'){
            // 공원 밖으로 나가지는지 확인
            if(0 > answer[0] - n){
                continue;
            }
            let canMove = true;
            for(let j = 1; j <= n; j++){
                if(park[answer[0] - j][answer[1]] == 'X'){
                    canMove = false;
                    break;
                }
            }
            if(canMove) answer[0] -= n;
        }
    }

    return answer;
}