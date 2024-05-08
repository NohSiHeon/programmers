function solution(absolutes, signs) {
    let result = 0;
    for (let i = 0; i < signs.length; i++) {
        result = signs[i] === false ? result - absolutes[i] : result + absolutes[i];

    }
    return result;
}
