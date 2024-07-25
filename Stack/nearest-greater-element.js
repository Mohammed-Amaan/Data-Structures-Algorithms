//brute force - O(n2)
function greater(nums) {
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        nums[i] = nums[j];
        found = true;
        break;
      }
    }
    if (!found) {
      nums[i] = -1;
    }
  }
  console.log(nums);
}
greater([1, 0, 2, 1, 3, 4, 2]);
