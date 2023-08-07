const arr = [1, 2, 3, 4];
const iter = arr[Symbol.iterator](); // 获取迭代器对象， 对象具有next属性
let o = iter.next();
while (!o.done) {
  console.log(o);
  o = iter.next();
}
/* 
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
*/

console.log(o); // { value: undefined, done: true }
