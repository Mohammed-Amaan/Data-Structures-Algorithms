//merge two sorted arrays
//
function merge(num1, num2) {
  let temp = [];
  let left = 0;
  let right = 0;
  while (left < num1.length && right < num2.length) {
    if (num1[left] < num2[right]) {
      temp.push(num1[left]);
      left++;
    } else {
      temp.push(num2[right]);
      right++;
    }
  }
  while (left < num1.length) {
    temp.push(num1[left]);
    left++;
  }
  while (right < num2.length) {
    temp.push(num2[right]);
    right++;
  }
  console.log(temp);
}
merge([6, 10, 15, 25], [7, 8, 34, 40]);
