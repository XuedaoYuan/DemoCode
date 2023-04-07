var scope = 'global scope';
/* function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}

var foo = checkscope();
console.log(foo()); // local scope */
var data = [];

for (var i = 0; i < 3; i++) {
  function foo(k) {
    return function () {
      console.log(k);
    };
  }
  data[i] = foo(i);
}

data[0]();
data[1]();
data[2]();
