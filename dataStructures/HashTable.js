// HashSet & HashMap @Todo add notes
// @Todo show logic for handling collision - linkedList

function HashTable() {
    var table = [];
    this.put = (key, value) => {
        const position = generateHashCode(key);
        table[position] = value;
    }
    this.get = (key) => {
        return table[generateHashCode(key)];
    }
    this.remove = (key) => {
        table[generateHashCode(key)] = undefined;
    }
}


const generateHashCode = (key) => {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}

let table = new HashTable();
table.put("Apple", 123);
// console.log(table.get("Apple"));
table.remove("Apple");
// console.log(table.get("Apple"));



var MyHashSet = function() {
     this.set = [];
};

MyHashSet.prototype.add = function(key) {
    const position = generateHashCode(key);
    this.set[position] = key;
};

MyHashSet.prototype.get = function(key) {
    return this.set[generateHashCode(key)];
}

MyHashSet.prototype.remove = function(key) {
    return this.set[generateHashCode(key)] = undefined;
}

MyHashSet.prototype.print = function(key) {
    console.log(this.set);
};

MyHashSet.prototype.contains = function(key) {
    return this.set[generateHashCode(key)] !== undefined;
};

const set = new MyHashSet();
set.add(1);

set.print();

console.log(set.get(1));

set.remove(1);

set.print();

console.log(set.contains(1));