// @ts-nocheck
import { createSignal, Accessor, Setter } from 'solid-js';
interface Todo {
  id: number;
  text: string;
  completed: Accessor<boolean>;
  setCompleted: Setter<boolean>;
}
export default function InnerSignal() {
  let input: HTMLInputElement;
  let todoId = 0;
  const [todos, setTodos] = createSignal<Todo[]>([]);

  const handleAdd = () => {
    if (!input.value.trim()) return;
    const [completed, setCompleted] = createSignal(false);
    setTodos([...todos(), { id: todoId++, text: input.value, completed, setCompleted }]);
    input.value = '';
  };
  const handleChange = id => {
    console.log(id);
    const todo = todos().find(item => item.id === id);
    todo?.setCompleted(!todo.completed())
  };
  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={handleAdd}>add todo</button>
      <ul>
        <For each={todos()}>
          {(todo: Todo) => {
            return (
              <li>
                <input
                  type='checkbox'
                  value={todo.completed()}
                  onChange={[handleChange, todo.id]}
                />
                <span style={{ 'text-decoration': todo.completed() ? 'line-through' : 'none' }}>
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
