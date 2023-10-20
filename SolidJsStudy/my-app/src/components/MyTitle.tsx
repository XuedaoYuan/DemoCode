// import { createSignal } from 'solid-js';
interface Props {
  title: string;
  ref: any;
}
export default function MyTitle(props: Props) {
  return (
    <h1>
      <span ref={props.ref}>{props.title}</span>
    </h1>
  );
}
