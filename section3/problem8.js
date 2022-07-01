// nested loops -> Quadratic time:

function logTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

const list = ["a", "b", "c", "d"];

logTwice(list);

// the Big O for this function would be:

// O(n * n) = O(n^2) -> Quadratic time
