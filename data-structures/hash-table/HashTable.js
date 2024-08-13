class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          const removed = this.keyMap[index][i][1];
          this.keyMap[index].splice(i, 1);
          return removed;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArray;
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("foo", "bar");
hashTable.set("john", "doe");
console.log(hashTable.get("hello")); // Output: "world"
console.log(hashTable.get("foo")); // Output: "bar"
console.log(hashTable.get("john")); // Output: "doe"
console.log(hashTable.get("unknown")); // Output: undefined
hashTable.remove("foo");
console.log(hashTable.get("foo")); // Output: undefined
console.log(hashTable.keys()); // Output: ["hello", "john"]
console.log(hashTable.values()); // Output: ["world", "doe"]
