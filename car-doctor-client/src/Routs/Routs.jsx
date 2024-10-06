import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRouts from "./PrivetRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      
      {
        path: "/book/:id",
        element:<Checkout></Checkout> ,
        loader:({params})=> fetch(`https://cardoctor-new.vercel.app/services/${params.id}`)

      },
      {
        path: "/checkout/:id",
        element:<PrivetRouts><Checkout></Checkout></PrivetRouts> ,
        loader:({params})=> fetch(`https://cardoctor-new.vercel.app/services/${params.id}`)

      },
      {
        path: "/serviceDetails/:id",
        element:<ServiceDetails></ServiceDetails> ,
        loader:({params})=> fetch(`https://cardoctor-new.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookings",
        element:<PrivetRouts><Bookings></Bookings></PrivetRouts> ,
      },
    ],
  },
]);

export default router;
