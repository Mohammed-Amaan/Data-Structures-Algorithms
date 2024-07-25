//stock span problem
//[100,80,60,70,60,75,85]
//ngl [-1,100,80,80,70,80,100]
//ngl index[-1,0,1,1,3,1,0]
//span     [1,1,1,2,1,4,6]
let stack = [];
let top = -1;
let size = 0;
function push(data) {
  if (size < 7) {
    stack.push(data);
    top++;
    size++;
  } else {
    console.log("overflow");
  }
}
function pop() {
  if (size > 0) {
    stack.pop();
    top--;
    size--;
  } else {
    console.log("stack empty");
  }
}
function stockSpan(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (size == 0) {
      temp.push(-1);
    } else if (size > 0 && stack[top].element > array[i]) {
      temp.push(stack[top].index);
    } else if (size > 0 && stack[top].element <= array[i]) {
      while (size > 0 && stack[top].element <= array[i]) {
        pop();
      }
      if (size == 0) {
        temp.push(-1);
      } else {
        temp.push(stack[top].index);
      }
    }
    push({ element: array[i], index: i });
  }
  for (let i = 0; i < temp.length; i++) {
    temp[i] = i - temp[i];
  }
  console.log(temp);
}
stockSpan([100, 80, 60, 70, 60, 75, 85]);
