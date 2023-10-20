// @ts-nocheck
import { createSignal, For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
const red = () => <div style={{ color: 'red' }}>red</div>;
const green = () => <div style={{ color: 'green' }}>green</div>;
const options = {
  red: red,
  green: green
};
export default function DynamicX() {
  const [comp, setComp] = createSignal('red');
  return (
    <div>
      <select name='color' onChange={e => setComp(e.currentTarget.value)}>
        <For each={Object.keys(options)}>{color => <option value={color}>{color}</option>}</For>
      </select>
      <hr />
      <p>{comp()}</p>
      <Dynamic component={options[comp()]}></Dynamic>
    </div>
  );
}
