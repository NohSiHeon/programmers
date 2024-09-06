function solution(letter) {
    let answer = '';
    // 모스 부호
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    
    // 모스 목록을 배열로 변환
    // Object.entries : 객체를 배열로 변환하면서 key, value 다 가져옴
    const arrayMorse = Object.entries(morse);
    
    // letter 공백으로 구분하기
    const splitLetter = letter.split(" ");
    
    // letter의 길이 만큼 반복
    for(let i = 0; i < splitLetter.length; i++){
        
        // morse의 길이만큼 반복
        for(let j = 0; j < arrayMorse.length; j++){
            
            // letter의 모스부호와 모스부호 목록이 같을 때 answer 에 누적
            if(splitLetter[i] === arrayMorse[j][0]){
                answer += arrayMorse[j][1];
            }
        }
    }

    return answer;
}