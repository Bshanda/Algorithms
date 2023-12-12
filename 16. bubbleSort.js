// Link :- https://youtu.be/gqMjdM8FsrE?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP
// Solution Link :- https://youtu.be/xdCgW2a3r_Q?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

{
  function bubbleSort (arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)

    return null
  }

  let arr = [5, 2, 9, 1, 5, -2, -10, -9]

  console.log('Before sort : ' + arr) // Before sort : 5,2,9,1,5
  bubbleSort(arr)
  console.log('After sort : ' + arr) // After sort : 1,2,5,5,9
}
// Big-O -- O(n^2) //  as there are two loops

// Explanation
{
  // Consider the following unsorted list:
  // [5, 2, 9, 1, 5]
  // Now, let's apply the Bubble Sort algorithm to sort this list:
  // **Pass 1:**
  // - Compare (5) and (2). Since (5 > 2), swap them.
  //   [2, 5, 9, 1, 5]
  // - Compare (5) and (9). No swap needed.
  //   [2, 5, 9, 1, 5]
  // - Compare (9) and (1). Swap them.
  //   [2, 5, 1, 9, 5]
  // - Compare (9) and (5). Swap them.
  //   [2, 5, 1, 5, 9]
  // Now, after the first pass, the largest element ((9)) is in its correct position at the end of the list.
  // **Pass 2:**
  // - Compare (2) and (5). No swap needed.
  //   [2, 5, 1, 5, 9]
  // - Compare (5) and (1). Swap them.
  //   [2, 1, 5, 5, 9]
  // - Compare (5) and (5). No swap needed.
  //   [2, 1, 5, 5, 9]
  // Now, after the second pass, the second largest element ((5)) is in its correct position.
  // **Pass 3:**
  // - Compare (2) and (1). Swap them.
  //   [1, 2, 5, 5, 9]
  // - Compare (2) and (5). No swap needed.
  //   [1, 2, 5, 5, 9]
  // Now, after the third pass, the third largest element ((2)) is in its correct position.
  // **Pass 4:**
  // - Compare (1) and (2). No swap needed.
  //   [1, 2, 5, 5, 9]
  // Now, after the fourth pass, the fourth largest element ((1)) is in its correct position.
  // **Pass 5:**
  // - No swaps needed since the list is already sorted.
  // After each pass, the largest unsorted element "bubbles up" to its correct position.
  // The algorithm repeats these passes until the entire list is sorted.
  // The final sorted list is ([1, 2, 5, 5, 9]).
}
