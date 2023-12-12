// Link 1 :- https://youtu.be/oVj5ZvZd-cU?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP
// Solution Link :- https://youtu.be/75jGy1xAhhs?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// Binary Search
// It can only be performed on sortedArray.
{
  function binarySearch (sortedArray, ele) {
    let leftIndex = 0
    let rightIndex = sortedArray.length - 1

    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
      if (ele === sortedArray[middleIndex]) {
        return middleIndex
      }
      if (ele < sortedArray[middleIndex]) {
        rightIndex = middleIndex - 1
      } else {
        leftIndex = middleIndex + 1
      }
    }
    return -1
  }

  let sortedArray = [-5, 2, 3, 4, 5, 7]

  console.log(binarySearch(sortedArray, 4)) // 3
  console.log(binarySearch(sortedArray, 7)) // 5
  console.log(binarySearch(sortedArray, -5)) // 0

  // Big-O -- O(logn)
}
