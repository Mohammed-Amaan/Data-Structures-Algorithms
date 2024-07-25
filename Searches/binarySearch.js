function binSearch(nums,target){
    let low=0;
    let high=nums.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==target) return mid;
        if(target<nums[mid]){
            high=mid-1;
        }
        if(target>nums[mid]){
            low=mid+1;
        }
    }
    return -1;
}
//x=binSearch([3,4,5,6,7,8],6);
//console.log(x);

function rBinSearch(nums,low,high,target) {
    if(low>high){
        return -1;
    }
    let mid=Math.floor((low+high)/2);
    if(nums[mid]==target)
     return mid;
    if(target<nums[mid]){
        return rBinSearch(nums,low,mid-1,target);
    }
    if(target>nums[mid]){
        return rBinSearch(nums,mid+1,high,target);
    }
    
}
let array=[1,2,3,4,5];
let y=rBinSearch(array,0,array.length-1,4);
console.log(y);