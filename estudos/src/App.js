import React, { useState } from 'react';
import { useRef } from 'react';
import './styles.css';
import Inputcpf from './inputcpf';


const initialValue = {
  nome: '',
  cpf: '',
  dataN: ''
}

function App() {
  const [cpf, setCpf] = useState('');
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  const [values, setValues] = useState(initialValue)

  function onChage2(ev) {
    const { name, value } = ev.target;
    console.log({ name, value })

    setValues({ ...values, [name]: value })
  }
  function onSubmit(ev) {
    ev.preventDefault();

  }

  function handleChange(event) {
    setCpf(event.target.value)
    onChage2(event)

  }
  return (

    <div className="container">
      <div className='heading'>
        <h1 className="title">Estudos</h1>
      </div>

      <form onSubmit={onSubmit}>
        <div className="dadosInput">
          <label for="nomeC">Nome completo</label>
          <input type="text"
            placeholder="Digite seu nome completo..."
            id='nomeC' name='nome' onChange={onChage2} />
        </div>
        <div className="dadosInput">


          <label for="cpfC">CPF</label>
          <Inputcpf value={cpf} name='cpf' onChange={handleChange} />
        </div>


        <div className="dadosInput">
          <label for="datanasciment0C">Data de nascimento</label>
          <input type="date"
            placeholder="Digite sua data de nascimento..."
            id='datanasciment0C' name='dataN' onChange={onChage2} />
        </div>


        <div className='menu-container'>
          <button onClick={onClick} className="menu-button">
            <span>Ativo/Inativo</span>
          </button>


          <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
            <label for="Ativo"> Ativo </label>
            <input type={'radio'} id="Ativo" name='inputAtivoInativo'></input><br />
            <label for="Inativo"> Inativo </label>
            <input type={'radio'} id="Inativo" name='inputAtivoInativo'></input>
          </nav>
        </div>

        <button className='buttonInserir'>Inserir</button>
        <button className='buttonInserir'>Cancelar</button>



      </form>
      <div className='divPesquisa'>
        <label for='pesquisa'>Pesquisar: </label>
        <input type={'text'} id='pesquisa' placeholder='Pesquise sua identidade...'></input>

        <button className='buttonPesquisaDeletarEnviar'>Deletar</button>
        <button className='buttonPesquisaDeletarEnviar'>Editar</button>

      </div>
    </div>

  );
}

export default App;
