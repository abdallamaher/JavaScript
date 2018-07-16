function titleCase(str) {
  // var s = str.toLowerCase().split(" ");
  // for(var i=0; i<s.length; i++){
  //      // s[i] = s[i][0].toUpperCase() + s[i].slice(1);
  //   s[i] = s[i].split("");
  //   s[i][0] = s[i][0].toUpperCase();
  //   s[i] = s[i].join("");
  // }

  // var s = str.toLowerCase().split(" ").map(function (x) {
  //   return x[0].toUpperCase() + x.slice(1);
  // })

  var s = str.toLowerCase().split(" ").map(x => x[0].toUpperCase() + x.slice(1));

  
  return s.join(" ");
}

titleCase("I'm a little tea pot");