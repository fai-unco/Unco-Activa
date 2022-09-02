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
        <Route path='/inscribirse' element={<PreinscriptionForm />} />
        <Route path='/inscribirse/3k' element={<PreinscriptionForm categoriename="3k" id="1" />} />
        <Route path='/inscribirse/7k' element={<PreinscriptionForm categoriename="7k" id="2" />} />
        <Route path='/inscribirse/15k' element={<PreinscriptionForm categoriename="15k" id="3" />} />
        <Route path='/inscribirse/25k' element={<PreinscriptionForm categoriename="25k" id="4" />} />
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
