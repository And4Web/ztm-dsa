// (3) different terms for inputs:
// this is the trickiest part of any interview.

function boxesTwice(boxes, boxes2) {
  boxes.forEach((boxes) => {
    console.log(boxes);
  });

  boxes2.forEach((boxes) => {
    console.log(boxes);
  });
}

// here boxes and boxes2 are two different inputs which may have different lengths. so let's say length of boxes is a and length of boxes2 is b, then the Big O for the above function would be:

//O(a + b)
