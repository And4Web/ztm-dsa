function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booo!");
  }
}
booo([1, 2, 3, 4, 5]);

function hiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i <= n; i++) {
    hiArray[i] = "hi!";
  }
  console.log(hiArray);
  return hiArray;
}

hiNTimes(5);
