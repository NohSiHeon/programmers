function solution(lottos, win_nums) {
    let answer = [];
    let [maxMatch,minMatch] = [0, 0];   // 같은 숫자 개수를 담을 변수
    let [maxRank, minRank] = [0, 0];    // 최대 순위를 담을 변수
    
    // 같은 숫자 최소 개수 구하기
    for(let i = 0; i < lottos.length; i++){
        for(let j = 0; j < win_nums.length; j++){
            if(lottos[i] == win_nums[j]) minMatch++;
        }
    }
    // 최대 개수 구하기(최소 개수 + 0의 개수)
    maxMatch = lottos.filter((v) => v == 0).length + minMatch;

    maxRank = maxMatch == 0 || maxMatch == 1 ? 6 : 7 - maxMatch;
    minRank = minMatch == 0 || minMatch == 1 ? 6 : 7 - minMatch;
    answer.push(maxRank, minRank);
    return answer;
}