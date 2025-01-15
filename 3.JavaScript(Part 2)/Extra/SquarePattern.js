function squarePattern(n){
    for(let row=0;row<n;row++){
        let str="";
        for(let stars=0;stars<n;stars++){
           str+="*";
        }
        console.log(str)
    }
}
squarePattern(6);