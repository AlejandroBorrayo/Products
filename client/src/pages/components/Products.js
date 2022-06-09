import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext, useEffect, useState } from "react";
import ContextProducts from "../../components/Context/Products.context"
import axios from "axios"
import ModalEditProduct from "../../components/Modal/modalEditProduct"

export const Products = ({user}) => {
    const [products, setProducts] = useState([])
    const datos = useContext(ContextProducts.CtxProducts)
    
    
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${user._id}`)
    .then(data=>{
      setProducts(data.data)
      datos.setUser(user)})
    .catch(err=>console.log(err))
  },[])

 

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#282c34",
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


  return (
<TableContainer style={{"width":"96%","margin":"50px 2%","boxShadow":" rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell width="300px" align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                {product.product}
              </StyledTableCell>
              <StyledTableCell align="center">{product.category}</StyledTableCell>
              <StyledTableCell align="center">${product.price}</StyledTableCell>
              <StyledTableCell align="center"><ModalEditProduct product={product}/> <Button  onClick={()=>{datos.DeleteProduct(product._id)}} color="error" style={{"marginLeft":"10px"}} variant="contained">Eliminar</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
