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

export const router = createBrowserRouter([
    {
        path: '',
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
                path: '/home',
                element: <HomePage/>,
                

            },
            {
                path: '/kitchen',
                element: (
                    <>
                        <KitchenPage/>
                    </>
                ),
                

            }
        ]
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