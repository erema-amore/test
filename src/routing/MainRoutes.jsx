import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import Imagelist from '../components/Imagelist'
import LoginPage from '../pages/LoginPage';
import Cards from '../components/Cards'
import ProfileSettings from '../burgerMenu/ProfileSettings';
import AccountPage from '../burgerMenu/AccountPage';
import AboutPage from '../pages/AboutPage'; 
import LeasingPage from '../components/credit/LeasingPage'
import CreditPage from '../components/credit/CreditPage'
import InstallmentPage from '../components/credit/InstallmentPage'





const MainRoutes = () => {
    const ROUTES = [
        {
            id: 1,
            path: '/',
            element: <HomePage />
        },
        {
            id: 2,
            path: '/register',
            element: <RegisterPage />
        },
        {
            id: 3,
            path: '/login',
            element: <LoginPage />
        },
        {
            id: 4,
            path: '/image-list',
            element: <Imagelist />
        },
        {
            id: 5,
            path: '/cards',
            element: <Cards />
        },
        {
            id: 6,
            path: '/profile-settings',
            element: <ProfileSettings />
        },
        {
            id: 7,
            path: '/account',
            element: <AccountPage />
        },
        {
            id: 8,
            path: '/about',
            element: <AboutPage />
        },
        {
            id: 8,
            path: '/leasing',
            element: <LeasingPage />
        },
        {
            id: 9,
            path: '/credit',
            element: <CreditPage />
        },
        {
            id: 10,
            path: '/installment',
            element: <InstallmentPage />
        },
        {
            id: 11,
            path: 'https://akipress.org/',
            element: <iframe src='https://akipress.org/' title="Akipress Website" />
        },
      
    ];

  return (
    <Routes>
        {ROUTES.map(route => (
            <Route key={route.id} path={route.path} element={route.element} />
        ))}
    </Routes>
  )
}

export default MainRoutes