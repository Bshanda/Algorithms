// Link :- https://youtu.be/EFXWgZJZqL8?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

function binarySearchRecursive (arr, ele) {
  return search(arr, ele, 0, arr.length)
}

function search (arr, ele, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }

  // if array length have 7 elements 7/2 is 3.5 so we use Math.floor to round it up.
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

  // return if ele is equal to middle element of array
  if (ele === arr[middleIndex]) {
    return middleIndex
  }

  // if target element is less then middle element narrow the search between left half
  if (ele < arr[middleIndex]) {
    return search(arr, ele, leftIndex, middleIndex)
  }
  // if target element is greater then middle element narrow the search between right half
  else {
    return search(arr, ele, middleIndex + 1, rightIndex)
  }
}
