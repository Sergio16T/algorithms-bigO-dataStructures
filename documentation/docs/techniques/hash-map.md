---
sidebar_position: 3
---

# Hash Map

Map Like Data Structures are versatile data structures that store key-value pairs and provide efficient operations for insertion, deletion, and lookup.

Utilizing Map like Data Structures enable's complex operations to be optimized often resulting in $O(n)$ linear time complexity.

Some common usecases

## 1. Counting Frequencies

It's common to intialize a frequencyMap and iterate through the elements in an initial pass of the
str/array to count frequencies to be used later.

```JavaScript
function countFrequencies(str) {
  const frequencyMap = new Map();

  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  return frequencyMap;
}
```

An example problem using a frequencyMap to determine whether a string (ransom note) can be constructed from the values in another string (magazine).

```JavaScript
var canConstruct = function(ransomNote, magazine) {
  const magazineCharCount = new Map();

  for (const char of magazine) {
    if (magazineCharCount.has(char)) {
      magazineCharCount.set(char, magazineCharCount.get(char) + 1);
    } else {
      magazineCharCount.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineCharCount.get(char) > 0) {
      magazineCharCount.set(char, magazineCharCount.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
```

## 2. Two Sum

A classic problem, where using a Map can be used to achieve $O(n)$ run time.

```JavaScript
const twoSum = (nums, target) => {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    // e.g. target is 5. current value is 8. 5 - 8 = -3
    const match = target - nums[i];
    if (match in hashmap) {
      return new Array(i, hashmap[match])
    }
    hashmap[nums[i]] = i; // since we store the index after the check we can be assured it won't be the same as i
  }
}
```

## 3. Finding Duplicates

```JavaScript
function findDuplicates(nums) {
  const numMap = new Map();
  const duplicates = [];

  for (const num of nums) {
    if (numMap.has(num)) {
      duplicates.push(num);
    } else {
      numMap.set(num, true);
    }
  }

  return duplicates;
}
```

## 4. Is Anagram

A common problem is determing if strings are anagrams.

One strategy is to compare both strings sorted to determine if they are anagrams resulting in ${O}(n\log{}n)$ time. However this runtime can be improved with a Hashmap to $O(n)$ run time.

```JavaScript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyMap = new Map();

  for (const char of str1) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!frequencyMap.has(char) || frequencyMap.get(char) === 0) {
      return false;
    }
    frequencyMap.set(char, frequencyMap.get(char) - 1);
  }

  return true;
}
```

## 5. Group Anagrams

```JavaScript
function groupAnagrams(words) {
  const anagramMap = new Map();

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }
    anagramMap.get(sortedWord).push(word);
  }

  return Array.from(anagramMap.values());
}
```

## 6. Finding Intersection

Find the intersection of two arrays, which are the elements common to both arrays.

Strategy: use map to count frequencies of elements in one Array
use frequency map for fast look up and updates to frequency count as
we push common elements to intersection array

```JavaScript
function intersect(nums1, nums2) {
  const map = new Map();
  const intersection = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      intersection.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return intersection;
}
```

## 7. Word Pattern Matching

```JavaScript
function wordPattern(pattern, str) {
  const words = str.split(' ');
  if (pattern.length !== words.length) { return false; }

  const patternMap = new Map();
  const wordMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (patternMap.has(char) && patternMap.get(char) !== word) {
      return false;
    }
    if (wordMap.has(word) && wordMap.get(word) !== char) {
      return false;
    }

    patternMap.set(char, word);
    wordMap.set(word, char);
  }

  return true;
}
```
