function solution(strings, n) {
    let answer = [];
    strings.sort((a, b) => {
        if(a[n] == b[n]){
            return a > b ? 1 : a < b ? -1 : 0;
        } else {
            return a[n] > b[n] ? 1 : -1;
        }
    });
    answer = strings;
    return answer;
}