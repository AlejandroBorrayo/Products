import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import newProduct from "../../images/plus_sm_icon_152557.png"
import {FormNewProduct} from "../Formularios/FormNewProduct"
import ContextProduct from "../Context/Products.context"
import {Message} from "../Messages/Message"



  export default function ModalNewProduct(props) {
    const datos = React.useContext(ContextProduct.CtxProducts)
    console.log(datos)
    const [style, setStyle] = React.useState({
      position: 'absolute',
      top: '50%',
      left: '50%',
      height:"620px",
      transform: 'translate(-50%, -50%)',
      width: "30%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      borderRadius:"20px",
      boxShadow: 24,
      p: 4,
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  


    return (
      <React.Fragment>
        <img src={newProduct} onClick = {handleOpen} alt="newProduct"/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='modalLogin'>
            {!datos.ShowMessage ? <FormNewProduct/> : <Message handleClose={handleClose} style={style} /> }
          </Box>
        </Modal>
      </React.Fragment>
    );
  }