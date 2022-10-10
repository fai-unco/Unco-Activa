import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import PreinscriptionForm from 'pages/PreinscriptionForm';
import Regulation from 'pages/Regulation';
import axios from 'axios'

function App() {
  const [categories, setcategories] = useState([])
  const endpoint = 'https://uncoactiva-back.fi.uncoma.edu.ar/api'
  useEffect(() => {
    getAllCategories()
  }, [])
  const getAllCategories = async () => {
    await axios.get(`${endpoint}/categories`)
      .then(function (response) {
        //console.log("success", response.data);
        setcategories(response.data)
      })
      .catch(function (error) {
        console.error('error', error.response);
      });
    //console.log(response.data)
  }
  return (
    <div id='top' className="antialiased">
      <Routes>
        <Route path="/" element={<Home categories={categories} setcategories={setcategories} />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        InscriptionFormModalRules
        <Route element={<PreinscriptionForm />} path='/inscribirse' />
        {categories.map( (categorie) =>  (          
          categorie.quotas > 0 ? 
            <Route
              key={categorie.id}
              element={<PreinscriptionForm categorie={categorie} />}
              path={'/inscribirse/' + categorie.name} /> : <></>      
        ))}
        <Route element={<Regulation />} path='/reglamento' />
        <Route path="*" element={<NotFoundPage />}

        />
      </Routes>
    </div>
  );
}

export default App;
