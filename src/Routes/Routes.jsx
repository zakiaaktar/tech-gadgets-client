import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/Cart/Cart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/Products/Products/ProductDetails";
import Products from "../pages/Products/Products/Products";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
              },
            {
                path: 'products',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:1000/productsCount')
            },
            {
                path: 'products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:1000/products/${params.id}`)
                
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
              },

             // admin only routes
              {
                path: 'users',
                element: <AllUsers></AllUsers>
              }
        ]

    }
]);