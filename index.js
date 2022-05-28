//problem2:
//create an Array using class and constructor and implement the basic methods of arrays like push, pop, delete, shift etc.

//solution:

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {}
  shiftItem() {}
}
const newArray = new MyArray();
newArray.push("anand");
newArray.push("shukla");
newArray.push("is");
newArray.push("nice");
newArray.pop();
newArray.pop();
console.log(newArray);
