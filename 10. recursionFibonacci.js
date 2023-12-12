// Link :- https://youtu.be/wZNxLwqxu00?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// Recursive fibonacci
{
  function Fibonacci (n) {
    if (n < 2) {
      FibSeq.push(n)
      return n
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
  }

  console.log(Fibonacci(6))

  //
  // Big-O -- O(2^n)
}
// Breakdown of Execution
{
  // Let's see what happens when you call Fibonacci(6): //
  // Fibonacci(6) calls Fibonacci(5) and Fibonacci(4).
  //   Fibonacci(5) calls Fibonacci(4) and Fibonacci(3).
  //    Fibonacci(4) calls Fibonacci(3) and Fibonacci(2).
  //     Fibonacci(3) calls Fibonacci(2) and Fibonacci(1).
  //      Fibonacci(2) calls Fibonacci(1) and Fibonacci(0).
  //       At this point, the base cases are reached, and the values are returned.
  //      Fibonacci(1) returns 1.
  //     Fibonacci(2) returns 1.
  //    Fibonacci(4) now has the values from Fibonacci(3) and Fibonacci(2), so it returns their sum (2).
  // Fibonacci(6) now has the values from Fibonacci(5) and Fibonacci(4), so it returns their sum (3).
  // Therefore, the output of console.log(Fibonacci(6)) will be 8.
}
