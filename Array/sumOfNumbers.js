//given a number 'n',find the sum of all the multiples of 3 or 5.
function multiples(n){
    let sum=0;
    for(let i=0;i<n;i++){
        if(i%3==0){
            sum+=i;
            console.log(i);
        }
        if(i%5==0){
            sum+=i;
            console.log(i);
        }
    }
    return sum;
}
let num=7;
let result=multiples(num);
console.log(`Sum of multiples of 3 and 5 ranging from 0 to ${num} is ${result}`);