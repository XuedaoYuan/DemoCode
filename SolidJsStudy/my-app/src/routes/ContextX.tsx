import { createSignal, createContext, useContext, mergeProps, Accessor } from 'solid-js';
type Theme = 'dark' | 'light';
type ThemeSignal = [Accessor<Theme>, (a: Theme) => void];
const ThemeContext = createContext<ThemeSignal>();

function ThemeProvider(props: { theme: Theme; children: any }) {
  const mProps = mergeProps({ theme: 'light' }, props);
  const [theme, setTheme] = createSignal<Theme>(mProps.theme);
  const store: ThemeSignal = [
    theme,
    (a: Theme) => {
      setTheme(a);
    }
  ];
  return <ThemeContext.Provider value={store}>{mProps.children}</ThemeContext.Provider>;
}

function useTheme() {
  return useContext(ThemeContext);
}

function Child() {
  const [theme, changeTheme] = useTheme() as ThemeSignal;
  const change = (theme: Theme) => {
    changeTheme(theme);
  };
  return (
    <div>
      <p>{theme()}</p>
      <h1>child</h1>
      <button onclick={[change, 'dark']}>dark</button>
      <button onclick={[change, 'light']}>light</button>
    </div>
  );
}
function Child2() {
  const [theme, changeTheme] = useTheme() as ThemeSignal;

  return (
    <div>
      <p>{theme()}</p>
      <h1>child2</h1>
    </div>
  );
}

export default function ContextX() {
  return (
    <ThemeProvider theme='light'>
      <div></div>
      <Child></Child>
      <hr />
      <Child2></Child2>
    </ThemeProvider>
  );
}
