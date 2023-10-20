// @refresh reload
import { Suspense } from 'solid-js';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from 'solid-start';
import './root.css';

console.log(FileRoutes());

function AsideMenu() {
  return (
    <aside class='aside-wrapper'>
      <For each={FileRoutes()}>
        {(route) => {
          return <A href={route.path}>{route.path}</A>
        }}
      </For>
      {/* <A href='/'>Index</A>
      <A href='/about'>About</A>
      <A href='/hello'>hello</A> */}
    </aside>
  );
}

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div id='app' class='app'>
              <AsideMenu></AsideMenu>
              <main class='main-wrapper'>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
