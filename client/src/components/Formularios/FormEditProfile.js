import React, { useContext, useState } from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';
import ContextProduct from "../Context/Products.context"

export const FormEditProfile = ({user}) => {
  const datos = useContext(ContextProduct.CtxProducts)
  const [address, setAddress] = useState(user.address)
  const [city, setCity] = useState(user.city)
  const [country, setCountry] = useState(user.country)
  const [number, setNumber] = useState(user.number)
  const [email, setEmail] = useState(user.email)


  const Update =(e)=>{
      e.preventDefault()
      const uptadeProfile = {
          address,
          city,
          country,
          number,
          email,
          id:user._id
      }
      datos.UpdateProfile(uptadeProfile)


  }


  return (
    <div className='FormProducts'>
        <h1 >Editar Perfil</h1>
        <Form>
    <Row style={{"display":"flex","justifyContent":"center","flexDirection":"column","width":"70%","margin":"0 15%"}}>
      <Col   md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}} for="direccion">
                Direccion
          </Label>
          <Input 
            style={{"marginBottom":"10px"}}
            id="address"
            name="address"
            placeholder={address}
            type="text"
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="city">
            Ciudad
          </Label>
          <Input
            style={{"marginBottom":"10px"}}
            id="city"
            name="city"
            placeholder={city}
            type="text"
            onChange={(e)=>{setCity(e.target.value)}}

          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="price">
            Pais
          </Label>
          <Input
            style={{"marginBottom":"10px"}}
            id="price"
            name="country"
            placeholder={country}
            type="text"
            onChange={(e)=>{setCountry(e.target.value)}}

          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="price">
            Telefono
          </Label>
          <Input
            style={{"marginBottom":"10px"}}
            id="number"
            name="number"
            placeholder={number}
            type="number"
            onChange={(e)=>{setNumber(e.target.value)}}

          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label style={{"textAlign":"center","width":"100%","fontSize":"22px"}}  for="price">
            Email
          </Label>
          <Input
            style={{"marginBottom":"10px"}}
            id="email"
            name="email"
            placeholder={email}
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}

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
