import { useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from "routes/routes";
import Home from 'pages/Home/Home';
import NotFoundPage from 'pages/NotFound/NotFound';
import PreinscriptionForm from 'pages/PreinscriptionForm/PreinscriptionForm';
import Regulation from 'pages/Regulation/Regulation';
import Preinscription from 'pages/Preinscription/Preinscription';
import { CategorieContext } from 'context/CategorieContext';
import Inscriptions from 'pages/Inscriptions/Inscriptions';
import AboutUs from 'pages/AboutUs/AboutUs';
import Results from 'pages/Results/Results';

import Register from 'pages/Register/Register';

function App() {
  let categories = useContext(CategorieContext);
  categories = categories[0];
  
  const totalCupos = categories.reduce((sum, cat) => sum + cat.quotas, 0);

  return (
    <div id='top' className="antialiased">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.reglamento} element={<Regulation />} />
        <Route path={routes.participantes} element={<Inscriptions />} />
        <Route path={routes.resultados} element={<Results />} />
        <Route path={routes.sobrenosotros} element={<AboutUs />} />
        <Route path={routes.preinscribirse} element={<Preinscription />} />

        {/* <Route path={routes.register} element={<Register />} /> */}
         
        {/* Mostrar pag de inscripcion solo si la suma total de cupos disponibles es > 0*/}
        {totalCupos > 0 && categories.map((category) => (
            <Route 
              key={category.id} 
              path={`${routes.preinscribirse}/${category.name}`} 
              element={<PreinscriptionForm categorie={category} />}
            />
          ))
        }

        {/* Esto es si tenemos un cupo para cada categoria */}
        {/*
        {categories.map((category) => category.quotas > 0 ? (
          <Route
            key={category.id}
            path={`${routes.preinscribirse}/${category.name}`}
            element={<PreinscriptionForm categorie={category} />}
          />
        ) : null )}
        */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
