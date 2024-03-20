import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import Counter from "~/components/Counter";
import NameInput from "~/components/NameInput";
import { api } from "~/lib/api";
import { nameShared } from '../components/NameInput';

export default function Home() {
  const hello = createAsync(() => api.example.hello.query("world"));
  const start = createAsync(() => api.example.start.query());
  const  [ nameRef ] = nameShared;
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <NameInput />
      {nameRef()}
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <pre>
        <code>{JSON.stringify(hello(), null, 2)}</code>
        <code>{JSON.stringify(start(), null, 2)}</code>
        <code>from the db{JSON.stringify(fromDb(), null, 2)}</code>
      </pre>
    </main>
  );
}
