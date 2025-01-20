function solution(bandage, health, attacks) {
    let answer = 0;
    let time = 0;               // 현재 시간
    const maxHealth = health;   // 최대 체력
    let successTime = 0;        // 붕대 감기 연속 성공 횟수
    let i = 0;                  // 공격 처리 인덱스
    
    
    while(i < attacks.length){
        time++; // 시간 경과 처리
        
        // 현재 시간이 공격하는 시간일 경우
        if(attacks[i][0] == time){
            health -= attacks[i][1];    // 공격으로 체력 감소
            
            // 체력이 0 이하가 되면 게임 종료
            if(health < 1){
                return answer = -1;
            }
            successTime = 0;            // 붕대 감기 연속 성공 횟수 초기화
            i++;                        // 다음 공격으로 진행
            
        // 공격 시간이 아닌 경우
        } else {
            successTime++;              // 붕대 감기 연속 성공 횟수 증가

            // 붕대 감기에 연속 성공하여 추가 효과 발동
            if(successTime == bandage[0]){
                successTime = 0;        // 추가 효과 발동 후 초기화
                health = health + bandage[1] + bandage[2];  // 추가 효과 포함 체력 회복

            // 일반적인 붕대 감기
            } else {
                health += bandage[1];   // 체력 회복 적용
            }
            
            // 체력이 최대 체력을 넘을 경우 최대 체력으로 설정
            if(health > maxHealth) health = maxHealth;
        }
    }
    
    answer = health;    // 남은 체력 반환
    return answer;
}