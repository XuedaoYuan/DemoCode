const a = {
  valueOf() {
    return 1;
  }
};

const b = {
  valueOf() {
    return 2;
  }
};

console.log(a + b); // 3
