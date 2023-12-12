// link :-https://youtu.be/vAgzuS3u6W0?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

function FACTORIAL (n) {
  if (n == 0 || n == 1) return 1
  let factorial = 1
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i
  }
  return factorial
}

console.log(FACTORIAL(0)) // 1
console.log(FACTORIAL(1)) // 1
console.log(FACTORIAL(5)) // 120

// Big-O -- O(n)
