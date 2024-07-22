# Sliding Window

In many problems dealing with an array (or a LinkedList),
we are asked to find or calculate something among all the contiguous subarrays (or sublists)
of a given size.

## 1. Fixed-Size Window

Window is fixed size and we contract by removing first element from window as we add the current element in iteration

Problem: Find the maximum sum of any contiguous subarray of size k.

```JavaScript
const maximumSumSubArray = (arr, k) =>  {
  //length of array must be greater than k
  if (arr.length < k) {
    console.log("Invalid")
    return -1;
  }

  // Compute sum of first window of size k
  let max_sum = 0;
  for (let i = 0; i < k; i++) {
    max_sum += arr[i];
  }
  // Compute sums of remaining windows by removing first element of previous window and adding last element of current window.
  let window_sum = max_sum;
  for (let j = k; j < arr.length; j++) {
    // arr[j] last element of current window
    // arr[j - k] first element of previous window
    window_sum += arr[j] - arr[j - k];
    max_sum = Math.max(max_sum, window_sum);
  }

  return max_sum;
}
```

## 2. Variable-Size Window

Size of window contracts as needed as we iterate to find the max window

```JavaScript
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let left = 0,
    right= 0,
    maxWindow = 0;

  while (right < s.length) {
    // "abcabcbb"
    const char = s[right]; // right pointer iterates
    if (set.has(char)) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(char);
      right++;
      maxWindow = Math.max(set.size, maxWindow);
    }
  }
  return maxWindow;

}
```

## 3. Sliding Window with Hash Map

```java
class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        int n = s.length();
        int maxSize = 0;
        Map<Character, Integer> counter = new HashMap<>();

        int left = 0;
        for (int right = 0; right < n; right++) {
            counter.put(s.charAt(right), counter.getOrDefault(s.charAt(right), 0) + 1);

            while (counter.size() > k) {
                counter.put(s.charAt(left), counter.get(s.charAt(left)) - 1);
                if (counter.get(s.charAt(left)) == 0) {
                    counter.remove(s.charAt(left));
                }
                left++;
            }

            maxSize = Math.max(maxSize, right - left + 1);
        }

        return maxSize;
    }
}
```

## 4. Circular Sliding Window

// @TODO

## Summary

In many problems dealing with an array (or a LinkedList),
we are asked to find or calculate something among all the contiguous subarrays (or sublists)
of a given size. For example, take a look at this problem:

A brute force solution would require revisiting previously visited elements e.g. in a nested loop.

With sliding window we can improve run time to O(n) by avoiding revisiting elements and instead moving the window over and updating as needed.

```java
import java.util.Arrays;

class AverageOfSubarrayOfSizeK {
    public static double[] bruteForce(int K, int[] arr) {
        double[] result = new double[arr.length - K + 1];
        for (int i = 0; i <= arr.length - K; i++) {
          // find sum of next 'K' elements
          double sum = 0;
          for (int j = i; j < i + K; j++)
              sum += arr[j];
          result[i] = sum / K; // calculate average
        }

        return result;
    }


    public static double[] findAverages(int K, int[] arr) {
        double[] result = new double[arr.length - K + 1];
        double windowSum = 0;
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
          windowSum += arr[windowEnd]; // add the next element
          // slide the window, we don't need to slide if we've not hit the required window size of 'k'
          if (windowEnd >= K - 1) {
              result[windowStart] = windowSum / K; // calculate the average
              windowSum -= arr[windowStart]; // subtract the element going out
              windowStart++; // slide the window ahead
          }
        }

        return result;
    }

  public static void main(String[] args) {
    double[] bfResult = AverageOfSubarrayOfSizeK.bruteForce(5, new int[] { 1, 3, 2, 6, -1, 4, 1, 8, 2 });
    System.out.println("Averages of subarrays of size K: " + Arrays.toString(bfResult));

    double[] result = AverageOfSubarrayOfSizeK.findAverages(5, new int[] { 1, 3, 2, 6, -1, 4, 1, 8, 2 });
    System.out.println("Averages of subarrays of size K: " + Arrays.toString(result));
  }
}

```