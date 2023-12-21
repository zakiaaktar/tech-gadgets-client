import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/Cart/Cart";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/Products/Products/ProductDetails";
import Products from "../pages/Products/Products/Products";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
                loader: () => fetch('https://tech-gadgets-server.vercel.app/productsCount')
            },
            {
                path: 'products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://tech-gadgets-server.vercel.app/products/${params.id}`)
                
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
             // normal user routes
            {
              path: 'userHome',
              element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
              },
              {
                path: 'payment',
                element: <Payment></Payment>
              },
              {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
              },

             // admin only routes
             {
              path: 'adminHome',
              element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
             },
             {
                path: 'addProducts',
                element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
              },
              {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
              },
              {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`https://tech-gadgets-server.vercel.app/products/${params.id}`)
              },
              {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
              }
        ]

    }
]);