class MyArray {
  constructor(length, data) {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const popItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popItem;
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
// newArray.get();
newArray.push("hi");
newArray.push("hello");
newArray.push("welcome");
newArray.push("anand");
newArray.push("joy");
newArray.push("harry");
newArray.push("namita");
newArray.push("cool");
// newArray.pop();
// newArray.pop();
newArray.delete(1);
newArray.delete(2);
newArray.delete(4);
console.log(newArray);
