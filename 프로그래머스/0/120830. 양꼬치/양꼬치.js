function solution(n, k) {
    const service = Math.floor(n / 10);
    k -= service;
    const pay = n * 12000 + k * 2000;
    
    return pay;
}