export function log(...args) {
  console.log.apply(null, args);
}

export function foo() {
  console.log('foo');
}
