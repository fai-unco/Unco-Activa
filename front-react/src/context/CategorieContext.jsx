import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'

export const CategorieContext = createContext();
export const useMyContext = () => useContext(CategorieContext);

const CategorieContextProvider = ({ children }) => {
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
    <CategorieContext.Provider value={[categories]}>
      {children}
    </CategorieContext.Provider>
  );
}

export default CategorieContextProvider;