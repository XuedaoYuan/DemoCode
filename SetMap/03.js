const arr = [1, 2, 3];

arr.forEach(
  function (item) {
    console.log(this);
  },
  { x: 1 }
);
