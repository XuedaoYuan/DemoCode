import { createSignal, createResource, createEffect, on, Show } from 'solid-js';

// const fetchUser = async id => (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

interface User {
  name: string;
  id: string;
}

const fetchUser = (id: string) => {
  return new Promise<User[]>(resolve => {
    // 请求接口
    setTimeout(() => {
      resolve([
        {
          name: id + '1',
          id: id + '1'
        },
        {
          name: id + '2',
          id: id + '2'
        }
      ]);
    }, 1000);
  });
};
export default function Resource() {
  const [userId, setUserId] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [user, setUser] = createSignal<User[]>([]);
  //   const [user, { mutate, refetch }] = createResource(userId, fetchUser);
  createEffect(
    on(
      userId,
      userId => {
        setLoading(true);
        fetchUser(userId).then(res => {
          setUser(res);
          setLoading(false);
        });
      },
      { defer: true }
    )
  );

  return (
    <div>
      <input
        type='number'
        min='1'
        placeholder='Enter Numeric Id'
        onChange={e => setUserId(e.currentTarget.value)}
      />
      <div>
        <Show when={loading()}>Loading</Show>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </div>
  );
}
