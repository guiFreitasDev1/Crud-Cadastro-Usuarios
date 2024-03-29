import React, { useState } from "react";
//import { useRef } from 'react';
import "./styles.css";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";


//import { set } from "date-fns";
//import api from "../backend/services/api";

// style LISTA
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function App() {
  // limpar os inputs, até o momento nao está limpando o do CPF
  const { register, getValues, reset } = useForm();

  //STATE USERS
  const [users, setUsers] = useState([]);
  console.log("USERS", users);

  //STATE USERS UPDATE
  const [usersUp, setUsersUp] = useState([]);
  console.log("USERSPUP", usersUp);
  
  // VALORES DOS INPUTS
  const [value, setValue] = useState();

  // Modal Mui
  const [openMod, setOpen] = useState(false);
  const [openModUp, setOpenUp] = useState(false);


  //fechar modal e reset modal up / cadastro
  const handleOpen = () => setOpen(true);  
  
  const handleClose = () => {
    setOpen(false);
    
    reset((formValues) => ({
      ...formValues,
      idade: null,
      primeiroNome: null,
      ultimoNome: null,
    }));
  };
  
  const handleCloseUp = () => {
    setOpenUp(false);

    reset((formValues) => ({
      ...formValues,
      idade: null,
      primeiroNome: null,
      ultimoNome: null,
    }));
  };
  // Function pegando valor do input
  const handleChangeValue = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  // RECARREGAR DATAGRID

  
  // ADICIONAR USUARIOS
  const addUser = async () => {
    window. location. reload(false);
    console.log('teste' , value)
    await axios.post("http://localhost:8800", {
      primeiroNome: value.name,
      ultimoNome:value.ultimoNome,
      idade:value.idade,

    })


    .then(() => {
      console.log('deu bom')
 
    }).catch(() => { 
      console.log('deu ruim')
    })

  };

// GET USERS
  const getUsers = async () => {
    
    try {
      const res = await axios.get("http://localhost:8800");
      console.log(res)
      setUsers(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  // DELETE USERS
  const deleteUser = (id) => {
    try {
      window. location. reload(false);
      console.log("USUARIO DELETADO id:", id);
       axios.delete(`http://localhost:8800/${id}`);

    } catch (error) {
      toast.error(error);
    }
  };
 
  // update/Edit users
  const updateUser = async () => {
    try {
      window. location. reload(false);
      console.log("ALOOO", getValues());
      const res = await axios.put("http://localhost:8800/users", {
        data: getValues(),
      });

      setUsersUp(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const openUser = async (abacaxi) => {
    setOpenUp(true);

    reset((formValues) => ({
      ...formValues,
      id: abacaxi.id,
      idade: abacaxi.idade,
      primeiroNome: abacaxi.primeiroNome,
      ultimoNome: abacaxi.ultimoNome,
    }));
  };

  //Rows e Columns datagrid
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "primeiroNome",
      headerName: "Primeiro nome",
      width: 130,
      sortable: false,
    },
    {
      field: "ultimoNome",
      headerName: "Ultimo Nome",
      width: 130,
      sortable: false,
    },
    {
      field: "idade",
      headerName: "Idade",
      width: 90,
    },

    {
      field: "nomeCompleto",
      headerName: "Nome Completo",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.primeiroNome || ""} ${params.row.ultimoNome || ""}`,
    },
    {
      field: "Edit",
      renderCell: (params) => (
        <Button
          onClick={() => {
            openUser(params.row);
          }}
        >
          Edit
        </Button>
      ),
    },  {
      field: "Delete",
      renderCell: (id) => (
        <Button
          onClick={() => {
            deleteUser(id.id)
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  // ANOTAÇÃO, CRIAR FUNÇÃO OPEN USER, ABRIR UM MODAL IGUAL DE CADASTRAR, PREENCHENDO OS VALORES Q ELA RECEBEU DE PARAMETRO


  return (
    <div className="container">
      
      {/**HEADER */}
      <div className="header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="absolute">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button onClick={handleOpen} style={{ color: "white" }}>
                  Cadastrar Usuarios
                </Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/** LISTA DE USUARIOS*/}
      <div style={{ height: 650, width: "100%" }} className="dataGrid">
        <DataGrid
          rows={
            typeof users !== "undefined" &&
            users.map((value) => ({
              id: value.id,
              primeiroNome: value.primeiro_nome,
              ultimoNome: value.ultimo_nome,
              idade: value.idade,
              edit: value.id,
            }))
          }
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      {/** MODAL UPDATE */}
      <div className="modalUp">
        <Modal
          open={openModUp}
          onClose={handleCloseUp}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update de usuários.
            </Typography>
            <Typography
              component={"span"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <form className="centro">
                <div className="dadosInput">
                  <TextField
                    id="nomeCUp"
                    label="Primeiro Nome"
                    variant="standard"
                    {...register("primeiroNome")}
                    name="primeiroNome"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="dadosInput">
                  <TextField
                    id="UltimoNomeUp"
                    label="Ultimo Nome"
                    variant="standard"
                    name="UltimoNomeUp"
                    {...register("ultimoNome")}
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="dadosInput">
                  <TextField
                    id="IdadeUp"
                    label="Idade"
                    variant="standard"
                    name="IdadeUp"
                    {...register("idade")}
                    onChange={handleChangeValue}
                    type={"number"}
                  />
                </div>

                <Stack spacing={3} direction="row">
                  <Button
                    variant="contained"
                    className="buttonEnviar"
                    onClick={updateUser}
                  >
                    Enviar
                  </Button>
                </Stack>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>


    {/** MODAL CADASTRO DE USUARIOS */}
      <div className="modalCadastro">
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
            <Typography
              component={"span"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <form className="centro">
                <div className="dadosInput">
                  <TextField
                    id="nomeC"
                    label="Primeiro Nome"
                    variant="standard"
                    {...register("primeiroNome")}
                    name="name"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="dadosInput">
                  <TextField
                    id="UltimoNome"
                    label="Ultimo Nome"
                    variant="standard"
                    name="ultimoNome"
                    {...register("ultimoNome")}
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="dadosInput">
                  <TextField
                    id="Idade"
                    label="Idade"
                    variant="standard"
                    name="Idade"
                    {...register("idade")}
                    onChange={handleChangeValue}
                    type={"number"}
                  />
                </div>

                <div className="menu-container">
                  <Stack spacing={3} direction="row">
                    <Button
                      variant="contained"
                      className="buttonEnviar"
                      onClick={addUser}
                    >
                      Enviar
                    </Button>
                  </Stack>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
