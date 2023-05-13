import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Loging/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Bookings from "../Pages/Bookings/Bookings";
import Book from "../Pages/Book/Book";
import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/book/:id",
        element: <ProtectedRoute><Book></Book></ProtectedRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-a2n426.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <ProtectedRoute><Bookings></Bookings></ProtectedRoute>
      }
    ]
  },
]);

export default router;