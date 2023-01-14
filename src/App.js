import React, { useState } from 'react';
//import { useRef } from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useCallback, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";

// style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function App() {

  
  // limpar os inputs, até o momento nao está limpando o do CPF
  const  {register, reset, resetForm}  = useForm();
  
  // pegando valor do input 
  const [value, setValue] = useState();

  // Modal Mui 
  const [openMod, setOpen] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // Function pegando valor do input 
  const handleChangeValue = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  // Function resetar formulario
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch('./api/formValues.json');
    reset(result);
  }, [reset]);


  useEffect(() => {
    resetAsyncForm()
  }, [resetForm, resetAsyncForm])

  // click button inserir
  const handleClickButton = () => {
    console.log(value)
  };

  // GUILHERME DO FUTURO TENTAR ARRUMAR O MODAL QUE SEM O ! NAO APARECE PARA TERMINAR O CRUD

  //Rows e Columns datagrid 
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'primeiroNome', headerName: 'Primeiro nome', width: 130 },
    { field: 'ultimoNome', headerName: 'Ultimo Nome', width: 130 },
    {
      field: 'Idade',
      headerName: 'Idade',
      type: 'number',
      width: 90,
    },

    {
      field: 'nomeCompleto',
      headerName: 'Nome Completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.primeiroNome || ''} ${params.row.ultimoNome || ''}`,
    },
  ];

  const rows = [
    { id: 1, ultimoNome: 'Snow', primeiroNome: 'Jon', Idade: 35 },
    { id: 2, ultimoNome: 'Lannister', primeiroNome: 'Cersei', Idade: 42 },
    { id: 3, ultimoNome: 'Lannister', primeiroNome: 'Jaime', Idade: 45 },
    { id: 4, ultimoNome: 'Stark', primeiroNome: 'Arya', Idade: 16 },
    { id: 5, ultimoNome: 'Targaryen', primeiroNome: 'Daenerys', Idade: null },
    { id: 6, ultimoNome: 'Melisandre', primeiroNome: null, Idade: 150 },
    { id: 7, ultimoNome: 'Clifford', primeiroNome: 'Ferrara', Idade: 44 },
    { id: 8, ultimoNome: 'Frances', primeiroNome: 'Rossini', Idade: 36 },
    { id: 9, ultimoNome: 'Roxie', primeiroNome: 'Harvey', Idade: 65 },
    { id: 10, ultimoNome: 'Roxie', primeiroNome: 'Harvey', Idade: 65 },
  ];

  return (
    

    <div className='container'>
      <div className='header'>
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position='absolute'>
            <Toolbar >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button onClick={handleOpen} style={{ color: 'white' }}>Cadastrar Usuarios</Button>
              </Typography>
              <Button color="inherit">Excluir</Button>
            </Toolbar>
          </AppBar>
        </Box></div>
      <div style={{ height: 650, width: '100%' }} className='dataGrid'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        > </DataGrid>
      </div>
      <div className='modal'>
      <Modal
        open={openMod}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastro
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <div className='centro'>
              {/* teste para ver se o erro persiste <form onSubmit={handleSubmit()} className='formularioPrinc'>*/}
                <div>

                  <div className="dadosInput">
                    <TextField
                      id="nomeC"
                      label="Primeiro Nome"
                      variant="standard"
                      {...register('nome')}
                      name='name'
                      onChange={handleChangeValue} />
                      
                  </div>
              

                  <div className="dadosInput">
                    <TextField id="UltimoNome"
                      label="Ultimo Nome"
                      variant="standard"
                      name='UltimoNome'
                      {...register('UltimoNome')}
                      onChange={handleChangeValue} />

                  </div>


                  <div className="dadosInput">
                    <TextField id="Idade"
                      label="Idade"
                      variant="standard"
                      name='Idade'
                      {...register('Idade')}
                      onChange={handleChangeValue} />

                  </div>

                
                  <div className='menu-container'>

                    <Stack spacing={3} direction="row">


                      <Button
                        variant="contained"
                        className='buttonEnviar'
                        onClick={() => handleClickButton()}
                      >Enviar</Button>

                      <Button variant="contained"
                        className='button'
                        onClick={() => {
                          reset(formValues => ({
                            ...formValues, Idade: '', nome: '', UltimoNome: '', NomeCompleto: ''
                          }))
                        }}
                        >Limpar</Button>

                    </Stack>

                  </div>

                </div>

              {/* teste para ver se o erro persiste </form>*/}

            </div>
          </Typography>
        </Box>
      </Modal>
      </div>
    </div>

  );

}

export default App;
