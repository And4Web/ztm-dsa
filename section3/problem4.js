function anotherChallenge(input) {
  let a = 5; //------>O(1)
  let b = 10; //------>O(1)
  let c = 50; //------>O(1)

  for (let i = 0; i < input; i++) {
    //------>O(n)
    let x = i + 1; //------>O(n)
    let y = i + 2; //------>O(n)
    let z = i + 3; //------>O(n)
  }

  for (let j = 0; j < input; j++) {
    //------>O(n)
    let p = j * 2; //------>O(n)
    let q = j * 2; //------>O(n)
  }

  let whoAmI = "I don't know"; //------>O(1)
}

// Big O for the above function would be:
// O(1+1+1+n+n+n+n+n+n+n+1) = O(4+7n) almost equal to O(n)

// in the interviews we don't do this way, so the rules to calculate Big O directly are:
/*
(1) worst case:
(2) remove constants
(3) different terms for inputs
(4) drop non dominants
*/