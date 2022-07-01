//Calculating Big O notation:

function funChallenge(input) {
  let a = 10; //------>O(1)
  a = 50 + 3; //------>O(1)

  for (let i = 0; i < input.length; i++) {
    // for loop ------>O(n)
    anotherFunction(); //------>O(n)
    let stranger = true; //------>O(n)
    a++; //------>O(n)
  }
  return a; //------>O(1)
}

// the Big O for the above function would be:
// O(1+1+n+n+n+n+1) = O(3+4n) which would be equivalent to O(n).
// this is not the way we'll calulate Big O, in the later exercises we would learn direct methods to do this.
