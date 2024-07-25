//Given an array ,find the maximum and the minimum element
function minMax(nums){
    let min=nums[0];
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
        if(nums[i]<min){
            min=nums[i];
        }
    }
    return [min,max];
}
let result=minMax([2,6,13,14,1,44]);
console.log(`min=${result[0]} and max=${result[1]}`);