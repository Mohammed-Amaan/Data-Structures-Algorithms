
function bruteForceRemoveDuplicates(nums) {
    let sets = new Set(nums);
    let j = 0;
    for (let num of sets) {
      nums[j++] = num;
    }
    console.log(sets.size);
    console.log(nums);
  }
  
  //bruteForceRemoveDuplicates([1,1,2,2,1,1,]);
function optimalRemove(nums){
    let i=0;
    for(let j=i+1;j<nums.length;j++){
        if(nums[j]!=nums[i]){
            nums[i+1]=nums[j];
            i++;
        }
    }
    console.log(nums);
    return i+1;
}  
let x=optimalRemove([1,1,2,2,3,3,4]);
console.log(x);
