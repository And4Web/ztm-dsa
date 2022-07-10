//lecture 8,9: creating our first stack using linkedlist:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
  pop() {
    // let holdingPointer = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // if (!this.top) {
    //   return console.log("this is already an empty stack.");
    // }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let myStack = new Stack();

myStack.push(13);
myStack.push(23);
myStack.push(33);
// myStack.push(43);
// myStack.push(53);
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);
