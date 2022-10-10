import { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import PreinscriptionForm from 'pages/PreinscriptionForm';
import Regulation from 'pages/Regulation';
import Preinscription from 'pages/Preinscription';
import { CategorieContext } from 'context/CategorieContext';

function App() {
  let categories = useContext(CategorieContext)
  categories = categories[0]  
  
  return (
    <div id='top' className="antialiased">
      <Routes>
        <Route path="/" element={<Home  />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        InscriptionFormModalRules
        <Route element={<Preinscription categories={categories} />} path='/inscribirse' />
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
