function solution(cipher, code) {
    let answer = '';
    const splitCipher = cipher.split('');
    for(let i = code - 1; i < splitCipher.length; i+=code){
        answer += splitCipher[i];
    }
    return answer;
}