//problem3:
//merge sort: given two sorted arrays, combine/merge them and make one sorted array.

//this problem is demonstrated in section 6 lecture 10.

//Merge sort:
//method1: using for loop:
const arr1 = [0, 4, 8, 39, 49];
const arr2 = [4, 19, 26, 48, 51];

function mergedArray(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let firstIndex = 1;
  let secondIndex = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  if (array1Item || array2Item) {
    for (let i = 0; i < array1.length + array2.length; i++) {
      if (array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Item = array1[firstIndex];
        firstIndex++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[secondIndex];
        secondIndex++;
      }
    }
  }
  return mergedArray;
}

console.log("mergedArray1 when arr2 is empty: ", mergedArray(arr1, []));
console.log("mergedArray1 when arr1 is empty: ", mergedArray([], arr2));
console.log(
  "mergedArray1 when both the arrays are empty: ",
  mergedArray([], [])
);
console.log(
  "mergedArray1 when both the arrays are defined: ",
  mergedArray(arr1, arr2)
);

//method2: using while loop:

// const arr1 = [0, 4, 8, 39, 49];
// const arr2 = [4, 19, 26, 48, 51];

function mergedArray2(array1, array2) {
  // console.log(array1, array2);

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);
    // console.log("entered the loop");

    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

// mergedArray2(arr1, arr2);
console.log("mergedArray2 when arr1 is empty: ", mergedArray2([], arr2));
console.log("mergedArray2 when arr2 is empty: ", mergedArray2(arr1, []));
console.log(
  "mergedArray2 when both the arrays are empty: ",
  mergedArray2([], [])
);
console.log(
  "mergedArray2 when both the arrays are defined: ",
  mergedArray2(arr1, arr2)
);
