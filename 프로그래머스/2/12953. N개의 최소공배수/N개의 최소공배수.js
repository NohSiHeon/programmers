const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b);
const getLCM = (a, b) => a * b / getGCD(a, b);

function solution(arr) {

    return arr.reduce((lcm, num) => getLCM(lcm, num), 1);
}