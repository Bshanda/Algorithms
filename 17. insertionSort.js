// Link :- https://youtu.be/Wu_mDUIsTVE?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// **Insertion Sort:**
{
  // Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
  //  It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort,
  // or merge sort. However, it has some advantages – it is simple to implement, efficient for small
  // data sets, and works well for data sets that are already partially ordered.
  //
  // **Algorithm:**
  {
    //
    // 1. Start with the second element of the array. Assume the first element is already sorted.
    // 2. Compare the second element with the one before it and swap if necessary.
    // 3. Continue comparing and swapping until the element is in its correct sorted position.
    // 4. Move on to the next element and repeat steps 2-3 until the entire array is sorted.
  }
  // **Example:**
  {
    //
    // Let's say we have the following array:
    // \[ 5, 3, 1, 4, 2 \]
    //
    // 1. **Initial Array:** [5, 3, 1, 4, 2]
    //
    // 2. **Pass 1:**
    //    - Compare 3 with 5. Swap to get [3, 5, 1, 4, 2]
    //    - Compare 1 with 5 (no swap), then with 3 (swap). Result: [1, 3, 5, 4, 2]
    //    - Compare 4 with 5 (no swap), then with 3 (no swap), then with 1 (swap). Result: [1, 3, 4, 5, 2]
    //    - Compare 2 with 5 (no swap), then with 4 (no swap), then with 3 (no swap), then with 1 (swap).
    // Result: [1, 2, 3, 4, 5]
    //
    // 3. **Final Sorted Array:** [1, 2, 3, 4, 5]
    //
  }
  // **Explanation:**
  {
    // In each pass, the current element is compared with the elements before it, and if it is smaller,
    // they are swapped. This process is repeated until the element is in its correct position.
    // The algorithm gradually builds up the sorted portion of the array, one element at a time.
    // The key idea is that at the end of each pass, the first \(i\) elements are sorted,
    // where \(i\) is the current pass number.
  }
}
