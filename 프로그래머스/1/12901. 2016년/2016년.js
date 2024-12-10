function solution(a, b) {
    let answer = '';
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dDay = new Date(month[a - 1] + " " + b + " " + 2016);

    answer = day[dDay.getDay()];
    return answer;
}