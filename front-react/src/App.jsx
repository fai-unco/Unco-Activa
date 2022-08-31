import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import Register from 'pages/register';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import PreinscriptionForm from 'pages/PreinscriptionForm';

function App() {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route element={<PreinscriptionForm />} path='/inscribirse' />
        <Route element={<PreinscriptionForm categoriename="3k" id="1" />} path='/inscribirse/3k' />
        <Route element={<PreinscriptionForm categoriename="7k" id="2" />} path='/inscribirse/7k' />
        <Route element={<PreinscriptionForm categoriename="15k" id="3" />} path='/inscribirse/15k' />
        <Route element={<PreinscriptionForm categoriename="25k" id="4" />} path='/inscribirse/25k' />
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
