import { createBrowserRouter, } from "react-router-dom";
import NavBar from "./Components/nav bar/NavBar";
import Home from "./Components/Home/Home";
import Error from "./Components/Error";
import Page from "./Components/Home/Page"


const CreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        loader:()=>fetch("data.json"),
        element: <Home></Home>,
      },
      {
        path:"/donate/:id",
        loader:()=>fetch("../data.json"),
        element:<Page></Page>
      }
    ],
  },
]);

export default CreatedRoutes;
