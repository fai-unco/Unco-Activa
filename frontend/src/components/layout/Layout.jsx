import { useState } from 'react'

import React from 'react'
import LoginForm from '../auth/LoginForm'
import RegisterForm from '../auth/RegisterForm'
import Hero from '../Hero';
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import Home from '../../Pages/home'
import Header from './Header'
import Footer from './Footer'
import PreinscriptionForm from '../../Pages/PreinscriptionForm';

const Layout = () => {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route element={<LoginForm />} path='/login'></Route>
                    <Route element={<RegisterForm />} path='/registro'></Route>
                    <Route element={<PreinscriptionForm />} path='/inscribirse' />
                    <Route element={<Home />} path='/'></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default Layout