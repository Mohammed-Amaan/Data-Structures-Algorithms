function mergeSort(nums,low,high){
    if(low>=high){
        return;
    }
    let mid=Math.floor((low+high)/2);
    mergeSort(nums,low,mid);
    mergeSort(nums,mid+1,high);
    merge(nums,low,mid,high);
}
function merge(nums,low,mid,high){
    let temp=[];
    let left=low;
    let right=mid+1;
    while(left<=mid && right<=high){
        if(nums[left]<=nums[right]){
            temp.push(nums[left]);
            left++;
        }
        else{
        temp.push(nums[right]);
        right++;
        }
    }
    while(left<=mid){
        temp.push(nums[left]);
            left++;
    }
    while(right<=high){
        temp.push(nums[right]);
        right++;
    }
    for(let i=low;i<=high;i++){
        nums[i]=temp[i-low];
    }

}
let nums=[4,3,12,55,2,1];
mergeSort(nums,0,nums.length-1);
console.log(nums);