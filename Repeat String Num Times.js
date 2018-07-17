function repeatStringNumTimes(str, num) {
  if(num <= 0)return "";
  // return str.repeat(num);
  var s = str;
  for(var i=1; i<num; i++){
    s += str;
  }
  return s;
}
// function recursion(s, n){
//   if(n<=0)return "";
//   if(n === 1)return s;

//   return s + recursion(s, n-1);
// }
repeatStringNumTimes("abc", 3);