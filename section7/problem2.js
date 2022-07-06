//Goodle Question:
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//solution 1:

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // console.log(input[i], input[j]);
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// console.log(firstRecurringCharacter([1, 3, 5, 2, 13, 15, 12, 7, 4, 7]));
//the above solution has Big O = O(n^2), time complexity.

//solution 2:

function firstRecurringCharacter2(input) {
  let hashMap = {};

  for (let i = 0; i < input.length; i++) {
    if (hashMap[input[i]] !== undefined) {
      return input[i];
    } else {
      hashMap[input[i]] = i;
    }
    // console.log(hashMap);
  }
  return undefined;
}

//the above solution has Big O = O(n), time complexity.

console.log(firstRecurringCharacter([1, 3, 5, 2, 13, 15, 12, 7, 4, 7]));
console.log(firstRecurringCharacter2([1, 3, 5, 2, 13, 15, 12, 7, 4, 7]));
