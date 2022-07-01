//how well a problem is solved.
/*what is good code:

1. Readable
2. Scalable

Big O notation is a way to measure the performance of our code. It helps us to write efficient code for any application. 
  It talks about how long an algorithm takes to run. We can compare two different algorithms and decide which one is more scalable regardless of the hardware.
  It mesures, if we grow bigger with our inputs how slow would our algorithm become, how many more operations would we have to do. This is called algorithmic efficiency.
  the less our algorithm slows down the better it is.
  Big O doesn't measure things in seconds, instead it measures how quickly our runtime(time to run the operation) grows.
*/

//O(n) --> Linear Time

const nemo = ["nemo"];
const largeArr = new Array(100).fill("nemo");

function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took, ${t1 - t0} milliseconds.`);
}

findNemo(nemo);
findNemo(largeArr);

/*
here findNemo() function has linear relationship between inputs and number of operations, means for 10 inputs, loop needs to run 10 times. so, the Big O in this case would be O(n), i.e. linear time.
*/
