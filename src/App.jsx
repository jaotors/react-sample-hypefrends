import './App.css';

export function Button() {
  return <button>Tetst</button>;
}

export function Nav() {
  return (
    <nav>
      <ul>
        <li>Homse</li>
        <li>About</li>
      </ul>
      <Button />
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Button />
      <main>
        <div>This is the main element</div>
      </main>
    </div>
  );
}

export default App;
