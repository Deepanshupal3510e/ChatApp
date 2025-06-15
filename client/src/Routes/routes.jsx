import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/about";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NoContent from "../pages/NoContent";

const routes = createBrowserRouter(

 [   {
        path : "",
        element : <App />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            },
            {
                path : "*",
                element : <NoContent />
            }
        ]
    }
]

)
export default routes