import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Mainlatout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../AuthComponents/Login/Login";
import SignUp from "../AuthComponents/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import AddCarts from "../Pages/Dashborad/AddCarts/AddCarts";
import PrivetRoute from "./PrivetRoute";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "ourshop",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: "addCarts",
        element: <AddCarts></AddCarts>,
      },
    ],
  },
]);

export default Routes;
