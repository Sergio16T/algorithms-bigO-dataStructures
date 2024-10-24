class HashSet {
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

  add(value) {
    const index = this._hash(value);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    if (!this.keyMap[index].includes(value)) {
      this.keyMap[index].push(value);
    }
  }

  remove(value) {
    const index = this._hash(value);
    if (this.keyMap[index]) {
      const valueIndex = this.keyMap[index].indexOf(value);
      if (valueIndex !== -1) {
        this.keyMap[index].splice(valueIndex, 1);
        return true;
      }
    }
    return false;
  }

  contains(value) {
    const index = this._hash(value);
    if (this.keyMap[index]) {
      return this.keyMap[index].includes(value);
    }
    return false;
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        valuesArray = valuesArray.concat(this.keyMap[i]);
      }
    }
    return valuesArray;
  }
}

// Example usage:
const hashSet = new HashSet();
hashSet.add("apple");
hashSet.add("banana");
hashSet.add("cherry");
console.log(hashSet.contains("apple")); // Output: true
console.log(hashSet.contains("grape")); // Output: false
hashSet.add("apple"); // Trying to add duplicate value
console.log(hashSet.values()); // Output: ["apple", "banana", "cherry"]
hashSet.remove("banana");
console.log(hashSet.values()); // Output: ["apple", "cherry"]
