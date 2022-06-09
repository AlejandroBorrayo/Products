import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import {HomeUser} from "../pages/HomeUser";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.SIGNUPPAGE,
      element:!user? <Signup {...props} /> : <Navigate to={PATHS.HOMEPAGE} replace />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: !user ? <Login {...props} /> : <Navigate to={PATHS.HOMEPAGE} replace /> ,
    },
    {
      path: PATHS.HOMEPAGE,
      element: !user ? <HomePage />: <HomeUser {...props}/>
    },

  ];
};

export default routes;
