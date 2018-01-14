function theBeatlesPlay (x, y) {
  var n = [];
  for (var i = 0; i < x.length; i++) {
    n[i] = x[i] + " plays " + y[i];
  }
  return n;
}

function johnLennonFacts (x) {
  var i = 0;
  while (i < x.length) {
    x[i] = x[i] + "!!!";
    i++;
  }
  return x
}

function iLoveTheBeatles (x) {
  var y = [];
  do {
    y.unshift("I love the Beatles!");
    x++;
  }
  while (x < 15);
  return y
}
