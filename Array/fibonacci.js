//find the fibonacci series until given number n
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return [0,1];
    }
    let fib_sequence=[0,1];
    for(let i=2;i<n;i++){
        fib_sequence[i]=fib_sequence[i-1]+fib_sequence[i-2];
    }
    return fib_sequence;
}
let result=fibonacci(10);
console.log(`Fibonacci series:${result}`);