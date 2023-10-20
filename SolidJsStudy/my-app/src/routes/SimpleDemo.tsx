import { batch, createSignal, lazy } from 'solid-js';
import UntrackX from '~/components/UntrackX';
import Resource from '~/components/Resource';
const Comp1 = lazy(() => import('~/components/Comp1'));
export default function SimpleDemo() {
  const [A, setA] = createSignal('A');
  const [B, setB] = createSignal('B');
  const C = () => {
    console.log('rebuild C');
    return A() + ':' + B();
  };

  const handleC = () => {
    batch(() => {
      setA(A() + 'n');
      setB(B() + '!');
    });
  };
  return (
    <div>
      <p>C: {C()}</p>
      <button onClick={handleC}>change</button>
      <hr />
      <UntrackX></UntrackX>
      <hr />
      <Comp1></Comp1>
      <hr />
      <Resource></Resource>
    </div>
  );
}
