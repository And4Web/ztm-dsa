//Hash tables/hash maps/objects/dictionaries/maps/unordered maps :
//section 7 lecture 5 example programs
//
//lecture 6: creating our first hash table.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    console.log("constructor: ", this.data);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(key[i], hash);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const myBucket = this.data[address];

    // console.log(myBucket);

    if (myBucket) {
      for (let i = 0; i < myBucket.length; i++) {
        if (myBucket[i][0] === key) {
          return myBucket[i][1];
        }
      }
    }
    return "no such item found in our Table.";
  }
}

const myHashTable = new HashTable(20);
// myHashTable._hash("grapes");
myHashTable.set("grapes", 10000);
myHashTable.set("mangoes", 5000);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("mangoes"));
console.log(myHashTable.get("mangoess"));
// myHashTable.get("mangoes");
