// // import * as React from 'react';
// // import { useState, useCallback, useEffect } from 'react';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Modal from '@mui/material/Modal';
// // import TextField from '@mui/material/TextField';
// // import Stack from "@mui/material/Stack";
// // import { useForm } from "react-hook-form";
// // import Button from '@mui/material/Button';


// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'background.paper',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   p: 4,
// // };

// export default function BasicModal({ openMod , setOpen }) {

//   console.log(openMod)
//   // limpar os inputs, até o momento nao está limpando o do CPF
//   const  {register, /*handleSubmit,*/ reset, resetForm}  = useForm();
  
//   // pegando valor do input 
//   const [value, setValue] = useState();

//   //const handleOpen = () => openMod(true);
//   const handleClose = () => setOpen(false);
  
//   // Function pegando valor do input 
//   const handleChangeValue = (value) => {
//     setValue((prevValue) => ({
//       ...prevValue,
//       [value.target.name]: value.target.value,
//     }))
//   };

//   // Function resetar formulario
//   const resetAsyncForm = useCallback(async () => {
//     const result = await fetch('./api/formValues.json');
//     reset(result);
//   }, [reset]);


//   useEffect(() => {
//     resetAsyncForm()
//   }, [resetForm, resetAsyncForm])

//   // click button inserir
//   const handleClickButton = () => {
//     console.log(value)
//   };

//   // GUILHERME DO FUTURO TENTAR ARRUMAR O MODAL QUE SEM O ! NAO APARECE PARA TERMINAR O CRUD
//   return (
//     <div>
      
//         <Modal
//           open={openMod}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >

//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Cadastro
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>

//               <div className='centro'>
//                 {/* teste para ver se o erro persiste <form onSubmit={handleSubmit()} className='formularioPrinc'>*/}
//                   <div>

//                     <div className="dadosInput">
//                       <TextField
//                         id="nomeC"
//                         label="Primeiro Nome"
//                         variant="standard"
//                         {...register('nome')}
//                         name='name'
//                         onChange={handleChangeValue} />
                        
//                     </div>
                

//                     <div className="dadosInput">
//                       <TextField id="UltimoNome"
//                         label="Ultimo Nome"
//                         variant="standard"
//                         name='UltimoNome'
//                         {...register('UltimoNome')}
//                         onChange={handleChangeValue} />

//                     </div>


//                     <div className="dadosInput">
//                       <TextField id="Idade"
//                         label="Idade"
//                         variant="standard"
//                         name='Idade'
//                         {...register('Idade')}
//                         onChange={handleChangeValue} />

//                     </div>

                  
//                     <div className='menu-container'>

//                       <Stack spacing={3} direction="row">


//                         <Button
//                           variant="contained"
//                           className='buttonEnviar'
//                           onClick={() => handleClickButton()}
//                         >Enviar</Button>

//                         <Button variant="contained"
//                           className='button'
//                           onClick={() => {
//                             reset(formValues => ({
//                               ...formValues, Idade: '', nome: '', UltimoNome: '', NomeCompleto: ''
//                             }))
//                           }}
//                           >Limpar</Button>

//                       </Stack>

//                     </div>

//                   </div>

//                 {/* teste para ver se o erro persiste </form>*/}

//               </div>
//             </Typography>
//           </Box>
//         </Modal>
      
//     </div>
//   );
// }