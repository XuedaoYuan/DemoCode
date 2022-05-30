function createWorker(f) {
  var blob = new Blob(['(' + f.toString() + ')()']);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  window.URL.revokeObjectURL(url);
  return worker;
}

var pollingWorker = createWorker(function (e) {
  function fetchData() {
    return Promise.resolve(Math.random() > 0.5 ? 'A' : 'B');
  }

  var cache;

  function compare(newV, oldV) {
    if (newV !== oldV) {
      return false;
    }
    return true;
  }

  self.addEventListener('message', ({ data }) => {
    if (data === 'init') {
      init();
    }
  });

  function init() {
    setInterval(function () {
      fetchData().then(function (res) {
        var data = res;
        console.log(data);
        if (!compare(data, cache)) {
          cache = data;
          self.postMessage(data);
        }
      });
    }, 1000);
  }
});

pollingWorker.onmessage = function ({ data }) {
  // render data
  const p = document.createElement('p');
  p.textContent = `changed  - ${data}`;
  document.body.appendChild(p);
};

pollingWorker.postMessage('init');
