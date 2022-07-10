// creating our first queue(FIFO) using linked list:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enQueue(value) {
    let newNode = new Node(value);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;

    this.length++;
    return this;
  }
  deQueue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
    return this;
  }

  printList() {
    let printList = [];

    let currentNode = this.first;
    while (currentNode !== null) {
      printList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return printList;
  }
}

let myQueue = new Queue();

myQueue.enQueue("Mahesh");
myQueue.enQueue("Suresh");
myQueue.enQueue("Laukesh");
myQueue.enQueue("Shailesh");
myQueue.enQueue("Chanchalesh");
myQueue.deQueue();
myQueue.deQueue();
myQueue.deQueue();

console.log(myQueue);
console.log("The Queue is: ", myQueue.printList());
