import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/Products/Products/ProductDetails";
import Products from "../pages/Products/Products/Products";
import SignUp from "../pages/SignUp/SignUp";



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
                path: 'products',
                element: <Products></Products>
            },
            {
                path: 'products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:1000/products/${params.id}`)
                
            }
        ]
    }
]);