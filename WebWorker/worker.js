self.addEventListener('message', onMessageHandler);

function onMessageHandler(event) {
  console.log(event);
  // 接收来自主线程的消息
  const { data } = event;
  console.log('%cdata from main thread: ' + data, 'color: green;');
  importScripts('./script.js')
  // 对数据操作， 这里一般是一些比较耗时的操作，比如各种费时的递归和排序等等
  const result = data.split('').reverse().join('');
  // 传递数据操作结果给主线程
  self.postMessage(result);
}
// 下面的方式是等价的
// this.addEventListener('message', onMessageHandler);
// onmessage = onMessageHandler

// 在worker内部关闭自身
// self.close()
