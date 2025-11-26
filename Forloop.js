function naturalNum(n){
let sum = 0;
    for(let i=1; i<=n; i++){
        sum= sum + i;
    }
    return sum;
}
console.log("Sum of n natural number is", sum(5));