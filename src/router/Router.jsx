import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;