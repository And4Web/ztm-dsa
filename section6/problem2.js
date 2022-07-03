//problem2:
//reverse a given string.

//trick: whenever you have to do any action on strings, first convert that string into an array.
//the above problem is demonstrated in section 6 lecture 7

//solution:

let str1 = "Ananad Shukla";

//method1(direct, using built in javascript methods):

const reverseString = (str) => str.split("").reverse().join("");

console.log("using method1: ", reverseString(str1));

//method2(not using direct method, logical approach):

function reverseString2(str) {
  //step1: check if the input string is a valid string or not:
  if (typeof str !== "string" || (typeof str === "string" && str.length < 2)) {
    return "Please Enter a String with length more than or equal to 2";
  }

  //step2: convert the input string into an array of individual letters in reverse order:
  let strArray = [];
  for (i = str.length - 1; i >= 0; i--) {
    strArray.push(str[i]);
  }

  //step3: convert the obtained array into string:

  return strArray.join("");
}
console.log("using method2: ", reverseString2(str1));
