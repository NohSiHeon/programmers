function solution(a, b) {
    let answer = '';
    // 요일 형식 지정
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // 2016, a, b
    // ex) 2016, 5, 24
    let dateStr = '2016, ' + a + ', '+ b;
    
    // Date 객체 만들기
    let date = new Date(dateStr);
    
    // getDay를 이용해서 0 ~ 6 사이 숫자 값 구하기
    // 만든 요일 배열의 인덱스에 date.getDay() 한것을 대입
    answer = day[date.getDay()];
    
    return answer;
}