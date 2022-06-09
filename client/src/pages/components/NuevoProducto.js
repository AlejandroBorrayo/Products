import React from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';

export const NuevoProducto = () => {
  return (
    <Form>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="Product">
            Producto
          </Label>
          <Input
            id="Product"
            name="producto"
            placeholder="Producto"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="Category">
            Categoría
          </Label>
          <Input
            id="Category"
            name="category"
            placeholder="Categoria"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="price">
            Precio
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="Precio"
            type="number"
          />
        </FormGroup>
      </Col>
    </Row>

    <Button variant="contained" size="large" >
      Agregar
    </Button>
  </Form>
  )
}
