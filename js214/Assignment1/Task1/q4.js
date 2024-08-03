/* 4. Combining Nested Arrays */

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  
  
  function combiningNestedArrays(array1, array2){
  const combinenedArray = [
  ...array1, ...array2
  ]
  return combinenedArray
  }
  
  console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]