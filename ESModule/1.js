// export var value1 = 'hello1';
// export let value2 = 'hello2';
// export const value3 = 'hello3';

/* var value1 = 'hello1';
let value2 = 'hello2';
const value3 = 'hello3';
export { value1, value2, value3 }; */

/* export function log(...args) {
  console.log.apply(null, args);
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(this.name, this.age);
  }
} */

// const name = 'hello, world';
// export { name as username };

/* export var foo = 'foo1';

setTimeout(() => (foo = 'foo2'), 1000);

export const obj = {
  x: 2,
  y: 1
};
 */

// export { log } from './log.js';
// export * from './log.js';

export const x = 'xx';

export function foo() {
  console.log('foo');
}
const y = 'yyy'
export default y
