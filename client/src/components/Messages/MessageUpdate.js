import React from 'react'
import "./NewProduct.css"
import { useContext, useEffect, useState } from "react";
import ContextProduct from "../Context/Products.context"


export const MessageUpdate = (props) => {
  const datos = React.useContext(ContextProduct.CtxProducts)
  props.style.bgcolor = "transparent"
  props.style.height = "130px"
  props.style.border= '0'


  return (
    <div >
        <p className='caja'>ee</p>
    </div>
  )
}
