function isEven(x){
    if (x%2==0) {
        return true;
    }else{
        return false;
    }
}
// let result=isEven(3);
// if (result==true) {
//     console.log("Number is Even");
// }else{
//     console.log("Number is Odd");
// }

for (let index = 0; index <10 ; index++) {
    let result=isEven(index);
    if (result==true) {
        console.log(index, "Even");
    }else{
        console.log(index , "Odd");
    }
    
}