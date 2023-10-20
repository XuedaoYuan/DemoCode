const template = document.createElement('template');
template.innerHTML = `
<style>
  .my-select {
    position: relative;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
  }
  .trigger-btn {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #eee;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 30px;
    padding: 0 8px;
  }
  .select__input {
    display: block;
    height: 0;
    position: absolute;
    overflow: hidden;
    border: none;
    outline: none;
    padding: 0;
  }
  .my-select--focus .trigger-btn {
    border-color: #409eff;
    box-sizing: border-box;
  }
  .select-options-wrapper {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    right: 0;
    top: 34px;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
    max-height: 0px;
    transition: max-height 0.5s ease;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .select-item {
    height: 28px;
    box-sizing: border-box;
    padding: 0 8px;
    /* transition: all 0.3s; */
    background-color: #fff;
    color: #000;
    font-size: 14px;
    line-height: 28px;
  }
  .select-item.select-item--active {
    color: #409eff;
  }
  .select-item:hover {
    background-color: #eee;
  }
</style>
<div class="my-select">
  <div class="trigger-btn"></div>
  <input class="select__input" type="text" />
  <ul class="select-options-wrapper"></ul>
</div>`;
class MySelect extends HTMLElement {
  constructor() {
    super();
    const content = template.content.cloneNode(true);
    console.log(template, content);

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    this._shadowRoot = shadowRoot;
    this._shadowRoot.appendChild(content);

    this.collapse = false;
    this.optionElList = [];

    this.$innerInput = this._shadowRoot.querySelector('.select__input');
    this.inputBlurHandler = e => {
      setTimeout(() => {
        this.collapse = false;
        this.triggerOptionsWrapper(this.collapse);
      }, 100);
    };
    this.$innerInput.addEventListener('blur', this.inputBlurHandler);

    this.$optionsWrapper = this._shadowRoot.querySelector('.select-options-wrapper');
    this.transitionendHandler = e => {
      e.stopPropagation();
    };
    this.$optionsWrapper.addEventListener('transitionend', this.transitionendHandler);

    this.$triggerBtn = this._shadowRoot.querySelector('.trigger-btn');
    this.triggerBtnClickHandler = e => {
      this.collapse = !this.collapse;
      this.triggerOptionsWrapper(this.collapse);
    };
    this.$triggerBtn.addEventListener('click', this.triggerBtnClickHandler);

    this.selectItemClickHandler = e => {
      e.stopPropagation();
      const liEl = e.target;
      const value = liEl.dataset.value;
      const changeEvent = new CustomEvent('on-change', {
        detail: value,
        bubbles: true,
        cancelable: true
      });
      // window[_this.$clickHandler](e);
      this.dispatchEvent(changeEvent);
      // this.triggerBtnClickHandler();
    };
    this.$optionsWrapper.addEventListener('click', this.selectItemClickHandler);
  }
  get options() {
    const optionsStr = this.getAttribute('options') || '[]';
    return JSON.parse(optionsStr);
  }
  get value() {
    return this.getAttribute('value') || '[]';
  }
  static get observedAttributes() {
    return ['options', 'value'];
  }
  connectedCallback() {}
  disconnectedCallback() {
    this.$optionsWrapper.removeEventListener('transitionend', this.transitionendHandler);
    this.$optionsWrapper.removeEventListener('click', this.selectItemClickHandler);
    this.$triggerBtn.removeEventListener('click', this.triggerBtnClickHandler);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback', name, oldVal, newVal);
    if (name === 'options') {
      this.renderOptions();
    }
    if (name === 'value') {
      this.setActiveLiEl();
    }
  }
  renderOptions() {
    this.optionElList = [];
    this.options.forEach(option => {
      const { label, value } = option;
      const li = document.createElement('li');
      li.classList.add('select-item');
      li.setAttribute('data-value', value);
      li.setAttribute('data-label', label);
      li.textContent = label;

      this.optionElList.push(li);
      this.$optionsWrapper.appendChild(li);
    });
    this.setActiveLiEl();
  }
  setActiveLiEl() {
    this.optionElList.forEach(liEl => {
      liEl.classList.remove('select-item--active');
      const value = liEl.dataset.value;
      if (value == this.value) {
        liEl.classList.add('select-item--active');
        this.$triggerBtn.textContent = liEl.dataset.label;
      }
    });
  }
  triggerOptionsWrapper(status) {
    console.log('triggerOptionsWrapper', status);
    console.trace();
    if (status) {
      this.$optionsWrapper.style.maxHeight = '140px';
      // this.$optionsWrapper.style.overflow = 'hidden';
      this.$innerInput.focus();
    } else {
      this.$optionsWrapper.style.maxHeight = '0';
    }
  }
}
window.customElements.define('my-select', MySelect);
