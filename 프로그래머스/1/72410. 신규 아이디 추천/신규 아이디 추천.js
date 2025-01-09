function solution(new_id) {
    let answer = '';
    
    // 1단계
    new_id = new_id.toLowerCase();
    console.log("1단계 후 => ", new_id);
    
    // 2단계
    for(let i = 0; i < new_id.length; i++){
        if(new_id[i].charCodeAt(0) >= 97 && new_id[i].charCodeAt(0) <= 122){
            continue;
        } else if(new_id[i] == '-' || new_id[i] == '_' || new_id[i] == '.'){
            continue;
        } else if(!isNaN(parseInt(new_id[i]))){
            continue;
        } else {
            new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
        }
    }
    console.log("2단계 후 => ", new_id);
    
    // 3단계
    new_id = new_id.replace(/\.{2,}/g, ".");
    console.log("3단계 후 => ", new_id);
    
    // 4단계
    if(new_id[0] == '.') new_id = new_id.replace(new_id[0], "");
    console.log("4단계 후 => ", new_id);
    
    // 5단계
    if(new_id.length < 1) new_id = 'a';
    console.log("5단계 후 => ", new_id);
    
    // 6단계
    if(new_id.length >= 16){
        new_id = new_id.substr(0, 15);  
    }
    console.log(new_id[new_id.length - 1]);
    if(new_id[new_id.length - 1] == '.'){
        new_id = new_id.substr(0, new_id.length - 1);
    }
    console.log("6단계 후 => ", new_id);
    
    // 7단계
    if(new_id.length <= 2){
        while(new_id.length !== 3){
            new_id += new_id[new_id.length - 1];
        }
        
    }
    console.log("7단계 후 => ", new_id);
    return answer = new_id;
}