import { createSignal, onMount } from 'solid-js';
import MyTitle from '~/components/MyTitle';
export default function ref() {
  let outerEl: any;
  let titleRef: any;
  onMount(() => {
    console.log((outerEl as HTMLDivElement).DOCUMENT_TYPE_NODE);
    console.log(titleRef);
    titleRef.style.color = 'red'
  });
  return (
    <div ref={outerEl}>
      <MyTitle ref={titleRef} title='adasda'></MyTitle>
    </div>
  );
}
