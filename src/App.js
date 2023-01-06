import React, { useState } from 'react';
//import { useRef } from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import BasicModal from './Usuarios/Create';

function App() {
  // Modal Mui 
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)
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
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      
      <Button onClick={handleModal}>Cadastrar Usuarios</Button>
      <BasicModal open={openModal} setOpen={setOpenModal} />


    </div>

  );

}

export default App;
