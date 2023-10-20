// @ts-nocheck
import { createSignal, Show, onCleanup, onMount } from 'solid-js';

function onClickOutside(el: HTMLElement, accessor: Function) {
  console.debug(el, accessor);
  const onClick = (e: Event) => {
    if (!el.contains(e.target)) {
      accessor()?.();
    }
  };

  document.body.addEventListener('click', onClick);

  onCleanup(() => {
    console.debug('onCleanup');
    document.body.removeEventListener('click', onClick);
  });
}

function makeRed(el: HTMLElement, accessor: Function) {
  console.debug('makeRed');
  el.style.color = 'red';
}

function makeColor(el: HTMLElement, accessor: Function) {
  console.debug(accessor(), 'makeColor');
  el.style.color = accessor() || 'red';
}

function click(el: HTMLElement, accessor: Function) {
  const onClick = e => {
    accessor()(e);
  };
  el.addEventListener('click', onClick);
  onCleanup(() => {
    el.removeEventListener('click', onClick);
  });
}
/* 自定义指令 */
export default function directive() {
  const [show, setShow] = createSignal(false);
  return (
    <div>
      <Show when={show()} fallback={<button onClick={() => setShow(true)}>show</button>}>
        <div
          use:onClickOutside={() => setShow(false)}
          class='modal'
          style={{ border: '1px solid #ccc' }}
        >
          My Modal
        </div>
      </Show>
      <div use:makeRed={() => {}}>red</div>
      <div use:makeColor={'green'}>green</div>
      <button use:click={e => console.log('click')}>click</button>
    </div>
  );
}
