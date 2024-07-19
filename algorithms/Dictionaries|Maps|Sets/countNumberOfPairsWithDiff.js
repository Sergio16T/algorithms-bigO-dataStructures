/*
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array

Input: [1, 7, 5, 9, 2, 12, 3], 2
Output: 4 -> there are 4 pairs with diff k: (1, 3) (3, 5) (5, 7), (7, 9)

Input: [1, 7, 1, 9, 2, 12, 3], 0
Output: 1 -> (1, 1)

BRUTE FORCE SOLUTION
iterate through the array beginning at startIndex and then search through the remaining elements to find value that meets condition

Bottle neck is the search within loop. So there are 3 methods we can do to optimize run time

Note: search can be linear if not sorted or Binary search if sorted

Method 1
uses a nested loop/linear search
Time Complexity of O(n2)

Method 2 (Use Sorting)
We can find the count in O(Log N) time using a O(Log N) sorting algorithm like Merge Sort, Heap Sort, etc.

followed by iterating through sorted array w/ a binary search for the element arr[i] + diff
for loop O(N) with a binary search within each iteration -> O(N LOG N)

Method 3 (Dictionary|Map)
Add all of the elements from array into a Dictionary/Map
Map allows us to
1. store unique keys to avoid checking for same x + k twice
2. key|val store val number of times key appears in source array nums to enable us to check for numbers with diff 0

Map allows us to look up x + k or x  - k  in O(1)

Loop through each element in array O(N) and then use Map Look up O(1) for x + k

Runtime is O(n)
*/

const findPairsWithMap = (nums, diff) => {
  let count = 0;
  const map = initializeMap(nums);

  const keySet = [...map.keys()]; // uniqueKeySet allows us to avoid checking for same x + k twice

  for (let i = 0; i < keySet.length ; i++) {
    const number = keySet[i];
    const lookUpNum = number + diff;

    // cover edge case of diff being 0
    if (diff !== 0 ) {
      if (map.get(lookUpNum)) {
        count+=1;
      }
    } else {
      if (map.get(number) > 1) { count +=1; }
    }


  }

  return count;
}

findPairsWithMap([1, 3, 5, 9, 4, 2], 2);
/**
 *
 * @param {Array<Number>} nums
 * @returns {Map} Map Object Containing Key|Value Pairs. Value equal to number of times key appears in nums
 */
function initializeMap(nums) {
  const map = new Map();

  nums.forEach(number => {
    if (map.get(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  });

  return map;
}


const findPairs = (nums, diff) => {
  let count = 0;
  const dictionary = initializeDict(nums);
  const keySet = Object.keys(dictionary);

  // Simplify iteration by using dictionary keys
  for (let i = 0; i < keySet.length ; i++) {
    const number = Number(keySet[i]);
    const lookUpNum = number + diff;

    if (diff !== 0 ) {
      if (lookUpNum in dictionary) {
        count+=1;
      }
    } else {
      if (dictionary[number] > 1) {count +=1;}
    }
  }

  return count;
}


function initializeDict(nums) {
  const dictionary = {};
  nums.forEach(number => {
    if (number in dictionary) {
      dictionary[number] += 1
    } else {
      dictionary[number] = 1
    }
  });
  return dictionary;
}


const answer = findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3);
console.log("answer: ", answer);
