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
