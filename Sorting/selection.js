function selectionSort(nums){   
    for(let i=0;i<=nums.length-2;i++){
        let mini=i;
        for(let j=i;j<nums.length;j++){
            if(nums[j]<nums[mini]){
                mini=j;
            }
        }
        let temp=nums[mini];
        nums[mini]=nums[i];
        nums[i]=temp;
    }
console.log(nums);
}
selectionSort([6,5,4,8,9,2,1]);