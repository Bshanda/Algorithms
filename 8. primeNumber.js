// Link :- https://youtu.be/cbHMQxOuIUw?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// function isPrime (num) {
//   if (num < 2) return false

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false
//   }

//   return true
// }

// console.log(isPrime(9))

// Big-O -- O(n)

// More optimized solution for bigger NUMBER.

// Integers larger than the square root do not need to be checked because, whenever "n = a*b"
// one of the two factors "a" and "b" is less than or equal to the root of 'n'

// n = 24, a = 4, b = 6
// sqRoot of n is 4.89
// a = 4 is less then 4.89

// n = 35, a = 7, b = 5
// sqRoot of n is 5.91
// b = 5 is less then 5.91

// n = 36, a = 6, b = 6
// sqRoot of n is 6
// a= b= 6 is equal to 6

// so if it is devisible by any number there must be a number less than the square root of Given Number.

// CODE

function isPrime (num) {
  if (num < 2) return false
  let sqrt = Math.sqrt(num)
  if (Math.floor(sqrt) === sqrt) {
    return false
  }

  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false
  }

  return true
}

console.log(isPrime(11))

// Big-0 -- O(sqrt(n))

// The loop runs from i = 2 to i < Math.sqrt(num).
// It stops at the square root of the input number because if there is a factor larger than the square root,
// there must also be a factor smaller than the square root.
