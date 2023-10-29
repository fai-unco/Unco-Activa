import { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import NotFoundPage from 'pages/404';
import PreinscriptionForm from 'pages/PreinscriptionForm';
import Regulation from 'pages/Regulation';
import Preinscription from 'pages/Preinscription';
import { CategorieContext } from 'context/CategorieContext';
import Inscriptions from 'pages/Inscriptions';
import AboutUs from 'pages/AboutUs';
import Results from 'pages/Results';
function App() {
  let categories = useContext(CategorieContext)
  categories = categories[0]  
  
  return (
    <div id='top' className="antialiased">
      <Routes>
        <Route element={<Home  />} path="/" />       
        <Route element={<Regulation />} path="/reglamento" />      
        InscriptionFormModalRules
        <Route element={<Inscriptions />} path='/participantes' />
        <Route element={<Results />} path='/resultados' />
        <Route element={<AboutUs />} path='/sobrenosotros' />
        <Route element={<Preinscription  />} path='/inscribirse' />
        {categories.map( (categorie) =>  (          
          categorie.quotas > 0 ? 
            <Route
              key={categorie.id}
              element={<PreinscriptionForm categorie={categorie} />}
              path={'/inscribirse/' + categorie.name} /> : <></>      
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
