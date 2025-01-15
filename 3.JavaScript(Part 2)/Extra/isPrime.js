function isPrime(x){
   for( i=2;i<x;i++)
    {
    if (x%i==0) {
        return false;
    }else{
        return true;
    }
}
}
console.log(isPrime(5));