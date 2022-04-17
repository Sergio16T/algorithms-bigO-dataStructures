// Write a function that looks through an array of objects (first argument), and returns all objects that satisfy the condition that
// each key and value pair of the source object (second argument) is present in the object from the collection in order to be included in the returned array

// whatIsInAName(
// [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
//  { "apple": 1, "bat": 2 })
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// O(n^2)
function whatIsInAName(collection, source) {
    // 1) loop through each the keys in the source object because both of those key value pairs need to be in each
    // object for us to add this to our return value
    let arr = [];
    let keyCount = Object.keys(source).length;

    for (let i = 0; i < collection.length; i++) {
        let item = collection[i];
        let count = 0;
        for (let key in source) {
            if (key in item && item[key] === source[key]) count++;
        }
        if (count === keyCount) arr.push(item);
    }

    return arr;
  }

// O(n^2)
const whatIsInANameSolution2 = (collection, source) => {
    var srcKeys = Object.keys(source);

    return collection.filter((obj) => {
        return srcKeys.every((key) => {
            // return obj.hasOwnProperty(key) && obj[key] === source[key];
            return key in obj && obj[key] === source[key];
        });
    });
}

// cases
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); //[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]