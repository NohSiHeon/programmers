function solution(order) {
    let answer = 0;
    order = order.toString().split("");

    for(const i of order){
        if(i === "3" || i === "6" || i === "9"){
            answer++;
        }
    }
    return answer;
}