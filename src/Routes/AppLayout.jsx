import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Outlet from "./Outlet"
import LaptopRepairPage from "../Pages/RepairPage"
import ServiceBookingForm from "../Pages/BookingForm"
import Repair from '../Pages/Repair2'
import PopUpServices from '../Components/PopUpServices'

const Home = React.lazy(() => import ('../Pages/Home'))
const Service = React.lazy(() => import ('../Pages/Service'))
const Contact = React.lazy(() => import ('../Pages/Contact'))
const Register = React.lazy(() => import ('../Pages/Register'))
const About = React.lazy(() => import ('../Pages/About'))
const ServicesPage = React.lazy(() => import ('../Components/ServicesPage'))
const Profile = React.lazy(() => import ('../Pages/Profile'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/service',
                element: <ServicesPage />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/service/*',
                element: <ServicesPage />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/book/:id',
                element: 
                <>
                    <LaptopRepairPage />
                </> 
            },
            {
                path: '/booking',
                element: <ServiceBookingForm />
            },
            {
                path: '/popular',
                element: <PopUpServices />
            }
        ]
    }
])

export default router