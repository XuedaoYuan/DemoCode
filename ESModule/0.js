/* import { log, Person } from './1.js';
log('123');

const p = new Person('yuanxd', 22);
p.print();
 */

// import { username } from './1.js';
// console.log(username);

// const div = document.createElement('div');
// div.textContent = username;

// document.body.appendChild(div);

/* import { foo as func, obj } from './1.js';
console.log(func); // foo1
setTimeout(() => {
  console.log(func); // foo2
}, 2000); */

/* import * as module1 from './1.js';
console.log(module1.obj); */

/* import { default as log } from './default.js';
log(); */

/* import { log, foo } from './1.js';
log('1');
foo();
 */

import('./1.js').then(module => {
  //   console.log(module);
  console.log(module.x);
  module.foo();
  console.log(module.default);
});

const url = import.meta.url;
console.log(url); // http://127.0.0.1:8080/0.js

console.log(import.meta);
