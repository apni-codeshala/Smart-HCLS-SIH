import ReactDOM  from "react-dom/client";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Error from "./components/Error/Error"
import WaitingShimmer from "./components/LoadingShimmer/WaitingShimmer";
import Footer from "./components/Footer/Footer"
import Search from "./components/Search/Search";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./components/About/About";
import Contact from "./components/contact/Contact";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <WaitingShimmer />,
        children: [
            {
                path: "/",
                element: <Hero />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path:'/About',
                element:<About/>
            },
            {
                path:'/Contact',
                element:<Contact/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)