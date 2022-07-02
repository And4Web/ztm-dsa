//(4) drop non dominants:
// lesson 17 in section 3

function printNumbersThenTheirSum(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("these are the sums of these numbers:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
      );
    });
  });
}

const arrSample = [1, 2, 3];
printNumbersThenTheirSum(arrSample);

//here the Big O for this function would be:
//O(n + n^2)
//if size of n increses, then the value of n^2 becomes dominent and we can neglect(drop) n, so the Big O becomes:
//O(n + n^2) = O(n^2)
