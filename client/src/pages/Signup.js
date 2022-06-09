import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import {FormSign} from "../components/Formularios/FormSign"
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    address:"",
    country:"",
    city:"",
    number:"",
    email:"",

  });
  const { username, password, address, city,country, number, email } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      address,
      city,
      number,
      email,
      country
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: res.errorMessage,
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
    });
  }

  return (
    <div className="formSignLogin">
      <h1>Registrarse</h1>
      <FormSign setForm={setForm} error={error} handleInputChange={handleInputChange} handleFormSubmission={handleFormSubmission}  />      
    </div>
  );
}
