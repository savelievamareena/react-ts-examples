import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import {
    ContactPage,
} from './ContactPage';
import { ThankYouPage } from './ThankYouPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="contact" />,
        },
        {
            path: '/contact',
            element: <ContactPage />,
        },
        {
            path: '/thank-you/:name',
            element: <ThankYouPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
