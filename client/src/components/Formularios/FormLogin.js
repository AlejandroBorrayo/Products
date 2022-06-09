import React from 'react'
import {Form, Row, FormGroup,Col,Label,Input} from "reactstrap"
import Button from '@mui/material/Button';

export const FormLogin = (props) => {
    const {error,handleInputChange,handleFormSubmission } = props
  return (
    <Form>
    <Row style={{"display":"flex","justifyContent":"center","flexDirection":"column","width":"70%","margin":"0 15%"}}>
      <Col   md={12}>
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
      <Col md={12}>
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
  
    </Row>
    {error && (
            <div className="error-block">
              <p>{error.message}</p>
            </div>
          )}
    <Button variant="contained" size="large" onClick={(event)=>handleFormSubmission(event)}>
      Login
    </Button>
  </Form>
  )
}
