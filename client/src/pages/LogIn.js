import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {FormLogin} from "../components/Formularios/FormLogin"
import "./auth.css"

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
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
    };
    login(credentials).then((res) => {
      console.log(res)
      if (!res.status) {
        return setError({ message: res.errorMessage });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
    });
  }

  return (
    <div className="formSignLogin">
      <h1>Iniciar Sesión</h1>
      <FormLogin handleInputChange={handleInputChange} handleFormSubmission={handleFormSubmission} error={error}  />
    </div>
  );
}
