!(function (win) {
  var doc = window.document;
  var html = doc.documentElement;
  var ratio = win.devicePixelRatio || 1;
  function onload() {
    if (doc.body) {
      doc.body.style.fontSize = 12 * ratio + 'px';
    } else {
      doc.addEventListener('DOMContentLoaded', onload);
    }
  }

  function resize() {
    const val = html.clientWidth / 10;
    html.style.fontSize = val + 'px';
    win._rem = val;
  }
  onload();
  resize();
  win.addEventListener('resize', resize);
  win.addEventListener('pageshow', function (e) {
    // 如果网页来自缓存
    e.persisted && onload();
  });
})(window);
