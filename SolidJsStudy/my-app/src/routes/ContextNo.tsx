import { createMemo, createRoot, createSignal } from 'solid-js';

interface Cache {
  firstName?: string;
  lastName?: string;
  age?: number;
}


function createCache() {
  const [cache, setCache] = createSignal<Cache>({
    firstName: 'Lebern',
    lastName: 'James',
    age: 20
  });
  const changeCache = (newCache: Cache) => {
    setCache(cache => {
      return {
        ...cache,
        ...newCache
      };
    });
  };
  const clearCache = () => {
    setCache({
      firstName: '',
      lastName: '',
      age: 0
    });
  };
  const fullName = createMemo(() => cache().firstName + ' ' + cache().lastName);
  return {
    cache,
    changeCache,
    fullName
  };
}

const cacheIns = createRoot(createCache);

function Demo1() {
  const { cache, changeCache, fullName } = cacheIns;
  const handleClick = () => {
    changeCache({ firstName: 'xxxx' });
  };
  return (
    <div>
      <h1>demo1</h1>
      <p>{cache().age}</p>
      <p>{fullName()}</p>
      <button onClick={handleClick}>change</button>
    </div>
  );
}

function Demo2() {
  const { cache, changeCache, fullName } = cacheIns;
  return (
    <div>
      <h1>demo2</h1>
      <p>{cache().age}</p>
      <p>{fullName()}</p>
    </div>
  );
}

export default function ContextNo() {
  return (
    <div>
      <Demo1></Demo1>
      <hr />
      <Demo2></Demo2>
    </div>
  );
}
