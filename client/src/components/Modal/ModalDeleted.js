import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {FormEditProduct} from "../Formularios/FormEditProduct"
import Button from '@mui/material/Button';
import {Message} from "../Messages/Message"
import ContextProduct from "../Context/Products.context"


  export default function ModalDeleted(props) {
      
    const datos = React.useContext(ContextProduct.CtxProducts)
    const handleOpen = () => datos.setOpen(true);
    const handleClose = () => datos.setOpen(false);
    console.log(datos.ShowMessage)
    const [style, setStyle] = React.useState({
      position: 'absolute',
      top: '50%',
      left: '50%',
      height:"130px",
      transform: 'translate(-50%, -50%)',
      width: "30%",
      bgcolor: 'transparent',
      border: '0',
      borderRadius:"20px",
      boxShadow: 24,
      p: 4,
    })
    setTimeout(()=>{
        datos.setOpen(false)
        datos.setDeleted("")
    },1500)

    return (
      <React.Fragment>
        <Modal
          open={datos.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='modalLogin'>
                <div >
                    <p className='caja'>{datos.deleted}</p>
                </div>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }