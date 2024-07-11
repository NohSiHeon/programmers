function solution(my_string) {
    let answer = '';
    // split()를 이용해서 문자열을 배열로 변환(대신 단어 별로 쪼개짐)
    // reverse()를 이용해서 배열을 거꾸로 뒤집기
    // join()를 이용해서 배열의 요소를 연결해서 문자열로 변환(''를 이용하면 쉼표들을 없앨 수 있음)
   answer = my_string.split('').reverse().join('');
    return answer;
}