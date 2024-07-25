/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
function removeDigit(number, digit) {
    let x=[];let max=0;
    for(let i=0;i<number.length;i++){
        if(number[i]==digit){
            x[i]=number.substring(0,i)+number.substring(i+1);
        }
        if(x[i]>max){
            max=x[i];
        }
    }
    return max;
};
let result=removeDigit("1231",1);
console.log(result);