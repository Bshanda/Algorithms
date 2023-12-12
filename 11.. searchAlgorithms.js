// link:- https://youtu.be/jktVSpNwVT8?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

/*         SEARCH ALGORITHMS         */

// LINEAR SEARCH ALGORITHM (looping through all element )
// BINARY SEARCH ALGORITHM
// RECURSIVE BINARY SEARCH ALGORITHM

// Binary search

function binarySearch (arr, ele) {
  let leftIndex = 0
  let rightIndex = arr.length - 1
  let middleIndex

  while (leftIndex <= rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[middleIndex] === ele) {
      return middleIndex
    }
    if (ele < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    }
    if (ele > arr[middleIndex]) {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}

let arr = [6, 10, 78]
console.log(binarySearch(arr, 78))
