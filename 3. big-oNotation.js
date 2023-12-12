// link :- https://youtu.be/3yUuo7TqMW8?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

{
  // Worst case complexity of an algorithm is represented using Big-O Notation.
  // Big-O Notation describes the complexity of an algorithm using algebraic terms.
  // It has two important characteristics :-
  // It is expressed in terms of input.
  // It focuse on bigger picture without getting caught up in the minute details.
}

{
  // Big-O time complexity.(Worst case complexity)
  {
    // Algotihm 1
    {
      function summmation (n) {
        let sum = 0

        for (let i = 0; i < n; i++) {
          sum += i
        }

        return sum
      }

      // Our program has three main statments to execute.
      // 1 line 13,
      // 2 the for loop , which is a repetition of line 16.
      // 3 line 19

      // Lets analyse.

      // Line 1 will execute only one time.Irrespective on 'n'.
      // Line 2 will execute 'n' no of times.
      // Line 19 will execute once.

      // as we can see line 1 and 19 executes once for every value of "n".

      //   n        lines to exectutions
      //   1        n+1 time
      //   2        n+2 time
      //   3        n+3 time
      //   ...............
      //   ...............
      //   ...............
      //   n        n time

      // as we can see time complaxity increases linearly as the "n" increases
      // so the Big-O time Complexity :- 'O(n)'-Linear time complexity.
    }

    // Algorithm 2
    {
      function summmation (n) {
        return (n * (n + 1)) / 2
      }

      // Our program has one main statment to execute.
      // line 53

      // Lets analyse.

      // Line 53 will execute only one time.Irrespective on 'n'.

      // as we can see time complaxity is constant as the "n" increases
      // so the Big-O time Complexity is 'O(1)'-Constant time complexity.
    }
  }
}
