import { createEffect, createSignal, untrack, on } from 'solid-js';
export default function UntrackX() {
  const [A, setA] = createSignal(1);
  const [B, setB] = createSignal(1);

  createEffect(
    on(
      A,
      a => {
        console.log(a, B());
      },
      { defer: true }
    )
  );
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
