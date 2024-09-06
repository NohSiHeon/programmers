function solution(rsp) {
    
    return rsp.split('').map((x) => x === '2' ? '0' : x === '0' ? '5' : '2').join("");
}