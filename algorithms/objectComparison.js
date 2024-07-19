// Deep Comparison vs Shallow Comparison vs Referential Comparison of Objects

// Implement algorithms for both Deep Comparison and Shallow Comparison of two objects

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);

    if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

// shallow equality check
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

// example cases
const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};

const referencialEquality = hero1 === hero1;
console.log(referencialEquality); // => true

const referencialInEquality = hero1 === hero2;
console.log(referencialInEquality); // => false

console.log(deepEqual(hero1, hero2)); // => true
console.log(shallowEqual(hero1, hero2)); // => false

const hero3 = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const hero4 = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const hero5 = {
  name: 'Joker',
};

console.log(shallowEqual(hero3, hero4)); // => true
console.log(shallowEqual(hero4, hero5)); // => false