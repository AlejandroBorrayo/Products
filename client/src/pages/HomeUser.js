import React from 'react'
import "./homeUser.css"
import {useEffect,useState} from "react"
import {Products} from "./components/Products"
import ModalNewProduct from "../components/Modal/modalNewProduct"

export const HomeUser = ({user}) => {
  

  return (
    <div className='HomeUser'>
        <h1>Lista de compras</h1>
        <ModalNewProduct />
        <Products user={user}/>
    </div>
  )
}
