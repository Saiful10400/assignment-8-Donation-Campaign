import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/nav bar/NavBar";



const CreatedRoutes = createBrowserRouter([
    {
        path:"/",
        element: <NavBar></NavBar>
    }
])
 
export default CreatedRoutes;