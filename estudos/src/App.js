import React, { useState } from 'react';
import { useRef } from 'react';
import './styles.css';
import Inputcpf from './inputcpf';
import { useOutsideClick } from './useOutsideClick';



function App() {
  const [cpf, setCpf] = useState('');
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
  console.log(isActive)
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
        <Inputcpf value={cpf} onChange={(event) => setCpf(event.target.value)} />
      </div>
      <div className="dadosInput">
        <label for="datanasciment0C">Data de nascimento</label>
        <input type="date"
          placeholder="Digite sua data de nascimento..."
          id='datanasciment0C' />
      </div>
      <div className='menu-container'>
        <button onClick={onClick} className="menu-button">
          <span>Ativo/Inativo</span>
        </button>


        <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
          <label for="Ativo"> Ativo </label>
          <input type={'checkbox'} id="Ativo"></input><br />
          <label for="Inativo"> Inativo </label>
          <input type={'checkbox'} id="Inativo"></input>
        </nav>
      </div>
      <button className="buttonInserir">
        <button>Inserir</button>
      </button>
    </div>
  );
}

export default App;
