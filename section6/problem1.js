//problem1:
//create an Array using class and constructor and implement the basic methods of arrays like push, pop, delete, shift etc.

//this problem was demonstrated in section 6 lecture 5.

//solution:

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
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
  delete(index) {
    const deletedItem = this.data[index];
    this.shiftLeft(index);

    return deletedItem;
  }

  shiftLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new MyArray();
newArray.push("anand");
newArray.push("shukla");
newArray.push("is");
newArray.push("nice");
newArray.pop();
newArray.pop();
newArray.delete(1);
newArray.delete(2);
newArray.delete(4);
console.log(newArray);
