function chunkArrayInGroups(arr, size) {
  var n = arr.length/size;
  var a = [n];
  for(var i=0; i<n; i++){
    a[i] = [];
  }
  // while(arr.length > 0){
  //   // a.push(arr.slice(0, size));
  //   // arr = arr.slice(size);

  //   a.push(arr.splice(0, size);
  // }
  var x = 0;
  for (var i=0,j=0; i<arr.length; i++,j++){
    if(j === size){
      x++;
      j = 0;
    }
    a[x][j] = arr[i];
  }
  return a;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);