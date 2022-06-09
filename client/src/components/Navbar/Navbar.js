import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import logo from "../../images/gestion.png"

const Navbar = (props) => {
  return (
    <nav>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          
          <>
          <Link to="/"><img src={logo} alt="logo"/></Link>
          <div className="buttonsLoginSign">
              <Link to={PATHS.SIGNUPPAGE} className="authLink">Signup</Link>
              <Link to={PATHS.LOGINPAGE} className="authLink">Log In</Link>
          </div>

          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
