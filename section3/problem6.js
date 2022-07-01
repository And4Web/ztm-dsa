// remove constants:

function printFirstItemThenHalfItSayHi100Times(items) {
  console.log(items[0]); //---->O(1)

  var middleIndex = Math.floor(items.length / 2); //---->O(1)
  var index = 0; //---->O(1)

  while (index < middleIndex) {
    //---->O(n/2)
    console.log(items[index]); //---->O(n/2)
    index++; //---->O(n/2)
  }

  for (i = 0; i < 100; i++) {
    //---->O(100)
    console.log("hi!"); //---->O(100)
  }
}

// Big O for this function would be:

// O(1+1+1+n/2+n/2+n/2+100+100) = O(3n/2+203) = O(n), which is because if n is in millions then constants doesn't matter.
