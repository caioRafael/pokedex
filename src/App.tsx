import { PokeControl } from './components/PokeControl';
import { PokeList } from './components/PokeList';
import './styles/home.scss'

function App() {
  return (
    <div id="container">
      <header>
        <div className="type-screen">
          {/* <strong>Water</strong> */}
        </div>
        <h1>Hello i'm Pokedex</h1>
      </header>
      <main>
        <PokeList />
        <span />
        <aside>
          <PokeControl />
        </aside>
      </main>
    </div>
  );
}

export default App;
