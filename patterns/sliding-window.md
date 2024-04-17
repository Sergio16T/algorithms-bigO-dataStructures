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