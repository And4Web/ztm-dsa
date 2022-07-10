//lecture 10,11: creating our first stack using arrays:

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    return this.array.push(value);
  }
  pop() {
    return this.array.pop();
  }
}

let myStack = new Stack();

myStack.push(13);
myStack.push(23);
myStack.push(33);
myStack.push(43);
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);
