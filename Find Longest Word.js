function findLongestWordLength(str) {
  // str = str.split(" ").sort(function (a, b) {return b.length -a.length})[0];
  // return str.length;
  str = str.split(" ");
  var mx = 0;
  for(var w of str){
    mx = Math.max(mx, w.length);
  }
  return mx;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");