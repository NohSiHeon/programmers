function solution(n,a,b) {
    let answer = 0;

    // a와 b가 같은 번호가 될 때까지 라운드 반복
    // 각 라운드마다 번호는 Math.ceil(현재 번호 / 2)로 갱신
    // 1번 vs 2번 → 1번, 3번 vs 4번 → 2번, ... 식의 다음 라운드 배정 규칙성이 있음

    while(a !== b){
        answer++;
        a = Math.ceil(a / 2);
        b = Math.ceil((b / 2));
    }


    return answer;
}