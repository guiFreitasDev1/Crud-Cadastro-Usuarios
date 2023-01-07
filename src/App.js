import React, { useState } from 'react';
//import { useRef } from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import BasicModal from './Usuarios/Create';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  // Modal Mui 
  const [openModal, setOpenModal] = useState(false)

  // Function modal Mui
  const handleModal = () => {
    setOpenModal(!openModal)
  }

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
                <Button onClick={handleModal} style={{ color: 'white' }}>Cadastrar Usuarios</Button>
                <BasicModal open={openModal} setOpen={setOpenModal} />
              </Typography>
              <Button color="inherit">Excluir</Button>
            </Toolbar>
          </AppBar>
        </Box></div>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        > </DataGrid>
      </div>
      <div>

      </div>
    </div>

  );

}

export default App;
