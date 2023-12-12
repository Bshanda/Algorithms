// Fibonacci sequence
// {
//   // function fibonacci (n) {
//   //   let fib = [0, 1]
//   //   for (let i = 2; i < n; i++) {
//   //     fib[i] = fib[i - 1] + fib[i - 2]
//   //   }
//   //   return fib
//   // }
//   // console.log(fibonacci(8))
//   //
//   // Time complexity
//   // Big-O -- O(n)
// }

// // Factorial of a Number
// {
//   // Algorithm 1
//   {
//     // function factorial (n) {
//     //   if( n < 0) console.log("Please enter a positive number")
//     //   if (n === 0 || n === 1) return 1
//     //   let fact = 1
//     //   for (let i = 2; i <= n; i++) {
//     //     fact = fact * i
//     //   }
//     //   return fact
//     // }
//     // console.log(factorial(10))
//     //
//     // Time complexity
//     // Big-O -- O(n)
//   }
// }

// // Is a number prime
// {
//   // Algorithm 1
//   {
//     //   function isPrime (n) {
//     //     if(num < 2) return false
//     //     for (let i = 2; i < n; i++) {
//     //       if (n % i === 0) return false
//     //     }
//     //     return true
//     //   }
//     //   console.log(isPrime(11))
//     // Time complexity
//     //   Big-O -- O(n)
//   }
//   //Algorithm 2
//   {
//     // function isPrimeOptimised (n) {
//     //   if (n < 2) return false
//     //   let sqrt = Math.sqrt(n)
//     //   if (Math.floor(sqrt) === sqrt) return false
//     //   for (let i = 2; i < sqrt; i++) {
//     //     if (n % i === 0) {
//     //       return false
//     //     }
//     //   }
//     //   return true
//     // }
//     // console.log(isPrimeOptimised(9))
//   }
// }

// // Merging two Strings
// {
//   // Algorithm 1
//   {
//     // function appendStringsCharByChar (s1, s2) {
//     //   let s3 = ''
//     //   let s1Len = s1.length
//     //   let s2Len = s2.length
//     //   let len = s1Len > s2Len ? s1Len : s2Len
//     //   console.log(len)
//     //   for (let i = 0; i < len; i++) {
//     //     if (i < s1Len) s3 += s1[i]
//     //     if (i < s2Len) s3 += s2[i]
//     //   }
//     //   return s3
//     //   //
//     //   // Big-O -- O(n)
//     // }
//     // let s1 = '12345'
//     // let s2 = 'abc'
//     // console.log(appendStringsCharByChar(s1, s2)) // Output:- 1a2b3c45
//   }
//   // Algorithm 2
//   {
//     // function appendStringsOptimised (s1, s2) {
//     //   let s3 = []
//     //   let s1Len = s1.length
//     //   let s2Len = s2.length
//     //   let len = s1Len > s2Len ? s1Len : s2Len
//     //   for (let i = 0; i < len; i++) {
//     //     if (i < s1Len) s3.push(s1[i])
//     //     if (i < s2Len) s3.push(s2[i])
//     //   }
//     //   return s3.join('')
//     // }
//     // let s1 = '12345'
//     // let s2 = 'abc'
//     // console.log(appendStringsOptimised(s1, s2))
//   }
//   //   Between the two approaches, the algorithm that uses an array to store individual characters and
//   //   then joins them at the end (`appendStringsEfficiently`) is generally more time-efficient
//   //   compared to the one that concatenates strings character by
//   //   character inside the loop (`appendStringsCharByChar`).

//   // The reason is that string concatenation in most programming languages, including JavaScript,
//   // can be an expensive operation, especially when done repeatedly in a loop.
//   // Each time you concatenate a character to a string, a new string is created, and
//   // the contents of the old string are copied to the new one.
//   // This process has a time complexity that is proportional to the length of the resulting string,
//   // making it O(k) for each concatenation operation (where k is the length of the string being concatenated).

//   // On the other hand, using an array to store characters and then joining them at the end avoids the
//   // repeated creation of new strings. The array's size is known in advance, and the `join`
//   // operation has a time complexity of O(n), where n is the total length of the concatenated strings.

//   // In summary, the algorithm that uses an array is generally more time-efficient,
//   // especially for large strings, due to the more favorable time complexity of the `join`
//   // operation compared to repeated string concatenation.
// }

// bubble sort

// Bubble Sort
{
  // function bubbleSort (a) {
  //   let swapped
  //   do {
  //     swapped = false
  //     for (let i = 0; i < arr.length; i++) {
  //       if (a[i] > a[i + 1]) {
  //         let temp = a[i]
  //         a[i] = a[i + 1]
  //         a[i + 1] = temp
  //         swapped = true
  //         //
  //         //  OR
  //         // a[i] = 10; a[i+1 ] = 7
  //         //
  //         // a[i] = a[i] + a[i+1] = 10 + 7 = 17
  //         // a[i+1] = a[i] - a[i+1] = 17 - 7 = 10
  //         // a[i] = a[i] - a[i+1] = 17 - 10 = 7
  //         // now a[i] = 7, a[i+1] = 10
  //       }
  //     }
  //   } while (swapped)
  //   // donot need to return anything as original array is manipulated.
  //   // Big-O -- O(n^2)
  // }
  // let arr = [0, -3, 7, -8, 10, 9]
  // console.log(arr)
  // bubbleSort(arr)
  // console.log(arr)
}

// Insertion Sort
{
  function InsertionSort (arr) {
    let current,
      arrLen = arr.length,
      j

    // For ascending Sorting
    for (let i = 1; i < arrLen; i++) {
      current = arr[i]
      j = i - 1
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = current
    }

    //For descending Order Sorting
    for (let i = 1; i < arrLen; i++) {
      current = a[i]
      j = i - 1
      while (j >= 0 && arr[j] < current) {
        arr[j] = arr[j + 1]
        j++
      }
    }
  }

  let arr = [10, 4, 5, 2, 0, 21, 32, 12, -2, -10]
  console.log(arr)
  InsertionSort(arr)
  console.log('Ascending sort ' + arr)
}
