const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (let key of map.keys()) {
  console.log(key); // a b
}

for (let value of map.values()) {
  console.log(value); // 1 2
}

for (let entry of map.entries()) {
  console.log(entry); // [ 'a', 1 ] , [ 'b', 2 ]
  console.log(entry[0]); // a b
  console.log(entry[1]); // 1 2
}
map.forEach((value, key) => {
  console.log(value, key);
  //   1 a
  //   2 b
});
