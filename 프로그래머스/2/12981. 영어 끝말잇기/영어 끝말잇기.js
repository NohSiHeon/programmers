function solution(n, words) {
    let answer = [0, 0];
    let set = new Set();
    
    // 첫 단어는 미리 등록
    set.add(words[0]);
    
    // 두 번째 단어부터 순회
    for(let i = 1; i < words.length; i++){
        const currentWord = words[i];   // 현재 사람이 말한 단어
        const prevWord = words[i-1];    // 이전 사람이 말한 단어
        
        // 이미 사용된 단어인지 확인
        if(set.has(currentWord)){
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        // 끝말이 이어지는지 확인
        if(currentWord[0] !== prevWord[prevWord.length - 1]){
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        set.add(currentWord);
    }
    return answer;
}