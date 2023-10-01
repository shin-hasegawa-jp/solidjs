import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';

const [state, setState] = createSignal(0);
const newCount = () => setState(state() + 1);

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <p>{state}</p>
        <button onClick={newCount}>Click me</button>
      </header>
    </div>
  );
}

export default App;
