function nonAlphanumeric(str) { 
  var s = "";
  var n = str.length;
  for(var i=0; i<n; i++){
    if((str[i]>='a' && str[i]<='z') || (str[i]>='1' && str[i]<='9')) s += str[i];
  }
  return s;
}

function palindrome(str) {

  str = str.toLowerCase();
  str = nonAlphanumeric(str);

  var m = str.length;
  for(var a=0, b=m-1; a<b; ){
    if(str[a] != str[b])return false;
    a++, b--
  }
  return true;
}

palindrome("1 eye for of 1 eye.");