// Link :-  https://youtu.be/tQjd29Rmo_A?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,
// usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.

function FIBONACCI (NUM) {
  const fib = [0, 1] // first two are  0 and 1

  for (let i = 2; i < NUM; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib
}

console.log(FIBONACCI(5)) // [0,1,1,2,3]

// Big-0 -- O(n)

//

function fibonacciMemoization (n, memo = {}) {
  if (n <= 1) {
    return n
  }

  if (memo[n]) {
    return memo[n]
  }

  memo[n] =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)
  return memo[n]
}

// Print the first 10 numbers in the Fibonacci sequence using the memoization approach
for (let i = 0; i < 10; i++) {
  console.log(fibonacciMemoization(i))
}
