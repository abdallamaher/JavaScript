var Hello = require('./Hello');

var obj1 = Hello.getInstance();
var obj2 = Hello.getInstance();

console.log(obj1 === obj2);