import { FiSearch } from 'react-icons/fi';
import './styles.css';
import Inputcpf from './inputcpf';
function App() {
  return (
    <div className="container">
      <div className='heading'>
        <h1 className="title">Estudos</h1>
      </div>

      <div className="dadosInput">
        <label for="nomeC">Nome completo</label>
        <input type="text"
          placeholder="Digite seu nome completo..."
          id='nomeC' />
      </div>
      <div className="dadosInput">
        <label for="cpfC">CPF</label>
        <Inputcpf />
      </div>
      <div className="dadosInput">
        <label for="datanasciment0C">Data de nascimento</label>
        <input type="date"
          placeholder="Digite sua data de nascimento..."
          id='datanasciment0C' />
      </div>
      <button className="buttonInserir">
        <FiSearch size={25} color="#000" />
      </button>
    </div>
  );
}

export default App;
