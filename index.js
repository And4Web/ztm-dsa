//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

let array1 = ["a", "b", "c"];
let array2 = ["a", "x", "z", "u"];
let array3 = ["m", "n", "o"];

//solution1:

function checkCommonItem1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// console.log(checkCommonItem1(array1, array2));
// console.log(checkCommonItem1(array2, array3));
// console.log(checkCommonItem1(array1, array3));

//the above solution uses nested looping which should be generally avoided, because of time complexity. It returns Big O value of O(n^2) => O(n*n).

//solution2:

//in this case, we would use two for loops, not nested. Time complexity improved => O(n+n)
function checkCommonItem2(arr1, arr2) {
  //step1: convert the array 1 into an object which contains the elements of the array as its properties:
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true; //creating the object
    }
  }
  //step2: compare the elements of the array 2 with each element of the array 1:
  for (j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
// console.log(checkCommonItem2(array1, array2));
// console.log(checkCommonItem2(array3, array2));
// console.log(checkCommonItem2(array1, array3));

//solution3:
//solution3:

//using javascript built in methods some() and includes()

function checkCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
console.log(checkCommonItem3(array1, array2));
console.log(checkCommonItem3(array3, array2));
console.log(checkCommonItem3(array1, array3));
