// link :- https://youtu.be/XkhLTlFXxbI?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// Big-O -- OBJECTS
{
  // An array is a collection of key value pairs.
  // Insert - O(1)
  // Remove - O(1)
  // Access - O(1)
  // Search - O(n)
  // Objects.keys - O(n)
  // Objects.values - O(n)
  // Objects.entries - O(n)
}

// Big-O -- Arrays
{
  // Insert/Remove at end - O(1)
  //
  // Insert/Remove at beggining - O(n),
  //  as index of every elemnt
  //  has to be shifted.
  //
  // Insert/Remove in the middle - O(n),
  //  as inserting in the middle also involves
  //  shifting of elements, resulting in linear complaxity.
  //
  // Access - O(1)
  //  accessing an array element by index is a constant
  //  time operation because the index directly maps to a
  //  memoy location.
  //
  // Searching - (Linear Search Algorithm) - O(n)
  //  Linear search is the base search algorithm,
  //  and in the worst case, it may need to examine
  //  every element in the array.
  //
  // Searching - (Binary search Algorithm [Can only be performed on sorted array]) - O(logn)
  //
  // Push/pop - O(1)
  //
  // shift / unshift / concat / slice / splice - O(n)
  //
  // forEach / map / filter / reduce - O(n)
}
