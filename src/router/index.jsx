import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";
import RootLayout from "../layouts/RootLayouts";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id"
import { PostBlog, PostById } from "../apis";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>,
                loader: PostBlog
            },
            {
                path: '/blog/:id',
                element: <Post/>,
                loader: PostById
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
]);