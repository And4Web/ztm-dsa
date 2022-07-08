class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {}

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
myLinkedList.insert(3, 396);
myLinkedList.insert(1, 56);

console.log("my linkedList: ", myLinkedList);
console.log("my Linked List: ", myLinkedList.printList());
//lecture 12 onwards.
