function solution(age) {
    var answer = '';
    // 알파벳 정의
    const alphabet = 'abcdefghij';
    // age를 toString()으로 문자열로 변환하고, split()을 이용하여 여러 문자로 나누기
    age = age.toString().split('');
    // map 메서드를 이용해서 age 순회하는데, alphabet의 a번째를 answer에 join(반환)
    answer = age.map((a) => alphabet[a]).join('');
    return answer;
}