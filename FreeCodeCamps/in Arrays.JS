function largestOfFour(arr) {
  // var arrr = [];
  for(var i=0; i<4; i++){
    var mx = -Infinity;
    for(var j=0; j<4; j++){
      mx = Math.max(mx, arr[i][j]);
    }
    arr[i] = mx;
    // arrr.push(mx);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);