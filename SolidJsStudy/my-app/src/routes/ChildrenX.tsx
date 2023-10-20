import { children, createEffect, createSignal, For } from 'solid-js';

function ColoredList(props: any) {
  // const c = children(() => props.children);
  const c = children(() => props.children);
  createEffect(() => {
    console.log(c());
    (c() as Array<HTMLElement>).forEach(el => {
      el.style.color = props.color;
    });
  });
  return <>{c()}</>;
}

export default function ChildrenX() {
  const [color, setColor] = createSignal('red');
  return (
    <div>
      <ColoredList color={color()}>
        <For each={['A', 'B', 'C']}>
          {(item, index) => (
            <p>
              {item}-{index()}
            </p>
          )}
        </For>
      </ColoredList>
      <input
        type='color'
        value={color()}
        onInput={e => {
          setColor(e.currentTarget.value);
        }}
      />
    </div>
  );
}
