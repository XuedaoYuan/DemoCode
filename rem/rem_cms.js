(function (win, uiWidth) {
  var docEl = win.document.documentElement;
  var _rem = {
    rem: 0
  };
  var timer = null;
  function resize() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      var width = docEl.clientWidth;
      var rem = (width / uiWidth) * 100;
      docEl.style.fontSize = rem + 'px';
      _rem.rem = rem;
      //误差、兼容性处理
      var actualSize = parseFloat(window.getComputedStyle(docEl)['font-size']);
      if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
        var remScaled = (rem * rem) / actualSize;
        docEl.style.fontSize = remScaled + 'px';
        _rem.rem = remScaled;
      }
    }, 50);
  }
  resize();

  //窗口更新动态改变font-size
  win.addEventListener('resize', resize, false);

  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        resize();
      }
    },
    false
  );

  _rem.resize = resize;
  _rem.rem2px = function (remVal) {
    var pxVal = parseFloat(remVal) * this.rem;
    if (typeof remVal === 'string' && remVal.match(/rem$/)) {
      pxVal += 'px';
    }
    return pxVal;
  };
  _rem.px2rem = function (pxVal) {
    var remVal = parseFloat(pxVal) / this.rem;
    if (typeof pxVal === 'string' && pxVal.match(/px$/)) {
      remVal += 'rem';
    }
    return remVal;
  };
  win._rem = _rem;
})(window, 375);
