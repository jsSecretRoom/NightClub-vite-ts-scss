import { createBrowserRouter } from "react-router-dom";

//Universal
import PagesContent from "../pages/PagesContent/PagesContent";
import FuterComponent from "../components/FuterComponent/FuterComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

//SitePages
import AutorizationPage from "../pages/AutorizationPage/AutorizationPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import HomePage from "../pages/HomePage/HomePage";
import KitchenPage from "../pages/KitchenPage/KitchenPage";
import EntertainmentPage from "../pages/EntertainmentPage/EntertainmentPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <HeaderComponent/>
                <PagesContent/>
                <FuterComponent/>
            </>
        ),
        children: [
            {
                path: '/home/orderdata/:formattedDate',
                element: <HomePage/>,
            },
            {
                path: '/kitchen',
                element: <KitchenPage/>,
            },
            {
                path: '/entertainment',
                element: <EntertainmentPage/>
            }
        ]
    },
    {
        path: '/authorization',
        element: (
            <>
                <AutorizationPage/>
            </>
        )

    },
    {
        path: '/registration',
        element: (
            <>
                <RegistrationPage/>
            </>
        )
    },
    {
        path: '*',
        element: (
            <>
                <ErrorPage/>
            </>
        )
    }
])