function log() {
  console.log('log');
}

function foo() {
  console.log('foo');
}

export { log as default, foo };
// 等同于
// export default log
