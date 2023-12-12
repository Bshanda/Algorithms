//Link :-https://youtu.be/SZRG1bmDlx8?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// Simple solution
{
  function isPowerOfTwo (n) {
    if (n < 1) return false

    while (n > 1) {
      if (n % 2 !== 0) {
        return false
      }
      n = n / 2
    }

    return true
  }

  console.log(isPowerOfTwo(0)) // false
  console.log(isPowerOfTwo(2)) // true
  console.log(isPowerOfTwo(9)) // false
  // Big-Ox -- O(log n)
}

// With bit wise operator

{
  // function isPowerOfTwo (n) {
  //   if (n < 1) return false
  //   return (n & (n - 1)) === 0
  // }
  // console.log(isPowerOfTwo(0)) // false
  // console.log(isPowerOfTwo(2)) // true
  // console.log(isPowerOfTwo(5)) // false
}
