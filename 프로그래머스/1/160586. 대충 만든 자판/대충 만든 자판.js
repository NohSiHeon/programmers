function solution(keymap, targets) {
    let answer = [];
    
    targets.forEach(target => {
        // 최소 클릭 수들의 합을 저장할 변수 초기화
        let sum = 0;
        
        for(let i = 0; i < target.length; i++){
            // 클릭수를 저장할 변수 초기화
            let clicks = [];
            
            // keymap 배열 순회
            for(let j = 0; j < keymap.length; j++){
                // keymap의 요소에 targets의 요소를 구성하는 알파벳이 포함되는 경우
                if(keymap[j].includes(target[i])){
                    // clicks배열에 keymap의 요소에 targets의 요소를 구성하는 알파벳의 인덱스 + 1값을 추가
                    clicks.push(keymap[j].indexOf(target[i]) + 1);
                }
            }
            // clicks 배열의 길이가 1 이상일 경우 target의 문자가 포함된다는 뜻
            // 반대로 clicks 배열이 비어있으면 문자가 keymap에서 찾을 수 없다는 뜻            
            if(clicks.length > 0){
                sum += Math.min(...clicks);
            } else {
                sum = -1;
                break;
            }

        }
        // 누적된 합이 1 이상일 경우 sum 을 추가하고, 아닐 경우 -1 추가
        answer.push(sum);
    });
    return answer;
}