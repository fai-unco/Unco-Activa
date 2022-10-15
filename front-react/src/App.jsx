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
function App() {
  let categories = useContext(CategorieContext)
  categories = categories[0]  
  
  return (
    <div id='top' className="antialiased">
      <Routes>
        <Route path="/" element={<Home  />} />       
        <Route path="/reglamento" element={<Regulation />} />      
        InscriptionFormModalRules
        <Route element={<Inscriptions />} path='/participantes' />
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
