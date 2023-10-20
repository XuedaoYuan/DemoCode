// @ts-nocheck
import { createSignal, onMount, children } from 'solid-js';

import Person from '~/components/Person.tsx';
export default function Props() {
  const [name, setName] = createSignal('');
  onMount(() => {
    setTimeout(() => {
      setName('James');
    }, 1000);
  });
  return (
    <div>
      <Person name='Wade' age='27'></Person>
      <Person></Person>
      <Person name={name()} style="color: red" title="Person"></Person>
    </div>
  );
}
