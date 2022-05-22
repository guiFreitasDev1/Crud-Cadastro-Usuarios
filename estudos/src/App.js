import React, {useState} from 'react';
import './styles.css';
import Inputcpf from './inputcpf';



function App() {
  const [cpf, setCpf] = useState('');
  console.log(cpf)
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
        <Inputcpf value={cpf} onChange={(event) => setCpf(event.target.value)}/>
      </div>
      <div className="dadosInput">
        <label for="datanasciment0C">Data de nascimento</label>
        <input type="date"
          placeholder="Digite sua data de nascimento..."
          id='datanasciment0C' />
      </div>
      <button className="buttonInserir">
        <button>Inserir</button>
      </button>
    </div>
  );
}

export default App;
