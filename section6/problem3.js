const arr1 = [0, 4, 8, 39, 49];
const arr2 = [4, 19, 26, 48, 51];

function mergedArray1(array1, array2) {
  let t1 = performance.now();
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
  let t2 = performance.now();
  console.log(
    `time taken in execution of the function which uses for loop: ${
      t2 - t1
    } milliseconds.`
  );
  return mergedArray;
}

console.log("mergedArray1 when arr2 is empty: ", mergedArray1(arr1, []));
console.log("mergedArray1 when arr1 is empty: ", mergedArray1([], arr2));
console.log(
  "mergedArray1 when both the arrays are empty: ",
  mergedArray1([], [])
);
console.log(
  "mergedArray1 when both the arrays are defined: ",
  mergedArray1(arr1, arr2)
);

//method2: using while loop:

// const arr1 = [0, 4, 8, 39, 49];
// const arr2 = [4, 19, 26, 48, 51];

function mergedArray2(array1, array2) {
  let t1 = performance.now();
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

  let t2 = performance.now();
  console.log(
    `time taken in execution of the function which uses while loop: ${
      t2 - t1
    } milliseconds.`
  );
  return mergedArray;
}

mergedArray1(arr1, arr2);
mergedArray2(arr1, arr2);
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
