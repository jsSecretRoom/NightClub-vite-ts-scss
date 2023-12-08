import { createBrowserRouter } from "react-router-dom";

import FuterComponent from "../components/FuterComponent/FuterComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";


import AutorizationPage from "../pages/AutorizationPage/AutorizationPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
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
        path: '/home',
        element: (
            <>
                <HeaderComponent/>
                
                <FuterComponent/>
            </>
        ), 
        children: [
            {
                path: '/home',
                element: (
                    <>
                        <HomePage/>
                    </>
                ),
                
            },
        ]
    }
])