import React from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';

export const FormSign = (props) => {
  const {error,handleInputChange,handleFormSubmission,} = props
  return (
    <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="User">
          Usuario
        </Label>
        <Input
          id="User"
          name="username"
          placeholder="Usuario"
          type="text"
          onChange={handleInputChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Password">
          Contraseña
        </Label>
        <Input
          id="Password"
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={handleInputChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="email">
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          onChange={handleInputChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Telefono">
          Telefono
        </Label>
        <Input
          id="Telefono"
          name="number"
          placeholder="Telefono"
          type="number"
          onChange={handleInputChange}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="adress"
      onChange={handleInputChange}
      />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="Country">
          Country
        </Label>
        <Input
          id="Country"
          name="country"
          placeholder="country"
          onChange={handleInputChange}

        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="city">
          City
        </Label>
        <Input
          id="city"
          name="city"
          placeholder="city"
          onChange={handleInputChange}
        />
      </FormGroup>
    </Col>

  </Row>
  {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
  <Button variant="contained" size="large" onClick={(event)=>handleFormSubmission(event)}>
    Sign in
  </Button>
</Form>
  )
}
