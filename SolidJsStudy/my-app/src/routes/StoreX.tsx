import { createSignal, Accessor, Setter, For, Index } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function Demo1() {
  const [person, setPerson] = createStore({
    name: {
      type: 'string',
      value: '222'
    },
    age: {
      type: 'number',
      value: 10
    }
  });
  const handleClick = () => {
    // 最基础的 setter 函数用法会接收一个对象，该对象的属性将与当前状态合并
    setPerson({
      name: {
        value: '333'
      }
    });
    // or
    // setter 函数还支持路径语法，以便我们进行嵌套更新
    // setPerson('name', 'value', '1111');
  };
  return (
    <div>
      <p>
        nameValue: {person.name.value}, ageValue: {person.age.value}
      </p>
      <button onClick={handleClick}>change</button>
    </div>
  );
}

function Demo2() {
  type Item = { text: string };
  const [store, setStore] = createStore<{ list: Item[] }>({
    list: []
  });
  let code = 65;
  const add = () => {
    setStore(
      'list',
      produce(list => {
        list.push({ text: String.fromCharCode(code++) });
      })
    );
  };
  const change = () => {
    setStore(
      'list',
      1,
      produce(item => {
        item.text = 'B';
      })
    );
  };
  const handleDelete = (index: number) => {
    console.log(index);
    setStore(
      'list',
      produce(list => {
        list.splice(index, 1);
      })
    );
  };
  return (
    <>
      <hr />
      <ol>
        <li>
          <button onClick={add}>add</button>
          <button onClick={change}>change</button>
        </li>
        <Index each={store.list}>
          {(item: Accessor<Item>, index) => {
            return (
              <li>
                {item().text}
                <button onClick={[handleDelete, index]}>del</button>
              </li>
            );
          }}
        </Index>
      </ol>
      <hr />
    </>
  );
}

export default function InnerSignal() {
  let input: HTMLInputElement;
  let todoId = 0;

  const [store, setStore] = createStore<{ todos: Todo[] }>({ todos: [] });
  const handleAdd = () => {
    if (!input.value.trim()) return;
    // setTodos([...todos(), { id: todoId++, text: input.value, completed, setCompleted }]);
    setStore('todos', todos => [...todos, { id: ++todoId, text: input.value, completed: false }]);
    input.value = '';
  };

  const handleChange = id => {
    setStore(
      'todos',
      t => t.id === id,
      'completed',
      completed => !completed
    );
  };
  return (
    <div>
      <Demo1></Demo1>
      <Demo2></Demo2>
      <input type='text' ref={input} />
      <button onClick={handleAdd}>add todo</button>
      <ul>
        <For each={store.todos}>
          {(todo: Todo) => {
            console.log(todo.id);
            return (
              <li>
                <input type='checkbox' value={todo.completed} onChange={[handleChange, todo.id]} />
                <span style={{ 'text-decoration': todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
              </li>
            );
          }}
        </For>
      </ul>
    </div>
  );
}
