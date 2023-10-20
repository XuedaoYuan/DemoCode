// @ts-nocheck
import { createSignal, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
export default function PortalX() {
  return (
    <div>
      <Show when={false}>
        <Portal>
          <div>adasdasdasd</div>
        </Portal>
      </Show>
    </div>
  );
}
