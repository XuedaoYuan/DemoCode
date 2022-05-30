const send_msg = document.querySelector('#send_msg');
const terminate_worker = document.querySelector('#terminate_worker');
const result_input = document.querySelector('#result_input');

const uIntArray = new ArrayBuffer(2);
uIntArray[0] = 100;
uIntArray[1] = 200;

if (window.Worker) {
  let worker = new Worker('worker.js');
  console.log(worker);
  // 等同于 worker.onmessage 接收来自worker线程的消息
  worker.addEventListener('message', event => {
    const { data } = event;
    console.log(`%cdata from worker: ${data}`, 'color: red;');
    result_input.value = data;
    console.log(uIntArray);
    terminateWorker();
  });
  // 监听Worker线程的错误
  worker.addEventListener('error', e => {
    result_input.value = ` ERROR: Line , ${e.lineno},  in , ${e.filename}, : , ${e.message}`;
  });
  send_msg.addEventListener('click', () => {
    // 发送消息给worker线程
    // worker.postMessage('hello, world');
    // worker.postMessage({ x: 1, y: 2 });

    worker.postMessage(uIntArray, [uIntArray]);
  });
  terminate_worker.addEventListener('click', terminateWorker);
  function terminateWorker() {
    if (worker) {
      worker.terminate();
      worker = null;
    }
  }
}
