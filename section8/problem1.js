//Singly linkedList:

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

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode = new Node(value);

    const prevNode = this.traverseToIndex(index - 1);
    const holdNextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = holdNextNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  delete(index) {
    if (index >= this.length) {
      return console.log(
        "Enter a valid Index for removing a node from the list."
      );
    }
    const prevNode = this.traverseToIndex(index - 1);
    const unDesiredNode = prevNode.next;
    prevNode.next = unDesiredNode.next;
    this.length--;
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
myLinkedList.insert(3, 396);
myLinkedList.insert(1, 39);
myLinkedList.insert(100, 56);
myLinkedList.delete(2);
myLinkedList.delete(3);
myLinkedList.delete(30);

console.log("my linkedList: ", myLinkedList);
console.log("my Linked List: ", myLinkedList.printList());

//https://visualgo.net/en/list
