import React, { useState, useCallback, useEffect } from 'react';
import { useRef } from 'react';
import './styles.css';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';


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
  }, [resetForm])

  // 22/10/2022 O input cpf está sendo limpo, porém com 2 cliques, GUILHERME DO FUTURO TENTE RESOLVER ISSO 
  // E CORRIGIR O ERRO "TypeError: onValid is not a function" AO CLICAR EM CANCELAR  => https://react-hook-form.com/api/useform/reset
  return (

    <div className='container'>
      <div className='heading'>
        <h1 className="title">Estudos</h1>
      </div>

      <form onSubmit={handleSubmit()} className='formularioPrinc'>
        <div>
          <div className="dadosInput">
            <label for="nomeC">Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo..."
              id='nomeC'
              name='nome'
              {...register('nome')} />
          </div>
          <div className="dadosInput">
            <label for="cpfC">CPF</label>
            <InputMask type='text'
              mask="999.999.999-99"
              id='cpfC'
              name='cpf'
              {...register('cpf')} />
          </div>


          <div className="dadosInput">
            <label for="datanasciment0C">Data de nascimento</label>
            <input
              type="date"
              placeholder="Digite sua data de nascimento..."
              id='datanasciment0C'
              name='dataN'
              {...register('dataN')} />
          </div>
          <div className='menu-container'>
            <button onClick={onClick} className="menu-button">
              <span>Ativo/Inativo</span>
            </button>
            <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
              <label for="Ativo"> Ativo </label>
              <input type={'radio'} id="Ativo" name='inputAtivo' {...register("inputAtivo")}></input><br />
              <label for="Inativo"> Inativo </label>
              <input type={'radio'} id="Inativo" name='inputInativo' {...register("inputInativo")}></input>
            </nav>

            <button className='buttonInserir'>Inserir</button>
            <button className='buttonCancelar' onClick={() => {
              reset(formValues => ({
                ...formValues, cpf:'',  nome:'' , dataN:'', inputInativo:'', inputAtivo:'' 
              }))
            }}>Cancelar</button>
          </div>

        </div>

      </form>
      <div className='divPesquisa'>
        <label for='pesquisa'>Pesquisar: </label>
        <input type={'text'} id='pesquisa' placeholder='Pesquise sua identidade...'></input>
        <br></br>

        <button className='buttonPesquisaDeletarEnviar'>Deletar</button>
        <button className='buttonPesquisaDeletarEnviar'>Editar</button>

      </div>
    </div>

  );
}

export default App;
