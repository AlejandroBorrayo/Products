import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {FormEditProduct} from "../Formularios/FormEditProduct"
import Button from '@mui/material/Button';
import {Message} from "../Messages/Message"
import ContextProduct from "../Context/Products.context"
import {FormEditProfile} from "../Formularios/FormEditProfile"


  export default function ModalEditProfile({user}) {
      
    const [open, setOpen] = React.useState(false);
    const datos = React.useContext(ContextProduct.CtxProducts)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [style, setStyle] = React.useState({
      position: 'absolute',
      top: '50%',
      left: '50%',
      height:"740px",
      transform: 'translate(-50%, -50%)',
      width: "30%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      borderRadius:"20px",
      boxShadow: 24,
      p: 4,
    })
    return (
      <React.Fragment>
        <Button style={{"width":"10%","margin": " 0 45%"}} onClick = {handleOpen} variant="contained">Editar</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            {!datos.ShowMessage ? <FormEditProfile user={user}/> : <Message handleClose={handleClose} style={style} /> }

              
          </Box>
        </Modal>
      </React.Fragment>
    );
  }