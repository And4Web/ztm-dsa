//O(1) --> constant time

//no matter how large the input is, performance is always predictable and a constant line.

//O(1) --> constant time

const arrName = ["nemo", "anand", "harry", "nemo", "anand", "harry", "nemo"];
function constantTime(arr) {
  let t0 = performance.now();
  console.log(arr[0]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[4]);

  let t1 = performance.now();

  console.log(`time taken is ${t1 - t0} milliseconds.`);
}
constantTime(arrName);
