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
      console.log(input[i], input[j]);
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([3, 5, 2, 3, 5, 1, 2, 4]));
//the above solution has Big O = O(n^2).
