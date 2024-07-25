//this is a better solution with O(2N)

function secondLargest(nums){
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max)
            max=nums[i];
    }
    let secondMax=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=max){
            if(nums[i]>secondMax)
                secondMax=nums[i];
        }
    }
console.log(`Max:${max}`);
console.log(`Second Max:${secondMax}`);    
}
secondLargest([13,5,47,34,2]);

//optimal solution one traversal
function sLargest(n){
    let largest=n[0];
    let secondLargest=-1;
    for(let i=0;i<n.length;i++){
        if(n[i]>largest && n[i]!=largest){
            secondLargest=largest;
            largest=n[i];
        }
        else if(n[i]>secondLargest){
            secondLargest=n[i]
        }
    }
    return [largest,secondLargest]
}
console.log(sLargest([1,5,7,8,9,12,32])); 