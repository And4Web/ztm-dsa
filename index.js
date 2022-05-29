//Merge sort.
const arr1 = [0, 4, 8, 49];
const arr2 = [4, 19, 6, 8, 11];
function mergedArray(array1, array2) {
  const mergedArray = [];

  let firstIndex = 1;
  let secondIndex = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  for (let i = 0; i < array1.length - 1; i++) {
    let array1Item = array1[i];
    let j = 0;
    let array2Item = array2[j];

    if (array1Item <= array2Item) {
      mergedArray.push(array1[i]);
      array1Item = array1[i + 1];
    } else {
      mergedArray.push(array2Item);
      j++;
      array2Item = array2[j];
    }
    console.log(i, j);
  }

  return mergedArray;
}
console.log(mergedArray(arr1, arr2));

// {
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }
//   while (array1Item || array2Item) {
//     if (array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
// }
