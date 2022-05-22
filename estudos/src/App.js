import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Estudos</h1>

      <div className="dadosInput">
      <input type="text"
      placeholder="Digite seu nome completo..."
      />
      <button className="buttonInserir">
        <FiSearch size={25} color="#000" />
      </button>
      </div>
    </div>
  );
}

export default App;
