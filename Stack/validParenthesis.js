let stack = [];
let top = -1;
let size = 0;
function push(data) {
  stack.push(data);
  top++;
  size++;
}
function pop() {
  stack.pop();
  top--;
  size--;
}
function valid(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      push(s[i]);
    } else {
      if (size == 0) {
        return false;
      }
      let c = stack[top];
      pop();
      if (
        (c == "(" && s[i] == ")") ||
        (c == "{" && s[i] == "}") ||
        (c == "[" && s[i] == "]")
      ) {
      } else return false;
    }
  }
  if (size == 0) {
    return true;
  }
  return false;
}
console.log(valid("{}"));
console.log(valid("{}")); // Output: true
console.log(valid("{[()]}")); // Output: true
console.log(valid("{[(])}")); // Output: false
console.log(valid("{[()]}{")); // Output: false
console.log(valid("")); // Output: true
