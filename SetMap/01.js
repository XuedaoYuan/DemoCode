const set1 = new Set([1, 2, 3, 2]);
// console.log(set1.size);

/* for(let v of set1) {
    console.log(v);
} */

const set2 = new Set('abcdeab');
// console.log(set2.size, set2);

const set = new Set();
set.add(1);
set.add(2);
for (let val of set) {
  console.log(val);
}
// 1
// 2

set.forEach(val => {
  console.log(val);
});
// 1
// 2
