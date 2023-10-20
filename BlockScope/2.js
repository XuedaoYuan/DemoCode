function f() {
  console.log('outside');
}
var a = 10;
(function () {
  if (false) {
    function f() {
      console.log('inside');
    }
  }
  try {
    f();
  } catch (error) {
    console.log(error); // TypeError: f is not a function
  }
  console.log(a); // 10
})();
