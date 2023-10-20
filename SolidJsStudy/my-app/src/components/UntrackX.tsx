// @ts-nocheck
import { createEffect, createSignal, untrack } from 'solid-js';
export default function UntrackX() {
  const [A, setA] = createSignal(1);
  const [B, setB] = createSignal(1);
  createEffect(() => {
    // untrack之后B的更新不会被副作用收集
    console.log(A(), untrack(B));
  });
  createEffect(() => {
    console.log(B());
  });
  const addA = () => {
    setA(A() + 1);
  };
  const addB = () => {
    setB(B() + 1);
  };
  return (
    <div>
      <p>
        A: {A()}, B: {B()}
      </p>
      <button onClick={addA}>increment A</button>
      <button onClick={addB}>increment B</button>
    </div>
  );
}
