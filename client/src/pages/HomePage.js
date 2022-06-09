import logo from "../logo.svg";
import "../App.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./homepage.css"


function HomePage() {

  return (
    <div className="homePage">
      <h1>Gestión de compras</h1>
      <p>Organiza todo el proceso de compras y adquisición de stock y mercaderías de manera ordenada y simple</p>
      <Link to="/auth/signup"><Button style={{"backgroundColor":"#282c34"}} variant="contained" size="large">Empezar</Button></Link>
    </div>
  );
}

export default HomePage;
