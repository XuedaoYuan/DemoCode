import { createEffect, createMemo, createSignal, Show, For, Index } from 'solid-js';
import { Title } from 'solid-start';
export default function Hello() {
  const [count, setCount] = createSignal(0);
  /*  setInterval(() => {
    // setCount(c => c + 1);
    // or
    setCount(count() + 1);
  }, 1000); */
  createEffect(() => {
    console.log('count = ', count());
  });
  const handleClick = (e: Event) => {
    setCount(count() + 1);
  };

  const doubleCount = () => count() * 2;

  const tripleCount = createMemo(() => count() * 3);

  const [status, setStatus] = createSignal(true);

  const handleTrigger = () => {
    setStatus(!status());
  };

  const [list, setList] = createSignal([1, 2, 3]);

  const handleAdd = () => {
    const _list = list();
    _list.push(4, 5);
    console.log(_list);
    setList(() => _list);
  };
  return (
    <div>
      <Title>Study</Title>
      <h1>Hello</h1>
      <p>{count()}</p>
      <p>doubleCount: {doubleCount()}</p>
      <p>tripleCount: {tripleCount()}</p>
      <p>
        <button onClick={handleClick}>add 1</button>
      </p>
      <Show when={status()} fallback={<p>fallback</p>}>
        <p>test show</p>
      </Show>
      <p>
        <button onClick={handleTrigger}>trigger</button>
      </p>
      <ul>
        <For each={list()}>
          {(item, index: any) => (
            <li>
              {item}-{index()}
            </li>
          )}
        </For>
      </ul>
      <hr />
      <ul>
        <Index each={list()}>{item => <li>{item()}</li>}</Index>
      </ul>
      <p>
        <button onClick={handleAdd}>push</button>
      </p>
    </div>
  );
}
