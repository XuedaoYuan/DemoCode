import { createSignal, onCleanup, onMount } from 'solid-js';
import { red } from "~/styles/style.module.css"
export default function Mount() {
  const _list = [];
  const [list, setList] = createSignal(_list);


  const resizeHandler = () => { }
  onMount(() => {
    window.addEventListener('resize', resizeHandler)
  });
  onCleanup(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  onMount(() => {
    console.log(2);
  })


  const [pos, setPos] = createSignal({ x: 0, y: 0 })
  const handleMouseMove = e => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  }

  const [num, setNum] = createSignal(12);
  setInterval(() => setNum((num() + 1) % 255), 1000)
  return (
    <div style={{ width: '100%', height: '100%', 'background-color': '#ddd' }} onMouseMove={handleMouseMove}>
      <h1 style={{
        color: `rgb(${num()}, 180, ${num()})`,
        "font-weight": 800,
        "font-size": `${num()}px`,
      }}>Mount</h1>
      <ul>
        <For each={list()}>{(item) => <li>{item}</li>}</For>
      </ul>
      <p classList={{ position: true, [red]: true }}>x: {pos().x}, y: {pos().y}</p>
    </div>
  );
}
