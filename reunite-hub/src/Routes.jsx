import { createBrowserRouter } from "react-router-dom";
import Layout from "./Componenets/Layout.jsx";
import Home from "./pages/Home.jsx";
import SubmitForm from "./pages/SubmitForm.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Resources from "./pages/Resources.jsx"; 
import Error_page from "./pages/Error_page.jsx"; 
import AlertsMaps from "./pages/AlertsMaps.jsx"; 
import Login from "./pages/Login.jsx"; 
import ForgotPassword from "./pages/ForgotPassword.jsx"; 
import SignUp from "./pages/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <Error_page />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/submitform",
        element: <SubmitForm />,
      },
      {
        path: "/Volunteer",
        element: <Volunteer />,
      },
      {
        path: "/Resources",
        element: <Resources />,
      },
      {
        path: "/alertsmaps",
        element: <AlertsMaps />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
    ],
  },
]);

export default router;