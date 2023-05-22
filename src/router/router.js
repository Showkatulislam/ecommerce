import Cartlayout from "../layout/cartlayout/Cartlayout";
import Dashboard from "../layout/dashboard/Dashboard";
import AddProduct from "../page/deshbroad/AddProduct";
import Cart from "../page/Cart";
import ErrorElement from "../page/ErrorElement";
import Login from "../page/Login";
import Order from "../page/Order";
import Registration from "../page/Registration";
import DashbroadHome from "../page/deshbroad/DashbroadHome";
import AdminOrder from "../page/AdminOrder";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../page/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <Cartlayout></Cartlayout>,
    errorElement: <errorElement></errorElement>,
    children: [
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "/deshbroad", 
      element: <DashbroadHome></DashbroadHome>
     },{
      path:'/add-product',
      element:<AddProduct></AddProduct>
     },
     {
      path:'/admin-order',
      element:<AdminOrder></AdminOrder>
     }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);
