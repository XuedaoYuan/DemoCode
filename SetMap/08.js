const arrLike = {
  0: 0,
  1: 1,
  2: 2,
  length: 3
};
arrLike[Symbol.iterator] = Array.prototype[Symbol.iterator];

for (let v of arrLike) {
  console.log(v); // 0 1 2
}

for (let x of 'a\uD83D\uDC0A') {
  console.log(x);
}
