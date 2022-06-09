import React, { useContext } from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';
import ContextProduct from "../Context/Products.context"
export const FormNewProduct = () => {
  const datos = useContext(ContextProduct.CtxProducts)

  const Product = (product)=>{
    datos.setProduct(product)
  }
  const Category = (category)=>{
    datos.setCategory(category)
  }
  const Price = (price)=>{
    datos.setPrice(price)
  }
  
  return (
    <div className='FormProducts'>
        <h1>Nuevo Producto</h1>
        <Form>
    <Row style={{"display":"flex","justifyContent":"center","flexDirection":"column","width":"70%","margin":"0 15%"}}>
      <Col   md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}} for="product">
            Producto
          </Label>
          <Input 
            id="product"
            name="product"
            placeholder="Product"
            type="text"
            onChange={(e)=>{Product(e.target.value)}}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="categoria">
            Categoria
          </Label>
          <Input
            id="categoria"
            name="password"
            placeholder="Category"
            type="text"
            onChange={(e)=>{Category(e.target.value)}}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="price">
            Price
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="Price"
            type="number"
            onChange={(e)=>{Price(e.target.value)}}
          />
        </FormGroup>
      </Col>
  
    </Row>
    <Button onClick={(e)=>{datos.CreateNewProduct(e)}} style={{"width":"50%","margin":" 0 25%"}} variant="contained" size="large" >
      Nuevo producto
    </Button>
  </Form>
    </div>
  )
}
