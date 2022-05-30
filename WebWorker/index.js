const send_msg = document.querySelector('#send_msg');
const terminate_worker = document.querySelector('#terminate_worker');
const result_input = document.querySelector('#result_input');
if (window.Worker) {
  const worker = new Worker('worker.js');
  // 等同于 worker.onmessage 接收来自worker线程的消息
  worker.addEventListener('message', event => {
    const { data } = event;
    console.log(`%cdata from worker: ${data}`, "color: red;");
    result_input.value = data
  });
  // 监听Worker线程的错误
  worker.addEventListener('error', e => {
    result_input.value = ` ERROR: Line , ${e.lineno},  in , ${e.filename}, : , ${e.message}`
  })
  send_msg.addEventListener('click', () => {
    // 发送消息给worker线程
    worker.postMessage('hello, world');
  });
  terminate_worker.addEventListener('click', () => {
    // 关闭worker
    worker.terminate();
  });
}
