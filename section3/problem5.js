//worst case:

//for example, in the finding Nemo function, we can use "break" statement to stop executing and coming out of the loop to stop the wasteful runtime.

const nemo = ["nemo"];
// const largeArr = new Array(100).fill("nemo");
const everyOne = [
  "harry",
  "anand",
  "juggy",
  "bhanu",
  "nemo",
  "munna",
  "guddu",
  "jackie",
];

function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    console.log("running");
    if (arr[i] === "nemo") {
      console.log("found Nemo!");
      break;
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took, ${t1 - t0} milliseconds.`);
}

// findNemo(nemo);
findNemo(everyOne);
