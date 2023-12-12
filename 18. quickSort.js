// Link :- https://youtu.be/lWLTHsQnHDI?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// QUICK SORT
{
  function QuickSort (arr) {
    let arrLen = arr.length
    if (arrLen < 2) {
      return arr
    }
    let pivot = arr[arrLen - 1]
    let left = []
    let right = []

    for (let i = 0; i < arrLen - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // for Ascending Sorting
    // return [...QuickSort(left), pivot, ...QuickSort(right)]
    // for descending sorting
    return [...QuickSort(right), pivot, ...QuickSort(left)]
  }

  let arr = [-5, -10, 2, 10, 3, 3, -7]
  console.log('Before Sorting : - [' + arr + ']')
  console.log('After Sorting : - [' + QuickSort(arr) + ']')

  // worst case -- O(n^2)
  // avg case -- O(logn)
}
