// @ts-nocheck
import { createSignal, For, Index } from 'solid-js';
export default function ForS() {
  const [list, setList] = createSignal([
    {
      name: 'a',
      id: '1'
    },
    {
      name: 'b',
      id: '2'
    }
  ]);
  const handleAdd = () => {
    setList(list => [...list, { name: 'c', id: '3' }]);
  };
  const newList = ['A', 'B', 'C'];
  return (
    <div>
      <For each={list()}>
        {(item, index) => {
          return (
            <input
              type='text'
              value={item.name}
              onChange={e => {
                setList(list => {
                  return list.map((mapItem, mapIndex) => {
                    if (mapIndex === index()) {
                      return { ...mapItem, name: e.target.value };
                    }
                    return mapItem;
                  });
                });
              }}
            />
          );
        }}
      </For>
      <hr />
      <Index each={list()}>
        {(item, index) => {
          return (
            <input
              type='text'
              value={item().name}
              onChange={e => {
                setList(list => {
                  return list.map((mapItem, mapIndex) => {
                    if (mapIndex === index) {
                      return { ...mapItem, name: e.target.value };
                    }
                    return mapItem;
                  });
                });
              }}
            />
          );
        }}
      </Index>
      <p>
        <button onClick={handleAdd}>add</button>
      </p>
      <hr />
      <ul>
        <For each={newList}>{item => <li>{item}</li>}</For>
      </ul>
    </div>
  );
}
