//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

let array1 = ["a", "b", "c"];
let array2 = ["a", "x", "z", "u"];
let array3 = ["m", "n", "o"];

//solution1:

function checkCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkCommonItem(array1, array2));
console.log(checkCommonItem(array2, array3));
console.log(checkCommonItem(array1, array3));

//the above solution uses nested looping which should be generally avoided, because of time complexity. It returns Big O value of O(n^2).

//solution2:
