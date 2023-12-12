// Link :- https://youtu.be/EvRdNdOfRl8?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// Linear search algorithm
{
  function search (arr, ele) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ele) {
        return i
      }
    }
    return -1
  }

  let arr = [-5, 2, 10, 4, 6]
  console.log(search(arr, 6))
  //
  // Big-O -- O(arr);
}
