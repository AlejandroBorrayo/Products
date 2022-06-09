import React, { useContext, useState } from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';
import ContextProduct from "../Context/Products.context"

export const FormEditProduct = (props) => {
  const datos = useContext(ContextProduct.CtxProducts)
  const [product, setProduct] = useState(props.product.product)
  const [category, setCategory] = useState(props.product.category)
  const [price, setPrice] = useState(props.product.price)

  const Update =(e)=>{
      e.preventDefault()
      const update = {
          id:props.product._id,
          product,
          category,
          price,
      } 
      datos.UpdateProduct(update)
      
  }


  return (
    <div className='FormProducts'>
        <h1>Editar Producto</h1>
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
            placeholder={props.product.product}
            type="text"
            onChange={(e)=>{setProduct(e.target.value)}}
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
            name="category"
            placeholder={props.product.category}
            type="text"
            onChange={(e)=>{setCategory(e.target.value)}}

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
            placeholder={props.product.price}
            type="number"
            onChange={(e)=>{setPrice(e.target.value)}}

          />
        </FormGroup>
      </Col>
  
    </Row>
    <div style={{"display":"flex","justifyContent":"space-around"}}>
      <Button onClick={(e)=>{Update(e)}}  variant="contained" size="medium" >
        Actualizar 
      </Button>

    </div>

  </Form>
    </div>
  )
}
