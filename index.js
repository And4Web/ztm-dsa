class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  delete(value) {
    // this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.append(26);
myLinkedList.prepend(36);
myLinkedList.prepend(6);
// myLinkedList.append(76);
myLinkedList.delete(36);

console.log("my linkedList: ", myLinkedList);
console.log("head.next Object: ", myLinkedList.head.next);
