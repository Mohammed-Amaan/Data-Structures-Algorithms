//stack based approach
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
function getTop() {
  return stack[top];
}
function getSize() {
  return size;
}
// next greater element to left
let temp = [];
let array = [1, 0, 2, 1, 3, 4, 2];
for (let i = 0; i < array.length; i++) {
  if (size == 0) {
    temp.push(-1);
  } else if (size > 0 && stack[top] > array[i]) {
    temp.push(stack[top]);
  } else if (size > 0 && stack[top] <= array[i]) {
    while (size > 0 && stack[top] <= array[i]) {
      pop();
    }
    if (size == 0) {
      temp.push(-1);
    } else {
      temp.push(stack[top]);
    }
  }
  push(array[i]);
}
console.log(temp);
