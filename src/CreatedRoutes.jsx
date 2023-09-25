import { createBrowserRouter, } from "react-router-dom";
import NavBar from "./Components/nav bar/NavBar";
import Home from "./Components/Home/Home";


const CreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children: [
      {
        path: "/",
        loader:()=>fetch("data.json"),
        element: <Home></Home>,
      },
    ],
  },
]);

export default CreatedRoutes;
