import React, { useState, useCallback, useEffect } from 'react';
import { useRef } from 'react';
import './styles.css';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
// import axios from 'axios';

function App() {
  // 21/10/2022 Estou tentando limpar os inputs, GUILHERME DO FUTURO VER A DOCUMENTAÇÃO E TENTAR RESOLVER ISSO  => https://react-hook-form.com/api/useform/reset
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);


  // limpar os inputs, até o momento nao está limpando o do CPF
  const { register, handleSubmit, reset, resetForm } = useForm();

  
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch('./api/formValues.json');
    reset(result);
  }, [reset]);


  useEffect(() => {
    resetAsyncForm()
  }, [resetForm, resetAsyncForm])

  // 22/10/2022 O input cpf está sendo limpo, porém com 2 cliques, GUILHERME DO FUTURO TENTE RESOLVER ISSO 

  // E CORRIGIR O ERRO "TypeError: onValid is not a function" AO CLICAR EM CANCELAR  => https://react-hook-form.com/api/useform/reset

  // pegando valor do input 
  const [value, setValue] = useState();
  const handleChangeValue = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };
  

  // click button inserir

  const handleClickButton = () => {
    console.log(value)
};

  // 04/12/2022 requisicao get com axios

  //  useEffect(()=>{
  //     axios.get("https")
  //  }, [])

  return (

    <div className='container'>
      <div className='heading'>
        <h1 className="title">Estudos</h1>
      </div>

      <form onSubmit={handleSubmit()} className='formularioPrinc'>
        <div>
          <div className="dadosInput">
            <label htmlFor='nomeC'>Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo..."
              id='nomeC'
              name='name'
              {...register('nome')}
              onChange={handleChangeValue} />
          </div>
          <div className="dadosInput">
            <label htmlFor='cpfC'>CPF</label>
            <InputMask type='text'
              mask="999.999.999-99"
              id='cpfC'
              name='cpf'
              {...register('cpf')}
              onChange={handleChangeValue} />
          </div>


          <div className="dadosInput">
            <label htmlFor='datanasciment0C'>Data de nascimento</label>
            <input
              type="date"
              placeholder="Digite sua data de nascimento..."
              id='datanasciment0C'
              name='dataN'
              {...register('dataN')}
              onChange={handleChangeValue} />
          </div>
          <div className='menu-container'>
            <button onClick={onClick} className="menu-button">
              <span>Ativo/Inativo</span>
            </button>
            <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
              <label htmlFor='Ativo' onChange={handleChangeValue}> Ativo </label>
              <input type={'radio'} id="Ativo" name='inputAtivo' {...register("inputAtivo")}></input><br />
              <label htmlFor='Inativo' onChange={handleChangeValue}> Inativo </label>
              <input type={'radio'} id="Inativo" name='inputInativo' {...register("inputInativo")}></input>
            </nav>

            <button 
            className='buttonInserir' 
            onClick={() => handleClickButton()}
        
            >Inserir</button>


            <button 
            className='buttonCancelar' 
            onClick={() => {
              reset(formValues => ({
                ...formValues, cpf: '', nome: '', dataN: '', inputInativo: '', inputAtivo: ''
              }))
            }}>Cancelar</button>
          </div>

        </div>

      </form>
      <div className='divPesquisa'>
        <label htmlFor='pesquisa'>Pesquisar: </label>
        <input type={'text'} id='pesquisa' placeholder='Pesquise sua identidade...'></input>
        <br></br>

        <button className='buttonPesquisaDeletarEnviar'>Deletar</button>
        <button className='buttonPesquisaDeletarEnviar'>Editar</button>

      </div>
    </div>

  );
}

export default App;
