// Link :- https://youtu.be/o5XweHW-H4Y?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// RecursiveFactorial
{
  // Algorithm 1
  {
    function recursiveFactorial (n) {
      if (n === 0) return 1
      return n * recursiveFactorial(n - 1)
    }
    console.log(recursiveFactorial(5))
    //
    // Big-O -- O(n) - Linear

    // BreakDown Of execution
    {
      {
        //   recursiveFactorial(5), calls recursiveFactorial(4)
        //     recursiveFactorial(4), calls recursiveFactorial(3)
        //      recursiveFactorial(3), calls recursiveFactorial(2)
        //       recursiveFactorial(2), calls recursiveFactorial(1)
        //        recursiveFactorial(1), calls recursiveFactorial(0)
        //         . Base condition (n = 0) reached, and values are returned.
        //        recursiveFactorial(0) returns 1
      }
      // OR
      {
        // recursiveFactorial(5) = 5 * recursiveFactorial(4)
        //                       = 5 * 4 * recursiveFactorial(3)
        //                       = 5 * 4 * 3 * recursiveFactorial(2)
        //                       = 5 * 4 * 3 * 2 * recursiveFactorial(1)
        //                       = 5 * 4 * 3 * 2 * 1 * recursiveFactorial(0)
        //                       = 5 * 4 * 3 * 2 * 1 * 1  // Base case is reached (recursiveFactorial(0) = 1)
        //                       = 120
      }
    }
  }
}
