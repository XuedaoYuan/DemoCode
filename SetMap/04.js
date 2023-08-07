/* let arr = [];
function makeIterator() {
  let index = 0;
  return {
    next: function () {
      const value = arr[index];
      const done = index >= arr.length;
      index++;
      return { value, done };
    }
  };
}

const it = makeIterator([1, 2]);

const o = {};
o.next = it.next;
o[Symbol.iterator] = function () {
  return this;
};

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('===');
for (let v of o) {
  console.log(v);
}
 */

/* o.next = function () {
  let value = arr[index];
  if (index < arr.length) {
    index++;
    return { done: false, value };
  }
  return { done: true };
}; */
const o = {
  list: [1, 2, 3]
};

o[Symbol.iterator] = function () {
  let index = 0;
  let _this = this;
  return {
    next: function () {
      let value = _this.list[index];
      if (index < _this.list.length) {
        index++;
        return { done: false, value };
      }
      return { done: true };
    }
  };
};

for (let v of o) {
  console.log(v);
}
