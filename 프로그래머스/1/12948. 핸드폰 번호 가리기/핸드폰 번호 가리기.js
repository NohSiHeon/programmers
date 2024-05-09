// function solution(phone_number) {
//     let answer = '';
//     for(let i = 0; i < phone_number.length - 4; i++){
//         answer += phone_number[i].replace(phone_number[i], "*");
//     }
//     answer = answer + phone_number.substring(phone_number.length - 4);

//     return answer;
// }

function solution(phone_number) {
    let answer = '';
    answer = "*".repeat(phone_number.length - 4) + phone_number.substring(phone_number.length - 4);

    return answer;
}