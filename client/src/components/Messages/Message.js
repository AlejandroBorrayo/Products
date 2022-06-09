import React from 'react'
import "./NewProduct.css"
import { useContext, useEffect, useState } from "react";
import ContextProduct from "../Context/Products.context"


export const Message = (props) => {
  const datos = React.useContext(ContextProduct.CtxProducts)
  props.style.bgcolor = "transparent"
  props.style.height = "130px"
  props.style.border= '0'
    setTimeout(()=>{
    datos.setShowMessage(false)
    datos.setMessage("")
    props.handleClose()
    props.style.bgcolor = "background.paper"
    props.style.height = "620px"
    props.style.border = "2px solid #000"
  },2000)

  return (
    <div >
        <p className='caja'>{datos.message}</p>
    </div>
  )
}
